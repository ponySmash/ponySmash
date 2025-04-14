export function NewYear() {
    const body = document.getElementById('body');
    if (body) {
        body.style.fontFamily = 'Flavors';
        body.style.color = '#ffffff';
    }

    return (<>
        <img className='new-year' src='./images/newYear.webp'></img>
        <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
            <div className="snowflake">
                <div className="inner">🎉</div>
            </div>
        </div></>);
}
