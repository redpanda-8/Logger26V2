// // V3 -  prototipas.html
// import { useState } from "react";
// export default function ProjectCreate() {
//   const [form, setForm] = useState({

export default function ProjectCreate() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Užduočių forma</h2>

      <div className="card mb-5">
        <div className="card-body">
          <table className="table table-bordered align-middle" id="taskTable">
            <thead className="table-light">
              <tr>
                <th>Užduoties tipas</th>
                <th>Užduoties aprašymas</th>
                <th>Laikas (val.)</th>
                <th>Data</th>
                <th>Veiksmai</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <select className="form-select form-control">
                    <option value="">-- Pasirinkite tipą --</option>
                    <option value="Programavimas">Programavimas</option>
                    <option value="Testavimas">Testavimas</option>
                    <option value="Dizainas">Dizainas</option>
                  </select>
                </td>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Užduoties aprašymas"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    className="form-control"
                    placeholder="Valandos"
                  />
                </td>

                <td>
                  <input type="date" className="form-control" />
                </td>

                <td className="text-center">
                  <button type="button" className="btn btn-success btn-sm me-2 m-1">
                    Pridėti
                  </button>

                  <button type="button" className="btn btn-danger btn-sm">
                    Ištrinti
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="mb-4">Užduočių suvestinė (vieno žmogaus)</h2>

      <div className="card">
        <div className="card-body">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>Užduoties tipas</th>
                <th>Bendra valandų suma</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Programavimas</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Testavimas</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Dizainas</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}