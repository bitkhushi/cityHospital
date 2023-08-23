import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AddDoctorData, DeleteDoctorData, UpdateDotorcData, getDoctorData } from "../../admin/Common/Apis/Medicines.api"

const initstate = {

    loading: false,
    doctors: [],
    error: null

}

export const getdoctors = createAsyncThunk(
    'Doctors / getDoctors',
    async () => {
        const response = await getDoctorData()
        return response.data;
    }
)
export const Adddoctors = createAsyncThunk(
    'Doctors / AddDoctors',
    async (data) => {
        const response = await AddDoctorData(data)
        return response.data;
    }
)
export const Deletedoctors = createAsyncThunk(
    'Doctors / deleteDoctors',
    async (id) => {
        await DeleteDoctorData(id)
        return id;
    }
)
export const Updatedoctors = createAsyncThunk(
    'Doctors / updateDoctors',
    async (data) => {
        const response = await UpdateDotorcData(data)
        return response.data;
    }
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


export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState: initstate,

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getdoctors.pending, handleLoading)
        builder.addCase(getdoctors.fulfilled, (state, action) => {
            console.log(action);
            state.doctors = action.payload;
            state.loading = false;
            state.error = null;
        })
        builder.addCase(getdoctors.rejected, handleError)
        builder.addCase(Adddoctors.pending, handleLoading)
        builder.addCase(Adddoctors.fulfilled, (state, action) => {

            state.doctors = state.doctors.concat(action.payload);
            state.loading = false;
            state.error = null;
        })
        builder.addCase(Adddoctors.rejected, handleError)
        builder.addCase(Deletedoctors.fulfilled, (state, action) => {

            state.doctors = state.doctors.filter((v) => v.id !== action.payload)
            state.loading = false;
            state.error = null;
        })
        builder.addCase(Updatedoctors.fulfilled, (state, action) => {

            state.doctors = state.doctors.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload;
                } else {
                    return v;
                }
            })
            state.loading = false;
            state.error = null;
        })

    }
})


export default doctorsSlice.reducer;

