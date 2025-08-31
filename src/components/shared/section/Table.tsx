// components/shared/DynamicPage.tsx

interface TableProps {
  table?: React.ReactNode;
  Title?: string;
}

const Table = ({
  table,
  Title = "فرم",
}: TableProps) => {

  return (
      <div className="  bg-bgBack rounded-sm shadow">
        <div className="border-b-red-500 border-b-2 px-5 py-3 flex justify-between items-center">
          <span>{Title}</span>
        </div>  
        {table && <div className="mt-5 bg-[#F9F9FB]">{table}</div>}
      </div>
  );
};

export default Table;
