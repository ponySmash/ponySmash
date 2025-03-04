import React from 'react';
import { version } from './constants.ts';
import { EventDecorations, EventEastersData, EventStarWarsData, Ref } from './types.ts';


function GetCredits(props:
    {
        event: EventDecorations,
        eventData: object
    }): JSX.Element {
    let creditsUrl = '';
    switch (props.event) {
        case 'none': break;
        case 'aprilFools': break;
        case 'halloween': creditsUrl = 'https://www.deviantart.com/dsana/art/The-Witch-and-Her-Black-Cat-641718385'; break;
        case 'xmas': creditsUrl = 'https://www.deviantart.com/ohemo/art/Derpy-Christmas-502586923'; break;
        case 'newYear': creditsUrl = 'https://www.deviantart.com/ironm17/art/New-Year-722220054'; break;
        case 'bday': creditsUrl = 'https://derpibooru.org/images/2185632'; break;
        case 'valentines': creditsUrl = 'https://derpibooru.org/images/212580'; break;
        case 'starWars': {
            switch ((props.eventData as EventStarWarsData).imgName) {
                case 'fluttershy': creditsUrl = 'https://derpibooru.org/images/1078924'; break;
                case 'starlight': creditsUrl = 'https://derpibooru.org/images/1017669'; break;
            }
        }
        case 'blazeIt': {
            switch ((props.eventData as EventStarWarsData).imgName) {
                case 'blazeIt1': creditsUrl = 'https://derpibooru.org/images/2819742'; break;
                case 'blazeIt2': creditsUrl = 'https://derpibooru.org/images/1086556'; break;
            }
        }
        case 'easters': {
            switch ((props.eventData as EventEastersData).imgName) {
                case 'derpy': creditsUrl = 'https://www.deviantart.com/up1ter/art/Derpy-Easter-Bunny-294745771'; break;
                case 'pinkie': creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Pinkie-Pie-837591200'; break;
                case 'fluttershy2': creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Fluttershy-837592150'; break;
                case 'applejack': creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Applejack-837592195'; break;
                case 'rainbow': creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Rainbow-Dash-837592227'; break;
                case 'rarity': creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Rarity-837592384'; break;
                case 'twilight': creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Twilight-Sparkle-837592431'; break;
                case 'fluttershy': creditsUrl = 'https://derpibooru.org/images/3331498'; break;
            }
            break;
        }
    }

    if (creditsUrl == '')
        return <></>;
    else {
        return <> / <a href={creditsUrl}>Artwork Credits</a></>;
    }
}

export function Footer(props: {
    event: Ref<EventDecorations>,
    eventData: object
}) {
    return (
        <footer id='footer'>
            <p id='footer-p'>
                <a href="https://github.com/ponySmash/ponySmash/releases">{version}</a> /
                Site by <a href="https://github.com/EXtremeExploit/">EXtremeExploit</a> /
                Give me a star on <a href="https://github.com/ponySmash/ponySmash">GitHub</a> /&nbsp;
                <a href="https://github.com/ponySmash/ponySmash/blob/master/LICENSE">License</a>
                <GetCredits event={props.event.current} eventData={props.eventData} />
            </p>
        </footer>
    );
}
