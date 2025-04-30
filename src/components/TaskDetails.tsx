import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { useAuth0 } from "@auth0/auth0-react";

const TaskDetails: React.FC = () => {
  const { id } = useParams();
  const { tasks, deleteTask } = useTasks();
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading task...</div>;
  if (!isAuthenticated || !user) return <div>You must be logged in to view this task.</div>;

  const task = tasks.find((t) => t.id === parseInt(id || ""));

  if (!task) return <div>Task not found.</div>;
  if (task.userId !== user.sub) return <div>⛔ You don't have access to this task.</div>;

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.completed ? "✅ Completed" : "❌ Not Completed"}</p>
      <p><strong>Assigned To:</strong> {user.email}</p>

      <button onClick={() => navigate(`/tasks/${task.id}`)}>✏️ Edit Task</button>
      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>🗑️ Delete Task</button>
    </div>
  );
};

export default TaskDetails;
