import React,{ useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
// import { _data } from "./Home"
import axios from "axios";

const Detail = () => {
    const {id} = useParams(); // useParams bize link kısmında gönderdiğimiz veriyi getirir.
    const [singleData,setSingleData] = useState()
    useEffect(() => {
        const getData = async() => {
            const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleData(data)
        }
        getData()
    },[id])
    console.log("productDetail",singleData);
    
    
    return(
        <div>
            <div style={{marginBottom:"30px",cursor:"pointer"}}>
                <div>{singleData?.title}</div>
                <img style={{width:"100px",height:"100px"}} src={singleData?.image}></img>
                <div>{singleData?.price}</div>
            </div>
        </div>
    )   
}

export default Detail