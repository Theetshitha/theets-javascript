
let createDiv=document.createElement("div");
createDiv.setAttribute('class','div1');
document.body.append(createDiv);

let createImg=document.createElement("img");
createImg.setAttribute("src"," ");
createDiv.append(createImg);
createImg.src="tom.jpeg"

let createbtn1=document.createElement("button");
createbtn1.setAttribute('id', 'btn1');
createbtn1.innerText="PREVIOUS";
createDiv.append(createbtn1);

let createbtn2=document.createElement("button");
createbtn2.setAttribute('id','btn2');
createbtn2.innerText="NEXT";
createDiv.append(createbtn2);

let imageCount=1;
let imageName=["tom.jpeg","tom1.jpeg","tom2.jpeg","tom4.jpeg","tom5.jpeg","tom6.jpeg","tom7.jpeg","tom8.jpeg","tom9.jpeg","tom10.jpeg","tom11.jpeg","tom12.jpeg","tom13.jpeg","tom14.jpeg","tomj.jpeg","tomje.jpeg"];

btn1.addEventListener("click",previous);
btn2.addEventListener("click",next)

function next()
{
    if(imageCount==imageName.length-1)
    {
        imageCount=1
    }
    else
    {
        createDiv.style.backgroundImage=imageName[imageCount]
        createImg.src=imageName[imageCount]
        imageCount=imageCount> imageName.length ? 0 : imageCount+1;
    }

}

function previous()
{
    if(imageCount==1)
    {
        imageCount=imageName.length-1;
    }
    else
    {
        createDiv.style.backgroundImage=imageName[imageCount]
        createImg.src=imageName[imageCount]
        imageCount=imageCount> imageName.length ? 1 : imageCount-1;
    }
   
}








// let imageName=["tom.jpg","tom1.jpeg","tom2.jpeg","tom4.jpeg","tom5.jpeg","tom6.jpeg","tom7.jpeg","tom8.jpeg","tom9.jpeg","tom10.jpeg","tom11.jpeg","tom12.jpeg","tom13.jpeg","tom14.jpeg","tomj.jpeg","tomje.jpg"];

// function colorChange(){
//     document.body.style.backgroundImage=url(colorCode[colorCount]);
//     btn2.innerText=colorCode[colorCount];
//        colorCount++;
//        if(colorCount==colorCode.length-1)
//        {
//         colorCount=0;
//        }
// }
// let imageName=["tom","tom1","tom2","tom4","tom5","tom6","tom7","tom8","tom9","tom10","tom11","tom12","tom13","tom14","tomj","tomje"];
