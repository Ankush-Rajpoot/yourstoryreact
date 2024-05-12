import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
