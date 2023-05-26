//we can speicify a component to be a client component as this component have a interaction with browser (onchange)

"use client";

import React from 'react';

interface TodoItemProps {
    id: string;
    title: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
    toggleTodo: (id: string, complete: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ complete, createdAt, id, title, updatedAt, toggleTodo }) => {
    return (
        <li className='flex gap-1 items-center'>
            <input type="checkbox" id={id}
                onChange={(e) => toggleTodo(id, e.target.checked)}
                className='cursor-pointer peer' defaultChecked={complete} />
            <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
        </li>
    );
};

export default TodoItem;
