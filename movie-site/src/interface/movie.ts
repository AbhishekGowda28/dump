export type genreType = {
    id: number;
    name: string;
};

export type MovieResult = {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
};
export type TVResult = {
    poster_path: string | null;
    popularity: number;
    id: number;
    backdrop_path: string | null;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    original_name: string;
    name: string;
};

export type DiscoverType = {
    page: number;
    results: MovieResult[] | TVResult[];
    total_results: number;
    total_pages: number;
};