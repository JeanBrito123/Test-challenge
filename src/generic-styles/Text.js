import styled from 'styled-components';

const Text = styled.p`
    display: ${props => props.display};
    font-family: ${props => props.fontFamily};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    min-width: ${props => props.minWidth};
    height: ${props => props.height};
    max-height: ${props => props.maxHeight};
    min-height: ${props => props.minHeight};
    padding: ${props => props.padding || "0px"};
    padding-bottom: ${props => props.paddingBottom};
    margin: ${props => props.margin || "0px"};
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    border-top: ${props => props.borderTop};
    border-bottom: ${props => props.borderB};
    border-left: ${props => props.borderLeft};
    border-right: ${props => props.borderColorRight};
    border-radius: ${props => props.borderRadius};
    border-top-left-radius: ${props => props.borderRTL};
    border-bottom-left-radius: ${props => props.borderRBL};
    border-bottom-right-radius: ${props => props.borderRBR};
    border-top-right-radius: ${props => props.borderRTR};
    white-space:${props => props.whiteSpace};
    overflow: ${props => props.overflow};
    text-overflow:${props => props.textOverflow};
    grid-template-columns: ${props => props.gridColumns};
    grid-gap: ${props => props.gridGrap};
    justify-items: ${props => props.justifyItems};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    position: ${props => props.position};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};
    text-align: ${props => props.textAlign};
    cursor: ${props => props.cursor};
    z-index: ${props => props.zIndex};
    box-shadow:${props => props.boxShadow};
    float: ${props => props.float};
    :hover {
        background-color: ${props => props.backgroundColorHover};
        display: ${props => props.hoverDisplay};
        opacity: ${props => props.hoverOpacity};
    }
    
    @media (max-width: ${props => props.sizeSm || '1366px'}) {
        width: ${props => props.widths};
    grid-template-columns: ${props => props.gridColumnsSml};
    }

    @media (max-width: ${props => props.sizeSm || '1024px'}) {
        display: ${props => props.displaySmm};
        width: ${props => props.widthSm};
        max-width: ${props => props.maxWidthSm};
        height: ${props => props.heightSm};
        margin: ${props => props.marginSm};
        margin-left: ${props => props.marginLeftSmm};
        margin-right: ${props => props.marginRightSmm};
        max-height: ${props => props.maxHeightSm};
        grid-template-columns: ${props => props.gridColumnsSm};
        grid-gap: ${props => props.gridGrapSm};
        top: ${props => props.topSmm};
        left: ${props => props.leftSmm};
        right: ${props => props.rightSmm};
        justify-items: ${props => props.justifyItemsSm};
        justify-content: ${props => props.justifyContentSm};
    }

    @media (max-width: ${props => props.sizeSms || '780px'}) {
        display: ${props => props.displaySms};
        grid-template-columns: ${props => props.colSms};
        grid-gap: ${props => props.gridGrapSms};
        justify-items: ${props => props.justifyItemsSms};
        margin: ${props => props.marginSm};
        margin-top: ${props => props.marginTopSms};
        margin-left: ${props => props.marginLeftSms};
        margin-right: ${props => props.marginRightSms};
        padding: ${props => props.paddingSms};
        width: ${props => props.widthSms};
        height: ${props => props.heightSms};
        max-width: ${props => props.maxWidthSms};
        max-height: ${props => props.maxHeightSms};
        top: ${props => props.topSms};
        left: ${props => props.leftSms};
        font-size: ${props => props.fontSizeSms};
    }

    @media (max-width: ${props => props.sizeXs || '620px'}) {
        grid-template-columns: ${props => props.colXs};
        width: ${props => props.widthXs};
        height: ${props => props.heightXs};
        max-width: ${props => props.maxWidthXs};
        height: ${props => props.heightXs};
        grid-gap: ${props => props.gridGrapXs};
        max-height: ${props => props.maxHeightXs};
        display: ${props => props.displayXs};
        top: ${props => props.topXs};
        left: ${props => props.leftXs};
        overflow: ${props => props.overflowXs};
        margin-right: ${props => props.marginRightXs};
        margin-top: ${props => props.marginTopXs};
    }

    @media (max-width: ${props => props.sizeXss || '540px'}) {
        justify-content: ${props => props.justicontentXss};
        display: ${props => props.displayXss};
        max-width: ${props => props.maxWidthXss};
        width: ${props => props.widthXss};
        height: ${props => props.heightXss};
        grid-template-columns: ${props => props.colXss};
        margin-left: ${props => props.marginLeftXss};
        left: ${props => props.leftXss};
        top: ${props => props.topXss};
        justify-items: ${props => props.justifyItemsXss};
    }

    @media (max-width: ${props => props.sizeXs || '480px'}) {
        grid-template-columns: ${props => props.colXt};
        display: ${props => props.displayXt};
        justify-items: ${props => props.justifyItemsXt};
        width: ${props => props.widthXt};
        height: ${props => props.heightXt};
        margin: ${props => props.marginXt};
        font-size: ${props => props.fontsizeXs};
        max-height: ${props => props.maxHeightXt};
        padding: ${props => props.paddingXs};
        float: ${props => props.floatXs};
    }

    @media (max-width: ${props => props.sizeXs || '330px'}) {
        grid-template-columns: ${props => props.colXts};
    }
`;

export { Text };
export default Text;
