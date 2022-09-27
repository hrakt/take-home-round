import { graphql, useLazyLoadQuery } from "react-relay";
import { blogPostListQuery } from "../../__generated__/blogPostListQuery.graphql";

const BlogPostQuery = graphql`
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

type Props = {
  blogId: string | string[] | undefined; //@BlogPostId
};

const BlogPost = ({ blogId }: Props) => {
  const query = useLazyLoadQuery<blogPostListQuery>(BlogPostQuery, {}); //@BlogPostId
  const node = query.crudio_Blogs_connection.edges.find(
    //@BlogPostId
    ({ node }) => node.id == blogId //@BlogPostId
  );
  return <ion-content>{node && node.node.article}</ion-content>; //@BlogPostId
};

export default BlogPost;
