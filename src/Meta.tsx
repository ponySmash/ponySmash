import { TITLE, META_TITLE, META_DESCRIPTION, META_KEYWORDS, META_URL } from './constants';

function Meta() {
    return (
        <>
            <title>{TITLE}</title>

            <meta property='title' content={META_TITLE} />
            <meta property='og:title' content={META_TITLE} />
            <meta property='twitter:title' content={META_TITLE} />

            <meta name='description' content={META_DESCRIPTION} />
            <meta name='og:description' content={META_DESCRIPTION} />
            <meta name='twitter:description' content={META_DESCRIPTION} />

            <meta content="/logo.png" property="og:image" />
            <meta content="/logo.png" property="image" />

            <meta name="keywords" content={META_KEYWORDS} />

            <meta content={META_URL} property='og:url' />
        </>
    );
}

export default Meta;
