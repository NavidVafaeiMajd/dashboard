import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validation } from "./validation";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const BasicInfo = ({ queryData }: { queryData: any }) => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      firstName: queryData?.firstName == null ? "" : queryData?.firstName,
      lastName: queryData?.lastName == null ? "" : queryData?.lastName,
      phoneNumber: queryData?.phoneNumber == null ? "" : queryData?.phoneNumber,
      gender: queryData?.gender == null ? "" : queryData?.gender,
      personeliCode: queryData?.personeliCode == null ? "" : queryData?.personeliCode,
      birthDate: queryData?.birthDate == null ? new Date() : queryData?.birthDate || new Date(),
      department: queryData?.department == null ? "" : queryData?.department,
      designation: queryData?.designation == null ? "" : queryData?.designation,
      position: queryData?.position == null ? "" : queryData?.position,
      province: queryData?.province == null ? "" : queryData?.province,
      city: queryData?.city == null ? "" : queryData?.city,
      postalCode: queryData?.postalCode == null ? "" : queryData?.postalCode,
      religion: queryData?.religion == null ? "" : queryData?.religion,
      bloodGroup: queryData?.bloodGroup == null ? "" : queryData?.bloodGroup,
      nationality: queryData?.nationality == null ? "" : queryData?.nationality,
      citizenship: queryData?.citizenship == null ? "" : queryData?.citizenship,
      address1: queryData?.address1 == null ? "" : queryData?.address1,
      address2: queryData?.address2 == null ? "" : queryData?.address2,
      maritalStatus: queryData?.maritalStatus == null ? "" : queryData?.maritalStatus,
    },
  });

  
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof validation>) => {
      // Transform data to match API structure
      const apiData = {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        personeliCode: data.personeliCode,
        birthDate: data.birthDate?.toISOString().split('T')[0], // Convert Date to YYYY-MM-DD
        position: data.position,
        maritalStatus: data.maritalStatus,
        province: data.province,
        city: data.city,
        postalCode: data.postalCode,
        religion: data.religion,
        bloodGroup: data.bloodGroup,
        nationality: data.nationality,
        citizenship: data.citizenship,
        address1: data.address1,
        address2: data.address2,
        department_id: data.department ? parseInt(data.department) : null,
        designation_id: data.designation ? parseInt(data.designation) : null,
      };
      
      console.log("Sending data:", apiData);
      console.log("User ID:", queryData?.id);
      
      const res = await fetch(`http://localhost:8000/api/employees/${queryData?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiData),
      });
      
      console.log("Response status:", res.status);
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response:", errorText);
        toast.error(`خطا ${res.status}: ${errorText}`);
        throw new Error(`HTTP ${res.status}: ${errorText}`);
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("اطلاعات با موفقیت به‌روزرسانی شد");
      queryClient.invalidateQueries({ queryKey: ["employeesDetailse", queryData?.id] });
    },
    onError: () => {
      toast.error("به‌روزرسانی ناموفق بود");
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data)
    mutation.mutate(data);
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
            onSubmit={onSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex gap-5">
              <Form.Input
                label="نام"
                name="firstName"
                placeholder="نام"
                required
              />
              <Form.Input
                label="نام خانوادگی"
                name="lastName"
                placeholder="نام خانوادگی"
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="شماره تماس"
                name="phoneNumber"
                placeholder="شماره تماس"
                required
              />
              <Form.Select
                label="جنسیت"
                name="gender"
                placeholder="انتخاب جنسیت"
                required
              >
                <Form.SelectItem value="مرد">مرد</Form.SelectItem>
                <Form.SelectItem value="زن">زن</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="کدپرسنلی"
                name="personeliCode"
                placeholder="کدپرسنلی"
                required
              />
              <Form.Date label="تاریخ تولد" name="birthDate" />
              <Form.Select
                label="وضعیت"
                name="position"
                placeholder="انتخاب وضعیت"
                required
              >
                <Form.SelectItem value="فعال">فعال </Form.SelectItem>
                <Form.SelectItem value="ممنوع">ممنوع</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Select
                label="وضعیت تاهل"
                name="maritalStatus"
                placeholder="انتخاب وضعیت تاهل"
                required
              >
                <Form.SelectItem value="مجرد">مجرد</Form.SelectItem>
                <Form.SelectItem value="متاهل">متاهل</Form.SelectItem>
                <Form.SelectItem value="بیوه">بیوه</Form.SelectItem>
                <Form.SelectItem value="طلاق گرفته یا جدا شده">
                  طلاق گرفته یا جدا شده
                </Form.SelectItem>
              </Form.Select>

            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Form.Select
                name="department"
                label="واحد سازمانی"
                placeholder="واحد سازمانی"
                required
              >
                <Form.SelectItem value="1">آقا</Form.SelectItem>
                <Form.SelectItem value="fem2ale">خانم</Form.SelectItem>
              </Form.Select>
              <Form.Select
                name="designation"
                label="سمت سازمانی"
                placeholder="سمت سازمانی"
                required
              >
                <Form.SelectItem value="1">آقا</Form.SelectItem>
                <Form.SelectItem value="2">خانم</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Input
                placeholder="استان"
                label="استان"
                name="province"
                
              />
              <Form.Input placeholder="شهر" label="شهر" name="city"  />
              <Form.Input
                placeholder="کدپستی"
                label="کدپستی"
                name="postalCode"
                
              />
            </div>
            <div className="flex gap-5">
              <Form.Select
                label="مذهب"
                name="religion"
                placeholder="انتخاب مذهب"
                
              >
                <Form.SelectItem value="اسلام">اسلام</Form.SelectItem>
                <Form.SelectItem value="مسیحیت">مسیحیت</Form.SelectItem>
                <Form.SelectItem value="یهودیت">یهودیت</Form.SelectItem>
                <Form.SelectItem value="زرتشتی">زرتشتی</Form.SelectItem>
                <Form.SelectItem value="سایر">سایر</Form.SelectItem>
              </Form.Select>
              <Form.Select
                label="گروه خونی"
                name="bloodGroup"
                placeholder="انتخاب گروه خونی"
                
              >
                <Form.SelectItem value="A+">A+</Form.SelectItem>
                <Form.SelectItem value="A-">A-</Form.SelectItem>
                <Form.SelectItem value="B+">B+</Form.SelectItem>
                <Form.SelectItem value="B-">B-</Form.SelectItem>
                <Form.SelectItem value="AB+">AB+</Form.SelectItem>
                <Form.SelectItem value="AB-">AB-</Form.SelectItem>
                <Form.SelectItem value="O+">O+</Form.SelectItem>
                <Form.SelectItem value="O-">O-</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Select
                label="ملیت"
                name="nationality"
                placeholder="انتخاب ملیت"
                
              >
                  <Form.SelectItem value="ایرانی">ایرانی</Form.SelectItem>
                <Form.SelectItem value="افغانستانی">افغانستانی</Form.SelectItem>
                <Form.SelectItem value="عراقی">عراقی</Form.SelectItem>
                <Form.SelectItem value="پاکستانی">پاکستانی</Form.SelectItem>
                <Form.SelectItem value="ترک">ترک</Form.SelectItem>
                <Form.SelectItem value="سایر">سایر</Form.SelectItem>
              </Form.Select>
              <Form.Select
                label="تابعیت"
                name="citizenship"
                placeholder="انتخاب تابعیت"
                
              >
                  <Form.SelectItem value="ایران">ایران</Form.SelectItem>
                <Form.SelectItem value="افغانستان">افغانستان</Form.SelectItem>
                <Form.SelectItem value="عراق">عراق</Form.SelectItem>
                <Form.SelectItem value="پاکستان">پاکستان</Form.SelectItem>
                <Form.SelectItem value="ترکیه">ترکیه</Form.SelectItem>
                <Form.SelectItem value="سایر">سایر</Form.SelectItem>
              </Form.Select>
            </div>
            <div className="flex gap-5">
              <Form.Input
                label="نشانی 1"
                name="address1"
                placeholder="نشانی 1"
                
              />
              <Form.Input
                label="نشانی 2"
                name="address2"
                placeholder="نشانی 2"
                
              />
            </div>

            <div className="flex gap-x-2 mt-5">
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "در حال به‌روزرسانی..." : "به‌روزرسانی پروفایل"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
