import "./App.css";
import { BsReceipt } from 'react-icons/bs'

// components
import AppHeader from "./components/header/header.component";
import ProgressBar from "./components/progressBar/progressBar.component";
import TaskContainer from "./components/taskContainer/taskContainer.component";
import TaskForm from "./components/taskForm/taskForm.component";
import tasks from "./tasks";

function App() {
  return (
    <div className="application">
      <AppHeader />
      <ProgressBar tasks={tasks} />
      <div className="today-total-task"><span>You have <span>0</span> tasks for today</span><BsReceipt /></div>
      <TaskContainer tasks={tasks} />
    </div>
  )
}

export default App;
