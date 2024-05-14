import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router";

export default function AboutUs() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
