import { Contents } from "../Main/styled";

const Header = ({ title }) => (
    <Contents as="header">
        <h1>{title}</h1>
    </Contents>
);

export default Header;