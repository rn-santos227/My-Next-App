interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, className = ""}) => {
    return (
        <button onClick={onClick} className={`m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ${className}`}>
            {label}
        </button>
    )
}

export default Button;