import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { useState } from "react";
  
  interface DeleteDialogProps {
    title?: string;
    description?: string;
    triggerLabel?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
  }
  
  export function DeleteDialog({
    title = "حذف آیتم",
    description = "آیا مطمئن هستید که می‌خواهید این آیتم را حذف کنید؟ این عملیات قابل بازگشت نیست.",
    triggerLabel = "حذف",
    confirmLabel = "بله، حذف شود",
    cancelLabel = "خیر",
    onConfirm,
  }: DeleteDialogProps) {
    const [open, setOpen] = useState(false);
  
    const handleConfirm = () => {
      onConfirm();
      setOpen(false);
    };
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive" size="sm">
            {triggerLabel}
          </Button>
        </DialogTrigger>
  
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
  
          <DialogFooter className="flex gap-3">
            <Button variant="destructive" onClick={handleConfirm}>
              {confirmLabel}
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {cancelLabel}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  