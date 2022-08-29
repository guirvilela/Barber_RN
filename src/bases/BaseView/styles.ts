import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  padding-left: 40px;
  padding-right: 40px;
  background-color: ${() => theme.colors.background};
`;
