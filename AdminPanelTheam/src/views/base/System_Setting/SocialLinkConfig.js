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

const SocialLinkConfig = () => {
   
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
              <strong>Social Link Config</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={3} md>
            <CFormSelect   size='lg'
            aria-label="Works with selects">
            <option>Social Login</option>
            <option value="1">AUS</option>
            <option value="2">PHP</option>
            </CFormSelect>
            </CCol>

            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Google Client Id" placeholder="Google Client Id" />
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Facebook App Id" placeholder="Facebook App Id" />
            </CCol> 

            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Facebook App Secret" placeholder="Facebook App Secret" />
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
  
export default SocialLinkConfig