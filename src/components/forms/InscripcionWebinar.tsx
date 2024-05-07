'use client'

import { useForm, type SubmitHandler } from "react-hook-form"
import axios from 'axios';

type Inputs = {
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
}

export const InscripcionWebinar = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        console.log(data);
    }
    
    // const url = 'https://jockey-gym.bitrix24.es/rest/24857/cghnh26jknr3o7nl';
    const hola = async () => {
        // const response = await fetch(`https://jockey-gym.bitrix24.es/rest/24857/i3e126kjvxzjarjj/crm.contact.add.json?FIELDS[NAME]=Pruebaaaa&FIELDS[LAST_NAME]=Pruebita&FIELDS[EMAIL][0][VALUE]=prueba@example.com&FIELDS[PHONE][0][VALUE]=555888`, {
        // const response = await fetch(`https://jockey-gym.bitrix24.es/bitrix/services/main/ajax.php?action=crm.site.form.fill`, {
        // const response = await fetch(`https://jockey-gym.bitrix24.es/rest/24857/i3e126kjvxzjarjj/crm.site.form.fill`, {
        // const response = await fetch(`https://jockey-gym.bitrix24.es/rest/24857/i3e126kjvxzjarjj/crm.site.form.fill.json`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
            //   'Authorization': `Bearer-cghnh26jknr3o7nl`,
            // },
            // body: JSON.stringify({
            //     id: 101,
            //     sec: 'e76y6z',
                // properties: {},
                // consents: {},
                // recaptcha: undefined,
                // timeZoneOffset: 180,
                // lang: 'la',
                // entities: [],
                // security_sign: undefined,
                // trace: {
                //     url:"https://b24-vu4prj.bitrix24.site/crm_form3/",
                //     ref:"https://jockey-gym.bitrix24.es/",
                //     device:{
                //         isMobile:true
                //     },
                //     tags:{
                //         ts:1715007205,
                //         list:{},
                //         gclid:null
                //     },
                //     client:{},
                //     pages:{
                //         list:[
                //             ["https://b24-vu4prj.bitrix24.site/crm_form3/",
                //             1715007256,
                //             "Formulario de Landing"]
                //         ]
                //     },
                //     gid:"j5rgt15ql3ucmj964lfwkdcvzpkx49vq",
                //     previous:{
                //         list:[]
                //     }
                // },
                // values: {
                //     CONTACT_NAME:["Pruebaasdasdasd"],
                //     CONTACT_LAST_NAME:["asdfasfmñfads fasfkaslfasd "],
                //     CONTACT_PHONE:["+381-56-901-69"],
                //     CONTACT_EMAIL:["pruaeba@gmail.com"],
                    // DEAL_UF_CRM_1595281876:["54"],
                    // DEAL_UF_CRM_1653974741:["917"],
                    // CONTACT_UF_CRM_1621525987:[],
                    // CONTACT_UF_CRM_1621526114:[],
                    // CONTACT_UF_CRM_1621526183:[]
        //         }
        //     })
        // });

        const url = 'https://jockey-gym.bitrix24.es/rest/24857/i3e126kjvxzjarjj/crm.site.form.fill.json';

        const data = {
            action: 'crm.site.form.fill',
            id: 4,
            sec: 'y4ka2k',
            values: {
                CONTACT_NAME: ['Pruebita'],
                CONTACT_LAST_NAME: ['pruebita'],
                CONTACT_PHONE: ['+543815690169'],
                CONTACT_EMAIL: ['prueba@gmail.com']
            }
        };

        const response = await axios.post(url, data)

        console.log(response)
    }

    // hola()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col font-gotham">
            <span className="text-neutral-500 text-base text-center mb-4">¡Completa este formulario para reservar tu lugar!</span>
            <div className="w-full flex justify-center items-center gap-8 flex-wrap lg:flex-nowrap">
                <div className='w-full flex flex-col justify-start items-start gap-1'>
                    <label htmlFor="name" className="text-base lg:text-lg">Nombre<span className="text-xs text-invalid relative left-px -top-1">*</span></label>
                    <input
                        type='text'
                        maxLength={100}
                        className="bg-neutral-300 w-full h-9 rounded px-2 focus-visible:outline-none"
                        {...register("name",{
                            required: true,
                            maxLength: 100
                        })}
                        />
                    {errors.name && <p className='text-base text-invalid'>Campo requerido.</p>}
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-1'>
                    <label htmlFor="surname" className="text-base lg:text-lg">Apellido<span className="text-xs text-invalid relative left-px -top-1">*</span></label>
                    <input
                        type='text'
                        maxLength={100}
                        className="bg-neutral-300 w-full h-9 rounded px-2 focus-visible:outline-none"
                        {...register("surname",{
                            required: true,
                            maxLength: 100
                        })}
                        />
                    {errors.surname && <p className='text-base text-invalid'>Campo requerido.</p>}
                </div>
            </div>
            <div className="mt-6 w-full flex justify-center items-center gap-8 flex-wrap lg:flex-nowrap">
                <div className='w-full flex flex-col justify-start items-start gap-1'>
                    <label htmlFor="email" className="text-base lg:text-lg">Correo electrónico<span className="text-xs text-invalid relative left-px -top-1">*</span></label>
                    <input
                        type='text'
                        maxLength={100}
                        className="bg-neutral-300 w-full h-9 rounded px-2 focus-visible:outline-none"
                        {...register("email",{
                            required: true,
                            maxLength: 100
                        })}
                        />
                    {errors.email && <p className='text-base text-invalid'>Campo requerido.</p>}
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-1'>
                    <label htmlFor="phoneNumber" className="text-base lg:text-lg">Teléfono<span className="text-xs text-invalid relative left-px -top-1">*</span></label>
                    <input
                        type='text'
                        maxLength={100}
                        className="bg-neutral-300 w-full h-9 rounded px-2 focus-visible:outline-none"
                        {...register("phoneNumber",{
                            required: true,
                            maxLength: 100
                        })}
                        />
                    {errors.phoneNumber && <p className='text-base text-invalid'>Campo requerido.</p>}
                </div>
            </div>
            <div className="mt-8 w-full text-start">
                <button type="submit" className="bg-jockey w-full py-2 px-8 rounded-lg text-white">
                    Reservar mi lugar
                </button>
            </div>
        </form>
    )
}