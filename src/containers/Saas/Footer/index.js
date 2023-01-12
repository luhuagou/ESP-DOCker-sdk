import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Logo from '../../../reusecore/src/elements/UI/Logo';
import Container from '../../../common/src/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import LogoImage from '../../../common/src/assets/image/saas/logo.png';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        Footer_Data {
          title
          menuItems {
            text
            url
          }
        }
 