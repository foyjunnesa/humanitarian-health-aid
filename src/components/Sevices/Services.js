import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services'>

            <h1>Humanitarian <span style={{ color: '#86c64D' }}>Health-Aid</span> </h1>
            {/****{{{====---Services Part---====}}}****/}
            <div className='services-name'>
                <h2>Our  <span style={{ color: '#86c64D' }}>Services</span></h2>
                <p></p>
            </div>

            <div className="service-container">
                {
                    services.map(service => <Service
                        service={service}></Service>)
                }
            </div>

            {/****{{{====---Doctors Part---====}}}****/}
            <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <h2>Our  <span style={{ color: '#86c64D' }}>Doctors</span></h2>
                <p style={{ borderBottom: '1px solid #86c64D', borderBottomWidth: '2px', width: '200px', marginLeft: '575px' }}></p>
            </div>

            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px', marginLeft: '150px', marginTop: '60px', padding: '10px', marginRight: '170px'

            }}>
            </div>

            <div className="doctor-info">
                <div style={{ boxShadow: '2px 2px 3px grey', borderRadius: '10px', padding: '10px' }}>
                    <img style={{ width: '75%', marginLeft: '50px' }} src="https://image.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1" alt="" />
                    <h2 style={{ marginLeft: '90px', fontSize: '22px', color: '#86c64D' }}>Prof. Dr. Frederick Banting</h2>
                    <p style={{ marginLeft: '150px' }}>BDS DAND DDS MS</p>
                </div>
                <div style={{ boxShadow: '2px 2px 3px grey', borderRadius: '10px', padding: '10px' }}>
                    <img style={{ width: '75%', marginLeft: '50px' }} src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" alt="" />
                    <h2 style={{ marginLeft: '90px', fontSize: '22px', color: '#86c64D' }}>Dr. Emily Stowe</h2>
                    <p style={{ marginLeft: '50px' }}> Master of Clinical Medicine (MCM) </p>
                </div>
                <div style={{ boxShadow: '2px 2px 3px grey', borderRadius: '10px', padding: '10px', marginTop: '40px' }}>
                    <img style={{ width: '75%', marginLeft: '50px' }} src="https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg" alt="" />
                    <h2 style={{ marginLeft: '130px', fontSize: '22px', color: '#86c64D' }}>Dr. William Osler</h2>
                    <p style={{ marginLeft: '60px' }}>Master of Medical Science (MMSc, MMedSc) </p>
                </div>
                <div style={{ boxShadow: '2px 2px 3px grey', borderRadius: '10px', padding: '10px', marginTop: '40px' }}>
                    <img style={{ width: '75%', marginLeft: '50px' }} src="https://image.freepik.com/free-photo/young-lady-looking-pointing-copy-space_171337-5771.jpg" alt="" />
                    <h2 style={{ marginLeft: '130px', fontSize: '22px', color: '#86c64D' }}>Dr. Samantha Nutt</h2>
                    <p style={{ marginLeft: '127px' }}>Bachelor of Medicine(MBBS)</p>
                </div>
            </div>

        </div>
    );
};

export default Services;