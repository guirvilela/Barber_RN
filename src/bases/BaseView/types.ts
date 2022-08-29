import {ReactElement} from 'react';

export interface IBaseView {
  component: ReactElement;
  navigation: any;
}

export interface IComponentViewProps {
  navigateDisplay: (display: string, params?: any) => void;
}
