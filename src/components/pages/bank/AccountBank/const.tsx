import type { BankAccount } from "./columns"; 

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
