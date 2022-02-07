import React, {useContext, useEffect}from 'react'
import {Button} from "../ButtonElements"
import {InfoContainer, InfoWrapper, InfoRow, TextWrapper,
     TopLine, Heading, 
     BtnWrap, Subtitle, Column1, Column2, ImgWrap, Img} from './InfoElements'
import { Context } from '../Context/Context'


const InfoSection = ({light, id, imgStart, firstline, lightTxt, 
    headline, darkTxt, description, 
    buttonLabel, imga, 
    alt, primary, dark, dark2}) => {

        const { id_, setId } = useContext(Context);

        useEffect(() => {
            setId(id)
        }, [id_])
    return (
        <>
            <InfoContainer light ={light} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {firstline}
                                </TopLine>
                                <Heading lightTxt = {!lightTxt}>
                                {headline}
                                </Heading>
                                <Subtitle  darkTxt = {darkTxt}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button primary = {primary} to="home">{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={imga}/> 
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
