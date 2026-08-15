import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // convert data into json as mostly api calls gives string
        .then((res) => setData(res[currency])) // holding data in a variable 
        // console.log(data);
    }, [currency])
    console.log(data);
    return data 
}

export default useCurrencyInfo;