import Dropdown from "./Dropdown";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { create, homepage } from "../../routePaths";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-300 hover:bg-gradient-to-r from-base-300 via-sky-950 to-indigo-950 border-b border-1 border-slate-800/70 sticky top-0 z-40">
        <div className="navbar-start">
          <Dropdown>
            <li>
              <Link to={homepage}>homepage</Link>
            </li>
          </Dropdown>
        </div>
        <div className="navbar-center">
          <Link to="/homepage" className="btn btn-ghost text-xl ">
            <img
              className="rounded-xl"
              src={process.env.PUBLIC_URL + "/bullpost.jpg"}
              loading="lazy"
              alt="Resume "
              title="Resume "
              width="64"
              height="54"
            ></img>
            Ecommerce
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex flex-row">
            {/* <Search />
            <Notif /> */}
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                <li
                  className="ml-3 mr-3 btn btn-sm btn-outline"
                  onClick={() => navigate(create)}
                >
                  Post product
                </li>
                <li
                  className="ml-3 mr-3 badge badge-accent badge-sm"
                  onClick={() => navigate(create)}
                >
                  Cart 0 KES 100
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
