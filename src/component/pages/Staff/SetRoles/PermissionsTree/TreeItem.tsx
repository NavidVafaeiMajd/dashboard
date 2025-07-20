import { useState } from "react";
import type { PermissionItem } from "./permissionsData";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";

interface Props {
  item: PermissionItem;
  selected: number[];
  onSelect: (id: number) => void;
}
const TreeItem  = ({item , selected , onSelect} : Props) => {
    const [showChildern, setShowChildern] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <>
            <div >
                <ul>
                    <li className="border-b-1 border-dashed border-border p-2">
                        <div className="flex items-center gap-2">
                            {hasChildren && <button className="" onClick={(e)=>{setShowChildern(!showChildern) ; e.preventDefault() }} >{!showChildern ? <IoMdArrowDroprightCircle className="w-5 h-5"/> : <IoMdArrowDropdownCircle className="w-5 h-5"/>}</button> }
                            {item.label}
                            <input type="checkbox" checked={selected.includes(item.id)} onChange={() => onSelect(item.id)} name={item.label} id="" />
                        </div>
                        {showChildern && hasChildren && item.children &&item.children.length > 0 && (
                            <>
                                {item.children.map((child ) => (
                                    <TreeItem
                                    key={child.id}
                                    item={child}
                                    selected={selected}
                                    onSelect={onSelect}
                                    />
                            ))}
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </>
    );
}
 
export default TreeItem;