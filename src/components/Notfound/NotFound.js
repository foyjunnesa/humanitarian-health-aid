import React from 'react';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1 style={{ fontWeight: 'bold', color: '#86c64D', fontSize: '100px' }}>404</h1>
            <h2>opps! Page Not Found</h2>
            <p>We're sorry, the page you requested could not be found.Please go back to the homepage or contact us at Humanitarian Health Aid@gmail.com</p>
            <button style={{ backgroundColor: '#86c64D', paddingLeft: '15px', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '5px', color: 'white', fontSize: '20px' }}>Read more..</button>
        </div>
    );
};

export default NotFound;