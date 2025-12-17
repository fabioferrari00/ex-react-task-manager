import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

const TaskList = () => {

    const {tasks} = useContext(GlobalContext)
    console.log("tasks: ", tasks)
  return (
    <div className="container">
        <div className="row d-flex">
            <div className="col-12">
                <h1>Lista Tasks</h1>
            </div>
        </div>
        <div className="col-12">
            {tasks.map((task)=>{
                return (
                    <>
                        <p><strong>TASK:</strong> {task.title}</p>
                        <p><strong>COSA FARE:</strong> {task.description}</p>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default TaskList
