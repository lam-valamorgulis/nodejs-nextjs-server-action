"use client";
import { useRef } from "react";
import { addTodo } from "../actions/addTodo";

function TodoForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      className="mt-4 flex justify-center"
      action={async (formData) => {
        await addTodo(formData);
        ref.current?.reset();
      }}
    >
      <input
        className="w-80 border-b-2 border-gray-500 text-black"
        type="text"
        placeholder="Enter your task here"
        name="todo"
      />
      <input name="isDone" type="checkbox" hidden />

      <button className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex">
        <svg
          className="h-6 w-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          type="submit"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="9" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
        <span>Add</span>
      </button>
    </form>
  );
}

export default TodoForm;
