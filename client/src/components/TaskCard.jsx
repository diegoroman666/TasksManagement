import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="card shadow-sm h-100 cursor-pointer"
      role="button"
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
      </div>
    </div>
  );
}
=======
export function TaskCard ({ task }) {
  const navigate = useNavigate();
    
  return (
    <div 
      style={{background: "white"}}
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >  
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <hr />
    </div>
  );
}
>>>>>>> 0325d6e351d0f8afd8141d3e15c954cbd6afbdcf
