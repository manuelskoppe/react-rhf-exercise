import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/posts">Listado de Posts</Link> | 
      <Link to="/create-post">Crear Post</Link>
    </nav>
  );
}

export default Navbar;
