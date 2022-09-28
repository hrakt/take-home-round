import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { blogPostQuery } from "../../__generated__/blogPostQuery.graphql";

const BlogPostQuery = graphql`
  query blogPostQuery($id: ID!) {
    node(id: $id) {
      ... on crudio_Blogs {
        id
        article
        BlogTags {
          Tag {
            name
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
  const query = useLazyLoadQuery<blogPostQuery>(BlogPostQuery, {
    id: blogId as string,
  }); //@BlogPostId
  const { node } = query;
  return (
    <ion-content>
      {node?.article}
      <ion-list>
        <ion-list-header>Tags</ion-list-header>
        {node?.BlogTags?.map(({ Tag }) => {
          //@Tags
          return (
            <ion-item>
              <ion-label>{Tag?.name}</ion-label>
            </ion-item>
          ); //@Tags
        })}
      </ion-list>
    </ion-content>
  ); //@BlogPostId
};

export default BlogPost;
