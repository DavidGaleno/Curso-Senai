let navBar = ''

window.onload=()=>{
     navBar = document.querySelector('.navbar')
     if (this.scrollY > 500){
        navBar.classList.remove('bg-transparent')
        navBar.classList.add('bg-dark')
        console.log(navBar)
    }
    else{
        navBar.classList.add('bg-transparent')
        navBar.classList.remove('bg-dark')
    }
     window.onscroll = ()=>{
        if (this.scrollY > 500){
            navBar.classList.remove('bg-transparent')
            navBar.classList.add('bg-dark')
            console.log(navBar)
        }
        else{
            navBar.classList.add('bg-transparent')
            navBar.classList.remove('bg-dark')
        }
     }
}

    
