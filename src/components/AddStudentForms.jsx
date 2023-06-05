import React, { useState } from 'react';
import "./Mastertab.css"

const AddStudentForm = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRollNoChange = (event) => {
    setRollNo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform student addition logic here
    console.log(`Student added: Name - ${name}, Roll No - ${rollNo}`);
    // Reset the form
    setName('');
    setRollNo('');
  };

  return (
    <form className='AddStudentForm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="rollNo">Roll No:</label>
        <input type="text" id="rollNo" value={rollNo} onChange={handleRollNoChange} required />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
