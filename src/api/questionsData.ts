interface Question{
  question: string;
  variants: string[] | null
}

export const questionData: Question[] = [
  {
    question: 'Как расшифровывается CSS?',
    variants: ['Cascading Style Sheets', 'Counter-Strike: Source']
  },

  {
    question: 'Какие технологии можно отнести к фронтенд-разработке',
    variants: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Golang', 'C++']
  },

  {
    question: 'Напишите в поле ниже название тега, который используется для создания навигации на сайте',
    variants: null
  },

  {
    question: 'Напишите подробно о том, как работает приоритетность в CSS',
    variants: null
  }
]