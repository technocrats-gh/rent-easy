import React, { useState } from 'react'
import { Card } from 'primereact/card'
import { TabView, TabPanel } from 'primereact/tabview';

import { useNavigate } from 'react-router-dom';
import { Badge } from 'primereact/badge';
import '../../Styles/bookings.scss'
import { Button } from 'primereact/button';

export const Bookings = () => {
  const navigate = useNavigate();

  const upcomingTemplate = () => {
    return (
      <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }}>
        <span className="font-bold white-space-nowrap mr-2" onClick={() => console.log('upcoming')}>Upcoming</span>
        <Badge value="0" />
      </div>
    );
  };
  const missedTemplate = () => {
    return (
      <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }}>
        <span className="font-bold white-space-nowrap mr-2">Missed</span>
        <Badge value="0" />
      </div>
    );
  };
  const cancelledTemplate = () => {
    return (
      <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }}>
        <span className="font-bold white-space-nowrap mr-2">Cancelled</span>
        <Badge value="0" />
      </div>
    );
  };
  const completedTemplate = () => {
    return (
      <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }}>
        <span className="font-bold white-space-nowrap mr-2">Completed</span>
        <Badge value="0" />
      </div>
    );
  };
  return (
    <div className='bookings-main'>
      <Card className='main-card p-3'>
        <h2 className=''>Bookings</h2>
        <h5>See all your bookings below</h5>
        {/* <TabView className=''>
          <TabPanel headerTemplate={upcomingTemplate} headerClassName='tabClass'>
            <p className='text-lg font-bold '>You have 0 Upcoming bookings available</p>
          </TabPanel>
          <TabPanel headerTemplate={completedTemplate} headerClassName='tabClass'>
            <p className='text-lg font-bold '>You have 0 Completed bookings available</p>
          </TabPanel>
          <TabPanel headerTemplate={cancelledTemplate} headerClassName='tabClass'>
            <p className='text-lg font-bold '>You have 0 Cancelled bookings available</p>
          </TabPanel>
          <TabPanel headerTemplate={missedTemplate} headerClassName='tabClass'>
            <p className='text-lg font-bold '>You have 0 Missed bookings available</p>
          </TabPanel>
        </TabView> */}

        <TabView>
          <TabPanel header="Upcoming" headerClassName='tabClass'>
            <p className='mb-0 font-bold'>You have 0 Upcoming bookings available</p>
            <div className='flex'>
              <p className='mb-0'>Upload an apartment to get people booking</p>
              <Button className='upload-button' onClick={() => navigate("/pages/uploadListing")}>Upload</Button>
            </div>
          </TabPanel>
          <TabPanel header="Completed" headerClassName='tabClass'>
            <p className='mb-0 font-bold' >You have 0 Completed bookings available</p>
          </TabPanel>
          <TabPanel header="Cancelled" headerClassName='tabClass'>
            <p className='mb-0 font-bold'>You have 0 Cancelled bookings available</p>
          </TabPanel>
          <TabPanel header="Missed" headerClassName='tabClass'>
            <p className='mb-0 font-bold'>You have 0 Missed bookings available</p>
          </TabPanel>
        </TabView>

      </Card>
    </div>
  )
}
