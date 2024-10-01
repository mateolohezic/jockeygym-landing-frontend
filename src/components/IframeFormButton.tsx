'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useState } from "react";
import { IoCloseOutline } from 'react-icons/io5';
import { ClassNameValue } from 'tailwind-merge';

interface Props{
    label: string;
    iframeSrc: string;
    className?: ClassNameValue;
}

export const IframeFormButton = ({label, iframeSrc, className}:Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <Fragment>
            <button
                onClick={ () => { setShowModal(true) }}
                type="button"
                aria-label={label}
                className={`${className} hover:opacity-90 transition-all duration-150 ease-in-out`}
            >
                {label}
            </button>
            <AnimatePresence>
                {
                    showModal &&
                    <motion.div
                        layoutId='modalForm'
                        className="w-full h-dvh px-4 lg:px-0 fixed top-0 left-0 z-[9999999999] flex justify-center items-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0, y: 1080 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-dvh bg-[rgba(0,0,0,0.75)] absolute top-0 left-0 z-10"
                            onClick={ () => { setShowModal(false) }}
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0, y: 1080 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0, transition: { delay: 0 } }}
                            transition={{
                                opacity: { delay: 0.5 },
                                scale: { delay: 0.5 },
                            }}
                            className="w-full max-w-xl h-[75svh] rounded bg-white relative z-[9999999]"
                        >
                            <button onClick={ () => { setShowModal(false) }} type={"button"} aria-label={'Cerrar'} className="size-8 flex justify-center items-center absolute -top-10 right-0 hover:opacity-75 transition-all duration-200 ease-in-out">
                                <span className="sr-only">Cerrar</span>
                                <IoCloseOutline className="stroke-white size-8"/>
                            </button>
                            <div className="w-full h-full rounded overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src={iframeSrc}
                                    frameBorder="0"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </Fragment>
    )
}
