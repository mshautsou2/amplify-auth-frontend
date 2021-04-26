import { useAsyncEffect } from "@/features/shared/useAsyncEffect"
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
                <li>
                    {item.guideId}
                </li>
            ))}
        </div>
    )
}