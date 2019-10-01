export class TestType {
    id: number;
    type: string;
    class: string;
    description: string;
}


export const testTypes = [
    {
        id: 1,
        type: "Unit tests",
        class: "list-group-item-success",
        description: "These tests refer to testing isolated components which means testing without any dependencies."
    },
    {
        id: 2,
        type: "Integration tests",
        class: "list-group-item-danger",
        description: "These tests refer to testing partial or entire components together to assure correct functionality when they are working together."
    },
    {
        id: 3,
        type: "Regression tests",
        class: "list-group-item-info",
        description: "These tests refer to the testing issues raised in the application over time."
    },{
        id: 4,
        type: "Performance tests",
        class: "list-group-item-warning",
        description: "These tests refer to how fast one transaction is. It focusses on the speed of one transaction."
    },
    {
        id: 5,
        type: "Load tests",
        class: "list-group-item-danger",
        description: "These tests focus on the speed of the application with concurrent users."
    },
    {
        id: 6,
        type: "End-to-End (e2e) tests",
        class: "list-group-item-info",
        description: "TIn e2e tests, we emulate the real production environment and test the real scenarios."
    },
    {
        id: 7,
        type: "UAT (user acceptance tests)",
        class: "list-group-item-danger",
        description: "These tests ensure that the application meets all the requirements from the end-user."
    },
    {
        id: 8,
        type: "Smoke Tests",
        class: "list-group-item-warning",
        description: "These tests ensure that all the essential functions or components of the application are working properly."
    }
]