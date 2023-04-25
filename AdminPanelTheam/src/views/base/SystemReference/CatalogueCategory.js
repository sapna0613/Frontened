import React, { useRef, useState } from 'react'
import {
  CCard,CCardBody,
  CCardHeader,CCol,CButton,
  CRow,CFormInput,CFormSelect,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui'

const CatalogueCategory=()=>{
   
    const inputRef = useRef(null)
    const [dropdown,setDropDown]=useState(null)

    const handleClick = obj=>{
        setDropDown(obj);

    }
     
    return (  
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-12" >
            <CCardHeader>
              <strong>Create Customer</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={4}>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>Item Category</option>
            <option value="1">Active</option>
            <option value="2">Deative</option>
            </CFormSelect>
            </CCol>
            <CCol xs={4}>
            <CFormInput type="file" size="lg" id="formFileSm"  placeholder='select the image'/>
            </CCol>
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="sm" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Dispute Reason" placeholder="Dispute Reason" />            </CCol>
            </CRow>
            <CRow>
            <CCol xs={6} size='sm={5}'>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Item Description" />       </CCol>
            <CCol xs={6} size='lg={15}'>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>Status</option>
            <option value="1">Active</option>
            <option value="2">Deative</option>
            </CFormSelect>
            </CCol> 
            </CRow>
            <CRow>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <CButton color="primary" className="me-md-2" size="lg">Submit</CButton>
            </div>
            </CRow>
            </CCardBody>
            </CCard>
            </CCol>
            </CRow>
    );
  }
  
export default CatalogueCategory;