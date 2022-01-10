import React from 'react';
import {useAuth} from '~/context/AuthContext';
import DrawerButton from './DrawerButton';

const DrawerLogout: typeof DrawerButton = props => {
  const {logout} = useAuth();

  return <DrawerButton {...props} onPress={logout} label={'Logout'} />;
};

export default DrawerLogout;
