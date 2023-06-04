import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, Navigation, NavigationList, NavigationItem } from "./styled";

export const App = () => (
    <HashRouter>
        <Navigation>
            <NavigationList>
                <NavigationItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </NavigationItem>
            </NavigationList>
        </Navigation>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);