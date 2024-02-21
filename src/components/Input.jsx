import React, {forwardRef} from 'react';

export const Input = forwardRef(({label, textarea, ...props}, ref) => {
    const inputClasses = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return (<p className={'flex flex-col gap-1 my-4'}>
        <label className={'text-sm font-bold uppercase text-stone-500'}>{label}</label>
        {textarea ? <textarea
            className={inputClasses}
            ref={ref}
            {...props}/> : <input className={inputClasses} ref={ref} {...props}/>}
    </p>);
});