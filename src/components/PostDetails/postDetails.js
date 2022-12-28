import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import _ from "lodash"
import { Row, Col } from "react-bootstrap"
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from "./postDetails.style"

const PostDetails = ({
  title,
  date,
  preview,
  description,
  tags,
  ...props
}) => {
  return (
    <PostDetailsWrapper {...props} className="post_details">
      {preview === null ? null : (
        <PostPreview className="post_preview">
          <Row>
            <Col md={5} sm={12}className="post-header__text">
              <p className="post-header__meta">
                MARKETING | 7 MIN READ
              </p>
              <h1 className="post-header__title">
                {title}
              </h1>
              <Row className="post-author-tag">
                <Col xs={4} className="post-author-tag__image-container">
                  <a href="#">
                    <img src="" alt="author" />
                  </a>
                </Col>
                <Col xs={8} className="post-author-tag__text">
                  <p>
                    Written by
     