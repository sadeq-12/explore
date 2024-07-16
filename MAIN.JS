let slide = document.querySelector("#slideBtn")
let nextButton = document.querySelector("#nextBtn")
let prevButton = document.querySelector("#prevBtn")
let end = document.querySelector("#end")

let images = [
   "https://img.freepik.com/free-photo/view-wild-lion-its-natural-habitat_23-2151657569.jpg?t=st=1721129069~exp=1721132669~hmac=1a4f4987289951c4d83051150b0600a103c5de68c66dd4fd14995e16ac3c9e6e&w=360",
   
   "  https://img.freepik.com/free-photo/male-lions-bush-field-with-blurred-background_181624-20137.jpg?t=st=1721129847~exp=1721133447~hmac=83d439de4fd633996ec2bd67b94141a2993967997dcdd24337cd1baf239be913&w=900",
   
   
    "https://img.freepik.com/free-photo/view-wild-lion-its-natural-habitat_23-2151657733.jpg?t=st=1721129005~exp=1721132605~hmac=df705767432ab7b0219ef433741c022e5e27f271893099a2494af39a0f0f1bc7&w=360",
]



let indexNumber = 0
slide.src = images[indexNumber]


nextButton.addEventListener("click" , function(){
    if(indexNumber < images.length -1){
        indexNumber++
        slide.src = images[indexNumber]
    
    }
    if(indexNumber==images.length-1){
        
        end.innerHTML = "its the end"
    end.style.backgroundColor="red"
    }
    
    
})




prevButton.addEventListener("click" , function(){
    if(indexNumber > 0){

        indexNumber--
        slide.src = images[indexNumber]
        end.innerHTML= "Explore Diffrent Images"
        end.style.backgroundColor =""
    }
})