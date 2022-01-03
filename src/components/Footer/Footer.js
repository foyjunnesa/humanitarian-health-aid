import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div style={{ display: 'flex', marginTop: '70px' }}>
                <div>
                    <h3 style={{ color: 'white', paddingTop: '30px', paddingBottom: '10px', paddingLeft: '10px' }}>Humanitarian Health Aid</h3>
                    <img style={{ width: '75px', marginLeft: '40px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeU29SlOIqT_uiAq1Koe4wa61Yj5mAEBomBSp02-UmI4zjL9o1F6hus6dxo18i0AXGH-w&usqp=CAU" alt="" />
                    <p style={{ color: 'white', paddingTop: '10px', paddingLeft: '30px' }}>The best and most professional health-aid website <br /> templates for a quick and reliable launch of a <br /> physician, doctor, dentist, clinic, hospital and <br /> any other are provided here</p>
                </div>
                <div style={{ color: 'white', paddingTop: '30px', paddingLeft: '60px' }}>
                    <h4 style={{ color: 'white' }}>Site Navigation&#10095;&#10095;</h4>
                    <h5>&#10132;Neurology Services</h5>
                    <h5>&#10132;Doctors List</h5>
                    <h5>&#10132;News and Update</h5>
                    <h5>&#10132;Therapy Services</h5>
                </div>

                <div style={{ color: 'white', paddingTop: '30px', paddingLeft: '60px' }}>
                    <h4>Explore More&#10151;</h4>
                    <h5>&#10132;Success Stroy</h5>
                    <h5>&#10132;Our Experts Doctors</h5>
                    <h5>&#10132;Our Emergency Services</h5>
                    <h5>&#10132;Contact Excutive</h5>
                </div>

                <div style={{ color: 'white', paddingTop: '30px', paddingLeft: '60px' }}>
                    <h4>Information</h4>
                    <h5>&#9742;Contact No.+123 456 7890</h5>
                    <h5>&#10148;Our Experts Doctors</h5>
                    <h5>&#9993; ID:info@example.com</h5>
                    <h5>&#9750; Dhanmondi,Dhaka-1216</h5>
                    <h5>&#9742;Contact No.+123 456 7890</h5>

                </div>
            </div>

            <p style={{ color: 'white', textAlign: 'center', paddingBottom: '25px' }}>© Copyright 2021 | Designed By <span style={{ color: 'red', fontWeight: '500px', fontSize: '20px' }}>Foyjunnesa Mayna</span> | All Rights Reserved</p>
        </div >
    );
};

export default Footer;