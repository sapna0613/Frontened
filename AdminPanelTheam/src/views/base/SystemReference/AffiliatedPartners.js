import React, { useState, useEffect } from 'react';
import {
  CButton, CImage, CCard, CCardBody, CCardHeader,
  CCol, CRow, CTable, CTableBody, CTableDataCell,
  CTableHead, CTableHeaderCell, CTableRow,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import CreateCustomer from './CreateCustomer';
import AffiliatedPartner from '../System_Roles/AffiliatedPartner';
import CreateAffiliatedPartners from './CreateAffiliatedPartners';

const AffiliatedPartners = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/CreateAffiliatedPartners')
      .then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
  }, []);

  console.log(data);

  const navigate = useNavigate();

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Affiliated Partners</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton
                onClick={() => navigate('/base/SystemReference/CreateAffiliatedPartners')}
                color="primary"
                className="me-md-2"
              >
                Create Affiliated Partners
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Partner Logo/Profile pic</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Partner Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Coverage State</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Commission</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status (Switch)</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action (Edit, Delete)</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>
                      <CImage
                        rounded
                        fluid
                        src={item.profilePic}
                        width={50}
                        height={50}
                      />
                    </CTableDataCell>
                    <CTableDataCell>{item.partnerName}</CTableDataCell>
                    <CTableDataCell>{item.email}</CTableDataCell>
                    <CTableDataCell>{item.mobileNumber}</CTableDataCell>
                    <CTableDataCell>{item.address}</CTableDataCell>
                    <CTableDataCell>{item.coverageState}</CTableDataCell>
                    <CTableDataCell>{item.commission}</CTableDataCell>
                    {/* Add the Status and Action cells here */}
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
     </CCol>
     </CRow>
)}

export default AffiliatedPartners