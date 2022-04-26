import { useContext } from "react";
import { TimeRicord } from "./testContext";

const Item = (props) => {
    const context=useContext(TimeRicord)

    return(
        <div style={{color:context.timeColor}}>
            {props.children}
        </div>
    )
}

export default Item;