const questions = document.querySelectorAll('.accordianSection')

questions.forEach((question) => {
const opener = question.querySelector('h4')
opener.addEventListener('click', () => {
    [...questions].filter(q => q !== question).forEach((q) => q.classList.remove('opened'))
    question.classList.toggle('opened')
})
})