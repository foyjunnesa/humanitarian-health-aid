import React from 'react';
import './Home.css'
const Home = () => {

    return (
        <div className='container-fluid'>
            <h1>Humanitarian <span style={{ color: '#86c64D' }}>Health-Aid</span></h1>
            <section className='top-banner'>
                <div className='top-img'>
                    <img className='img-one' src="https://kidshealth.tlmlive.com/wp-content/uploads/sites/363/2018/11/iStock-676570626.jpg" alt="" />

                    <img className='img-two' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwn5ZA62Hn2vS1-kgScE7uUn8-xgPBpRZ9z7VBOcfzMHk67nuJCmjfzp9u6EKGZ4a9Ks&usqp=CAU" alt="" />
                    <img className='img-three' src="https://kidneyspecialistsok.com/wp-content/uploads/2018/11/06.-Transplant.jpg" alt="" />
                </div>

                <div className='bottom-banner'>
                    <img className='img-four' src="https://content.jdmagicbox.com/comp/baramati/u9/9999p2112.2112.160630083326.f7u9/catalogue/ruby-hall-clinic-services-pvt-ltd-baramati-1va53dosjc.jpg" alt="" />

                    <img className='img-five' src="https://img.freepik.com/free-photo/pregnant-woman-gynecologist-doctor-hospital_31965-1155.jpg?size=626&ext=jpg&ga=GA1.2.1933465063.1638662400" alt="" />

                    <img className='img-six' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRMWkkrlcQBnRImD6uYkz3bX20OiUgChL33BNRLHgbZ5TcSfJn0Zz5BqhaoF7vwkSkLU&usqp=CAU" alt="" />

                </div>
            </section>

        </div>
    );
};

export default Home;