import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Data from "../Data";
import '../Add/index.scss'

const Edit = () => {
  const { register } = useForm();
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [eng, seteng] = useState();
  const [tel, settel] = useState();
  const [hin, sethin] = useState();
  const [sci, setsci] = useState();
  const [sco, setsco] = useState();
  const [ext, setext] = useState();
  let history = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    let a=Data[roll-1]
    a.Name=name;
    a.English=eng;
    a.Hindi=hin;
    a.Telugu=tel;
    a.Science=sci;
    a.Social=sco;
    a.Extra_activities=ext;
   
    history("/");
  };
  const total = eng + tel + hin + sci + sco + ext;
  
  useEffect(()=>{
    setname(localStorage.getItem("Name"))
    setroll(localStorage.getItem("roll"))
    seteng(localStorage.getItem("eng"))
    settel(localStorage.getItem("tel"))
    sethin(localStorage.getItem("hin"))
    setsci(localStorage.getItem("sci"))
    setsco(localStorage.getItem("sco"))
    setext(localStorage.getItem("ext"))
   },[])
  return (
    <div className="form">
    <div>
    <div className="from_header">Update <span>Profile</span></div>
      <form>
        <label>Roll Number : {roll}</label>
        <input
          {...register("Name", { required: "This feild is required" })}
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <div className="sub"><input
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
        /></div>
        {/* <label>Total Marks : {total==0?0:total}</label> */}
        <input type="submit" onClick={(e) => handleUpdate(e)} className="submit"/>
      </form>
    </div>
    </div>
  );
};

export default Edit;
