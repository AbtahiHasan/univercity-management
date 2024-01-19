import { Menu, Layout } from "antd";

const { Sider } = Layout;

import { sidebarItemsGenerator } from "../utils/sidebarItemsGenerator";
import { adminPaths } from "../routes/admin.routes";
import { facultyPaths } from "../routes/faculty.routes";
import { studentPaths } from "../routes/student.routes";

const userRoles = {
  STUDENT: "student",
  FACULTY: "faculty",
  ADMIN: "admin",
};

const Sidebar = () => {
  const role = "student";
  let routeItems;
  switch (role) {
    case userRoles.ADMIN:
      routeItems = sidebarItemsGenerator(adminPaths, userRoles.ADMIN);
      break;
    case userRoles.FACULTY:
      routeItems = sidebarItemsGenerator(facultyPaths, userRoles.FACULTY);
      break;
    case userRoles.STUDENT:
      routeItems = sidebarItemsGenerator(studentPaths, userRoles.STUDENT);
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={routeItems}
      />
    </Sider>
  );
};

export default Sidebar;
