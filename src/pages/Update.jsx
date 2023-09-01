
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TextFieldCustom from "../components/TextFieldCustom";
import Button from "../components/Button";
const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://64803335f061e6ec4d48c93c.mockapi.io/crudoperations/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/Read");
      });
  };
  return (
    <>
      <div className="py-20 bg-slate-950 min-h-screen text-white">
      
      <div className="flex justify-around m-2">
        <h2 className="text-2xl ">Update Notes</h2>
        <Link to="/read-notes">
          <Button text={'Show Data'} />
        </Link>
      </div>
      <form className="flex flex-col items-center gap-4 mt-4 w-2/3 mx-auto">
        <TextFieldCustom value={name} setValue={(val) => setName(val)} label={"Name"} />
        <TextFieldCustom value={email} setValue={(val) => setEmail(val)} label={"Email"} />
        <TextFieldCustom value={notes} setValue={(val) => setNotes(val)} label={"Notes"} />
        <div className="flex justify-center items-center gap-4">
          <Button handleClick={handleUpdate} text={"Update"} />
          <Link to="/read-notes"><span className="text-white">Back</span></Link>
        </div>
      </form>
      
    </div>
    </>
  );
};
export default Update;