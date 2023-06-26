import './progressCircle.styles.scss'

const ProgressCircle = ({ percentage, circleWidth }) => {
    const radiusValue = 30
    const dashArrays = radiusValue * Math.PI * 2
    const dashOffSet = dashArrays - (dashArrays * percentage) / 100
    return (
        <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
            <circle stroke="lightgray" cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth={"8px"} r={radiusValue} className="circle-background" />
            <circle style={{ strokeDasharray: dashArrays, strokeDashoffset: dashOffSet }} stroke="#1440a1" cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth={"8px"} r={radiusValue} className="circle-progress" />
            <text x="50%" y="50%" textAnchor="middle" dy={"0.3em"} className="circle-text">{percentage}%</text>
        </svg>
    )
}
export default ProgressCircle;