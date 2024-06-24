
import React from 'react';

import { FontAwesome, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, Entypo, MaterialIcons, SimpleLineIcons, Octicons, Foundation, AntDesign, EvilIcons } from 'react-web-vector-icons';

export const Icons = {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    FontAwesome5,
    AntDesign,
    Entypo,
    SimpleLineIcons,
    Octicons,
    Foundation,
    EvilIcons,
}

const VectorIcons = ({ type, name, color, size = 24, style }) => {
    const IconComponent = Icons[type];
    return (
        <>
            {IconComponent && (
                <IconComponent name={name} size={size} color={color} style={style} />
            )}
        </>
    );
};

export default VectorIcons