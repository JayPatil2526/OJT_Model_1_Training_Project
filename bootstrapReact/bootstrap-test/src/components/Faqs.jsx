import React, { useState } from 'react';
import faqs from '../data/faqquestions';

export default function Faqs() {

    let [currentId, setCurrentId] = useState(faqs[0].id);

    let faqItems = faqs.map((faqdata, index) => {

        let itemsDetails = {
            faqdata,
            currentId,
            setCurrentId
        }


        return (
            <FaqItems itemsDetails={itemsDetails} key={index} />
        )

    })

    return (
        <div>

            <h1 className='text-center'>Frequently Asked Questions</h1>

            <div className='faqOuter'>

                {faqItems}

            </div>

        </div>


    )
}

function FaqItems({ itemsDetails }) {

    let { faqdata, currentId, setCurrentId } = itemsDetails;

    return (
        <div className='faqItems'>
            <h2 className='faqQuestion' onClick={() => setCurrentId(faqdata.id)}>{faqdata.question}</h2>
            <p className={currentId === faqdata.id ? 'activeAns' : ''} >{faqdata.answer}</p>
        </div>
    )
}
