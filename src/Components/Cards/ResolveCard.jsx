import React from 'react';
import { ArrowRight } from 'lucide-react';

const ResolveCard = ({ticketDetails}) => {
    return (
        <div className='bg-emerald-200 border-accent p-3 rounded-xl'>
            <h2>{ticketDetails.ticket_title}</h2>
            <h4 className='flex'> <ArrowRight /> Completed</h4>
        </div>
    );
};

export default ResolveCard;