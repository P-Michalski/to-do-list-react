import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 1px;
    margin-top: 10px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto auto;
    background-color: white;
    box-shadow: 0 0 3px 1px #e5e5e5;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Heading = styled.h2`
    font-size: 20px;
    background-color: white;
    padding: 20px;
    margin: 0px;
`;