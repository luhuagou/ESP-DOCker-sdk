import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from '../../../reusecore/src/elements/Box';
import Text from '../../../reusecore/src/elements/Text';
import Heading from '../../../reusecore/src/elements/Heading';
import Button from '../../../reusecore/src/elements/Button';
import Container from '../../../common/src/components/UI/Container';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from '../../../common/src/components/Accordion';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import FaqSectionWrapper from './faqSection.style';

const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  buttonWrapper,
  button,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      allContentfulFaq {
        edges {
          node {
            title
            subtitle
            module {
              question
              answer
            }
            button {
              caption
            }
          }
        }
      }
    }
  `);
  const faqData = Data.allContentfulFaq.edges[0].node;

  return (
    <FaqSectionWrapper id="faq_section">
      <Container>
        <Box {...sectionHeader}>
          <Text
            content={faqData.subtitle}
            {...sectionSubTitle}
          />
          <Heading
            content={faqData.title}
            {...sectionTitle}
          />
        </Box>
        <Box className="row">
          <Accordion>
            <Fragment>
              {faqData.module.map((faqItem, index) => (
                <AccordionItem key={index} expanded={faqItem.expend}>
                  <Fragment>
                    <AccordionTitle>
                      <Fragment>
                        <Heading content={faqItem.question} {...titleStyle} />
                        <IconWrapper>
                          <OpenIcon>
                            <Icon icon={minus} size={18} />
                          </OpenIcon>
                          <CloseIcon>
                            <Icon icon={plus} size={18} />
                          </CloseIcon>
                        </IconWrapper>
                      </Fragment>
                    </AccordionTitle>
                    <AccordionBody>
                      <Text
                        content={faqItem.answer}
                        {...descriptionStyle}
                      />
                    </AccordionBody>
                  </Fragment>
                </AccordionItem>
              ))}
            </Fragment>
          </Accordion>
          <Box {...buttonWrapper}>
            <a href="#1">
              <Button
                title={faqData.button.caption}
                {...button}
              />
            </a>
          </Box>
        </Box>
      </Container>
    </FaqSectionWrapper>
  );
};

// FaqSection style props
FaqSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',