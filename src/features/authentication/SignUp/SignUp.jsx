import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { Input } from '../../shared/Input';
import { SingUpConfirmation } from '../SignUpConfirmation/SignUpConfirmation';

async function signUp({ username, password, email, nickname, name, firstName, isMarketingAllowed, setAgreementAccepted }) {
    try {
        const result = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
                'custom:firstName': firstName,
                // name,
                'custom:isMarketingAllowed': isMarketingAllowed,
                'custom:agreementAccepted': setAgreementAccepted,
                nickname,
                // firstName: 
            }
        });
        console.log(result);
    } catch (error) {
        console.log('error signing up:', error);
    }
}


export const SingUp = (props) => {

    const [firstName, setFirstName ] = useState('')
    const [isMarketingAllowed, setMarketingAllowed ] = useState('')
    const [agreementAccepted, setAgreementAccepted ] = useState('')

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')


    return (
        <>
            <div>
                <h2>REGISTRACTION</h2>
                <Input name={'Username'} value={username} setValue={setUsername} />
                <Input name={'Password'} value={password} setValue={setPassword} />
                <Input name={'Email'} value={email} setValue={setEmail} />
                <Input name={'Nickname'} value={nickname} setValue={setNickname} />
                <h3>User Info</h3>
                <Input name={'firstName'} value={firstName} setValue={setFirstName} />
                <Input name={'isMarketingAllowed'} value={isMarketingAllowed} setValue={setMarketingAllowed} />
                <Input name={'agreementAccepted'} value={agreementAccepted} setValue={setAgreementAccepted} />
                <hr />
                <button onClick={() => signUp({ username, password, nickname, email, firstName, isMarketingAllowed, agreementAccepted })}>SignUp</button>
            </div>
            <SingUpConfirmation />
        </>

    )
}