import {defineStore} from 'pinia';

export const useQuizStore=defineStore('quizStore',{
    state:()=>({
        subject:[
            {id:1,title:'Physic',description:'Physic quiz includ topics like simple machine,pressure and force',image:'https://imgs.search.brave.com/xb0X4y18-wJVIyeFBoZ87jHYK4r75NHEfl9ChAKBq8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1n/ZW5lcmF0ZWQtaW1h/Z2Utd2l0aC1mb3Jt/dWxhXzQ1NzI4OS03/NzU5LmpwZz9zZW10/PWFpc19oeWJyaWQ'},
            {id:2,title:'Chemistry',description:'Physic quiz includ topics like simple machine,pressure and force',image:'https://imgs.search.brave.com/xb0X4y18-wJVIyeFBoZ87jHYK4r75NHEfl9ChAKBq8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1n/ZW5lcmF0ZWQtaW1h/Z2Utd2l0aC1mb3Jt/dWxhXzQ1NzI4OS03/NzU5LmpwZz9zZW10/PWFpc19oeWJyaWQ'},
            {id:3,title:'Biology',description:'Physic quiz includ topics like simple machine,pressure and force',image:'https://imgs.search.brave.com/xb0X4y18-wJVIyeFBoZ87jHYK4r75NHEfl9ChAKBq8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1n/ZW5lcmF0ZWQtaW1h/Z2Utd2l0aC1mb3Jt/dWxhXzQ1NzI4OS03/NzU5LmpwZz9zZW10/PWFpc19oeWJyaWQ'},
            {id:4,title:'Math',description:'Physic quiz includ topics like simple machine,pressure and force',image:'https://imgs.search.brave.com/xb0X4y18-wJVIyeFBoZ87jHYK4r75NHEfl9ChAKBq8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1n/ZW5lcmF0ZWQtaW1h/Z2Utd2l0aC1mb3Jt/dWxhXzQ1NzI4OS03/NzU5LmpwZz9zZW10/PWFpc19oeWJyaWQ'},
            {id:5,title:'Social',description:'Physic quiz includ topics like simple machine,pressure and force',image:'https://imgs.search.brave.com/xb0X4y18-wJVIyeFBoZ87jHYK4r75NHEfl9ChAKBq8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1n/ZW5lcmF0ZWQtaW1h/Z2Utd2l0aC1mb3Jt/dWxhXzQ1NzI4OS03/NzU5LmpwZz9zZW10/PWFpc19oeWJyaWQ'},
            {id:6,title:'General Knowledge',description:'Physic quiz includ topics like simple machine,pressure and force',image:'https://imgs.search.brave.com/xb0X4y18-wJVIyeFBoZ87jHYK4r75NHEfl9ChAKBq8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1n/ZW5lcmF0ZWQtaW1h/Z2Utd2l0aC1mb3Jt/dWxhXzQ1NzI4OS03/NzU5LmpwZz9zZW10/PWFpc19oeWJyaWQ'}
        ],

        questions:[
            { subjectId: 1, question: 'What is the unit of force?', options: { a: 'Newton', b: 'Joule', c: 'Watt', d: 'Pascal' }, correctAnswer: 'a' },
            { subjectId: 1, question: 'What is the speed of light?', options: { a: '3x10^8 m/s', b: '3x10^6 m/s', c: '3000 km/h', d: '300 km/s' }, correctAnswer: 'a' },
            { subjectId: 2, question: 'What is the chemical symbol for water?', options: { a: 'H2O', b: 'O2', c: 'CO2', d: 'NaCl' }, correctAnswer: 'a' },
            { subjectId: 2, question: 'What is the atomic number of hydrogen?', options: { a: '1', b: '2', c: '8', d: '10' }, correctAnswer: 'a' },
            { subjectId: 3, question: 'What is the powerhouse of the cell?', options: { a: 'Mitochondria', b: 'Nucleus', c: 'Ribosome', d: 'Chloroplast' }, correctAnswer: 'a' },
            { subjectId: 3, question: 'What is the basic unit of life?', options: { a: 'Atom', b: 'Molecule', c: 'Cell', d: 'Organ' }, correctAnswer: 'c' },
        ]
        
    })

})