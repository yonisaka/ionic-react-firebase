import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLoading, } from '@ionic/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig';
import { useHistory } from 'react-router';

const Dashboard: React.FC = () => {
  const [busy, setBusy] = useState(false)
  const history = useHistory()
  const username = useSelector((state: any) => state.user.username)
  
  async function logout(){
    setBusy(true)
    await logoutUser()
    setBusy(false)
    history.replace('/')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Coffee Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading message="Logging out" duration={0} isOpen={busy}/>
        <IonTitle>Helloo {username}</IonTitle>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
