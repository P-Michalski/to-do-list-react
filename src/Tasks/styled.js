import styled, { css } from "styled-components";
import { theme } from "../theme";

export const List = styled.ul`
    background-color: white;
    list-style: none;
    padding: 20px;
    padding-left: 10px;
    margin: 0px;
    box-shadow: 0 0 3px 1px #e5e5e5;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid #dcdcdc;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    min-width: 28px;
    min-height: 28px;
    border: none;

    &:focus {
        outline: 2px solid black;
    }

    ${({ first }) => first && css`
        margin-right: 10px;
        background-color: ${theme.colors.forestGreen};
        color: ${theme.colors.sugarCane};
        transition: 0.5s ease;

        &:hover {
            background-color: ${theme.colors.brightForestGreen};
            cursor: pointer;
        }
    `}

    ${({ last }) => last && css`
        margin-left: 10px;
        background-color: ${theme.colors.alizarinCrimson};
        color: white;
        transition: 0.5s ease;

        &:hover {
            background-color: ${theme.colors.carnation};
            cursor: pointer;
        }
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

