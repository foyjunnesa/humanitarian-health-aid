import React from 'react';
import './Service.css'
const Service = (props) => {
    const { img, name, details } = props.service;
    const serviceStyle = {
        borde: '1px solid grey',
        padding: '10px',
        borderRadius: '10px',
        // backgroundColor: 'lavender',
        boxShadow: '8px 8px 5px grey'


        // margin: "5px",
        // width: "500px",
        // height: "350px"
    }

    return (
        <div style={serviceStyle} className='service-fluid' >
            <img src={img} style={{ width: "300px" }} alt="" />
            <h2 style={{ textAlign: "center" }}>{name}</h2>
            <p style={{ overflow: "hidden" }}>{details}</p>
            <button style={{ backgroundColor: "#86c64D", borderRadius: "5px", color: "white", paddingLeft: '10px', paddingRight: '10px', paddingtop: '5px', paddingBottom: '5px', fontSize: "20px", fontWeight: "bold", marginLeft: "120px" }}>Help Line</button>

        </div>
    );
};

export default Service;