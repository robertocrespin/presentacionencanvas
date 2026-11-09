// Manejo de interacción simple para las tarjetas de blog
function leerMas(postId) {
  const articulos = {
    post1: 'El software engloba desde sistemas operativos como Windows o Android hasta aplicaciones que usas a diario.',
    post2: 'Ada Lovelace escribió en el siglo XIX el primer algoritmo pensado para ser procesado por una máquina.',
    post3: 'La industria requiere roles variados como desarrolladores Frontend, Backend, UI/UX Designers y QA Testers.'
  };

  if (articulos[postId]) {
    alert(articulos[postId]);
  }
}