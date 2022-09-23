import './Header.css';

const Header = () => {
  return (
   <nav className="navbar">
     <a className="brand" href="https://ankitanaik471.github.io/react-basics/">AN</a>

     <div>
        <ul>
            <li><a href="https://ankitanaik471.github.io/react-basics/">About</a></li>
            <li><a href="https://ankitanaik471.github.io/react-basics/">Skills</a></li>
        </ul>
     </div>
   </nav>
  )
}

export default Header;