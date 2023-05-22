import React, { useRef, useState } from 'react';
import {
  CCard, CCardBody, CCardHeader,
  CCol, CButton, CRow,
  CFormInput, CFormSelect,
} from '@coreui/react';

import { useNavigate } from 'react-router-dom';

const CreateAccountManager = () => {
  const navigate = useNavigate();

  const [Name, SetName] = useState('2'); // Set the default value of Name to '1'
  const [Roles, SetRoles] = useState('');
  const [Status, SetStatus] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('Name', Name);
    formData.append('Roles', Roles);

    const res = await fetch('http://localhost:5000/CreateAccountManager', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      SetName('');
      SetRoles('');
      SetStatus('');
      navigate('/base/System_Roles/AccountManager');
    } else {
      console.log('Error:', data.message);
    }
  };

  return (
    <CRow>
      <CCardHeader>
        <strong>Create</strong>
      </CCardHeader>
      <form className="form-container" onSubmit={handleClick}>
        <div className="form-group">
          <label htmlFor="TradeNameInput">Name </label>
          <input
            className="form-control"
            type="text"
            id="Name"
            placeholder="Name"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="TradeNameInput">Roles </label>
          <input
            className="form-control"
            type="text"
            id="Role"
            placeholder="Roles"
            value={Roles}
            onChange={(e) => SetRoles(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="StatusInput">Status </label>
          <select
            className="form-control"
            id="StatusInput"
            value={Status}
            onChange={(e) => SetStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <CCol xs={3}>
          <CButton color="primary" className="me-md-2" size="lg" type="submit">
            Submit
          </CButton>
        </CCol>
      </form>
    </CRow>
  );
};

export default CreateAccountManager;
