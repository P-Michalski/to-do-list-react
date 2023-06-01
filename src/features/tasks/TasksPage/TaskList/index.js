import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { Button, Content, Item, List } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            toggleDone
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>
              {task.content}
            </Link>
          </Content>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            remove
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
