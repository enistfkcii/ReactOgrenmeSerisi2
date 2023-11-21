import React,{ useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { _data } from "./Home"

const Detail = () => {
    const {id} = useParams(); // useParams bize link kısmında gönderdiğimiz veriyi getirir.
    const [getData,setGetData] = useState("")
    const location = useLocation() // location detaylarına erişebildiğimiz bir hook.

    console.log(location)
    useEffect(() => {

            setGetData(_data.find(dt=>dt.id == id)) 

        
    },[id])
    // console.log(getData,"getData")


    return(
<div>
    <div>
        {getData?.name}
    </div>
    <div>
        {getData?.description}
    </div>
</div>
    )   
}

export default Detail