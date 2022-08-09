import { userInfo } from 'os';
import React,{useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react'
import { useAppSelector } from '../../app/hooks';
import { login } from '../../app/storage/redux/actions';


function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const mailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef();
    const selector = useAppSelector;
    const { loading, error, userInfo }=selector(state=>state.user)
    const navigate = useNavigate()
    
    const submitHandler = (e:React.MouseEvent) => {
        e.preventDefault();
        const user = { email:email, password:password }
        login(user)
        if (userInfo) {
            console.log(userInfo)
                navigate("/home")
        } else {
            setMessage("Invalid email or password")
          }    
    }


    return (
        <div className='form-wrapper'>
            <Form>
                <Form.Input ref={mailRef} onChange={(e)=>setEmail(e.target.value)}fluid label='Email' placeholder='Email' type='email' />
                <Form.Input ref={passwordRef} onChange={(e) => setPassword(e.target.value)}label='Password' placeholder='Password' type='password' />
                <Button type='submit' className='primary-button' onClick={(e)=>{submitHandler(e)}}>Login</Button>
                <Button type='submit' className='secondary-button' onClick={() => { navigate("/register") }} >Sign Up</Button>
                {message.length > 0 && <div><span className='warning'>{message}</span></div>}
            </Form>
        </div>

    );
}

export default LoginForm;
