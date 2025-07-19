import { useState } from "react";
import type { PermissionItem } from "./permissionsData";

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
            <div>
                <ul>
                    <li className="border-b-1 border-dashed border-border p-2">
                        {hasChildren && <button onClick={(e)=>{setShowChildern(!showChildern) ; e.preventDefault() }} >🔽🔼</button> }
                        {item.label}
                        <input type="checkbox" checked={selected.includes(item.id)} onChange={() => onSelect(item.id)} name="" id="" />
                        {showChildern && hasChildren && (
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