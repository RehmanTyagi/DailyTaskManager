import './task.styles.scss'

//components
import HalfCircle from "../halfCircle/halfCircle.component";

const Task = ({ title, description, priority, isCircleFlip }) => {
    const circleColor = () => {
        switch (priority) {
            case "high": return 'high-circle';
            case "low": return 'low-circle';
            case "medium": return 'medium-circle'
            default:
        }
    }
    return (
        <div className={`task-card ${priority}`}>
            <p className="task-title">{title}</p>
            <p className="task-description">{description}</p>
            <p className="task-importance">Priority: <span>{priority}</span></p>
            <HalfCircle priority={circleColor()} isCircleFlip={isCircleFlip} />
        </div>
    )
}


export default Task;