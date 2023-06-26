import './taskForm.styles.scss'

//components
import CustomButton from "../button/button.component";

const TaskForm = () => {
    return (
        <div>
            <form className="task-form">
                <input className="task-title" placeholder="Task Title" />
                <input className="task-title" placeholder="Task Description" />
                <select>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
                <CustomButton className='form-submit-btn' buttonText="Add Task" />
            </form>
        </div>
    )
}

export default TaskForm;