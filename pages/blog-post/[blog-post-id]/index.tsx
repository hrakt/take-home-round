import Image from "next/image";
import IonIcon from "../../../component/ion-icon/ion-icon";
import IonPage from "../../../component/ion-page/ion-page";

const BlogPostIdPage = () => {
  return (
    <IonPage>
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Round</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <ion-grid>
          <ion-row>
            {new Array(8).fill("").map((k, i) => {
              return (
                <ion-col key={i} size="3">
                  <ion-card>
                    <Image
                      // actual image size: 900 × 583 pixels
                      src="https://ionicframework.com/docs/demos/api/card/madison.jpg"
                      alt="Picture of the state capitol"
                      width={500}
                      height={500}
                    />
                    <ion-card-header>
                      <ion-card-subtitle>Destination</ion-card-subtitle>
                      <ion-card-title>Madison, WI</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <IonIcon
                        ios="/svg/pin.svg"
                        md="/svg/pin-sharp.svg"
                        slot="start"
                      />
                      Keep close to Nature&apos;s heart... and break clear away,
                      once in awhile, and climb a mountain or spend a week in
                      the woods. Wash your spirit clean.
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              );
            })}
          </ion-row>
        </ion-grid>
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

export default BlogPostIdPage;
