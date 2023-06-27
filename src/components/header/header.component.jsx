import './header.styles.scss'
import { BsPlus } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";

// components
import UserAvatar from "../avatar/avatar.component"
import CustomButton from "../button/button.component"

const AppHeader = () => {
    const { setIsFormOpen } = useContext(AppContext)

    const styleBtn = { backgroundColor: 'red', color: 'white', fontSize: '2rem', padding: '.5rem' }
    return (
        <div className="navbar">
            <UserAvatar altType={'user icon'} ImgSRC={'https://images.unsplash.com/photo-1553710846-a739f3a2b037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80https://images.unsplash.com/photo-1553710846-a739f3a2b037?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'} />
            <h1 className="logo"><span>Timely Task Manager</span><span>Developed By Rehman Tyagi</span></h1>
            <CustomButton onClick={() => setIsFormOpen(true)} className='hamburger-btn' buttonStyle={styleBtn} buttonText={<BsPlus />} />
        </div>
    )
}

export default AppHeader