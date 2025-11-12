import React from 'react';

const TaskCard = ({ticketDetails,handleResolve}) => {
    return (
        <div className='gap-3 p-2 rounded-xl'>
            <h2>{ticketDetails.ticket_id}</h2>
            <h2>{ticketDetails.ticket_title}</h2>
            <button onClick={() => handleResolve(ticketDetails)} className="btn btn-success">Complete</button>

        </div>
    );
};

export default TaskCard;