import { useState, useRef, useMemo, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext";
const symbols = `"!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`


const AddTask = () => {

  const { addTask } = useContext(GlobalContext);

  const [taskTitle, setTaskTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const taskNameError = useMemo(() => {
    if (!taskTitle.trim()) {
      return "Nome task non può essere vuoto"
    }
    if ([...taskTitle].some(char => symbols.includes(char))) {
      return "Il nome della task non può contenere caratteri speciali"
    }
    return "";
  }, [taskTitle]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (taskNameError) {
      return
    }
    const newTask = {
      title: taskTitle.trim(),
      description: descriptionRef.current.value,
      status: statusRef.current.value,
    }

    try {
      await addTask(newTask)
      alert("Task creata")
      setTaskTitle("");
      descriptionRef.current.value = "";
      statusRef.current.value = "";
    } catch (err) {
      alert(err.message);
    }

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Aggiungi Tasks</h1>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label className="col-12 mb-4">
              Task:
              <input
                className="form-control"
                type="text"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
              />
            </label>
            {taskNameError &&
              <p style={{ color: 'red' }}>{taskNameError}</p>
            }
            <label className="col-12 mb-4">
              Descrizione:
              <textarea
                className="form-control"
                ref={descriptionRef}
              />
            </label>
            <label className="col-12 mb-4">
              Stato task:
              <select className="form-select" ref={statusRef} defaultValue={"To do"}>
                {["To do", "Doing", "Done"].map((value, i) => (
                  <option key={i} value={value}>{value}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn btn-success" disabled={taskNameError}>Aggiungi Task</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTask
