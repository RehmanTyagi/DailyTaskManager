import './task.styles.scss'
import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
//components
import HalfCircle from "../halfCircle/halfCircle.component";

const Task = ({ title, description, priority, isCircleFlip, taskID }) => {

    const { tasks, setTasks } = useContext(AppContext)

    // circle color on card
    const circleColor = () => {
        switch (priority) {
            case "high": return 'high-circle';
            case "low": return 'low-circle';
            case "medium": return 'medium-circle'
            default:
        }
    }

    const handleTaskDelete = (e, id) => {
        if (e.target.classList.contains('task-card')) {
            e.target.classList.add('deleteAnimation')
            setTimeout(() => {
                setTasks(tasks.filter(task => task.taskID !== id))
            }, 500);
        }
    }

    return (
        <div onTouchMove={(e) => handleTaskDelete(e, taskID)} className={`task-card ${priority}`}>
            <p className="task-title">{title}</p>
            <p className="task-description">{description}</p>
            <p className="task-importance">Priority: <span>{priority}</span></p>
            <HalfCircle priority={circleColor()} isCircleFlip={isCircleFlip} />
        </div>
    )
}


export default Task;