import TodoList from "./_components/TodoList";
import TodoForm from "./_components/TodoForm";
import Footer from "./_components/UI/Footer";

export default function Home() {
  return (
    <main className="bg-white p-10 mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold">ToDo App</h1>
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    </main>
  );
}
