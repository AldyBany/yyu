import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import Item from "./Item";
import "./styles.css";

// This is an example of animating shared layouts
// using react and framer-motion library.
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

const App = () => {
return (
	// The framer-motion component to wrap Item component to animate it
	<AnimateSharedLayout>
	{/* Mapping through itemList array to render layouts*/}
	{itemsList.map((item) => (
		<Item key={item.index} content={item.content} />
	))}
	</AnimateSharedLayout>
);
};

export default App;


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
	<img
		src={url}
		alt="geeksforgeeks"
	/>
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
	<motion.div className="avatar" layout>
		{" "}
		<img
		src={url}
		alt="gfg"
		/>{" "}
	</motion.div>
	<br />
	<AnimatePresence>{isOpen && <Content content={content} />}
	</AnimatePresence>
	</motion.li>
);
};

export default Item;

body {
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    
    * {
    box-sizing: border-box;
    }
    
    ul,
    li {
    list-style: none;
    margin: 0;
    padding: 0;
    }
    
    ul {
    width: 300px;
    display: flex;
    flex-direction: column;
    background: #fcfcfc;
    padding: 20px;
    border-radius: 25px;
    }
    
    li {
    background-color: rgba(214, 214, 214, 0.5);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
    width: 300px;
    }
    
    li:last-child {
    margin-bottom: 0px;
    }
    
    .avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    }
    
    .avatar img {
    width: 40px;
    border-radius: 100%;
    }
    
    .row {
    margin-top: 12px;
    }
    
    img {
    width: 250px;
    height: 40px;
    }
    