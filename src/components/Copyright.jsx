import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Copyright = () => {
  return (
    <div className="text-center" style={{ backgroundColor: '#080609' }}>
      <p>
        Copyright <FontAwesomeIcon icon={faCopyright}/>
        {" "}
        2024 by <span className='text-[#00D9E8]'>Jas Verma</span>. All rights reserved.
      </p>
      <div className="h-1 w-20 mx-auto mt-2"></div>
    </div>
  );
}

export default Copyright;
