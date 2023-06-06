import React from 'react';
import AddStudentForm from './AddStudentForm';
import AddFeeHeadForm from './AddFeeHeadForm';
import MapFeeHeadsForm from './MapFeeHeadsForm';
import AddBranchForm from './AddBranchForm';
import AddAcademicYearForm from './AddAcademicYearForm';
import AddCategoryForm from './AddCategoryForm';
import AddFeeHeadsPage from './AddFeeHeadsPage';
import AddBranchPage from './AddBranchPage';
import AddAcademicPage from './AddAcademicPage';
import "./Mastertab.css"

const MasterTab = () => {
  return (
    <div className='MasterTab'>
      <div>
        <h3>Adding Students</h3>
        <AddStudentForm />
      </div>
      <div>
        <h3>Adding Fee Heads</h3>
        <AddFeeHeadsPage />
      </div>
      <div>
        <h3>Mapping Fee Heads to Categories</h3>
        <MapFeeHeadsForm />
      </div>
      <div>
        <h3>Adding New Branch</h3>
        <AddBranchPage />
      </div>
      <div>
        <h3>Adding New Academic Year</h3>
        <AddAcademicPage />
      </div>
      <div>
        <h3>Adding Categories</h3>
        <AddCategoryForm />
      </div>
    </div>
  );
};

export default MasterTab;

