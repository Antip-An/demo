import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import useToken from "./hooks/useToken";

const Page = () => {
  const { loggedIn } = useToken();
  return (
    <div>
      <Header />
      <Outlet />
      <Footer /> 
    </div>
  );
};

export default Page;