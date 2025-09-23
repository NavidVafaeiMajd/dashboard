import SkeletonLoading from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const NewsListDetailes = () => {
  const { id } = useParams();
  const useGetEmployee = async (): Promise<any> => {
    const res = await fetch(`http://localhost:8000/api/hr-news/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const {
    data: queryData,
    isLoading,
    isError,
    error,
  } = useQuery<any>({
    queryKey: ["hr-news-detailes", id],
    queryFn: useGetEmployee,
  });

  console.log(queryData);
  if (isLoading) {
    return <SkeletonLoading />;
  }

  if (isError)
    return (
      <div className="h-[200px]! flex justify-center items-center">
        خطا در دریافت دیتا: {(error as Error).message}
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
        <div className="bg-bgBack col-span-2">
          <div className="border-b-2 border-red-500 p-5">
            <h1>ابلاغیه</h1>
          </div>
          <div className="p-5">
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>عنوان :</span>
              <span>{queryData?.title}</span>
            </div>
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>واحد سازمانی :</span>
              <span>{queryData?.department?.name} </span>
            </div>
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>تاریخ شروع :</span>
              <span>
                {new Date(
                  queryData?.publish_date?.replace(" ", "T")
                ).toLocaleDateString("fa-IR")}
              </span>
            </div>
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>تاریخ پایان :</span>
              <span>
                {new Date(
                  queryData?.end_date?.replace(" ", "T")
                ).toLocaleDateString("fa-IR")}
              </span>
            </div>
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>تاریخ ایجاد :</span>
              <span>
                {new Date(
                  queryData?.created_at?.replace(" ", "T")
                ).toLocaleDateString("fa-IR")}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-bgBack col-span-4">
          <div className="border-b-2 border-red-500 p-5">
            <h1>ابلاغیه</h1>
          </div>

          <div className=" p-5 border-b-2 border-gray-200">
            <div className="font-bold my-3">اختصاری :</div>
            <div>{queryData?.summary}</div>
          </div>
          <div className="p-5 border-b-2 border-gray-200">
            <div className="font-bold my-3">شرح :</div>
            <div  dangerouslySetInnerHTML={{ __html: queryData?.content }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsListDetailes;
