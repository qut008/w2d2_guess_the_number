# Guess The Number

> Open this page at [https://qut008.github.io/w2d2_guess_the_number/](https://qut008.github.io/w2d2_guess_the_number/)

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/qut008/w2d2_guess_the_number** and click import

## The Idea

Guess the number is a simple game where the host thinks of a number and the player tries to guess it. If the player guesses correctly, they win. If they guess incorrectly, the host will tell them if they need to go higher or lower.

This project is a micro:bit version of the game, where one micro:bit is the host and the other is the player. **You do not need to understand how the code works yet, but this is a good example of what you can do for your assignment later.**

## Running the game

1. Press the `Logo` button to start the host micro:bit.
2. The host micro:bit will display a random number between 0 and 9, if you want to adjust the number, press the `A` button to go lower or the `B` button to go higher.
3. Confirm the number by pressing the `Logo` button again, this will initialise the player micro:bit (you should see a heart icon, then a number).
4. On the second micro:bit, press the `A` button to go lower or the `B` button to go higher, and press the `Logo` button to confirm your guess.
5. The host micro:bit will display if the player needs to go higher or lower.
6. After receiving the feedback, the player micro:bit will provide you a suggestion for your next guess.
7. Repeat steps 5-7 until the player guesses the correct number, then the host micro:bit will display a tick.

## Questions

### On average, how many guesses does it take to guess the correct number if you guess randomly?

<details>
<summary markdown="span">View answer</summary>

5 guesses, because there are 10 numbers to choose from, and 10/2 = 5.

</details>

### Is there a better way to guess the number, and if so, how many guesses does it take?

<details>
<summary markdown="span">View answer</summary>

Yes, if you use the following simple strategy, you can guess the number in an average of 2.3 guesses.

1. Guess the middle number (4)
2. If the host says go higher, guess the middle number between 5 and 9 (7)
3. If the host says go lower, guess the middle number between 0 and 3 (1)
4. Repeat steps 2 and 3 until you guess the correct number.

</details>

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
