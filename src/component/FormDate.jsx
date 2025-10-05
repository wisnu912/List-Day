import React, { useState } from "react";
import { use } from "react";

const FormDate = ({ Add }) => {
  const [showForm, setShowForm] = useState(false);
  const [jamMasuk, setJamMasuk] = useState("");
  const [jamPulang, setJamPulang] = useState("");
  const [shifName , setShif] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    Add(jamMasuk, jamPulang , shifName);
    setJamMasuk(""); // reset form
    setJamPulang("");
    setShif("")
    setShowForm(false); // tutup form setelah submit
  };

  const HandleShow = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="flex flex-col items-center mx-4">
        {/* Form */}
        {showForm && (
          <form
            onSubmit={HandleSubmit}
            className="max-w-md mx-auto bg-white w-full mt-10 p-6 rounded-2xl shadow-lg"
          >
            
            <div className="mb-5">
              <label
                htmlFor="shif"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Shif Name
              </label>
              <input
                type="text"
                id="jamMasuk"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 block w-full
                           p-3 transition duration-200"
                required
                value={shifName}
                onChange={(e) => setShif(e.target.value)}
              />
            </div>

             <div className="mb-5">
              <label
                htmlFor="jamMasuk"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Jam Masuk
              </label>
              <input
                type="datetime-local"
                id="jamMasuk"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-200"
                required
                value={jamMasuk}
                onChange={(e) => setJamMasuk(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="jamPulang"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Jam Pulang
              </label>
              <input
                type="datetime-local"
                id="jamPulang"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-200"
                required
                value={jamPulang}
                onChange={(e) => setJamPulang(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 
                         focus:ring-4 focus:outline-none focus:ring-blue-300 
                         font-medium rounded-lg text-sm px-5 py-3 text-center transition duration-200"
            >
              Add Jam
            </button>
          </form>
        )}

        {/* Toggle Button */}
        <button
          onClick={HandleShow}
          type="button"
          className="bg-sky-400 rounded-lg text-white font-medium text-md px-6 py-3 w-72 my-7 transition duration-200 hover:bg-sky-500"
        >
          {showForm ? "Close" : "Add Jam"}
        </button>
      </div>
    </>
  );
};

export default FormDate;
