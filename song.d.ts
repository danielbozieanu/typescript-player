declare class Song {
    title: string;
    artist: string;
    duration: string;
    isPlaying: boolean;
    constructor(title: string, artist: string, duration: string, isPlaying?: boolean);
    play(): void;
    stop(): void;
    toHTML(): string;
}
