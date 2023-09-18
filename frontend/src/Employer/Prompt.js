import React from "react";

const Prompt = () => {
  const prompt = {
    "steps": [
      {
        "step_number": 1,
        "category": "Market Research",
        "tasks": [
          "Research the current demand for supply chain transparency solutions",
          "Identify potential competitors in the market",
          "Analyze the target audience and their pain points"
        ],
        "team_positions": [
          {
            "position": "Market Research Analyst",
            "job_description": "Collect and analyze data on market trends, competitors, and customer preferences",
            "required_skills": ["Data analysis", "Market research", "Strong analytical skills"]
          }
        ],
        "resources": [
          {
            "resource": "Niagara Global Tourism Institute",
            "website": "https://niagaragti.com/"
          },
          {
            "resource": "Buffalo Niagara Partnership",
            "website": "https://www.thepartnership.org/"
          }
        ]
      },
      {
        "step_number": 2,
        "category": "Product Development",
        "tasks": [
          "Define the features and functionality of the blockchain platform",
          "Design a user-friendly interface",
          "Develop a prototype for testing and validation"
        ],
        "team_positions": [
          {
            "position": "Product Manager",
            "job_description": "Lead the product development process, define requirements, and ensure the platform meets user needs",
            "required_skills": ["Product management", "User experience design", "Project management"]
          },
          {
            "position": "UI/UX Designer",
            "job_description": "Create visually appealing and user-friendly interfaces for the platform",
            "required_skills": ["UI/UX design", "Prototyping", "User research"]
          },
          {
            "position": "Blockchain Developer",
            "job_description": "Build the blockchain technology infrastructure and integrate it into the platform",
            "required_skills": ["Blockchain development", "Smart contract programming", "Cryptocurrency knowledge"]
          }
        ],
        "resources": [
          {
            "resource": "Seneca College - Blockchain Development Program",
            "website": "https://www.senecacollege.ca/programs/fulltime/BSD.html"
          },
          {
            "resource": "Buffalo State Technology Incubator",
            "website": "https://www.buffalostate.edu/business/technology-incubator"
          }
        ]
      },
      {
        "step_number": 3,
        "category": "Legal and Regulatory",
        "tasks": [
          "Consult with legal experts regarding blockchain regulations for supply chain solutions",
          "Ensure compliance with data privacy and security laws",
          "Obtain necessary licenses and patents"
        ],
        "team_positions": [
          {
            "position": "Legal Counsel",
            "job_description": "Provide legal advice and guidance in navigating the legal requirements and regulations related to blockchain and supply chain",
            "required_skills": ["Legal knowledge", "Regulatory compliance", "Intellectual property law"]
          }
        ],
        "resources": [
          {
            "resource": "Niagara Frontier Legal Assistance",
            "website": "https://www.niagarafreelegalaid.com/"
          },
          {
            "resource": "Buffalo Niagara Enterprise",
            "website": "https://buffaloniagara.org/"
          }
        ]
      },
      {
        "step_number": 4,
        "category": "Partnerships and Collaborations",
        "tasks": [
          "Identify potential partners for data integration",
          "Establish collaborations with manufacturers, logistics companies, and retailers",
          "Negotiate contracts and agreements"
        ],
        "team_positions": [
          {
            "position": "Business Development Manager",
            "job_description": "Identify and establish partnerships with key industry players, negotiate contracts, and foster business relationships",
            "required_skills": ["Business development", "Negotiation", "Networking"]
          }
        ],
        "resources": [
          {
            "resource": "Buffalo Niagara Medical Campus",
            "website": "https://www.bnmc.org/"
          },
          {
            "resource": "Institute for Supply Management - Niagara Frontier",
            "website": "https://www.ism-nt.org/"
          }
        ]
      },
      {
        "step_number": 5,
        "category": "Marketing and Branding",
        "tasks": [
          "Develop a marketing strategy to reach potential customers",
          "Create a compelling brand identity",
          "Promote the platform through targeted marketing campaigns"
        ],
        "team_positions": [
          {
            "position": "Marketing Manager",
            "job_description": "Develop and implement marketing strategies to raise awareness and attract customers",
            "required_skills": ["Marketing strategy", "Brand management", "Digital marketing"]
          },
          {
            "position": "Graphic Designer",
            "job_description": "Design visually appealing marketing materials and create the company's brand identity",
            "required_skills": ["Graphic design", "Branding", "Adobe Creative Suite"]
          }
        ],
        "resources": [
          {
            "resource": "The Martin Group",
            "website": "https://www.martingroup.co/"
          },
          {
            "resource": "Buffalo Niagara Sales & Marketing Executives",
            "website": "https://bnsme.org/"
          }
        ]
      },
      {
        "step_number": 6,
        "category": "Funding and Finance",
        "tasks": [
          "Prepare a detailed financial plan and projections",
          "Seek funding opportunities like grants, loans, or investment",
          "Create a pitch deck for potential investors"
        ],
        "team_positions": [
          {
            "position": "Financial Analyst",
            "job_description": "Analyze financial data, create projections, and develop a comprehensive financial plan",
            "required_skills": ["Financial analysis", "Financial modeling", "Business valuation"]
          },
          {
            "position": "Fundraising Manager",
            "job_description": "Identify and pursue funding opportunities, prepare proposals, and pitch the startup to potential investors",
            "required_skills": ["Fundraising", "Investor relations", "Pitching"]
          }
        ],
        "resources": [
          {
            "resource": "Launch NY",
            "website": "https://launchny.org/"
          },
          {
            "resource": "Erie County Industrial Development Agency",
            "website": "https://www.ecidany.com/"
          }
        ]
      },
      {
        "step_number": 7,
        "category": "Operations and Scalability",
        "tasks": [
          "Develop a scalable architecture for the platform",
          "Establish efficient operational processes",
          "Ensure data security and system stability"
        ],
        "team_positions": [
          {
            "position": "Chief Technology Officer",
            "job_description": "Oversee the technical aspects of the business, develop a scalable architecture, and ensure system stability and security",
            "required_skills": ["Technical leadership", "System architecture", "Cybersecurity"]
          }
        ],
        "resources": [
          {
            "resource": "Buffalo Manufacturing Works",
            "website": "https://www.buffalomanufacturingworks.com/"
          },
          {
            "resource": "University at Buffalo Center for Industrial Effectiveness",
            "website": "https://www.cie.buffalo.edu/"
          }
        ]
      },
      {
        "step_number": 8,
        "category": "Launch and Growth",
        "tasks": [
          "Execute the launch plan and release the blockchain platform",
          "Monitor user feedback and make necessary improvements",
          "Iterate and scale the business"
        ],
        "team_positions": [
          {
            "position": "Project Manager",
            "job_description": "Coordinate the launch activities and ongoing improvements, monitor user feedback, and drive growth",
            "required_skills": ["Project management", "Agile methodologies", "Customer feedback analysis"]
          }
        ],
        "resources": [
          {
            "resource": "Techstars Buffalo",
            "website": "https://www.techstars.com/accelerators/buffalo/"
          },
          {
            "resource": "43North",
            "website": "https://www.43north.org/"
          }
        ]
      }
    ]
  };

  console.log(prompt.steps);

  return (
    <div className="h-full overflow-hidden pl-10">
      <main
        id="dashboard-main"
        className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
      >
        {/* <!-- Put your content inside of the <main/> tag --> */}
        <h1 className="text-2xl font-black text-gray-800">Your Startup plan</h1>
        <p className="mb-6 text-gray-600">
            Steps to launch your startup from 0 to 1
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-8">
          {/* <div className="h-56 w-72 rounded-xl bg-white p-10 shadow-md"></div>
          <div className="h-56 w-72 rounded-xl bg-white p-10 shadow-md"></div> */}
          {/* <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div> */}
          {/* <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div> */}
          {prompt.steps.map((item) => (
            <div className="h-fit w-full rounded-xl bg-white p-10 shadow-md flex flex-col gap-4">
              <div className="flex flex-row gap-40">
                <h1 className="w-20 font-bold">Category</h1>
                <p className="font-semibold">{item.category}</p>
              </div>
              <div className="flex flex-row gap-40">
                <h1 className="w-20 font-bold">Tasks</h1>
                <ul>
                  {item.tasks.map((task) => (
                    <li>{task}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row gap-40">
                <h1 className="w-20 font-bold">Positions</h1>
                <div className="flex flex-row justify-between w-full">
                  <div className="">
                    {item.team_positions.map((item) => (
                      <div className=" flex flex-row gap-2">
                        <input
                          type="checkbox"
                          id="positions"
                          value={item.position}
                          name={item.position}
                        />
                        <label htmlFor="positions">
                            <span>{item.position}</span>
                            <span>{item.job_description}</span>
                            <ul>{item.required_skills.map((skill) => (
                                <li>{skill}</li>
                            ))}</ul>
                        </label>
                      </div>
                    ))}
                  </div>
                  <button className=" bg-gradient-to-tr from-indigo-600 to-cyan-500 hover:bg-indigo-500 rounded-md px-4 text-white h-10">
                    Post
                  </button>
                </div>
              </div>
              <div className="flex flex-row gap-40">
                <h1 className="w-20 font-bold">Resources</h1>
                <div className="flex flex-col gap-2">
                  {item.resources.map((rsr) => (
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <h1 className="w-40">Organization:</h1>
                        <p>{rsr.resource}</p>
                      </div>
                      <div className="flex flex-row gap-2">
                        <h1 className="w-40">Website:</h1>
                        <p>{rsr.website}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Prompt;
