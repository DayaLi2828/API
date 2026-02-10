const usuarios = async () => {
    const dataUser = await fetch(`http://localhost:3000/users`)
    return await dataUser.json();
}

const postsUsuarios = async (id) => {

    const dataPosts = await fetch(`http://localhost:3000/posts?userId=${id}`)
    return await dataPosts.json();
}

usuarios()
.then(async (users) =>{
    return await users.map(({id, name}) => {
        return postsUsuarios(id).then((post) =>{
            return respuesta ={
                nombre: name,
                post: [...post]
            }
        })
    }).then ((respuesta) =>{
        console.log(respuesta);
        
    })
})