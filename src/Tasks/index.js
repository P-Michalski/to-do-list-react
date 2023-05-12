import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__listItem ${
                    task.done && hideDoneTasks 
                    ? "tasks__listItem--hidden" 
                    : ""}`}
            >
                <button className="tasks__button tasks__button--first">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "tasks__listItemText--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--last">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;