import { useEffect, useState } from "react";
import { phases } from "../../constants/constants";

export function Meditation({ isInitiatedMeditation }) {
    const [breathing, setBreathing] = useState(phases.inhale);

    useEffect(() => {
        if (!isInitiatedMeditation) {
            setBreathing(phases.inhale);
            return;
        }

        const interval = setInterval(() => {
            setBreathing((prevBreathing) => {
                const { phase: prevPhase, time: prevTime } = prevBreathing;

                if (prevTime === 0) {
                    if (prevPhase === "Inhala") return phases.keep;
                    else if (prevPhase === "Mantén") return phases.exhale;
                    else if (prevPhase === "Exhala") return phases.inhale;
                }

                return { ...prevBreathing, time: prevTime - 1 };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isInitiatedMeditation]);

    const originalTime = phases[breathing.id].time;
    const progress = ((originalTime - breathing.time) / originalTime) * 100;
    const radius = 180;
    const circumference = 2 * radius * Math.PI;

    return (
        <section>
            <div className="relative flex justify-center items-center bg-gray-900 w-80 h-80 sm:w-96 sm:h-96 rounded-full">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 384 384">
                    <circle className="stroke-gray-950 stroke-8 fill-transparent" r={radius} cx="192" cy="192" />
                    <circle
                        className="stroke-green-400 stroke-8 fill-transparent"
                        cx="192"
                        cy="192"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference * (1 - progress / 100)}
                        strokeLinecap="round"
                        transform="rotate(-90 192 192)"
                    />
                </svg>
                <div className="z-10 flex flex-col justify-center items-center gap-4">
                    <span className="text-6xl">{breathing.phase}</span>
                    <span className="text-2xl text-gray-400">{breathing.time} Seg</span>
                </div>
            </div>
        </section>
    );
}

export default Meditation;
