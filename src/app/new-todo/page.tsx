import { prisma } from '@/db/db';
import Link from 'next/link';
import React from 'react';
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    //We can specify a function to run on server
    "use server";
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title");
    }
    await prisma.todo.create({
        data: {
            complete: false, title
        }
    });
    redirect('/');
}

const NewRoute = () => {
    return (
        <>
            <header className='flex justify-between w-full'>
                <h1>Add Todo</h1>
                <Link className='p-2 border rounded-xl bg-transparent hover:bg-white hover:bg-transparent duration-500 hover:text-slate-800 border-white' href={'/'}>All Todo</Link>
            </header>
            <form action={createTodo} className='flex flex-col gap-2'>
                <input className='text-slate-600' type="text" name='title' />
                <div className='flex justify-end my-2 gap-2'>
                    <button className='p-2 border rounded-xl bg-transparent hover:bg-white hover:bg-transparent duration-500 hover:text-slate-800 border-white'>Cancel</button>
                    <button className='p-2 border rounded-xl bg-transparent hover:bg-white hover:bg-transparent duration-500 hover:text-slate-800 border-white'>Create</button>
                </div>
            </form>
        </>
    );
};

export default NewRoute;