interface TodoItem {
  id: number;
  title: string;
  status: Status;
  completedOn?: Date;
}

enum Status {
  Todo,
  InProgress,
  Done,
}

const todoItems: TodoItem[] = [
  { id: 1, title: 'Learn HTML', status: Status.Done, completedOn: new Date('2021-09-11') },
  { id: 2, title: 'Learn TypeScript', status: Status.InProgress },
  { id: 3, title: 'Write the best app in the world', status: Status.Todo },
];

function addTodoItem(todo: string): TodoItem {
  const id = getNextId(todoItems);

  const newTodo: TodoItem = {
    id,
    title: todo,
    status: Status.Todo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId(items: TodoItem[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

const newTodo = addTodoItem('Buy lots of stuff with all the money we make from the app');

console.log(JSON.stringify(newTodo));
