export async function getBlogs(){

    const respuesta = await fetch(`${process.env.API_URL}/blogs?populate=imagen`)
    return await respuesta.json()

}

export async function getBlog(url){
    const respuesta = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}