import React, { useRef, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CRow,
  CFormInput,
  CFormSelect,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import { Button } from '@coreui/coreui';
// import {Link, NavLink} from "react-router-dom";

const General = () => {
  const inputRef = useRef(null); // Moved declaration and initialized it

  const [state, setState] = useState({
    SiteName: '',
    SiteIcon: '',
    FavIcon: '',
    SiteLogo: '',
    ContactNumber: '',
    Email: '',
    Copyrightcontent:'',
    DefaultCountry:'',
    Currency:'',
    UnitMeasurement:'',
    LoyaltyPoint:''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(state);


    const dropdown ={

SiteIcon,
FavIcon,
SiteLogo,
ContactNumber,
Email,
Copyrightcontent,
DefaultCountry,
Currency,
UnitMeasurement,
LoyaltyPoint

    }

    const res = await fetch('http://localhost:5000/GlobalSetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dropdown),
    });
  };

    return (
        <CRow>
          <form onSubmit={handleSubmit}>
            <CCol xs={12}>
                <CCard className="mb-12">
                    <CCardHeader>
                        <strong>General</strong>
                    </CCardHeader>
                    <CCardBody className="mb-12" size="sm">
                        <CRow>
                        <CCol xs={4}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" floatingLabel="Contact Email" placeholder="Contact Emai" onChange={(event) => setState({ SiteName :event.target.value})}/>
                               </CCol>
                            <CCol xs={3}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="file" id="formFileSm" label="ImageIcon" placeholder="Imageicon" onChange={(event) => setState({ SiteIcon: event.target.value})} />
                            </CCol>
                            <CCol xs={3}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="file" id="formFileSm" label="FavIcon" placeholder="FavIcon" onChange={(event) => setState({ FavIcon: event.target.value})} />
                            </CCol>
                            <CCol xs={3}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="file" id="formFileSm" label="SiteLogo" placeholder="SiteLogo" onChange={(event) => setState({ SiteLogo: event.target.value})} />
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xs={4}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" floatingLabel="Contact Number" placeholder="Contact Number" onChange={(event) => setState({ ContactNumber: event.target.value})} />
                            </CCol>
                            <CCol xs={4}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" floatingLabel="Contact Email" placeholder="Contact Emai" onChange={(event) => setState({ Email :event.target.value})}/>
                               </CCol>
                               <CCol xs={4}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" floatingLabel="Contact Email" placeholder="Contact Emai" onChange={(event) => setState({
                                Copyrightcontent  :event.target.value})}/>
                               </CCol>
                               <CCol xs={4}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" floatingLabel="Contact Email" placeholder="Contact Emai" onChange={(event) => setState({
                               DefaultCountry  :event.target.value})}/>
                               </CCol>
                               <CCol xs={4}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" floatingLabel="Contact Email" placeholder="Contact Emai" onChange={(event) => setState({
                                Currency  :event.target.value})}/>
                               </CCol>
                               <CCol xs={4}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" floatingLabel="Contact Email" placeholder="Contact Emai" onChange={(event) => setState({
                               UnitMeasurement  :event.target.value})}/>
                               </CCol>
                               <CCol xs={4}>
                                <CFormInput className="mb-3" size="lg" ref={inputRef} type="text" id="floatingInput" floatingLabel="Contact Email" placeholder="Contact Emai" onChange={(event) => setState({
                                LoyaltyPoint  :event.target.value})}/>
                               </CCol>
                               <CCol xs={3}>
                  <CButton color="primary" className="me-md-2" size="lg" type="submit"> Submit </CButton>
                </CCol>
</CRow>
</CCardBody>
</CCard>
</CCol>
</form>
</CRow>
)}               



                        
  



export default General