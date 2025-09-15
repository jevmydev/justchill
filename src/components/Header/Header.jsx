export function Header() {
    return (
        <header>
            <div className="max-w-screen-xl mx-auto w-full">
                <nav className="flex items-center justify-between py-4 p-2">
                    <a className="flex items-center gap-2 group" href="/">
                        <img className="w-10 h-10 object-cover" src="/favicon.webp" alt="Logo de JustChill" loading="lazy" decoding="async" />
                        <h1 className="text-2xl text-gray-50 font-extrabold transition-colors group-hover:text-gray-400">JustChill</h1>
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
