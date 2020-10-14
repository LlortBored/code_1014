basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(index, X)
            basic.pause(200)
        }
    }
})
