import styled from 'styled-components';

const Inputs = styled.input`
  width: ${props => props.width};
  font-size: ${props => props.fontSize || '16px'};
  height: ${props => props.height || '32px'};
  border-radius: 5px;
  margin: ${props => props.margin};
  outline: none;
  color: #30343f;
  padding-left: 10px;
  background-color: ${props => props.backgroundColor || '#fff'};
  border: ${props => props.border || 'none'};
  border-left: ${props => props.borderL || 'none'};
  border-top: ${props => props.borderT || 'none'};
  border-bottom: ${props => props.borderB || 'none'};
  border-right: ${props => props.borderR || 'none'};
  border-top-left-radius: ${props => props.borderRTL};
  border-top-right-radius :${props => props.borderRTR };
  border-bottom-left-radius :${props => props.borderRBL};
  border-bottom-right-radius :${props => props.borderRBR};
  box-shadow: ${props => props.boxShadow};
  
  @media (max-width: 680px) {
    font-size: ${props => props.fontSizeTele};
    top: ${props => props.topTele};
    width: ${props => props.widthTele};
    margin: ${props => props.marginTele};
    margin-left: ${props => props.marginLeftTele};
    };
  @media (max-width: 540px) {
    font-size: ${props => props.fontSizeTele};
    top: ${props => props.topTele};
    width: ${props => props.widthTele};
    margin: ${props => props.marginTele};
    margin-left: ${props => props.marginLeftTele};
    };
`;

export default Inputs;
