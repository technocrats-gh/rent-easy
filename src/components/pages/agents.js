import React, { useRef, useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import '../../Styles/HomePage.scss'
import '../../Styles/agents.scss'
import { firestore, storage } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

export const Agents = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
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
  const imageListRef = ref(storage, `images/`)
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      // console.log(res);
      res.items.forEach(item => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => ([...prev, url]))
        })
      })
    })
  }, [])
  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => ([...prev, url]))
      })
      // alert("Image Uploaded")
    })

  }
  return (
    <div>
      <div className='agents-card-main' >
        <Card className='agent-card'>
          {/* agents, are welcome */}
          {/* <form style={{ marginTop: '10px' }} onSubmit={handleSave}>
            <label>Enter message</label>
            <input type="text" ref={messageRef}></input>
            <button type='submit'>Submit</button>
          </form> */}
          <div style={{ marginTop: '20px', display: "flex", flexDirection: 'column' }}>
            <input type='file' onChange={(e) => setImageUpload(e.target.files[0])}></input>
            <button style={{ width: '6.5rem', marginTop: '3px' }} onClick={uploadImage}>Upload Image</button>
          </div>
          {imageList.map((url) => {
            return <img src={url} style={{ width: '10rem', height: '10rem', display: 'inline-block', }} />
          })}
        </Card>
      </div>
    </div>
  )
}
