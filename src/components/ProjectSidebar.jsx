import React from 'react';
import Button from "./Button.jsx";
import {render} from "react-dom";

export default function ProjectSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
    return (<aside className={'w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'}>
        <h2 className={'mb-8 font-bold uppercase md:text-xl text-stone-200'}>Your Project</h2>
        <div>
            <Button onClick={onStartAddProject}>
                + Add Project
            </Button>
        </div>
        <ul className={'mt-8'}>
            {projects.map(({id, title}) => {
                const cssClasses = ['w-full', 'text-left', 'px-2', 'py-1', 'rounded-sm', 'my-1', 'hover:text-stone-200', 'hover:bg-stone-800'];
                if (selectedProjectId === id) {
                    cssClasses.push('bg-stone-800', 'text-stone-200')
                } else {
                    cssClasses.push('bg-stone-400')
                }
                return <li key={id}>
                    <button
                        onClick={()=>onSelectProject(id)}
                        className={cssClasses.join(' ')}
                    >{title}</button>
                </li>
            })}
        </ul>
    </aside>);
}