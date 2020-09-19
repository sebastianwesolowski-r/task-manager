import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {withRouter} from 'react-router-dom';

import {ReactComponent as HomeIcon} from '../../assets/home.svg';
import {ReactComponent as CalendarIcon} from '../../assets/calendar.svg';
import {ReactComponent as SettingsIcon} from '../../assets/settings.svg';
import {ReactComponent as ExitIcon} from '../../assets/exit.svg';
import {ReactComponent as UserIcon} from '../../assets/user.svg';

import {MenuContainer, NavigationPanel, NavigationItem, UserInfo, HamburgerIcon, HamburgerMenu} from './menu.styles';

import Overlay from '../overlay/overlay.component';

import {selectUser} from '../../redux/user/user-selectors';
import {signOutStart} from '../../redux/user/user-actions';

const Menu = ({location, userData, signOutStart}) => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const {authToken, userData: {email}} = userData;

    const checkRoute = pathname => {
        if(pathname === location.pathname) {
            return 1;
        }
        return 0;
    }

    return (
        <>
            <MenuContainer>
                <span>TASK MANAGER</span>
                <NavigationPanel>
                    <NavigationItem to="/home" isactive={checkRoute('/home')}><HomeIcon/></NavigationItem>
                    <NavigationItem to="/calendar" isactive={checkRoute('/calendar')}><CalendarIcon/></NavigationItem>
                    <NavigationItem to="/settings" isactive={checkRoute('/settings')}><SettingsIcon/></NavigationItem>
                </NavigationPanel>
                <ExitIcon onClick={() => signOutStart(authToken)}/>
            </MenuContainer>
            <HamburgerIcon isMenuOpen={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)}/>
            {
                isMenuOpen ? (
                    <Overlay onClick={() => setMenuOpen(!isMenuOpen)}>
                        <HamburgerMenu>
                            <NavigationPanel style={{margin: "0"}}>
                                <NavigationItem to="/home" isactive={checkRoute('/home')}><HomeIcon/></NavigationItem>
                                <NavigationItem to="/calendar" isactive={checkRoute('/calendar')}><CalendarIcon/></NavigationItem>
                                <NavigationItem to="/settings" isactive={checkRoute('/settings')}><SettingsIcon/></NavigationItem>
                            </NavigationPanel>
                            <ExitIcon onClick={() => signOutStart(authToken)}/>
                        </HamburgerMenu>
                    </Overlay>
                ) : null
            }
            <UserInfo>
                {email}
                <UserIcon />
            </UserInfo>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    userData: selectUser
});

const MapDispatchToProps = dispatch => ({
    signOutStart: authToken => dispatch(signOutStart(authToken))
});

export default connect(mapStateToProps, MapDispatchToProps)(withRouter(Menu));