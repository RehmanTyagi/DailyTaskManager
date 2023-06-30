import './progressBar.styles.scss'
import { BsGraphUpArrow } from 'react-icons/bs'
// import { useEffect, useState } from "react"

// components
import ProgressCircle from '../progressCircle/progressCircle.component'

const ProgressBar = ({ tasks }) => {
    const DailyTotalTasks = tasks.map(task => task).length
    const progressPercentage = DailyTotalTasks / DailyTotalTasks * 100
    console.log(DailyTotalTasks, progressPercentage)

    return (
        <div className="progress-container">
            <ProgressCircle percentage={!progressPercentage ? 0 : progressPercentage} circleWidth='80' />
            <div className="total-task-counter">
                <p>Today's Progress</p>
                <div><span>Total Task: </span><span>{tasks.length}</span></div>
            </div>
            <BsGraphUpArrow className="progress-graph-icon" />
        </div>
    )
}

export default ProgressBar;