import { useState } from "react";
import { useTasks } from "../store/taskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { tasks, setTasks } = useTasks();

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([...tasks, { id: Date.now(), text, completed: false }]);

    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        id="input"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask} id="add">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
