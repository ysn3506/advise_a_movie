import React from 'react';
import { Form, Button } from 'semantic-ui-react'
import './style.scss'

function LoginForm() {
    return (
        <div className='form-wrapper'>
            <Form>
                <Form.Input fluid label='Email' placeholder='Email' type='email' />
                <Form.Input label='Password' placeholder='Password' type='password' />
                <Button type='submit' className='primary-button' >Login</Button>
                <Button type='submit' className='secondary-button' >Sign Up</Button>
            </Form>
        </div>

    );
}

export default LoginForm;
