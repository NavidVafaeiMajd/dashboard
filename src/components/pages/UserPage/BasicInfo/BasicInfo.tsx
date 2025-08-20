import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validation } from "./validation";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";

const BasicInfo = () => {
const form = useForm<z.infer<typeof validation>>({
  resolver: zodResolver(validation),
  defaultValues: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",     
    personeliCode: "",
    birthDate: new Date(),    
    position: "",
    maritalStatus: "",
    accessLevel: "",
    province: "",
    city: "",
    postalCode: "",
    religion: "",
    bloodGroup: "",
    nationality: "",
    citizenship: "",
    address1: "",
    address2: "",
  },
});


  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
          <span>
            <IoDocumentTextOutline className="w-7 h-7" />
          </span>
          <span> اطلاعات اولیه</span>
        </div>
        <div className="p-3">
          <Form
            formProp={form}
            accordion
            accordionTitle="تنظیم جدید شاخص عملکرد"
            onSubmit={onSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex gap-5">
              <Form.Input label="نام" name="firstName" placeholder="نام" required />
              <Form.Input label="نام خانوادگی" name="lastName" placeholder="نام خانوادگی" required />
            </div>
            <div className="flex gap-5">
              <Form.Input label="شماره تماس" name="phoneNumber" placeholder="شماره تماس" required />
              <Form.Select label="جنسیت" name="gender" placeholder="انتخاب جنسیت" required>
                <Form.SelectItem value="1">مرد</Form.SelectItem>
                <Form.SelectItem value="2">زن</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Input label="کدپرسنلی" name="personeliCode" placeholder="کدپرسنلی" required />
              <Form.Date label="تاریخ تولد" name="birthDate" />
              <Form.Select label="وضعیت" name="position" placeholder="انتخاب وضعیت" required>
                <Form.SelectItem value="1">فعال </Form.SelectItem>
                <Form.SelectItem value="2">ممنوع</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Select label="وضعیت تاهل" name="maritalStatus" placeholder="انتخاب وضعیت تاهل" required>
                <Form.SelectItem value="1">مجرد</Form.SelectItem>
                <Form.SelectItem value="2">متاهل</Form.SelectItem>
                <Form.SelectItem value="3">بیوه</Form.SelectItem>
                <Form.SelectItem value="4">طلاق گرفته یا جدا شده</Form.SelectItem>
              </Form.Select>
              <Form.Select label="سطح دسترسی" name="accessLevel" placeholder="انتخاب سطح دسترسی" required>
                <Form.SelectItem value="1">اداری</Form.SelectItem>
                <Form.SelectItem value="2">تست</Form.SelectItem>
                <Form.SelectItem value="3">دسترسی عمومی کارکنان</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Input placeholder="استان" label="استان" name="province" required />
              <Form.Input placeholder="شهر" label="شهر" name="city" required />
              <Form.Input placeholder="کدپستی" label="کدپستی" name="postalCode" required />
            </div>
            <div className="flex gap-5">
              <Form.Select label="مذهب" name="religion" placeholder="انتخاب مذهب" required>
                <Form.SelectItem value="1">اسلام</Form.SelectItem>
                <Form.SelectItem value="2">مسیحیت</Form.SelectItem>
                <Form.SelectItem value="3">یهودیت</Form.SelectItem>
                <Form.SelectItem value="4">زرتشتی</Form.SelectItem>
                <Form.SelectItem value="5">سایر</Form.SelectItem>
              </Form.Select>
              <Form.Select label="گروه خونی" name="bloodGroup" placeholder="انتخاب گروه خونی" required>
                <Form.SelectItem value="1">A+</Form.SelectItem>
                <Form.SelectItem value="2">A-</Form.SelectItem>
                <Form.SelectItem value="3">B+</Form.SelectItem>
                <Form.SelectItem value="4">B-</Form.SelectItem>
                <Form.SelectItem value="5">AB+</Form.SelectItem>
                <Form.SelectItem value="6">AB-</Form.SelectItem>
                <Form.SelectItem value="7">O+</Form.SelectItem>
                <Form.SelectItem value="8">O-</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Select label="ملیت" name="nationality" placeholder="انتخاب ملیت" required>
                <Form.SelectItem value="1">ایرانی</Form.SelectItem>
                <Form.SelectItem value="2">افغانستانی</Form.SelectItem>
                <Form.SelectItem value="3">عراقی</Form.SelectItem>
                <Form.SelectItem value="4">پاکستانی</Form.SelectItem>
                <Form.SelectItem value="5">ترک</Form.SelectItem>
                <Form.SelectItem value="6">سایر</Form.SelectItem>
              </Form.Select>
              <Form.Select label="تابعیت" name="citizenship" placeholder="انتخاب تابعیت" required>
                <Form.SelectItem value="1">ایران</Form.SelectItem>
                <Form.SelectItem value="2">افغانستان</Form.SelectItem>
                <Form.SelectItem value="3">عراق</Form.SelectItem>
                <Form.SelectItem value="4">پاکستان</Form.SelectItem>
                <Form.SelectItem value="5">ترکیه</Form.SelectItem>
                <Form.SelectItem value="6">سایر</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Input label="نشانی 1" name="address1" placeholder="نشانی 1" required />
              <Form.Input label="نشانی 2" name="address2" placeholder="نشانی 2" required />
            </div>

            <div className="flex gap-x-2 mt-5">
              <Button>به روزرسانی پروفایل</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
