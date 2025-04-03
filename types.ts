export interface Cover {
    id: number;
    url: string;
}

export interface Platform {
    id: number;
    name: string;
}

export interface IGDBGame {
    id: number;
    name: string;
    summary: string;
    cover: Cover;
    platforms: Platform[];
    // ...
}

export interface Platform {
    id: number;
    name: string;
    // etc...
}