import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard/postCard"
import PostDetails from "../components/PostDetails/postDetails"
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
} from "./templates.style"

const BlogPostTemplate = (props) => {
  const post = props.data.contentfulBlog
  const { edges } = props.data.allContentfulBlog

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.content.content}
      />
   