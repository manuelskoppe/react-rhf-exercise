import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a Mi Blog</h1>
      <p>Esta es una aplicación para compartir tus pensamientos e ideas con el mundo. Aquí puedes:</p>
      <ul>
        <li>Leer posts de otros usuarios. <Link to="/posts">Ver Posts</Link></li>
        <li>Crear tus propios posts. <Link to="/create-post">Crear Post</Link></li>
      </ul>
      <p>Explora, comparte y conecta con otros a través de tus posts.</p>
    </div>
  );
}

export default Home;
