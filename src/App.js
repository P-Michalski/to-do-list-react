import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import Main from "./Main";

const tasks = [
  { id: 1, content: "zjeść kebaba", done: false },
  { id: 2, content: "zrobić to zadanie", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Main>
        <Section
          title="Dodaj nowe zadanie"
          body={
            <Form />
          }
        />
        <Section
          title="Lista zadań"
          body={
            <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
          extraHeaderContent={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
        />
      </Main>
    </Container>
  );
}

export default App;
