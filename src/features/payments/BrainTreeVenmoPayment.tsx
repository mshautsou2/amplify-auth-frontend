// https://developers.braintreepayments.com/guides/venmo/configuration

import { useState } from "react"
import { createBraintreeVenmoInstance, createBrainTreeInstance } from "../../config/braintree"
import { useAsyncEffect } from "../shared/useAsyncEffect"

export const BrainTreeVenmoPayment = () => {

    const [venmoInstance, setVenmoInstance] = useState<any>(undefined)
    useAsyncEffect(async () => {
        const clientInstance = await createBrainTreeInstance()
        const result = await createBraintreeVenmoInstance(clientInstance)
        setVenmoInstance(result)
        console.log(result)
    }, [])

    
    return (
        <button onClick={() => {
            console.log('pay button clicked')
            venmoInstance.tokenize((tokenizeErr: any, payload: any) => {
                console.log(payload)
            })
        }}>
            {venmoInstance ? 'PAY WITH VENMO' : 'LOADING...'}
        </button>
    )
}