import {
    selectIsEveryTaskDone,
    selectIsThereAnyTask,
    selectHideDone,
    setAllDone,
    toggleHideDone,
    fetchExampleTasks,
} from "../tasksSlice";
import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isThereAnyTask = useSelector(selectIsThereAnyTask);

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {isThereAnyTask > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    );
};

export default Buttons;