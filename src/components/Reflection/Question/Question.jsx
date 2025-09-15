import { getTodaysReflection } from "../../../utils/utils";

export function Question() {
    const { text: question } = getTodaysReflection();

    return (
        <label className="flex flex-col gap-2 font-medium text-gray-300">
            {question}
            <textarea className="flex p-4 w-full text-sm bg-gray-900 text-gray-100 rounded outline-0" name="question" rows="4" placeholder="Escribe aquí tu respuesta..."></textarea>
        </label>
    );
}

export default Question;
