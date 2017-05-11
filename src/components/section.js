import React from 'react';
import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: 4em;
  background: lightblue;
`;

const Section = ({ children }) =>
  <SectionStyled>
    {children}
  </SectionStyled>;

export default Section;
