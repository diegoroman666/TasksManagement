import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid">
        <Link to="/tasks" className="navbar-brand">
          Task App
        </Link>
        <div className="d-flex">
          <Link to="/tasks-create" className="btn btn-outline-light ms-2">
            Create Task
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
