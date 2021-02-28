const TopNavBar = (props) => {
  const navlinks = props.navlinks;

  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button
          className="navbar-toggler navbar-toggler-right hidden-lg-up"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href={navlinks[0].link}>
          {navlinks[0].text}
        </a>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href={navlinks[1].link}>
              {navlinks[1].text} <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={navlinks[2].link}>
              {navlinks[2].text}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={navlinks[3].link}>
              {navlinks[3].text}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={navlinks[4].link}>
              {navlinks[4].text}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={navlinks[5].link}>
              {navlinks[5].text}
              </a>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default TopNavBar;
