import React from "react";

const coursesPage = () => {
  return (
    <>
      <div className="h-auto md:h-[30rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 dark:bg-black/90">
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Our Courses
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Minimalistic , simple and user-friendly course experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default coursesPage;
