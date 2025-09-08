import SectionCol from "@/components/shared/section/SectionCol";
import z from "zod";
import { Form } from "@/components/shared/Form";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import type { ExpenseTypeColumnProps } from "./column";


const ExpenseType = () => {
    const validation = z.object({
        name: z.string().min(1),
    });

    const defaultValues = {
        name: "",
    };


    const onSubmit = (data: z.infer<typeof validation>) => {
        console.log(data);
    };


    const data : ExpenseTypeColumnProps[] = [
        {
            name: "دسته بندی 1",
            createdAt: new Date(),
        },
    ];
    return (
        <>
            <SectionCol
                defaultValues={defaultValues}
                schema={validation}
                formFields={
                    <>
                        <Form.Input
                            name="name"
                            label="دسته بندی"
                            placeholder="دسته بندی"
                            required
                        />
                    </>
                }
                FirstTitle="دسته بندی ها"
                SecoundTitle="لیست همه دسته بندی ها"
                onSubmit={onSubmit}
                table={
                    <DataTable
                        columns={columns}
                        data={data}
                        searchableKeys={["name", "createdAt"]}
                    />
                }
            />
        </>
    );
}
 
export default ExpenseType;