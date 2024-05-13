"use server";
import { revalidatePath } from "next/cache";

export async function updateTodo(rawData: any, id: string) {
  await fetch(`http://localhost:8000/todos/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawData),
  });
  revalidatePath("/");
}
