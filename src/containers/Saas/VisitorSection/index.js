
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Button from '../../../reusecore/src/elements/Button';
import Card from '../../../reusecore/src/elements/Card';
import Image from '../../../reusecore/src/elements/Image';
import FeatureBlock from '../../../common/src/components/FeatureBlock';
import Container from '../../../common/src/components/UI/Container';
import VisitorSectionWrapper, { SectionObject } from './visitor.style';

import ImageBg from '../../../common/src/assets/image/saas/visitor_bg.png';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      allContentfulVisitor {
        edges {
          node {
            title
            description
            module {
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

  const visitorData = Data.allContentfulVisitor.edges[0].node;

  return (
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade left>
              <Img fluid={visitorData.image.fluid} />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content={visitorData.title}
                {...title}
              />
            }
            description={
              <Text
                content={visitorData.description}
                {...description}
              />
            }
            button={
              <a href="#1">
                <Button title={visitorData.module.caption} {...btnStyle} />
              </a>
            }
          />
        </Box>
      </Container>
    </VisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;