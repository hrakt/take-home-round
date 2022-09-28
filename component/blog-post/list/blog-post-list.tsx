import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { blogPostListQuery } from "../../../__generated__/blogPostListQuery.graphql";

const BlogPostListQuery = graphql`
  query blogPostListQuery {
    crudio_Blogs_connection {
      edges {
        node {
          id
          article
        }
      }
    }
  }
`;

const BlogPostList = () => {
  const query = useLazyLoadQuery<blogPostListQuery>(BlogPostListQuery, {});

  return (
    <ion-list>
      {query.crudio_Blogs_connection.edges.map(
        (edge: {
          node: {
            id: string | number | undefined;
            article: string | null | undefined;
          };
        }) => (
          <ion-item key={edge.node.id}>
            <ion-label>
              <Link href={`/blog-post/${edge.node.id}`}>
                <p>{edge.node.article}</p>
              </Link>
            </ion-label>
          </ion-item>
        )
      )}
    </ion-list>
  );
};

export default BlogPostList;
