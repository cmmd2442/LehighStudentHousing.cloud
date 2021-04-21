import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
			About
		</NavLink>
		<NavLink to='/home2' activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
			Home3
		</NavLink>
		<NavLink to='/events' activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
			Events
		</NavLink>
		<NavLink to='/annual' activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
			Annual Report
		</NavLink>
		<NavLink to='/fiveBed1' activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
		5-Bedroom # 1	
		</NavLink>
		<NavLink to='/blogs' activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
);
};

export default Navbar;

