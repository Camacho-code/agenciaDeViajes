import { Testimonial } from "../models/Testimoniales.js";


const guardarTestimonio = async(req, res)=>{
    //validar
    const {nombre, correo, mensaje} = req.body; // .body = agregar al request todo lo que el usuario agrege al body de la pagina

    const errores = [];

    if(nombre.trim()===""){
        errores.push({mensaje : "El nombre esta vacio"});
    }
    if(correo.trim()===""){
        errores.push({mensaje : "El correo esta vacio"});
    }
    if(mensaje.trim()===""){
        errores.push({mensaje : "El mensaje esta vacio"});
    }

    if(errores.length > 0){

        //Mostrar testimoniales
        const testimoniales = await Testimonial.findAll();

        //mostrar vista con errores
        res.render('testimoniales',{
            pagina:"Testimonios",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else{
        //Almacenar en base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            //redirigir a testimoniales
            res.redirect("/testimoniales");
        } catch (error) {
            console.log(error);
        }

    }
}

export{
    guardarTestimonio
}