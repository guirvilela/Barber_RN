import React from 'react';

import Logo from '../../assets/Logo.png';
import Input from '../../components/Input';
import {Container, ImageLogo, TitleLogin} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <ImageLogo source={Logo} />

      <TitleLogin>Faça seu login</TitleLogin>

      <Input />
    </Container>
  );
};

export default Login;
