import React from 'react'

import {ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, 
  ServicesH1, ServicesH2, ServicesP} from './ServicesElements'

const Services = ()=>{
    return (
        <ServicesContainer id ="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-1.svg'}/>
                    <ServicesH2>Web Development</ServicesH2>
                    <ServicesP>We will help you to build websites using 
                        different frameworks like django, react etc. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-2.svg'}/>
                    <ServicesH2>Machine Learning</ServicesH2>
                    <ServicesP>We will provide the simple and detailed 
                        lectures in machine Learning course.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-3.svg'}/>
                    <ServicesH2>Programming with Python</ServicesH2>
                    <ServicesP> We will provide zero to hero lectures in python Programming
                        language.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services