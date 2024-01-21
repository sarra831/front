import React from 'react';
import logo from "./../assests/img/logodns.png";

const NavBarUser = () => {
  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button id="toggleSidebar" aria-expanded="true" aria-controls="sidebar" className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h14M1 6h14M1 11h7"/>
              </svg>
            </button>
            <button aria-expanded="true" aria-controls="sidebar" className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            
              <img src={logo} className="h-10" alt="dns"/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DNS 360 </span>
            
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">Search</label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"/>
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <button type="button" className="hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
              Create
            </button>
            <button type="button" data-dropdown-toggle="notification-dropdown" className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <span className="sr-only">View notifications</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
              </svg>
            </button>
            <div id="notification-dropdown" className="hidden mt-2.5 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700">
              <div className="p-4">
                <p className="text-sm leading-5 font-medium text-gray-900 dark:text-white">Notifications</p>
              </div>
              <div className="p-4">
                <a href="#" className="flex items-start space-x-4">
                  <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/41.jpg" alt="User"/>
                  <div className="flex-1">
                    <p className="text-sm leading-5 font-medium text-gray-900 dark:text-white">Alan Green</p>
                    <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">added a new comment on your article: <span className="text-gray-900 dark:text-white">"Best practices for designing UI/UX"</span></p>
                    <time className="text-xs leading-5 text-gray-500 dark:text-gray-400" dateTime="2022-01-18T18:30:00">2 hours ago</time>
                  </div>
                </a>
                {/* Add more notifications here */}
              </div>
              <div className="p-2 text-right">
                <a href="#" className="text-sm leading-5 font-medium text-primary-600 dark:text-primary-400 hover:underline focus:outline-none focus:underline">View all notifications</a>
              </div>
            </div>
            <button className="flex items-center p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <span className="sr-only">Toggle dark mode</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Zm0 18.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 1.25a8.75 8.75 0 0 1 5.556 15.48 8.75 8.75 0 1 0-5.557-15.48Z"/>
              </svg>
            </button>
            <button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/42.jpg" alt="User"/>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarUser;
