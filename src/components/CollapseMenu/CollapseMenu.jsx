import React, {useState} from "react";
import style from "./style.module.css";
import {IoIosArrowDown} from "react-icons/io";

export default function CollapseMenu(props) {

    const [isOpen,setOpen] = useState(false)

    return<>
        <div className={` ${isOpen?'h-72':'h-24'} ${style.container}`}>

            <div onClick={()=>setOpen(!isOpen)} className={'w-full '}>
                <div className={style.label}>

                    <div className={style.title}>{props.title}</div>

                    <div className={`${isOpen?'rotate-180':'rotate-0'} ${style.arrow}`}>
                        <IoIosArrowDown />
                    </div>

                </div>
            </div>


            <div className={style.answer}>{props.answer}</div>
        </div>
    </>
}