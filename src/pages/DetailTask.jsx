import { useParams } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const DetailTask = () => {

    const {id} = useParams()
    const {tasks} = useContext(GlobalContext)

    const task = tasks.find(item => item.id === parseInt(id))

    if(!task){
        return (<span className="text-center fs-2" style={{color:'red'}}>Task non trovata</span>)
    }

    const handleDelete = (id) => {
        console.log(`Task con id ${task.id} eliminata con successo`)
    }

  return (
    <div className="card text-center">
        <h1 className="text-center my-3">DETTAGLIO TASK:</h1>
        <div className="card-header">
            {task.title}
        </div>
        <div className="card-body">
            <p className="card-text"><strong>Descrizione: </strong>{task.description}</p>
            <button onClick={handleDelete} className="btn btn-danger">Elimina</button>
        </div>
        <div className="card-footer text-body-secondary">
            {new Date(task.createdAt).toLocaleDateString()}
        </div>
    </div>
  )
}

export default DetailTask
