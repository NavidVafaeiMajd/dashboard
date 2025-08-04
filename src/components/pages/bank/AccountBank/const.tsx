// import type { designationColumnProps } from "./columns";

// export const DESIGNATION_CONSTANTS:designationColumnProps[] = [
//     {
//         id: "1",
//         designation: "مدیر عامل",
//         unit: "واحد مدیریت",
//     },
//     {
//         id: "2",
//         designation: "مدیر مالی",
//         unit: "واحد مالی",
//     },
//     {
//         id: "3",
//         designation: "مدیر منابع انسانی",
//         unit: "واحد منابع انسانی",
//     },
//     {
//         id: "4",
//         designation: "مدیر فناوری اطلاعات",
//         unit: "واحد فناوری اطلاعات",
//     },
// ]

// // نوع حساب بانکی	شماره حساب بانکی	ما به التفاوت	شعبه بانک



import type { BankAccount } from "./columns"; // یا همان فایل columns

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: "1",
    accountType: "جاری",
    accountNumber: "1234567890",
    difference: 2000000,
    branchName: "تهران مرکزی",
  },
  {
    id: "2",
    accountType: "پس‌انداز",
    accountNumber: "0987654321",
    difference: 350000,
    branchName: "ولیعصر",
  },
  {
    id: "3",
    accountType: "سپرده مدت‌دار",
    accountNumber: "1122334455",
    difference: 150000,
    branchName: "شعبه انقلاب",
  },
];
