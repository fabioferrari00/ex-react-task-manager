import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Modal from "../components/Modal"
import EditTaskModal from "../components/EditTaskModal"

const DetailTask = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { tasks, removeTask, updateTask } = useContext(GlobalContext)

    const task = tasks.find(item => item.id === parseInt(id))

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    if (!task) {
        return (<span className="text-center fs-2" style={{ color: 'red' }}>Task non trovata</span>)
    }

    const handleDelete = async () => {
        try {
            await removeTask(task.id);
            console.log(`Task con id ${id} eliminata con successo`)
            navigate("/")
        } catch (err) {
            alert(err.message)
        }
    }

    const handleUpdate = async updatedTask => {
        try {
            await updateTask(updatedTask)
            setShowEditModal(false)
        } catch (err) {
            console.error(err)
            alert(err.message)
        }
    }

    return (
        <div className="card text-center">
            <h1 className="text-center my-3">DETTAGLIO TASK:</h1>
            <div className="card-header fs-2">
                {task.title}
            </div>
            <div className="card-body">
                <p className="card-text"><strong>Descrizione: </strong>{task.description}</p>
                <p className="text-center"><strong>Stato: </strong>{task.status}</p>
                <button onClick={() => setShowModal(true)} className="btn btn-danger me-3">Elimina task</button>
                <button onClick={() => setShowEditModal(true)} className="btn btn-warning">Modifica task</button>
                <Modal
                    title="Conferma eliminazione"
                    content="Sei sicuro di voler eliminare la task?"
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    onConfirm={handleDelete}
                    confirmText="Elimina!"
                />
                <EditTaskModal
                    task={task}
                    show={showEditModal}
                    onClose={() => setShowEditModal(false)}
                    onSave={handleUpdate}

                />
            </div>
            <div className="card-footer text-body-secondary">
                <strong>Data di creazione: </strong>{new Date(task.createdAt).toLocaleDateString()}
            </div>
        </div>
    )
}

export default DetailTask
