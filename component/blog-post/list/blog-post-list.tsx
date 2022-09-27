import Link from "next/link";
import { graphql, useLazyLoadQuery } from "react-relay";

const BlogPostListQuery = graphql`
  query blogPostListQuery {
    crudio_Blogs_connection {
      edges {
        node {
          id
          article
          BlogTags {
            Tag {
              id
              name
            }
          }
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
            <Link href={`/blog-post/${edge.node.id}`}>
              <p>{edge.node.article}</p>
            </Link>
          </ion-label>
        </ion-item>
      ))}
    </ion-list>
  );
};

export default BlogPostList;
