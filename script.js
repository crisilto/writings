const poemFiles = [
    'writings/22-05.html',
    'writings/23-05.html',
    'writings/23-05-2.html',
]

let currentIndex = 0

const poemContainer = document.getElementById('poem-container')

function loadPoem(index) {
    poemContainer.innerHTML = '<div class="loading">loading...</div>'
    fetch(poemFiles[index])
        .then(res => res.text())
        .then(html => {
            poemContainer.innerHTML = html
        })
        .catch(() => {
            poemContainer.innerHTML = '<div class="loading">error</div>'
        })
}

function nextPoem() {
    if (currentIndex < poemFiles.length - 1) {
        currentIndex++
        loadPoem(currentIndex)
    }
}

function prevPoem() {
    if (currentIndex > 0) {
        currentIndex--
        loadPoem(currentIndex)
    }
}

loadPoem(currentIndex)
