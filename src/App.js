import "./App.css";
import { BsReceipt } from 'react-icons/bs'
import { useContext } from "react";
import { AppContext } from "./contexts/app.context";

// components
import AppHeader from "./components/header/header.component";
import ProgressBar from "./components/progressBar/progressBar.component";
import TaskContainer from "./components/taskContainer/taskContainer.component";
import TaskForm from './components/taskForm/taskForm.component'

function App() {
  const { isFormOpen, tasks } = useContext(AppContext)

  return (
    <div className="application">
      {
        isFormOpen ? <TaskForm /> : ''
      }
      <AppHeader />
      <ProgressBar tasks={tasks} />
      <div className="today-total-task"><span>You have <span>{tasks.length}</span> tasks for today</span><BsReceipt /></div>
      <TaskContainer tasks={tasks} />
    </div>
  )
}

export default App;
