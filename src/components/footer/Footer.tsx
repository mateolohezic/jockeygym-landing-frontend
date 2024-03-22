import { Logo } from "../ui/Logo"

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-between items-stretch">
        <div className="w-full py-12 bg-[#0F0F0F] flex justify-center items-start">
            <div className="w-full xl:max-w-7xl	 flex justify-between items-stretch">
                <div className="flex flex-col justify-start items-start">
                    <Logo className="w-36" pathClassName="fill-white" />
                </div>
                <div className="flex flex-col justify-end items-end">
                    <span className="font-gotham text-xs text-white">No pares de entrenar.</span>
                </div>
            </div>
        </div>
        <div className="bg-white py-4 flex justify-center items-center">
            <h6 className="w-full xl:max-w-7xl font-gotham text-xs text-center opacity-75">&#169; 2024 <b className="font-gotham-black opacity-75">JOCKEY GYM</b>. Todos los derechos reservados.</h6>
        </div>
    </footer>
  )
}
