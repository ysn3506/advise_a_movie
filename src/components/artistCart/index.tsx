import React from 'react';
import { Card } from "semantic-ui-react"
function ArtistCart(artist:any) {
    const { profile_path, name } = artist.artist;
    return (
        <Card className='artist-cart'
            image={`https://image.tmdb.org/t/p/w300/${profile_path}`}
            header={name }
        />
    );
}

export default ArtistCart;