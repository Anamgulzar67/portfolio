import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://64803335f061e6ec4d48c93c.mockapi.io/crudoperations")
      .then((res) => {
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://64803335f061e6ec4d48c93c.mockapi.io/crudoperations/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <div
          className="w-80 h-80 bg-fuchsia-500 absolute top-0 -left-5 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"
        ></div>
        <div
          className="w-80 h-80 bg-orange-400 absolute bottom-0 right-0 z-10 blur-2xl opacity-30 overflow-hidden rounded-full"
        ></div>
    <div className="py-20 bg-slate-950 min-h-screen text-white">
      <div className="flex justify-around m-2">
        <h2 className="text-2xl ">Notes</h2>
        <Link to="/create-notes">
          <Button text={'Create Notes'} />
        </Link>
      </div>
      <div className="flex justify-center mt-8">
        <table className={`w-2/3`}>
          <thead>
            <tr>
              <th scope="col" className="px-4 py-2">#</th>
              <th scope="col" className="px-4 py-2">Name</th>
              <th scope="col" className="px-4 py-2">Email</th>
              <th scope="col" className="px-4 py-2">Notes</th>
              <th scope="col" className="px-4 py-2"></th>
              <th scope="col" className="px-4 py-2"></th>
            </tr>
          </thead>
          {data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row text-center">{eachData.id}</th>
                    <td className="px-4 py-2 text-center">{eachData.name}</td>
                    <td className="px-4 py-2 text-center">{eachData.email}</td>
                    <td className="px-4 py-2 flex justify-center flex-wrap">{eachData.notes}</td>
                    <td className="text-center">
                      <Link to="/update-notes">
                        <button
                          // className="bg-orange-400 hover:opacity-90 hover:underline px-4 py-2 rounded-full"
                          onClick={() =>
                            setToLocalStorage(
                              eachData.id,
                              eachData.name,
                              eachData.email,
                              eachData.notes
                            )
                          }
                        >
                          <span className="text-orange-400">Edit{" "}</span>
                        </button>
                      </Link>
                    </td>
                    <td className="text-center">
                      <button
                        className="bg-red-500 hover:opacity-90 hover:underline px-4 py-2 rounded-full"
                        onClick={() => handleDelete(eachData.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </div>
    </>
  );
};
export default Read;