"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

type Item = {
  id: string
  label: string
  children?: Item[]
}

const data: Item[] = [
  {
    id: "operations",
    label: "عملیات حقوق",
    children: [
      { id: "salary", label: "تنظیم حقوق و دستمزد" },
      { id: "history", label: "تاریخچه فیش حقوقی" },
      { id: "help", label: "مساعده حقوق" },
    ],
  },
  { id: "loan", label: "وام" },
  { id: "support", label: "پشتیبانی" },
  { id: "training", label: "آموزش" },
]

export default function AccessForm() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const handleCheck = (id: string, checked: boolean, children?: Item[]) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: checked }

      // اگر والد تیک خورد، همه بچه‌ها هم تیک بخورن
      if (children) {
        children.forEach((child) => {
          updated[child.id] = checked
        })
      }

      return updated
    })
  }

  const renderItems = (items: Item[]) => (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="ml-4">
          <label className="flex items-center space-x-2">
            <Checkbox
              checked={!!checkedItems[item.id]}
              onCheckedChange={(checked) =>
                handleCheck(item.id, checked as boolean, item.children)
              }
            />
            <span>{item.label}</span>
          </label>
          {item.children && (
            <div className="ml-6 mt-1">{renderItems(item.children)}</div>
          )}
        </li>
      ))}
    </ul>
  )

  return <div>{renderItems(data)}</div>
}
