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
  },
  {
    id: "allarme-incendio",
    title: "Fire Alarm",
    desc: "When the heat around the thermo resistor increases, an alarm starts",
    tags: ["THERMO","LED","USEFUL"],
    requires: "UNO Q, LED-RGB, Buzzer, Resistors, ThermoResistor",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/allarme-incendio/Allarme%20antincendio.zip",
    preview: "apps/allarme-incendio/preview.png",
    badge: "CRAZY",
    downloads: 24,
    level: "advanced",
    estTime: "30 min",
    complexity: "Medium-Hard",
    featured: true,
    demo: "https://www.youtube.com/watch?v=f91Vk2e5lR0",
    date: "2026/03/01",

    codePreviewCpp:
      `#include <Arduino_RouterBridge.h>

const int RED = 3;
const int GREEN = 4;
const int BLUE = 5;
const int BUZZER = 8;
const int TEMP_PIN = A0;

int sogliaWarning = 35;
int sogliaAllarme = 45;

int tempRaw() {
  return analogRead(TEMP_PIN);
}

float tempC_guess() {
  float v = tempRaw() * (5.0f / 1023.0f);
  return (v - 0.5f) * 100.0f;
}

float temperatura() { return tempC_guess(); }
int temperatura_raw() { return tempRaw(); }

void setColor(int r, int g, int b) {
  digitalWrite(RED, r);
  digitalWrite(GREEN, g);
  digitalWrite(BLUE, b);
}

void setup() {
  pinMode(RED, OUTPUT);
  pinMode(GREEN, OUTPUT);
  pinMode(BLUE, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  Bridge.begin();
  Bridge.provide("temperatura", temperatura);
  Bridge.provide("temperatura_raw", temperatura_raw);
}

void loop() {
  Bridge.update();

  static unsigned long lastLogic = 0;
  static bool buzOn = false;
  static unsigned long lastBeep = 0;

  unsigned long now = millis();
  
  if (now - lastLogic >= 200) {
    lastLogic = now;

    float t = tempC_guess();

    if (t < sogliaWarning) {
      setColor(LOW, HIGH, LOW);
      noTone(BUZZER);
      buzOn = false;
    }
    else if (t < sogliaAllarme) {
      setColor(HIGH, HIGH, LOW);
      noTone(BUZZER);
      buzOn = false;
    }
    else {
      setColor(HIGH, LOW, LOW);
    }
  }
  
  float t = tempC_guess();
  if (t >= sogliaAllarme) {
    if (now - lastBeep >= 250) {   
      lastBeep = now;
      buzOn = !buzOn;
      if (buzOn) tone(BUZZER, 1000);
      else noTone(BUZZER);
    }
  }
}`,
    codePreviewPy:
      ` import time
from arduino.app_utils import App, Bridge

def loop():
    try:
        t = Bridge.call("temperatura", timeout=2)
        raw = Bridge.call("temperatura_raw", timeout=2)
        print("T =", t, " | RAW =", raw)
    except TimeoutError:
        print("⚠️ timeout (ritento...)")
    time.sleep(0.5)

App.run(user_loop=loop)`
  },
  {
    id: "serratura",
    title: "Lock With PassWord",
    desc: "Create your password and when you press the buttons, if the sequence of pressing them is equal to the password, start a sound and light up a led",
    tags: ["PASSWORD","LED","USEFUL"],
    requires: "UNO Q, LEDS, Buzzer, Resistors, Buttons",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/allarme-incendio/Allarme%20antincendio.zip",
    preview: "apps/serratura/preview.png",
    badge: "CRAZY",
    downloads: 71,
    level: "intermedie",
    estTime: "20 min",
    complexity: "Medium",
    featured: true,
    demo: "https://youtu.be/f5s2xldslpc",
    date: "2026/03/04",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/serratura/Serratura.zip",
    codePreviewCpp:
      ` int ledVerde = 9;
int ledRosso = 10;
int buzzer = 8;

int password = 4213;   // Change this number to change the order of the inputs (change password)
int input = 0;

void setup() {

  pinMode(btn1, INPUT_PULLUP);
  pinMode(btn2, INPUT_PULLUP);
  pinMode(btn3, INPUT_PULLUP);
  pinMode(btn4, INPUT_PULLUP);

  pinMode(ledVerde, OUTPUT);
  pinMode(ledRosso, OUTPUT);
  pinMode(buzzer, OUTPUT);
}

void loop() {

  if(digitalRead(btn1) == LOW){
    tone(buzzer, 1000, 100);  
    input = input * 10 + 1;
    delay(300);
  }

  if(digitalRead(btn2) == LOW){
    tone(buzzer, 1000, 100);
    input = input * 10 + 2;
    delay(300);
  }

  if(digitalRead(btn3) == LOW){
    tone(buzzer, 1000, 100);
    input = input * 10 + 3;
    delay(300);
  }

  if(digitalRead(btn4) == LOW){
    tone(buzzer, 1000, 100);
    input = input * 10 + 4;
    delay(300);
  }

  if(input > 999){   

    if(input == password){

      digitalWrite(ledVerde, HIGH);
      tone(buzzer, 1500);
      delay(3000);   

      digitalWrite(ledVerde, LOW);
      noTone(buzzer);

    }else{

      digitalWrite(ledRosso, HIGH);
      tone(buzzer, 200);
      delay(3000);   

      digitalWrite(ledRosso, LOW);
      noTone(buzzer);
    }

    input = 0;
  }

}
`,
    codePreviewPy:
      ` import time

from arduino.app_utils import App

print("Hello world!")


def loop():
    """This function is called repeatedly by the App framework."""
    # You can replace this with any code you want your App to run repeatedly.
    time.sleep(10)


# See: https://docs.arduino.cc/software/app-lab/tutorials/getting-started/#app-run
App.run(user_loop=loop)
`,
  },
  {
    id: "ultrasonic",
    title: "Detect objects with UltraSonic Sensor",
    desc: "It uses an Ultrasonic sensor mounted on a servomotor to detect the distance of objects in front of it.",
    tags: ["ULTRASONIC","SERVO","USEFULL"],
    requires: "UNO Q, Servo, UltrSonic Sensor, Cables",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/allarme-incendio/Allarme%20antincendio.zip",
    preview: "apps/ultrasonic/preview.png",
    badge: "CRAZY",
    downloads: 141,
    level: "intermedie",
    estTime: "25 min",
    complexity: "Medium",
    featured: true,
    date: "2026/03/08",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/ultrasonic/UltraSuoni.zip",
    codePreviewCpp:
      `#include <Arduino_RouterBridge.h>
#include <Servo.h>

Servo myservo;

const int trigPin = 9;
const int echoPin = 10;
const int servoPin = 3;

int grado = 0;
int direzione = 1;  // 1 = avanti, -1 = indietro

unsigned long lastServoMillis = 0;
unsigned long lastUltraMillis = 0;

void setup() {
  Bridge.begin();
  Monitor.begin(9600);

  myservo.attach(servoPin);

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  servo();
  ultra();
}

void servo() {
  if (millis() - lastServoMillis >= 50) {
    lastServoMillis = millis();

    myservo.write(grado);
    grado += direzione;

    if (grado >= 180) {
      grado = 180;
      direzione = -1;
    }

    if (grado <= 0) {
      grado = 0;
      direzione = 1;
    }
  }
}

void ultra() {
  if (millis() - lastUltraMillis >= 200) {
    lastUltraMillis = millis();

    long durata;
    float distanza;

    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);

    durata = pulseIn(echoPin, HIGH, 30000);

    if (durata == 0) {
      Monitor.println("Fuori portata o nessun segnale");
    } else {
      distanza = durata * 0.0343 / 2.0;

      Monitor.print("Distanza: ");
      Monitor.print(distanza);
      Monitor.println(" cm");
    }
  }
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
App.run(user_loop=loop)`,
  },
  {
    id: "pong",
    title: "PONG Videogame recreated on an Arduino",
    desc: "Turn the potentiometer to swing the racket and hit the ball. Good luck!",
    tags: ["POTENTIOMETER","BUZZER","GAME","WEB"],
    requires: "UNO Q, LED, Buzzer, Potentiometer",
    zip: "https://github.com/gerry-tech/gerry-uno-q-apps/raw/refs/heads/main/apps/pong/PONG.zip",
    preview: "apps/pong/preview.png",
    badge: "CRAZY",
    demo: "https://www.youtube.com/watch?v=CTpVdmDBGTE",
    downloads: 564,
    level: "advanced",
    estTime: "40 min",
    complexity: "Hard",
    featured: true,
    new: true,
    date: "2026/03/15",
    codePreviewCpp: `#include <Arduino_RouterBridge.h>

const int led = 3;
const int buzzer = 8;

int valpot(){
  return analogRead(A0);
}

void win(){
  tone(buzzer, 1000);
  digitalWrite(led, HIGH);
}

void off(){
  noTone(buzzer);
  digitalWrite(led, LOW);
}

void setup() {
  // put your setup code here, to run once:
  Bridge.begin();
  pinMode(led, OUTPUT);
  pinMode(buzzer, OUTPUT);
  Bridge.provide("valpot", valpot);
  Bridge.provide("win", win);
  Bridge.provide("off", off);
}

void loop() {
  // put your main code here, to run repeatedly:

} `,
    codePreviewPy: `import os
from arduino.app_utils import App, Bridge
from arduino.app_bricks.web_ui import WebUI

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_DIR = os.path.normpath(os.path.join(BASE_DIR, "..", "web"))

ui = WebUI(
    addr="0.0.0.0",
    port=7000,
    ui_path_prefix="",
    api_path_prefix="/api",
    assets_dir_path=ASSETS_DIR,
    use_tls=False,
)


def api_get_pot():
    try:
        value = int(Bridge.call("valpot"))
        return {"value": value}
    except Exception as e:
        return {"value": 0, "error": str(e)}


def api_reset_game():
    try:
        Bridge.call("off")
        return {"ok": True}
    except Exception as e:
        return {"ok": False, "error": str(e)}


def api_player_win():
    try:
        Bridge.call("win")
        return {"ok": True}
    except Exception as e:
        return {"ok": False, "error": str(e)}


ui.expose_api("GET", "/pot", api_get_pot)
ui.expose_api("POST", "/reset", api_reset_game)
ui.expose_api("POST", "/win", api_player_win)

ui.start()

print("Web UI locale:", ui.local_url)
print("Web UI esterna:", ui.url)

App.run()
 `,
    codePreviewJs: `const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const playerScoreEl = document.getElementById("playerScore");
const cpuScoreEl = document.getElementById("cpuScore");
const resetBtn = document.getElementById("resetBtn");
const statusText = document.getElementById("statusText");

let playerScore = 0;
let cpuScore = 0;
let lastPotValue = 0;
let gameStarted = false;
let lastWinTrigger = 0;
let lastPotReadOk = false;

const WIN_TRIGGER_COOLDOWN_MS = 700;
const paddleWidth = 12;
const paddleHeight = 100;
const ballSize = 14;

const player = {
  x: 20,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight
};

const cpu = {
  x: canvas.width - 20 - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  speed: 3.5
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: ballSize,
  speedX: 5,
  speedY: 3.2
};

function drawRect(x, y, w, h, color = "white") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawBall() {
  ctx.fillStyle = "#00e5ff";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size / 2, 0, Math.PI * 2);
  ctx.fill();
}

function drawNet() {
  for (let i = 0; i < canvas.height; i += 30) {
    drawRect(canvas.width / 2 - 2, i, 4, 18, "white");
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawNet();
  drawRect(player.x, player.y, player.width, player.height, "#00ff99");
  drawRect(cpu.x, cpu.y, cpu.width, cpu.height, "#ff4444");
  drawBall();
}

function updateStatus(text, isError = false) {
  statusText.textContent = text;
  statusText.style.color = isError ? "#ff6666" : "#9fffd0";
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function resetBall(direction = null) {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;

  const dir = direction ?? (Math.random() > 0.5 ? 1 : -1);
  ball.speedX = dir * (4.8 + Math.random() * 1.2);
  ball.speedY = (Math.random() > 0.5 ? 1 : -1) * (2.5 + Math.random() * 2.2);
}

function bounceFromPaddle(paddle, isPlayer) {
  const relativeIntersectY = (ball.y - (paddle.y + paddle.height / 2)) / (paddle.height / 2);
  ball.speedY = relativeIntersectY * 5.5;

  const speedBoost = 0.35;
  const nextSpeedX = Math.abs(ball.speedX) + speedBoost;
  ball.speedX = isPlayer ? nextSpeedX : -nextSpeedX;

  ball.x = isPlayer
    ? paddle.x + paddle.width + ball.size / 2
    : paddle.x - ball.size / 2;
}

async function triggerWinEffect() {
  const now = Date.now();
  if (now - lastWinTrigger < WIN_TRIGGER_COOLDOWN_MS) return;
  lastWinTrigger = now;

  try {
    await fetch("/api/win", { method: "POST" });
  } catch (err) {
    console.log("Errore chiamata win:", err);
  }
}

async function turnOffEffects() {
  try {
    await fetch("/api/reset", { method: "POST" });
  } catch (err) {
    console.log("Errore reset API:", err);
  }
}

function handleScore(side) {
  if (side === "player") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    triggerWinEffect();
    resetBall(-1);
    updateStatus("Punto giocatore!");
  } else {
    cpuScore++;
    cpuScoreEl.textContent = cpuScore;
    turnOffEffects();
    resetBall(1);
    updateStatus("Punto CPU");
  }
}

function updateCpu() {
  const cpuCenter = cpu.y + cpu.height / 2;
  const target = ball.y;
  const delta = target - cpuCenter;

  if (Math.abs(delta) > cpu.speed) {
    cpu.y += Math.sign(delta) * cpu.speed;
  } else {
    cpu.y += delta;
  }

  cpu.y = clamp(cpu.y, 0, canvas.height - cpu.height);
}

function update() {
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  if (ball.y - ball.size / 2 <= 0) {
    ball.y = ball.size / 2;
    ball.speedY *= -1;
  }

  if (ball.y + ball.size / 2 >= canvas.height) {
    ball.y = canvas.height - ball.size / 2;
    ball.speedY *= -1;
  }

  updateCpu();

  if (
    ball.x - ball.size / 2 <= player.x + player.width &&
    ball.x > player.x &&
    ball.y >= player.y &&
    ball.y <= player.y + player.height
  ) {
    bounceFromPaddle(player, true);
    turnOffEffects();
  }

  if (
    ball.x + ball.size / 2 >= cpu.x &&
    ball.x < cpu.x + cpu.width &&
    ball.y >= cpu.y &&
    ball.y <= cpu.y + cpu.height
  ) {
    bounceFromPaddle(cpu, false);
  }

  if (ball.x + ball.size < 0) {
    handleScore("cpu");
  }

  if (ball.x - ball.size > canvas.width) {
    handleScore("player");
  }
}

async function readPotValue() {
  try {
    const res = await fetch("/api/pot", { cache: "no-store" });
    const data = await res.json();
    const rawValue = Number(data.value);

    if (!Number.isFinite(rawValue)) {
      throw new Error("Valore potenziometro non valido");
    }

    lastPotValue = clamp(rawValue, 0, 1023);
    const mappedY = (lastPotValue / 1023) * (canvas.height - player.height);
    player.y = clamp(mappedY, 0, canvas.height - player.height);

    if (!lastPotReadOk) {
      updateStatus("Potenziometro collegato");
    }

    lastPotReadOk = true;
    gameStarted = true;
  } catch (err) {
    if (lastPotReadOk) {
      updateStatus("Errore lettura potenziometro", true);
    }
    lastPotReadOk = false;
    console.log("Errore lettura potenziometro:", err);
  }
}

async function gameLoop() {
  await readPotValue();
  if (gameStarted) {
    update();
  }
  draw();
  requestAnimationFrame(gameLoop);
}

resetBtn.addEventListener("click", async () => {
  playerScore = 0;
  cpuScore = 0;
  playerScoreEl.textContent = "0";
  cpuScoreEl.textContent = "0";
  resetBall();
  await turnOffEffects();
  updateStatus("Partita resettata");
});

resetBall();
draw();
gameLoop();
 `,
    codePreviewCss: `body {
  margin: 0;
  background: #081221;
  font-family: Arial, sans-serif;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
}

h1 {
  margin-bottom: 10px;
}

canvas {
  background: black;
  border: 4px solid #00e5ff;
  display: block;
  margin: 0 auto;
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.2);
}

.score {
  font-size: 30px;
  margin-bottom: 10px;
}

p {
  margin-top: 12px;
  margin-bottom: 8px;
}

button {
  margin-top: 10px;
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.status {
  margin-top: 12px;
  font-size: 14px;
  opacity: 0.95;
}
 `,
    codePreviewHtml: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UNO Q ARCADE</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>UNO Q ARCADE</h1>

    <div class="score">
      <span id="playerScore">0</span> : <span id="cpuScore">0</span>
    </div>

    <canvas id="gameCanvas" width="900" height="500"></canvas>

    <p>Muovi la racchetta con il potenziometro</p>
    <button id="resetBtn">Reset</button>
    <div id="statusText" class="status">Connessione...</div>
  </div>

  <script src="app.js"></script>
</body>
</html> `,
  },
];
