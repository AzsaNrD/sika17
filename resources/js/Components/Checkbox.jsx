export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-400 text-blue-violet shadow-sm focus:ring-violet-400 ' +
                className
            }
        />
    );
}
