import { useState } from 'react';
import { PreferencesState, User } from '../../app/types/types';
import { Button } from 'semantic-ui-react';
import { useAppSelector } from '../../app/storage/store';
import { updateProfile } from "../../app/storage/redux/user/actions"
import { PreferencesProps } from '../../app/types/types';
import PreferencesCart from '../../components/preferencesCart';
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../../app/utilities';

function Preferences({ movieTypes, popularArtists }: PreferencesProps) {
    const [loading, setLoading] = useState(false);
    const selector = useAppSelector;
    const navigate = useNavigate()
    const movieStyles = [{ id: 1, name: "Latest Trends" }, { id: 2, name: "All Time Bests" }]
    const { popularity, artists, genres }: PreferencesState = selector(state => state.preferences);
    const { userInfo } = selector(state => state.user);
    const { name, email, _id, token } = userInfo
    const artistIds = artists.map(artist => ({ id: artist.id }))
    const genreIds = genres.map(genre => ({ id: genre.id }))
    const popularityIds = popularity.map(popular => ({ id: popular.id }))

    const user: User = { _id, name, email, token, preferences: { popularity: popularityIds, artists: artistIds, genres: genreIds } }

    const loadMovies = async () => {
        await setLoading(true)
        await updateProfile(user)
        await getMovies(popularity, artists, genres)
        await setLoading(false)
        navigate("/home")
    }

    return (

        <div className='preferences'>
            <h1>Select preferences...</h1>
            <PreferencesCart header="What kind of films do you like?" items={movieTypes} type="genre" />
            <PreferencesCart header="Which one do you prefer ?" items={movieStyles} type="preferences" />
            <PreferencesCart header="Who are your favourite actors/actresses ?" items={popularArtists} type="artist" />
            <Button onClick={loadMovies} className='secondary-button'> SHOW THE RECOMMENDED MOVIES</Button>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default Preferences;