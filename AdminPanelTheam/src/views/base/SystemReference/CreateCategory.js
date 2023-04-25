import React, { useRef, useState } from 'react';
import {
  CCard,CCardBody,CCardHeader,
  CCol,CButton,CRow,
  CFormInput,CFormSelect,
} from '@coreui/react';

import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';

const CreateCategory = () => {
   
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
            <CCol xs={3}>
            <CFormInput type="file" size="lg" id="formFileSm" label="Category Icon" placeholder='select the image'/>
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-1"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Catagory Name" placeholder="Company Name" />            </CCol>
            <CCol xs={3}>
            <CFormInput className="mb-1"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Trade Name" placeholder="Trade Name" />            </CCol>
            <CCol xs={3}>
            <CFormSelect   size='lg' aria-label="Works with selects">
            <option>Status</option>
            <option value="1">A</option>
            <option value="2">P</option>
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
  
export default CreateCategory;