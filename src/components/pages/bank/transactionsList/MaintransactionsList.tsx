import React from 'react'
import { DataTable } from '@/components/shared/data-table'
import { BANK_ACCOUNTS } from './const'
import { useBankColumns } from './columns'
export default function MaintransactionsList() {
    const { columns, modal } = useBankColumns();
    return (
        <>
            <div className="shadow-2xl w-[100%] rounded-[5px] h-fit bg-[#F9F9FB]">
                <div className="w-full h-[45px] p-2 items-center rounded-t-[9px] bg-[#FFF7FA] border-b-2 border-[#FF3A86]">
                    <span className="text-[17px]">لیست معامله ها</span>
                </div>
                <div>
                    <DataTable
                        columns={columns}
                        data={BANK_ACCOUNTS}
                        searchableKeys={["accountNumber", "accountType"]}
                    />
                </div>
            </div>
        </>
    )
}
