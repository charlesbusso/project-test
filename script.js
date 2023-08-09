
const isValidEmail = (email) => { 
    const regex =
 /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
return regex.test(string(email).toLowerCase())
}
  




const IsValidCPF = (cpf) => {
    const regex  = /^\d{3}\.\d{3}\.\d{3}\d{2}$/
    return regex. test(string(cpf))
    }
    

    const form = document.querySelector('form');
    const input = document.querySelector('input[name="name"]');

    let isValidForm = false

    const validateInput = () => {
        if(!input.value){
            input.classList.add('invalid')
            input.nextElementSibling.classList.remove('error-hidden')
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validateInput()
        if (isValidForm){

        }
    })

    input.addEventListener('input',()=> {
        input.classList.remove('invalid')
        input.nextElementSibling.classList.add('error-hidden')
        
    })