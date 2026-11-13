if (input.lightLevel() < 100) {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
} else {
    basic.showLeds(`
        . # # . .
        # # . . .
        # # . . .
        # # . . .
        . # # . .
        `)
}
basic.forever(function () {
	
})
