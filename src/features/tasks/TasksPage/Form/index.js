import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, StyledForm } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import InputBox from "../../InputBox";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() !== "") {
            dispatch(addTask({
                content: newTaskContent.trim(),
                done: false,
                id: nanoid(),
            }));
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