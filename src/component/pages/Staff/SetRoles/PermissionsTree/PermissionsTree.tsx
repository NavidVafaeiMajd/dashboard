import { useState } from "react";
import TreeItem from "./TreeItem";
import type { PermissionItem } from "./permissionsData";

interface Props {
  data: PermissionItem[];
  onChange?: (selectedIds: number[]) => void;
}

const PermissionsTree = ({ data, onChange }: Props) => {
    const [selected, setSelected] = useState<number[]>([]);

      const toggleSelect = (id: number) => {
        const updated = selected.includes(id)
        ? selected.filter((i) => i !== id)
        : [...selected, id];

        setSelected(updated);
        if (onChange) onChange(updated);
    };
    return (
        <>
      {data.map((item) => (
        <TreeItem
          key={item.id}
          item={item}
          selected={selected}
          onSelect={toggleSelect}
        />
      ))}
        </>
    );
}
 
export default PermissionsTree;