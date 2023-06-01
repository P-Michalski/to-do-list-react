import Container from "../../common/Container";
import Header from "../../common/Header";
import Main from "../../common/Main";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Main>
            <Section
                title="Piotr Michalski"
                body={
                    <p>
                        Nazywam się Piotr, jestem 19-letnim młodzieńcem, który kocha uczyć się nowych umiejętności.
                        Zrezygnowałem ze studiów z wielu czynników, które miały znaczący wpływ na moją psychikę. Borykałem się z
                        depresją, jednak w ostatnim czasie, nauczyłem cieszyć się życiem. Chciałbym spełniać swoje marzenia,
                        które do niedawna uważałem za nieosiągalne. Jednym z nich jest właśnie zostanie programistą -
                        konkretniej, <strong>Frontend Developerem</strong>, robiąc coś co zaczęło sprawiać mi wiele
                        przyjemności. Wierzę, że dzięki realizacji tej pasji będę mógł również zacząć realizować inne, skryte
                        marzenia.
                    </p>
                }
            />
        </Main>
    </Container>
);