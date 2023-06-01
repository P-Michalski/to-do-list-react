import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Main from "../../../common/Main";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Main>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section 
          title="Wyszukiwarka"
          body={<Search />}
        />
        <Section
          title="Lista zadań"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />
      </Main>
    </Container>
  );
}

export default TasksPage;
