import React, { useState } from 'react';
import './AddStudentForm.css';
import Hero from './Hero';
import Maincontent from './Maincontent';

const AddStudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    telephone: '',
    email: '',
    dob: '',
    pin: '',
    addressLine1: '',
    addressLine2: '',
    previousInstitute: '',
    previousEducation: '',
    gradeOfMarks: '',
    yearOfAdmission: '',
    yearOfPassing: '',
    currentStatus: '',
    category: '',
    seatTypes: '',
    branch: '',
    admittedToAcademicYear: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(studentData); 
  };

  function generateAcademicYearOptions() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10; 
    const endYear = currentYear;
  
    const options = [];
  
    for (let year = startYear; year <= endYear; year++) {
      options.push(<option key={year} value={year}>{year}</option>);
    }
  
    return options;
  }
  

  return (
    <>
    <Hero />
    <div className="add-student-form">

      <h2>Add Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Name</label>
            <select name="nameTitle" value={studentData.nameTitle} onChange={handleInputChange}>
    <option value="Mr">Mr</option>
    <option value="Ms">Ms</option>
    <option value="Mrs">Mrs</option>
    <option value="Dr">Dr</option>
  </select>
            <input type="text" name="name" value={studentData.name} onChange={handleInputChange} placeholder='name' />
            <label>Telephone</label>
            <input type="text" name="telephone" value={studentData.telephone} onChange={handleInputChange} placeholder='88888888' />
            <label>Email</label>
            <input type="text" name="email" value={studentData.email} onChange={handleInputChange} placeholder='yourmail@gmail.com' />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={studentData.dob} onChange={handleInputChange} placeholder='01/12/2002'/>
            <label>Pin</label>
            <input type="text" name="pin" value={studentData.pin} onChange={handleInputChange} placeholder='400004'/>
            <label>Address Line 1</label>
            <input type="text" name="addressLine1" value={studentData.addressLine1} onChange={handleInputChange} placeholder='400004' />
            <label>Address Line 2</label>
            <input type="text" name="addressLine2" value={studentData.addressLine2} onChange={handleInputChange} placeholder='400004' />
          </div>
        </div>
        <hr />
        <div className="form-section">
          <h3>Previous Education</h3>
          <div className="form-group">
            <label>Previous Institute</label>
            <input type="text" name="previousInstitute" value={studentData.previousInstitute} onChange={handleInputChange} />
            <label>Previous Education</label>
            <input type="text" name="previousEducation" value={studentData.previousEducation} onChange={handleInputChange} />
            <label>Grade of Marks</label>
            <input type="text" name="gradeOfMarks" value={studentData.gradeOfMarks} onChange={handleInputChange} placeholder='999' />
          </div>
          <div className="form-group">
            <label>Year of Admission</label>
            <input type="text" name="yearOfAdmission" value={studentData.yearOfAdmission} onChange={handleInputChange} placeholder='1999' />
            <label>Year of Passing</label>
            <input type="text" name="yearOfPassing" value={studentData.yearOfPassing} onChange={handleInputChange} placeholder='2002' />
            <label>Current Status</label>
            <input type="text" name="currentStatus" value={studentData.currentStatus} onChange={handleInputChange} />
            <label>Category</label>
            <select name="category" value={studentData.category} onChange={handleInputChange}>
    <option value="General">General</option>
    <option value="Regular Students">Regular Students</option>
  </select>
          </div>
        </div>
        <hr />
        <div className="form-section">
          <h3>Admission Details</h3>
          <div className="form-group">
            <label>Seat Types</label>
            <select name="seatType" value={studentData.seatType} onChange={handleInputChange}>
    <option value="General">General</option>
    <option value="Management Quota">Management Quota</option>
    <option value="Reserved Category">Reserved Category</option>
    <option value="NRI Quota">NRI Quota</option>
  </select>
            <label>Branch</label>
            <select name="branch" value={studentData.branch} onChange={handleInputChange}>
    <option value="">Select Branch</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Electrical Engineering">Electrical Engineering</option>
    <option value="Mechanical Engineering">Mechanical Engineering</option>
    <option value="Civil Engineering">Civil Engineering</option>
    <option value="Chemical Engineering">Chemical Engineering</option>
    <option value="Aerospace Engineering">Aerospace Engineering</option>
  </select>
            <label>Admitted to Academic Year</label>
            <select name="academicYear" value={studentData.academicYear} onChange={handleInputChange}>
    <option value="">Select Academic Year</option>
    {generateAcademicYearOptions()}
    </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AddStudentForm;
