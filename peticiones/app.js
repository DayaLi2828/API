//Parte 1: Solicitudes de consulta (GET)

const lista = async () => {
  
  const data = await fetch('http://localhost:3000/posts', {
    method: 'GET',
    headers: {
    'Content-type': 'application/json' 
  }
  })
  const jsonData = await data.json()
  console.log(jsonData)
}
//lista()

const usuarioEspecifico = async(id) => {
    const data2 = await fetch(`http://localhost:3000/users/${id}`) ; 
    const jsonData = await data2.json()
    console.log(jsonData)
  }

//usuarioEspecifico(5)

const todasPublicaciones = async(id) => {
    const data3 = await fetch(`http://localhost:3000/posts/${id}`) ; 
    const jsonData = await data3.json()
    console.log(jsonData)
}
//todasPublicaciones(5)

//*********************************************************************** */
//Parte 2: Creación de información (POST)

const nuevaPeticion = async () => {
  const data4 = await fetch(`http://localhost:3000/posts/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      title: "uso de  POST",
      body: "Creación de recursos mediante POST.",
      userId: 5
    })
  })
  const jsonData = await data4.json()
  console.log(jsonData)
}

//nuevaPeticion(5)

const nuevoComentario = async () => {
  const data5 = await fetch(`http://localhost:3000/comments/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      postId:5,
      name: "Comentario con posts",
      body: "Comentario nuevo con posts."
      
    })
  })
  const jsonData = await data5.json()
  console.log(jsonData)
}

//nuevoComentario()

//**************************************************************** */
//Parte 3: Actualización de información (PUT y PATCH)

const actualizarPublicacion = async (id) => {
  const data6 = await fetch(`http://localhost:3000/posts/${id}`, {
     method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "userId": 5,
      "title": "Actualización Post",
      "body": "Actualizacion utilizando el metodos PUT."
    })
  })

  const jsonData = await data6.json()
  console.log(jsonData)
}
//actualizarPublicacion(5)

const modificarCampo = async (id) => {
  const data7 = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "title": "Actualizar un campo específico...",
    })
  })

  const jsonData = await data7.json()
  console.log(jsonData)
}
//modificarCampo(9)

//****************************************** */
//Parte 4: Eliminación de información (DELETE)

const eliminarPublicacion = async (id) => {
  const data8 = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "userId": 3,
      "title": "Arquitectura cliente-servidor",
      "body": "Modelo de comunicación en aplicaciones web."
    })
  })

  const jsonData = await data8.json()
  console.log(jsonData)
}
//eliminarPublicacion(3)

//******************************************** */
//Parte 5: Análisis y verificación de respuestas

const repetirSolicutud = async (id) => {
  
  const data = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'GET',
    headers: {
    'Content-type': 'application/json' 
  }
  })
  const jsonData = await data.json()
  console.log(jsonData)
}
//repetirSolicutud(3)

const solicitudGeneral = async(id) => {
  const data = await fetch(`http://localhost:3000/posts/${id}`)

  const jsonData = await data.json()
  console.log(jsonData)
}