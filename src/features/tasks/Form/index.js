import { useState, useRef } from "react";
import { Button, InputBox, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if (newTaskContent.trim() !== "") {
            addNewTask(newTaskContent.trim());
        }

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <InputBox
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <Button type="submit">Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;