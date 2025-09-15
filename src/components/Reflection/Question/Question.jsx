export function Question({ todayReflection }) {
    return (
        <label className="flex flex-col gap-2 font-medium text-gray-300">
            {todayReflection}
            <textarea className="flex p-4 w-full text-sm bg-gray-900 text-gray-100 rounded outline-0" name="question" rows="4" placeholder="Escribe aquí tu respuesta..." required></textarea>
        </label>
    );
}

export default Question;
