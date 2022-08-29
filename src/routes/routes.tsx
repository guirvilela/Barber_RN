import React, {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import StackRoutes from './stack.routes';

const Routes: React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<any>(null);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        routeNameRef.current = currentRouteName;
      }}>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
