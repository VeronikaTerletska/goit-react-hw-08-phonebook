import React from 'react';
import PropTypes from 'prop-types';

import { Wrap, Container, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Wrap>
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  </Wrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
