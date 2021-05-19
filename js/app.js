const links = document.querySelectorAll(".nav_links");
 links.forEach((iteam)=>
 {
    iteam.addEventListener("click",()=>
    {
        let el=document.getElementById(iteam.getAttribute("data-link")).scrollIntoView({behavior:"smooth",block:"start"});
        
    })
})
