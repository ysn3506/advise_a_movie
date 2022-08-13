
import './style.scss'


function ArtistCart(props: any) {
    const { artist } = props;
    const { profile_path, name } = artist;

    return (
        <div className='artist-card-wrapper'>
            <div className='artist-card-image-wrapper'>

                <img src={
                    `https://image.tmdb.org/t/p/w300/${profile_path}`} alt="actor" />
            </div>
            <div className='artist-name'>
                <p>{name}</p>
            </div>

        </div>
    );
}

export default ArtistCart;