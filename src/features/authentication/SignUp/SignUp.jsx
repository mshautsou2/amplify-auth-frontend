import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { Input } from '../../shared/Input';
import { SingUpConfirmation } from '../SignUpConfirmation/SignUpConfirmation';

async function signUp({ username, password, email, nickname, name }) {
    try {
        const result = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
                name,
                nickname,
            }
        });
        console.log(result);
    } catch (error) {
        console.log('error signing up:', error);
    }
}


export const SingUp = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')


    return (
        <>
            <div>
                <b>REGISTRACTION</b>
                <Input name={'Username'} value={username} setValue={setUsername} />
                <Input name={'Password'} value={password} setValue={setPassword} />
                <Input name={'Email'} value={email} setValue={setEmail} />
                <Input name={'Nickname'} value={nickname} setValue={setNickname} />
                <button onClick={() => signUp({ username, password, nickname, email })}>SignUp</button>
            </div>
            <SingUpConfirmation />
        </>

    )
}