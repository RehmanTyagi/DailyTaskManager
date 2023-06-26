import './button.styles.scss'

const CustomButton = ({ className, buttonText, buttonStyle }) => {
    return <button style={buttonStyle} className={`custom-btn ${className}`}>{buttonText}</button>
}

export default CustomButton;