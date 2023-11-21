import { useNavigate } from "react-router-dom"
export const _data = [ // farklı sayfalarda bu datayı kullanabilmek için export ekledim başına.
    {
        id:0,
        name:"enis",
        description:"ceng"
    },
    {
        id:1,
        name:"aybuke",
        description:"ceng student"
    },
    {
        id:2,
        name:"sevim",
        description:"teacher"
    }
    ]

const Home = () => {
const navigate = useNavigate();
// `` => alt gr + , tuşu

return(
    <>
    <div>
    {
        _data.map((dt,i) => (
            <div onClick={() => navigate(`detail/${dt.id}`)} style={{cursor:"pointer",marginBottom:'30px'}} key={i}> 
                {dt.name + "   " + dt.description}
            </div>
        ))
    }   
</div>  
    </>

)
}

export default Home