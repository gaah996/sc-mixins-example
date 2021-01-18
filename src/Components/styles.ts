import styled from 'styled-components';

import { Colors, Typography } from '../styles/index';

export const Wrapper = styled.div`
  width: 50%;
  margin: 10px auto;
  border: 1px solid ${Colors.lightGray};
  padding: 10px;
`;

export const Title = styled.h1`
  ${Typography.Title};
  
  padding-bottom: 10px;
  border-bottom: 1px solid ${Colors.primary};
  margin-bottom: 10px;
`;

export const Text = styled.p`
  ${Typography.Content};
  
  padding-bottom: 10px;
`;

interface FooterProps {
    isBlue: boolean;
}

export const Footer = styled.div<FooterProps>`
  ${Typography.SecondarySmallText};
  color: ${({isBlue}) => isBlue ? Colors.primary : null};
  
  border-top: 1px solid ${Colors.lightGray};
  padding-top: 10px;
`;
