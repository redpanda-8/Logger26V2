// (užduočių tipai – menupridetipro.html

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Tipas() {
  const [form, setForm] = useState({ typeName: "" });

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // vėliau: validacija + API POST
    console.log("Create task type:", form);
  }

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Visi užduočių tipai</h1>
      <p className="mb-4">
        Čia galite peržiūrėti ir įvesti užduočių tipus, paspaudę ant pavadinimo - galėsite jį redaguoti.
      </p>

      <div className="card mb-4">
        <div className="card-header">
          <h6 className="m-0 font-weight-bold text-primary">Pridėti naują užduočių tipą</h6>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Užduoties tipas</label>
                <input
                  name="typeName"
                  type="text"
                  className="form-control"
                  placeholder="Įveskite naują užduoties tipą"
                  value={form.typeName}
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-3 d-flex align-items-end">
                <Link to="/task-types/new" className="btn btn-primary w-100">
                  Pridėti naują tipą
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Visi užduočių tipai</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Užduočių tipai</th>
                  <th>Trinti</th>
                  <th>Atnaujinti</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* vietoje <a href="protipas.html" target="_blank"> */}
                  <td>
                    <span className="text-primary" style={{ cursor: "pointer" }}>
                      Užduoties Tipas 1
                    </span>
                  </td>
                  <td><button className="btn btn-danger btn-sm">Trinti</button></td>
                  <td><button className="btn btn-warning btn-sm">Atnaujinti</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
