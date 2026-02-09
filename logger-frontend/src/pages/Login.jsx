import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Sveiki sugrįžę!</h1>
                  </div>

                  <form
                    className="user"
                    onSubmit={(e) => {
                      e.preventDefault();
                      navigate("/home");
                    }}
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        placeholder="Enter Email Address..."
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="remember"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="remember"
                        >
                          Prisiminti mane
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-user btn-block btn-sm"
                    >
                      Prisijungti
                    </button>
                  </form>

                  <hr />

                  <div className="text-center">
                    <Link
                      to="/forgot-password"
                      className="btn btn-link btn-sm p-0"
                    >
                      Priminti slaptažodį
                    </Link>
                  </div>

                  <div className="text-center">
                    <Link
                      to="/register"
                      className="btn btn-link btn-sm p-0"
                    >
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
