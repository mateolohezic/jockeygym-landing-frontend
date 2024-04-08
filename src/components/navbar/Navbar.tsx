import Image from 'next/image'
import logo from '../../assets/logo_jockey_gym.png'
import Link from 'next/link'
import { Logo } from '../ui/Logo'

export const Navbar = () => {

    const links = [
        {
            title: 'Inicio',
            href: '/'
        },
        {
            title: 'Precios',
            href: '/precios'
        },
        {
            title: 'Sedes',
            href: '/sedes/centro'
        },
        {
            title: 'Personal Training',
            href: '/personal-training'
        },
    ]

    return (
        <nav className="w-full flex justify-center items-center bg-transparent fixed top-0 left-0 z-50 hover:bg-[#00000050] transition-all duration-300 ease-in-out">
            <div className="w-full xl:max-w-7xl flex justify-between items-center py-8 px-4 xl:px-0">
                <div className='grow flex justify-start items-center'>
                    <Link href="/">
                        <Logo className='h-12' pathClassName='fill-white'/>
                    </Link>
                </div>
                <ul className='flex justify-end items-center gap-8'>
                    {
                        links.map( link => (
                            <li key={link.href}>
                                <Link href={link.href} className='text-white text-3xl'>
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}