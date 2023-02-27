import { Outlet } from "react-router-dom";

function PageContent() {
  return (
    <div className="PageContent">
      <Outlet/>
    </div>
  );
}
export default PageContent;
