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

const PushNotificationConfig = () => {
   
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
              <strong>Push Notification Config</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={12}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="PushNotificationConfig" placeholder="PushNotificationConfig" />
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
  
export default PushNotificationConfig