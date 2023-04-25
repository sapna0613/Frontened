import React, { useRef, useState } from 'react'
import {
  CCard,CCardBody,
  CCardHeader,CCol,CButton,
  CRow,CFormInput,CFormSelect,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui'

const CreatePromoCode=()=>{
   
    const inputRef = useRef(null)
    const [dropdown,setDropDown]=useState(null)

    const handleClick =obj=>{
        setDropDown(obj);

    }
     
    return (  
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-12" >
            <CCardHeader>
              <strong>Create Tickets</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={4}>
            <CFormSelect   size='lg' aria-label="Works with selects">
            <option>Country</option>
            <option value="1">A</option>
            <option value="2">P</option>
            </CFormSelect>  
             </CCol>
            <CCol xs={4} >
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>State</option>
            <option value="1">A</option>
            <option value="2">P</option>
            </CFormSelect>  
            </CCol>
            <CCol xs={4} >
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>City</option>
            <option value="1">A</option>
            <option value="2">P</option>
            </CFormSelect>  
            </CCol>
            </CRow>
            <CRow>
            <CCol xs={4} >
            <CFormInput type="text" id="formFile" label="Promo Code" />
            </CCol> 
            <CCol xs={4} >
            <CFormInput type="text" id="formFile" label="Promo Description" />
            </CCol>
            <CCol xs={4} >
            <CFormInput type="file" size="lg" id="formFileSm" label="Image" placeholder='select the image'/>
            </CCol> 
            </CRow>
            <CRow>    
            <CCol xs={4} >
            <CFormInput type="text" id="formFile" label="Percentage" />
            </CCol> 
            <CCol xs={4} >
            <CFormInput type="text" id="formFile" label="MaxAmount" />
            </CCol> 
            <CCol xs={4} >
            <CFormInput type="text" id="formFile" label="Expiration Date" />
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
  
export default CreatePromoCode