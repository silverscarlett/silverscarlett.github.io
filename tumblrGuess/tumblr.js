const API_KEY = 'ZXebHwXlTPHZLvZ6AFYJcwvuPpMObX2v0zQ4Ia5EFHHSEINmcu'
let button_div = document.getElementById('buttons')
let gallery_div = document.getElementById('gallery')

let score = document.getElementById('score_span')
let words = ['forest', 'succulent', 'flowers', 'leaves', 'moss']
let correct_answer = ''

console.log(correct_answer)

words.forEach(function (word) {
    let new_button = document.createElement('button')
    new_button.innerHTML = word
    new_button.classList.add('btn', 'btn-secondary', 'mx-2', 'mb-3')
    new_button.onclick = function () {
        if (word == correct_answer) {
            score.innerHTML++
            generate()
        } else {
            score.innerHTML--
            alert('Wrong! Try again')
        }
    }
    button_div.append(new_button)
    console.log(new_button)
})

function generate() {
    gallery_div.innerHTML = null

    let random_number = Math.floor((Math.random() * words.length))
    correct_answer = words[random_number]

    fetch(`https://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=${correct_answer}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (result) {
            console.log(result.response)
            result.response.forEach(function (post) {
                if (post.type == 'photo') {
                    console.log(post.photos[0].original_size.url)
                    const pic = document.createElement('img')
                    pic.src = post.photos[0].original_size.url
                    pic.height = 200
                    gallery_div.appendChild(pic)
                }
            })
        })
}
generate()

// fetch(`https://api.tumblr.com/v2/tagged?tag=gif&api_key=${API_KEY}&tag=${correct_answer}&limit=50`)
//     .then(function (response) {
//         return response.json(); // convert the raw response into a JSON
//     })
//     .then(function (result) {
//         console.log(result);

//     })

console.log(button_div)