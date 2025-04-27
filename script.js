var bigImg;
var regions=[];
var boxes=[[921,388,300,160],[618,447],[79,425],[1261,947],[1763,385],[1327,270],[479,917],[157,686],[1462,481]];
var messages=["This section of the wall is covered in gold, and it may be an example of the gold renovations carried out during the 19th century. Gold is generally thought of as having an aesthetically pleasing hue, so the incorporation of it reflects Seville’s high valuation of beauty. The extravagant cost of materials, such as gold, used to outfit the home of the king demonstrates the level of reverence the city has for him.",
    "Silver work was also popular throughout the palace in the 19th century. The use of a balcony contributes to the castle’s open and welcoming feel, which enhances the experience of the king living in the castle. The deep thoughtfulness in the design of the Royal Alcázar indicates the city’s dedication to the monarchy.",
    "The palace prominently features arches, especially among the doorways and entrances. The highlighted arch pattern on the wall is yet another example. Through the use of arches, the palace’s designers develop thematic consistency, a key aspect of the palace’s beauty.",
    "The interior walls are lined with a diverse arrangement of patterns. These patterns play a key role in enhancing the palace’s aesthetic feel. There is a large amount of variety in the hues and geometry of the different patterns, but they are all permeated by the symmetry that governs the design of the whole palace.",
    "Many prominent symbols are nested within the designs embedded on the walls. In this case, the sun is pictured on the design. The sun represents the central body in our solar system, like how the palace aims to be the central building of Seville. Additionally, the depiction of the sun evokes a feeling of happiness and hope.",
    "Portraits of every king that lived in the palace are framed in gold and mounted on the walls. The palace commissioned a pupil of the legendary Francisco Goya, Vicente Lopez, to paint many portraits in the palace. The city’s commitment to enshrining the memories and histories of past monarchs reveals a strong belief in the monarchy.",
    "The different materials and patterns of the palace are representative of the distinct ways architecture evolved over time, all coming together to form it. Since the palace underwent a host of renovations over centuries of years, it became a melting pot of the varying architectural styles in Seville throughout the city’s illustrious history.",
    "This symbol, depicting an upright lion rearing its claws, is the emblem of Spain’s Kingdom of León, an integral contributor to the Reconquest and the history of the monarchy in Spain. The lion is also part of Spain’s national coat of arms, representing qualities like watchfulness, authority, monarchy, majesty, and bravery. This engraving demonstrates a belief in patriotism and the monarchy. Note: This design is slightly inflated to improve visibility.",
    "This pattern illustrates the immense importance of geometric designs in architectural beauty. It serves as one example of the frequent, widespread use of geometric designs in a multitude of different cultures to elevate the aesthetic feel of structures. In this pattern, shapes are used to form interconnected suns and stars, an abstract portrayal of nature’s influence and beauty."
]
function preload(){
    bigImg=loadImage("reales_alcazares_annotated.png")
    for(let i=1;i<10;i++){
        regions.push(loadImage("region"+i+".png"))
    }
}

function setup(){
    createCanvas(1550,1000)
    console.log("thing:"+regions[0].get(0,0))
    rectMode(CORNER)
}
function charSplit(string){
    let arr=[""]
    let words=string.split(" ")
    for(let i=0;i<words.length;i++){
        if(arr[arr.length-1].length+words[i].length>=39){
            arr.push("")
        }
        arr[arr.length-1]=arr[arr.length-1]+words[i]+" "
    }
    return arr;
}
function draw(){
    background("white")
    image(bigImg,0,0,1400,1000)
    for(let i=0;i<9;i++){
        if(regions[i].get(mouseX*3/2,mouseY*3/2)[3]!=0){
            blurb=charSplit(messages[i])
            fill("black")
            rect(boxes[i][0]/3*2,boxes[i][1]/3*2,350,blurb.length*15+10)
            fill("white")
            textSize(15)
            textFont("Courier")
            for(let e=0;e<blurb.length;e++){
                text(blurb[e],boxes[i][0]/3*2+5,boxes[i][1]/3*2+(15*(e+1)))
            }
        }
    }

}