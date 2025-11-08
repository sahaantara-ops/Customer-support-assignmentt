import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between max-w-[auto] h-[78px] border-accent rounded-sm'>
            <div>
                <h2>CS- Ticket System</h2>
            </div>
            <div className='flex gap-5'>
                <ul className='flex gap-5'>
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    </ul>
                    
             <button className="btn btn-soft btn-primary bg-fuchsia-800 text-white">New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;