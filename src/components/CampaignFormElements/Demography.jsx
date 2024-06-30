import React, { useEffect, useState } from 'react'
import Accordion from '../../common/accordian/Accordian';
import Gender from './Gender';
import Age from './Age';


const Demography = ({ setDemographyDetails }) => {


    const [gender,setGender] = useState('');
    const [age,setAge] = useState('');
    const [value,setValue] = useState('');

    useEffect(() => {
        setDemographyDetails({age:age,gender:gender});
        setValue(`Selected Age Groups : ${age}`)
    },[age,gender,setDemographyDetails])

    return (
        <>
            <Accordion title='Gender' subType={true} value={gender}>
                <Gender setGender={setGender}/>
            </Accordion>

            <Accordion title='Age' subType={true} value={value}>
                <Age setAge={setAge}/>
            </Accordion>

        </>
    )
}

export default Demography;