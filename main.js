var div=document.querySelector('.item2');


window.addEventListener('load',()=>{
    const url="https://fakestoreapi.com/products";
    try {
        fetch(url).then((res)=>res.json()).then((data)=>{
            data.map((v)=>{
                const d=document.createElement('div');
                d.innerHTML=`<div class="content">
                <img src="${v.image}" alt="no image" width="200" height="200px">
                <p>${v.title}</p> <details>${v.description}</details>
                
                </div>`;

                div.appendChild(d);
            });
        });    
    } catch (error) {
        console.log(error.message);

    }
    
});
