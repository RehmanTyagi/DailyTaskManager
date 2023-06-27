import './progressBar.styles.scss'
import { BsGraphUpArrow } from 'react-icons/bs'
import { useEffect, useState } from "react"

// components
import ProgressCircle from '../progressCircle/progressCircle.component'

const ProgressBar = ({ tasks }) => {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setPercentage(tasks.length ? 100 : (tasks.length * 10))
    }, [percentage, tasks])
    return (
        <div className="progress-container">
            <ProgressCircle percentage={percentage} circleWidth='80' />
            <div className="total-task-counter">
                <p>Today's Progress</p>
                <div><span>Total Task: </span><span>{tasks.length}</span></div>
            </div>
            <BsGraphUpArrow className="progress-graph-icon" />
        </div>
    )
}

export default ProgressBar;