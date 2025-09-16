import { useEffect } from "react";
import Table from "./Table";
import SectionAccImg from "@/components/shared/section/SectionAccImg";
import { Form } from "@/components/shared/Form";
import z from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { imageSchema } from "@/components/shared/validation";
import { toast } from "react-toastify";

const StaffList: React.FC = () => {
  const title = "پرسنل";
  useEffect(() => {
    document.title = title;
  }, []);

  const validation = z.object({
    firstName: z
      .string()
      .min(1, "نام الزامی است")
      .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است")
      .describe("مثلاً: نوید"),

    lastName: z
      .string()
      .min(1, "نام خانوادگی الزامی است")
      .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است")
      .describe("مثلاً: محمدی"),

    personeliCode: z
      .string()
      .regex(/^\d+$/, "فقط عدد مجاز است")
      .min(1, "کد پرسنلی الزامی است")
      .describe("مثلاً: 12345"),

    phoneNumber: z
      .string()
      .regex(/^09\d{9}$/, "شماره تماس معتبر نیست")
      .describe("مثلاً: 09121234567"),

    gender: z.string().refine((val) => val !== "", {
      message: "لطفاً یک گزینه انتخاب کنید",
    }),

    shift: z.string().refine((val) => val !== "", {
      message: "لطفاً یک گزینه انتخاب کنید",
    }),

    department_id: z.coerce.number().min(1, "واحد سازمانی الزامی است"),

    designations_id: z.coerce.number().min(1, "واحد سازمانی الزامی است"),

    position: z.string().refine((val) => val !== "", {
      message: "لطفاً یک گزینه انتخاب کنید",
    }),

    image: imageSchema,
  });

  const defaultValues = {
    firstName: " ",
    lastName: "",
    personeliCode: "",
    phoneNumber: "",
    gender: "مرد",
    shift: "morning",
    department_id: 1,
    designations_id: 1,
    position: "فعال",
    image: null,
  };

  // 📌 queryClient برای invalidate
  const queryClient = useQueryClient();

  // 📌 mutation برای ارسال داده
  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof validation>) => {
      const res = await fetch("http://localhost:8000/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error("ثبت پرسنل ناموفق بود");
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("ثبت پرسنل با موفقیت انجام شد");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      toast.error("ثبت پرسنل ناموفق بود");
    },
  });
  const formFields = (
    <div className="relative">
      {mutation.isPending && (
        <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="mr-2">در حال ارسال اطلاعات...</span>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input name="firstName" label="نام" required placeholder="نام" />
        <Form.Input
          name="lastName"
          label="نام خانوادگی"
          required
          placeholder="نام خانوادگی"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input
          name="personeliCode"
          label="کد پرسنلی"
          placeholder="کد پرسنلی"
          required
        />
        <Form.Input
          name="phoneNumber"
          label="شماره تماس"
          placeholder="شماره تماس"
        />
        <Form.Select name="gender" label="جنسیت" placeholder="جنسیت" required>
          <Form.SelectItem value="مرد">آقا</Form.SelectItem>
          <Form.SelectItem value="زن">خانم</Form.SelectItem>
        </Form.Select>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select
          name="shift"
          label="شیفت اداره ای"
          placeholder="شیفت اداره ای"
          required
        >
          <Form.SelectItem value="morning">صبح</Form.SelectItem>
          <Form.SelectItem value="afternoon">عصر</Form.SelectItem>
          <Form.SelectItem value="night">شب</Form.SelectItem>
        </Form.Select>
        <Form.Select name="position" label="وضعیت" placeholder="وضعیت" required>
          <Form.SelectItem value="فعال">فعال</Form.SelectItem>
          <Form.SelectItem value="ممنوع">ممنوع</Form.SelectItem>
        </Form.Select>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <Form.Select
          name="department_id"
          label="سمت سازمانی"
          placeholder="سمت سازمانی"
          required
        >
          <Form.SelectItem value="1">سمت سازمانی1</Form.SelectItem>
          <Form.SelectItem value="2">سمت سازمانی2</Form.SelectItem>
        </Form.Select>
        <Form.Select
          name="designations_id"
          label="واحد سازمانی"
          placeholder="واحد سازمانی"
          required
        >
          <Form.SelectItem value="1">واحد سازمانی1</Form.SelectItem>
          <Form.SelectItem value="2">واحد سازمانی2</Form.SelectItem>
        </Form.Select>
      </div>
    </div>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("📦 Submitted Data:", data);
    mutation.mutate(data);
  };

  return (
    <>
      <SectionAccImg
        schema={validation}
        defaultValues={defaultValues}
        formFields={formFields}
        file={
          <>
            {" "}
            <Form.Image name="image" label="تصویر پروفایل" />{" "}
          </>
        }
        onSubmit={onSubmit}
        table={<Table />}
        FirstTitle="ثبت جدید کارمند  "
        SecoundTitle="لیست همه پرسنل"
        FileTitle="تصویر پروفایل"
      />
    </>
  );
};

export default StaffList;
