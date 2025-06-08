<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect, useState  } from "react";
>>>>>>> 0325d6e351d0f8afd8141d3e15c954cbd6afbdcf
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
<<<<<<< HEAD
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
=======
    const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    async function loadTasks(){
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();   
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
    ))}
    </div>) ;
}
>>>>>>> 0325d6e351d0f8afd8141d3e15c954cbd6afbdcf
