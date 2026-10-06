function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-4 text-center text-lg-start mb-3 mb-lg-0">
            <h5 className="fw-bold mb-1">Visitors Wall</h5>

            <p className="text-secondary mb-0 small">
              A simple place to leave your mark.
            </p>
          </div>

          <div className="col-lg-4 mb-3 mb-lg-0">
            <ul className="list-inline text-center mb-0">
              <li className="list-inline-item">
                <a href="/" className="text-light text-decoration-none small">
                  Home
                </a>
              </li>

              <li className="list-inline-item text-secondary">•</li>

              <li className="list-inline-item">
                <a
                  href="/add-visitor"
                  className="text-light text-decoration-none small">
                  Add Visitor
                </a>
              </li>

              <li className="list-inline-item text-secondary">•</li>

              <li className="list-inline-item">
                <a
                  href="https://github.com/thelachu/VisitorsWall/blob/Main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none small">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 text-center text-lg-end">
            <a
              href="https://www.linkedin.com/in/lakshminarayanareddykummetha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none me-3">
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/thelachu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none me-3">
              LeetCode
            </a>

            <a
              href="https://github.com/thelachu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none">
              GitHub
            </a>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center">
          <small className="text-secondary">
            © {new Date().getFullYear()} Visitors Wall. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
