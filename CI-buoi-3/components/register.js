import { InputGruop } from "./input-gruop";

class Register{
    $container;
    $title;

    $formRegister;
    $inputGroupDisplayName;
    $inputGroupEmail;
    $inputGroupPassword;
    $inputGroupConfirmPassword;

    $feebackMessage;
    $btnSubmit

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('center','h-screen','flex-col');
        this.$title = document.createElement('h3');
        this.$title.innerHTML= 'Register';

        this.$formRegister = document.createElement('form');
        this.$formRegister.addEventListener('submit', this.handleSumbit);

        this.$inputGroupEmail = new InputGruop('email','Email','email');
        this.$inputGroupDisplayName = new InputGruop('text','Display name', 'displayName');
        this.$inputGroupPassword = new InputGruop('password', 'Password','password');
        this.$inputGroupConfirmPassword = new InputGruop('password','Confirm password','confrimPassword');

        this.$feebackMessage = document.createElement('div')

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Register';

        handleSumbit = (evt) =>{
            evt.preventDefault();
            const email = this.$inputGroupEmail.getInputValue();
            const displayName = this.$inputGroupDisplayName.getInputValue();
            const password = this.$inputGroupPassword.getInputValue();
            const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();

            this.$inputGroupEmail.setError(null);
            this.$inputGroupPassword.setError(null);
            this.$inputGroupDisplayName.setError(null);
            this.$inputGroupConfirmPassword.setError(null);

            if(email){
                this.$inputGroupPassword.setError('Email cannot be empty!!!');
            }
            if(displayName){
                this.$inputGroupDisplayName.setError('Display name cannot be empty !!!');
            }
            if(password.length < 6){
                this.$inputGroupPassword.setError('Password length must be greater or equal than 6 !!!');
            }
            if(confirmPassword != password){
                this.$inputGroupConfirmPassword.setError('Confrim password not matched!!!');
            }
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() =>{
                this.$feebackMessage.innerHTML = `Register succesfully! please check your inbox`;
                firebase.auth().currentUser.sendEmailVerification();
                this.$inputGroupEmail.setInputValue('');
                this.$inputGroupDisplayName.setInputValue('');
                this.$inputGroupPassword.setInputValue('');
                this.$inputGroupConfirmPassword.setInputValue('');
            })
            .catch((error)=>{
                this.$feebackMessage.innerHTML = error.soString();
                console.log(error);
            })
    }

    render(){
        this.$formRegister.appendChild(this.$inputGroupEmail.render());
        this.$formRegister.appendChild(this.$inputGroupPassword.render());
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
        this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
        this.$formRegister.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$feebackMessage);
        this.$container.appendChild(this.$formRegister);
    }
}

export{Register}