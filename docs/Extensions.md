* Extensions is basically a way for a list to depend on another (built-in) list.
* For example the **Default** list depends on the **Community** and **EQG** lists ([here](https://github.com/ponySmash/ponySmash/blob/master/src/Lists.ts#L19)).
* Customs lists can also use this method of depending on other lists for doing lists that expand on already built-in or something similar.

* An example for an extension is right below, with an explanation also below it
```json
{
    "version": 1,
    "list": [
        {
            "name": "Adagio Dazzle (EQG)",
            "img": "characters/eqg/Adagio_Dazzle.webp",
            "gender": "female"
        },
        {
            "name": "Apple Bloom (EQG)",
            "img": "characters/eqg/Apple_Bloom.webp",
            "filly": true,
            "gender": "female"
        },
        {
            "name": "Applejack (EQG)",
            "img": "characters/eqg/Applejack.webp",
            "gender": "female"
        },
        {
            "name": "Aria Blaze (EQG)",
            "img": "characters/eqg/Aria_Blaze.webp",
            "gender": "female"
        },
        {
            "name": "Big McIntosh (EQG)",
            "img": "characters/eqg/Big_McIntosh.webp",
            "gender": "male"
        }
    ],
    "extensions": {
        "appleFamily": {
            "list": "apples",
            "filters": {
                "noEqg": {
                    "logic": {
                        "type": "inList",
                        "charProp": "name",
                        "against": "eqg"
                    },
                    "value": false
                }
            }
        }
    },
    "filters": {}
}
```
* The `extensions` property consists of a key-value pair, in which:
    * Key: extension name
    * Value: extension data

* The extension data provides the parser info about what list to grab from and what filters to apply to that list
    * `list`: The **key** of the built-in list to grab characters from (you can see the list [here](https://github.com/ponySmash/ponySmash/blob/master/src/Lists.ts))
    * `filters`: Filters are the same as lists already use AND YOU USE TOO. More information [here](./Filters.md)
        * ## Extension's filters dont need a `text` value and `value` NEEDS to be `false` for the filter to apply

* Worth noting:
    * Extension's filters apply recursively, meaning if you are extending from a list that also has extensions, those extensions will also run with the specified filters from that list