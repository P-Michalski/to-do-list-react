import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__listItem ${task.done && hideDone ? "tasks__listItem--hidden" : ""
          }`}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="tasks__button tasks__button--first"
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "tasks__listItemText--done" : ""}`}>
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="tasks__button tasks__button--last"
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
