import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import notificationcount from '../../assets/images/zero.svg'
import notificationBadge from '../../assets/images/bag.svg'


function NavbarHome(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='navbar_section'>
            <div className='navbar_container'>
                <Navbar {...args} expand={"lg"} className='navbar_section justify-content-center'>

                    <NavbarBrand className='logo'>Panto</NavbarBrand>
                    <div className='last-logo_first'>
                    
                                    <img src={notificationBadge} className='bage' alt='notification badge' />
                                    <img src={notificationcount} className='zero' alt='notification count' />
                               
                    <NavbarToggler onClick={toggle} />

                    </div>
                    <Collapse isOpen={isOpen} className='' navbar>
                        <Nav className="" navbar>
                       
                            <DropdownToggle nav caret>
                                Furniture
                             
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>

                            <NavItem>
                                Shop
                            </NavItem>
                            <NavItem>
                                About Us
                            </NavItem>

                            <NavItem>
                                Contact
                            </NavItem>
                        </Nav>
                    </Collapse>
                         
                               <div className='last-logo'>
                        <img src={notificationBadge} className='bage' alt='notification badge' />
                        <img src={notificationcount} className='zero' alt='notification count' />
                    </div>
        
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarHome