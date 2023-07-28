import Footer from "./footer";
import Mainnav from "./mainnav";

const { Fragment } = require("react");

function Layout(props){
    return(
        <Fragment>
        <Mainnav/>
        <main>
        {props.children}
        </main>
            
        <Footer/>
        </Fragment>
    )
}
export default Layout