import React, { useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableRow,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormSelect,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import SystemSetting from './SystemSetting';
import './App.css';

const BusinessCoun = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/AddBusinessCountry')
      .then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
  }, []);

  const navigate = useNavigate();

  const updateStatus = (index, value) => {
    const updatedData = [...data];
    updatedData[index].Status = value;
    setData(updatedData);
    localStorage.setItem(`selectedStatus${index}`, value); // Store the selected status in localStorage
  };

  useEffect(() => {
    // Retrieve the selected status from localStorage when the component mounts
    const updatedData = [...data];
    updatedData.forEach((item, index) => {
      const selectedStatus = localStorage.getItem(`selectedStatus${index}`);
      if (selectedStatus) {
        updatedData[index].Status = selectedStatus;
      }
    });
    setData(updatedData);
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Business Country</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton onClick={() => navigate('/base/System_Setting/AddBusinessCountry')} color="primary" className="me-md-2">
                Add Business Country
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTable className='custom-table'>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Country Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Currency</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Currency Symbol</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>{item.CountryName}</CTableDataCell>
                    <CTableDataCell>{item.Currency}</CTableDataCell>
                    <CTableDataCell>{item.CurrencySymbol}</CTableDataCell>
                    <CTableDataCell>
                      <CFormSelect
                        size='lg'
                        value={item.Status}
                        onChange={(e) => updateStatus(index, e.target.value)}
                        name="Status"
                        aria-label="Large select example"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </CFormSelect>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default BusinessCoun;
