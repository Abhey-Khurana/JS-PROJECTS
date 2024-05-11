const resultText=document.querySelector(".result");
const userImage=document.querySelector(".user_result img");
const cpuImage=document.querySelector(".cpu_result img");
const optionImages=document.querySelectorAll(".option_image");
const gameContainer = document.querySelector(".container");


optionImages.forEach((image,idx)=>{

    image.addEventListener('click',(e)=>{
        image.classList.add("active")

        userImage.src=cpuImage.src="images/rock.png"

        optionImages.forEach((image2,idx2)=>{

            idx!==idx2 && image2.classList.remove("active");
        })

        // console.log(e.target.querySelector("img").src);
        gameContainer.classList.add("start");

        setTimeout(()=>{
            gameContainer.classList.remove("start");
            userImage.src=e.target.querySelector("img").src;

        let optionSrc=["images/rock.png","images/paper.png","images/scissors.png"]

        let userValue=idx;
        let cpuValue=Math.floor(Math.random()*3);

        cpuImage.src=optionSrc[cpuValue];

        let userChar=['R','P','S'][userValue];
        let cpuChar=['R','P','S'][cpuValue];

        let possibilities={
            RP:"YOU LOST !!",
            RS:"YOU WON !!",
            PR:"YOU WON !!",
            PS:"YOU LOST !!",
            SR:"YOU LOST !!",
            SP:"YOU WON !!"
        }

        resultText.textContent=userChar===cpuChar?"MATH DRAW":possibilities[userChar+cpuChar];
        },2000);
        
        




    })
})

  