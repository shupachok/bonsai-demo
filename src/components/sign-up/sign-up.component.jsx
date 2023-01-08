import { useState } from "react";
import { createAuthWithEmailandPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component"
import './sign-up.component.scss'
import Button from "../button/button.component";
const SignUp = () => {
    const defultFormRegister = {
        displayName: '',
        email: '',
        password: '',
        repassword: '',
    }
    const [formRegister, setFromRegister] = useState(defultFormRegister);
    const [errorMsg, setErrorMsg] = useState('')
    const { displayName, email, password, repassword } = formRegister;
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const {user} = await createAuthWithEmailandPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            
            
        } catch (error) {
            setErrorMsg(error.message);
        }

    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFromRegister({ ...formRegister, [name]: value });
    }

    return <div className="sign-up-container">
        <h2>Sign up with Email</h2>
        <form onSubmit={handleFormSubmit} >
            <FormInput label="Display Name" required type="text" name='displayName' onChange={handleFormChange} value={displayName} />
            <FormInput label="Email" required type="text" name='email' onChange={handleFormChange} value={email} />
            <FormInput label="Password" required type="password" name='password' onChange={handleFormChange} value={password} />
            <FormInput label="Re-Password" required type="password" name='repassword' onChange={handleFormChange} value={repassword} />
            <div className="button-sign-up-container">
            <Button type="submit">Submit</Button>
            </div>
        </form>
        <h2>{errorMsg}</h2>
    </div>
}

export default SignUp