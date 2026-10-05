import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 text-dark" to="/">
            <span className="text-primary">Visitors</span> Wall
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/add-visitor">
                  Add Visitor
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav align-items-lg-center gap-lg-1">
              {/* LinkedIn */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/lakshminarayanareddykummetha"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>

              {/* LeetCode */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://leetcode.com/u/thelachu/"
                  target="_blank"
                  rel="noopener noreferrer">
                  LeetCode
                </a>
              </li>

              {/* GitHub */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub
                </a>
              </li>

              {/* Documentation */}
              <li className="nav-item">
                <a
                  className="btn btn-outline-dark btn-sm ms-lg-2 px-3"
                  href="https://github.com/thelachu/VisitorsWall/blob/Main/README.md"
                  target="_blank"
                  rel="noopener noreferrer">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
