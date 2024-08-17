import React, { useRef, useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import '../../Styles/HomePage.scss'
import '../../Styles/agents.scss'
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase'
import { db, storage } from '../../firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

export const Agents = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [zoomOption, setZoomOption] = useState(null);
  const [meterOption, setMeterOption] = useState(null);
  const [securityOption, setSecurityOption] = useState(null);
  const [popOption, setPopOption] = useState(null);
  const [porchOption, setPorchOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  // collection ref in firebase
  const colRef = collection(db, 'agentData')

  // getDocs(colRef)
  //   .then((snapshot) => {
  //     let agentData = []
  //     snapshot.docs.forEach((doc) => {
  //       agentData.push({ ...doc.data() })
  //     })
  //     console.log(agentData);
  //   })
  // const firebase = useFirebase()


  // async function addSampleTodo() {
  //   const sampleTodo = { text: 'Sample', done: false };

  //   try {
  //     const docRef = await addDoc(collection(firestore, 'todos'), sampleTodo);
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (error) {
  //     console.error('Error adding document: ', error);
  //   }
  // }


  // const messageRef = useRef();
  // const ref = collection(firestore, "messagesOne");

  // const handleSave = (e) => {
  //   e?.preventDefault();
  //   let data = {
  //     message: messageRef.current.value,
  //   }
  //   try {
  //     addDoc(ref, data)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // const imageListRef = ref(storage, `images/`)
  // useEffect(() => {
  //   listAll(imageListRef).then((res) => {
  //     // console.log(res);
  //     res.items.forEach(item => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => ([...prev, url]))
  //       })
  //     })
  //   })
  // }, [])
  // const uploadImage = () => {
  //   if (imageUpload === null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name}`)
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageList((prev) => ([...prev, url]))
  //     })
  //     // alert("Image Uploaded")
  //   })

  // }
  function uploadContainers(title) {
    return <div>
      <div className='upload-divs'>
        <p className='upload-title'>{title}</p>
      </div>
      <FileUpload mode='basic' className='upload-btn' chooseLabel='upload' />
    </div>
  }

  const options = [{ opt: 'yes' }, { opt: 'No' }]

  const uploadOptions = (placeholder, label, option, setOption) => {
    return <div className='apt-info'>
      <span> <label className='label-txt'>{label}</label></span>
      <Dropdown value={option} onChange={(e) => setOption(e.value)} options={options} optionLabel="opt" className='agents-dropdown'
        placeholder={placeholder} />

    </div>
  }

  const uploadInputs = (placeholder, label) => {
    return <div className='apt-info'>
      <span> <label className='label-txt'>{label}</label></span>
      <InputText placeholder={placeholder} className='apt-info-text' />
    </div>
  }
  return (
    <div>
      <div className='agents-card-main' >
        <span style={{ display: 'flex' }}>
          <h2 className='agents-heading'>Upload Apartment Info</h2>
          <Link to='/pages/listings'><Button label='My Listings' className='listings' /> </Link>
        </span>
        <Card className='agent-card'>
          {/* agents, are welcome */}
          {/* <form style={{ marginTop: '10px' }} onSubmit={handleSave}>
            <label>Enter message</label>
            <input type="text" ref={messageRef}></input>
            <button type='submit'>Submit</button>
          </form> */}
          {/* <div style={{ marginTop: '20px', display: "flex", flexDirection: 'column' }}>
            <input type='file' onChange={(e) => setImageUpload(e.target.files[0])}></input>
            <button style={{ width: '6.5rem', marginTop: '3px' }} onClick={uploadImage}>Upload Image</button>
          </div>
          {imageList.map((url) => {
            return <img src={url} style={{ width: '10rem', height: '10rem', display: 'inline-block', }} />
          })} */}
          <section style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              {uploadContainers('Hall')}
              {uploadContainers('Bedroom')}
              {uploadContainers('Kitchen')}
              {uploadContainers('Washroom')}
            </div>
            <div style={{ display: 'flex' }}>
              {uploadContainers('Entrance')}
              {uploadContainers('other')}
              {uploadContainers('other')}
              {uploadContainers('other')}
            </div>

          </section>

          <section >
            <div className='last-container'>
              <span style={{ display: "flex", flexDirection: "column" }}>
                {uploadInputs('region', 'Region')}
                {uploadInputs('city', 'City')}
                {uploadInputs('ID', 'AgentID')}
                {uploadInputs('Phone number', 'Phone Number')}
              </span>

              <span style={{ display: "flex", flexDirection: "column" }}>
                {uploadOptions('Yes/No', 'Own Meter', meterOption, setMeterOption)}
                {uploadOptions('Yes/No', 'Zoomlion', zoomOption, setZoomOption)}
                {uploadInputs('eg: 5km from main road', 'Road Access')}
                {uploadInputs('description', 'Description')}
              </span>

              <span style={{ display: "flex", flexDirection: "column" }}>
                {uploadInputs('price', 'Price')}
                {uploadOptions('Yes/No', 'Security', securityOption, setSecurityOption)}
                {uploadOptions('Yes/No', 'POP Ceiling', popOption, setPopOption)}
                {uploadOptions('Yes/No', 'Porch', porchOption, setPorchOption)}
              </span>

              <Button label='Save' className='saveBtn' />
            </div>
          </section>

        </Card>
      </div>
    </div>
  )
}
