
import { Container, Header, List, Grid } from 'semantic-ui-react'
import { Artist, PreferencesCartProps, Genre } from '../../app/types/types';
import ArtistCart from '../artistCart';
import PreferencesArtistCard from '../PreferencesArtistCard';
import PreferencesButton from '../preferencesButton';
import './style.scss'

function PreferencesCart({ items, header, type }: PreferencesCartProps) {




    return (
        <Container className='preferences-cart-wrapper'>
            <h3 className='section-title'>{header}</h3>
            {
                type !== "artist" ?

                    <List horizontal>
                        {
                            items.map((item: Artist | Genre) => <List.Item key={item.name}>
                                {type !== "artist" ?
                                    <PreferencesButton item={item} type={type} />
                                    :
                                    <PreferencesArtistCard item={item} />

                                }

                            </List.Item>

                            )
                        }

                    </List> :
                    <Grid horizontal>
                        {
                            items.map((item: Artist | Genre) => <Grid.Column mobile={16} tablet={5} computer={4} key={item.name}>
                                {type !== "artist" ?
                                    <PreferencesButton item={item} type={type} />
                                    :
                                    <PreferencesArtistCard item={item} />

                                }

                            </Grid.Column >

                            )
                        }

                    </Grid>




            }
            <div className="ui divider"></div>
        </Container>
    );
}

export default PreferencesCart;