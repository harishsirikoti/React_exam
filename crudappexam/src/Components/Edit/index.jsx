import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Data from "../Data";
import "../Add/index.scss";
import axios from "axios";


const Edit = () => {
  const [id,setid]=useState();
  const editForm = async (updateData) => {
    const update={
      'id': id,"Name": name,
    "Roll_Number": roll,
    "English": eng,
    "Telugu": tel,
    "Hindi": hin,
    "Science": sci,
    "Social": sco,
    "Extra_activities": ext,
    }
    try {
        const result = await axios.put(` http://localhost:5000/students/${id}`, update);
    }
    catch (error) {
        console.log(error)
    }
    history("/")
    
} 
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [eng, seteng] = useState();
  const [tel, settel] = useState();
  const [hin, sethin] = useState();
  const [sci, setsci] = useState();
  const [sco, setsco] = useState();
  const [ext, setext] = useState();
  let history = useNavigate();
  useEffect(() => {
    setid(localStorage.getItem("id"));
    setname(localStorage.getItem("Name"));
    setroll(localStorage.getItem("roll"));
    seteng(localStorage.getItem("eng"));
    settel(localStorage.getItem("tel"));
    sethin(localStorage.getItem("hin"));
    setsci(localStorage.getItem("sci"));
    setsco(localStorage.getItem("sco"));
    setext(localStorage.getItem("ext"));
  }, []);
  return (
    <div className="form">
      <div>
        <div className="from_header">
          Update <span>Profile</span>
        </div>
        <form
          onSubmit={handleSubmit(() => {
            editForm();
          })}
        >
          <label>
            Roll Number : <b>{roll}</b>
          </label>
          <label>Student Name</label>
          <input
            {...register("Name", { required: "This feild is required" })}
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <p>{errors.Name?.message}</p>
          <div className="sub">
            <div className="input">
              <label>English</label>
              <input
                {...register("English", {
                  required: "This feild is required",
                  max: { value: 100, message: "Max Value 100" },
                })}
                placeholder="English"
                type="number"
                value={eng}
                onChange={(e) => seteng(e.target.value)}
              />
              <p>{errors.English?.message}</p>
            </div>
            <div className="input">
              <label>Telugu</label>
              <input
                {...register("Telugu", {
                  required: "This feild is required",
                  max: { value: 100, message: "Max Value 100" },
                })}
                placeholder="Telugu"
                type="number"
                value={tel}
                onChange={(e) => settel(e.target.value)}
              />
              <p>{errors.Telugu?.message}</p>
            </div>
            <div className="input">
              <label>Hindi</label>
              <input
                {...register("Hindi", {
                  required: "This feild is required",
                  max: { value: 100, message: "Max Value 100" },
                })}
                placeholder="Hindi"
                type="number"
                value={hin}
                onChange={(e) => sethin(e.target.value)}
              />
              <p>{errors.Hindi?.message}</p>
            </div>
            <div className="input">
              <label>Science</label>
              <input
                {...register("Science", {
                  required: "This feild is required",
                  max: { value: 100, message: "Max Value 100" },
                })}
                placeholder="Science"
                type="number"
                value={sci}
                onChange={(e) => setsci(e.target.value)}
              />
              <p>{errors.Science?.message}</p>
            </div>
            <div className="input">
              {" "}
              <label>Social</label>
              <input
                {...register("Social", {
                  required: "This feild is required",
                  max: { value: 100, message: "Max Value 100" },
                })}
                placeholder="Social"
                type="number"
                value={sco}
                onChange={(e) => setsco(e.target.value)}
              />
              <p>{errors.Social?.message}</p>
            </div>
            <div className="input">
              <label>Extra Activities</label>
              <input
                {...register("Extra", {
                  required: "This feild is required",
                  max: { value: 100, message: "Max Value 100" },
                })}
                placeholder="Extra Activities"
                type="number"
                value={ext}
                onChange={(e) => setext(e.target.value)}
              />
              <p>{errors.Extra?.message}</p>
            </div>
          </div>

          {/* <label>Total Marks : {total==0?0:total}</label> */}
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default Edit;
