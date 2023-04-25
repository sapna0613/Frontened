import React, { useRef, useState, } from 'react';

import {_nav} from 'react-router-dom'
import {
  
  CCardHeader,
  CCol,

  CRow,
  CFormInput,
  CFormSelect,
} from '@coreui/react';



const CreateAffiliatedPartners = () => {
  const [partnerName, setPartnerName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [coverageState, setCoverageState] = useState('');
  const [commission, setCommission] = useState('');
  const [status, setStatus] = useState('');
  const [users, setUsers] = useState([]);
  const fileInputRef = useRef(null);



  const handleAddUser = async (event) => {
    event.preventDefault();
    const newUser = {
      partnerName,
      email,
      mobileNumber,
      address,
      coverageState,
      commission,
      status,
    };
  
      const res = await fetch('http://localhost:5000/CreateAffiliatedPartners', {
        method: 'POST',
       headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      if (res.ok) {
        ;
        setPartnerName('');
        setEmail('');
        setMobileNumber('');
        setAddress('');
        setCoverageState('');
        setCommission('');
        setStatus('');
        setUsers([...users, newUser])
        // history.push('/affiliates');
      } else {
        console.log('Error:', data.message);
      }
      
    
  };
 
  return (
    <CRow>
      
      
        <CCardHeader>
          <strong>Create Customer</strong>
        </CCardHeader>
        
          <form onSubmit={handleAddUser}>
            <CRow>
              <CCol xs={3}>
                 <CFormInput
                  type="file"
                  size="lg"
                  id="formFileSm"
                  label="Select Profile Pic"
                  placeholder="select the image"
                  ref={fileInputRef}
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <CFormInput
                  className="mb-1"
                  size="lg"
                  type="text"
                  id="partnerNameInput"
                  placeholder="Partner Name"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                />
                </CCol>
              </CRow>

            <CRow>
              <CCol xs={3}>
                
                <CFormInput
                  className="mb-1"
                  size="lg"
                  type="email"
                  id="emailInput"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </CCol>
              </CRow>
              
              <CRow>
              <CCol xs={3}>
                <CFormInput
                  className="mb-1"
                  size="lg"
                  type="tel"
                  id="mobileNumberInput"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </CCol>
              </CRow>
           
            <CRow>
              <CCol xs={3}>
                <CFormInput
                  className="mb-1"
                  size="lg"
                  type="text"
                  id="addressInput"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </CCol>
              </CRow>

              <CRow>
              <CCol xs={3}>
                <CFormSelect
                  size="lg"
                  id="coverageStateSelect"
                  value={coverageState}
                  onChange={(e) => setCoverageState(e.target.value)} >
                  <option value="text">Coverage State</option>
                 
               </CFormSelect>
               </CCol>
               </CRow>

               <button type= "submit">Adduser</button>
           
               
              </form>
                  </CRow>
                  )
  }
  
export default CreateAffiliatedPartners;