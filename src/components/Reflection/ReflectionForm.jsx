import { getParsedDate, getTodaysReflection } from "../../utils/utils";
import { setStorage, getStorage } from "../../utils/storage";

import Question from "./Question/Question";
import Gratitude from "./Gratitude/Gratitude";
import Intention from "./Intention/Intention";
import Button from "../../elements/Button";

export function ReflectionForm({ onSubmitSuccess }) {
    const { text: todayReflection } = getTodaysReflection();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());
        const date = getParsedDate();

        const reflections = getStorage({ key: "reflections", isJSON: true }) || {};

        reflections[date] = { ...data, todayReflection };

        setStorage({ key: "reflections", value: reflections });
        e.target.reset();

        if (onSubmitSuccess) {
            onSubmitSuccess();
        }
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <Question todayReflection={todayReflection} />
            <Intention />
            <Gratitude />
            <div>
                <Button title="Enviar" type="submit">
                    Guardar reflexión
                </Button>
            </div>
        </form>
    );
}

export default ReflectionForm;
