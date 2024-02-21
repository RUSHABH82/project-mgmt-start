import React, {useRef} from 'react';
import {Input} from "./Input.jsx";
import Model from "./Model.jsx";

export default function NewProject({onAdd, onCancel}) {

    const modelRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    function handleSave() {
        const newProject = {
            title: titleRef.current.value, description: descriptionRef.current.value, date: dateRef.current.value,
        }
        const {title, description, date} = newProject;

        if (title.trim() === '' || description.trim() === '' || date.trim() === '') {
            modelRef.current.open()
        } else {
            onAdd(newProject);
        }
    }

    return (<>
        <Model ref={modelRef} buttonCaption={'Close'}>
            <h2 className={'text-xl font-bold text-stone-700 my-4'}>Invalid Input</h2>
            <p className={'text-stone-600 mb-4'}>Looks like you forgot to enter a value</p>
            <p className={'text-stone-600 mb-4'}>Please make sure you provided a valid value for every input field</p>
        </Model>
        <div className={'w-[35rem] mt-16'}>
            <menu className={'flex items-center justify-end gap-4 my-4'}>
                <li>
                    <button className={'text-stone-800 hover:text-stone-950'}
                            onClick={onCancel}
                    >cancel
                    </button>
                </li>
                <li>
                    <button className={'px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 '}
                            onClick={handleSave}>save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={titleRef} label={"Title"}/>
                <Input ref={descriptionRef} label={"Description"} textarea/>
                <Input type={'date'} ref={dateRef} label={"Due Date"}/>
            </div>
        </div>
    </>);
}

