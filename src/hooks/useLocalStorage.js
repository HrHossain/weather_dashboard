import { useEffect, useState } from "react";

// export function useLocalStorage(key,initialValue){
//     const [value , setValue] = useState(JSON.parse(localStorage.getItem(key)) ?? initialValue)

//     useEffect(()=>{
//         localStorage.setItem(key,JSON.stringify(value))
//     },[value,key])

//     return {value , setValue}
// }
export function useLocalStorage(key , defaultValue){
    const [value , setValue] = useState(()=>{
        try{
            const saved = localStorage.getItem(key)
            return saved ? JSON.parse(saved) : defaultValue
        }catch(err){
            return defaultValue
        }
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    
    return [value , setValue]
}
