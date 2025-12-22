import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {

  const statusClass = task.status.replace(" ", "").toLowerCase();

  return (
    <tr>
      <td><Link className="task-title" to={`/task/${task.id}`}>{task.title}</Link></td>
      <td className={statusClass}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  )
})

export default TaskRow

