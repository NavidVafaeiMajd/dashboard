// components/PermissionsTree/permissionsData.js
export interface PermissionItem {
  id: number;
  label: string;
  children?: PermissionItem[];
}

export const staffPermissions : PermissionItem[] = [
  {
    id: 1,
    label: "مدیریت پرسنل",
    children: []
  },
  {
    id: 2,
    label: "عملیات حقوق",
    children: [
        {
            id: 3,
            label: "تنظیم حقوق و دستمزد",
            children: [{
                id: 3,
                label: "تنظیم حقوق و دستمزد",
                children: []
            }]
      },
      {
        id: 4,
        label: "تاریخچه فیش حقوقی",
        children: []
      }
    ]
  },
  {
    id: 5,
    label: "پشتیبانی",
    children: []
  }
];

// components/PermissionsTree/permissionsData.js

export const managePermissions : PermissionItem[] = [
  {
    id: 1,
    label: "مدیریت پرسنل",
    children: []
  },
  {
    id: 2,
    label: "عملیات حقوق",
    children: [
      {
        id: 3,
        label: "تنظیم حقوق و دستمزد",
        children: []
      },
      {
        id: 4,
        label: "تاریخچه فیش حقوقی",
        children: []
      }
    ]
  },
  {
    id: 5,
    label: "پشتیبانی",
    children: []
  }
];
