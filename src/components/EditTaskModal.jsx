import { useState, useRef } from "react"
import Modal from "../components/Modal"


const EditTaskModal = ({ show, onClose, task, onSave }) => {

  const [editedTask, setEditedTask] = useState(task)
  const editFormRef = useRef()

  const changeEditedTask = (key, event) => {
    setEditedTask(prev => ({ ...prev, [key]: event.target.value }))
  }

  const { title, description, status } = editedTask

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(editedTask)
  }

  return (
    <Modal
      title="Modifica Task"
      content={
        <form ref={editFormRef}
          className="d-flex flex-column"
          onSubmit={handleSubmit}>
          <label className="mb-4">
            Nome task:
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={e => changeEditedTask('title', e)}
            />
          </label>
          <label className="mb-4">
            Descrizione:
            <textarea
              className="form-control"
              value={description}
              onChange={e => changeEditedTask('description', e)}
            ></textarea>
          </label>
          <label className="mb-4">
            Stato:
            <select
              className="form-select"
              value={status}
              onChange={e => changeEditedTask('status', e)}
            >
              {["To do", "Doing", "Done"].map((value, i) => (
                <option key={i} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>

        </form>
      }
      confirmedText="Salva"
      show={show}
      onClose={onClose}
      onConfirm={() => editFormRef.current.requestSubmit()}
    />
  )
}

export default EditTaskModal
