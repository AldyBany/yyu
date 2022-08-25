import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion"
import Item from './Item'

const frame = () => {
  return (
    <div className="">
        <AnimateSharedLayout>
	{/* Mapping through itemList array to render layouts*/}
	{itemsList.map((item) => (
		<Item key={item.index} content={item.content} />
        
	))}
	</AnimateSharedLayout>
    </div>
    
  )
}

export default frame


const itemsList = [
    {
        index: 0,
        content: `Motion components are DOM primitives
    optimised for 60fps animation and gestures.`
    },
    {
        index: 1,
        content: `Motion can animate:
        Numbers: 0, 10 etc.
        Strings containing numbers: "0vh", "10px" etc.`
    },
    {
        index: 2,
        content: `Transform properties are accelerated by the GPU,
        and therefore animate smoothly. `
    }
    ];
    