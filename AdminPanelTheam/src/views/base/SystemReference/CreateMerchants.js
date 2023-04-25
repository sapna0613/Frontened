import React, { useRef, useState } from 'react';
import {
  CCard,CCardBody,CCardHeader,
  CCol,CButton,CRow,CTimePicker,
  CFormInput,CFormSelect,
} from '@coreui/react';

import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';

const CreateMerchants = () => {
   
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
            <CCol xs={3}>
            <CFormInput type="file" size="lg" id="formFileSm" label="Merchant Logo" placeholder='select the image'/>
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-1"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Company Name" placeholder="Company Name" />            </CCol>
            <CCol xs={3}>
            <CFormInput className="mb-1"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Trade Name" placeholder="Trade Name" />            </CCol>
            <CCol xs={3}>
            <CFormInput className="mb-1"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Store Address:" placeholder="Store Address:" />            </CCol>
            </CRow>
            <CRow>
            <CCol xs={3}>
            <CFormSelect   size='lg' aria-label="Works with selects">
            <option>Merchant Category</option>
            <option value="1">A</option>
            <option value="2">P</option>
            </CFormSelect>
            </CCol>
            <CCol xs={3}>
            <CFormInput className="mb-1"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Email Id" placeholder="Email Id" />            </CCol>
            <CCol xs={3}>
            <CFormInput className="mb-1"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Mobile Number" placeholder="Mobile Number" />            </CCol>
            <CCol xs={3}>
            <CFormSelect   size='lg' aria-label="Works with selects">
            <option>Coverage State</option>
            <option value="1">A</option>
            <option value="2">P</option>
            </CFormSelect>
            </CCol>
            </CRow>

            <CRow>
            <CCol xs={3}>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>Country</option>
            <option value="1">Japan</option>
            <option value="2">Canada</option>
            </CFormSelect>
            </CCol>
            <CCol xs={3}>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>State</option>
            <option value="1">Tokyo</option>
            <option value="2">Torento</option>
            </CFormSelect>
            </CCol>
            <CCol xs={3}>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>City</option>
            <option value="1">Tokyo</option>
            <option value="2">Torento</option>
            </CFormSelect>
            </CCol>
            <CCol xs={3}>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>Commission</option>
            <option value="1">20%</option>
            <option value="2">35%</option>
            </CFormSelect>
            </CCol>
            </CRow>
            <CRow>
            <CCol xs={3}>
            <CFormInput  type="color"   id="exampleColorInput"   defaultValue="#563d7c"   label="Brand Primary Color"    />
            </CCol>
            <CCol xs={3}>
            <CFormInput  type="color"   id="exampleColorInput"   defaultValue="#00000"   label="Brand Secondary Color"  />
            </CCol>
            <CCol xs={3}>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>Delivery Options</option>
            <option value="1">Deliver</option>
            <option value="2">Pending</option>
            </CFormSelect>
            </CCol>
            <CCol xs={3}>
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
  
export default CreateMerchants;