
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import TextFieldCustom from "../components/TextFieldCustom";
const Create = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log("clicked");
    if(nameError || emailError) {
      return
    }
    axios
      .post("https://64803335f061e6ec4d48c93c.mockapi.io/crudoperations", {
        name: name,
        email: email,
        notes: notes,
      })
      .then(() => {
        navigate('/read-notes')
      });
  };

  const checkNameValidation = () => {
    if(name?.trim() === ""){
      setNameError("Name field should't be empty");
      return
    }
    if(!(/^[a-zA-Z\s]+$/).test(name)){
      setNameError("Name field should only contains alphabets and space");
      return
    }
  }
  
  const checkEmailValidation = () => {
    if(email?.trim() === ""){
      setEmailError("Email field should't be empty");
      return
    }
    if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)){
      setEmailError("Please write a valid email address");
      return
    }
  }

  const handleChange = (field, val) => {
    if(field === 'name') {
      setNameError('');
      setName(val);
    } else if (field === 'email') {
      setEmailError('');
      setEmail(val);
    } else if (field === 'notes') {
      setNotes(val);
    }
  }

  return (
    <>
    {/* <div
          className="w-80 h-80 bg-fuchsia-400 absolute top-0 left-5 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"
        ></div>
        <div
          className="w-80 h-80 bg-rose-200 absolute bottom-0 right-0 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"
        ></div> */}
    <div className="py-20 bg-slate-950 min-h-screen text-white">
  
      <div className="flex justify-around m-2">
        <h2 className="text-2xl ">Create Notes</h2>
        <Link to="/read-notes">
          <Button text={'Show Data'} />
        </Link>
      </div>
      <form className="flex flex-col items-center gap-6 mt-4 w-2/3 mx-auto">
        <TextFieldCustom handleOnBlur={checkNameValidation} value={name} setValue={(val) => handleChange("name", val)} label={"Name"} />
        {nameError ? <p className="text-center text-red-600">{nameError}</p> : null}
        <TextFieldCustom handleOnBlur={checkEmailValidation} value={email} setValue={(val) => handleChange("email", val)} label={"Email"} />
        {emailError ? <p className="text-center text-red-600">{emailError}</p> : null}
        <TextFieldCustom value={notes} setValue={(val) => handleChange("notes", val)} label={"Notes"} />
        <Button handleClick={handleSubmit} text={"Submit"} />
      </form>
      
    </div>
    </>
  );
};
export default Create;
