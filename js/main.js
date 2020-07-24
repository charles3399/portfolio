let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDot = document.getElementsByClassName('theme-dot')

for (var i = 0; i < themeDot.length; i++) {
    themeDot[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'css/main.css'
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'css/dark.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'css/green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'css/purple.css'
    }

    localStorage.setItem('theme', mode)
}