import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";


/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function Accordion() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }} className="mb-2">
        {SkillsData.map(item => (
          <Item key={item.id}  title={item.title} description={item.answer}/>
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item({title,description}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 70 }} className="bg-blue rounded-full shadow-xl mb-4 border-l-8 border-orange px-6 py-3">
      <motion.div className="font-semibold text-white " layout>
        {title}
      </motion.div>
      <AnimatePresence>{isOpen && <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-white mt-4">{description}</div>
     
    </motion.div>}</AnimatePresence>
    </motion.li>
  );
}

function Content({description}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illo ipsa fugiat aliquam.</div>
     
    </motion.div>
  );
}

const SkillsData = [
    {id: 1, title:'POURQUOI ROYAL SERVICES?',answer:' 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 2, title:"COMMENT NOS CONTACTER",answer:'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 3, title:'WHY IS A REGULAR RECOMMENDABLE?',answer:' 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 4, title:'WHY REGULAR CAR SERVICING IS RECOMMENDED?',answer:' 4Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
  ]
