import Button from "./components/Button"
import Text1 from "./components/text"
function App() {
//props ... veri aktarma olarak düşünebiliriz.

  return (
    <>
      <Text1 number={"1"} name={"Enis"}></Text1> 
      <Text1 number={"2"} name={"Tuğçe"}></Text1>
      <Text1 number={"3"} name={"Nagihan"}></Text1>
      <Button name={"Artır"}></Button>
      <Button name={"Azalt"}></Button>
    </>
  )
}

export default App
