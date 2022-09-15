import { Suspense } from "react";
import BlogPostList from "../../component/blog-post/list/blog-post-list";
import IonPage from "../../component/ion-page/ion-page";

const BlogPostPage = () => {
  return (
    <IonPage>
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Blog Posts</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <Suspense fallback={<ion-progress-bar type="indeterminate" />}>
          <BlogPostList />
        </Suspense>
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <ion-buttons>
            <ion-button id="popover-button">Open Menu</ion-button>
          </ion-buttons>
          <ion-popover trigger="popover-button" dismiss-on-select="true">
            <ion-content>
              <ion-list>
                <ion-item button detail={false}>
                  Option 1
                </ion-item>
                <ion-item button detail={false}>
                  Option 2
                </ion-item>
                <ion-item button id="nested-trigger">
                  More options...
                </ion-item>
                <ion-popover
                  trigger="nested-trigger"
                  dismiss-on-select="true"
                  side="end"
                >
                  <ion-content>
                    <ion-list>
                      <ion-item button detail={false}>
                        Nested option
                      </ion-item>
                    </ion-list>
                  </ion-content>
                </ion-popover>
              </ion-list>
            </ion-content>
          </ion-popover>
        </ion-toolbar>
      </ion-footer>
    </IonPage>
  );
};

export default BlogPostPage;
