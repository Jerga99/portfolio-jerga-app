
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


// // Todo: Transform To Class
// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">Filip Jerga</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <Link href="/">
//                 <a className="nav-link"> Home </a>
//               </Link>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Example;

const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link">{title}</a>
    </Link>
  )
}

export default class Header extends React.Component {

  state = { isOpen: false }
  toggle = () => this.setState({isOpen: !this.state.isOpen})

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Filip Jerga</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <BsNavLink route="/" title="Home"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/about" title="About"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/portfolios" title="Portfolios"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/blogs" title="Blogs"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/cv" title="Cv"/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
