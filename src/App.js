import {GoBell} from "react-icons/go"
import { Button } from "./Button/Button";

function App() {
  const handleClick=()=>{
    // console.log("click")

  }
  return (
    <div className="App">
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell/>
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>Buy Now!</Button>
      </div>
      <div>
        <Button warning outline>Add</Button>
      </div>
      <div>
        <Button secondary outline>dfhdfh</Button>
      </div>
      <div>
        <Button primary rounded outline>
          hello
        </Button>
      </div>
    </div>
  );
}

export default App;
