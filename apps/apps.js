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
    level: "beginner"
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
    downloads: 26,
    level: "intermediate",
    demo: "https://www.youtube.com/watch?v=RBAsdje4Yrw",
  }
];
