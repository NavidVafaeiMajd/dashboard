// components/PermissionsTree/permissionsData.js
export interface PermissionItem {
  id: number;
  label: string;
  children?: PermissionItem[];
}

export const staffPermissions: PermissionItem[] = [
  {
    id: 1,
    label: "حضور و غیاب",
    children: []
  },
  {
    id: 2,
    label: "عملیات حقوق",
    children: [
      {
        id: 3,
        label: "تنظیم حقوق و دستمزد",
        children: [
          {
            id: 4,
            label: "لیست حقوق و دستمزد شرکت",
            children: []
          },
          {
            id: 5,
            label: "ایجاد فیش حقوقی",
            children: []
          },
          {
            id: 6,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 7,
        label: "تاریخچه فیش حقوقی",
        children: []
      },
      {
        id: 8,
        label: "مساعده حقوق",
        children: [
          {
            id: 9,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 10,
            label: "درخواست پیش پرداخت",
            children: []
          },
          {
            id: 11,
            label: "ویرایش",
            children: []
          },
          {
            id: 12,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 13,
        label: "وام",
        children: [
          {
            id: 14,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 15,
            label: "درخواست پیش پرداخت",
            children: []
          },
          {
            id: 16,
            label: "ویرایش",
            children: []
          },
          {
            id: 17,
            label: "حذف",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 18,
    label: "پشتیبـانی",
    children: [
      {
        id: 19,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 20,
        label: "ایجاد درخواست پشتیبانی",
        children: []
      },
      {
        id: 21,
        label: "ویرایش",
        children: []
      },
      {
        id: 22,
        label: "نمایش درخواست پشتیبانی",
        children: []
      },
      {
        id: 23,
        label: "حذف",
        children: []
      },
      {
        id: 24,
        label: "به روز رسانی وضعیت",
        children: []
      },
      {
        id: 25,
        label: "پیوست فایل",
        children: []
      },
      {
        id: 26,
        label: "یادداشت",
        children: []
      }
    ]
  },
  {
    id: 27,
    label: "آموزش",
    children: [
      {
        id: 28,
        label: "ثبت نام دوره آموزش",
        children: [
          {
            id: 29,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 30,
            label: "افزودن",
            children: []
          },
          {
            id: 31,
            label: "ویرایش",
            children: []
          },
          {
            id: 32,
            label: "حذف",
            children: []
          },
          {
            id: 33,
            label: "یادداشت",
            children: []
          },
          {
            id: 34,
            label: "به روز رسانی وضعیت",
            children: []
          }
        ]
      },
      {
        id: 35,
        label: "مشخصات مدرس",
        children: [
          {
            id: 36,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 37,
            label: "افزودن",
            children: []
          },
          {
            id: 38,
            label: "ویرایش",
            children: []
          },
          {
            id: 39,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 40,
        label: "مهارت های آموزشی",
        children: [
          {
            id: 41,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 42,
            label: "افزودن",
            children: []
          },
          {
            id: 43,
            label: "ویرایش",
            children: []
          },
          {
            id: 44,
            label: "حذف",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 45,
    label: "گواهی اشتغال به کار",
    children: [
      {
        id: 46,
        label: "فرم تحویل دارایی",
        children: [
          {
            id: 47,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 48,
            label: "ویرایش",
            children: []
          },
          {
            id: 49,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 50,
        label: "بانک",
        children: [
          {
            id: 51,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 52,
            label: "افزودن",
            children: []
          },
          {
            id: 53,
            label: "ویرایش",
            children: []
          },
          {
            id: 54,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 55,
        label: "شعبه",
        children: [
          {
            id: 56,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 57,
            label: "افزودن",
            children: []
          },
          {
            id: 58,
            label: "ویرایش",
            children: []
          },
          {
            id: 59,
            label: "حذف",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 60,
    label: "افزودن",
    children: []
  },
  {
    id: 61,
    label: "مدیریت پاداشها",
    children: [
      {
        id: 62,
        label: "پاداشها",
        children: [
          {
            id: 63,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 64,
            label: "افزودن",
            children: []
          },
          {
            id: 65,
            label: "ویرایش",
            children: []
          },
          {
            id: 66,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 67,
        label: "نوع پاداش",
        children: [
          {
            id: 68,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 69,
            label: "افزودن",
            children: []
          },
          {
            id: 70,
            label: "ویرایش",
            children: []
          },
          {
            id: 71,
            label: "حذف",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 72,
    label: "مدیریت سفر",
    children: [
      {
        id: 73,
        label: "امور مسافرت",
        children: [
          {
            id: 74,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 75,
            label: "افزودن",
            children: []
          },
          {
            id: 76,
            label: "ویرایش",
            children: []
          },
          {
            id: 77,
            label: "حذف",
            children: []
          },
          {
            id: 78,
            label: "به روز رسانی وضعیت",
            children: []
          }
        ]
      },
      {
        id: 79,
        label: "اقسام سفر",
        children: [
          {
            id: 80,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 81,
            label: "افزودن",
            children: []
          },
          {
            id: 82,
            label: "ویرایش",
            children: []
          },
          {
            id: 83,
            label: "حذف",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 84,
    label: "درخواست مرخصی",
    children: [
      {
        id: 85,
        label: "تنظیم مرخصی ها",
        children: [
          {
            id: 86,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 87,
            label: "افزودن",
            children: []
          },
          {
            id: 88,
            label: "ویرایش",
            children: []
          },
          {
            id: 89,
            label: "حذف",
            children: []
          },
          {
            id: 90,
            label: "به روز رسانی وضعیت",
            children: []
          }
        ]
      },
      {
        id: 91,
        label: "نوع مرخصی",
        children: [
          {
            id: 92,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 93,
            label: "افزودن",
            children: []
          },
          {
            id: 94,
            label: "ویرایش",
            children: []
          },
          {
            id: 95,
            label: "حذف",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 96,
    label: "درخواست اضافه کاری",
    children: [
      {
        id: 97,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 98,
        label: "افزودن",
        children: []
      },
      {
        id: 99,
        label: "ویرایش",
        children: []
      },
      {
        id: 100,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 101,
    label: "شکایت ها",
    children: [
      {
        id: 102,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 103,
        label: "افزودن",
        children: []
      },
      {
        id: 104,
        label: "ویرایش",
        children: []
      },
      {
        id: 105,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 106,
    label: "استعفاها",
    children: [
      {
        id: 107,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 108,
        label: "افزودن",
        children: []
      },
      {
        id: 109,
        label: "ویرایش",
        children: []
      },
      {
        id: 110,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 111,
    label: "پرونده های انضباطی",
    children: [
      {
        id: 112,
        label: "پرونده های انضباطی",
        children: [
          {
            id: 113,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 114,
            label: "افزودن",
            children: []
          },
          {
            id: 115,
            label: "ویرایش",
            children: []
          },
          {
            id: 116,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 117,
        label: "نوع پرونده",
        children: [
          {
            id: 118,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 119,
            label: "افزودن",
            children: []
          },
          {
            id: 120,
            label: "ویرایش",
            children: []
          },
          {
            id: 121,
            label: "حذف",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 122,
    label: "نقل و انتقالات",
    children: [
      {
        id: 123,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 124,
        label: "افزودن",
        children: []
      },
      {
        id: 125,
        label: "ویرایش",
        children: []
      },
      {
        id: 126,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 127,
    label: "تنظیمات سیستم",
    children: [
      {
        id: 128,
        label: "تنظیمات",
        children: []
      },
      {
        id: 129,
        label: "انواع ماژول",
        children: []
      },
      {
        id: 130,
        label: "قالب های ایمیل",
        children: []
      }
    ]
  },
  {
    id: 131,
    label: "فیلدهای سفارش",
    children: []
  }
];

// components/PermissionsTree/permissionsData.js

export const managePermissions : PermissionItem[] = [
  {
    id: 1,
    label: "مدیریت پرسنل",
    children: [
      {
        id: 2,
        label: "پرسنل",
        children: [
          {
            id: 3,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 4,
            label: "افزودن",
            children: []
          },
          {
            id: 5,
            label: "نمایش",
            children: []
          },
          {
            id: 6,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 7,
        label: "شیفت و برنامه ریزی",
        children: [
          {
            id: 8,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 9,
            label: "افزودن",
            children: []
          },
          {
            id: 10,
            label: "ویرایش",
            children: []
          },
          {
            id: 11,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 12,
        label: "انفصال از خدمت",
        children: [
          {
            id: 13,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 14,
            label: "افزودن",
            children: []
          },
          {
            id: 15,
            label: "ویرایش",
            children: []
          },
          {
            id: 16,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 17,
        label: "نوع انفصال",
        children: [
          {
            id: 18,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 19,
            label: "افزودن",
            children: []
          },
          {
            id: 20,
            label: "ویرایش",
            children: []
          },
          {
            id: 21,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 22,
        label: "پروفایل پرسنل",
        children: [
          {
            id: 23,
            label: "ویرایش اطلاعات اولیه",
            children: []
          },
          {
            id: 24,
            label: "ویرایش اطلاعات شخصی",
            children: []
          },
          {
            id: 25,
            label: "ویرایش تصویر پروفایل",
            children: []
          },
          {
            id: 26,
            label: "ویرایش اطلاعات حساب",
            children: []
          },
          {
            id: 27,
            label: "نمایش اسناد",
            children: []
          },
          {
            id: 28,
            label: "تغییر رمز عبور",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 29,
    label: "ترفیعات و تبدیل وضعیت",
    children: [
      {
        id: 30,
        label: "آگهی استخدام",
        children: [
          {
            id: 31,
            label: "فهرست شغل ها",
            children: []
          },
          {
            id: 32,
            label: "افزودن",
            children: []
          },
          {
            id: 33,
            label: "ویرایش",
            children: []
          },
          {
            id: 34,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 35,
        label: "آگهی های دریافتی",
        children: []
      },
      {
        id: 36,
        label: "مصاحبه ها",
        children: []
      },
      {
        id: 37,
        label: "ترفیع ها",
        children: []
      }
    ]
  },
  {
    id: 38,
    label: "مدیریت منابع انسانی",
    children: [
      {
        id: 39,
        label: "ابلاغیه ها",
        children: [
          {
            id: 40,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 41,
            label: "افزودن",
            children: []
          },
          {
            id: 42,
            label: "ویرایش",
            children: []
          },
          {
            id: 43,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 44,
        label: "واحد سازمانی",
        children: [
          {
            id: 45,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 46,
            label: "افزودن",
            children: []
          },
          {
            id: 47,
            label: "ویرایش",
            children: []
          },
          {
            id: 48,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 49,
        label: "سمت سازمانی",
        children: [
          {
            id: 50,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 51,
            label: "افزودن",
            children: []
          },
          {
            id: 52,
            label: "ویرایش",
            children: []
          },
          {
            id: 53,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 54,
        label: "خط مشی ها",
        children: [
          {
            id: 55,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 56,
            label: "افزودن",
            children: []
          },
          {
            id: 57,
            label: "ویرایش",
            children: []
          },
          {
            id: 58,
            label: "حذف",
            children: []
          },
          {
            id: 59,
            label: "مشاهده خط مشیها",
            children: []
          }
        ]
      },
      {
        id: 60,
        label: "چارت سازمانی",
        children: []
      }
    ]
  },
  {
    id: 61,
    label: "حضور و غیاب",
    children: [
      {
        id: 62,
        label: "ثبت تردد دستی پرسنل",
        children: [
          {
            id: 63,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 64,
            label: "افزودن",
            children: []
          },
          {
            id: 65,
            label: "ویرایش",
            children: []
          },
          {
            id: 66,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 67,
        label: "گزارش کارکرد ماهانه",
        children: []
      }
    ]
  },
  {
    id: 68,
    label: "ارزیابی عملکرد کارکنان",
    children: [
      {
        id: 69,
        label: "رتبه بندی شاخص ها",
        children: [
          {
            id: 70,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 71,
            label: "افزودن",
            children: []
          },
          {
            id: 72,
            label: "ویرایش",
            children: []
          },
          {
            id: 73,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 74,
        label: "ارزیابی کارکنان",
        children: [
          {
            id: 75,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 76,
            label: "افزودن",
            children: []
          },
          {
            id: 77,
            label: "ویرایش",
            children: []
          },
          {
            id: 78,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 79,
        label: "تنظیم اندیکاتور",
        children: [
          {
            id: 80,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 81,
            label: "افزودن",
            children: []
          },
          {
            id: 82,
            label: "ویرایش",
            children: []
          },
          {
            id: 83,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 84,
        label: "پیگیری اهداف (OKR)",
        children: [
          {
            id: 85,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 86,
            label: "افزودن",
            children: []
          },
          {
            id: 87,
            label: "ویرایش",
            children: []
          },
          {
            id: 88,
            label: "حذف",
            children: []
          },
          {
            id: 89,
            label: "به روز رسانی رتبه بندی",
            children: []
          }
        ]
      },
      {
        id: 90,
        label: "انواع اهداف",
        children: [
          {
            id: 91,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 92,
            label: "افزودن",
            children: []
          },
          {
            id: 93,
            label: "ویرایش",
            children: []
          },
          {
            id: 94,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 95,
        label: "تقویم اهداف",
        children: []
      }
    ]
  },
  {
    id: 96,
    label: "مدیریت مشتریان",
    children: [
      {
        id: 97,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 98,
        label: "افزودن",
        children: []
      },
      {
        id: 99,
        label: "ویرایش",
        children: []
      },
      {
        id: 100,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 101,
    label: "رویدادها",
    children: [
      {
        id: 102,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 103,
        label: "افزودن",
        children: []
      },
      {
        id: 104,
        label: "ویرایش",
        children: []
      },
      {
        id: 105,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 106,
    label: "رزرو کنفرانس",
    children: [
      {
        id: 107,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 108,
        label: "افزودن",
        children: []
      },
      {
        id: 109,
        label: "ویرایش",
        children: []
      },
      {
        id: 110,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 111,
    label: "تعطیلات",
    children: [
      {
        id: 112,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 113,
        label: "افزودن",
        children: []
      },
      {
        id: 114,
        label: "ویرایش",
        children: []
      },
      {
        id: 115,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 116,
    label: "دفتر ثبت بازدیدکنندگان",
    children: [
      {
        id: 117,
        label: "فعال کردن ماژول",
        children: []
      },
      {
        id: 118,
        label: "افزودن",
        children: []
      },
      {
        id: 119,
        label: "ویرایش",
        children: []
      },
      {
        id: 120,
        label: "حذف",
        children: []
      }
    ]
  },
  {
    id: 121,
    label: "مدیر اسناد",
    children: [
      {
        id: 122,
        label: "اسناد عمومی",
        children: [
          {
            id: 123,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 124,
            label: "افزودن",
            children: []
          },
          {
            id: 125,
            label: "ویرایش",
            children: []
          },
          {
            id: 126,
            label: "حذف",
            children: []
          }
        ]
      },
      {
        id: 127,
        label: "اسناد رسمی",
        children: [
          {
            id: 128,
            label: "فعال کردن ماژول",
            children: []
          },
          {
            id: 129,
            label: "افزودن",
            children: []
          },
          {
            id: 130,
            label: "ویرایش",
            children: []
          },
          {
            id: 131,
            label: "حذف",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 132,
    label: "فهرست انجام کارها",
    children: []
  },
  {
    id: 133,
    label: "گزارشات سیستم",
    children: []
  }
];