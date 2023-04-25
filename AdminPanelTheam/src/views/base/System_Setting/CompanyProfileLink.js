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

const CompanyProfileLink = () => {
   
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
              <strong>Company Profile Link</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Facebook Link" placeholder="Facebook Link" />
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Twitter Link" placeholder="Twitter Link" />
            </CCol>         
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Instagram Link" placeholder="Instagram Link" />
            </CCol>         
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Printest Link" placeholder="Printest Link" />
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
  
export default CompanyProfileLink