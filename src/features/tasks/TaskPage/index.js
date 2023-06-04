import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Main from "../../../common/Main";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Wrapper } from "../../../common/Wrapper/styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Main>
                <Section
                    title={task ? task.content : "Nie znaleziono takiego zadania"}
                    body={!!task && (
                        <Wrapper>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </Wrapper>
                    )}
                />
            </Main>
        </Container>
    );
}

export default TaskPage;
