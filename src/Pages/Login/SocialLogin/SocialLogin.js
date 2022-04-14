import React from 'react';

const SocialLogin = () => {
    return (
        <div className='d-flex align-items-center'>
             <div style={{height:'1px'}} className='bg-primary w-50'></div>
              <p className='mt-2 px-2'> or</p>
             <div style={{height:'1px'}} className='bg-primary w-50'></div>

             <div>
                 <button className='btn btn-primary'>Google Sign In </button>
             </div>
        </div>
    );
};

export default SocialLogin;