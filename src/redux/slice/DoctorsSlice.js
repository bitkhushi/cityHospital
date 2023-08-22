import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getDoctorData } from "../../admin/Common/Apis/Medicines.api"




const initstate = {

    loading: false,
    doctors: [],
    error: null

}

export const  getdoctors = createAsyncThunk(
    'Doctors / getDoctors',
    async () => {
        const response = await getDoctorData()

        console.log(response)

        return response.data;
    }
)

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState: initstate,

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getdoctors.fulfilled, (state, action) => {
            
            state.doctors=action.payload;
            state.loading=false;
            state.error=null;
        })

    }
})


export default doctorsSlice.reducer;

