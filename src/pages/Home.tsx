import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonLabel, 
  IonButton, IonItemDivider, IonInput } from '@ionic/react';
  import React , {useState, constructor}from 'react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Home.css';
  
  const Home: React.FC = () => {
    var [scorePlayer1, setScorePlayer1] = useState(0);
    var [scorePlayer2, setScorePlayer2] = useState(0);
      function fungsiMenaikkanScorePlayer1(){
        scorePlayer1++
        setScorePlayer1(scorePlayer1)
      }
      function fungsiMenurunkanScorePlayer1(){
        if(scorePlayer1<=0)return
        scorePlayer1 --
        setScorePlayer1(scorePlayer1)
      }
      function fungsiMenaikkanScorePlayer2(){
        scorePlayer2++
        setScorePlayer2(scorePlayer2)
      }
      function fungsiMenurunkanScorePlayer2(){
        if(scorePlayer2<=0)return
        scorePlayer2 --
        setScorePlayer2(scorePlayer2)
      }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Badminton Scoring</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <div>Rico Rendra Paski</div>
                <div>
                  <IonButton onClick={fungsiMenaikkanScorePlayer1}>+</IonButton>
                </div>
                <div>
                  <IonInput value={String(scorePlayer1)}></IonInput>
                </div>
                <div>
                  <IonButton onClick={fungsiMenurunkanScorePlayer1}>-</IonButton>
                </div>
                </IonCol>
                <IonCol>
                  <div>Taufik Hidayat</div>
                  <div>
                    <IonButton onClick={fungsiMenaikkanScorePlayer2}>+</IonButton>
                  </div>
                  <div>
                    <IonInput value={String(scorePlayer2)}></IonInput>
                    </div>
                    <div>
                    <IonButton onClick={fungsiMenurunkanScorePlayer2}>-</IonButton>
                  </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
          </IonPage>    
    );
  };
  
  export default Home;
  