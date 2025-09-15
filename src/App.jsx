import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Reflection from "./components/Reflection/Reflection";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="max-w-screen-xl mx-auto p-2 py-2 flex flex-col gap-12">
                    <Hero />
                    <Quote />
                    <Reflection />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
