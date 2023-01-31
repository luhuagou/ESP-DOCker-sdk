import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import PropTypes from 'prop-types';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Button from '../../../reusecore/src/elements/Button';
import Container from '../../../common/src/components/UI/Container';
import GlideCarousel from '../../../common/src/components/GlideCarousel';
import GlideSlide from '../../../common/src/components/GlideCarousel/glideSlide';
import TestimonialSectionWrapper, {
  TextWrapper,
  ImageWrapper,
  RoundWrapper,
  ClientName,
} from './testimonialSection.style';

const TestimonialSection = ({
  sectionSubTitle,
  btnWrapperStyle,
  commentStyle,
  nameStyle,
  btnStyle,
  designationStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        Testimonial {
          social_icon
        }
      }

      allContentfulTestimonial {
        edges {
          node {
            title
            module {
              name
              career
              content
              photo {
                fluid(maxWidth: 1500){
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  const testimonialData = Data.allContentfulTestimonial.edges[0].node;

