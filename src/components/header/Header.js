import './Header.css';

const Header = () => {
  return (
   <nav className="navbar">
     <a className="brand" href="https://ankitanaik471.github.io/react-basics/">AN</a>

     <div>
        <ul className='m-0'>
            <li><a href="https://ankitanaik471.github.io/react-basics/">About</a></li>
            <li><a href="https://ankitanaik471.github.io/react-basics/">Skills</a></li>
            <li><a href="https://ankitanaik471.github.io/react-basics/" className='text-warning'>Download CV <i class="fa-solid fa-file-arrow-down"></i></a></li>
        </ul>
     </div>
   </nav>
  )
}

export default Header;