import './pages.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Characters = () => {
  return (
    <div className='accordion'>
      <Accordion defaultExpanded className='accordion-item'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className='accordion-header'>
          <Typography component="span" className='title'>Characters</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
          <div className='characters'>
            <div className='person'>
              <img className='person-photo' src='/src/assets/img/char-draco-malfoy.png' alt='Draco Malfoy' />
              <p className='person-name'>Draco Malfoy</p>
              <p className='person-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget varius augue. </p>
            </div>
            <div className='person'>
              <img className='person-photo' src='/src/assets/img/char-pansy-parkson.png' alt='Pansy Parkson' />
              <p className='person-name'>Pansy Parkson</p>
              <p className='person-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget varius augue. </p>
            </div>
            <div className='person'>
              <img className='person-photo' src='/src/assets/img/char-tom-riddle.png' alt='Tom Roddle' />
              <p className='person-name'>Tom Riddle</p>
              <p className='person-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget varius augue. </p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Characters
