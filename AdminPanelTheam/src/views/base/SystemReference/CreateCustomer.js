import React, { useRef, useState } from 'react'
import {
  CCard,CCardBody,CCardHeader,
  CCol,CButton,CRow,CFormInput,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Button } from '@coreui/coreui'
 
// import {Link, NavLink} from "react-router-dom";

const  CreateCustomer = () => {
     Const [customer,SetCustomer] = useState(
    {Name:"", EmailId:"", MobileNumber:""}
    );
     let key, value ;
     const HandleInputs=(e)=>{
       console.log(e);
       key=e.target.name ;
       value=e.target.value;

      SetCustomer({...customer,[key]:value});
     }
    
     const inputRef = useRef(null)
    const [dropdown,setDropDown]=useState(null)

    const handleClick = obj=>{
        setDropDown(obj);

    }

    const PostData =async(e)=>{
           e.preventDefault();
          const [Name,EmailId,MobileNumber]= customer;
          const res =  await fetch("/Customer",{
            method:"POST",
            
          })
    }
     
    return (  
      <form methode="POST">
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-12" >
            <CCardHeader>
              <strong>Create Customer</strong>
            </CCardHeader>
            <CCardBody className="mb-12" size="sm">
            <CRow>
            <CCol xs={3}>
            <CFormInput type="file" size="lg" id="formFileSm" label="Select Profile Pic" placeholder='select the image'/>
            </CCol> 
            <CCol xs={3}>
            <CFormInput 
            name='name'
            value={Customer.name} className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Name" placeholder="Name" />            </CCol>
            <CCol xs={3}>
            <CFormInput name='EmailId' value ={Customer.EmailId} className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Email Id" placeholder="Email Id" />            </CCol>
            <CCol xs={3}>
            <CFormInput name='MobileNumber' value ={Customer.MobileNumber} className="mb-3"  size="lg" ref ={inputRef}type="text" id="floatingInput" floatingLabel="Mobile Number" placeholder="Mobile Number" />            </CCol>
            </CRow>
            <CRow>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <CButton onclick={PostData} color="primary" className="me-md-2" size="lg">Submit</CButton>
            </div>
            </CRow>
            </CCardBody>
            </CCard>
            </CCol>
            </CRow>
            </form>
    );
  }
  
export default CreateCustomer