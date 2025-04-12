import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/employe";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => (
    <tr key={key.empno}>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.designation}</td>
      <td>{key.salary}</td>
    </tr>
  ));

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Emp No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Display;
