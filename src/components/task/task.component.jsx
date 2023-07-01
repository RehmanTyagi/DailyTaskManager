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
        if (e.target.parentNode.classList.contains('task-card')) {
            e.target.parentNode.classList.add('deleteAnimation')
            setTimeout(() => {
                setTasks(tasks.map(task => task.taskID === id ? { isCompleted: true, ...task } : task))
                e.target.parentNode.style.display = 'none'
            }, 400);
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