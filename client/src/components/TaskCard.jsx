import { useNavigate } from "react-router-dom";

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
