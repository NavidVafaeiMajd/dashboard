import PayslipPreview from "./PayslipPreview";
import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const toNumber = (s: string | null) => Number((s || "0").toString().replace(/[\,\s]/g, ""));

const PayslipDetailsPage = () => {
  const { id } = useParams();
  const [params] = useSearchParams();

  const data = useMemo(() => {
    const employee = params.get("employee") || `کارمند ${id}`;
    const monthlySalary = toNumber(params.get("monthlySalary"));
    const salary = toNumber(params.get("salary"));
    const payDateMs = Number(params.get("payDate")) || Date.now();
    const payDate = new Date(payDateMs);
    return { employee, monthlySalary, salary, payDate };
  }, [id, params]);

  return (
    <PayslipPreview
      employee={data.employee}
      monthlySalary={data.monthlySalary}
      salary={data.salary}
      payDate={data.payDate}
    />
  );
};

export default PayslipDetailsPage;


