import { Link } from "react-router-dom"


const Navbar = ()=>{
    return(
        <header>
            <div className="container">
                <Link to = '/'>
                    <h1>Oil Mart</h1>
                </Link>
                <nav>
                <div className="nav-element">
                <Link to = '/login'>
                    <h1>Login</h1>
                </Link>
                </div>
                <div className="nav-element">
                <Link to = '/signup'>
                    <h1>Signup</h1>
                </Link>
                </div>
                <div className="nav-element">
                <Link to = '/users'>
                    <h1>Oils</h1>
                </Link>
                </div>
                <div className="nav-element">
                <Link to = '/cashierdash'>
                    <h1>Cashier</h1>
                </Link>
                </div>
                <div className="nav-element">
                <Link to = '/counter'>
                    <h1>Counter</h1>
                </Link>
                </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar