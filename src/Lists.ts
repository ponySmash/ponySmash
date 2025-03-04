import DefaultList from './lists/default.json';
import AppleFamily from './lists/appleFamily.json';
import Community from './lists/community.json';
import { Character, List } from './types';

// This is only useful for the eqg list, i dont like this
let All = [
    ...DefaultList,
    ...AppleFamily
];

// Remove duplicates using img property, order doesnt matter
All = [...new Map(All.map((v) => [v.img, v])).values()];

const Lists = {
    'default': {
        name: 'Default',
        list: DefaultList as Character[],
        extensions: {
            'appleFamily': {
                list: 'apples',
                filters: {}
            },
            'community': {
                list: 'community',
                filters: {}
            }
        },
        filters: {
            'showEQG': {
                text: 'Show EQG',
                logic: {
                    type: 'inList',
                    charProp: 'name',
                    against: 'eqg'
                },
                value: true
            },
            'showUnderage': {
                text: 'Show underage',
                logic: {
                    type: 'equals',
                    charProp: 'filly',
                    against: true
                },
                value: false
            },
            'showFemales': {
                text: 'Show females',
                logic: {
                    type: 'equals',
                    charProp: 'gender',
                    against: 'female'
                },
                value: true
            },
            'showMales': {
                text: 'Show males',
                logic: {
                    type: 'equals',
                    charProp: 'gender',
                    against: 'male'
                },
                value: true
            },
            'showCommunity': {
                text: 'Show community characters',
                logic: {
                    type: 'inList',
                    charProp: 'name',
                    against: 'community'
                },
                value: true
            }
        },
        getShameText: (smashes, list): string => {
            const hasTom = typeof smashes.find((c) => c.name === 'Tom') !== 'undefined';
            const hasBoulder = typeof smashes.find((c) => c.name === 'Boulder') !== 'undefined';
            const hasBloomberg = typeof smashes.find((c) => c.name === 'Bloomberg') !== 'undefined';

            const hasApplejack = typeof smashes.find((c) => c.name === 'Applejack') !== 'undefined';
            const hasFluttershy = typeof smashes.find((c) => c.name === 'Fluttershy') !== 'undefined';
            const hasPinkiePie = typeof smashes.find((c) => c.name === 'Pinkie Pie') !== 'undefined';
            const hasRainbowDash = typeof smashes.find((c) => c.name === 'Rainbow Dash') !== 'undefined';
            const hasRarity = typeof smashes.find((c) => c.name === 'Rarity') !== 'undefined';
            const hasTwilightSparkle = typeof smashes.find((c) => c.name === 'Twilight Sparkle') !== 'undefined';
            const hasCelestia = typeof smashes.find((c) => c.name === 'Celestia') !== 'undefined';
            const hasLuna = typeof smashes.find((c) => c.name === 'Princess Luna') !== 'undefined';
            const hasCadance = typeof smashes.find((c) => c.name === 'Princess Cadance') !== 'undefined';
            const hasChrysalis = typeof smashes.find((c) => c.name === 'Queen Chrysalis') !== 'undefined';
            const hasDiscord = typeof smashes.find((c) => c.name === 'Discord') !== 'undefined';
            const hasFutureApplebloom = typeof smashes.find((c) => c.name === 'Apple Bloom (Future)') !== 'undefined';
            const hasFutureSweetieBelle = typeof smashes.find((c) => c.name === 'Sweetie Belle (Future)') !== 'undefined';
            const hasFutureScootaloo = typeof smashes.find((c) => c.name === 'Scootaloo (Future)') !== 'undefined';
            const hasApplebloom = typeof smashes.find((c) => c.name === 'Apple Bloom') !== 'undefined';
            const hasSweetieBelle = typeof smashes.find((c) => c.name === 'Sweetie Belle') !== 'undefined';
            const hasScootaloo = typeof smashes.find((c) => c.name === 'Scootaloo') !== 'undefined';
            const hasAloeVera = typeof smashes.find((c) => c.name === 'Aloe Vera') !== 'undefined';
            const hasLotusBlossom = typeof smashes.find((c) => c.name === 'Lotus Blossom') !== 'undefined';

            const Villains = [
                'Lord Tirek',
                'Cozy Glow',
                'Queen Chrysalis',
                'Nightmare Moon',
                'Daybreaker'
            ];

            if (smashes.length === 0) return 'Damn, not a single one. They are all sad :(';

            if (smashes.length === 1) {
                if (smashes[0].name === 'Tom') return 'Here comes Tom!';
                if (smashes[0].name === 'Boulder') return 'A ROCK. A FUCKING ROCK. HOW?!?!';

                if (smashes[0].name.startsWith('Applejack')) return 'You smashed in the barn, it was full of apples and your back hurts because of it, she has never seen someone do as much honest work as she does every day';
                if (smashes[0].name.startsWith('Fluttershy')) return 'She treated you like an animal';
                if (smashes[0].name.startsWith('Pinkie Pie')) return 'As expected, the funniest pony in all of equestria made it the funniest time in your life. Even after hours she still has energy somehow';
                if (smashes[0].name.startsWith('Rainbow Dash')) return 'IWTCIRD';
                if (smashes[0].name.startsWith('Rarity')) return 'Only spike would be as down bad for rarity as you are.';
                if (smashes[0].name.startsWith('Twilight Sparkle')) return 'The fact that she knows spells to make this better is sus, she is the princess of friendship you know? why does she know all of this?';

                if (smashes[0].name.startsWith('Trixie')) return 'THE GREAT AND POWERFUL!!!';
                if (smashes[0].name.startsWith('Derpy')) return `I just don't know what went wrong`;
                if (smashes[0].name === 'Cozy Glow') return 'Cute but insanely evil';
                if (hasDiscord) return 'Discord would actually be... interesting...';
                if (smashes[0].name === 'Lyra Heartstrings') return 'You are in love with Lyra the same way she is in love with humans';
                if (smashes[0].name === 'Sweetie Drops (Bon Bon)') return 'From this day on. Sweetie Drops has another secret identity, to be your smash';
                if (hasCelestia) return 'She is older than 10 generations of your family tree, yet you would still call her "mommy celestia"';
                if (hasLuna) return 'It would probably the best night of your life, not only she is a literal goddess of the night, but you will sleep peacefully and happy knowing she is literally in your dreams';
                if (smashes[0].name === 'Littleshy (Community)') return 'You want him to record it or what?';
                if (hasChrysalis) return 'The whole hive knew when the smashing began, mostly from the sound, but also from the sudden and massive influx of love pouring down from the queens room';
                if (smashes[0].name === 'Nightmare Moon') return 'You doomed equestria into eternal night, JUST FOR SMASHING NIGHTMARE MOON?. Your priorities are straight...';
                if (smashes[0].name === 'Daybreaker') return `After the fires had faded, after the light had dimmed, you dared open your eyes. Celestia gazed back at you blankly for a soft second. "Do you know how many centuries it's been since I've had any sex?" She grumbled`;
                if (smashes[0].name === 'Ember') return 'Who knew that the queen of the dragons would be the biggest sub in the world? Too bad her father heard you. Where did he even get a battle axe that large?';
                if (smashes[0].name === 'Starlight Glimmer (Evil)') return `Damn, she really did make everything equal. You ${Math.random() >= 0.5 ? 'gained' : 'lost'} ${(Math.floor(Math.random() * 6) + 1)} inches last night. Is this the equestrian average?`;
                if (smashes[0].name === 'Starlight Glimmer') return `This was the first time she and you experienced REAL love. It wasn't just a smash, it was the smash where you discovered she is wife material and you actually marry her the next day, she says yes`;
                if (smashes[0].name === 'King Sombra') return 'Last night he treated you like you were made of crystal. This morning, you were his prince.';
                if (smashes[0].name === 'Autumn Blaze') return `She doesn't shut up. it was a good smash, but you finished with your ears ringing and with a headache, you still can hear her voice in your head`;
                if (smashes[0].name === 'Sweetie Bot (Community)') return 'You approach her, she makes a lot of sounds that resemble of her CPU scanning you, you pet her and you call her cute, she replies with 01010100 01101000 01100001 01101110 01101011 00100000 01111001 01101111 01110101 00100000 01100110 01101111 01110010 00100000 01100011 01100001 01101100 01101100 01101001 01101110 01100111 00100000 01101101 01100101 00100000 01100011 01110101 01110100 01100101 00100000 00111010 01000100 while overheating';
                if (smashes[0].name === 'Fluffle Puff (Community)') return 'For some reason you had to wear a Chrysalis costume just for her to even notice you. It was the softest creature you ever touched';
                if (hasCadance) return `You didn't think you'd ever see anyone literally get heart-eyes. You now stand corrected.`;
                if (smashes[0].name === 'Lord Tirek') return 'Not only he drained your magic but he drained your balls better than a succubus would. He also left you to rot on the ground without any magic, you died some hours later tho';
                return `You are loyal to ${smashes[0].name}... I like it.`;
            }

            if (smashes.length === 2) {
                if (hasTom && hasBoulder) return 'You would literally prefer to smash rocks than an actual living creature?';
                if (smashes.filter((c) => c.name.startsWith('Applejack')).length === 2) return 'You smashed in the barn, it was full of apples and your back hurts because of it, she has never seen someone do as much honest work as she does every day';
                if (smashes.filter((c) => c.name.startsWith('Fluttershy')).length === 2) return 'She treated you like an animal';
                if (smashes.filter((c) => c.name.startsWith('Pinkie Pie')).length === 2) return 'As expected, the funniest pony in all of equestria made it the funniest time in your life. Even after hours she still has energy somehow';
                if (smashes.filter((c) => c.name.startsWith('Rainbow Dash')).length === 2) return 'IWTCIRD';
                if (smashes.filter((c) => c.name.startsWith('Rarity')).length === 2) return 'Only spike would be as down bad for rarity as you are';
                if (smashes.filter((c) => c.name.startsWith('Twilight Sparkle')).length === 2) return 'The fact that she knows spells to make this better is sus, she is the princess of friendship you know? why does she know all of this?';
                if (smashes.filter((c) => c.name.startsWith('Trixe')).length === 2) return 'THE GREAT AND POWERFUL!!!';
                if (smashes.filter((c) => c.name.startsWith('Derpy')).length === 2) return `I just don't know what went wrong`;
                if (hasFluttershy && hasDiscord) return 'A threesome with those 2 sounds like a wild night';
                if (hasCelestia && hasLuna) return 'All day and all night you would be smashing, but would you ever dare to do both at once?';
                if (hasCadance && hasChrysalis) return 'Sworn enemies, how bold you are. Which one would be receiving your love?';
                if (hasAloeVera && hasLotusBlossom) return 'Best smash massage of your life. You feel more refreshed than drinking water at 3 am';
                if (smashes.filter((e) => e.filly === true).length === 0) return `So you want a threesome with ${smashes[0].name} and ${smashes[1].name}?`;
                if (smashes.filter((e) => e.filly === true).length === 1) {
                    const filly = smashes[0].filly ? smashes[0] : smashes[1];
                    const grown = smashes[0].filly ? smashes[1] : smashes[0];
                    return `You are adopting ${filly.name} with ${grown.name} as your partner`;
                }
                if (smashes.filter((e) => e.filly === true).length === 2) return `Two of the cutest creatures on equestria are ${smashes[0].name} and ${smashes[1].name}`;
            }

            if (smashes.length === 3) {
                const hasAdagioDazzleEQG = typeof smashes.find((c) => c.name === 'Adagio Dazzle (EQG)') !== 'undefined';
                const hasAriaBlazeEQG = typeof smashes.find((c) => c.name === 'Aria Blaze (EQG)') !== 'undefined';
                const hasSonataDuskEQG = typeof smashes.find((c) => c.name === 'Sonata Dusk (EQG)') !== 'undefined';
                if (hasFutureApplebloom && hasFutureSweetieBelle && hasFutureScootaloo) return `Huh, you aren't as much of a degenerate as the others`;
                if (hasApplebloom && hasSweetieBelle && hasScootaloo) return 'You are a degenerate. Surprisingly for you i am not surprised';
                if (hasAdagioDazzleEQG && hasAriaBlazeEQG && hasSonataDuskEQG) return `This one's gonna be one hell of a show`;
            }

            if (smashes.length === 4) {
                if (hasTwilightSparkle && hasCadance && hasCelestia && hasLuna) return 'Four new alicorns were made that night. You, unfortunetly, passed out while having the best smashing the universe has seen - but even as you rested they still craved for more. You have awoken something in them, something new... When you woke up you were a new alicorn... the alicorn OF SMASHING';
            }

            if (smashes.length === 6) {
                if (hasApplejack && hasFluttershy && hasPinkiePie && hasRainbowDash && hasRarity && hasTwilightSparkle) {
                    return 'ONLY the mane 6. Classic';
                }
            }

            const smashesOnlyVillains = smashes.filter((c) => Villains.includes(c.name));
            if (smashesOnlyVillains.length === smashes.length) {
                return 'You saw past their wicked hearts, found the sexy creatures hidden beneath. Now, however your hubris has doomed you. The league of evil has assembled once more and they fight over who, exactly, will get your hand. Or foot. Or dick. Good luck getting out in one piece.';
            }

            const smashesOnlyWonderbolts = smashes.filter((c) => c.img.startsWith('characters/wonderbolts/'));
            if (smashes.length === smashesOnlyWonderbolts.length) return 'Only the wonderbolts, you are definitely Rainbow Dash';

            const smashesOnlyKirins = smashes.filter((c) => c.img.startsWith('characters/kirin/'));
            if (smashes.length === smashesOnlyKirins.length) return 'Their silence speaks volumes';

            if (smashes.length === list.length - 1) {
                const missingCharacter = list.find((l) => typeof smashes.find((s) => s.name === l.name) == 'undefined');
                return `All of them. Except for ${missingCharacter?.name}... What did ${missingCharacter?.name} even do?`;
            }

            const listFillies = list.filter((c) => c.filly === true);
            if (smashes.length === listFillies.length) return `All underage, all ${listFillies.length} of them... What is wrong with you? are you a creep?`;

            const smashesFillies = smashes.filter((c) => c.filly === true);
            if (smashes.length === smashesFillies.length) return `Only underage, ${listFillies.length} of them... wtf?`;

            if (smashes.length === 69) return 'Nice.';
            if (smashes.length === 420) return 'Blaze it';

            const percentage = Math.floor((smashes.length / list.length) * 100);
            if (percentage < 10) return 'Thats very few ponies, you have super high standards.';
            if (percentage < 33) return 'Not even one third, quality taste.';
            if (percentage < 50) return 'Thats decent. I guess...';
            if (percentage < 60) return 'Mares. Am I right?.';
            if (percentage < 75) return 'Thats a lot of smashing.';
            if (percentage < 90) return `I'm pretty sure you would be at it for weeks with this many smashes.`;
            if (percentage < 95) return `I'm pretty sure you would be at it for months with this many smashes.`;
            if (percentage < 100) return 'You are incredibly desperate for some smashing. You have absolutely no shame...';
            if (percentage === 100) return `You are a true smasher. You would smash everything... I can't even begin to comprehend how mentally insane you are. You are definitely desperate for some smashing. Seek help`;
            if (percentage === 100 && hasTom && hasBoulder && hasBloomberg) return `You are a true smasher. You would smash everything, including two rocks and a tree. I can't even begin to comprehend how mentally insane you are. You are definitely desperate for some smashing. Seek help`;

            return '';
        }
    },

    'apples': {
        name: 'Apple Family',
        list: AppleFamily as Character[],
        extensions: {},
        filters: {
            'showEQG': {
                text: 'Show EQG',
                logic: {
                    type: 'equals',
                    charProp: 'eqg',
                    against: true
                },
                value: true
            },
            'showUnderage': {
                text: 'Show underage',
                logic: {
                    type: 'equals',
                    charProp: 'filly',
                    against: true
                },
                value: false
            },
            'showFemales': {
                text: 'Show females',
                logic: {
                    type: 'equals',
                    charProp: 'gender',
                    against: 'female'
                },
                value: true
            },
            'showMales': {
                text: 'Show males',
                logic: {
                    type: 'equals',
                    charProp: 'gender',
                    against: 'male'
                },
                value: true
            }
        },
        getShameText: () => ''
    },

    'eqg': {
        name: 'Equestria Girls',
        list: All.filter((c) => c.eqg) as Character[],
        extensions: {},
        filters: {
            'showUnderage': {
                text: 'Show underage',
                logic: {
                    type: 'equals',
                    charProp: 'filly',
                    against: true
                },
                value: false
            },
            'showFemales': {
                text: 'Show females',
                logic: {
                    type: 'equals',
                    charProp: 'gender',
                    against: 'female'
                },
                value: true
            },
            'showMales': {
                text: 'Show males',
                logic: {
                    type: 'equals',
                    charProp: 'gender',
                    against: 'male'
                },
                value: true
            }
        },
        getShameText: () => ''
    },

    'community': {
        name: 'Community',
        list: Community as Character[],
        extensions: {},
        filters: {
            'showUnderage': {
                text: 'Show underage',
                logic: {
                    type: 'equals',
                    charProp: 'filly',
                    against: true
                },
                value: false
            },
            'showFemales': {
                text: 'Show females',
                logic: {
                    type: 'equals',
                    charProp: 'gender',
                    against: 'female'
                },
                value: true
            },
            'showMales': {
                text: 'Show males',
                logic: {
                    type: 'equals',
                    charProp: 'gender',
                    against: 'male'
                },
                value: true
            }
        },
        getShameText: () => ''
    },

    // Custom is special, all its props are placeholders
    'custom': {
        name: 'Custom...',
        list: [], // This is a placeholder
        extensions: {},
        filters: {}
    }
} satisfies Record<string, List>;

export default Lists;
