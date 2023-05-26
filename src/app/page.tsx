import TodoItem from '@/components/TodoItem';
import { prisma } from '@/db/db';
import Link from 'next/link';
import React from 'react';

async function getTodos() {
  return await prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  console.log({ id, complete });
  await prisma.todo.update({ where: { id }, data: { complete } });
}

const Home = async () => {
  // await prisma.todo.create({ data: { complete: false, title: 'First todo created manually', createdAt: new Date(), updatedAt: new Date() } });
  const todos = await getTodos();

  return (
    <>
      <header className='flex justify-between w-full'>
        <h1>Todos</h1>
        <Link className='p-2 border rounded-xl bg-transparent hover:bg-white hover:bg-transparent duration-500 hover:text-slate-800 border-white' href={'/new-todo'}>Add ToDo</Link>
      </header>
      <ul>
        {todos.map(each => <TodoItem toggleTodo={toggleTodo} key={each.id} {...each} />)}
      </ul>
    </>
  );
};

export default Home;