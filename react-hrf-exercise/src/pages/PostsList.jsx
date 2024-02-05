import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Función para cargar los datos de los posts desde json-server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts');
        if (!response.ok) {
          throw new Error('No se pudo cargar los posts');
        }
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error("Error al cargar los posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Listado de Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Autor: {post.author}</p>
            {/* Aquí usamos `Link` para crear un enlace a la página de detalle de cada post */}
            <Link to={`/post/${post.id}`}>Ver Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
