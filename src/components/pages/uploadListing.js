import React, { useRef, useState, useEffect } from 'react'
import { Card } from 'primereact/card'
// import '../../Styles/HomePage.scss'
import '../../Styles/responsiveness.scss'
import '../../Styles/uploadListing.scss'
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { CustomDialog } from '../../utils/dialog';
import { useFirebase } from 'react-redux-firebase'
import { db, storage } from '../../firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

export const UploadListing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(location.state || 0);
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

  console.log(activeIndex);

  const handleNext = () => {

    setActiveIndex((prevStep) => prevStep + 1)
    // activeIndex === 0 ? setActiveIndex(1)
    //   : activeIndex === 1 ? setActiveIndex(2)
    //     : activeIndex === 2 ? setActiveIndex(3)
    //       : null
  }

  const handleBack = () => {
    activeIndex === 1 ? setActiveIndex(0)
      : activeIndex === 2 ? setActiveIndex(1)
        : activeIndex === 3 ? setActiveIndex(2)
          : null
  }

  function uploadContainers(title) {
    return <div className='mb-4'>
      <div className='upload-divs'>
        <p className='upload-title mb-0 mt-0'>{title}</p>
        <FileUpload mode='basic' className='upload-btn' chooseLabel='upload' />
      </div>
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
    <div className='agents-card-main'>
      <div className='flex justify-content-center'>
        <h2 className='agents-heading'>Upload Your Property here</h2>
        <Button label='My Listings' className='listings' onClick={() => navigate('/pages/listings')} />
      </div>
      {activeIndex === 0 && <Card className='agent-card'>
        <div className='flex items-center pt-6 pl-6 mb-3'>
          <p className='numberOfPages mb-0 mt-1 btn'>{`${activeIndex + 1} of 5`}</p>
          <p className='font-bold mb-0 ml-3 mt-0 text-4xl loca'>Location / Info</p>
        </div>

        <div className='flex flex-column pl-6'>
          <span>{uploadInputs('region', 'Region')}</span>
          <span>{uploadInputs('Phone number', 'Phone Number')}</span>
          <span>{uploadInputs('city', 'City')}</span>
          <span>{uploadInputs('ID', 'AgentID')}</span>
          <span>{uploadInputs('description', 'Description')}</span>
          <span>{uploadInputs('eg: 5km from main road', 'Road Access')}</span>
          <span>{uploadInputs('Phone number', 'Phone Number')}</span>
          <div className='flex justify-content-end mt-2'>
            <Button label='Next' className='nextBtn m-3' onClick={handleNext} />
          </div>
        </div>
      </Card>}

      {activeIndex === 1 && <Card className='agent-card'>
        <div className='flex items-center pt-6 pl-6 mb-3'>
          <p className='numberOfPages mb-0 mt-1 btn'>{`${activeIndex + 1} of 5`}</p>
          <p className='font-bold mb-0 ml-3 mt-0 text-4xl'>Description</p>
        </div>

        <div className='flex flex-column pl-6'>
          <span>{uploadInputs('price', 'Price')}</span>
          <span>{uploadInputs('description', 'Description')}</span>
          <span>{uploadOptions('Yes/No', 'Porch', porchOption, setPorchOption)}</span>
          <span>{uploadOptions('Yes/No', 'POP Ceiling', popOption, setPopOption)}</span>
          <span>{uploadOptions('Yes/No', 'Security', securityOption, setSecurityOption)}</span>
          <span>{uploadOptions('Yes/No', 'Own Meter', meterOption, setMeterOption)}</span>
          <span>{uploadOptions('Yes/No', 'Zoomlion', zoomOption, setZoomOption)}</span>
          <div className='btn-container mt-3'>
            <Button label='Back' className='backBtn' onClick={handleBack} />
            <Button label='Next' className='nextBtn mr-2' onClick={handleNext} />
          </div>
        </div>
      </Card>}


      {activeIndex === 2 && <Card className='agent-card'>
        <div className='flex items-center pt-6 pl-6 mb-3'>
          <p className='numberOfPages mb-0 mt-1 btn'>{`${activeIndex + 1} of 5`}</p>
          <p className='font-bold mb-0 ml-3 mt-0 text-4xl'>Upload Images</p>
        </div>

        <div className='pl-6 pr-3'>
          <div className='flex flex-wrap gap-4 upload-prevs'>
            <span>{uploadContainers('Hall')}</span>
            <span>{uploadContainers('Bedroom')}</span>
            <span>{uploadContainers('Kitchen')}</span>
            <span>{uploadContainers('Washroom')}</span>
            <span>{uploadContainers('Entrance')}</span>
            <span>{uploadContainers('Other')}</span>
          </div>

          <div className='btn-container mt-3'>
            <Button label='Back' className='backBtn' onClick={handleBack} />
            <Button label='Next' className='nextBtn mr-2' onClick={handleNext} />
          </div>
        </div>
      </Card>}

      {activeIndex === 3 && <Card className='agent-card'>
        <div className='flex items-center pt-6 pl-6 mb-3'>
          <p className='numberOfPages mb-0 mt-1 btn'>{`${activeIndex + 1} of 5`}</p>
          <p className='font-bold mb-0 ml-3 mt-0 text-4xl'>Preview Listing Info</p>
        </div>

        <div className='pl-6 pr-3'>
          Preview
          {/* <div className='flex flex-wrap gap-4'>
            <span>{uploadContainers('Hall')}</span>
            <span>{uploadContainers('Bedroom')}</span>
            <span>{uploadContainers('Kitchen')}</span>
            <span>{uploadContainers('Washroom')}</span>
            <span>{uploadContainers('Entrance')}</span>
            <span>{uploadContainers('Other')}</span>
          </div> */}

          <div className='btn-container mt-3'>
            <Button label='Back' className='backBtn' onClick={handleBack} />
            <Button label='Next' className='nextBtn mr-2' onClick={handleNext} />
          </div>
        </div>
      </Card>}

      {activeIndex === 4 && <Card className='agent-card'>
        <div className='flex items-center pt-6 pl-6 mb-3'>
          <p className='numberOfPages mb-0 mt-1 btn'>{`${activeIndex + 1} of 5`}</p>
          <p className='font-bold mb-0 ml-3 mt-0 text-4xl'>Done</p>
        </div>

        <div className='pl-6 pr-3'>
          Listing Uploaded Successfully
          {/* <div className='flex flex-wrap gap-4'>
            <span>{uploadContainers('Hall')}</span>
            <span>{uploadContainers('Bedroom')}</span>
            <span>{uploadContainers('Kitchen')}</span>
            <span>{uploadContainers('Washroom')}</span>
            <span>{uploadContainers('Entrance')}</span>
            <span>{uploadContainers('Other')}</span>
          </div> */}

          <div className='flex justify-content-end mt-2'>
            <Button label='Done' className='nextBtn m-3' onClick={() => navigate('/pages/listings')} />
          </div>
        </div>
      </Card>}

    </div>
  )
}
