// Hide loading effect
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Fade in sections while scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="all 1s ease";
    observer.observe(section);
});

// Gallery click effect
document.querySelectorAll(".gallery img").forEach(img=>{
    img.addEventListener("click",()=>{
        img.style.transform="scale(1.1)";
        setTimeout(()=>{
            img.style.transform="scale(1)";
        },300);
    });
});

// Floating hearts
setInterval(()=>{
    const heart=document.createElement("div");
    heart.innerHTML="🤍";
    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-30px";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.opacity="0.8";
    heart.style.transition="transform 6s linear, opacity 6s";
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform="translateY(-110vh)";
        heart.style.opacity="0";
    },100);

    setTimeout(()=>{
        heart.remove();
    },6000);

},1200);
