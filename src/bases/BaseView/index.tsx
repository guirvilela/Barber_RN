import React from 'react';
import {IBaseView, IComponentViewProps} from './types';

import {Container} from './styles';

const BaseView: React.FC<IBaseView> = ({component, navigation}) => {
  const navigateDisplay = (display: string, params?: any) => {
    if (params) {
      navigation.navigate(display, params);
    } else {
      navigation.navigate(display);
    }
  };

  return (
    <Container>
      {React.cloneElement(component, {
        navigateDisplay,
      } as IComponentViewProps)}
    </Container>
  );
};

export default BaseView;
