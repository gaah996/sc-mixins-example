import {css} from 'styled-components';

import colors from './colors';

export const Title = css`
  font-size: 24px;
  font-weight:bold;
  color: ${colors.black};
`;

export const Content = css`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.5;
  color: ${colors.black};
`;

export const SecondarySmallText = css`
  font-size: 10px;
  font-weight: normal;
  color: ${colors.lightGray};
`;
