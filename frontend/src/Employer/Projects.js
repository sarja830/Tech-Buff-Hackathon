import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../config/dev";
import AddText from "./AddText";
import Prompt from "./Prompt";

const Projects = ({setIsNew}) => {
  const [projects, setProjects] = useState([]);
  const [toggleProject, setToggleProject] = useState("");
  const [showdetails, setShowdetails] = useState(false);
  const [id, setId] = useState("");
//   const navigate = useNavigate();

  const toggleAddProjectHandler = () => {
    setToggleProject(true);
  };

  const showProjectHandler = (id) => {
    // navigate("/employee/prompt", {state: {id: id}});
    setShowdetails(true);
    setId(id);
  }

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
    !showdetails ? (!toggleProject ? <div>
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
        <div className="flex flex-col items-center mt-10 bg-white h-full shadow-xl gap-2 py-10">
        {projects.map((item, index) => (
          <button key={item.id} onClick={showProjectHandler.bind(null, item.id)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white w-1/2 px-10 py-2">
            {item.name}
          </button>
        ))}
        </div>
      </div>
    </div> :
    <AddText setIsNew={setIsNew} />) :
    <Prompt id={id} />
  );
};

export default Projects;
