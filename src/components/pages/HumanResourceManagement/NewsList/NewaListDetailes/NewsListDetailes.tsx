const NewsListDetailes = () => {
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
              <span>عنوان</span>
            </div>
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>واحد سازمانی :</span>
              <span>واحد سازمانی</span>
            </div>
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>تاریخ شروع :</span>
              <span>تاریخ شروع</span>
            </div>
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>تاریخ پایان :</span>
              <span>تاریخ پایان</span>
            </div>
            <div className="flex justify-between gap-2 p-5 border-b-2 border-gray-200">
              <span>تاریخ ایجاد :</span>
              <span>تاریخ ایجاد</span>
            </div>
          </div>
        </div>
        <div className="bg-bgBack col-span-4">
          <div className="border-b-2 border-red-500 p-5">
            <h1>ابلاغیه</h1>
                  </div>
                  
          <div className=" p-5 border-b-2 border-gray-200">
            <div className="font-bold my-3">اختصاری :</div>
            <div>اختصاری</div>
          </div>
          <div className="p-5 border-b-2 border-gray-200">
            <div className="font-bold my-3">شرح :</div>
            <div>شرح</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsListDetailes;
