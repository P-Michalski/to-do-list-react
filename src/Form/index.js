import { useState } from "react";
import { Button, InputBox, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm className="form" onSubmit={onFormSubmit}>
            <InputBox
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                className="form__inputBox"
                autofocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button className="form__button" type="submit">Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;