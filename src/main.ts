import * as t from "io-ts";
// ______________________________________________________
// 1. Basic types
// ______________________________________________________

/* interface Todo {
  title: string;
  description: string;
}
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}
const todo1: Todo = {
  title: "organize desk",
  description: "clear clutter",
};
const todo2: Todo = updateTodo(todo1, {
  description: "throw out trash",
});
console.log("todo1:", todo1);
console.log("todo2:", todo2); */

// ______________________________________________________
// Types from io-ts
// ______________________________________________________
const Person = t.type({
  name: t.string,
  age: t.number,
});

const john = { name: "John Doe", age: 30 };

if (Person.is(john)) {
  console.log("Person is valid");
} else {
  console.log("Person is invalid");
}

// ______________________________________________________
// Type Assertions
// ______________________________________________________
let num = 2;
let str = <string>(<unknown>num);
console.log(typeof str);

let str2 = num as unknown as string;
console.log(typeof str2);

// ______________________________________________________
// Enums
// ______________________________________________________
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Right.toLocaleString());
