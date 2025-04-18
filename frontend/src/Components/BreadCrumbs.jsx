import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 py-4 px-6">
      <ul className="flex items-center gap-2 text-xl">
        <li>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline"
          >
            Home
          </button>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              {isLast ? (
                <span className="text-gray-700 capitalize" aria-current="page">
                  {value}
                </span>
              ) : (
                <NavLink
                  to={to}
                  className="text-blue-600 hover:underline capitalize"
                >
                  {value}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
