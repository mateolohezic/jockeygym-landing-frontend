import Link from 'next/link'
import { Logo } from '../ui/Logo'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
            title: 'Hot Sale',
            href: '/hot-sale'
        },
        // {
        //     title: 'Personal Training',
        //     href: '/personal-training'
        // },
    ]
    
    const dropdownLinks = [
        {
            title: 'Centro',
            href: '/sedes/centro'
        },
        {
            title: 'Perón',
            href: '/sedes/peron'
        },
        {
            title: 'El Solar',
            href: '/sedes/el-solar'
        },
        {
            title: 'Catalinas',
            href: '/sedes/catalinas'
        },
        {
            title: 'Distrito',
            href: '/sedes/distrito'
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
                <ul className='flex justify-end items-center gap-4 lg:gap-8'>
                    {
                        links.map( link => (
                            <li key={link.href}>
                                <Link href={link.href} className='text-white text-lg lg:text-3xl'>
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                    <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='text-white text-lg lg:text-3xl'>SEDES</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {
                                dropdownLinks.map( link => (
                                    <DropdownMenuItem key={link.href} className='m-0 p-0'>
                                        <Link href={link.href} className='text-sm lg:text-lg size-full p-2'>
                                            {link.title}
                                        </Link>
                                    </DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </li>
                </ul>
            </div>
        </nav>
    )
}