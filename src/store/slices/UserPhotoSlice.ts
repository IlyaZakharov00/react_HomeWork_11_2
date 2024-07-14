import { createSlice } from "@reduxjs/toolkit"

export interface IUserPhoto {
    photos: string[];
}

const initialState: IUserPhoto = {
    photos: []
}

export const userPhotoSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        addPhoto:(state, action)=>{
            state.photos.push(action.payload)
        }
    }
})

export const {addPhoto} = userPhotoSlice.actions
export default userPhotoSlice.reducer