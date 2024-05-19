import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-400 text-gunmetal text-base focus:border-blue-violet focus:ring-blue-violet rounded-[5px] shadow-sm bg-transparent ' +
                className
            }
            ref={input}
            spellCheck="false"
        />
    );
});
