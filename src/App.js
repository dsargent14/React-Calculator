import Wrapper from "./wrapper/Wrapper";
import Screen from "./screen/Screen";
import Buttonbox from "./button box/Buttonbox"
import Button from "./buttons/Button";

const buttonValues=[
  ["C", "+-", "/", "%"],
[9,8,7,"X"],
[6,5,4,"-"],
[3,2,1,"+"],
[0,".","="],
]

//put button inside buttonbox
function App() {
  return (
    <div className="App">
     <Wrapper>
     <Screen value="0"/>
     <Buttonbox>
       {buttonValues.flat().map((btn,index)=>{
          return(
       
       <Button
       key={index}
         className={btn === "=" ? "equals" :""}
         value ={btn}
         onClick  = {() =>{
           console.log(`${btn} cliqued up`)
         }}
      />
       )
      })
      }
     </Buttonbox>
      </Wrapper>
    </div>
  );
}

export default App;
