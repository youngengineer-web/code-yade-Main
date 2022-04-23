import Item from "./Item";

const TimeList = (props) => {
    return (
        <div className="timeSave">
            {props.children.map((c) => (
                <Item key={Math.random()}>{c}</Item>
            ))}
            {/* <Item>{props.children}</Item> */}
        </div>
    )
}

export default TimeList;