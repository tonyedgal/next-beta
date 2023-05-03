import { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading Todos...</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p className="text-blue-500">Loading Trolleys...</p>}>
        <h1>Loading Shopping Trolley</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}
