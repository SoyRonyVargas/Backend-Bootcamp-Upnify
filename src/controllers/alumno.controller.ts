// import { sequelize } from "../database"
// import Alumno from "../models/alumno"
// import { TypedRequest } from "../types"

// export const RemoveStudent : TypedRequest<any , any, any> = async ( req , res ) => {

//     try
//     {

//         const {id} = req.params
        
//         if( !id ) return res.status(400)

//         const userToDelete = await Alumno.findOne({
//             where: {
//                 UNAL_ID: id
//             },
//         });

//         if( !userToDelete ) return res.status(400).json({
//             ok: false,
//             msg: "No puedes eliminar este estudiante",
//             data: null
//         })

//         await sequelize.query("SET FOREIGN_KEY_CHECKS=0;");
        
//         await userToDelete?.destroy()
        
//         await sequelize.query("SET FOREIGN_KEY_CHECKS=1;");

//         return res.status(200).json({
//             ok: true,
//             data: true,
//             msg: "Eliminado correctamente"
//         })

//     }
//     catch(err)
//     {
//         console.log(err);
        
//         return res.status(400).json()
//     }

// }

// type CreateAlumno = {
//     UNAL_UNCR_ID: number
//     apellido: string
//     nombre: string
//     edad: number
//     email: string
//     UNAL_ESTADO: number
// }

// export const CreateStudent : TypedRequest<any , CreateAlumno, any> = async ( req , res ) => {

//     try
//     {

//         const { email , edad , apellido , nombre , UNAL_UNCR_ID } = req.body
        
//         const newStudent = await Alumno.create({
//             UNAL_EMAIL: email,
//             UNAL_APELLIDO: apellido,
//             UNAL_NOMBRE: nombre,
//             UNAL_EDAD: edad,
//             UNAL_ESTADO: 1,
//             UNAL_UNCR_ID
//         });

//         console.log(req.body);
        
//         return res.status(200).json({
//             ok: true,
//             data: newStudent,
//             msg: "Alumno creado correctamente"
//         })

//     }
//     catch(err)
//     {
//         console.log(err);

//         console.log(req.body);
        
        
//         return res.status(400).json()
//     }

// }

// type EditarAlumno = CreateAlumno & {
//     UNAL_ID: number
// }

// export const EditStudent : TypedRequest<any , EditarAlumno , any> = async ( req , res ) => {

//     try
//     {

//         const { UNAL_ID, email , edad , apellido , nombre , UNAL_UNCR_ID } = req.body
        
//         const studentToEdit = await Alumno.findOne({
//             where: {
//                 UNAL_ID
//             }
//         })

//         studentToEdit?.set({
//             UNAL_EMAIL: email,
//             UNAL_APELLIDO: apellido,
//             UNAL_NOMBRE: nombre,
//             UNAL_EDAD: edad,
//             UNAL_ESTADO: 1,
//             UNAL_UNCR_ID
//         })

//         await studentToEdit?.save()

//         return res.status(200).json({
//             ok: true,
//             data: studentToEdit,
//             msg: "Alumno actualizado correctamente"
//         })

//     }
//     catch(err)
//     {
//         console.log(err);

//         console.log(req.body);
        
        
//         return res.status(400).json()
//     }

// }
