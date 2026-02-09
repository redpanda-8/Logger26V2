// src/pages/ForgotPassword.jsx
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-forgot-password-image"></div>

              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Priminti slaptažodį
                    </h1>
                    <p className="mb-4">
                      Įveskite savo el. pašto adresą, kad gautumėte slaptažodžio atstatymo nuorodą.
                    </p>
                  </div>

                  <form
                    className="user"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // čia galėtum pridėti atsiuntimo funkciją
                      navigate("/login"); // po sėkmingo atsiuntimo grįžta į login
                    }}
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        placeholder="Enter Email Address..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-user btn-block btn-sm"
                    >
                      Siųsti nuorodą
                    </button>
                  </form>

                  <hr />

                  <div className="text-center">
                    <Link to="/login" className="btn btn-link btn-sm p-0">
                      Grįžti į prisijungimą
                    </Link>
                  </div>

                  <div className="text-center">
                    <Link to="/register" className="btn btn-link btn-sm p-0">
                      Registruotis
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
