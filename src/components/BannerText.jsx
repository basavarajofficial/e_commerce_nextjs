
import React from 'react';
import { motion } from "framer-motion";
import Container from './Container';


function BannerText({ title }) {
  return (
    <div className="absolute left-0 top-0 w-full h-full hidden lg:inline-block z-20">
        <Container className='flex flex-col h-full justify-center gap-y-6 '>
                <motion.h2  initial={{ opacity: 0, y:20 }}
                            whileInView={{ opacity: 1, y:0 }}
                            transition={{ duration: 0.5 }}
                className="text-7xl font-bold text-slate-100">{title}</motion.h2>

                <motion.p
                initial={{ opacity: 0, y:40 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.7 }}
                className="text-lg font-medium text-slate-100"
                >
                Stock up on sportswear and limited edition collection on our <br />  Awsome mid-season sale.
                </motion.p>
                <motion.div 
                initial={{ opacity: 0, y:60 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 0.9 }}
                className="flex text-sm mt-4 gap-5 font-semibold text-slate-100 w-fit"
                >
                    <button className="btn hover:scale-105 duration-200 text-sm uppercase">Find out more</button>
                    <button className="btn hover:scale-105 duration-200 text-sm uppercase">Shop Now</button>
                </motion.div>

            </Container>
    </div>
  )
}

export default BannerText