# TODO List

### Implementation

The project is a TODO list written using React, Redux/Redux Toolkit, TypeScript, MaterialUI

### The project has the following functionality:
1. Adding a new task
2. Validation of the length of the task name
3. Display all tasks and their filtering by status (complete/incomplete)
4. Changing the status for each task
5. Editing the task text in the modal window
6. Deleting a task

### Additional libraries used during development
This app uses the following third-party libraries. These dependencies are written in the package.json file

    "react-id-generator": "^3.0.2",

##### If you want to work with the code, write npm install in your terminal, then all the necessary dependencies will be added for you locally

    npm install

### The project is under development.
What will be implemented in the future:
1. Pagination
2. Optimization of react components

## Problems during development

For this reducer case, I was getting the following error for the store
  
    case FILTER_TODOS: {
      return {
        ...state,
        'filter': action.payload,
      }
    }

    "Type 'unknown' is not assignable to type 'string'."

This was solved by adding a type to the reducer

    'filter': action.payload as string,
