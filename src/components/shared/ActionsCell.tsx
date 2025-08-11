import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface Actions {
  label: string;
  onclick?: () => void;
  type?: "outline" | "destructive" | "default";
  path?: string;
}

interface ActionsCellProps {
  actions: Actions[];
}
const ActionsCell = ({ actions }: ActionsCellProps) => {
    const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2">
      {actions.map(({ label, onclick, type = "default", path } , index) => (
        <Button
          key={index}
          variant={type}
          size="sm"
          onClick={() => {
            if (path) {
              navigate(path);
            }
            if (onclick) {
              onclick();
            }
          }}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default ActionsCell;
