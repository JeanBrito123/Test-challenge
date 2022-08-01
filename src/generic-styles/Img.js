import styled from 'styled-components'

const Img = styled.img`
    width: ${props => props.width || '100%' };
    height: ${props => props.height || '100%'};
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};
    padding: ${props => props.padding};
    margin: ${props => props.Margin};
    float: ${props => props.float};
    border-radius: ${props => props.borderRadius};
    box-shadow:${props => props.boxShadow};
    border: ${props => props.Border};
    background-image: ${props => props.backgroundImage};
    background-size: ${props => props.backgroundSize};
    object-fit: ${props => props.objectFit};
    text-align: ${props => props.textAlign};
    cursor: ${props => props.cursor};

    @media (max-width: ${props => props.sizeSm || '1024px'}) {
        width: ${props => props.widthSm};
        height: ${props => props.heightSm};
        max-width: ${props => props.MaxWidthSm};
        max-height: ${props => props.MaxHeightSm};
    }
    @media (max-width: ${props => props.sizeSm || '740px'}) {
        width: ${props => props.widthSms};
        height: ${props => props.heightSms};
        min-width: ${props => props.MinWidthSm};
        min-height: ${props => props.MinHeightSm};
        margin: ${props => props.MarginSm};
        max-width: ${props => props.MaxWidthSm};
        max-height: ${props => props.MaxHeightSm};
    }
`

export default Imgs;