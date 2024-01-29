import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const contentContainerRef = React.useRef(null);
  const { t } = useTranslation();

  React.useEffect(() => {
    if (contentContainerRef.current) {
      const contentHeight = contentContainerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const marginTop = (viewportHeight - contentHeight) / 2;
      contentContainerRef.current.style.marginTop = marginTop + "px";
    }
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div
        className="container mx-auto px-4 py-8 text-center lg:py-16"
        ref={contentContainerRef}
      >
        {/* Added `h-screen` to section for full height */}
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            DATA Network
          </span>{" "}
          Solutions.
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {t("home_page_title")}
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0">
          <Link
            to="/login"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            {t("login_label")}
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link
            to="/register"
            className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            {t("create_account_label")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
