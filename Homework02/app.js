class Faq {
    $container;
    $question;
    $answer;
    $symbol;

    constructor(question, answer){
        this.$container = document.createElement('div');
        this.$container.classList.add('container');

        this.$question = document.createElement('div');
        this.$question.classList.add('container__box');
        let question_text = document.createElement('p');
            question_text.innerText = question;
        this.$question.appendChild(question_text);
        this.$question.addEventListener('click', this.expand);

        this.$symbol = document.createElement('div');
        this.$symbol.innerHTML = `<i class ="fas fa-search"></i>`;
        this.$question.appendChild(this.$symbol);

        this.$answer = document.createElement('div');
        this.$answer.classList.add('container__box');
        let answer_text = document.createElement('p');
            answer_text.innerText = answer;
        this.$answer.appendChild(answer_text);
 
        this.$answer.style.display = "none";
    };

    expand = () =>{
        if (this.$answer.style.display == "none"){
            this.$answer.style.display = "block"
            this.$symbol.innerHTML = `<i class="fas fa-angle-double-down"></i>`;
        }
        else {
            this.$answer.style.display = "none"
            this.$symbol.innerHTML = `<i class="fas fa-search"><i>`;
        }
    };


    render(){
        this.$container.appendChild(this.$question);
        this.$container.appendChild(this.$answer);
        return this.$container;
    }
}