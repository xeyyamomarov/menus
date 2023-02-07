import { useContext } from "react";
import NavigationContext from "../context/Navigation";


export const useNavigation=()=>{
    return useContext(NavigationContext)
}

