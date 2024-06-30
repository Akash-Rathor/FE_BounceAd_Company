import React, { useState , useEffect} from "react"
// import Header from "../components/Header/index"
import Sidebar from "../components/Sidebar/index"
import {useLogout} from '../utility/Auth/Auth';
import Navbar from "../components/Navbar/Navbar";
import Cookies from "js-cookie";

const DefaultLayout = ({ children,user}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { logoutUser } = useLogout();
  useEffect(() => {
    const token = Cookies.get('token');
    const getUser = () => {
      const u = Cookies.get('user');
    }
    if (!token) {
      logoutUser();
    }
    getUser();
  })

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} user={user}/>
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 space-y-10">
              <Navbar showLogo={false} isLoggedIn={true} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} user={user} />
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  )
}

export default DefaultLayout
