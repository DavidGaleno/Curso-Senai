var elements = ''

window.onload = ()=> {
    elements = document.querySelectorAll('.portuguese')
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener('mouseover',changeText,this)
        elements[i].addEventListener('mouseout',changeText,this)    
    }
}
function changeText(){
    if(this.className == 'portuguese'){
        switch (this.id){
            case 'home':
                this.innerHTML = 'ホ-ム';
                break;
            case 'acai':
                this.innerHTML = 'アサイ'
                break
            case 'cupuacu':
                this.innerHTML = 'クプアス'
                break
            case 'desenvolvedor':
                this.innerHTML = 'プログラマー'
                break
            case 'name':
                this.innerHTML = 'デビトーガレノ'
                break
        }
            this.className = 'japanese'

        }
        else{
            switch (this.id){
                case 'home':
                    this.innerHTML = 'Home';
                    break;
                case 'acai':
                    this.innerHTML = 'Açai'
                    break
                case 'cupuacu':
                    this.innerHTML = 'Cupuaçu'
                    break
                case 'desenvolvedor':
                    this.innerHTML = 'Desenvolvedor'
                    break
                case 'name':
                    this.innerHTML = 'David Galeno'
                    break
                }
            this.className = 'portuguese'
        }
    }
   


