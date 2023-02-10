import { Route } from "./components/Route/Route";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { DropdownPage } from "./pages/DropdownPage";
import { AccordionPage } from "./pages/AccordionPage";
import {ButtonPage} from "./pages/ButtonPage"
import { ModalPage } from "./pages/ModalPage";
import { TablePage } from "./pages/TablePages";
import { CounterPages } from "./pages/CounterPages";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar/>
      <div className="col-span-5">
        <Route path="/accordion">
          {" "}
          <AccordionPage />
        </Route>
        <Route path="/">
          {" "}
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          {" "}
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage/>
        </Route>
        <Route path="/table">
          <TablePage/>
        </Route>
        <Route path="/counter">
          <CounterPages initialValue={10}/>
        </Route>
      </div>
    </div>
  );
}

export default App;
