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
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';


export const SettingsProfile = () => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage);
  const userId = userData?.sub;
  const logoFromLocaStorage = localStorage.getItem(`agentProfilePic:${userId}`);

  const navigate = useNavigate();

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

  const formik = useFormik({
    // initialValues: { email: "", phoneNo: "", agentId: "" },
    initialValues: state.editData,
    enableReinitialize: true,
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.phoneNo) {
        errors.phoneNo = 'Required';
      } else if (values.phoneNo.length < 10) {
        errors.phoneNo = 'Phone Number must be at least 10 Numbers';
      }
      if (!values.agentId) {
        errors.agentId = 'Required'
      } else if (values.agentId.length < 6) {
        errors.agentId = 'AgentID must be 6 characters';
      }
      return errors;
    },
    onSubmit: (values) => {
      updateAgentData(values).then(() => {
        // fetchAgentData();
        showUpdate();
      });
    }
  })

  // const onChangeDetails = (e) => {
  //   let { name, value } = e.target
  //   setState((state) => ({ ...state, editData: { ...state.editData, [name]: value } }))
  // }

  const showUpdate = () => {
    updateToast.current.show({ severity: 'success', summary: 'Success', detail: 'Profile Update Successful' });
  };
  const showLogoUpload = () => {
    updateToast.current.show({ severity: 'success', summary: 'Success', detail: 'Logo Upload Successful' });
  };

  const editInfo = [
    { label: "Name", value: "name", stateData: state.editData.name, placeholder: "Name" },
    { label: "Age", value: "age", stateData: state.editData.age, placeholder: "Age" },
    { label: "Region", value: "region", stateData: state.editData.region, placeholder: "Region" },
    { label: "Gender", value: "gender", stateData: state.editData.gender, placeholder: "Gender" },
    { label: "AgentID", value: "agentId", stateData: state.editData.agentId, placeholder: "AgentID" },
    { label: "Email", value: "email", stateData: state.editData.email, placeholder: "Email" },
    { label: "Phone No", value: "phoneNo", stateData: state.editData.phoneNo, placeholder: "Phone No" },
  ]

  const loadPage = state.agentDataLoading || state.logoLoading;

  const handleCancel = () => {
    navigate(0);
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
      formik.handleSubmit();
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
        navigate(0);
      }} />
      <Toast ref={logoUploadToast}
        onRemove={() => {
          navigate(0);
        }}
      />
      <div className='profile-main-card'>
        <h1 className='pro-heading'>Profile</h1>
        <Card className='profile-card'>
          {loadPage ? (
            <div>
              <Loading />
            </div>
          ) :
            (<section className='p-5'>
              {state.btnClicked ? (
                <div style={{ marginTop: "2rem" }}>
                  <hr />
                  <span className='notice-text'>Please Save your AgentID safely!!</span>
                  <p className='notice-text-2'>It will be needed each time to access the Agent pages. It should be a mix of different characters eg: @A&34+K. Thank you ! </p>
                  <hr />

                  <form>
                    {editInfo.map((item, index) => (
                      <div key={index} className='edit-sec'>
                        <label className='label-edit'>{item.label}</label>
                        <InputText
                          placeholder={item.placeholder}
                          className='input'
                          {...formik.getFieldProps(item.value)}
                        />
                        {formik.touched[item.value] && formik.errors[item.value] ? (
                          <div className='error error-msg'>{formik.errors[item.value]}{"*"}</div>
                        ) : null}
                      </div>
                    ))}
                  </form>
                  {/* {editInfo.map((item, index) => <div key={index} className='edit-sec mb-4'>
                    <label className='label-edit'>{item.label}</label>
                    <InputText placeholder={item.placeholder} className='input' name={item.value} value={item.stateData} onChange={onChangeDetails} />
                  </div>)} */}
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
              <div className='flex' style={{ justifyContent: "space-between" }}>
                {state.btnClicked && <Button
                  onClick={handleCancel}
                  className='cancelBtn'
                >Cancel</Button>}

                <Button
                  className='saveEditBtn'
                  onClick={handleSave}
                  // onClick={formik.handleSubmit}
                  style={{ marginLeft: state.btnClicked ? "0rem" : "41.5rem" }}
                  type={state.btnClicked ? "submit" : "button"}
                >
                  {state.btnClicked ? "Save" : "Edit"}
                </Button>
              </div>
          </section>)}
        </Card>
      </div>
    </div>
  )
}
