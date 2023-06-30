import './taskForm.styles.scss'
import { AppContext } from "../../contexts/app.context";
import { useContext, useState, Fragment } from "react";


//components
import CustomButton from "../button/button.component";

const TaskForm = () => {
    const { tasks, setTasks, setIsFormOpen } = useContext(AppContext)
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskPriority, setTaskPriority] = useState('')


    const formSubmitHandler = (e) => {
        e.preventDefault()
        setIsFormOpen(false)
        if (!taskTitle || !taskPriority) return
        setTasks([{
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskPriority: taskPriority,
            taskID: Date.now()
        }, ...tasks])
    }

    return (
        <Fragment>
            {
                <form className="task-form" onSubmit={formSubmitHandler}>
                    <input className="task-title" onChange={(e) => setTaskTitle(e.target.value)} placeholder="Task Title" />
                    <input className="task-title" onChange={(e) => setTaskDescription(e.target.value)} placeholder="Task Description" />
                    <label style={{ color: 'white' }}>Set Priority</label>
                    <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <CustomButton className='form-submit-btn' buttonText="Add Task" />
                </form>
            }
        </Fragment>
    )
}

export default TaskForm;