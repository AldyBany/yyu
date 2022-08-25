import Link from 'next/link'
import React,{useState} from 'react'

const Navbar = () => {

  const[cliked,setClicked] = useState(false)
  
  return (
    <nav className={styles.wrapper}>
      <div>
        <span>Royal Services</span>
      </div>
      <ul className={`${styles.navItems} ${cliked?'left-[-400px] opacity-0':'left-[0px] opacity-100'}`}>
        {navItems.map((link)=>(
          <li key={link.id}>
            <a>{link.title}</a>
          </li>
        ))}
      </ul>
      <div onClick={()=>setClicked(!cliked)} className="md:hidden">close</div>
       
    </nav>
    
  )
}


export default Navbar

const navItems =[
    {id:1,title:'Acceuil'},
    {id:2,title:'Nos Services', subtitle:true, sub:'TopGear'},
    {id:3,title:'Contacts'},
]
const styles={
    wrapper:' bg-red-300 p-5 flex items-center justify-between relative',
    link:'px-8 py-4',
    navItems:'md:flex md:items-center md:static absolute w-full left-0 md:w-auto md:py-0 py-0 md:pl-0 pl-7 transition-all opacity-100 ease-in duration-500'
}