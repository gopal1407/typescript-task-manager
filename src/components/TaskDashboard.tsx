import React from "react";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const TaskDashboard: React.FC = () => {
  const { tasks, deleteTask } = useTasks();
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading tasks...</div>;
  if (!isAuthenticated || !user) return <div>You must be logged in to view tasks.</div>;

  // Filter only the tasks that belong to the current user
  const userTasks = tasks.filter(task => task.userId === user.sub);

  return (
    <div>
      <h2>My Tasks</h2>
      <button onClick={() => navigate("/tasks/new")}>➕ Create New Task</button>

      {userTasks.length === 0 ? (
        <p>No tasks found. Create one!</p>
      ) : (
        <ul>
          {userTasks.map((task) => (
            <li key={task.id} style={{ marginBottom: "12px" }}>
              <strong>{task.title}</strong> <br />
              <em>{task.description}</em> <br />
              <span>Status: {task.completed ? "✅ Done" : "❌ Pending"}</span> <br />
              <button onClick={() => navigate(`/tasks/edit/${task.id}`)}>✏️ Edit</button>
              <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>🗑️ Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskDashboard;
