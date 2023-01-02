import React from 'react';
import Icon1 from '../../images/new.png';
import Icon2 from '../../images/writing.png';
import Icon3 from '../../images/world2.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='blockchain'>
      <ServicesH1>artificial intelligence</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Generative Art</ServicesH2>
          <ServicesP>
            generative art?
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Prediction/Classification</ServicesH2>
          <ServicesP>
            AI is being used to classify image, video, text, as well as predict financial patterns customer trends and more.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Natural Langauage Processing</ServicesH2>
          <ServicesP>
            Artificial Intelligence chatbots, virtual assistants, written content generation.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Research</ServicesH2>
          <ServicesP>
            Research and Development
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
