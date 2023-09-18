import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../config/dev";
import AddText from "./AddText";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [toggleProject, setToggleProject] = useState("");

  const toggleAddProjectHandler = () => {
    setToggleProject(true);
  };

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/employer/get_projects`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(JSON.parse(JSON.stringify(response.data)));
        setProjects(response.data);
      })
      .catch((error) => {
        alert(error);
      });

      setToggleProject(false);
  }, []);

  return (
    !toggleProject ? <div>
      <div className="p-12">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="font-bold text-xl">All projects</h1>
          <button
            className="bg-indigo-600 rounded-md px-4 py-2 text-white"
            onClick={toggleAddProjectHandler}
          >
            New project
          </button>
        </div>
        {projects.map((item) => (
          <h1>

          </h1>
        ))}
      </div>
    </div> :
    <AddText />
  );
};

export default Projects;
