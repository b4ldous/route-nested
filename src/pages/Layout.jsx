import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/first">First</Link> |{" "}
        <Link to="/second">Second</Link>
      </nav>
      <Outlet />
    </div>
  );
}
