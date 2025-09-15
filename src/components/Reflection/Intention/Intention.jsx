export function Intention() {
    return (
        <label className="flex flex-col gap-2 font-medium text-gray-300">
            Establece tu intención para el día de hoy
            <textarea
                className="flex p-4 w-full text-sm bg-gray-900 text-gray-100 rounded outline-0"
                name="intention"
                rows="4"
                placeholder="Escribe aquí tu intención del día de hoy..."
                required
            ></textarea>
        </label>
    );
}

export default Intention;
