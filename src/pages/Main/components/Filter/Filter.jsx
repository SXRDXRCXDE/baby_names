import React, {useEffect, useState} from "react";
import {Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {babyListActions} from "../../../../store/actions/babyListActions";
import {sendFilters, sendFiltersWithSlug} from "../../../../service/service_filter_names";

const { Option } = Select;

export default function Filter() {

    const dispatch = useDispatch()

    const babyList = useSelector((state)=>state.babyList.babyList)
    const CurrentSlug = useSelector((state)=>state.currentSlug.currentSlug)

    const [startLetter,setStartLetter] = useState(null);
    const [endLetter,setEndLetter] = useState(null);
    const [nameLength,setNameLength] = useState(0);
    const [gender,setGender] = useState(null);
    const [birthYear,setBirthYear] = useState(0);
    const [sortOrder,setSortOrder] = useState(null);

    const [filteredNames,setFilteredNames] = useState([])



    useEffect(()=>{

        FetchFilters()
        FetchFiltersWithSlug()

    },[])

    const FetchFilters = async () => {
        try {
            const data = await sendFilters(startLetter,endLetter,nameLength,gender,birthYear,sortOrder);
            dispatch(babyListActions(data))
            setFilteredNames(data)
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    }
    const FetchFiltersWithSlug = async () => {
        try {
            const data = await sendFiltersWithSlug(CurrentSlug);
            dispatch(babyListActions(data))
            setFilteredNames(data)
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    }



    const start_options = [
        {
            value: 'A',
            label: "Starts with A",
        },
        {
            value: 'B',
            label: "Starts with B",
        },
        {
            value: 'C',
            label: "Starts with C",
        },
        {
            value: 'D',
            label: "Starts with D",
        },
        {
            value: 'E',
            label: "Starts with E",
        },
        {
            value: 'F',
            label: "Starts with F",
        },
        {
            value: 'G',
            label: "Starts with G",
        },
        {
            value: 'H',
            label: "Starts with H",
        },
        {
            value: 'I',
            label: "Starts with I",
        },
        {
            value: 'J',
            label: "Starts with J",
        },
        {
            value: 'K',
            label: "Starts with K",
        },
        {
            value: 'L',
            label: "Starts with L",
        },
        {
            value: 'M',
            label: "Starts with M",
        },
        {
            value: 'N',
            label: "Starts with N",
        },
        {
            value: 'O',
            label: "Starts with O",
        },
        {
            value: 'P',
            label: "Starts with P",
        },
        {
            value: 'Q',
            label: "Starts with Q",
        },
        {
            value: 'R',
            label: "Starts with R",
        },
        {
            value: 'S',
            label: "Starts with S",
        },
        {
            value: 'T',
            label: "Starts with T",
        },
        {
            value: 'U',
            label: "Starts with U",
        },
        {
            value: 'V',
            label: "Starts with V",
        },
        {
            value: 'W',
            label: "Starts with W",
        },
        {
            value: 'X',
            label: "Starts with X",
        },
        {
            value: 'Y',
            label: "Starts with Y",
        },
        {
            value: 'Z',
            label: "Starts with Z",
        },
    ]

    const End_options = [
        {
            value: 'A',
            label: "Ends with A",
        },
        {
            value: 'B',
            label: "Ends with B",
        },
        {
            value: 'C',
            label: "Ends with C",
        },
        {
            value: 'D',
            label: "Ends with D",
        },
        {
            value: 'E',
            label: "Ends with E",
        },
        {
            value: 'F',
            label: "Ends with F",
        },
        {
            value: 'G',
            label: "Ends with G",
        },
        {
            value: 'H',
            label: "Ends with H",
        },
        {
            value: 'I',
            label: "Ends with I",
        },
        {
            value: 'J',
            label: "Ends with J",
        },
        {
            value: 'K',
            label: "Ends with K",
        },
        {
            value: 'L',
            label: "Ends with L",
        },
        {
            value: 'M',
            label: "Ends with M",
        },
        {
            value: 'N',
            label: "Ends with N",
        },
        {
            value: 'O',
            label: "Ends with O",
        },
        {
            value: 'P',
            label: "Ends with P",
        },
        {
            value: 'Q',
            label: "Ends with Q",
        },
        {
            value: 'R',
            label: "Ends with R",
        },
        {
            value: 'S',
            label: "Ends with S",
        },
        {
            value: 'T',
            label: "Ends with T",
        },
        {
            value: 'U',
            label: "Ends with U",
        },
        {
            value: 'V',
            label: "Ends with V",
        },
        {
            value: 'W',
            label: "Ends with W",
        },
        {
            value: 'X',
            label: "Ends with X",
        },
        {
            value: 'Y',
            label: "Ends with Y",
        },
        {
            value: 'Z',
            label: "Ends with Z",
        },
    ];



    const name_length_options = [
        {
            value: '2',
            label: 'Name Length 2'
        },
        {
            value: '3',
            label: 'Name Length 3'
        },
        {
            value: '4',
            label: 'Name Length 4'
        },
        {
            value: '5',
            label: 'Name Length 5'
        },
        {
            value: '6',
            label: 'Name Length 6'
        },
        {
            value: '7',
            label: 'Name Length 7'
        },
        {
            value: '8',
            label: 'Name Length 8'
        },
        {
            value: '9',
            label: 'Name Length 9'
        },
        {
            value: '10',
            label: 'Name Length 10'
        },
        {
            value: '11',
            label: 'Name Length 11'
        },
        {
            value: '12',
            label: 'Name Length 12'
        },
    ]

    const Gender_options = [
        {
            value:'M',
            label:'Male'
        },
        {
            value:'F',
            label:'Female'
        },
    ]

    const Sort_options = [
        {
            value:'Popular',
            label:'Popular Names'
        },
        {
            value:'New',
            label:'New Names'
        },
    ]

    const years = [];
    const currentYear = new Date().getFullYear();


    for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(year);
    }

    console.log(babyList)

    return<>
        <div>

            <div className={'w-full flex flex-wrap gap-3 items-center justify-center px-5 my-6'}>

                <Select
                    defaultValue="A"
                    style={{
                        width: "auto",
                    }}
                    onChange={(value)=>{
                        setStartLetter(value)
                        FetchFilters()
                    }}
                    options={start_options}
                />
                <Select
                    defaultValue="A"
                    style={{
                        width: "auto",
                    }}
                    onChange={(value)=>{
                        setEndLetter(value)
                        FetchFilters()
                    }}
                    options={End_options}
                />
                <Select
                    defaultValue="5"
                    style={{
                        width: "auto",
                    }}
                    onChange={(value)=>{
                        setNameLength(value)
                        FetchFilters()
                    }}
                    options={name_length_options}
                />
                <Select
                    defaultValue="M"
                    style={{
                        width: "auto",
                    }}
                    onChange={(value)=>{
                        setGender(value)
                        FetchFilters()
                    }}
                    options={Gender_options}
                />
                <Select
                    placeholder="Select Year"
                    onChange={(value)=>{
                        setBirthYear(value)
                        FetchFilters()
                    }}
                    defaultValue={'2022'}>
                    {years.map((year, index) => (
                        <Option key={index} value={year}>
                            {year}
                        </Option>
                    ))}
                </Select>
                <Select
                    defaultValue="Popular"
                    style={{
                        width: "auto",
                    }}
                    onChange={(value)=>{
                        setSortOrder(value)
                        FetchFilters()
                    }}
                    options={Sort_options}
                />


            </div>

        </div>
    </>
}