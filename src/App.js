import "./App.css";
import { BsReceipt } from 'react-icons/bs'
import { useContext } from "react";
import { AppContext } from "./contexts/app.context";

// components
import AppHeader from "./components/header/header.component";
import ProgressBar from "./components/progressBar/progressBar.component";
import TaskContainer from "./components/taskContainer/taskContainer.component";
import tasks from "./tasks";
import TaskForm from './components/taskForm/taskForm.component'

function App() {
  const { isFormOpen } = useContext(AppContext)

  return (
    <div className="application">
      {
        isFormOpen ? <TaskForm /> : ''
      }
      <AppHeader />
      <ProgressBar tasks={tasks} />
      <div className="today-total-task"><span>You have <span>0</span> tasks for today</span><BsReceipt /></div>
      <TaskContainer tasks={tasks} />
    </div>
  )
}

export default App;
