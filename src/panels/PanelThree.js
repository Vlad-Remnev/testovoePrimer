import React from 'react';
import {Icon24Home} from "@vkontakte/icons";

export const PanelThree = () => {
    const style = {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={style}>
            <Icon24Home/> 3
        </div>
    );
};