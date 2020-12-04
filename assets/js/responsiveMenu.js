const d = document

export default function menuResponsive(){
    const btnMenu = d.querySelector('#responsiveBtn'),
            btnMenu2 = d.querySelector('.hamburger-box *'),
            btnMenu3 = d.querySelector('#responsiveBtn span'),
                $nav = d.getElementById('nav'),
                $body = d.getElementsByTagName('body')
    
                console.log(btnMenu3)
    d.addEventListener('click', e =>{
        if(e.target == btnMenu || e.target == btnMenu2 || e.target.btnMenu3){

            btnMenu.classList.toggle('is-active')
            $nav.classList.toggle('active')
        }
    })


}