import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import DefaultLayout from "./layouts/DefaultLayout"
import { GlobalProvider } from "./contexts/GlobalContext"
import DetailTask from "./pages/DetailTask"

function App() {

  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<TaskList/>}/>
            <Route path="/addTask" element={<AddTask/>}/>
            <Route path="/task/:id" element={<DetailTask/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App
