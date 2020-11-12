import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap"
export default function Result() {
  
  const result = useSelector((state) => state.dataReducer.datas);
  useEffect(() => {

  }, [result])
  return (
    <div className="d-flex justify-content-center mt-5">
      <Table striped bordered hover style={{width: "50vw"}}>
        <thead>
          <tr>
            <th>No</th>
            <th>coach type</th>
            <th>location</th>
            <th>name</th>
            <th>seat</th>
            <th>time</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {result.length
            ? result.map((value, idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{value.coach_type}</td>
                    <td>{value.location}</td>
                    <td>{value.name}</td>
                    <td>{value.seat}</td>
                    <td>{value.time}</td>
                    <td><Button className="bg-secondary">View</Button></td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </Table>
    </div>
  );
}
