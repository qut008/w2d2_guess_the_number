# Guess The Number

> Open this page at [https://qut008.github.io/w2d2_guess_the_number/](https://qut008.github.io/w2d2_guess_the_number/)

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/qut008/w2d2_guess_the_number** and click import

## The Idea

Guess the number is a simple game where the host thinks of a number and the player tries to guess it. If the player guesses correctly, they win. If they guess incorrectly, the host will tell them if they need to go higher or lower.

This project is a micro:bit version of the game, where one micro:bit is the host and the other is the player.

## Running the game

1. On makecode.microbit.org, import the project from the URL: 
2. Press the `Logo` button to start the host micro:bit.
3. The host micro:bit will display a random number between 0 and 9, if you want to adjust the number, press the `A` button to go lower or the `B` button to go higher.
4. Confirm the number by pressing the `Logo` button again, this will initialise the player micro:bit.
5. On the player micro:bit, press the `A` button to go lower or the `B` button to go higher, and press the `Logo` button to confirm your guess.
6. The host micro:bit will display if the player needs to go higher or lower.
7. After receiving the feedback, the player micro:bit will provide you a suggestion for your next guess.
8. Repeat steps 5-7 until the player guesses the correct number, then the host micro:bit will display a tick.

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
