import React, {useState} from 'react';
import {AdaptivityProvider, AppRoot, ConfigProvider, Panel, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import TabbarComponent from "./components/TabbarComponent";
import {PanelOne} from "./panels/PanelOne";
import {PanelThree} from "./panels/PanelThree";
import {PanelTwo} from "./panels/PanelTwo";

export const App = () => {
    const [activePanel, setActivePanel] = useState('login');

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <TabbarComponent activePanel={activePanel} setActivePanel={setActivePanel}/>
                    <View activePanel={activePanel}>
                        <Panel id="login">
                            <PanelOne/>
                        </Panel>
                        <Panel id="login2">
                            <PanelTwo/>
                        </Panel>
                        <Panel id="login3">
                            <PanelThree/>
                        </Panel>
                    </View>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );

};
