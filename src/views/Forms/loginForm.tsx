import React,{useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button,Loader } from 'semantic-ui-react'
// import {useAppSelector } from '../../app/storage/hooks';
import { store } from '../../app/storage/store';
import { login } from '../../app/storage/redux/user/actions';
import { getMovies } from '../../app/utilities';



function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading,setLoading]=useState(false)
    const mailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef();
    // const selector = useAppSelector;
    const { error, userInfo } = store.getState().user
    const { preferences } = userInfo;
    const { artists, genres, popularity } = preferences;
    const navigate = useNavigate()
    
    const submitHandler = async (e: React.MouseEvent) => {
        await e.preventDefault();
        await setLoading(true)
        const user = await { email:email, password:password }
        await login(user)
        await setLoading(false)
        if(error) setMessage("Invalid email or password")
            
        
    }


    const loadMovies = () => {
        if (popularity|| artists|| genres) {
            getMovies(popularity, artists, genres)
        }
    }

    return (
        <div className='form-wrapper'>
            
                <Form>
                    <Form.Input ref={mailRef} onChange={(e) => setEmail(e.target.value)} fluid label='Email' placeholder='Email' type='email' />
                    <Form.Input ref={passwordRef} onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Password' type='password' />
                    <Button type='submit' className='primary-button' onClick={(e) => { submitHandler(e) }}>Login</Button>
                    <Button type='submit' className='secondary-button' onClick={() => { navigate("/register") }} >Sign Up</Button>
                    {message.length > 0 && <div><span className='warning'>{message}</span></div>}
                </Form>
            { loading && <Loader />  }

       
        </div>

    );
}

export default LoginForm;
