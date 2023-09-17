import React from 'react';

const Skills = ({skills, setStudentData, studentData, field}) => {
    const removeSkillsHandler = (skill) => {
        let student_data = studentData;
        let oldskills = skills;
        let index = oldskills.indexOf(skill);
        oldskills.splice(index, 1);
        setStudentData({
            ...student_data,
            [field]: [...oldskills],
        });
    }

  return (
    <div className='ml-[144px]'>
        {skills.map((skill) => (
            <span key={skill} style={{marginRight: 10}} className='border border-dashed'>
                <span>{skill}</span>
                <button className='text-gray-500 ml-2' onClick={() => removeSkillsHandler(skill)}>X</button>
            </span>
        ))}
    </div>
  );
};

export default Skills;