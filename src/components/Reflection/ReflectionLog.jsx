import { getStorage } from "../../utils/storage";

export function ReflectionLog() {
    const reflections = getStorage({ key: "reflections", isJSON: true });

    return (
        <section>
            <div className="flex flex-col gap-8">
                <h2 className="text-green-100 text-4xl font-semibold">Registro de tus reflexiones</h2>
                <div className="flex flex-col gap-4">
                    {reflections ? (
                        Object.entries(reflections).map(([date, { question, intention, gratitude, todayReflection }]) => (
                            <div key={date} className="flex flex-col gap-8 p-4 bg-gray-800 rounded text-gray-50 border-r-4 border-green-500">
                                <h3 className="font-semibold text-xl text-green-200">Meditación, {date}</h3>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <strong>{todayReflection}</strong>
                                        <p>{question}</p>
                                    </div>
                                    <div>
                                        <strong>Intención del día</strong>
                                        <p>{intention}</p>
                                    </div>
                                    <div>
                                        <strong>Agradecido/a</strong>
                                        <p>{gratitude}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400">No hay reflexiones registradas.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ReflectionLog;
