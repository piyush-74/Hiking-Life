import icon from "../images/icon.png";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary" 
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <img src={icon} alt="" style={{ height: "30px", width: "30px" }} />
          <a className="navbar-brand" href="#">
            Hiking Life
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active custom-navbarres  " href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active custom-navbarres" href="#">
                  Class
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active custom-navbarres" href="#">
                  Promo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active custom-navbarres" href="#">
                  Online Class
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active custom-navbarres" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
