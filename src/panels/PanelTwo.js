import React from 'react';
import {Icon24Home} from "@vkontakte/icons";

export const PanelTwo = () => {
    const style = {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={style}>
            <Icon24Home/> 2
        </div>
    );
};