//Parte 1: Solicitudes de consulta (GET)

const lista = async () => {              // Función asíncrona para traer todas las publicaciones
  const data = await fetch('http://localhost:3000/posts', { // Hacemos petición GET al endpoint /posts
    method: 'GET',
    headers: { 'Content-type': 'application/json' }  // Indicamos que esperamos JSON como respuesta
  })
  const jsonData = await data.json()     // Convertimos la respuesta a formato JSON
  console.log(jsonData)                  // Mostramos todas las publicaciones en consola
}
//lista()


const usuarioEspecifico = async(id) => {// Función asíncrona para traer un usuario específico por ID
    const data2 = await fetch(`http://localhost:3000/users/${id}`) ; // Hacemos petición GET al endpoint /users/{id}
    const jsonData = await data2.json()// Convertimos la respuesta a formato JSON
    console.log(jsonData)// Mostramos el usuario específico en consola
  }

//usuarioEspecifico(5)

const todasPublicaciones = async(id) => {// Función asíncrona para traer una publicación específica por ID
    const data3 = await fetch(`http://localhost:3000/posts/${id}`) ; // Hacemos petición GET al endpoint /posts/{id}
    const jsonData = await data3.json()// Convertimos la respuesta a formato JSON
    console.log(jsonData)// Mostramos la publicación específica en consola
}
//todasPublicaciones(5)

//*********************************************************************** */
//Parte 2: Creación de información (POST)

const nuevaPeticion = async () => {// Función asíncrona para crear una nueva publicación
  const data4 = await fetch(`http://localhost:3000/posts/`, {// Hacemos petición POST al endpoint /posts
    method: 'POST',// Indicamos que es una petición POST
    headers: {// Especificamos que el contenido es JSON
      'Content-type': 'application/json'
    },
    body: JSON.stringify({// Convertimos el objeto a una cadena JSON
      title: "uso de  POST",// Título de la nueva publicación
      body: "Creación de recursos mediante POST.",// Cuerpo de la nueva publicación
      userId: 5// ID del usuario que crea la publicación
    })
  })
  const jsonData = await data4.json()// Convertimos la respuesta a formato JSON
  console.log(jsonData)// Mostramos la nueva publicación creada en consola
}

//nuevaPeticion(5)

const nuevoComentario = async () => {// Función asíncrona para crear un nuevo comentario
  const data5 = await fetch(`http://localhost:3000/comments/`, {// Hacemos petición POST al endpoint /comments
    method: 'POST',// Indicamos que es una petición POST
    headers: {// Especificamos que el contenido es JSON
      'Content-type': 'application/json'
    },
    body: JSON.stringify({// Convertimos el objeto a una cadena JSON
      postId:5,// ID de la publicación a la que pertenece el comentario
      name: "Comentario con posts",// Nombre del autor del comentario
      body: "Comentario nuevo con posts."// Cuerpo del comentario
      
    })
  })
  const jsonData = await data5.json() // Convertimos la respuesta a formato JSON
  console.log(jsonData) // Mostramos el nuevo comentario creado en consola
}

//nuevoComentario()

//**************************************************************** */
//Parte 3: Actualización de información (PUT y PATCH)

const actualizarPublicacion = async (id) => { // Función asíncrona para actualizar una publicación existente
  const data6 = await fetch(`http://localhost:3000/posts/${id}`, {  // Hacemos petición PUT al endpoint /posts/{id}
     method: 'PUT', // Indicamos que es una petición PUT
    headers: {  // Especificamos que el contenido es JSON
      'Content-type': 'application/json'
    },
    body: JSON.stringify({  // Convertimos el objeto a una cadena JSON
      "userId": 5, // ID del usuario que actualiza la publicación
      "title": "Actualización Post",// Nuevo título de la publicación
      "body": "Actualizacion utilizando el metodos PUT."// Nuevo cuerpo de la publicación
    })
  })

  const jsonData = await data6.json()// Convertimos la respuesta a formato JSON
  console.log(jsonData)// Mostramos la publicación actualizada en consola
}
//actualizarPublicacion(5)

const modificarCampo = async (id) => {// Función asíncrona para modificar un campo específico de una publicación
  const data7 = await fetch(`http://localhost:3000/posts/${id}`, {// Hacemos petición PATCH al endpoint /posts/{id}
    method: 'PATCH',// Indicamos que es una petición PATCH
    headers: {// Especificamos que el contenido es JSON
      'Content-type': 'application/json'
    },
    body: JSON.stringify({// Convertimos el objeto a una cadena JSON
      "title": "Actualizar un campo específico...",// Nuevo título de la publicación
    })
  })

  const jsonData = await data7.json()// Convertimos la respuesta a formato JSON
  console.log(jsonData)   // Mostramos la publicación modificada en consola
}
//modificarCampo(9)

//****************************************** */
//Parte 4: Eliminación de información (DELETE)

