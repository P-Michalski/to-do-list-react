import { styled } from "styled-components";

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.teal};
    border: none;
    background-color: transparent;
    margin: 0 10px;
    transition: 0.5s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.bondiBlue};
        cursor: pointer;
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.silver};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
        margin-bottom: 20px;
    }
`;