import Question from "./Question/Question";
import Gratitude from "./Gratitude/Gratitude";
import Intention from "./Intention/Intention";
import Button from "../../elements/Button";

export function Reflection() {
    return (
        <section>
            <div className="flex flex-col gap-8">
                <h3 className="text-green-100 text-4xl font-semibold">Reflexiona el día de hoy</h3>
                <form className="flex flex-col gap-6">
                    <Question />
                    <Intention />
                    <Gratitude />
                    <div>
                        <Button title="Enviar" type="submit">
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Reflection;
