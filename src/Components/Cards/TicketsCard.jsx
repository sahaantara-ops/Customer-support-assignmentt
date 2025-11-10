import React from 'react';

const TicketsCard = () => {
    const ticketDetails ={
      

    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  
  <div className="card-body">
    <div className='flex justify-between'>
    <h2 className="card-title">{ticketDetails.ticketTitle}</h2>
    <h2 className='bg-amber-300 rounded-b-box'>{ticketDetails.ticketStatus}</h2>
    </div>
    <div>
        <p className='text-shadow-zinc-400'>{ticketDetails.ticketDescription}</p>
    </div>
   <div className="card-actions justify-end">
      <div className="text-gray-400">{ticketDetails.ticketId}</div>
      <div className="text-amber-100">{ticketDetails.ticketStatus}</div>
      <div className="text-gray-400">{ticketDetails.ticketCustomer}</div>
      <div className="text-gray-400">{ticketDetails.ticketCreatedAt}</div>

    </div>
  </div>
</div>
    );
};

export default TicketsCard;