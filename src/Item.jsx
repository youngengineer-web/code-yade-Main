import { useContext } from "react";
import { TimeRicord } from "./testContext";

const Item = (props) => {
    const context = useContext(TimeRicord);

    const handleDeletItem = (e) => {
        // confirm("Do You?");
        // console.log(context.timeArray);
        // console.log(e.target.innerHTML);
        context.setTimeArray(context.timeArray.filter(t => t != e.target.innerHTML));
    }

    return (
        <div className="timeRecord" onClick={handleDeletItem} style={{ color: context.timeColor }}>
            {props.children}
        </div>
    )
}

export default Item;