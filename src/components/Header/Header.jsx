import React, {useState} from "react";
import style from "./style.module.css";

import logo from "../../assets/img/logo/logo.svg";
import {Link} from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import {IoIosMenu} from "react-icons/io";
import {IoClose} from "react-icons/io5";


export default function Header() {

    const [isOpen,setOpen] = useState(false);

    const Navbar = [
        {
            title : 'Home',
            to : '#'
        },
        {
            title : 'Featured',
            to : '#'
        },
        {
            title : 'Reecent',
            to : '#'
        },
    ]

    const LinkHandler = () => {
        window.scrollTo(0,0);
        setOpen(false);
    }

    return<>
        <div className={style.container}>
            <div className={'w-full h-full flex items-center justify-between max-[1390px]:px-5 px-16  relative'}>

                {/*Left Navbar */}
                <div className={'w-auto h-auto flex items-center gap-3'}>

                    {/*Logo Place*/}
                    <Link onClick={()=>window.scrollTo(0,0)} to={'/'} className={'flex items-center max-[1200px]:gap-2 gap-5 '}>

                        <div className={'w-auto max-[1200px]:h-5 h-8 flex flex-col items-center justify-center'}>

                            <img src={logo} className={'w-fit h-full object-contain'} alt={"logo"}/>

                        </div>

                        <span className={'max-[1200px]:text-2xl text-4xl font-bold text-black'}>BabyNames</span>

                    </Link>

                    {/*Navbar Links*/}
                    <div className={'flex items-center gap-3 ml-3 max-[950px]:hidden'}>

                        {Navbar.map((value, index)=> <Link to={value.to} className={' max-[1200px]:text-xl text-2xl font-bold text-black '}>{value.title}</Link>)}


                    </div>

                </div>

                {/*Right Navbar*/}
                <div className={'w-auto h-auto flex items-center gap-3 max-[950px]:hidden'}>

                    <div className={'relative w-auto h-auto'}>

                        <div className={'absolute top-3 left-2 text-3xl text-black/60 '}>
                            <CiSearch />
                        </div>
                        <input className={'w-72 h-12 bg-[#f2f2f2] rounded-2xl outline-0 pl-12'}/>

                    </div>

                    {/*Log in / Sign Up*/}
                    <div className={'flex items-center gap-3 '}>

                        <div className={'w-auto h-auto max-[1200px]:py-2 max-[1200px]:px-3 py-3 px-4 flex items-center justify-center rounded-xl bg-[#1C6EF2] max-[1200px]:text-lg text-xl font-semibold text-white'}>Log in</div>

                        <div className={'w-auto h-auto max-[1200px]:py-2 max-[1200px]:px-3 py-3 px-4 flex items-center justify-center rounded-xl bg-[#E8EDF5] max-[1200px]:text-lg text-xl font-semibold text-black'}>Sign Up</div>

                    </div>



                </div>

                <div onClick={()=>setOpen(!isOpen)} className={'text-3xl p-2 bg-[#f2f2f2] rounded-lg min-[950px]:hidden'}>
                    <IoIosMenu />
                </div>

                {/*Mobile version Menu*/}
                <div className={` w-full h-screen bg-[#ffffff] absolute left-0 ${isOpen? ` top-0` : ` top-[-100vh]`} duration-500 shadow-lg min-[950px]:hidden `}>

                    <div className={'w-full h-28 flex items-center justify-between px-3 border-b border-[#f2f2f2] '}>

                        {/*Logo Place*/}
                        <Link onClick={LinkHandler} to={'#'} className={'flex items-center max-[1200px]:gap-2 gap-5 '}>

                            <div className={'w-auto max-[1200px]:h-5 h-8 flex flex-col items-center justify-center'}>

                                <img src={logo} className={'w-fit h-full object-contain'} alt={"logo"}/>

                            </div>

                            <span className={'max-[1200px]:text-2xl text-4xl font-bold text-black'}>BabyNames</span>

                        </Link>

                        {/*Menu Handler*/}
                        <div onClick={()=>setOpen(!isOpen)} className={'text-3xl p-2 bg-[#f2f2f2] rounded-lg '}>
                            <IoClose />
                        </div>

                    </div>

                    {/*Search bar*/}
                    <div className={'relative w-auto h-auto px-5'}>

                        <div className={'absolute top-3 left-7 text-3xl text-black/60 '}>
                            <CiSearch />
                        </div>
                        <input className={'w-full h-12 bg-[#f2f2f2] rounded-2xl outline-0 pl-12'} placeholder={'Search'}/>

                    </div>

                    {/*Navbar Links*/}
                    <div className={'w-full flex flex-col items-center gap-3 mt-3 px-5 text-center '}>

                        {Navbar.map((value, index)=> <Link key={index} onClick={LinkHandler} to={value.to} className={'w-full border-b border-[#f2f2f2] max-[1200px]:text-xl text-2xl font-bold text-black py-2 '}>{value.title}</Link>)}


                    </div>

                    {/*Log in / Sign Up*/}
                    <div className={'w-full justify-center mt-3 flex items-center gap-3 '}>

                        <div className={'w-auto h-auto max-[1200px]:py-2 max-[1200px]:px-3 py-3 px-4 flex items-center justify-center rounded-xl bg-[#1C6EF2] max-[1200px]:text-lg text-xl font-semibold text-white'}>Log in</div>

                        <div className={'w-auto h-auto max-[1200px]:py-2 max-[1200px]:px-3 py-3 px-4 flex items-center justify-center rounded-xl bg-[#E8EDF5] max-[1200px]:text-lg text-xl font-semibold text-black'}>Sign Up</div>

                    </div>

                </div>

            </div>



        </div>
    </>
}