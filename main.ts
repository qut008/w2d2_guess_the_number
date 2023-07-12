radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Heart)
    if (key < receivedNumber) {
        basic.showArrow(ArrowNames.South)
        radio.sendString("down")
    } else if (key > receivedNumber) {
        basic.showArrow(ArrowNames.North)
        radio.sendString("up")
    } else {
        basic.showIcon(IconNames.Yes)
        radio.sendString("correct")
    }
})
input.onButtonPressed(Button.A, function () {
    if (isHost == 1) {
        key = (key - 1) % (max + 1)
        basic.showNumber(key)
    }
    if (isPlayer == 1) {
        guess = (guess - 1) % (max + 1)
        basic.showNumber(guess)
    }
})
function celebrate () {
    range = strip.range(guess + 1, max + 1)
    range.clear()
    range = strip.range(0, guess)
    range.clear()
    basic.showNumber(guess)
}
function initialiseHost () {
    isHost = 1
    key = randint(0, max)
    basic.showNumber(key)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "start") {
        initialisePlayer()
    }
    if (receivedString == "correct") {
        celebrate()
    }
    if (receivedString == "up") {
        makeHigherGuess()
    }
    if (receivedString == "down") {
        makeLowerGuess()
    }
})
input.onButtonPressed(Button.B, function () {
    if (isHost == 1) {
        key = (key + 1) % (max + 1)
        basic.showNumber(key)
    }
    if (isPlayer == 1) {
        guess = (guess + 1) % (max + 1)
        basic.showNumber(guess)
    }
})
function makeHigherGuess () {
    range = strip.range(0, guess + 1)
    range.clear()
    low = guess + 1
    guess = Math.floor((low + high) / 2)
    basic.showNumber(guess)
}
function initialisePlayer () {
    basic.showIcon(IconNames.Heart)
    strip = neopixel.create(DigitalPin.P0, max + 1, NeoPixelMode.RGB_RGB)
    strip.showRainbow(1, 120)
    low = 0
    high = max
    isPlayer = 1
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (isHost + isPlayer == 0) {
        initialiseHost()
    }
    if (isHost == 1) {
        radio.sendString("start")
    }
    if (isPlayer == 1) {
        radio.sendNumber(guess)
    }
})
function makeLowerGuess () {
    range = strip.range(guess, max + 1)
    range.clear()
    high = guess - 1
    guess = Math.floor((low + high) / 2)
    basic.showNumber(guess)
}
let high = 0
let low = 0
let strip: neopixel.Strip = null
let range: neopixel.Strip = null
let guess = 0
let isPlayer = 0
let isHost = 0
let key = 0
let max = 0
radio.setGroup(1)
max = 9
