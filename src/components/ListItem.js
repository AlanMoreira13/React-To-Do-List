
import Card from "./Card";
import React from "react";



function DoneImg(props) {
    if(props.done) {
        return(
           
            <i class="bi bi-check2-circle btn-checked"></i>
        )
    } else {
        return(
            <i class="bi bi-circle btn-unchecked"></i>
        )
    }
}



function ListItem(props) {

    return(
        
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <i onClick={()=> {props.onDone(props.item)}}>
                        <DoneImg done={props.item.done}></DoneImg>
                        </i>
                    <i>
                        <i onClick={()=> {props.onItemDeleted(props.item)}} class="bi bi-trash btn-trash"></i>
                        </i>
                </div>
            </Card>
        </li>
    )
}

export default ListItem;