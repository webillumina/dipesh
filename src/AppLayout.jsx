import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
