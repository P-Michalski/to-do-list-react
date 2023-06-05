const exampleTasks = "/to-do-list-react/exampleTasks.json";

export const getExampleTasks = async () => {
    const response = await fetch(exampleTasks);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};