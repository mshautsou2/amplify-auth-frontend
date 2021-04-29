import { useAsyncEffect } from "@/features/shared/useAsyncEffect"
import { addCartItem } from "@api/functions/cart/add-cart-item"
import { CartItem } from "@api/functions/cart/dto/cart-item.dto"
import { getCartTotals } from "@api/functions/cart/get-cart-totals"
import { useState } from "react"

export const CartScreen = (props: any) => {

    const [items, setItems] = useState<CartItem[]>([])

    const { hasErrors, loading}  = useAsyncEffect(async () => {

        console.log('here')
        const result = await getCartTotals()
        setItems(result.items)
    }, [])

    if (loading) {
        return <div>
            LOADING...
        </div>
    }
    if (hasErrors) {
        return <div>
            SOME ERROR HAS OCCURED...
        </div>
    }
    return (
        <div>
            {items.map(item => (
                    <div style={{ border: 1}}>
                    {item.guideId}
                    <button onClick={() => {
                        console.log(item)
                        // addCartItem()
                    }}>Add item</button>
                    </div>
            ))}
        </div>
    )
}