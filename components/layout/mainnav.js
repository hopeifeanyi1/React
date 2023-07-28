import Link from "next/link";

function Mainnav(){
    return(
        <div>
            <h1>Main Navigation</h1>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About Us</Link></li>
                <li><Link href='/users'>Users index</Link></li>
                <li><Link href='/admin/adminDashboard'>adminDashboard</Link></li>
            
            </ul>
        </div>
    )
}

export default Mainnav