import { Fragment } from "react";
import MainNavigation from "../layout/main-navigation"
function Layout(props) {
   return (
      <Fragment>
         <MainNavigation />
         <main>{props.children}</main>
      </Fragment>
    )
 }
 export default Layout;