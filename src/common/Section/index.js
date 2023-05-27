import { Heading, Header, Wrapper } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <Header>
            <Heading>{title}</Heading>
            {extraHeaderContent}
        </Header>
        {body}
    </Wrapper>
);

export default Section;