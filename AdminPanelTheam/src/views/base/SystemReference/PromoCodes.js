import React from 'react';
import {
  CButton,CCard,CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell,CImage,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';
import CreatePromoCode from './CreatePromoCode';
const PromoCodes=()=> {
    const navigate = useNavigate() ;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Promo Codes</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <CButton onClick={()=>navigate('/base/SystemReference/CreatePromoCode')} color="primary" className="me-md-2">
              Create Promo Codes
            </CButton>
            
          </div>
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Country</CTableHeaderCell>
              <CTableHeaderCell scope="col">State</CTableHeaderCell>
              <CTableHeaderCell scope="col">City</CTableHeaderCell>
              <CTableHeaderCell scope="col">Promo Codes</CTableHeaderCell>
              <CTableHeaderCell scope="col">Image</CTableHeaderCell>
              <CTableHeaderCell scope="col">Percentage</CTableHeaderCell>
              <CTableHeaderCell scope="col">Max Amount</CTableHeaderCell>
              <CTableHeaderCell scope="col">Expiration Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status(Switch)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>0000015</CTableDataCell>
              <CTableDataCell>Successful</CTableDataCell>
              <CTableDataCell>Musium Entry</CTableDataCell>
              <CTableDataCell>Jurry</CTableDataCell>
              <CTableDataCell>AS42135</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>0000018</CTableDataCell>
            <CTableDataCell>Successful</CTableDataCell>
            <CTableDataCell>Musium Entry</CTableDataCell>
            <CTableDataCell>Hurry</CTableDataCell>
            <CTableDataCell>AS42078</CTableDataCell>
            <CTableDataCell>Active</CTableDataCell>
          </CTableRow>
          <CTableRow>
          <CTableHeaderCell scope="row">3</CTableHeaderCell>
          <CTableDataCell>0000020</CTableDataCell>
          <CTableDataCell>Successful</CTableDataCell>
          <CTableDataCell>Musium Entry</CTableDataCell>
          <CTableDataCell>Herry</CTableDataCell>
          <CTableDataCell>AS42140</CTableDataCell>
          <CTableDataCell>Active</CTableDataCell>
        </CTableRow>

          </CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default PromoCodes
