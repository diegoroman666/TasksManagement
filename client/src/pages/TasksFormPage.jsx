import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Tarea actualizada con éxito", {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Tarea creada con éxito", {
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const {
          data: { title, description },
        } = await getTask(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title mb-4">
            {params.id ? "Editar Tarea" : "Crear Nueva Tarea"}
          </h3>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                placeholder="Título de la tarea"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <div className="invalid-feedback">El título es obligatorio</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                rows="3"
                className={`form-control ${errors.description ? "is-invalid" : ""}`}
                placeholder="Descripción de la tarea"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <div className="invalid-feedback">La descripción es obligatoria</div>
              )}
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-success">Guardar</button>

              {params.id && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={async () => {
                    const accepted = window.confirm(
                      "¿Estás seguro de que deseas eliminar esta tarea?"
                    );
                    if (accepted) {
                      await deleteTask(params.id);
                      toast.success("Tarea eliminada", {
                        position: "top-center",
                        style: {
                          borderRadius: "10px",
                          background: "#333",
                          color: "#fff",
                        },
                      });
                      navigate("/tasks");
                    }
                  }}
                >
                  Eliminar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
