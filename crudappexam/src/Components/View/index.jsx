import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Data from "../Data";
import "./index.scss";
import { MdModeEdit, MdDelete } from "react-icons/md";
import axios from "axios";

const View = () => {
  const [data, setdata] = useState(Data);
  const getData = async () => {
    try {
      const url = "http://localhost:5000/students";
      const result = await axios.get(url);
      setdata(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteRequest = async (id) => {
    try {
      const url = ` http://localhost:5000/students/${id}`;
      const result = await axios.delete(url);
      console.log(result);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (
    id,
    Roll_Number,
    Name,
    English,
    Hindi,
    Telugu,
    Science,
    Social,
    Extra_activities
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("roll", Roll_Number);
    localStorage.setItem("Name", Name);
    localStorage.setItem("eng", English);
    localStorage.setItem("tel", Telugu);
    localStorage.setItem("hin", Hindi);
    localStorage.setItem("sci", Science);
    localStorage.setItem("sco", Social);
    localStorage.setItem("ext", Extra_activities);
    console.log(Name);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
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
            {data.map((s) => {
              const total =
                s.English +
                s.Telugu +
                s.Science +
                s.Social +
                s.Hindi +
                s.Extra_activities;
              return (
                <tr key={s.Roll_Number}>
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
                      <MdModeEdit
                        onClick={() =>
                          handleEdit(
                            s.id,
                            s.Roll_Number,
                            s.Name,
                            s.English,
                            s.Hindi,
                            s.Telugu,
                            s.Science,
                            s.Social,
                            s.Extra_activities
                          )
                        }
                      />
                    </Link>
                  </td>
                  <td>
                    <MdDelete onClick={() => deleteRequest(s.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
