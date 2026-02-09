import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Navbar />

        <div id="content-wrapper" className="d-flex flex-column w-100 ">
          <div id="content">
            <Header />
            <Outlet />
          </div>

          <Footer />
        </div>
      </div>

      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* Logout Modal (paliekam layout'e, kad būtų visur) */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current session.
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">
                Cancel
              </button>
              {/* Čia vėliau galėsit daryti realų logout */}
              <button className="btn btn-primary" type="button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
