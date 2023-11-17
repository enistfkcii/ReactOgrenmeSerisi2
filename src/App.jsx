// import Button from "./components/Button"

import { useState } from "react"
import Button from "./components/Button"

// import Text1 from "./components/text"
function App() {
//props ... veri aktarma olarak düşünebiliriz.
// const [name,setName] = useState("React")   // burdaki name benim değişkenim yanımda ki setName ise setlemek istediğin bir fonksiyon.
// const clickFunc = () => {
//   alert("Basıldı.")
//   setName("react degişti");
// }

const [count,setCount] = useState(0)
// const decrement = () => {
//   if(!count < 1){
//   // setCount(prev => prev - 1) // prev yazmak zorunda değiliz ancak bunun işlevi bi önceki kullandıgımız degeri alıp kullanmak.
//   setCount(count - 1)
//   }
// }




  return (
    // <>
    //   <Text1 number={"1"} name={"Enis"}></Text1> 
    //   <Text1 number={"2"} name={"Tuğçe"}></Text1>
    //   <Text1 number={"3"} name={"Nagihan"}></Text1>
    //   <Button name={"Artır"}></Button>
    //   <Button name={"Azalt"}></Button>
    // </>
    <>
    {/* <div onClick={clickFunc}>
    {name}
    </div> */}
    <Button name={"Azalt"} onClick={() => setCount(count - 1)}></Button>
    {/* <button onClick={decrement}>Azalt</button> */}
    <div>{count}</div>
    <Button name={"Artır"} onClick={() => setCount(count + 1)}></Button>
    {/* <button onClick={() => setCount(count+1)}>Artır</button> */}
    </>
  )
}

export default App
