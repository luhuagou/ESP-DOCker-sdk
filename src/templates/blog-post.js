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
      <BlogPostDetailsWrapper>
        <PostDetails
          title={post.title}
          date={post.date}
          preview={
            post.cover == null
              ? null
              : post.cover.fluid
          }
          description={post.content.content}
          tags={post.tags.map(tag => tag.tagName)}
          author={{
            name: post.authorName,
            socialName: post.authorTwitterName,
            socialLink: post.authorTwitterLink,
            photo: post.authorPhoto.fluid
          }}
          readTime={post.readTime}
        />
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }) => (
              <RelatedPostItem key={node.slug}>
                <PostCard
                  title={node.title || node.slug}
                  url={`/blog/${node.slug}`}
                  image={
                    node.cover 