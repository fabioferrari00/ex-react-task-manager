import { useEffect, useState } from "react";
const { VITE_URL } = import.meta.env;

export default function useTasks() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch(`${VITE_URL}/tasks`).then(res => res.json()).then(data => setTasks(data)).catch(err => console.error(err))
  }, []);

  const addTask = (newTask) => {

  }
  const removeTask = (taskId) => {

  }
  const updateTask = () => {

  }

  return { tasks, addTask, removeTask, updateTask }
}
