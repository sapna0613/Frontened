import React, { useState, useEffect } from 'react';
import {
  CButton,
  CImage,
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
  CTableDataCell
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import CreateCustomer from './CreateCustomer';

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/CreateCustomer')
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
            <strong>Customer</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton onClick={()=>navigate('../base/SystemReference/CreateCustomer')} color="primary" className="me-md-2">
                Create Customer
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">S.NO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Profile Picture</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell><CImage rounded fluid src={item.profilePic} width={50} height={50} /></CTableDataCell>
                    <CTableDataCell>{item.Name}</CTableDataCell>
                    <CTableDataCell>{item.MobileNumber}</CTableDataCell>
                    <CTableDataCell>{item.EmailId}</CTableDataCell>
                  </CTableRow>
                ))}
               </CTableBody>
         
          <CTableBody>
            <CTableRow>
              
             
            
            </CTableRow>
           
          
          </CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Customer
