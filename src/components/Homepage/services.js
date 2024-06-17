import React from "react";
import { Card } from "primereact/card";


const Services = () => {

  return (
    <div>
      <Card title="Services">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <span style={{ display: "flex", flexDirection: "column" }}>
            <i className="pi pi-building" style={{ fontSize: '3em', marginLeft: "4rem" }} />
            <span style={{ fontSize: '1.2rem' }}>Apartment rentals</span>
          </span>
          <span style={{ display: "flex", flexDirection: "column", marginLeft: '9rem' }}>
            <i className="pi pi-user-edit" style={{ fontSize: '3em', marginLeft: "3rem" }} />
            <span style={{ fontSize: '1.2rem' }}>Agent Booking</span>
          </span>
          <span style={{ display: "flex", flexDirection: "column", marginLeft: '9rem' }}>
            <i className="pi pi-video" style={{ fontSize: '3em', marginLeft: "3rem" }} />
            <span style={{ fontSize: '1.2rem' }}>Online Rental Viewing</span>
          </span>
        </div>
      </Card>
    </div>
  )
}
export default Services;