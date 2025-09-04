import { DataTable } from "@/components/shared/data-table";
import { FollowUp_List } from "./const";
import { columns } from "./columns";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Tracking = () => {

  const validation = z.object({
    date: z.date(),
    description: z.string().min(1, "توضیحات الزامی است"),
  });

  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      date: new Date(),
      description: "",
    },
  });


  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
 
    <div>
            <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <span> پیگیری </span>
      </div>
      <div className="p-3">
          <DataTable
            columns={columns}
            data={FollowUp_List}
            searchableKeys={["date", "description"]}
          />
      </div>
      </div>
      <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <span> پیگیری جدید </span>
      </div>
      <div className="p-3">

      <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5 bg-[#F9F9FB] p-5"
        >
            <Form.Date
            name="date"
            label="تاریخ"
          />
          <Form.Input
            name="description"
            label="توضیحات"
            placeholder="توضیحات"
            required
          />

          <div className="flex gap-x-2 mt-5">
            <Button type="submit">ثبت </Button>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default Tracking;
