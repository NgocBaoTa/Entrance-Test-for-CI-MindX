const button = document.querySelector(".button")

let no_of_number = 0
let no_of_try = 3
let answer = Math.floor(Math.random()*11) 
  
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

button.addEventListener("click", (e) => {
    let input = document.querySelector(".inputText").value

    if(input < 0 || input > 10 || isNaN(input) == true){
        Toast.fire({
            icon: 'error',
            title: 'Please enter a number between 0 and 10.'
        })
    } else {
        no_of_number+= 1;
        no_of_try -= 1

        if(input != answer){
            Toast.fire({
                icon: 'error',
                title: `You have ${no_of_try} left`
            })
        }
        else if(input == answer){
            Toast.fire({
                icon: 'success',
                title: `Congratulations! ${answer} is Lucky Number.` 
            })
            answer = Math.floor(Math.random()*11) 
            no_of_number = 0
            no_of_try = 3
        }
        if(no_of_number == 3) {
            Toast.fire({
                icon: 'error',
                title: `Ohhh, ${answer} is Lucky Number.` 
            })
            answer = Math.floor(Math.random()*11) 
            no_of_number = 0
            no_of_try = 3
        }
    }
})