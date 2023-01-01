import React from 'react';
import Sticky from 'react-stickynode';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from '../common/src/theme/saas';

import { ResetCSS } from '../common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.st