import React from 'react'
import {Card,FlexLayout,TextStyles} from '@cedcommerce/ounce-ui';
import "./style.css";
import DomainNew from '../Assets/Images/SVG/DomainNew'
import CircleUp from '../Assets/Images/SVG/CicleUp';
import FraudProtect from '../Assets/Images/SVG/FraudProtect';




const Leverage = () => {
  return (
    <div>
        <Card cardType='Plain' extraClass='pt-32'>
          <FlexLayout direction='vertical' spacing='extraLoose'>
          <TextStyles
              fontweight="bold"
              headingTypes="MD-2.7"
              lineHeight="LH-3.2"
              subheadingTypes="LG-2.5"
              textcolor="dark"
              type="Heading"              
            >
             Lorem Ipsum is simply dummy text of the printing
            </TextStyles>
            <TextStyles
              fontweight="bold"
              lineHeight="LH-2.4"
              subheadingTypes="SM-1.8"
              textcolor="dark"
              type="SubHeading"
            >
             Lorem Ipsum is simply dummy 
            </TextStyles>            
            <hr />     
            <Card cardType='Plain' extraClass='wrap-tab'>  
              <FlexLayout direction='vertical' spacing='extraLoose'>
                <FlexLayout spacing='extraLoose' wrap='noWrap' desktopWidth="50" tabWidth="100"  mobileWidth="100">
                      <FlexLayout spacing='tight' wrap='noWrap'>
                      <DomainNew />
                      <TextStyles
                        fontweight="normal"
                        lineHeight="LH-2.0"
                        paragraphTypes="MD-1.4"           
                        textcolor="dark"
                        type="Paragraph"
                      >
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      </TextStyles>
                      </FlexLayout>
                      <FlexLayout spacing='tight' wrap='noWrap'>
                    <CircleUp />
                      <TextStyles
                        fontweight="normal"
                        lineHeight="LH-2.0"
                        paragraphTypes="MD-1.4"           
                        textcolor="dark"
                        type="Paragraph"
                      >
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text                       </TextStyles>
                      </FlexLayout>
                </FlexLayout>   
                <FlexLayout spacing='extraLoose' wrap='noWrap' desktopWidth="50" tabWidth="100"  mobileWidth="100">
                    <FlexLayout spacing='tight' wrap='noWrap'>
                  <FraudProtect />
                    <TextStyles
                      fontweight="normal"
                      lineHeight="LH-2.0"
                      paragraphTypes="MD-1.4"           
                      textcolor="dark"
                      type="Paragraph"
                    >
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    </TextStyles>
                    </FlexLayout>
                    <FlexLayout spacing='tight' wrap='noWrap'>
                  <CircleUp />
                    <TextStyles
                      fontweight="normal"
                      lineHeight="LH-2.0"
                      paragraphTypes="MD-1.4"           
                      textcolor="dark"
                      type="Paragraph"
                    >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </TextStyles>
                    </FlexLayout>
                </FlexLayout>
                <FlexLayout spacing='extraLoose' wrap='noWrap' desktopWidth="50" tabWidth="100"  mobileWidth="100">
                    <FlexLayout spacing='tight' wrap='noWrap'>
                  <FraudProtect />
                    <TextStyles
                      fontweight="normal"
                      lineHeight="LH-2.0"
                      paragraphTypes="MD-1.4"           
                      textcolor="dark"
                      type="Paragraph"
                    >
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    </TextStyles>
                    </FlexLayout>
                    <FlexLayout spacing='tight' wrap='noWrap'>
                  <CircleUp />
                    <TextStyles
                      fontweight="normal"
                      lineHeight="LH-2.0"
                      paragraphTypes="MD-1.4"           
                      textcolor="dark"
                      type="Paragraph"
                    >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </TextStyles>
                    </FlexLayout>
                </FlexLayout>
              </FlexLayout>                     
            </Card>
          </FlexLayout>          
        </Card>
    </div>
  )
}

export default Leverage