

  
    import React, { Fragment } from "react";
    import { NavLink, withRouter } from "react-router-dom";
    import { Menu } from "semantic-ui-react";
    
    const NavBar = ({ updateUser, logged_in, location: { pathname } }) => {
      let logout = () => {
        localStorage.clear()
        updateUser(null)
      }
    
      return (
        <Menu pointing secondary>
          {logged_in ? (
            <Fragment>
              <Menu.Item
                as={NavLink}
                to="/manager/:id"
                name="manager"
                active={pathname === "/manager"}
              />
              <Menu.Menu position="right">
                <Menu.Item to="/logout" name="Logout" onClick={logout} />
              </Menu.Menu>
            </Fragment>
          ) : (
            <Menu.Item
              as={NavLink}
              to="/login"
              name="Login"
              active={pathname === "/login"}
            />
          )}
        </Menu>
      );
    };
    
    export default withRouter(NavBar);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // import React, { Fragment } from "react";
  // import { NavLink, withRouter } from "react-router-dom";
  // import { Menu } from "semantic-ui-react";
  
  // const NavBar = ({ updateUser, logged_in, location: { pathname } }) => {
  //   let logout = () => {
  //     localStorage.clear()
  //     updateUser(null)
  //   }
  
  //   return (
  //     <Menu pointing secondary>
  //       {logged_in ? (
  //         <Fragment>
  //           <Menu.Item
  //             as={NavLink}
  //             to="/profile"
  //             name="profile"
  //             active={pathname === "/profile"}
  //           />
  //           <Menu.Menu position="right">
  //             <Menu.Item to="/logout" name="Logout" onClick={logout} />
  //           </Menu.Menu>
  //         </Fragment>
  //       ) : (
  //         <Menu.Item
  //           as={NavLink}
  //           to="/login"
  //           name="Login"
  //           active={pathname === "/login"}
  //         />
  //       )}
  //     </Menu>
  //   );
  // };
  
  // export default withRouter(NavBar);
  
















// import React, { Component } from 'react';
// import {Nav,Navbar,FormControl,Form,Button} from 'react-bootstrap';






// class NavBar extends Component {
//     render() {

//         return(
//             <div>
                
            
                
//             <>
            
//             <br />
//             <Navbar bg="primary" variant="dark">
//               <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//               <Nav className="mr-auto">
//                 <Nav.Link href="#home">Home</Nav.Link>
//                 <Nav.Link href="#features">Features</Nav.Link>
//                 <Nav.Link href="#pricing">Pricing</Nav.Link>
//               </Nav>
//               <Form inline>
//                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                 <Button variant="outline-light">Search</Button>
//               </Form>
//             </Navbar>
          
//             <br />
            
//           </>
                
                
               
                
                
//             </div>
//         )

//     }


// }

// export default NavBar




// import React, { Component } from 'react';
// //import React, { Fragment } from "react";
//  import { NavLink, withRouter } from "react-router-dom";

// import { Menu } from "semantic-ui-react";

// const Nav = ({logged_in, getCurrentUser, location: { pathname } }) => {


//   let logout = () => {
//     localStorage.clear()
//     getCurrentUser(null)
//   };

//   return (
//     <Menu pointing secondary>
//       {logged_in ? (
//         <div></div>
//           <Menu.Item
//             as={NavLink}
//             to="/managers"
//             name="managers"
//             active={pathname === "/managers"}
//           />
//           <Menu.Menu position="right">
//             <Menu.Item to="/logout" name="Logout" onClick={logout} />
//           </Menu.Menu>
//           </div>
//       ) : (
//         <Menu.Item
//           as={NavLink}
//           to="/login"
//           name="Login"
//           active={pathname === "/login"}
//         />
//       )}
//     </Menu>
//   );
// };

// export default withRouter(NavBar);











//  









          // import React, { Fragment } from "react";
          // import { NavLink, withRouter } from "react-router-dom";
          // import { Menu } from "semantic-ui-react";
          
          // const Nav = ({logged_in, getCurrentUser, logOut, location: { pathname } }) => {
          
          //   let logout = () => {
          //     localStorage.clear()
          //     getCurrentUser(null)
          //   };
          
          //   return (
          //     <Menu pointing secondary>
          //       {logged_in ? (
          //         <Fragment>
          //           <Menu.Item
          //             as={NavLink}
          //             to="/manager/:id"
          //             name="manager's profile"
          //             active={pathname === "/manager/:id"}
          //           />
          //           <Menu.Item
          //             as={NavLink}
          //             to="/manager/:id"
          //             name="/manager/:id"
          //             active={pathname === "/manager/:id"}
          //           />
          //           <Menu.Menu position="right">
          //             <Menu.Item to="/logout" name="Logout" onClick={() => {
          //               logOut()
          //               logout()}
          //               } />
          //           </Menu.Menu>
          //         </Fragment>
          //       ) : (
          //         <Menu.Item
          //           as={NavLink}
          //           to="/login"
          //           name="Login"
          //           active={pathname === "/login"}
          //         />
          //       )}
          //     </Menu>
          //   );
          // };
          
          // export default withRouter(Nav)
