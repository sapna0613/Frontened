import React, { useRef, useState } from 'react';
import {
  CCard,CCardBody,CCardHeader,
  CCol,CButton,CRow,
  CFormInput,CFormSelect,
} from '@coreui/react';

import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';

const CreateItemCategory = () => {
   
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
              <strong>Create Category</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={4}>
            <CFormSelect   size='lg' aria-label="Works with selects">
            <option>Merchant Category</option>
            <option value="1">Retailer</option>
            <option value="2">Wholesaler</option>
            </CFormSelect>
            </CCol>
            <CCol xs={4}>
            <CFormInput className="mb-1"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Item Catagory Name" placeholder="Item Company Name" />            </CCol>
            <CCol xs={4}>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>Status</option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
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
  
export default CreateItemCategory;