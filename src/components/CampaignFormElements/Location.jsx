import React, { useEffect, useState } from 'react'
import MultiSelect from '../../common/MultiSelect';


const Location = ({ setLocation }) => {

    const [selectedLocations,setSelectedLocations] = useState({});

    useEffect(() => {
        const selectedValues = Object.values(selectedLocations)
            .filter(item => item.selected === true)
            .map(item => item.value)
            .join(', ');
            // console.log('selectedLocations',selectedLocations)
            // setSelectedLocations(selectedValues);
            setLocation(selectedValues);
            
    },[setLocation,selectedLocations])


    const dataset = [
        { value: 'Delhi NCR' },
        // { value: 'Noida' },
        // { value: 'Gurugram' },
        // { value: 'Greater Noida' },
        // { value: 'Gaziabaad' },
    ]
    return (
        <MultiSelect title='Select Locations' dataset={dataset} callBackFunction={setSelectedLocations} />
    )
}

export default Location;