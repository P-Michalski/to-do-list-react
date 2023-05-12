import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text" placeholder="Co jest do zrobienia?" className="form__inputBox" autofocus />
        <button className="form__button" type="submit">Dodaj zadanie</button>
    </form>
);

export default Form;