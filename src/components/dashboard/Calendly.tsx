"use client";
import { InlineWidget } from "react-calendly";

const Calenderly = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Calendly</h2>
      <div className="sm:w-[500px] h-[650px]">
        <InlineWidget url="https://calendly.com/montyits71/new-meeting" />
      </div>
    </div>
  );
};

export default Calenderly;
