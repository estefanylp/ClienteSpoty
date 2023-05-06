export async function pedirTokenEnSpotify(){
    
    const URL="https://accounts.spotify.com/api/token"
    let datoUno="grant_type=client_credentials"
    let datoDos="client_id=5938fd7d0e5f4d889ba4db749d5780ad"
    let datoTres="client_secret=63d8eca3cf88416ca881b4f92588b05b"

    
    const PETICION={
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:`${datoUno}&${datoDos}&${datoTres}`
    }

    
    let respuesta=await fetch(URL,PETICION)
    let respuestTOKEN=await respuesta.json()

    let token=respuestTOKEN.token_type+" "+respuestTOKEN.access_token
    return(token)

}

