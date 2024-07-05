//jshint esversion:6

let current_search = 'google';
document.querySelector('.search_input').addEventListener('keyup', search1);
document.querySelector('.search_button').addEventListener('click', function() {
    search2(this.innerHTML);
});

function search1(event) {
    const input = event.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(0).join(' ');
    switch(search_engine){
        case 'google':
            search_query = input;
            break;
        case 'youtube':
            search_query = input.replace('youtube ', '');
            break;
        case 'docs':
            search_query = input.replace('docs ', '');
        break;
        case 'github':
            search_query = input.replace('github ', '');
            break;
        case 'slides':
            search_query = input.replace('slides ', '');
            break;
        case 'sheets':
            search_query = input.replace('sheets ', '');
            break;
        case 'bing':
            search_query = input.replace('bing ', '');
            break;
        case 'duckduckgo':
            search_query = input.replace('duckduckgo ', '');
            break;
        case 'yahoo':
            search_query = input.replace('yahoo ', '');
            break;
        case 'spotify':
            search_query = input.replace('spotify ', '');
            break;
        default: search_engine = 'google';
    }
    if(search_engine !== current_search) {
        current_search = search_engine;
        const image = document.querySelector('.search_icon');
        switch(search_engine){
            case 'google':
                image.src = 'google.png';
                image.alt = 'Google icon';
                break;
            case 'youtube':
                image.src = 'youtube.png';
                image.alt = 'YouTube icon';
                break;
            case 'docs':
                image.src = 'docs.png';
                image.alt = 'Google Docs icon';
                break;
            case 'github':
                image.src = 'github.png';  
                image.alt = 'GitHub icon';
                break;
            case 'slides':
                image.src = 'slides.png';
                image.alt = 'Google Slides icon';
                break;
            case 'sheets':
                image.src = 'sheets.png';
                image.alt = 'Google Sheets icon';
                break;
            case 'bing':
                image.src = 'bing.png';
                image.alt = 'Bing icon';
                break;
            case 'duckduckgo':
                image.src = 'duckduckgo.png';
                image.alt = 'DuckDuckGo icon';
                break;
            case 'yahoo':
                image.src = 'yahoo.png';
                image.alt = 'Yahoo icon';
                break;
            case 'spotify':
                image.src = 'spotify.png';
                image.alt = 'Spotify icon';
                break;
        }
    }
    if(event.key === 'Enter')
        switch(search_engine) {
            case 'docs':
                window.location = `https://docs.google.com/document/?q=${search_query}`;
                break;
            case 'youtube': 
                window.location = `https://www.youtube.com/results?search_query=${search_query}`;
                break;
            case 'github':
                window.location = `https://github.com/search?q=${search_query}`;
                break;
            case 'slides':
                window.location = `https://docs.google.com/presentation/?q=${search_query}`;
                break;
            case 'sheets':
                window.location = `https://docs.google.com/spreadsheets/?q=${search_query}`;
                break;
            case 'bing':
                window.location = `https://www.bing.com/search?q=${search_query}`;
                break;
            case 'duckduckgo':
                window.location = `https://duckduckgo.com/?q=${search_query}`;
                break;
            case 'yahoo':
                window.location = `https://search.yahoo.com/search?p=${search_query}`;
                break;
            case 'spotify':
                window.location = `https://open.spotify.com/search/${search_query}`;
                break;
            default: 
                window.location = `https://www.google.com/search?q=${search_query}`;
        }
}

function search2() {
    const input = document.querySelector('.search_input').value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(0).join(' ');
    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'docs': break;
        default: search_engine = 'google';
        search_query = input;
    }
    switch(search_engine) {
        case 'docs':
            window.location = `https://docs.google.com/document/?q=${search_query}`;
            break;
        case 'youtube': 
            window.location = `https://www.youtube.com/results?search_query=${search_query}`;
            break;
            case 'github':
                window.location = `https://github.com/search?q=${search_query}`;
                break;
            case 'slides':
                window.location = `https://docs.google.com/presentation/?q=${search_query}`;
                break;
            case 'sheets':
                window.location = `https://docs.google.com/spreadsheets/?q=${search_query}`;
                break;
        default: 
            window.location = `https://www.google.com/search?q=${search_query}`;
    }
}

