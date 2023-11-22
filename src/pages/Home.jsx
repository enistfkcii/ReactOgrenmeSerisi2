import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";



const Home = () => {
const navigate = useNavigate();
const [allData,setAllData] = useState([])
const [loading,setLoading] = useState(true)
useEffect(() => {
const getData = async() => {
    setLoading(true)
    const {data} = await axios.get("https://fakestoreapi.com/products")
    setAllData(data)
    setLoading(false)
}
getData()
},[])

console.log(allData,"allData");
return(
    <>
    {
        loading ? (<div>
            <ClipLoader
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              ></ClipLoader>
            </div>
        )
        :
        (
<div>
        {
            allData.map((data,i) => (
                <div onClick={() => navigate(`detail/${data?.id}`)} style={{marginBottom:"30px",cursor:"pointer"}} key={i}>
                <div>{data?.title}</div>
                <img style={{width:"100px",height:"100px"}} src={data.image}></img>
                </div>

            ))
        }
    </div>
        )
    
    }   
    </>
)
}

export default Home