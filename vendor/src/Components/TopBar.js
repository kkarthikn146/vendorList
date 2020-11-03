import React from 'react';
import {Link} from 'react-router-dom'
import {
    Nav,Navbar,NavbarBrand,NavItem,Container
} from 'reactstrap'

const TopBar = () => {
    return (
        <>
        <Navbar style={{backgroundColor:"#74b9ff"}} >  
            <Container>
            <NavbarBrand style={{color:"white"}} >All Vendors</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className="btn" style={{backgroundColor:"#192a56",color:"white"}} to="/add">Add Vendor</Link>
                </NavItem>
            </Nav>
            </Container>
        </Navbar>
            
        </>
    )
}

export default TopBar
