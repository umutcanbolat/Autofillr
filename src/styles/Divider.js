import styled from 'styled-components';
import { Divider as AntDivider } from 'antd';

export const Divider = styled(AntDivider)`
  border-top: 1px solid ${(props) => props.theme.dividerColor} !important;
`;

export default Divider;
