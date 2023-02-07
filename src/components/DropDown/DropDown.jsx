import { useState,useEffect,useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { Panel } from "../Panel/Panel";

export const DropDown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const divEl=useRef()

  useEffect(()=>{
    const handler=(e)=>{
        if(!divEl.current){
            return
        }
        if(!divEl.current.contains(e.target)){
            setIsOpen(false)
        }
    }

    document.addEventListener("click",handler,true);

    return ()=>{
        document.removeEventListener("click",handler)
    }
  },[])

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    //CLOSE DROPDOWN
    setIsOpen(false);
    onChange(option);
    console.log(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer  "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? (
          <GoChevronDown className="text-lg" />
        ) : (
          <GoChevronLeft className="text-lg" />
        )}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full  ">{renderedOptions}</Panel>
      )}
    </div>
  );
};
