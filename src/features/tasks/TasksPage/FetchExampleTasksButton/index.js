import { fetchExampleTasks } from "../../tasksSlice";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../tasksSlice";

export const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    );

};