const eliminarPublicacion = async (id) => {// Función asíncrona para eliminar una publicación existente
  const data8 = await fetch(`http://localhost:3000/posts/${id}`, {// Hacemos petición DELETE al endpoint /posts/{id}
    method: 'DELETE',// Indicamos que es una petición DELETE
    headers: {// Especificamos que el contenido es JSON
      'Content-type': 'application/json'
    },
    body: JSON.stringify({// Convertimos el objeto a una cadena JSON
      "userId": 3,// ID del usuario que elimina la publicación
      "title": "Arquitectura cliente-servidor",// Título de la publicación eliminada
      "body": "Modelo de comunicación en aplicaciones web."// Cuerpo de la publicación eliminada
    })
  })

  const jsonData = await data8.json()// Convertimos la respuesta a formato JSON
  console.log(jsonData)// Mostramos la confirmación de eliminación en consola
}
//eliminarPublicacion(3)

//******************************************** */
//Parte 5: Análisis y verificación de respuestas

const repetirSolicutud = async (id) => {    // Función asíncrona para repetir una solicitud GET específica
  
  const data9 = await fetch(`http://localhost:3000/posts/${id}`, {// Hacemos petición GET al endpoint /posts/{id}
    method: 'GET',// Indicamos que es una petición GET
    headers: {// Especificamos que el contenido es JSON
    'Content-type': 'application/json' 
  }
  })
  const jsonData = await data9.json()// Convertimos la respuesta a formato JSON
  console.log(jsonData)// Mostramos la publicación específica en consola
}
//repetirSolicutud(3)


const solicitudGeneral = async () => {// Función asíncrona para realizar una solicitud GET general
  const data10 = await fetch(`http://localhost:3000/posts`, {// Hacemos petición GET al endpoint /posts
    method: 'GET',// Indicamos que es una petición GET
    headers: {// Especificamos que el contenido es JSON
      'Content-type': 'application/json'
    }
  })
  const jsonData = await data10.json()// Convertimos la respuesta a formato JSON
  console.log(jsonData)// Mostramos todas las publicaciones en consola
}

//solicitudGeneral()

//******************************************************************* */
//B. Actividades de transferencia del conocimiento.

//*********************************************************************** */
// 1: Usuarios activos y sus publicaciones

const usuarios = async () => {
  // 1. Consultamos todos los usuarios desde el endpoint /users
  const dataUsers = await fetch("http://localhost:3000/users", {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  const users = await dataUsers.json() // Convertimos la respuesta a JSON

  // 2. Consultamos todas las publicaciones desde el endpoint /posts
  const dataPosts = await fetch("http://localhost:3000/posts", {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  const posts = await dataPosts.json() // Convertimos la respuesta a JSON

  const resultado = users.map(user => {
    // Recorre cada usuario en el arreglo "users"
  
    const publicaciones = posts.filter(post => Number(post.userId) === Number(user.id))
    // Busca todas las publicaciones cuyo userId coincide con el id del usuario
    // Convertimos ambos a número 
  
    return {
      nombre: user.name,                  // Nombre del usuario
      publicaciones: publicaciones.length // Cantidad de publicaciones encontradas
    }
    // Devuelve un objeto con nombre y número de publicaciones
  })
  
  // Mostramos el resultado final en consola
  console.log(resultado)
}

//usuarios()


//*********************************************************************** */
//2: Publicaciones con y sin comentarios

const publicacionesConComentarios = async () => {
  // 1. Consultamos todas las publicaciones
  const dataPosts = await fetch("http://localhost:3000/posts", {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
  const posts = await dataPosts.json()

  // 2. Consultamos todos los comentarios
  const dataComments = await fetch("http://localhost:3000/comments", {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
  const comments = await dataComments.json()

  // 3. Relacionamos publicaciones con sus comentarios
  const resultado = posts.map(post => {
    const relacionados = comments.filter(c => Number(c.postId) === Number(post.id))
    return {
      titulo: post.title,                       // título de la publicación
      numeroComentarios: relacionados.length,   // cantidad de comentarios
      estado: relacionados.length > 0 ? "Con comentarios" : "Sin comentarios"
    }//Si la publicacion tine comentarios nuestra con comentarios, si no tiene muestra sin comentarios
  })

  // 4. Mostramos resultado
  console.log(resultado)
}

//publicacionesConComentarios()

//*********************************************************************** */
//3: Búsqueda específica de información

const buscarPublicacion = async (id) => {
  // 1. Consultamos la publicación específica por ID
  const dataPost = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
  const post = await dataPost.json()

  // 2. Consultamos todos los comentarios
  const dataComments = await fetch("http://localhost:3000/comments", {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
  const comments = await dataComments.json()

  // 3. Filtramos comentarios relacionados con esa publicación
  const relacionados = comments.filter(c => Number(c.postId) === Number(post.id))

  // 4. Armamos resultado
  const resultado = {
    titulo: post.title,
    contenido: post.body,
    numeroComentarios: relacionados.length
  }

  console.log(resultado)
}

//buscarPublicacion(5) 

//*********************************************************************** */
//4: Eliminación lógica y validación

const eliminarsinComentarios = async (id) => {
  // 1. Consultamos todos los comentarios
  const dataComments = await fetch("http://localhost:3000/comments", {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
  const comments = await dataComments.json()

  // 2. Verificamos si la publicación tiene comentarios
  const relacionados = comments.filter(c => Number(c.postId) === Number(id))

  if (relacionados.length > 0) {
    console.log("No se puede eliminar la publicación porque tiene comentarios")
  } else {
    // 3. Eliminamos la publicación si no tiene comentarios
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    })
    console.log("Publicación eliminada correctamente")
  }
}

//eliminarsinComentarios(10)
