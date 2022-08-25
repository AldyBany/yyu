import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Content = ({ content }) => {

const url = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/" +
	"20200817185016/gfg_complete_logo_2x-min.png"

return (
	<motion.div
	layout
	initial={{ opacity: 0 }}
	animate={{ opacity: 1 }}
	exit={{ opacity: 0 }}
	>
	<div className="bg-blue text-white w-80">
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet fugit natus beatae aliquam nobis! Ad fugiat nihil vel est enim.</p>
	</div>
	<div className="row">{content}</div>
	</motion.div>
);
};

const Item = ({ content }) => {
// React useState hook is used to manage the state of 'isOpen'
// that in turn toggles shared layout, user clicks on
const [isOpen, setIsOpen] = useState(false);

// Utility function to set 'isOpen' '!'(not) of its last value
const toggleOpen = () => setIsOpen(!isOpen);

const url = "https://yt3.ggpht.com/ytc/AAUvwnjJqZG9PvGfC3GoV" +
	"27UlohMeBLxyUdhs9hUbc-Agw=s900-c-k-c0x00ffffff-no-rj"

return (
	<motion.li
	layout
	title="Click to reveal"
	onClick={toggleOpen}
	initial={{ borderRadius: [25] }}
	>
	<motion.div className="avatar cursor-pointer bg-blue text-white w-60 px-6 py-3 rounded-full" layout>
		{" "}
		<p className="text-white">Pourquoi choisir royal?</p>{" "}
	</motion.div>
	<br />
	<AnimatePresence>{isOpen && <Content content={content} />}
	</AnimatePresence>
	</motion.li>
);
};

export default Item;