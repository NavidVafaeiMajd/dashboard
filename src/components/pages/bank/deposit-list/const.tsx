import type { DepositList } from "./columns";

export const DEPOSIT_LIST: DepositList[] = [
  {
    id: "1",
    accountType: "جاری",
    receiver: "علی رضایی",
    amount: 2000000,
    category: "حقوق",
    reference: "REF123456",
    paymentMethod: "کارت به کارت",
    date: new Date("2025-08-30"), // نمونه تاریخ میلادی
  },
  {
    id: "2",
    accountType: "پس‌انداز",
    receiver: "شرکت توسعه پارس",
    amount: 350000,
    category: "هزینه اداری",
    reference: "REF987654",
    paymentMethod: "حواله بانکی",
    date: new Date("2025-08-29"),
  },
  {
    id: "3",
    accountType: "سپرده مدت‌دار",
    receiver: "محمد کریمی",
    amount: 150000,
    category: "بازپرداخت وام",
    reference: "REF112233",
    paymentMethod: "پرداخت نقدی",
    date: new Date("2025-08-28"),
  },
];
