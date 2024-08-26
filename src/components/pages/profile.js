import React, { useState, useEffect, useRef } from 'react'
import { Card } from 'primereact/card'
import { Toast } from 'primereact/toast';
import '../../Styles/HomePage.scss'
import '../../Styles/settings.scss'
import { Loading } from '../../utils/loading'
import { fetchAgentData, updateAgentData, uploadAgentProfilePic, getAgentLogo } from '../../firebase'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { FileUpload } from 'primereact/fileupload';


export const SettingsProfile = () => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage);
  const userId = userData?.sub;
  const logoFromLocaStorage = localStorage.getItem(`agentProfilePic:${userId}`);

  const updateToast = useRef(null);
  const logoUploadToast = useRef(null);
  const [logo, setLogo] = useState(null)

  const [state, setState] = useState({
    agentDataSuccess: {},
    agentDataLoading: true,
    agentDataError: false,
    logoLoading: true,
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

  useEffect(() => {
    if (logoFromLocaStorage) {
      setState((state) => ({ ...state, logoLoading: false }))
      setLogo(logoFromLocaStorage)
    }
  }, [logoFromLocaStorage])

  const onChangeDetails = (e) => {
    let { name, value } = e.target
    setState((state) => ({ ...state, editData: { ...state.editData, [name]: value } }))

  }

  const showUpdate = () => {
    updateToast.current.show({ severity: 'success', summary: 'Success', detail: 'Profile Update Successful' });
  };
  const showLogoUpload = () => {
    updateToast.current.show({ severity: 'success', summary: 'Success', detail: 'Logo Upload Successful' });
  };

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
      updateAgentData(state.editData).then(() => {
        showUpdate()
      })
    }
  }

  const clickUpload = (e) => {
    const file = e?.files[0];

    if (file === null) return;
    uploadAgentProfilePic(file).then(() => {
      showLogoUpload()
    })

  }

  return (
    <div>
      <Toast ref={updateToast} onRemove={() => {
        window.location.reload()
      }} />
      <Toast ref={logoUploadToast}
        onRemove={() => {
          // const agentProfilePic = localStorage.getItem('agentProfilePic');
          // window.location.reload()
        }}
      />
      <div className='profile-main-card'>
        <h1 className='pro-heading'>Profile</h1>
        <Card className='profile-card'>
          {(state.agentDataLoading || state.logoLoading) ? (
            <div className='flex' style={{ justifyContent: "center", alignItems: "center", height: "80vh" }}>
              <Loading />
            </div>
          ) : (<section className='p-5'>

            {state.btnClicked ? (
                <div style={{ marginTop: "2rem" }}>
                  <hr />
                  <span className='notice-text'>Please Save your AgentID safely!!</span>
                  <p className='notice-text-2'>It will be needed each time to access the Agent pages. Thank you </p>
                  <hr />
                {editAgentInfo("Name", "name", state.editData.name, "Name")}
                {editAgentInfo("Age", "age", state.editData.age, "Age")}
                {editAgentInfo("Region", "region", state.editData.region, "Region")}
                {editAgentInfo("Gender", "gender", state.editData.gender, "Gender")}
                  {editAgentInfo("AgentId", "agentId", state.editData.agentId, "ID")}
                {editAgentInfo("Email", "email", state.editData.email, "Email")}
                {editAgentInfo("Phone No", "phoneNo", state.editData.phoneNo, "Phone No")}
                </div>
            ) : (
              <div>
                {/* Display the non-editable info */}
                    <div className='flex' >

                      {logo ? <img src={logo} className='logo-display' /> : <div className='img-background'></div>}
                      <FileUpload mode='basic' className='logo-upload-btn'
                        auto
                        chooseLabel={logo ? "Change Logo" : 'upload'}
                        uploadHandler={clickUpload} accept="image/*"
                        customUpload />
                    </div>
                    <hr />
                    <section>
                      <div className='profile-label'><span style={{ fontWeight: "400" }}>Name: </span>{state.agentDataSuccess?.name || '--'}</div>
                      <div className='profile-label'><span style={{ fontWeight: "400" }}>Age: </span>{state.agentDataSuccess?.age || '--'}</div>
                      <div className='profile-label'><span style={{ fontWeight: "400" }}>Region: </span>{state.agentDataSuccess?.region || '--'}</div>
                      <div className='profile-label'><span style={{ fontWeight: "400" }}>Gender: </span>{state.agentDataSuccess?.gender || '--'}</div>
                      <div className='profile-label'><span style={{ fontWeight: "400" }}>AgentID: </span>{state.agentDataSuccess?.agentId || '--'}</div>
                      <div className='profile-label'><span style={{ fontWeight: "400" }}>Email: </span>{state.agentDataSuccess?.email || '--'}</div>
                      <div className='profile-label'><span style={{ fontWeight: "400" }}>Phone No: </span>{state.agentDataSuccess?.phoneNo || '--'}</div>

                    </section>
              </div>
              )}
              <Button
                className='saveEditBtn'
                onClick={handleSave}
                type={state.btnClicked ? "submit" : "button"}
              >
              {state.btnClicked ? "Save" : "Edit"}
            </Button>
          </section>)}
        </Card>
      </div>
    </div>
  )
}
