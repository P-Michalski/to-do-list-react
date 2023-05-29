import { selectIsEveryTaskDone, selectIsThereAnyTask, selectHideDone ,setAllDone, toggleHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isThereAnyTask = useSelector(selectIsThereAnyTask);

    return (
        isThereAnyTask > 0 && (
            <StyledButtons>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={isEveryTaskDone}
                    onClick={() => dispatch(setAllDone())}
                >
                    Ukończ wszystkie
                </Button>
            </StyledButtons>
        )
    );
};

export default Buttons;