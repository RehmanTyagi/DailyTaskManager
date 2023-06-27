import './button.styles.scss'

const CustomButton = ({ className, buttonText, buttonStyle, onClick }) => {
    return <button onClick={onClick} style={buttonStyle} className={`custom-btn ${className}`}>{buttonText}</button>
}

export default CustomButton;