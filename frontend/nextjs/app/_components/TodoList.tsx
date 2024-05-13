import TodoItem from "./TodoItem";

async function TodoList() {
  const data = await fetch("http://localhost:8000/todos/", {
    next: { revalidate: 0 },
  });
  const todos = await data.json();
  return (
    <div className="mt-8">
      <ul>
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
