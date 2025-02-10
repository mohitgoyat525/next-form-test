"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import ImageUpload from "../dashboard/ImgUpload";
import { DASHBOARD_BUTTON_LIST } from "../../utils/Helper";
import Link from "next/link";
import Calenderly from "./Calendly";

const Dashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [page, setPage] = useState<string | null>(null);

  // UseEffect to handle search params on the client side
  useEffect(() => {
    const pageParam = searchParams.get("page");
    setPage(pageParam);
  }, [searchParams]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  const [open, setOpen] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleButtonClick = (index: any) => {
    setOpen(open === index ? false : index);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen w-full">
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:flex flex-col py-10 px-5 bg-black text-white w-[300px] fixed top-0 left-0 min-h-screen justify-between transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-2">
          <h1 className="mb-3 text-center text-4xl font-semibold">Dashboard</h1>
          {DASHBOARD_BUTTON_LIST.map((item, index) => (
            <Link
              href={`/dashboard?page=${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => handleButtonClick(index)}
              key={index}
              className={`${
                page === item.toLowerCase().replace(" ", "-") &&
                "bg-white text-black"
              } py-2 px-3 rounded-lg cursor-pointer hover:bg-white/50 transition-all duration-300 hover:text-black`}
            >
              {item}
            </Link>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 py-2 px-3 rounded-lg text-white"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-5 max-md:pl-0 md:pl-[300px] pt-20">
        <div className="bg-yellow-500 min-h-20 py-5 px-3 w-full fixed top-0 left-0 md:left-[300px]">
          <h1 className="text-white font-semibold font-inter text-3xl">
            Welcome to Dashboard
          </h1>
          {/* Button to toggle sidebar on small screens */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white absolute top-6 left-6 p-2 bg-black rounded-md z-[60]"
          >
            {isSidebarOpen ? "Close" : "Open"} Sidebar
          </button>
        </div>

        {/* Render content based on the page */}
        {page === "values" ? (
          <p>First page</p>
        ) : page === "calenderly" ? (
          <Calenderly />
        ) : page === "images" ? (
          <ImageUpload />
        ) : null}
      </div>
    </div>
  );
};

// Wrapping the Dashboard in Suspense to handle client-side rendering issues
export default function SuspenseDashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
