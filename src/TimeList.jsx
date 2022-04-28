import { useContext } from "react";
import { TimeRicord } from './testContext'
import Item from "./Item";

const TimeList = (props) => {
    const context = useContext(TimeRicord);
    return (
        <div className="timeSave">
            {context.timeArray.map((c) => (
                <Item key={Math.random()}> {c} </Item>
            ))}
            {/* <Item>{props.children}</Item> */}
        </div>
    )
}

export default TimeList;