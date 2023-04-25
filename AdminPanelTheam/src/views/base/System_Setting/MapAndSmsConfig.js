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

const MapAndSmsConfig= () => {
   
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
              <strong>Map & Sms Config</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Search Radius Configure" placeholder="Search Radius Configure" />
            </CCol> 
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Browser Map Key" placeholder="Browser Map Key" />
            </CCol>
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Server Map Key" placeholder= "Server Map Key" />
            </CCol> 
            </CRow>
            <CRow>
            <CCol xs={4} md>
            <CFormSelect   size='lg'
            aria-label="Works with selects">
            <option>SMS Provider</option>
            <option value="1">VI</option>
            <option value="2">Airtel</option>
            </CFormSelect>
            </CCol>

            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Twilio Account SID" placeholder= "Twilio Account SID" />
            </CCol> 
           
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Twilio Auto Token" placeholder= "Twilio Auto Token" />
            </CCol> 
            </CRow>
            <CRow>
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Twilio From Number" placeholder= "Twilio Auto Token" />
            </CCol> 
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Pubnub Publish Key" placeholder= "Pubnub Publish Key" />
            </CCol> 
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Pubnub Subscribe Key" placeholder= "Pubnub Subscribe Key" />
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
 
      
    )
  }
  
export default MapAndSmsConfig