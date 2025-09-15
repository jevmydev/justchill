export function Gratitude() {
    return (
        <label className="flex flex-col gap-2 font-medium text-gray-300">
            ¿Por qué estás agradecido hoy?
            <textarea
                className="flex p-4 w-full text-sm bg-gray-900 text-gray-100 rounded outline-0"
                name="gratitude"
                rows="4"
                placeholder="Escribe aquí por qué estás agradecido el día de hoy..."
                required
            ></textarea>
        </label>
    );
}

export default Gratitude;
