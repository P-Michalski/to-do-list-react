import styled from "styled-components";
import { theme } from "../theme";

export const StyledForm = styled.form`
    background-color: white;
    padding: 20px;
    margin: 0px;
    box-shadow: 0 0 3px 1px #e5e5e5;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 20px;

    @media (max-width: ${theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export const InputBox = styled.input`
    padding: 8px;
    border: 2px solid #dcdcdc;
`;

export const Button = styled.button`
    background-color: ${theme.colors.teal};
    color: ${theme.colors.onahau};
    border: none;
    font-family: 'Montserrat', sans-serif;
    transition: 0.5s ease;

    &:hover {
        transform: scale(1.1);
        background-color: ${theme.colors.persianGreen};
        cursor: pointer;
    }

    &:focus {
        outline: 2px solid black;
    }
`;