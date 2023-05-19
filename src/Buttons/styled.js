import styled from "styled-components";
import { theme } from "../theme";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    color: ${theme.colors.teal};
    border: none;
    background-color: transparent;
    margin: 0 10px;
    transition: 0.5s ease;

    &:hover {
        color: ${theme.colors.bondiBlue};
        cursor: pointer;
    }

    &:disabled {
        color: ${theme.colors.silver};
    }

    @media (max-width: ${theme.breakpoints.mobile}px) {
        flex-basis: 100%;
        margin-bottom: 20px;
    }
`;