import { useEffect, useState } from "react";
import { DataTable } from "@/component/shared/data-table";
import { userColumns } from "./columns";

export interface User {
   id: number;
   name: string;
   position: string;
   phone: string;
   gender: "male" | "female";
   country: string;
   accessLevel: "admin" | "user" | "guest";
   status: "active" | "inactive" | "pending";
   [key: string]: unknown;
}

const Table: React.FC = () => {
   const [data, setData] = useState<User[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         const response: User[] = [
            {
               id: 1,
               name: "Navid Karimi",
               position: "مدیر فروش",
               phone: "+98 912 123 4567",
               gender: "male",
               country: "Iran",
               accessLevel: "admin",
               status: "active",
            },
            {
               id: 2,
               name: "Sara Ahmadi",
               position: "کارشناس پشتیبانی",
               phone: "+98 935 987 6543",
               gender: "female",
               country: "Iran",
               accessLevel: "user",
               status: "inactive",
            },
            {
               id: 3,
               name: "John Doe",
               position: "توسعه‌دهنده",
               phone: "+1 202 555 0123",
               gender: "male",
               country: "USA",
               accessLevel: "user",
               status: "active",
            },
            {
               id: 4,
               name: "Emma Brown",
               position: "مدیر محصول",
               phone: "+44 20 7946 0958",
               gender: "female",
               country: "UK",
               accessLevel: "admin",
               status: "pending",
            },
            {
               id: 5,
               name: "Ali Rezaei",
               position: "تحلیل‌گر داده",
               phone: "+98 912 555 7788",
               gender: "male",
               country: "Iran",
               accessLevel: "guest",
               status: "active",
            },
            {
               id: 6,
               name: "Fatemeh Mohammadi",
               position: "طراح رابط کاربری",
               phone: "+98 911 223 3344",
               gender: "female",
               country: "Iran",
               accessLevel: "user",
               status: "active",
            },
            {
               id: 7,
               name: "Michael Smith",
               position: "مدیر بازاریابی",
               phone: "+1 303 555 0199",
               gender: "male",
               country: "USA",
               accessLevel: "admin",
               status: "inactive",
            },
            {
               id: 8,
               name: "Leila Jafari",
               position: "توسعه‌دهنده بک‌اند",
               phone: "+98 937 456 7890",
               gender: "female",
               country: "Iran",
               accessLevel: "user",
               status: "active",
            },
            {
               id: 9,
               name: "David Johnson",
               position: "توسعه‌دهنده فرانت‌اند",
               phone: "+1 415 555 0133",
               gender: "male",
               country: "USA",
               accessLevel: "user",
               status: "pending",
            },
            {
               id: 10,
               name: "Maryam Shiri",
               position: "تحلیل‌گر کسب‌وکار",
               phone: "+98 935 678 9012",
               gender: "female",
               country: "Iran",
               accessLevel: "guest",
               status: "active",
            },
            {
               id: 11,
               name: "James Williams",
               position: "کارشناس سئو",
               phone: "+44 20 7946 2222",
               gender: "male",
               country: "UK",
               accessLevel: "user",
               status: "active",
            },
            {
               id: 12,
               name: "Parisa Ghasemi",
               position: "پشتیبانی مشتری",
               phone: "+98 936 789 0123",
               gender: "female",
               country: "Iran",
               accessLevel: "user",
               status: "inactive",
            },
            {
               id: 13,
               name: "Robert Wilson",
               position: "مدیر فنی",
               phone: "+1 212 555 0177",
               gender: "male",
               country: "USA",
               accessLevel: "admin",
               status: "active",
            },
            {
               id: 14,
               name: "Hanieh Kazemi",
               position: "کارشناس محتوا",
               phone: "+98 933 654 3210",
               gender: "female",
               country: "Iran",
               accessLevel: "user",
               status: "pending",
            },
            {
               id: 15,
               name: "Chris Lee",
               position: "طراح گرافیک",
               phone: "+44 20 7946 3333",
               gender: "male",
               country: "UK",
               accessLevel: "guest",
               status: "active",
            },
         ];
         setData(response);
      };
      fetchData();
   }, []);

   return (
      <DataTable<User, unknown>
         columns={userColumns}
         data={data}
         searchableKeys={["name", "position", "phone", "accessLevel"]}
      />
   );
};

export default Table;
