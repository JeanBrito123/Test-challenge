import styled from 'styled-components';

const Btn = styled.div`
  background-color: ${props => props.backgroundColor || '#fff'};
  min-width: ${props => props.minWidth || '0px'};
  max-width: ${props => props.maxWidth};
  width: ${props => props.width};
  height: ${props => props.height || '32px'};
  font-family: ${props => props.FontFamily};
  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: ${props => props.fontSize || 'normal'};
  color: ${props => props.color || '#30343f'};
  margin: ${props => props.margin};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  line-height: ${props => props.lineHeight || '25px'};
  border: ${props => props.border};
  border-left: ${props => props.borderL};
  border-right: ${props => props.borderR};
  border-top: ${props => props.borderT};
  border-bottom: ${props => props.borderB};
  border-radius: ${props => props.borderRadius || "5px"};
  border-bottom-left-radius: ${props => props.borderLeftBottomRadius};
  border-top-left-radius: ${props => props.borderLeftTopRadius};
  border-bottom-right-radius: ${props => props.borderRightBottomRadius};
  border-top-right-radius: ${props => props.borderRightTopRadius};
  border-right: ${props => props.borderColorRight};
  border-left: ${props => props.borderColorLeft};
  text-overflow: ${props => props.textOverflow};
  white-space: ${props => props.whiteSpace};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  word-spacing: ${props => props.wordSpacing};
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'center'};
  cursor: ${props => props.cursor};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  align-items: center;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  :hover {
    opacity: ${props => props.opacity || '0.8'};
    text-decoration: ${props => props.textDecoration};
    color: ${props => props.hoverC};
    background-color: ${props => props.hoverB};
  }
  :active {
    opacity: ${props => props.hoverColor || '0.1'};
  }

  @media (max-width: ${props => props.sizeSm || '780px'}) {
    padding: ${props => props.paddingSm};
    width: ${props => props.widthSm};
    height: ${props => props.heightSm};
  }
  @media (max-width: ${props => props.sizeXs || '620px'}) {
    display: ${props => props.displayXs};
    padding: ${props => props.paddingXs};
    font-size: ${props => props.fontSizeXs};
    height: ${props => props.heightXs};
    width: ${props => props.widthXs};
  }

  @media (max-width: ${props => props.sizeXs || '420px'}) {
    width: ${props => props.widthXt};
    margin: ${props => props.marginXt};
    font-size: ${props => props.fontSize || '16px'};
    white-space: nowrap;
  }
  @media (max-width: ${props => props.sizeXs || '330px'}) {
    width: ${props => props.widthXt};
    margin: ${props => props.marginXt};
    white-space: nowrap;
  }
`;

export default Btn;
