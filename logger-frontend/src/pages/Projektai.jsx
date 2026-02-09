import { useState } from "react";
import { Link } from "react-router-dom";

// (visi projektai – menuvisiprojektai.html)
export default function Projektai() {
  const [form, setForm] = useState({ title: "", hours: "" });

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("Create project:", form);
  }

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Visi Projektai</h1>
      <p className="mb-4">
        Čia galite rasti visus savo projektus, paspaudę ant pavadinimo - galėsite jį redaguoti.
      </p>

      <div className="card mb-4">
        <div className="card-header">
          <h6 className="m-0 font-weight-bold text-primary">Pridėti naują projektą</h6>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Projekto pavadinimas</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Įveskite projekto pavadinimą"
                  value={form.title}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-md-3">
                <label>Valandos</label>
                <input
                  name="hours"
                  type="number"
                  className="form-control"
                  placeholder="Valandos"
                  value={form.hours}
                  onChange={onChange}
                />
              </div>

              <div className="form-group col-md-3 d-flex align-items-end">
                <Link to="/projects/new" className="btn btn-primary w-100">
                  Pridėti projektą
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projektų sąrašas</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Projektas</th>
                  <th>Valandos</th>
                  <th>Trinti</th>
                  <th>Atnaujinti</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="text-primary" style={{ cursor: "pointer" }}>
                      Prototipas
                    </span>
                  </td>
                  <td>8</td>
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
