import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


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
            console.log(data);
            const docRef = await addDoc(collection(db, "apt"), data);
            console.log("Document written with ID: ", docRef.id);
            return { id: docRef.id, ...data }
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
)
export const Deleteapt = createAsyncThunk(
    // 'Doctors / deleteDoctors',
    // async (id) => {
    //     await DeleteDoctorData(id)
    //     return id;
    // }
)
export const Updateapt = createAsyncThunk(
    // 'Doctors / updateDoctors',
    // async (data) => {
    //     const response = await UpdateDotorcData(data)
    //     return response.data;
    // }
)

const handleLoading = (state) => {
    state.loading = true;
    state.error = null;
}

const handleError = (state, action) => {
    console.log(action.error.message);
    state.loading = false;
    state.error = action.error.message;
}


// export const aptSlice = createSlice({
//     name: 'apt',
//     initialState: initstate,

//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(getapt.pending, handleLoading)
//         builder.addCase(getapt.fulfilled, (state, action) => {
//             console.log(action);
//             state.apt = action.payload;
//             state.loading = false;
//             state.error = null;
//         })
//         builder.addCase(getapt.rejected, handleError)
//         builder.addCase(Addapt.pending, handleLoading)
//         builder.addCase(Addapt.fulfilled, (state, action) => {

//             state.apt = state.apt.concat(action.payload);
//             state.loading = false;
//             state.error = null;
//         })
//         builder.addCase(Addapt.rejected, handleError)
//         builder.addCase(Deleteapt.fulfilled, (state, action) => {

//             state.apt = state.apt.filter((v) => v.id !== action.payload)
//             state.loading = false;
//             state.error = null;
//         })
//         builder.addCase(Updateapt.fulfilled, (state, action) => {

//             state.apt = state.apt.map((v) => {
//                 if (v.id === action.payload.id) {
//                     return action.payload;
//                 } else {
//                     return v;
//                 }
//             })
//             state.loading = false;
//             state.error = null;
//         })

//     }
// })

export const aptSlice = createSlice({
    name: 'apt',
    initialState: initstate,
    reducers: {
        // Define your synchronous reducers here if needed
        // For example:
        // updateApt: (state, action) => { ... }
    },
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
        // Add other action reducers as needed here
        // .addCase(Deleteapt.fulfilled, (state, action) => {
        //     state.apt = state.apt.filter((v) => v.id !== action.payload);
        //     state.loading = false;
        //     state.error = null;
        // })
        // .addCase(Updateapt.fulfilled, (state, action) => {
        //     state.apt = state.apt.map((v) => {
        //         if (v.id === action.payload.id) {
        //             return action.payload;
        //         } else {
        //             return v;
        //         }
        //     });
        //     state.loading = false;
        //     state.error = null;
        // });
    },
});


// export default aptSlice.reducer;
export default aptSlice.reducer;

