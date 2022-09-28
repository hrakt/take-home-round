import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { blogPostQuery } from "../../__generated__/blogPostQuery.graphql";

const BlogPostQuery = graphql`
  query blogPostQuery {
    crudio_Blogs_connection {
      edges {
        node {
          id
          article
          BlogTags_connection {
            edges {
              node {
                id
                Tag {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

type Props = {
  blogId: string | string[] | undefined; //@BlogPostId
};

const BlogPost = ({ blogId }: Props) => {
  const query = useLazyLoadQuery<blogPostQuery>(BlogPostQuery, {}); //@BlogPostId
  const node = query.crudio_Blogs_connection.edges.find(
    //@BlogPostId
    ({ node }) => node.id == blogId //@BlogPostId
  );
  return (
    <ion-content>
      {node?.node.article}
      <ion-list>
        <ion-list-header>Tags</ion-list-header>
        {node?.node.BlogTags_connection.edges.map(
          //@Tags
          (tag: { node: { Tag: { name: string } | null } } | null) => {
            //@Tags
            return (
              <ion-item>
                <ion-label>{tag?.node?.Tag?.name}</ion-label>
              </ion-item>
            ); //@Tags
          }
        )}
      </ion-list>
    </ion-content>
  ); //@BlogPostId
};

export default BlogPost;
