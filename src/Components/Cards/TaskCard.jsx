import React from 'react';

const TaskCard = ({ticketDetails}) => {
    return (
        <div className='gap-3 p-2 rounded-xl'>
            <h2>{ticketDetails.ticket_title}</h2>
            <button className="btn btn-success">Complete</button>

        </div>
    );
};

export default TaskCard;