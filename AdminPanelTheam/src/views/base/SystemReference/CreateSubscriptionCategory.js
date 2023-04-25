import React, { useRef, useState } from 'react'
import {
  CCard,CCardBody,CTable,CTableHead,
  CCardHeader,CTableRow,CCol,CButton,
  CRow,CFormInput,CTableHeaderCell, CFormSelect,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Button } from '@coreui/coreui'
// import {Link, NavLink} from "react-router-dom";

const  CreateSubscriptionCategory = () => {
   
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
            <CFormSelect   size='lg' aria-label="Works with selects">
            <option>Country</option>
            <option value="1">Retailer</option>
            <option value="2">Wholesaler</option>
            </CFormSelect>
            </CCol> 
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Subscriptions Plan" placeholder="Subscription Plan" />            </CCol>
            <CCol xs={3}>
            <CFormInput className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Commission" placeholder="Commission" />            </CCol>
            <CCol xs={3}>
            <CFormSelect size='lg' aria-label="Works with selects">
            <option>Status</option>
            <option value="1">Retailer</option>
            <option value="2">Wholesaler</option>
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
  
export default CreateSubscriptionCategory;