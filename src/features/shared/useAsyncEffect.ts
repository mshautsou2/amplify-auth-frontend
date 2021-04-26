import { useEffect, useState } from "react"

export const useAsyncEffect = (asyncCallback: () => Promise<void>, dependencies?: any[]) => {


    const [loading, setLoading] = useState(true)
    const [hasErrors, setHasErrors] = useState(false)

    useEffect(() => {
            asyncCallback().catch(() => {
                setHasErrors(hasErrors)
            }).finally(() => {
                setLoading(false)
            })
    }, dependencies)
    return { loading, hasErrors }

}