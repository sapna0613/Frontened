import React, { useRef, useState } from 'react'
import {
  CCard,CCardBody,
  CCardHeader,
  CCol,CButton,
  CRow,CFormInput, CFormSelect,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Button } from '@coreui/coreui'
// import {Link, NavLink} from "react-router-dom";

const MailConfig=()=> {
   
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
              <strong>Mail Config</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={3} md>
            <CFormSelect   size='lg'
            aria-label="Works with selects">
            <option>Driver</option>
            <option value="1">VI</option>
            <option value="2">Airtel</option>
            </CFormSelect>
            </CCol>
            
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Host" placeholder="Host" />
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Port" placeholder="Port" />
            </CCol>
            <CCol>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="From Address" placeholder= "From Address" />
            </CCol> 
            </CRow>
            <CRow>
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="password" id="floatingInput" floatingLabel="Password" placeholder= "Password"/>
            </CCol> 

            <CCol xs={3} md>
            <CFormSelect   size='lg'
            aria-label="Works with selects">
            <option>Encryption</option>
            <option value="1">VI</option>
            <option value="2">Airtel</option>
            </CFormSelect>
            </CCol>
           
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Domain" placeholder= "Domain" />
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Domain" placeholder= "Domain" />
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
  
export default MailConfig