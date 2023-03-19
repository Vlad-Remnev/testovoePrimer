import React, {useCallback} from 'react';
import {Tabbar, TabbarItem} from '@vkontakte/vkui';
import {Icon24Home} from '@vkontakte/icons';
import {PANELS_IN_VIEWS} from "../constants/panels";

const TabbarComponent = ({activePanel, setActivePanel}) => {

    const handleRedirectLogin = useCallback(() => {
        activePanel !== PANELS_IN_VIEWS.login &&
        setActivePanel(PANELS_IN_VIEWS.login);
    }, [activePanel, setActivePanel]);

    const handleRedirectLogin2 = useCallback(() => {
        activePanel !== PANELS_IN_VIEWS.login2 &&
        setActivePanel(PANELS_IN_VIEWS.login2);
    }, [activePanel, setActivePanel]);

    const handleRedirectLogin3 = useCallback(() => {
        activePanel !== PANELS_IN_VIEWS.login3 &&
        setActivePanel(PANELS_IN_VIEWS.login3);
    }, [activePanel, setActivePanel]);

    return (
        <Tabbar shadow={false} itemsLayout="vertical">
            <TabbarItem
                selected={activePanel === PANELS_IN_VIEWS.login}
                onClick={handleRedirectLogin}
                text={'login'}
            >
                <Icon24Home/>
            </TabbarItem>
            <TabbarItem
                selected={activePanel === PANELS_IN_VIEWS.login2}
                onClick={handleRedirectLogin2}
                text={'login2'}
            >
                <Icon24Home/>
            </TabbarItem>
            <TabbarItem
                selected={activePanel === PANELS_IN_VIEWS.login3}
                onClick={handleRedirectLogin3}
                text={'login3'}
            >
                <Icon24Home/>
            </TabbarItem>
        </Tabbar>
    );
};

export default TabbarComponent;