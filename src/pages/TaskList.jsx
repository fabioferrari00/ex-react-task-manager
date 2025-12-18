import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import TaskRow from '../components/TaskRow'

const TaskList = () => {

    const { tasks } = useContext(GlobalContext)
    console.log("tasks: ", tasks)
    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-12">
                    <h1>Lista Tasks</h1>
                </div>
            </div>
            <div className="col-12">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Stato</th>
                            <th>Data di creazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskList
