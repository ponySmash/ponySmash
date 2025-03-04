# Pony Smash

## What the hell is this
Pretty sure you know smash or pass, well this is that but with every character in My Little Pony: Friendship is Magic and some extra ones
## Ok but why?
I was bored tbh

## How do I add a character?
### Rules
* **No NSFW images**
* **Image has to clearly indicate the character its refering to**
* **OCs are generally not allowed unless its somewhat known (The living tombstone's OC, Discord human form, Cream Heart, etc)**
* **Style has to be the same as other images (2D, same style as the show/2017 movie), OCs are the only exceptions but it's preferable**
* **Name has to be correct (duh)**
* **Resolution has to be decent (AT LEAST 256x256), if a higher quality version exists please use it**
* **File format has to be `webp` (lowercase extension)**

### Instructions
* EASY! :D
* First you want to fork this repository
* Clone your fork (you can do this and the rest of the steps easily with [GitHub Desktop](https://desktop.github.com/) if you dont know much about git)
* Create a new branch with the name you want
* Add the **WebP** ([how do i convert png to webp?](./CONTRIBUTING.md#images-should-be-in-the-webp-format)) to `public/characters` folder, you are free to put it in the respective folder it should go to, but if you are unsure put it in `unsorted`
* Add the character to the list inside one of the json files in `src/lists/`
   *  `name`: This is what appears above the image
   *  `img`: The path to the image, **ITS CASE SENSITIVE**. Try to follow the same convention as the others
   *  `filly`: Is the character underage?
   *  `eqg`: Is the character/image from Equestria Girls?
   *  `gender`: `"male"`/`"female"`/`null`
* Add, commit, and push the files
* Make a PR (Pull Request) to the branch **`master`**, if you do it to any other branch i will close your PR
* Now your request is for everyone to see, including me :D, so now i can comment on your changes if something is needed, or merge them if everything is fine

## Custom lists
* Read the [wiki for customs list](https://github.com/ponySmash/ponySmash/wiki/Custom-Lists)

## Contributions/Developers
* Read [`CONTRIBUTING.md`](./CONTRIBUTING.md)
* Changes from the `master` branch are available [here](https://master.ponysmash.pages.dev/)

## Special thanks
* @Tanza3D for CSS
