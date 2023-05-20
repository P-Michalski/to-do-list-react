import { useState, useRef } from "react";
import { Button, InputBox, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm className="form" onSubmit={onFormSubmit}>
            <InputBox
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                className="form__inputBox"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <Button className="form__button" type="submit">Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;