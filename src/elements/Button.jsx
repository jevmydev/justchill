export const Button = ({ title, type, onClick, children }) => {
    const classChangeState = children === "Finalizar meditación" ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400";

    return (
        <button
            className={`${classChangeState} flex items-center justify-center px-4 py-2 text-xl text-gray-950 font-medium cursor-pointer rounded transition-all hover:scale-105`}
            title={title}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
