
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Button from '../Button';
import Loader from '../Loader';
import Text from '../Text';

const LoadMore = ({
  handleLoadMore,
  showButton,
  buttonText,
  buttonVariant,
  loaderColor,
  loading,
  loadMoreComponent,
  loadMoreWrapperStyle,
  loadMoreButtonStyle
}) => {
  return (
    <>
      {showButton ? (
        <Box {...loadMoreWrapperStyle}>
          {loadMoreComponent ? (
            loadMoreComponent
          ) : (
            <Button
              variant={buttonVariant}
              title={buttonText || 'Load More'}
              isLoading={loading}
              loader={<Loader loaderColor={loaderColor} />}
              onClick={handleLoadMore}
              {...loadMoreButtonStyle}
            />
          )}
        </Box>
      ) : null}
    </>
  );
};

const ListGrid = ({
  data = [],
  total,
  component,
  columnWidth,
  postCount,
  totalPost,
  pagination,
  paginationComponent,
  handleLoadMore,
  loadMoreComponent,
  infinityScroll,
  placeholder,
  loading,
  limit,
  buttonText,
  buttonVariant,
  loaderColor,
  componentWrapperStyle,
  componentContainerStyle,
  loadMoreWrapperStyle,
  loadMoreButtonStyle,
  paginationWrapperStyle
}) => {
  const Limit = limit ? Number(limit) : 1;
  const limits = [];
  for (let i = 0; i < Limit; i++) {
    limits.push(i);
  }
  // const grabPostNumber = data.length;
  let showButton = postCount < totalPost;

  return (
    <>
      <Box {...componentWrapperStyle}>
        {data.length ? (
          <>
            {data.map((item, index) => (
              <Box width={columnWidth} key={index} {...componentContainerStyle}>
                {component(item, index)}
              </Box>
            ))}
          </>
        ) : null}
        {loading && (
          <>
            {limits.map(index => (
              <Box width={columnWidth} key={index} {...componentContainerStyle}>
                {placeholder ? placeholder : <Text content="Loading ..." />}
              </Box>
            ))}
          </>
        )}