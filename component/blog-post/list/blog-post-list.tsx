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
      {query.crudio_Blogs_connection.edges.map((edge) => (
        <ion-item key={edge.node.id}>
          <ion-label>
            <p>{edge.node.article}</p>
          </ion-label>
        </ion-item>
      ))}
    </ion-list>
  );
};

export default BlogPostList;
