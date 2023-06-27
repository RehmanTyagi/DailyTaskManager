import { createContext, useState } from "react";

export const AppContext = createContext([])

export const AppContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false)
    const value = { tasks, setTasks, isFormOpen, setIsFormOpen }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}