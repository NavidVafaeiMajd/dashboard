import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { validation } from "./validation";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useDepartments } from "@/hook/useDepartments";
import { useDesignationsts } from "@/hook/useDesignationsts";
import PostLoad from "@/components/ui/postLoad";

const BasicInfo = ({ queryData }: { queryData: any }) => {
  const { data: departments, isPending: departmentsLoading } = useDepartments();
  const { data: designationsts, isPending: designationstsLoading } =
    useDesignationsts();

  const departmentsMapped = departments?.data?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  const designationstsMapped = designationsts?.data?.map((item) => ({
    value: String(item.id),
    label: item.title,
  }));

  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      firstName: queryData?.firstName == null ? "" : queryData?.firstName,
      lastName: queryData?.lastName == null ? "" : queryData?.lastName,
      phoneNumber: queryData?.phoneNumber == null ? "" : queryData?.phoneNumber,
      gender: queryData?.gender == null ? "" : queryData?.gender,
      personeliCode:
        queryData?.personeliCode == null ? "" : queryData?.personeliCode,
      birthDate: queryData?.birthDate
        ? new Date(queryData.birthDate)
        : new Date(),

      department: queryData?.department_id
        ? String(queryData.department_id)
        : "",

      designation: queryData?.designation_id
        ? String(queryData.designation_id)
        : "",
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
      maritalStatus:
        queryData?.maritalStatus == null ? "" : queryData?.maritalStatus,
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
        birthDate: data.birthDate?.toISOString().split("T")[0], // Convert Date to YYYY-MM-DD
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

      const res = await fetch(
        `http://localhost:8000/api/employees/${queryData?.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(apiData),
        }
      );

      console.log("Response status:", res.status);

      if (!res.ok) {
        const errorText = await res.text();
        toast.error(`خطا ${res.status}: ${errorText}`);
        throw new Error(`HTTP ${res.status}: ${errorText}`);
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("اطلاعات با موفقیت به‌روزرسانی شد");
      queryClient.invalidateQueries({
        queryKey: ["employeesDetailse", queryData?.id],
      });
    },
    onError: () => {
      toast.error("به‌روزرسانی ناموفق بود");
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="relative">
      {mutation.isPending && (<PostLoad />)}
      {departmentsLoading && designationstsLoading && (<PostLoad/>)}
      
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
                options={[
                  { label: "مرد", value: "مرد" },
                  { label: "زن", value: "زن" },
                ]}
                required
              />
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
                options={[
                  { label: "فعال", value: "فعال" },
                  { label: "ممنوع", value: "ممنوع" },
                ]}
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Select
                label="وضعیت تاهل"
                name="maritalStatus"
                placeholder="انتخاب وضعیت تاهل"
                options={[
                  { label: "مجرد", value: "مجرد" },
                  { label: "متاهل", value: "متاهل" },
                  { label: "بیوه", value: "بیوه" },
                  {
                    label: "طلاق گرفته یا جدا شده",
                    value: "طلاق گرفته یا جدا شده",
                  },
                ]}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Form.Select
                name="department"
                label="واحد سازمانی"
                placeholder="واحد سازمانی"
                options={departmentsMapped || []}
                required
              />
              <Form.Select
                name="designation"
                label="سمت سازمانی"
                placeholder="سمت سازمانی"
                options={designationstsMapped || []}
                required
              />
            </div>
            <div className="flex gap-5">
              <Form.Input placeholder="استان" label="استان" name="province" />
              <Form.Input placeholder="شهر" label="شهر" name="city" />
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
                options={[
                  { label: "اسلام", value: "اسلام" },
                  { label: "مسیحیت", value: "مسیحیت" },
                  { label: "یهودیت", value: "یهودیت" },
                  { label: "زرتشتی", value: "زرتشتی" },
                  { label: "سایر", value: "سایر" },
                ]}
              />
              <Form.Select
                label="گروه خونی"
                name="bloodGroup"
                placeholder="انتخاب گروه خونی"
                options={[
                  { label: "A+", value: "A+" },
                  { label: "A-", value: "A-" },
                  { label: "B+", value: "B+" },
                  { label: "B-", value: "B-" },
                  { label: "AB+", value: "AB+" },
                  { label: "AB-", value: "AB-" },
                  { label: "O+", value: "O+" },
                  { label: "O-", value: "O-" },
                ]}
              />
            </div>
            <div className="flex gap-5">
              <Form.Select
                label="ملیت"
                name="nationality"
                placeholder="انتخاب ملیت"
                options={[
                  { label: "ایرانی", value: "ایرانی" },
                  { label: "افغانستانی", value: "افغانستانی" },
                  { label: "عراقی", value: "عراقی" },
                  { label: "پاکستانی", value: "پاکستانی" },
                  { label: "ترک", value: "ترک" },
                  { label: "سایر", value: "سایر" },
                ]}
              />
              <Form.Select
                label="تابعیت"
                name="citizenship"
                placeholder="انتخاب تابعیت"
                options={[
                  { label: "ایران", value: "ایران" },
                  { label: "افغانستان", value: "افغانستان" },
                  { label: "عراق", value: "عراق" },
                  { label: "پاکستان", value: "پاکستان" },
                  { label: "ترکیه", value: "ترکیه" },
                  { label: "سایر", value: "سایر" },
                ]}
              />
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
                {mutation.isPending
                  ? "در حال به‌روزرسانی..."
                  : "به‌روزرسانی پروفایل"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
