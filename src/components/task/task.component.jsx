import './task.styles.scss'
import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
//components
import HalfCircle from "../halfCircle/halfCircle.component";

const Task = ({ title, description, priority, isCircleFlip, taskID }) => {

    // tasks coming from AppContext file
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

    // on touch drag the selected item will be deleted from tasks array
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.taskID !== id))
    }

    return (
        <div onTouchStart={() => handleDeleteTask(taskID)} className={`task-card ${priority}`}>
            <p className="task-title">{title}</p>
            <p className="task-description">{description}</p>
            <p className="task-importance">Priority: <span>{priority}</span></p>
            <HalfCircle priority={circleColor()} isCircleFlip={isCircleFlip} />
        </div>
    )
}


export default Task;