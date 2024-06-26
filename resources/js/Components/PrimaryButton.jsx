export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-6 py-2 bg-blue-violet border border-transparent rounded-[5px] font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-violet/90 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
