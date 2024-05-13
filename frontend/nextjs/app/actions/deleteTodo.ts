"use server";

import { revalidatePath } from "next/cache";

export async function deleteTodo(formData: FormData) {
  const id = formData.get("id");
  console.log(id);
  await fetch(`http://localhost:8000/todos/delete/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/");
}
