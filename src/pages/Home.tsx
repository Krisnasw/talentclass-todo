import MessageListItem from "../components/MessageListItem";
import { useState } from "react";
import { Message, getMessages } from "../data/messages";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";
import {
  bookmarkOutline,
  ellipsisVerticalOutline,
  pencil,
  personCircleOutline,
} from "ionicons/icons";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo App</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink={`/login`}>
              <IonIcon
                slot="icon-only"
                ios={personCircleOutline}
                md={personCircleOutline}
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {messages.map((m) => (
            <MessageListItem key={m.id} message={m} />
          ))}
        </IonList>

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={ellipsisVerticalOutline}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton aria-label="Create Todo">
              <IonIcon icon={pencil}></IonIcon>
            </IonFabButton>
            <IonFabButton aria-label="Category">
              <IonIcon icon={bookmarkOutline}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
