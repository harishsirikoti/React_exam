import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Data from "../Data";
import './index.scss'

const Add = () => {
  const { register } = useForm();
  const [name, setname] = useState("");
  const [eng, seteng] = useState();
  const [tel, settel] = useState();
  const [hin, sethin] = useState();
  const [sci, setsci] = useState();
  const [sco, setsco] = useState();
  const [ext, setext] = useState();
  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Data.length+1;
    Data.push({
      Name: name,
      Roll_Number: id,
      English: eng,
      Telugu: tel,
      Hindi: hin,
      Science: sci,
      Social: sco,
      Extra_activities: ext,
    });
    history("/");
  };
  const total = eng + tel + hin + sci + sco + ext;
  const roll = Data.length+1;
  return (
    <div className="form">
      <div>
      <div className="from_header">Create <span>Profile</span></div>
      <form >
        <label>Roll Number : {roll}</label>
        <input
          {...register("Name", { required: "This feild is required" })}
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <div className="sub">
        <input
          {...register("English", { required: "This feild is required" })}
          placeholder="English"
          type="number"
          value={eng}
          onChange={(e) => seteng(e.target.value)}
        />
        <input
          {...register("Telugu", { required: "This feild is required" })}
          placeholder="Telugu"
          type="number"
          value={tel}
          onChange={(e) => settel(e.target.value)}
        />
        <input
          {...register("Hindi", { required: "This feild is required" })}
          placeholder="Hindi"
          type="number"
          value={hin}
          onChange={(e) => sethin(e.target.value)}
        />
        <input
          {...register("Science", { required: "This feild is required" })}
          placeholder="Science"
          type="number"
          value={sci}
          onChange={(e) => setsci(e.target.value)}
        />
        <input
          {...register("Social", { required: "This feild is required" })}
          placeholder="Social"
          type="number"
          value={sco}
          onChange={(e) => setsco(e.target.value)}
        />
        <input
          {...register("Extra Activities", {
            required: "This feild is required",
          })}
          placeholder="Extra Activities"
          type="number"
          value={ext}
          onChange={(e) => setext(e.target.value)}
        />
        </div>
        
        {/* <label>Total Marks : {total==0?0:total}</label> */}
        <input type="submit" onClick={(e) => handleSubmit(e)} className="submit"/>
      </form>
      </div>
    </div>
  );
};

export default Add;
