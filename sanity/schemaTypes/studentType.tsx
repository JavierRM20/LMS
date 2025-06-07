import Image from 'next/image';
import { defineField, defineType } from 'sanity';

// se define el tipo de documento "student"
export const studentType = defineType({
    name: 'student',
    title: 'Student',
    type: 'document',
    fields: [
        //Campo para el nombre del estudiante
        defineField({
            name: 'FirstName',
            title: 'Nombre',
            type: 'string',
        }),
        //Campo para el apellido del estudiante
        defineField({
            name: 'LastName',
            title: 'Apellido',
            type: 'string',
        }),
        //Campo para el correo electrónico del estudiante
        defineField({
            name: 'Email',
            title: 'Correo Electrónico',
            type: 'string',
            validation: (Rule) => Rule.required().error('Se requiere un correo electrónico válido.'),
        }),
        //ID obligatorio de usuario proporcionado por Clerk
        defineField({
            name: 'clerkId',
            title: 'ID de clerk',
            type: 'string',
            validation: (Rule) => Rule.required().error('El ID de clerk es obligatorio.'),
        }),
        //Campo para la imagen del estudiante
        defineField({
            name: 'imageUrl',
            title: 'Foto de perfil',
            type: 'url',
        }),
    ],
    ///Config del preview  para mostrar en el documento de studio
    preview: {
        select: {
            firsteName: 'FirstName',
            lastName: 'LastName',
            imageUrl: 'imageUrl',
        },
        //Funcion para personalizar la forma en que se muestra el documento
        prepare({ firsteName, lastName, imageUrl }) {
            //Funcion para capitalizar la primera letra y las otras en minúscula
            const capitalize = (word) => {
                if (!word) return '';
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

            };
            return {
                title: `${capitalize(firsteName)} ${capitalize(lastName)}`,
                //Se renderiza la imagen del estudiante
                media: (
                    <Image
                        src={imageUrl}
                        alt= {`${firsteName} ${lastName}`}
                        width={100}
                        height={100}
                        style={{ borderRadius: '50%' }}
                    />
                ),
            };
        }
    },
});
