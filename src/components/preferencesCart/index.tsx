import React from 'react';
import { Container, Header, List,Button } from 'semantic-ui-react'
import { PreferencesCartProps } from '../../app/types/types';
import './style.scss'

function PreferencesCart({ items, header }: PreferencesCartProps) {


    return (
        <Container className='preferences-cart-wrapper'>
            <h3 className='preferences-cart-header'>{header}</h3>
            <List horizontal>
                {
                    items.map((item: any) => <List.Item key={item.name}>
                        <Button  className="secondary-button">
                            {item.name}
                        </Button>
                        
                    </List.Item>

                    )
                }

            </List>

        </Container>
    );
}

export default PreferencesCart;