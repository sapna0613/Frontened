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

const AddBusinessState = () => {
   
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
              <strong>General</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="SiteName" placeholder="Site Name" />
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="file" id="formFileSm" Label="ImageIcon" placeholder="Imageicon" />
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="file" id="formFileSm" Label="FavIcon" placeholder="FavIcon" />
            </CCol>
            
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="file" id="formFileSm" Label="SiteLogo" placeholder="SiteLogo" />
            </CCol> 
            </CRow>
            <CRow> 
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Contact Number" placeholder="Contact Number" />
            </CCol> 
            <CCol xs={4}>
                <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Contact Email" placeholder="Contact Emai" />
            </CCol>
            <CCol xs={4}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel=" Copyright Content" placeholder="Contact Emai" />
            </CCol>
            </CRow>
            <CRow> 
           
            <CCol xs={6} md>
            <CFormSelect   size='lg'
            aria-label="Works with selects">
            <option>Default Countr</option>
            <option value="1">AUS</option>
            <option value="2">PHP</option>
            <option value="3">USDT</option>
            <option value="4">TRX</option>
            </CFormSelect>
            </CCol>

            <CCol xs={6} md>
            <CFormSelect   size='lg'  aria-label="Large select example">
            <option>Currency</option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
            </CFormSelect>
            </CCol>
            </CRow>
            <CRow>
            <CCol xs={6}>
                <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Unit Measurement" placeholder="Unit Measurement" />
            </CCol>          
            <CCol xs={6}>
                <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel=" Loyalty Point" placeholder="Loyalty Point" />
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
  
export default AddBusinessState