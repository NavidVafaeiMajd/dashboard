const PostLoad = () => {
  return (
    <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <span className="mr-2">در حال ارسال اطلاعات...</span>
    </div>
  );
};

export default PostLoad;
