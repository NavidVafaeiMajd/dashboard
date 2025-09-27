// services/shifts.ts
export type ShiftPayload = {
    id: number;
    name: string;
    saturday_start: string | null;
    saturday_end: string | null;
    sunday_start: string | null;
    sunday_end: string | null;
    monday_start: string | null;
    monday_end: string | null;
    tuesday_start: string | null;
    tuesday_end: string | null;
    wednesday_start: string | null;
    wednesday_end: string | null;
    thursday_start: string | null;
    thursday_end: string | null;
    friday_start: string | null;
    friday_end: string | null;
    created_at: string;
    updated_at: string;
  };
  
  export async function createShift(data: ShiftPayload) {
    const res = await fetch("http://localhost:8000/api/shifts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
      throw new Error("خطا در ثبت شیفت");
    }
  
    return res.json();
  }
  