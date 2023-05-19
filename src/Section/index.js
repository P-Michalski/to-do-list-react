import { Heading, Header, Wrapper } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper className="section">
        <Header>
            <Heading>{title}</Heading>
            {extraHeaderContent}
        </Header>
        {body}
    </Wrapper>
);

export default Section;