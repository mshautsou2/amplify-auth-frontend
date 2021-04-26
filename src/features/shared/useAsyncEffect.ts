import { useEffect } from "react"

export const useAsyncEffect = (asyncCallback: () => Promise<void>, dependencies?: any[]) => {


    useEffect(() => {
        (async () => {
            await asyncCallback()
        })()
    }, dependencies)

}