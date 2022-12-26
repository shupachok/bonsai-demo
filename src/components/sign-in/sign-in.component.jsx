import { useState } from "react";
import FormInput from "../form-input/form-input.component"
import { signInWithGooglePopup, getAuthWithEmailandPassword } from "../../firebase/firebase.utils";
import './sign-in.component.scss'
import Button from "../button/button.component";
const defaultFormSignin = {
    email: '',
    password: ''
}
const SignIn = () => {
    const shopUrl = window.location.protocol + "//" + window.location.host +"/shop";
    const [formSignIn, setFormSignIn] = useState(defaultFormSignin);
    const { email, password } = formSignIn;
    const loginGoogleUser = async () => {
        await signInWithGooglePopup();
        window.location.replace(shopUrl);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await getAuthWithEmailandPassword(email, password);
            window.location.replace(shopUrl);
        } catch (error) {
            console.log(error);
        }
    }
    const handleFormChange = (e) => {
        const { value, name } = e.target
        setFormSignIn({ ...formSignIn, [name]: value });
    }
    return <div className="sign-in-container">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit} >
            <FormInput label="Email" required type="text" name='email' onChange={handleFormChange} value={email} />
            <FormInput label="Password" required type="password" name='password' onChange={handleFormChange} value={password} />
            <div className="buttons-container">
                <Button type="submit">Submit</Button>
                <Button type="button" buttonType="google" onClick={loginGoogleUser}>Google sign in</Button>
            </div>
        </form>
    </div>
}

export default SignIn