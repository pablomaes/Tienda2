
export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(console.log ("cargando datos"))  
        }, 2000)
    })

}