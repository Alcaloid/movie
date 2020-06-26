export interface MovieInfo {
  popularity: number;
  backdrop_path: string;
  release_date: string;
  poster_path: string;
  id: number;
  original_language: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
  original_title: string;
  overview: string;
  genre_ids: number[];
  adult: boolean;
  title: string;
}

export default interface MovieResponse {
  results: MovieInfo[];
  total_results: number;
  total_pages: number;
  page: number;
}
