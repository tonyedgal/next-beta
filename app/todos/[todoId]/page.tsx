import { Todo } from "@/typings";
import React from "react";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  /**
   * The next js fetch API has been modified to support
   * server side rendering. It is recommended to use this
   * fetch API instead of the native fetch API.
   * By passing a second argument to the fetch function,
   * you can specify the type of rendering you want to use.
   * { cache: "no-cache" } - Server side rendering
   * { cache: "force-cache" } -Static site generation
   * { next: { revalidate: 60 } } - Incremental static regeneration
   */
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>

      <p>Completed: {todo.completed ? "Yes" : "No"}</p>

      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  // trim the build to only 10 pages
  const trimmedTodos = todos.slice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(), // Must be a string
  }));

  /**
   * Has to be genrated as an array of objects
   * where each object has a params property
   * [{ todoid: "1" }, { todoid: "2"}, ...]
   */
}
