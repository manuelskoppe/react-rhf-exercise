import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetail() {
  let { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Aquí deberías hacer la llamada a tu API para obtener los datos del post
    // usando el postId. Estoy simulando una llamada a la API con datos de ejemplo.
    const fetchPost = async () => {
      // Simular la carga de datos
      const result = await new Promise((resolve) =>
        setTimeout(() => resolve({
          id: postId,
          title: 'Título del Post',
          author: 'Autor del Post',
          email: 'email@ejemplo.com',
          body: 'Este es el cuerpo del post con todos los detalles interesantes.'
        }), 500)
      );
      setPost(result);
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Cargando...</div>; // O algún otro marcador de carga
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>Autor:</strong> {post.author}</p>
      <p><strong>Email:</strong> {post.email}</p>
      <p>{post.body}</p>
      {/* Enlace para volver al listado de posts */}
      <Link to="/posts">Volver al Listado de Posts</Link>
    </div>
  );
}

export default PostDetail;
