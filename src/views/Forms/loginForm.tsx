import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react'


function LoginForm(props: any) {
    const navigate=useNavigate()
    return (
        <div className='form-wrapper'>
            <Form>
                <Form.Input fluid label='Email' placeholder='Email' type='email' />
                <Form.Input label='Password' placeholder='Password' type='password' />
                <Button type='submit' className='primary-button' >Login</Button>
                <Button type='submit' className='secondary-button' onClick={() => {navigate("/register")}} >Sign Up</Button>
            </Form>
        </div>

    );
}

export default LoginForm;
