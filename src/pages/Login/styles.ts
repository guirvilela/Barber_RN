import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  align-items: center;
`;

export const ImageLogo = styled.Image`
  margin-bottom: 70px;
  margin-top: 50px;
`;

export const TitleLogin = styled.Text`
  font-size: 22px;
  font-family: ${() => theme.fonts.bold};
  color: ${() => theme.colors.white};
`;
