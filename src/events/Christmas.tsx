export function Christmas() {
    const body = document.getElementById('body');
    if (body) {
        body.style.fontFamily = 'Flavors';
        body.style.color = '#ffffff';
    }

    return (<>
        <div className='eventsDiv'>
            <img className='xmas-tree' src='./images/derpy.webp'></img>
            <div className="snowflakes" aria-hidden="true">
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
            </div>
        </div></>);
}
