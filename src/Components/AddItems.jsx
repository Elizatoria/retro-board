import { useState } from "react";

const AddItems = ({items, setItems, wentWell, setWentWell}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className={
                hasError && !wentWell ? "is-invalid form-control" : "form-control"
              }
              type="text"
              placeholder="Name of Task"
              aria-label="Name of Task"
              value={wentWell}
              onChange={(e) => setWentWell(e.target.value)}
            />
            {hasError && !wentWell && (
              <div className="invalid-feedback">
                Please enter a Task
              </div>
            )}
          </div>
     
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Retro Board</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Went Well</th>
              <th>Likes</th>
              <th>Dislikes</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((item, index) => {
              return (
                <tr key={`item-${index}`}>
                  <td>{item.wentWell}</td>
                  <td><Likes /></td>
                  <td><Dislikes /></td>
                  <td>
                    <button
                      aria-label="Delete"
                      title="Delete"
                      className="btn"
                      onClick={() => deleteFromList(index)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
}

export default AddItems;