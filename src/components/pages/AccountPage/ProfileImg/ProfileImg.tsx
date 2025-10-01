import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { IoDocumentTextOutline } from "react-icons/io5";
import { validation } from "./validation";
import { usePostRows } from "@/hook/usePostRows";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";



const ProfileImg = ({ queryData }: { queryData: any }) => {
  const { id } = useParams();

  const defaultValues = {
    image: queryData?.image == null ? undefined : queryData?.image,
  };



  const { form, mutation } = usePostRows(
    `profile/avatar`,
    ["profile"],
    defaultValues,
    validation,
     "تصویر پروفایل"
  );

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = Cookies.get("token");
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const res = await fetch(`http://localhost:8000/api/employees/${queryData?.id}/image`, {
        method: "DELETE",
        headers,
      });
      if (!res.ok) {
        throw new Error("حذف تصویر ناموفق بود");
      }
      return res.json();
    },
    onSuccess: () => {
      toast.success("تصویر با موفقیت حذف شد");
      queryClient.invalidateQueries({ queryKey: ["employeesDetailse", id] });
      // Clear the form image field
      form.setValue("image", undefined);
    },
    onError: (error: any) => {
      toast.error(error?.message || "خطا در حذف تصویر");
    },
  });
  
  const onSubmit = (data: any) => {
    // Create FormData to send file
    const formData = new FormData();
    if (data.image) {
      formData.append('image', data.image);
    }
    console.log(formData);

    mutation.mutate(formData);
  };

  
  const onDelete = () => {
    deleteMutation.mutate();
  };

  
  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <IoDocumentTextOutline className="w-7 h-7" />
        <span> تصویر پروفایل </span>
      </div>
      <div className="p-3">
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
          <Form.Image name="image" label=" تصویر پروفایل " required />

          <div>
            <Button type="submit" className="mt-4">
              ذخیره
            </Button>
          </div>
        </Form>
      </div>
      <div>
        {queryData?.image &&(
          <div className="flex gap-2 items-center p-4">
            <img src={`http://localhost:8000/${queryData?.image}`} className="w-40 h-40" alt="" />
            <Button 
              type="button" 
              variant="destructive" 
              onClick={() => onDelete()}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? "در حال حذف..." : "حذف تصویر"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImg;
