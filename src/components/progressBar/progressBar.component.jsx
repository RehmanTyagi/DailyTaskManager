import './progressBar.styles.scss'
import { BsGraphUpArrow } from 'react-icons/bs'
// import { useEffect, useState } from "react"

// components
import ProgressCircle from '../progressCircle/progressCircle.component'

const ProgressBar = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.isCompleted)
    const progressPercentage = Math.round(completedTasks.length / tasks.length * 100)
    return (
        <div className="progress-container">
            <ProgressCircle percentage={!progressPercentage ? 0 : progressPercentage} circleWidth='80' />
            <div className="total-task-counter">
                <p>Today's Progress</p>
                {
                    //<div><span>Total Task: </span><span>{tasks.length}</span></div>
                }
            </div>
            <BsGraphUpArrow className="progress-graph-icon" />
        </div>
    )
}

export default ProgressBar;