// MyDatePicker.jsx
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
}

const CuDatePicker: React.FC<DatePickerProps>  = ({ value, onChange, placeholder = "تاریخ" }) => {
  return (
    <DatePicker
      value={value ? new Date(value) : ""}
        onChange={(date: any) =>
        onChange(date?.isValid ? date.toDate() : null)
      }
      format="YYYY/MM/DD"
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      placeholder={placeholder}
    />
  );
};

export default CuDatePicker;
