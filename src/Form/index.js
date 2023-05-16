import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                className="form__inputBox"
                autofocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button" type="submit">Dodaj zadanie</button>
        </form>
    );
};

export default Form;