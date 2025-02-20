import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />  {/* ✅ Keeps Header on all pages */}
      <Outlet />   {/* ✅ Renders the current route's content */}
    </>
  );
};

export default Layout;
