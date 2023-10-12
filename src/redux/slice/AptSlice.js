import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";


const initstate = {

    loading: false,
    apt: [],
    error: null

}

export const getapt = createAsyncThunk(
    'apt / Getapt',
    async () => {
        try {
            const data = []
            const querySnapshot = await getDocs(collection(db, "apt"));
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() })
            });
            console.log(data);
            return data;

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)
export const Addapt = createAsyncThunk(

    'apt/Addapt',
    async (data) => {
        try {
            const fileName = Math.floor(Math.random() * 1000) + "_" + data.pre.name
            const storageRef = ref(storage, 'apt/' + fileName);

            const rdata = {}

            await uploadBytes(storageRef, data.pre).then(async (snapshot) => {
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "apt"), { ...data, "pre": url, "file_Name": fileName });
                        rdata = { id: docRef.id, ...data, "pre": url, "file_Name": fileName }

                    })
            });
        } catch (e) {
            console.error("Error updating document: ", e);
            throw e;
        }
    }
    // async (data) => {
    //     try {
    //         console.log(data);
    //         const docRef = await addDoc(collection(db, "apt"), data);
    //         console.log("Document written with ID: ", docRef.id);
    //         return { id: docRef.id, ...data }
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //     }

    // }
)
export const Deleteapt = createAsyncThunk(
    'apt/Deleteapt',
    async (data) => {



        try {
            const desertRef = ref(storage, 'apt/' + data.file_Name);
            await deleteObject(desertRef).then(async () => {
                await deleteDoc(doc(db, "apt", data.id));
                console.log("delete sucessfull");

            })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
            return data.id;

        } catch (e) {
            console.error("Error adding document: ", e);
        }



    }
)
export const Updateapt = createAsyncThunk(
    'Apt/Updateapt',
    async (values) => {
        try {
            if (typeof values.pre === 'string') {
                const aptDocRef = doc(db, "apt", values.id);

                await updateDoc(aptDocRef, values);
                console.log('Update successful');
            } else {
                const rdata = {}
                const desertRef = ref(storage, 'apt/' + values.file_Name);

                await deleteObject(desertRef).then(async () => {
                    console.log("old image delete");

                    const fileName = Math.floor(Math.random() * 1000) + "_" + values.pre.name
                    const storageRef = ref(storage, 'apt/' + fileName);

                    await uploadBytes(storageRef, values.pre).then(async (snapshot) => {
                        await getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                console.log("new image upload");

                                const aptDocRef = doc(db, "apt", values.id);

                                await updateDoc(aptDocRef, { ...values, "pre": url, "file_Name": fileName });

                                rdata = { ...values, "pre": url, "file_Name": fileName }

                            })
                    });
                })

                return rdata;
            }

            return values;
        } catch (e) {
            console.error("Error updating document: ", e);
            throw e;
        }

    }
);

const handleLoading = (state) => {
    state.loading = true;
    state.error = null;
}

const handleError = (state, action) => {
    console.log(action.error.message);
    state.loading = false;
    state.error = action.error.message;
}



export const aptSlice = createSlice({
    name: 'apt',
    initialState: initstate,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getapt.pending, handleLoading)
            .addCase(getapt.fulfilled, (state, action) => {
                state.apt = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getapt.rejected, handleError)

            .addCase(Addapt.pending, handleLoading)
            .addCase(Addapt.fulfilled, (state, action) => {
                state.apt = state.apt.concat(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(Addapt.rejected, handleError)

            .addCase(Deleteapt.pending, handleLoading)
            .addCase(Deleteapt.fulfilled, (state, action) => {
                state.apt = state.apt.filter((v) => v.id !== action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(Deleteapt.rejected, handleError)

            .addCase(Updateapt.pending, handleLoading)
            .addCase(Updateapt.fulfilled, (state, action) => {
                state.apt = state.apt.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return v;
                    }
                })
                // .addCase(Updateapt.rejected, handleError);


                state.loading = false;
                state.error = null;
            });
    },
});


// export default aptSlice.reducer;
export default aptSlice.reducer;

