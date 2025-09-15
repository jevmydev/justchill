import { useRef, useState } from "react";
import { FavIcon, MuteIcon, SoundIcon } from "../../elements/Icons";

import Button from "../../elements/Button";

export function Nav() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (!audioRef.current) return;
        audioRef.current.volume = 0.4;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <nav className="flex items-center justify-between p-4">
            <div>
                <a className="flex items-center gap-2 group" href="/">
                    <FavIcon />
                    <h1 className="text-2xl text-gray-50 font-extrabold transition-colors group-hover:text-gray-400">JustChill</h1>
                </a>
            </div>
            <div>
                <audio ref={audioRef} loop src="/music/lofi.mp3" />
                <Button title={isPlaying ? "Apagar música" : "Reproducir música"} onClick={toggleMusic}>
                    {isPlaying ? <MuteIcon /> : <SoundIcon />}
                </Button>
            </div>
        </nav>
    );
}

export default Nav;
