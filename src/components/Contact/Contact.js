import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-name'>

            <div style={{ width: '600px', display: 'flex' }}>
                <img src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg" alt="" />
            </div>
            <div style={{ display: 'flex', marginLeft: '150px', marginTop: '50px', }}>

                <form className='form'>
                    <h5>Fell Free Contact With Us</h5>
                    <h3 style={{ color: '#86c64Ded', fontFamily: 'arial', fontWeight: 'bold' }}>Register <span style={{ color: 'red' }}>Please</span></h3>
                    <div style={{ marginBottom: '30px' }}>
                        <input style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '8px', paddingBottom: '8px', width: '450px', border: '2px solid #86c64D', borderRadius: '10px', boxShadow: '5px 5px 2px grey' }} placeholder='Name' type="text" />
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <input style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '8px', paddingBottom: '8px', width: '450px', border: '2px solid #86c64D', borderRadius: '10px', boxShadow: '5px 5px 2px grey' }} placeholder='Email' type="text" />
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <input style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '8px', paddingBottom: '8px', width: '450px', border: '2px solid #86c64D', borderRadius: '10px', boxShadow: '5px 5px 2px grey' }} type="password" name="" placeholder='password' id="" />
                    </div>
                    <button style={{ backgroundColor: '#86c64D', border: '1px solid white', borderRadius: '5px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '5px', paddingBottom: '5px', boxShadow: '5px 5px 2px white', marginLeft: '180px', fontSize: '20px', fontWeight: '500px', color: 'white' }}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;