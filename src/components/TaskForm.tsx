import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { Task } from "../interfaces/Task";
import { useAuth0 } from "@auth0/auth0-react";

const TaskForm: React.FC = () => {
  const { tasks, addTask, updateTask } = useTasks();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth0();

  const [task, setTask] = useState<Task>({
    id: Date.now(),
    title: "",
    description: "",
    completed: false,
    userId: user?.sub || "", // Link task to the current Auth0 user
  });

  // If editing, load the task
  useEffect(() => {
    if (id) {
      const foundTask = tasks.find((t) => t.id === parseInt(id));
      if (foundTask) {
        setTask(foundTask);
      }
    }
  }, [id, tasks]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!task.title || !task.description) return;

    if (id) {
      updateTask(task);
    } else {
      const newTask = {
        ...task,
        id: Date.now(),
        userId: user?.sub || "", // ensure userId is set on new task
      };
      addTask(newTask);
    }

    navigate("/");
  };

  return (
    <div>
      <h2>{id ? "Edit Task" : "New Task"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">{id ? "Update" : "Create"} Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
