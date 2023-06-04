import { styled } from "styled-components";
import { NavLink } from "react-router-dom"

const activeClassName = "active";

export const Navigation = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.teal};
`;

export const NavigationList = styled.ul`
    list-style: none;
    margin-top: 0px;
    padding: 15px;
    display: flex;
    justify-content: center;
`;

export const NavigationItem = styled.li`
    margin: 0 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.colors.sugarCane};
    text-decoration: none;

    &.${activeClassName} {
        font-weight: bold;
    }
`;