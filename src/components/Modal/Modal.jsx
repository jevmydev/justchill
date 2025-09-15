export function Modal({ children, isOpen }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-start justify-center z-20 p-8">
            <div className="bg-white text-2xl text-gray-950 p-6 rounded shadow-xl">{children}</div>
        </div>
    );
}

export default Modal;
