input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
