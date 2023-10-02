// import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';
import Accordion from '../pages/Accordion';
function AccordionPages() {
  const items = [
    {
         id:'1',
         label:'what will be the length of each session?',
         content : 'Session will be about 1-2 hours '
    },
    {
      id:'2',
      label:'How long will be the length of whole therapy',
      content : 'Normally it would be for 1 month but if you want to continue it more longer then there would be extra charges for that.'
    },
    {
      id:'3',
      label:'What do I do if I’m worried about my mental health?',
      content : 'The most important thing is to talk to someone you trust. This might be a friend, colleague, family member, or GP. In addition to talking to someone, it may be useful to find out more information about what you are experiencing. These things may help to get some perspective on what you are experiencing, and be the start of getting help.'
    },
    {
      id:'4',
      label:'What Causes Mental Illness?',
      content : 'There is no definitive answer to this question. It is best to get a Evaluation by a Licensed Mental Health professional to determine what you are experiencing.'
    },
    {
      id:'5',
      label:'How do I deal with someone telling me what to do?',
      content : 'Some people may advise you on good evidence of what works with the best of intentions, but it’s important to find out what works best for you.'
    }
  ];

  
  return <Accordion items={items}/>;
}

export default AccordionPages;
