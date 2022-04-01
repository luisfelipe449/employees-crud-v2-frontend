import axios from "axios";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function EmployeeCard() {
  const [employeeList, setEmployeeList] = useState([]);
  const [show, setShow] = useState(false);

  const getEmployees = () => {
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  const columns = [
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    { field: "country", headerName: "Country", width: 100 },
    { field: "position", headerName: "Position", width: 100 },
    {
      field: "wage",
      headerName: "Wage",
      type: "number",
      width: 130,
    },
  ];

  const detailsRows = employeeList.map((row) => {
    return {
      id: row.id,
      name: row.name,
      age: row.age,
      country: row.country,
      position: row.position,
      wage: row.wage,
    };
  });

  const handleClick = () => {
    getEmployees();
    console.log(
      employeeList.map((val, key) => {
        return val.name;
      })
    );
    setShow(!show);
  };

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <Button onClick={handleClick}>Load Employees</Button>
        {show ? (
          <DataGrid
            rows={detailsRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        ) : null}
      </div>
    </>
  );
}
