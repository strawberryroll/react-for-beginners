import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.movieCard}>
                <img
                    className={styles.movieImage}
                    src={movie.medium_cover_image}
                    alt={movie.title}
                />
                <h2 className={styles.movieTitle}>{movie.title}</h2>
                <h4 className={styles.movieInfo}>{`Year: ${movie.year}`}</h4>
                <h4
                    className={styles.movieInfo}
                >{`Rating: ${movie.rating}`}</h4>
                <h4
                    className={styles.movieInfo}
                >{`Runtime: ${movie.runtime} minutes`}</h4>

                <ul className={styles.genreList}>
                    {movie.genres.map((genre) => (
                        <li key={genre} className={styles.genreItem}>
                            {genre}
                        </li>
                    ))}
                </ul>

                <p className={styles.movieDescription}>
                    {movie.description_full}
                </p>

                <a
                    className={styles.imdbLink}
                    href={`https://www.imdb.com/title/${movie.imdb_code}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on IMDB
                </a>
            </div>
        </div>
    );
}

export default Detail;
