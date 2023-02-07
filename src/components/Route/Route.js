import {useNavigation} from "../../hooks/use-navigation"
export const Route=({path,children})=>{
    const {currentPath}= useNavigation();

    if(path===currentPath){
        return children
    }
    return null
}