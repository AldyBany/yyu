import React, { useState } from "react";
import { motion, AnimatePresence,AnimateSharedLayout  } from "framer-motion";
import Content from  './frame'

const pro = () => {
    const [isOpen, setIsOpen] = useState(false);
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


// Utility function to set 'isOpen' '!'(not) of its last value
const toggleOpen = () => setIsOpen(!isOpen);
  return (
	<AnimateSharedLayout>
	{/* Mapping through itemList array to render layouts*/}
	{itemsList.map((item) => (
	  <Item key={item.index} content={item.content} />
	))}
  </AnimateSharedLayout>
  )
}

export default pro