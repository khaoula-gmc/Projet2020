import React, { useState } from 'react';


import { 
    InputGroup, 
    InputGroupAddon, 
    Button, 
    ButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';

const Search = ({ setInputOpen, inputOpen, setInputValue }) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    const inputToggle = (e) => setInputOpen(e.target.value)
    
  return (
      <div className='search-container'>
        
        <InputGroup>
        
            <InputGroupAddon addonType="append">
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <Button id="caret" color="primary">
                        { inputOpen ? `Recherche par ${inputOpen}` : "Recherche par " } 
                    </Button>
                    <DropdownToggle caret color="primary"></DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem value="Nom" onClick={inputToggle}>Nom</DropdownItem>
                        <DropdownItem value="Type" onClick={inputToggle}>Type</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </InputGroupAddon>
        </InputGroup>
        

        {inputOpen ?
            <input
              type='text'
              onChange={(e) => setInputValue(e.target.value)}
            />
        : <></>}
      </div>
  );
};

export {Search}
