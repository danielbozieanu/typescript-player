/// <reference path="song.d.ts" />
declare class Playlist {
    songs: Song[];
    nowPlayingIndex: number;
    constructor();
    add(song: Song): void;
    play(): void;
    stop(): void;
    readonly currentSong: Song;
    next(): void;
    renderInElement(list: HTMLElement): void;
}
