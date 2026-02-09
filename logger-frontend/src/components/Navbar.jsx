import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/home">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Time Logger</div>
      </NavLink>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <NavLink className={navLinkClass} to="/home">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Pradinis</span>
        </NavLink>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseProjects"
          aria-expanded="true"
          aria-controls="collapseProjects"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Projektai</span>
        </a>

        <div id="collapseProjects" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink className="collapse-item" to="/projects">
              Visi Projektai
            </NavLink>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTasks"
          aria-expanded="true"
          aria-controls="collapseTasks"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Užduotys</span>
        </a>

        <div id="collapseTasks" className="collapse" aria-labelledby="headingManagement" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <NavLink className="collapse-item" to="/task-types">
              Užduočių tipai
            </NavLink>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />
    </ul>
  );
}
