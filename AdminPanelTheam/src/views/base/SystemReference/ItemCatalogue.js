import React from 'react';
import {
  CButton,CCard,
  CCardBody,CCardHeader,
  CCol,CRow,CTable,CTableRow,
  CTableHead,CTableHeaderCell,
  CTableBody,CTableDataCell
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
import { useNavigate } from 'react-router-dom';
import CatalogueCategory from './CatalogueCategory';


const ItemCatalogue=()=> {
    const navigate = useNavigate() ;
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Item Catalogue</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <CButton onClick={()=>navigate('/base/SystemReference/CatalogueCategory')} color="primary" className="me-md-2">
              Create Category
            </CButton>
            
          </div>
          </CCardHeader>
          <CCardBody>
          <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">SR NO.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Item Category</CTableHeaderCell>
              <CTableHeaderCell scope="col">image</CTableHeaderCell>
              <CTableHeaderCell scope="col">image Name (Edit, Delete)</CTableHeaderCell>
              <CTableHeaderCell scope="col">Description</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status(Switch)</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action(Edit/Delete)</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>A</CTableDataCell>
              <CTableDataCell>pic</CTableDataCell>
              <CTableDataCell>image</CTableDataCell>
              <CTableDataCell>Good Product</CTableDataCell>
              <CTableDataCell>On</CTableDataCell>
              <CTableDataCell>Delete</CTableDataCell>
            </CTableRow>
            <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>B</CTableDataCell>
            <CTableDataCell>pic</CTableDataCell>
            <CTableDataCell>image</CTableDataCell>
            <CTableDataCell>Bad Product</CTableDataCell>
            <CTableDataCell>Off</CTableDataCell>
            <CTableDataCell>Delete</CTableDataCell>
          </CTableRow>
          <CTableRow>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>C</CTableDataCell>
          <CTableDataCell>pic</CTableDataCell>
          <CTableDataCell>image</CTableDataCell>
          <CTableDataCell>Avrage Product</CTableDataCell>
          <CTableDataCell>Off</CTableDataCell>
          <CTableDataCell>Edit</CTableDataCell>
        </CTableRow>
          </CTableBody>
        </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default ItemCatalogue
