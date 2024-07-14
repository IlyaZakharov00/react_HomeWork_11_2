import './UserPhotoItem.css'

interface IProps {
    info: string
}

export const UserPhotoItem = (props: IProps) => {
    return (
        <img src={props.info} alt="user-photo" className="user-photo-item"></img>
    )
}
