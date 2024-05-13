"use server";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  const rawFormData = {
    content: formData.get("todo"),
    date: new Date().toISOString(),
    isDone: formData.get("isDone") === "on" ? "true" : "false",
  };

  await fetch("http://localhost:8000/todos/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });
  formData.set("todo", " ");
  revalidatePath("/");
}
