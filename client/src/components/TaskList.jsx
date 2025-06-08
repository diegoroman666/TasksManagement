import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-4 mb-4" key={task.id}>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}
