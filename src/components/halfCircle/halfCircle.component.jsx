import './halfCircle.styles.scss'

const HalfCircle = ({ isCircleFlip, priority }) => {
    return <svg width={150} height={150} className={`half-circle ${isCircleFlip} ${priority}`} >
        <circle fill="none" strokeWidth={'30px'} r={60} cx={75} cy={75} />
    </svg>
}

export default HalfCircle;