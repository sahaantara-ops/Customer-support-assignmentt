import React from 'react';
import { Calendar } from 'lucide-react';

const TicketsCard = ({ticketDetails,handleOrder}) => {
 
   
    return (
        <div 
        onClick={() =>handleOrder(ticketDetails) }
        className="card bg-base-100 w-[450px] shadow-sm">
  
  <div className="card-body">
    <div className='flex justify-between'>
    <h2 className="card-title">{ticketDetails.ticket_title}</h2>
  <h2
  className={`rounded-lg ${
    ticketDetails.ticket_status === "Closed"
      ? "bg-red-500"
      : ticketDetails.ticket_status === "In Progress"
      ? "bg-blue-300"
      : "bg-amber-300"
  }`}
>
  {ticketDetails.ticket_status}
</h2>
    </div>
    <div>
        <p className='text-shadow-zinc-400'>{ticketDetails.ticket_description}</p>
    </div>
   <div className="card-actions justify-around gap-1">
      <div className="text-emerald-400">{ticketDetails.ticket_id}</div>
      <h2
  className={`rounded-lg ${
    ticketDetails.ticket_status === "Closed"
      ? "text-lime-300"
      : ticketDetails.ticket_status === "In Progress"
      ? "text-shadow-blue-600"
      : "text-amber-300"
  }`}
>
  {ticketDetails.ticket_status}
</h2>
      <div className="text-gray-400">{ticketDetails.ticket_customer}</div>
      <div className="text-gray-400"><Calendar />
       {ticketDetails.ticket_createdAt}</div>

    </div>
  </div>
</div>
    );
};

export default TicketsCard;