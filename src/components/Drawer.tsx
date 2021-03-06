import React from 'react';
import {Drawer as DrawerBase, Header} from 'react-native-magnus';
import {DrawerButton, DrawerLogout, DrawerUser} from '~/components';

const Drawer: typeof DrawerBase = React.forwardRef((props, ref) => (
  <DrawerBase ref={ref} {...props} p={'md'}>
    <Header textAlign={'center'} fontSize={'3xl'}>
      Book Store
    </Header>
    <DrawerUser />
    <DrawerButton
      onPress={() => ref.current.close()}
      icon={'home'}
      route={'Home'}
      label={'Start'}
    />
    <DrawerButton
      onPress={() => ref.current.close()}
      icon={'shopping-cart'}
      route={'Cart'}
      label={'Cart'}
    />
    <DrawerLogout
      onPress={() => ref.current.close()}
      icon={'sign-out-alt'}
      label={'Logout'}
    />
  </DrawerBase>
));

export default Drawer;
