import Item from "./Item";

const TimeList = (props) => {
    return (
        <div>
            {/* {props.children.map((c)=>{
                <Item key={Math.random()}>{c}</Item>
            })} */}
            <Item>{props.children[0]}</Item>
        </div>
    )
}

export default TimeList;