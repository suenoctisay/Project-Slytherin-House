import './pages.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CommonRoom = () => {
  return (
    <div className='accordion'>
      <Accordion defaultExpanded className='accordion-item'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className='accordion-header'>
          <Typography component="span" className='title'>Common Room</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
          <div className='common-room'>
            <div className='place'>
              <img className='place-photo' src='/src/assets/img/cr-common-room.png' alt='common-room' />
              <p className='place-name'>common Room</p>
            </div>
            <div className='place'>
              <img className='place-photo'  src='/src/assets/img/cr-dormitory.png' alt='dormitory' />
              <p className='place-name'>Dormitory</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CommonRoom