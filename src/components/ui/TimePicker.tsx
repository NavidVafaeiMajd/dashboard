"use client";

import { useState } from "react";
import TimeKeeper from "react-timekeeper";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface TimePickerInputProps {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
}

const TimePickerInput = ({ value = "", onChange, placeholder }: TimePickerInputProps) => {
  const [open, setOpen] = useState(false);
  const [tempTime, setTempTime] = useState(value || "12:00");

  const handleConfirm = () => {
    onChange?.(tempTime);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <div className="flex gap-2 items-center">
        <input
          readOnly
          value={value}
          onClick={() => {
            setTempTime(value || "12:00");
            setOpen(true);
          }}
          placeholder={placeholder || "انتخاب زمان"}
          className="border px-3 py-1 rounded cursor-pointer w-full"
        />
        {value && (
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={() => onChange?.("")}
            className="flex gap-1"
          >
            <X className="w-4 h-4" />
            حذف
          </Button>
        )}
      </div>

      {open && (
        <div className="absolute z-50 bg-white border border-gray-300 rounded shadow-xl mt-2">
          <TimeKeeper
            time={tempTime}
            onChange={(data) => setTempTime(data.formatted24)}
            switchToMinuteOnHourSelect
          />
          <div className="flex justify-end p-2 gap-2">
            <Button type="button" onClick={handleConfirm}>
              تأیید
            </Button>
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
              بستن
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePickerInput;
