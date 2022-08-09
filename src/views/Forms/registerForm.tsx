
import React, { useState, FormEvent, useEffect } from 'react';
import { useAppSelector } from '../../app/storage/store';
import { register } from '../../app/storage/redux/actions';
import { Form, Button } from 'semantic-ui-react'
import { User } from '../../app/types/types';
import { useNavigate } from 'react-router-dom';






function RegisterForm(props: any) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const selector = useAppSelector;

    const { loading, error, userInfo } = selector((state) => state.user);




    useEffect(() => {

        if (userInfo) {
            navigate('/')
        }
    }, [userInfo]);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            setMessage("Passwords do not match");
        } else {

            const user: User = {
                name: name + " " + lastName,
                email: email,
                password: password,
                preferences: {}
            }
            register({ name: user.name, email: user.email, password: user.password })
        }
    };


    return (
        <div className='form-wrapper'>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input onChange={(e) => setName(e.target.value)} fluid label='First name' placeholder='First name' />
                    <Form.Input onChange={(e) => setLastName(e.target.value)} fluid label='Last name' placeholder='Last name' />
                </Form.Group>
                <Form.Input onChange={(e) => setEmail(e.target.value)} fluid label='Email' placeholder='Email' type='email' />
                <Form.Input onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Password' type='password' />
                <Form.Input onChange={(e) => setConfirmPassword(e.target.value)} label='Confirm Password' placeholder='Password' type='password' />
                {message.length > 0 && <div><span className='warning'>{message}</span></div>}
                <Button onClick={e => submitHandler(e)} type='submit' className='primary-button' >Sign Up</Button>

                <div className="form-anchor"> <a href="/login">Already have an account?</a></div>


            </Form>
        </div>

    );
}

export default RegisterForm;
