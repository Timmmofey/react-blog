import { useState, useEffect } from "react"

const useFetch = (url, updateFlag) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true) 
    const [error, setError] = useState(null)

    const abortCont = new AbortController()

    useEffect(()=> {
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal}).then((res)=>{
                if (res.ok !== true){
                    throw Error('Could not fetch the data from this resource');
                }
            return res.json()
        }).then((data) => {
            setData(data)
            setLoading(false)
            setError(null)
        }).catch((err)=>{
            if (err.name === "AbortError"){
 
            } else{
                setError(err.message)
                setLoading(false) 
            }
        })
        }, 1000)

        return () => {
            abortCont.abort()
        }
    }, [updateFlag])

    return {data, isLoading, error}
}

export default useFetch