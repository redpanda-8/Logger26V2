import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Sukurti paskyrą</h1>
                </div>

                <form className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        placeholder="Vardas"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        placeholder="Pavardė"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Slaptažodis"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Pakartokite slaptažodį"
                      />
                    </div>
                  </div>

                  <Link
                    to="/login"
                    className="btn btn-primary btn-user btn-block btn-sm"
                  >
                    Registruotis
                  </Link>
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
                    to="/login"
                    className="btn btn-link btn-sm p-0"
                  >
                    Jau turite paskyrą? Prisijungti
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
