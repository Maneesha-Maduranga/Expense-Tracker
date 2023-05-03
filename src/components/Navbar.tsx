import budget from "../assets/budget.png";

interface Props{
    navHeading:string
}



function Navbar({navHeading}:Props) {
  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container-fluid'>
        <div className='navbar-brand px-2'>
        <img src={budget} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
         {navHeading}
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
