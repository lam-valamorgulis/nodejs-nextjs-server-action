"use client";
import { useState } from "react";
import { deleteTodo } from "../actions/deleteTodo";
import { updateTodo } from "../actions/updateTodo";

export default function TodoItem({ todo }: any) {
  const { id, content, isDone, date } = todo;
  const [completed, setCompleted] = useState(isDone === "true" ? true : false);

  const handleCheckbox = async (event: any) => {
    const isDone = event.target.checked;
    setCompleted(isDone);
    await updateTodo({ isDone: isDone ? "true" : "false", content, date }, id);
  };

  return (
    <li className="p-2 rounded-lg">
      <div className="flex align-middle flex-row justify-between">
        <div className="p-2">
          <input
            onChange={handleCheckbox}
            type="checkbox"
            className="h-6 w-6"
            value={isDone}
            checked={completed}
          />
        </div>
        <div className="p-2">
          <p
            className={`text-lg ${
              isDone === "true" ? "line-through" : ""
            } text-gray-400`}
          >
            {content}
          </p>
        </div>
        <form action={deleteTodo}>
          <button
            name="id"
            value={id}
            className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
            type="submit"
          >
            <svg
              className="h-6 w-6 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <span>Remove</span>
          </button>
        </form>
      </div>
      <hr className="mt-2" />
    </li>
  );
}
