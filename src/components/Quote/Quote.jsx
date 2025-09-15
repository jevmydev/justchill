import { getTodaysIntention, getTodaysQuote } from "../../utils/utils";

export function Quote() {
    const { text: quote } = getTodaysQuote();
    const { text: intention } = getTodaysIntention();

    return (
        <section>
            <div className="flex flex-col gap-8 py-24">
                <h2 className="text-3xl font-semibold text-green-100">Frase del día</h2>
                <blockquote className="text-4xl italic font-medium text-green-300 p-8 rounded-lg border-l-4 border-green-500">
                    <h3>{quote}</h3>
                </blockquote>

                <h2 className="text-3xl font-semibold text-green-100">Intención del día</h2>
                <blockquote className="text-4xl italic font-medium text-green-300 p-8 rounded-lg border-l-4 border-green-500">
                    <h3>{intention}</h3>
                </blockquote>
            </div>
        </section>
    );
}

export default Quote;
