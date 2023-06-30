import './taskContainer.styles.scss'
import { AppContext } from "../../contexts/app.context";
import { useContext } from "react";
//components
import Task from "../task/task.component";

const TaskContainer = () => {
    const { tasks } = useContext(AppContext)
    return (
        <div className="tasks-container">
            {
                tasks.map((task, index) => <Task taskID={task.taskID} isCircleFlip={index % 2 === 0 ? 'circle-flip' : ''} key={index} title={task.taskTitle} description={task.taskDescription} priority={task.taskPriority} />)
            }
        </div>
    )
}

export default TaskContainer;