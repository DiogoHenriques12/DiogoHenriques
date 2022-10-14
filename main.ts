basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        # # . # #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # .
        # . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # .
        # . . . .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showIcon(IconNames.Ghost)
    music.playMelody("F E F E B G B C5 ", 120)
    music.playMelody("E G D A E C5 G F ", 120)
})
