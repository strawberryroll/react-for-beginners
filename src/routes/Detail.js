import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    console.log(id);

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    console.log("movie", movie);
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    <img src={movie.large_cover_image} alt="{movie.title}" />
                    <h4>{`year: ${movie.year}`}</h4>
                    <h4>{`runtime: ${movie.runtime} minutes`}</h4>
                    <h4>{`rating: ${movie.rating}`}</h4>
                </div>
            )}{" "}
        </div>
    );
}

export default Detail;
