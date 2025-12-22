import { useEffect, useState } from "react";
const { VITE_URL } = import.meta.env;

export default function useTasks() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch(`${VITE_URL}/tasks`).then(res => res.json()).then(data => setTasks(data)).catch(err => console.error(err))
  }, []);

  const addTask = async newTask => {
    const res = await fetch(`${VITE_URL}/tasks`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
    })
    const { success, message, task } = await res.json()
    if (!success) {
      throw new Error(message)
    }
    setTasks(prev => [...prev, task])
  }
  const removeTask = async (taskId) => {
    const res = await fetch(`${VITE_URL}/tasks/${taskId}`, {
      method: 'DELETE'
    })
    const { success, message } = await res.json()
    if (!success) {
      throw new Error(message)
    }
    setTasks(prev => prev.filter(t => t.id !== taskId))
  }
  const updateTask = async (updatedTask) => {

    const res = await fetch(`${VITE_URL}/tasks/${updatedTask.id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask)
    })

    const { success, message, task: newTask } = await res.json()
    if (!success) {
      throw new Error(message)
    }

    setTasks(prev => prev.map(oldTask => oldTask.id === newTask.id ? newTask : oldTask))

  }

  return { tasks, addTask, removeTask, updateTask }
}
