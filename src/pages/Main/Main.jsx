import React, {useState} from "react";
import style from "./style.module.css";

import cover from "../../assets/img/cover/family.jpg";
import {IoIosFemale, IoIosMale} from "react-icons/io";
import {Link} from "react-router-dom";
import {CiFacebook} from "react-icons/ci";
import {PiInstagramLogo, PiTwitterLogoThin} from "react-icons/pi";
import {useDispatch, useSelector} from "react-redux";
import Filter from "./components/Filter/Filter";
import {setPostName} from "../../store/actions/postNameAction";

export default function Main() {

    const dispatch = useDispatch();
    const currentIndex = useSelector((state)=>state.currentIndex.currentIndex)
    const FilteredNames = useSelector((state)=>state.babyList.babyList)


    function handleChange(value) {
        console.log(value)
    }

    const FooterLinks = [
        {
            title: "About Us",
            to: "#",
        },
        {
            title: "Contact Us",
            to: "#",
        },
        {
            title: "Privacy Policy",
            to: "#",
        },
        {
            title: "Terms of Service",
            to: "#",
        },
    ]

    function LinkHandler(value) {
        window.scrollTo(0,0)
        dispatch(setPostName(value))
    }


    return<>
        <div className={style.container}>

            {/*Dynamic slug Baby names*/}
            <div className={'w-full max-[1550px]:px-7 max-w-[1500px] flex flex-col mt-12 '}>

                <span className={'text-5xl font-bold '}> {FilteredNames?.data?.title?.seo_title} </span>

            </div>

            {/*Filters*/}
            <Filter/>

            {/*List of Names*/}
            <div className={'w-full max-[1550px]:px-3 max-w-[1500px] flex flex-col items-center mt-12 '}>

                <div className={'flex flex-wrap justify-center items-center gap-x-4 gap-y-10'}>

                    {/*Cards */}
                    {FilteredNames?.data?.baby_list?.slice(0,10).map((value, index)=> <Link to={'layout'} key={index} onClick={()=>LinkHandler(value.name)} className={'w-[15rem] h-[15rem] flex flex-col items-center rounded-xl relative overflow-hidden shadow-xl'}>

                        <img src={cover} className={'w-full h-full object-cover absolute top-0 -z-0 brightness-50'} alt={value.name} />

                        <div className={'w-full h-full flex flex-col items-center z-0'}>

                            <div className={'w-full h-1/2 flex flex-col items-center justify-between py-4 '}>

                                <div className={'text-white text-xl font-bold'}>{index+1}</div>

                                <div className={'text-white text-3xl underline font-bold'}>{value.name}</div>

                            </div>

                            <div className={'w-full h-1/2 flex flex-col items-center justify-end pb-3'}>

                                <div className={'w-auto flex items-center text-white font-semibold '}>
                                    <div className={'text-lg'}>👶</div>
                                    <span>{value.total_birth_count} newborns</span>
                                </div>
                                <div className={'w-auto flex items-center text-white font-semibold gap-1 '}>
                                    <div className={'text-xl text-blue-600'}><IoIosMale /></div>
                                    <span>{value.m_ratio}% Male</span>
                                </div>
                                <div className={'w-auto flex items-center text-white font-semibold gap-1 '}>
                                    <div className={'text-xl text-red-600'}><IoIosFemale /></div>
                                    <span>{value.f_ratio}% Female</span>
                                </div>

                            </div>

                        </div>

                    </Link>)}

                </div>

            </div>

            <div className={'w-full h-auto max-[1550px]:px-3 max-w-[1500px] flex flex-col items-center justify-center gap-4  '}>

                <div className={'w-full flex flex-col items-center my-24 gap-4'}>

                    <div className={'max-[550px]:text-4xl text-6xl font-bold'}>Got feedback?</div>
                    <div className={'w-[600px] max-[700px]:w-auto text-center max-[550px]:text-xl text-2xl font-semibold'}>We'd love to hear from you. Let us know how we can improve our information.</div>

                    <div className={'px-6 py-5 rounded-xl text-xl font-semibold text-white bg-[#1C6EF2] mt-6'}>Submit feedback</div>

                </div>



                <div className={'w-full h-auto flex flex-col items-center gap-3 py-12 justify-center'}>

                    <div className={'w-full flex max-[600px]:flex-wrap max-[600px]:justify-center max-[600px]:gap-3 items-center justify-between'}>

                        {FooterLinks.map((value, index)=> <Link onClick={LinkHandler} key={index} to={value.to} className={'text-xl max-[600px]:text-[15px] text-[#4A699C]'}>{value.title}</Link>)}

                    </div>
                    <div className={'flex max-[600px]:flex-wrap max-[600px]:justify-center gap-5  items-center justify-between mt-5 text-4xl text-[#4A699C]'}>

                        <a href={'#'} className={'decoration-0'}>
                            <CiFacebook />
                        </a>
                        <a href={'#'} className={'decoration-0'}>
                            <PiTwitterLogoThin />
                        </a>
                        <a href={'#'} className={'decoration-0'}>
                            <PiInstagramLogo />
                        </a>

                    </div>

                    <div className={'text-xl  text-[#4A699C] mt-4'}>© 2022 BabyNames. All rights reserved.</div>

                </div>

            </div>



        </div>
    </>
}