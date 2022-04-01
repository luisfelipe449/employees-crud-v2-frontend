import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import axios from "axios";
import { Button, Input, InputLabel } from "@mui/material";
import "./style.css";

export default function Forms(props) {
  const addEmployee = () => {
    axios
      .post("http://localhost:3001/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => {
        setEmployeeList([
          ...employeeList,
          {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
          },
        ]);
      });
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  return (
    <Box
        className='container'
      component="form"
      sx={{
        "& > :not(style)": { mt: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ width: "20ch" }}>
        <InputLabel htmlFor="component-simple">Name: </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
      </FormControl>
      <FormControl sx={{ width: "20ch" }}>
        <InputLabel htmlFor="component-simple">Age: </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="text"
        />
      </FormControl>
      <FormControl sx={{ width: "20ch" }}>
        <InputLabel htmlFor="component-simple">Country: </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          type="text"
        />
      </FormControl>
      <FormControl sx={{ width: "20ch" }}>
        <InputLabel htmlFor="component-simple">Position: </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          type="text"
        />
      </FormControl>
      <FormControl sx={{ width: "20ch" }}>
        <InputLabel htmlFor="component-simple">Wage: </InputLabel>
        <Input
          id="component-simple"
          onChange={(e) => {
            setWage(e.target.value);
          }}
          type="text"
        />
      </FormControl>
      <Button variant="contained" className='btn-add' onClick={addEmployee}>Add Employee</Button>
      
    </Box>
  );
}
