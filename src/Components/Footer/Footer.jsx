import React, { useContext } from 'react';
import { AuthContext } from '../ContexFile/Context';

const Footer = () => {
const {time}=useContext(AuthContext)

    return (
        <div className='mt-20'>
           {
            time? <div>emon</div>: <div>footer</div>
           }
        </div>
    );
};

export default Footer;