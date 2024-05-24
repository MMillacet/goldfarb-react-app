import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layouts() {
  return (
    <>
      <Header />

      <main className="">
        <Outlet />
      </main>
    </>
  );
}