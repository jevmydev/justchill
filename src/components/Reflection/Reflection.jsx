import { useState } from "react";

import Modal from "../Modal/Modal";
import ReflectionForm from "./ReflectionForm";
import ReflectionLog from "./ReflectionLog";

export function Reflection() {
    const [isSendNewReflection, setIsSendNewReflection] = useState(false);

    const handleSendNewReflection = () => {
        setIsSendNewReflection(true);
        setTimeout(() => setIsSendNewReflection(false), 1200);
    };

    return (
        <>
            <section>
                <div className="flex flex-col gap-8">
                    <h2 className="text-green-100 text-4xl font-semibold">Reflexiona el día de hoy</h2>
                    <ReflectionForm onSubmitSuccess={handleSendNewReflection} />
                    <Modal isOpen={isSendNewReflection}>Reflexión guardada</Modal>
                </div>
            </section>
            <ReflectionLog />
        </>
    );
}

export default Reflection;
