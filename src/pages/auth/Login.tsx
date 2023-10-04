import React, { useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonToolbar,
} from "@ionic/react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Logged in with:", email, password);
  };

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Home" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <form>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              required
            ></IonInput>
          </IonItem>
          <IonButton
            style={{ marginTop: "1rem" }}
            expand="full"
            onClick={handleLogin}
          >
            Login
          </IonButton>
          <div style={{ marginTop: "1rem", flex: 1 }}>
            <center>
              <span>
                Don't have an account?{" "}
                <a href="/register" style={{ color: "#428CFF" }}>
                  Sign up
                </a>
              </span>
            </center>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
