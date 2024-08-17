import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import '../../Styles/HomePage.scss'
import '../../Styles/settings.scss'
import { Loading } from '../../utils/loading'
// import { fetchAgentData } from '../../firebase'
// import FirebaseStates from '../../firebaseStates'
import { fetchAgentData } from '../../firebase'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

export const SettingsProfile = () => {
  const [state, setState] = useState({
    agentDataSuccess: {},
    agentDataLoading: true,
    agentDataError: false,
    editData: {
      name: "",
      age: "",
      region: "",
      gender: "",
      agentId: "",
      email: "",
      phoneNo: "",
    },
    btnClicked: false,
  });

  useEffect(() => {
    fetchAgentData().then((data) => {
      setState((state) => ({ ...state, agentDataSuccess: data, agentDataLoading: false }))
    })
  }, []);

  const onChangeDetails = (e) => {
    let { name, value } = e.target
    setState((state) => ({ ...state, editData: { ...state.editData, [name]: value } }))

  }

  // console.log(state.agentDataSuccess);

  const editAgentInfo = (label, value, stateData, placeholder) => {
    return (<div className='flex mb-4' style={{ alignItems: "start", justifyContent: "start", flexDirection: "column" }}>
      <label className='label-edit'>{label}</label>
      <InputText placeholder={placeholder} className='input' name={value} value={stateData} onChange={onChangeDetails} />
    </div>
    )
  }

  const handleSave = () => {
    if (!state.btnClicked) {
      // Prefill editData with agentDataSuccess when editing starts
      setState((prevState) => ({
        ...prevState,
        editData: {
          name: prevState.agentDataSuccess.name || "",
          age: prevState.agentDataSuccess.age || "",
          region: prevState.agentDataSuccess.region || "",
          gender: prevState.agentDataSuccess.gender || "",
          agentId: prevState.agentDataSuccess.agentId || "",
          email: prevState.agentDataSuccess.email || "",
          phoneNo: prevState.agentDataSuccess.phoneNo || "",
        },
        btnClicked: true,
      }));
    } else {
      // Handle saving the data here, e.g., updating Firebase
      console.log("Save the data", state.editData);
    }
  }

  return (
    <div>
      <div className='profile-main-card'>
        <h1 className='pro-heading'>Profile</h1>
        <Card className='profile-card'>
          {state.agentDataLoading ? (
            <div className='flex' style={{ justifyContent: "center", alignItems: "center", height: "80vh" }}>
              <Loading />
            </div>
          ) : (<section className='p-5'>
            {/* {displayAgentInfo(Name, state.agentDataSuccess.name)} */}

            {state.btnClicked ? (
              <>
                {editAgentInfo("Name", "name", state.editData.name, "Name")}
                {editAgentInfo("Age", "age", state.editData.age, "Age")}
                {editAgentInfo("Region", "region", state.editData.region, "Region")}
                {editAgentInfo("Gender", "gender", state.editData.gender, "Gender")}
                {editAgentInfo("Email", "email", state.editData.email, "Email")}
                {editAgentInfo("Phone No", "phoneNo", state.editData.phoneNo, "Phone No")}
              </>
            ) : (
              <div>
                {/* Display the non-editable info */}
                <div className='profile-label'><span style={{ fontWeight: "400" }}>Name: </span>{state.agentDataSuccess?.name || '--'}</div>
                <div className='profile-label'><span style={{ fontWeight: "400" }}>Age: </span>{state.agentDataSuccess?.age || '--'}</div>
                <div className='profile-label'><span style={{ fontWeight: "400" }}>Region: </span>{state.agentDataSuccess?.region || '--'}</div>
                <div className='profile-label'><span style={{ fontWeight: "400" }}>Gender: </span>{state.agentDataSuccess?.gender || '--'}</div>
                <div className='profile-label'><span style={{ fontWeight: "400" }}>Email: </span>{state.agentDataSuccess?.email || '--'}</div>
                <div className='profile-label'><span style={{ fontWeight: "400" }}>Phone No: </span>{state.agentDataSuccess?.phoneNo || '--'}</div>
              </div>
            )}

            {/* {state.btnClicked ? editAgentInfo("name", "name", state.editData.name, "Name")
              : <div className='profile-label'><span style={{ fontWeight: "400" }}>Name: </span>{state.agentDataSuccess?.name ? state.agentDataSuccess?.name : '--'}</div>}

            {state.btnClicked ? editAgentInfo("age", "age", state.editData.age, "Age")
              :
              <div className='profile-label'><span style={{ fontWeight: "400" }}>Age: </span>{state.agentDataSuccess?.age ? state.agentDataSuccess?.age : '--'}</div>}

            {state.btnClicked ? editAgentInfo("region", "region", state.editData.region, "Region")
              :
              <div className='profile-label'><span style={{ fontWeight: "400" }}>Region: </span>{state.agentDataSuccess?.region ? state.agentDataSuccess?.region : '--'}
              </div>}

            {state.btnClicked ? editAgentInfo("agentId", "agentId", state.editData.agentId, "ID")
              :
              <div className='profile-label'><span style={{ fontWeight: "400" }}>AgentID: </span>{state.agentDataSuccess?.agentId ? state.agentDataSuccess?.agentId : '--'}
              </div>}

            {state.btnClicked ? editAgentInfo("gender", "gender", state.editData.gender, "Gender")
              :
              <div className='profile-label'><span style={{ fontWeight: "400" }}>Gender: </span>{state.agentDataSuccess?.gender ? state.agentDataSuccess?.gender : '--'}
              </div>}

            {state.btnClicked ? editAgentInfo("email", "email", state.editData.email, "Email")
              :
              <div className='profile-label'><span style={{ fontWeight: "400" }}>Email: </span>{state.agentDataSuccess?.email ? state.agentDataSuccess?.email : '--'}
              </div>}

            {state.btnClicked ? editAgentInfo("phoneNo", "phoneNo", state.editData.phoneNo, "PhoneNumber")
              :
              <div className='profile-label'><span style={{ fontWeight: "400" }}>Phone Number: </span>{state.agentDataSuccess?.phoneNo ? state.agentDataSuccess?.phoneNo : '--'}
              </div>} */}

            <Button className='saveEditBtn' onClick={handleSave} >
              {state.btnClicked ? "Save" : "Edit"}
            </Button>
          </section>)}


        </Card>
      </div>
    </div>
  )
}
