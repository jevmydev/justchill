import { useEffect, useState } from "react";
import { getRandomGreeting } from "../../utils/utils";

import Meditation from "../Meditation/Meditation";
import Button from "../../elements/Button";

export function Hero() {
    const [greeting, setGreeting] = useState("");
    const [isInitiatedMeditation, setIsInitiatedMeditation] = useState(false);

    const handleStartMeditation = () => setIsInitiatedMeditation(!isInitiatedMeditation);

    useEffect(() => {
        const newGreeting = getRandomGreeting();
        setGreeting(newGreeting);
    }, []);

    return (
        <div className="flex flex-col gap-6 items-center justify-center text-center">
            <Meditation isInitiatedMeditation={isInitiatedMeditation} />
            <section>
                <div className="flex flex-col gap-6 items-center justify-center text-center">
                    <h2 className="text-green-100 text-3xl sm:text-5xl font-semibold">{greeting}</h2>
                    <div>
                        {!isInitiatedMeditation ? (
                            <Button title="Empezar meditación" onClick={handleStartMeditation}>
                                Empezar meditación
                            </Button>
                        ) : (
                            <Button title="Finalizar meditación" onClick={handleStartMeditation}>
                                Finalizar meditación
                            </Button>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
