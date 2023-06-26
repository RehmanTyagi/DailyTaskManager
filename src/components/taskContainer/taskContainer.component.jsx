import './taskContainer.styles.scss'

//components
import Task from "../task/task.component";

const TaskContainer = ({ tasks }) => {
    return (
        <div className="tasks-container">
            {
                tasks.map((task, index) => <Task isCircleFlip={index % 2 === 0 ? 'circle-flip' : ''} key={index} title={task.title} description={task.description} priority={task.priority} />)
            }
        </div>
    )
}

export default TaskContainer;