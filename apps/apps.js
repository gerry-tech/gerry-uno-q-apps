const APPS = [
  {
    id: "roulette-servo",
    title: "Arduino Roulette with a Servo",
    desc: "Press the button, suspenseful LED animation and the servo rotates according to the result.",
    tags: ["SERVO","LED","GAME"],
    requires: "UNO Q, LED, Servo, Button",
    zip: "https://raw.githubusercontent.com/gerry-tech/gerry-uno-q-apps/main/apps/roulette-servo/Roulette.zip",
    preview: "apps/roulette-servo/preview.jpg",
    badge: "FEATURED",
    demo: "https://www.youtube.com/watch?v=O9AB-pAx9fA",
    downloads: 928,
    level: "beginner",
    estTime: "20 min",
    complexity: "Easy",
    featured: true,

    codePreviewCpp:
      `#include <Arduino_RouterBridge.h>
#include <Servo.h>

Servo myservo;

int ledR = 2;
int ledG = 3;
int ledV = 4;
int pulsante = 5;


void setup() {
  // put your setup code here, to run once:
  pinMode(ledR, OUTPUT);
  pinMode(ledG, OUTPUT);
  pinMode(ledV, OUTPUT);
  pinMode(pulsante, INPUT);
  myservo.attach(9);
  Bridge.begin();
  Bridge.provide("caso1", caso1);
  Bridge.provide("caso2", caso2);
  Bridge.provide("caso3", caso3);
  Bridge.provide("valore", valore);
  Bridge.provide("spegni", spegni);
  Bridge.provide("suspence", suspence);
}

void loop() {
  // put your main code here, to run repeatedly:
}


void caso1(){
  digitalWrite(ledR, HIGH);
  myservo.write(0);
}

void caso2(){
  digitalWrite(ledG, HIGH);
  myservo.write(90);
}

void caso3(){
  digitalWrite(ledV, HIGH);
  myservo.write(180);
}

int valore(){
  return digitalRead(pulsante);
}

void spegni(){
  digitalWrite(ledR, LOW);
  digitalWrite(ledG, LOW);
  digitalWrite(ledV, LOW);
  myservo.write(0);
}

void suspence(){
  for (int i = 0; i < 4; i++) {
    digitalWrite(ledR, HIGH);
    delay(250);
    digitalWrite(ledR, LOW);
    delay(50);
    digitalWrite(ledG, HIGH);
    delay(250);
    digitalWrite(ledG, LOW);
    delay(50);
    digitalWrite(ledV, HIGH);
    delay(250);
    digitalWrite(ledV, LOW);
    delay(50);
    }
}`,

    codePreviewPy:
      `import time
import random
from arduino.app_utils import App
from arduino.app_utils import Bridge



def loop():
    """This function is called repeatedly by the App framework."""
    # You can replace this with any code you want your App to run repeatedly.
    if (Bridge.call("valore") == 0):
        val = random.randint(1, 11)
        Bridge.call("suspence")
        if ((val >= 1) and (val <6)):
            Bridge.call("caso1")
            time.sleep(3)
            
        if ((val >= 6) and (val <9)):
            Bridge.call("caso2")
            time.sleep(3)

        if (val >= 9):
            Bridge.call ("caso3")
            time.sleep(3)
    
    Bridge.call("spegni")
    time.sleep(0.2)


# See: https://docs.arduino.cc/software/app-lab/tutorials/getting-started/#app-run
App.run(user_loop=loop)`
  },
  {
    id: "display-a-7-segmenti",
    title: "WEB control of a 7-segment display",
    desc: "Create a WEB page where we control the display.",
    tags: ["WEB","DISPLAY","EASY"],
    requires: "UNO Q, 7-segment display, resistors",
    zip: "https://raw.githubusercontent.com/gerry-tech/gerry-uno-q-apps/main/apps/display-a-7-segmenti/Display%20a%207%20segmenti.zip",
    preview: "apps/display-a-7-segmenti/preview.jpeg",
    badge: "FEATURED",
    downloads: 71,
    level: "intermediate",
    estTime: "30 min", 
    complexity: "Medium",
    codePreviewCpp:
      `//Librerie

#include <Arduino_RouterBridge.h>

//Pin a cui collegare i vari segmenti

int A = 5;
int B = 4;
int F = 3;
int G = 2;
int E = 6;
int D = 7;
int C = 9;
int Dp = 8;

// Nel setup impostiamo i Pin in Uscite e iniziamo i Bridge

void setup() {
  // put your setup code here, to run once:
  pinMode(A, OUTPUT);
  pinMode(B, OUTPUT);
  pinMode(F, OUTPUT);
  pinMode(G, OUTPUT);
  pinMode(E, OUTPUT);
  pinMode(D, OUTPUT);
  pinMode(C, OUTPUT);
  pinMode(Dp, OUTPUT);
  Bridge.begin();
  Bridge.provide("num1", num1);
  Bridge.provide("num2", num2);
  Bridge.provide("num3", num3);
  Bridge.provide("num4", num4);
  Bridge.provide("num5", num5);
  Bridge.provide("num6", num6);
  Bridge.provide("num7", num7);
  Bridge.provide("num8", num8);
  Bridge.provide("num9", num9);
  Bridge.provide("puntino", puntino);
  Bridge.provide("spegni", spegni);
}

//Funzioni da importare tramite il Bridge in Python

void num1(){
  digitalWrite(B, HIGH);
  digitalWrite(C, HIGH);
}

void num2(){
  digitalWrite(A, HIGH);
  digitalWrite(B, HIGH);
  digitalWrite(G, HIGH);
  digitalWrite(E, HIGH);
  digitalWrite(D, HIGH);
}

void num3(){
  digitalWrite(A, HIGH);
  digitalWrite(B, HIGH);
  digitalWrite(G, HIGH);
  digitalWrite(C, HIGH);
  digitalWrite(D, HIGH);
}

void num4(){
  digitalWrite(F, HIGH);
  digitalWrite(B, HIGH);
  digitalWrite(G, HIGH);
  digitalWrite(C, HIGH);
}

void num5(){
  digitalWrite(A, HIGH);
  digitalWrite(F, HIGH);
  digitalWrite(G, HIGH);
  digitalWrite(C, HIGH);
  digitalWrite(D, HIGH);
}

void num6(){
  digitalWrite(A, HIGH);
  digitalWrite(F, HIGH);
  digitalWrite(G, HIGH);
  digitalWrite(E, HIGH);
  digitalWrite(D, HIGH);
  digitalWrite(C, HIGH);
}

void num7(){
  digitalWrite(A, HIGH);
  digitalWrite(B, HIGH);
  digitalWrite(C, HIGH);
}

void num8(){
  digitalWrite(A, HIGH);
  digitalWrite(B, HIGH);
  digitalWrite(F, HIGH);
  digitalWrite(E, HIGH);
  digitalWrite(D, HIGH);
  digitalWrite(C, HIGH);
  digitalWrite(G, HIGH);
}

void num9(){
  digitalWrite(A, HIGH);
  digitalWrite(B, HIGH);
  digitalWrite(G, HIGH);
  digitalWrite(F, HIGH);
  digitalWrite(D, HIGH);
  digitalWrite(C, HIGH);
}

void puntino(){
  digitalWrite(Dp, HIGH);
}

void spegni(){
  digitalWrite(A, LOW);
  digitalWrite(B, LOW);
  digitalWrite(G, LOW);
  digitalWrite(E, LOW);
  digitalWrite(D, LOW);
  digitalWrite(C, LOW);
  digitalWrite(F, LOW);
  digitalWrite(Dp, LOW);
}

//Il loop resta vuoto perchè lo svolgiamo già nel file Python

void loop() {
  // put your main code here, to run repeatedly:

}`,

    codePreviewPy:
      `#importiamo le librerie
import time

from arduino.app_utils import App
from arduino.app_utils import Bridge
from arduino.app_bricks.streamlit_ui import st

#creiamo la pagina web usando Streamlit

st.title("Display a 7 Segmenti!")
st.write("Clicca i pulsanti per generare numeri")

if st.button("Disegna 1"):
    Bridge.call("num1")
    st.success("Resterà per 5 secondi")
    time.sleep(5)
    
if st.button("Disegna 2"):
    Bridge.call("num2")
    st.success("Resterà per 5 secondi")
    time.sleep(5)
    
if st.button("Disegna 3"):
    Bridge.call("num3")
    st.success("Resterà per 5 secondi")
    time.sleep(5)
    
if st.button("Disegna 4"):
    Bridge.call("num4")
    st.success("Resterà per 5 secondi")
    time.sleep(5)
    
if st.button("Disegna 5"):
    Bridge.call("num5")
    st.success("Resterà per 5 secondi")
    time.sleep(5)

if st.button("Disegna 6"):
    Bridge.call("num6")
    st.success("Resterà per 5 secondi")
    time.sleep(5)

if st.button("Disegna 7"):
    Bridge.call("num7")
    st.success("Resterà per 5 secondi")
    time.sleep(5)

if st.button("Disegna 8"):
    Bridge.call("num8")
    st.success("Resterà per 5 secondi")
    time.sleep(5)

if st.button("Disegna 9"):
    Bridge.call("num9")
    st.success("Resterà per 5 secondi")
    time.sleep(5)

if st.button("Mostra puntino"):
    Bridge.call("puntino")
    st.success("Resterà per 5 secondi")
    time.sleep(5)


Bridge.call("spegni")`,
  },
  {
    id: "stickman",
    title: "Animating a Stickman in the LED Matrix",
    desc: "Frame Structure to Create an Animation",
    tags: ["MATRIX","LED","EASY"],
    requires: "UNO Q, Cavo USB-C",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/stickman/MatrixAnimation.zip",
    preview: "apps/stickman/preview.png",
    badge: "FEATURED",
    demo: "https://www.youtube.com/watch?v=jkG8Zr1GLo0",
    downloads: 462,
    level: "beginner",
    estTime: "5 min", 
    complexity: "Easy",
    codePreviewCpp:
      `#include <Arduino_LED_Matrix.h>
#include "frame.h"
//definiamo la matrice
Arduino_LED_Matrix matrix;

void setup() {
  // put your setup code here, to run once:
  // iniziamo la matrice
  matrix.begin();
  matrix.setGrayscaleBits(3);

}

void loop() {
  //disegnamo l'animazione frame by frame
  matrix.draw(frame1);
  delay(500);
  matrix.draw(frame2);
  delay(500);
  matrix.draw(frame3);
  delay(500);
  matrix.draw(frame4);
  delay(500);
  matrix.draw(frame5);
  delay(500);
}`,
   codePreviewPy:
     `import time

from arduino.app_utils import App

print("Hello world!")


def loop():
    """This function is called repeatedly by the App framework."""
    # You can replace this with any code you want your App to run repeatedly.
    time.sleep(10)


# See: https://docs.arduino.cc/software/app-lab/tutorials/getting-started/#app-run
App.run(user_loop=loop)`
  },
  {
    id: "reaction-time-test",
    title: "Reaction Time Test",
    desc: "Create a WEB page where you can start the test and write how long it takes for you to react.",
    tags: ["WEB","LED","GAME"],
    requires: "UNO Q, Resistori, LED, Fotoresistore",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/reaction-time-test/ReactionTimeTest.zip",
    preview: "apps/reaction-time-test/preview.png",
    badge: "FEATURED",
    demo: "https://www.youtube.com/watch?v=7TkriRXS7Pw",
    downloads: 213,
    level: "beginner",
    estTime: "20 min", 
    complexity: "Medium",
    codePreviewCpp:
      `// librerie
#include <Arduino_RouterBridge.h>

// variabili

int led_rosso = 4;
int led_verde = 3;

// funzioni

int valore_sensore(){
  return analogRead(A0);
}

void ledverde(){
  digitalWrite(led_verde, HIGH);
}

void ledverde_off(){
  digitalWrite(led_verde, LOW);
}

void ledrosso(){
  digitalWrite(led_rosso, HIGH);
}

void ledrosso_off(){
  digitalWrite(led_rosso, LOW);
}

void setup() {
  // put your setup code here, to run once:
  Bridge.begin();
  
  // dichiariamo i pin
  
  pinMode(led_verde, OUTPUT);
  pinMode(led_rosso, OUTPUT);

  // trasferiamo le funzioni nel file py

  Bridge.provide("ledverde", ledverde);
  Bridge.provide("ledverde_off", ledverde_off);
  Bridge.provide("ledrosso", ledrosso);
  Bridge.provide("ledrosso_off", ledrosso_off);
  Bridge.provide("valore_sensore", valore_sensore);
}

void loop() {
  // put your main code here, to run repeatedly:

}`,
    codePreviewPy:
      `# librerie
import time
import random
from arduino.app_utils import App, Bridge
from arduino.app_bricks.streamlit_ui import st

# sito web

st.title("Prova i tuoi Tempi di Reazione")

if st.button("Avvia Prova"):
    Bridge.call("ledrosso")

    delay = random.randint(1, 5)
    st.write("Tieniti pronto, inizierà a breve!")
    time.sleep(delay)

    Bridge.call("ledrosso_off")
    Bridge.call("ledverde")

    start = time.time()

    while True:
        valore = Bridge.call("valore_sensore")
        
        # Debug sistem
        # Se attivato printa il valore della fotoresistenza
        #st.write(f"Valore LDR: {valore}")
        
        if valore <= 250:
            end = time.time()
            Bridge.call("ledverde_off")
            break

        time.sleep(0.05)

    reazione = end - start
    st.success(f"Tempo di rezione: {reazione:.3f} secondi")`,
  },
  {
    id: "buzzer",
    title: "Melody via WEB page",
    desc: "Create a WEB page where you can choose from a few selected melodies.",
    tags: ["WEB","BUZZER","MUSIC"],
    requires: "UNO Q, Cables, Buzzer",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/buzzer/Melodie.zip",
    preview: "apps/buzzer/preview.png",
    badge: "TOP",
    date:"2026/02/20",
    downloads: 253,
    level: "advanced",
    demo: "https://www.youtube.com/watch?v=hVKk1X4WMYU",
    estTime: "30 min", 
    complexity: "Hard",
    codePreviewCpp:
      `#include <Arduino_RouterBridge.h>
#include "melody.h"

int pinBuzzer = 9;

// ==========================================================
// 1) MELODIE
// ==========================================================

int melodyMerryChristmas[] = {
  NOTE_B3,
  NOTE_F4, NOTE_F4, NOTE_G4, NOTE_F4, NOTE_E4,
  NOTE_D4, NOTE_D4, NOTE_D4,
  NOTE_G4, NOTE_G4, NOTE_A4, NOTE_G4, NOTE_F4,
  NOTE_E4, NOTE_E4, NOTE_E4,
  NOTE_A4, NOTE_A4, NOTE_B4, NOTE_A4, NOTE_G4,
  NOTE_F4, NOTE_D4, NOTE_B3, NOTE_B3,
  NOTE_D4, NOTE_G4, NOTE_E4,
  NOTE_F4
};

int timeMerryChristmas[] = {
  4,
  4, 8, 8, 8, 8,
  4, 4, 4,
  4, 8, 8, 8, 8,
  4, 4, 4,
  4, 8, 8, 8, 8,
  4, 4, 8, 8,
  4, 4, 4,
  2
};

int melodyPirati[] = {
   NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
   NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
   NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
   NOTE_A4, NOTE_G4, NOTE_A4, 0,

   NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
   NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
   NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
   NOTE_A4, NOTE_G4, NOTE_A4, 0,

   NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
   NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,
   NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,
   NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,

   NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
   NOTE_D5, NOTE_E5, NOTE_A4, 0,
   NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,
   NOTE_C5, NOTE_A4, NOTE_B4, 0,

   NOTE_A4, NOTE_A4,
   NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
   NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
   NOTE_A4, NOTE_G4, NOTE_A4, 0,

   NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
   NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
   NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
   NOTE_A4, NOTE_G4, NOTE_A4, 0,

   NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
   NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,
   NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,
   NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,

   NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
   NOTE_D5, NOTE_E5, NOTE_A4, 0,
   NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,
   NOTE_C5, NOTE_A4, NOTE_B4, 0,

   NOTE_E5, 0, 0, NOTE_F5, 0, 0,
   NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,
   NOTE_D5, 0, 0, NOTE_C5, 0, 0,
   NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4,

   NOTE_E5, 0, 0, NOTE_F5, 0, 0,
   NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,
   NOTE_D5, 0, 0, NOTE_C5, 0, 0,
   NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4
};

int melodySuperMario[] = {
  NOTE_E7, NOTE_E7, 0, NOTE_E7,
  0, NOTE_C7, NOTE_E7, 0,
  NOTE_G7, 0, 0,  0,
  NOTE_G6, 0, 0, 0,

  NOTE_C7, 0, 0, NOTE_G6,
  0, 0, NOTE_E6, 0,
  0, NOTE_A6, 0, NOTE_B6,
  0, NOTE_AS6, NOTE_A6, 0,

  NOTE_G6, NOTE_E7, NOTE_G7,
  NOTE_A7, 0, NOTE_F7, NOTE_G7,
  0, NOTE_E7, 0, NOTE_C7,
  NOTE_D7, NOTE_B6, 0, 0,

  NOTE_C7, 0, 0, NOTE_G6,
  0, 0, NOTE_E6, 0,
  0, NOTE_A6, 0, NOTE_B6,
  0, NOTE_AS6, NOTE_A6, 0,

  NOTE_G6, NOTE_E7, NOTE_G7,
  NOTE_A7, 0, NOTE_F7, NOTE_G7,
  0, NOTE_E7, 0, NOTE_C7,
  NOTE_D7, NOTE_B6, 0, 0
};

int melodyHappy[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

int timeHappy[] = {
  4, 4, 2, 2, 2, 1, /*line 1*/
  4, 4, 2, 2, 2, 1, /*line 2*/
  4, 4, 2, 2, 4, 4, 2, 1, /*line 3*/
  4, 4, 2, 2, 2, 1
};

int timeSuperMario[] = {
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,

  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,

  9, 9, 9,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,

  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,

  9, 9, 9,
  12, 12, 12, 12,
  12, 12, 12, 12,
  12, 12, 12, 12,
};

int timePirati[] = {
   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 3, 8,

   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 3, 8,

   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 8, 4, 8,

   8, 8, 4, 8, 8,
   4, 8, 4, 8,
   8, 8, 4, 8, 8,
   8, 8, 3, 3,

   4, 8,
   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 3, 8,

   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 3, 8,

   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 4, 8, 8,
   8, 8, 8, 4, 8,

   8, 8, 4, 8, 8,
   4, 8, 4, 8,
   8, 8, 4, 8, 8,
   8, 8, 3, 3,

   4, 8, 3, 4, 8, 3,
   8, 8, 8, 8, 8, 8, 8, 8, 3,
   4, 8, 3, 4, 8, 3,
   8, 8, 8, 8, 8, 2,

   4, 8, 3, 4, 8, 3,
   8, 8, 8, 8, 8, 8, 8, 8, 3,
   4, 8, 3, 4, 8, 3,
   8, 8, 8, 8, 8, 2
};

enum SongId { NONE, HAPPY, PIRATI, MARIO, CHRISTMAS };

SongId currentSong = NONE;
int noteIndex = 0;
unsigned long nextNoteAt = 0;

// Puntatori alla canzone corrente (melodia + timing)
const int* curMelody = nullptr;
const int* curTime = nullptr;
int curLen = 0;

void startSong(SongId id, const int* melody, const int* timing, int len)
{
  // Se parte una canzone nuova, interrompiamo quella vecchia
  noTone(pinBuzzer);

  currentSong = id;
  curMelody = melody;
  curTime = timing;
  curLen = len;
  noteIndex = 0;
  nextNoteAt = 0; // suona subito
}

void stopSong()
{
  noTone(pinBuzzer);
  currentSong = NONE;
  curMelody = nullptr;
  curTime = nullptr;
  curLen = 0;
  noteIndex = 0;
  nextNoteAt = 0;
}

void updatePlayer()
{
  // Se non stiamo suonando nulla, non fare niente
  if (currentSong == NONE || !curMelody || !curTime || curLen <= 0) return;

  unsigned long now = millis();
  if (now < nextNoteAt) return; // aspetta il momento giusto

  // Fine canzone
  if (noteIndex >= curLen) {
    stopSong();
    return;
  }

  int note = curMelody[noteIndex];
  int divider = curTime[noteIndex];

  // Stesso calcolo che avevi prima, ma senza delay()
  int noteDuration = 1000 / divider;
  int pauseBetween = (int)(noteDuration * 1.30);

  if (note == 0) {
    // 0 = pausa (silenzio)
    noTone(pinBuzzer);
  } else {
    tone(pinBuzzer, note, noteDuration);
  }

  nextNoteAt = now + pauseBetween;
  noteIndex++;
}

void cmd_happy() {
  startSong(HAPPY, melodyHappy, timeHappy, (int)(sizeof(melodyHappy) / sizeof(int)));
}

void cmd_pirati() {
  startSong(PIRATI, melodyPirati, timePirati, (int)(sizeof(melodyPirati) / sizeof(int)));
}

void cmd_mario() {
  startSong(MARIO, melodySuperMario, timeSuperMario, (int)(sizeof(melodySuperMario) / sizeof(int)));
}

void cmd_christmas() {
  startSong(CHRISTMAS, melodyMerryChristmas, timeMerryChristmas, (int)(sizeof(melodyMerryChristmas) / sizeof(int)));
}

void cmd_stop() {
  stopSong();
}

void setup() {
  pinMode(pinBuzzer, OUTPUT);

  Bridge.begin();
  Bridge.provide("happy", cmd_happy);
  Bridge.provide("pirati", cmd_pirati);
  Bridge.provide("mario", cmd_mario);
  Bridge.provide("christmas", cmd_christmas);
  Bridge.provide("stop", cmd_stop); 
}

void loop() {
  updatePlayer();
}`,
    codePreviewPy:
      `from arduino.app_utils import Bridge
from arduino.app_bricks.streamlit_ui import st

st.title("Seleziona la canzone che vuoi!")
st.write("Clicca un pulsante per far partire la canzone")

# Piccolo helper per mandare un comando e mostrare feedback
def play(cmd: str, label: str):
    Bridge.call(cmd)
    st.success(f"▶️ Partita: {label}")

def stop():
    Bridge.call("stop")
    st.info("⏹️ Stop!")

col1, col2 = st.columns(2)

with col1:
    if st.button("Pirati dei Caraibi"):
        play("pirati", "Pirati dei Caraibi")

    if st.button("Buon Compleanno"):
        play("happy", "Buon Compleanno")

with col2:
    if st.button("Buon Natale"):
        play("christmas", "Buon Natale")

    if st.button("Super Mario"):
        play("mario", "Super Mario")

st.divider()

# Bottone STOP (opzionale ma utilissimo per la demo)
if st.button("STOP (ferma la canzone)"):
    stop() `,
  },
  {  
    id: "led-rgb",
    title: "Controll an RGB LED",
    desc: "Uses 3 potentiometers to controll the RED/GREEN/BLUE light of an RGB LED.",
    tags: ["LED-RGB","POTENTIOMETERS","COOL"],
    requires: "UNO Q, Cables, LED-RGB, Potentiometers, resistors.",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/led-rgb/LED%20RGB.zip",
    preview: "apps/led-rgb/preview.png",
    badge: "COOL",
    new: true,
    date:"2026/02/22",
    downloads: 161,
    level: "intermediate",
    demo: "https://www.youtube.com/watch?v=RBAsdje4Yrw",
    estTime: "15 min", 
    complexity: "Easy",
    codePreviewCpp:
      `int rosso = 10;
int verde = 9;
int blu = 6;

int valoreR(){
  return analogRead(A0);
}

int valoreV(){
  return analogRead(A1);
}

int valoreB(){
  return analogRead(A2);
}

void led(){
  int colorerosso = map(valoreR(), 0, 1023, 0, 255);
  int coloreverde = map(valoreV(), 0, 1023, 0, 255);
  int coloreblu = map(valoreB(), 0, 1023, 0, 255);

  analogWrite(rosso, colorerosso);
  analogWrite(verde, coloreverde);
  analogWrite(blu, coloreblu);
}

void setup() {
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:
  led();
  delay(50);
}`,
   codePreviewPy:
     `import time

from arduino.app_utils import App

print("Hello world!")


def loop():
    """This function is called repeatedly by the App framework."""
    # You can replace this with any code you want your App to run repeatedly.
    time.sleep(10)


# See: https://docs.arduino.cc/software/app-lab/tutorials/getting-started/#app-run
App.run(user_loop=loop) `,
  }
];
