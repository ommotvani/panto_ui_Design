import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import '../../../pages/home/home.scss'


function ProductsTab() {
    return (
        <div className='tabs'>
            <Nav pills  >
                <NavItem>
                    <NavLink
                        href="#"
                        className='item'
                        active
                    >
                        Chair
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Beds
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Sofa
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#"
                    >
                        Lamp
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default ProductsTab