import { basepelis } from "./basepelis.js";

let $movies=document.getElementById('movie-container');
let $fragmento=document.createDocumentFragment();
let $media=document.getElementById('media-container');
document.addEventListener('DOMContentLoaded',()=>{
    console.log($media.children.length)
    basepelis.forEach(el=>{
        let $divpe=document.createElement('figure');
        let $spanpe=document.createElement('span');
        $spanpe.textContent=el.tipo;
        $divpe.className='pelis col-12 col-sm-12 col-md-4 col-lg-3 col-lg-3';
        $divpe.innerHTML=`
                <h3>${el.nombre}</h3>
                <img src=${el.foto} alt="">
                <figcaption class="year">${el.anio}----${el.pais}</figcaption>
                <figcaption><p>${el.trama}</p></figcaption>
                <figcaption class="watch-trailer"><a href="#" id="watch-trailer"  data-id=${el.id}>Ver Trailer ▶️</a></figcaption>
        `;
        $divpe.appendChild($spanpe);
        $fragmento.appendChild($divpe);
    })
    $movies.appendChild($fragmento);
    
    document.addEventListener('click',(e)=>{
        if(e.target.matches('#watch-trailer')){
            //console.log('click')
            if($media.children.length!==0){
                $media.innerHTML='';
                $media.classList.toggle('enter-video');
            }
            $media.classList.add('enter-video');
            const dato=basepelis.find(el=>el.id===Number(e.target.dataset.id));
            $media.innerHTML=`${dato.framever}`;
            
        }
    })
})

