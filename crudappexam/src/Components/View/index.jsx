import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Data from "../Data";
import './index.scss';
import { MdModeEdit,MdDelete } from "react-icons/md";


const View = () => {
  
  let history = useNavigate();
  const handleDelete = (Roll_Number) => {
    var index = Data.map(function (e) {
      return e.Roll_Number;
    }).indexOf(Roll_Number);
    Data.splice(index, 1);
    history("/");
  };
  const handleEdit = (Roll_Number,Name,English,Hindi,Telugu,Science,Social,Extra_activities) => {
    localStorage.setItem("roll",Roll_Number);
    localStorage.setItem("Name", Name);
    localStorage.setItem("eng",English);
    localStorage.setItem("tel",Telugu);
    localStorage.setItem("hin",Hindi);
    localStorage.setItem("sci",Science);
    localStorage.setItem("sco",Social);
    localStorage.setItem("ext",Extra_activities);
  };
  return (
    <div className="view">
      <Link to="/Add">
        <button>Add</button>
      </Link>
      <table>
        <thead>
          <th>Roll Number</th>
          <th>Name</th>
          <th>English</th>
          <th>Telugu</th>
          <th>Hindi</th>
          <th>Science</th>
          <th>Social</th>
          <th>Extra Activities</th>
          <th>Total Marks</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {Data.map((s) => {
            const total =
              s.English +
              s.Telugu +
              s.Science +
              s.Social +
              s.Hindi +
              s.Extra_activities;
            return (
              <tr>
                <td>{s.Roll_Number}</td>
                <td>{s.Name}</td>
                <td>{s.English}</td>
                <td>{s.Telugu}</td>
                <td>{s.Hindi}</td>
                <td>{s.Science}</td>
                <td>{s.Social}</td>
                <td>{s.Extra_activities}</td>
                <td>
                  <b>{total}</b>
                </td>
                <td>
                  <Link to="/Edit">
                  
                    <MdModeEdit onClick={() =>
                        handleEdit(
                        s.Roll_Number,
                         s.Name,
                         s.English,
                         s.Hindi,
                         s.Telugu,
                         s.Science,
                         s.Social,
                         s.Extra_activities
                        )
                      }/>
                    
                  </Link>
                </td>
                <td>
                  
                   <MdDelete onClick={() => handleDelete(s.Roll_Number)}/>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default View;
