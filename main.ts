input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
function die () {
    if (hiram.isTouching(villano_1)) {
        villano_1.delete()
    }
    if (hiram.isTouching(villano_3)) {
        villano_3.delete()
    }
    if (hiram.isTouching(villano_2)) {
        villano_2.delete()
    }
}
let villano_3: game.LedSprite = null
let villano_2: game.LedSprite = null
let villano_1: game.LedSprite = null
let hiram: game.LedSprite = null
hiram = game.createSprite(0, 2)
villano_1 = game.createSprite(randint(1, 4), randint(0, 4))
villano_2 = game.createSprite(randint(1, 4), randint(0, 4))
villano_3 = game.createSprite(randint(1, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        hiram.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        die()
    }
    while (input.buttonIsPressed(Button.B)) {
        hiram.change(LedSpriteProperty.X, 1)
        basic.pause(100)
        die()
    }
    while (input.buttonIsPressed(Button.A)) {
        hiram.change(LedSpriteProperty.X, -1)
        basic.pause(100)
        die()
    }
    while (input.logoIsPressed()) {
        hiram.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        die()
    }
})
loops.everyInterval(3000, function () {
    villano_1.set(LedSpriteProperty.Y, randint(0, 4))
    villano_1.set(LedSpriteProperty.X, randint(0, 4))
    villano_2.set(LedSpriteProperty.Y, randint(0, 4))
    villano_2.set(LedSpriteProperty.X, randint(0, 4))
    villano_3.set(LedSpriteProperty.Y, randint(0, 4))
    villano_3.set(LedSpriteProperty.X, randint(0, 4))
})
