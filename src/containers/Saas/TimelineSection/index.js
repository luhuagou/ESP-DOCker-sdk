
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Button from '../../../reusecore/src/elements/Button';
import Container from '../../../common/src/components/UI/Container';

import {
  TimelineWrapper,
  TimelineItem,
  TimelineIndex,
  TimelineContent,
  TimelineDot,
  Hidden,
} from './timeline.style';

const TimelineSection = ({
  sectionWrapper,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  row,
  col,
  button,
  textArea,
  imageArea,
  imageTwo,
  buttonWrapper,
  indexStyle,
  timelineTitle,
  timelineDescription,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      allContentfulTimeline {
        edges {
          node {
            title
            subtitle
            module {
              title
              description
            }
            button {
              caption
            }
            
            image {
              fluid(maxWidth: 1500){
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const timelineData = Data.allContentfulTimeline.edges[0].node;

  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} content={timelineData.subtitle} />
          <Heading
            {...sectionTitle}
            content={timelineData.title}
          />
        </Box>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Fade bottom>
              <Img fluid={timelineData.image.fluid} />
            </Fade>
          </Box>
          <Box {...col} {...textArea}>
            <TimelineWrapper>
              {timelineData.module.map((item, index) => (
                <TimelineItem key={`timeline-item-${index}`}>
                  <TimelineIndex>
                    <Hidden>
                      <Slide bottom>
                        <Text
                          as="span"
                          content={item.index || `0${index + 1}`}
                          {...indexStyle}
                        />
                      </Slide>
                    </Hidden>
                  </TimelineIndex>
                  <TimelineContent>
                    <Hidden>
                      <Slide bottom delay={100}>
                        <Heading
                          as="h2"
                          content={item.title}
                          {...timelineTitle}
                        />
                      </Slide>
                    </Hidden>
                    <Hidden>
                      <Slide bottom delay={200}>
                        <Text
                          content={item.description}
                          {...timelineDescription}
                        />
                      </Slide>
                    </Hidden>
                  </TimelineContent>
                  <TimelineDot />
                </TimelineItem>