// import Button from "./components/Button"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";  

import { useEffect, useState,useRef } from "react"
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// import { useState } from "react"
// import Button from "./components/Button"

// import Text1 from "./components/text"
function App() {
  // const countRef = useRef(0)
  const inputRef = useRef()
// useState ve useRef arasındaki fark nedir ? => useStatelar ile güncellendiğinde sayfa her değişimde rendarlanır.Ancak bunu reflerle
// yaparsak sayfayı sürekli render yapmaktan kurtuluruz.
//props ... veri aktarma olarak düşünebiliriz.
// const [name,setName] = useState("React")   // burdaki name benim değişkenim yanımda ki setName ise setlemek istediğin bir fonksiyon.
// const clickFunc = () => {
//   alert("Basıldı.")
//   setName("react degişti");
// }

// const [count,setCount] = useState(0)
// const decrement = () => {
//   if(!count < 1){
//   // setCount(prev => prev - 1) // prev yazmak zorunda değiliz ancak bunun işlevi bi önceki kullandıgımız degeri alıp kullanmak.
//   setCount(count - 1)
//   }
// }
// const [name,setName] = useState("")
// const [data,setData] = useState([])
// console.log(name)

// const clickFunc = () => {
// setData(prev => ([...prev,name]))
// setName('');
// }
// const targetFunc = (e) => {
//   setName(e.target.value)
// }
// console.log(data)
// const [name,setName] = useState("enis")
// useEffect(() => {
//   setTimeout(() => {
//     setName("isim güncellendi")
//   },4000)
// },[])
  // return (
  //   // <>
  //   //   <Text1 number={"1"} name={"Enis"}></Text1> 
  //   //   <Text1 number={"2"} name={"Tuğçe"}></Text1>
  //   //   <Text1 number={"3"} name={"Nagihan"}></Text1>
  //   //   <Button name={"Artır"}></Button>
  //   //   <Button name={"Azalt"}></Button>
  //   // </>
  //   // <>
  //   // {/* <div onClick={clickFunc}>
  //   // {name}
  //   // </div> */}
  //   // {/* <Button name={"Azalt"} onClick={() => setCount(count - 1)}></Button> */}
  //   // {/* <button onClick={decrement}>Azalt</button> */}
  //   // {/* <div>{count}</div>
  //   // <Button name={"Artır"} onClick={() => setCount(count + 1)}></Button> */}
  //   // {/* <button onClick={() => setCount(count+1)}>Artır</button> */}
  //   // </>
  //   // <>
  //   // <input value={name} type="text" onChange={targetFunc}></input>
  //   // <button onClick={clickFunc}>TIKLA</button>
  //   // <div>  
  //   // {
  //   // data.map((dt,i) => (
  //   //   <div key={i}>{dt}</div>
  //   // ))
  //   // }
  //   // </div>
  //   // </>
  //   <>
  //   {/* {name} */}
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Home></Home>}></Route>
  //       <Route path="/detail/:id" element={<Detail></Detail>}></Route>
  //     </Routes>
  //   </Router>
  //   </>
  // )
// const clickFunc = () => {
//   countRef.current++
//   console.log(countRef.current)
// }
const focusFunc = () => {
inputRef.current.focus()
}
console.log(inputRef.current);
  return(
    // <button onClick={clickFunc}>
    //   CLICK ME
    // </button>
    <>
    <input type="text"ref={inputRef}></input>
    <button onClick={focusFunc}>
      FOCUS
    </button>
    </>


  )
}

export default App
