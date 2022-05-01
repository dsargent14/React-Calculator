import Wrapper from "./wrapper/Wrapper";
import Screen from "./screen/Screen";
import Buttonbox from "./button box/Buttonbox";

//put button inside buttonbox
function App() {
  return (
    <div className="App">
     <Wrapper>
     <Screen value="0"/>
     <Buttonbox></Buttonbox>
      </Wrapper>
    </div>
  );
}

export default App;
