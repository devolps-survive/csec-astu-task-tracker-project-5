import Header from "../components/Header";
import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();

  const completed = tasks.filter((t) => t.completed).length;

  return (
    <>
      <Header />
      <h2>Stats</h2>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {tasks.length - completed}</p>
    </>
  );
};

export default Stats;
