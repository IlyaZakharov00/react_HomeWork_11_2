import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../../store/slices/UserPhotoSlice";
import { UserPhotoItem } from "../UserPhotoItem/UserPhotoItem";
import './UserPhoto.css'

export const UserPhoto = () => {

    const { photos } = useSelector((state: any) => state.userPhotoReducer);
    const dispatch = useDispatch()

    const createPhotoURL = (file: File) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            dispatch(addPhoto(reader.result))
        }
    }

    const hendlerChange = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement
        if (input.files?.length == undefined) return;
        createPhotoURL(input.files[0])
    }

    return (
        <>
            <form className="form-change-photo" >
                <input type="file" accept="image/*, .png, .jpg, .gif, .web" onChange={hendlerChange} className="input-user-photo"></input>
            </form>

            {photos.length == 0 ? null :
                <ul className="user-photos-list">{
                    photos.map((item: string, index: number) => {
                        return <UserPhotoItem key={index} info={item} />
                    })}
                </ul>}
        </>
    )
}
