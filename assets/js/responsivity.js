const w = window,
        d = document,
        $slideImg = d.querySelector('.slide-img')


export default function responsivity(){
    if(w.matchMedia("(min-width: 530px)").matches){
        $slideImg.src = "./assets/image/ball-pic-2x.jpg";
    }

}