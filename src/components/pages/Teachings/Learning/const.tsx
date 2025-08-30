import type { LearningRecordType } from "./column"; // فرضاً نوع جدول رو اینجا داریم

export const LEARNING_RECORDS: LearningRecordType[] = [
  {
    id: "1",
    infoTecher: "1",           // مدرس: تست 1
    skillslearn: "2",          // مهارت آموزشی: backend 2
    priceLearn: "250000",      // هزینه آموزش
    status: "1",               // پرسنل: اکبر
    "entry-time": "2025-09-01", // تاریخ شروع
    "exit-time": "2025-09-30",  // تاریخ پایان
    text: "این یک متن تستی برای توضیحات است",
  },
  {
    id: "2",
    infoTecher: "2",
    skillslearn: "1",
    priceLearn: "300000",
    status: "2",
    "entry-time": "2025-10-01",
    "exit-time": "2025-10-20",
    text: "آموزش تستی شماره 2",
  },
  {
    id: "3",
    infoTecher: "1",
    skillslearn: "1",
    priceLearn: "200000",
    status: "2",
    "entry-time": "2025-11-05",
    "exit-time": "2025-11-25",
    text: "این کلاس شامل Frontend و Backend است",
  },
];
