import './avatar.styles.scss'

const UserAvatar = ({ altType, ImgSRC }) => {
    return <img className="avatar" src={ImgSRC} alt={altType} />
}

export default UserAvatar;