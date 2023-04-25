import React, { } from 'react';

  import {
    CCard, CCardBody,
    CCardHeader, CCol, CButton,
    CRow
  } from '@coreui/react';

import { useNavigate } from 'react-router-dom'

function GlobalSetup()

{
    const navigate = useNavigate() ;
    return(
      <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
          <CCardHeader>
            <strong>Business Country</strong>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <CButton onClick={()=>navigate('/base/System_Setting/General')} color="primary" className="me-md-2">
              General
            </CButton>
            <CButton onClick={()=>navigate('/base/System_Setting/AddBusinessCountry')} color="primary" className="me-md-2">
              Add Business Country
            </CButton>
          </div>
          </CCardHeader>
          <CCardBody>
          
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    );
}

export default GlobalSetup;