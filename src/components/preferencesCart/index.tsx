
import { Container, Header, List,Button } from 'semantic-ui-react'
import { Artist, PreferencesCartProps,Genre } from '../../app/types/types';
import ArtistCart from '../artistCart';
import PreferencesArtistCard from '../PreferencesArtistCard';
import PreferencesButton from '../preferencesButton';
import './style.scss'

function PreferencesCart({ items, header, type }: PreferencesCartProps) {

    

    
    return (
        <Container className='preferences-cart-wrapper'>
            <h3 className='preferences-cart-header'>{header}</h3>
            <List horizontal>
                {
                    items.map((item: Artist|Genre) => <List.Item key={item.name}>
                        {type === "genre" ?
                            <PreferencesButton item={item}/>
                            :
                            <PreferencesArtistCard item={item}/>

                        }
                        
                    </List.Item>

                    )
                }

            </List>
            <div className="ui divider"></div>
        </Container>
    );
}

export default PreferencesCart;