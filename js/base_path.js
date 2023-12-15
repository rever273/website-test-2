
var globalBasePath = BasePath()

function BasePath() {
    console.log('cc', window.location.hostname);
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') return '/';
    else return '';
}