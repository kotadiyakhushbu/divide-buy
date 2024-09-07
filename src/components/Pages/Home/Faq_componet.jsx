import React from 'react'
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Faq_data from './Faq_data';


export default function Faq_componet() {
  return (
    <>
      {
        Faq_data.map((faq) => {
          
          return <>
           
       <Accordion className='mb-5 faqlist'>
              <AccordionSummary id={faq.id} aria-controls='panel1-conatin'  >
              
                <Typography>{faq.Faq_title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.Faq_contation}</Typography> </AccordionDetails>

            </Accordion>
          </>
        })
      }
    </>
  )
}

