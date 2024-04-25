'use client'

import { useForm, type SubmitHandler } from "react-hook-form"

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