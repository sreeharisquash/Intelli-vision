import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown.css'
import { useState } from 'react';

function DropdownItemTags({dropdownTitle , para}) {

  const [isOpen , setIsOpen] = useState(false)

  const handleDropdownToggle = (nextOpenState, event, metadata) => {
    setIsOpen(nextOpenState);
  };
  return (
    

     <DropdownButton id="dropdown-item-button" title={dropdownTitle} className={`custom-dropdown-arrow ${isOpen ? 'dropdown-open' : ''}`} onToggle={handleDropdownToggle}>
      <Dropdown.ItemText><p>{para}</p></Dropdown.ItemText>
     </DropdownButton>  
  );
}

export default DropdownItemTags;