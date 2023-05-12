import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__heading">{title}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;