import styled from 'styled-components';
import { themeGet } from 'styled-system';

export const PostDetailsWrapper = styled.div`
  position: relative;

  &.image_left {
    @media (min-width: 991px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
    }
    .post_preview {
      margin-top: 0;
      @media (min-width: 991px) {
        flex: 0 0 42%;
        max-width: 42%;
        padding-right: 60px;
        margin: 0;
        &:before {
          width: calc(80% - 60px);
        }
      }
    }
    .post_des_wrapper {
      @media (min-width: 991px) {
        flex: 0 0 58%;
        max-width: 58%;
        margin: 0;
      }
      .post_des {
        margin-top: 60px;
      }
    }
  }
`;

export const PostTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${themeGet('colors.textColor', '#292929')};
  line-height: 1.53;
  margin-bottom: 10px;
  @media (max-width: 1200px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
  @media (max-width: 990px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
  @media (max-width: 575px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const PostDate = styled.span`
  display: block;
  font-size: ${themeGet('fontSizes.3', '15')}px;
  color: ${themeGet('textColor', '#292929')};
  font-weight: 400;
  text-transform: uppercase;
  @media (max-width: 990px) {
    font-size: 14px;
  }
  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

export const PostPreview = styled.div`
  margin-top: 45px;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
  @media (max-width: 575px) {
    margin-top: 35px;
  }

  img {
    border-radius: 3px;
  }
`;

export const PostDescriptionWrapper = styled.div`
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  width: 870px;
  max-width: 100%;
  @media (max-width: 1200px) {
    margin-top: 70px;
  }
  @media (max-width: 575px) {
    margin-top: 30px;
  }
`;

export const PostDescription = styled.div`
  font-size: ${themeGet('fontSizes.4', '16')}px;

  .mermaid {
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }

  p {
    font-size: ${themeGet('fontSizes.4', '16')}px;
    margin-bottom: 2em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin-bottom: 0.75em;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 0.75em;
  }

  h3 {
    font-size: 21px;
  }

  h4 {
    font-size: 17px;
  }

  h5 {
    font-size: 15px;
  }

  h6 {
    font-size: 13px;
  }

  ol,
  ul {
    margin-left: 1.5rem;
    margin-bottom: 2rem;
    line-height: 2;
  }

  li {
    margin-bottom: 0.45rem;

    p {
      margin-bottom: 1em;
    }
  }

  blockquote {
    font-family: 'Poppins', sans-serif;
    font-size: 21px;
  