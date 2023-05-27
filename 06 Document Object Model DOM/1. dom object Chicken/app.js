
// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }



// ******************************************************************
// ******************************************************************
//GET ELEMENT BY ID context |getElementById| 
//var element=document.getElementsById(id);  ELEMENT ELEMENT ELEMENT ELEMENT ELEMENT
//getElementsByTagName getElementsByClassName ELEMENTS ELEMENTS ELEMENTS ELEMENTS ELEMENTS

//=>CONSOLE mood
// document.banner
// undefined
// document.getElementById('chicken')
// null
// console.dir(banner) //VVI
// VM7775:1 img#banneraccessKey: ""align: ""alt: ""ariaAtomic: nullariaAutoComplete: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: id, 1: src, 2: alt, id: id, src: src, alt: alt, length: 3}autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:5500/05%20Document%20Object%20Model%20DOM/1.%20dom%20object%20Chicken/index.html"border: ""childElementCount: 0childNodes: NodeList []children: HTMLCollection []classList: DOMTokenList [value: '']className: ""clientHeight: 685clientLeft: 0clientTop: 0clientWidth: 1027complete: truecontentEditable: "inherit"crossOrigin: nullcurrentSrc: "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"dataset: DOMStringMap {}decoding: "auto"dir: ""draggable: trueelementTiming: ""enterKeyHint: ""firstChild: nullfirstElementChild: nullheight: 686hidden: falsehspace: 0id: "banner"innerHTML: ""innerText: ""inputMode: ""isConnected: trueisContentEditable: falseisMap: falselang: ""lastChild: nulllastElementChild: nullloading: "auto"localName: "img"longDesc: ""lowsrc: ""name: ""namespaceURI: "http://www.w3.org/1999/xhtml"naturalHeight: 1702naturalWidth: 2550nextElementSibling: pnextSibling: textnodeName: "IMG"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 685offsetLeft: 128offsetParent: bodyoffsetTop: 79offsetWidth: 1027onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<img id=\"banner\" src=\"https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80\" alt=\"\">"outerText: ""ownerDocument: documentparentElement: bodyparentNode: bodypart: DOMTokenList [value: '']prefix: nullpreviousElementSibling: h1previousSibling: textreferrerPolicy: ""scrollHeight: 685scrollLeft: 0scrollTop: 0scrollWidth: 1027shadowRoot: nullsizes: ""slot: ""spellcheck: truesrc: "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"srcset: ""style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "IMG"textContent: ""title: ""translate: trueuseMap: ""virtualKeyboardPolicy: ""vspace: 0width: 1028x: 141y: 87[[Prototype]]: HTMLImageElement
// undefined
const banner=document.getElementById('banner');
console.log(banner)
const toc=document.getElementById('toc');
console.log(toc)

const allImages=document.getElementsByTagName('img')
console.dir(allImages[1])

// NOT AN ARRAY!!!!!!!!!!!!!! NOT AN ARAAY!!!!!!!!!!!!!!

for(let img of allImages){
    //console.log(img.src)
    //img.src='https://www.mypokecard.com/en/Gallery/my/galery/GkWZoGEa4z14.jpg'
}
const squareImages= document.getElementsByClassName('square');
for(let squaredImages of squareImages){
   //squaredImages.src='https://www.mypokecard.com/en/Gallery/my/galery/GkWZoGEa4z14.jpg';
} 

//finds first h1 element
document.querySelector('h1')
//Finds the first element with the id red
document.querySelector('#red')

//finds the first element with the class big
document.querySelector('.big')
// finds the 2nd element of the img tag 
document.querySelector('img:nth-of-type(2)')

// selects 1
document.querySelector('a[title="Java"]')

// selects All
document.querySelectorAll('a[title="Java"]')

//selects all anchor tag inside pargraphs. CONTEXT=just like css.. Add Space.. we can class selector, adjacent selectetor decendant selector
document.querySelectorAll('p a')

const links=document.querySelectorAll('p a');
for (let link of links){
    console.log(link.href) // href just gives us the link
}


// ****************************************************************************************
//innterText textContent innerHTML
// document.querySelector('p').innerText='lolololololl'
//consolle mod
document.querySelector('p').innerText//the content that is vivsible in the browser
document.querySelector('p').textContent//basicallly everything. the hidden stuff will show up and therews \n new line?

// innerText. 
// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


//HMM? innerHTML is the Right Format for italasizes and stuff like that with <> stuffs!!!!!
// document.querySelector('h1').innerText='<i>YOOO IM ITALIC BUT WITH QUERYSELECTOR</i>'

//this one is the right format. innerHTML
// document.querySelector('h1').innerHTML='<i>YOOO IM ITALIC BUT WITH QUERYSELECTOR</i>'
// document.querySelector('h1').innerHTML+='<sup>Checking if <sup> also works with += though</sup>'



//ID  attribute
// document.querySelector('#banner').id;
document.querySelector('#banner').id='whoop'
document.querySelector('#whoop').id='banner'
// document.querySelector('#banner').src='';


const firstLink=document.querySelector('a');
firstLink.href;
firstLink.getAttribute('href')

// firstLink.setAttribute('href','https://www.google.com')

// document.querySelectorAll('input')[1]
const allLinks=document.querySelectorAll('a');
for(let link of allLinks){
    link.style.color='rgb(17, 15, 107)';
    link.style.textDecorationColor='Yellow';
    link.style.textDecorationStyle='wavy';
    

}
document.body.style.backgroundColor='#52b69a'


// window.getComputedStyle(h1)
// window.getComputedStyle(h1).color
// window.getComputedStyle(h1).margin
// window.getComputedStyle(h1).fontSize
// window.getComputedStyle(h1).fontFamily

// ***************************************************
// exercise 55
// document.querySelector('div[id="container"]').style.textAlign='center';
// document.querySelector('img').style.width='150px';
// document.querySelector('img').style.borderRadius='50%';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
for(let i=0; i<colors.length;i++){
    document.querySelectorAll("span")[i].style.color=colors[i];

}

//********************************************************************************** */
//classList
// *************************************************************************************************************
// CONSOLLE MOOD
// document.querySelector('#mw-toc-heading')
// document.querySelector('h2').getAttribute('class')//nulll
// document.querySelector('h2').setAttribute('class','purple')
// document.querySelector('h2').getAttribute('id')//mw-toc-heading

const h2=document.querySelector('h2')
// h2.setAttribute('class','purple')

//to set mutliple classes together.
// let currentClass=h2.getAttribute('class') // next step is replicating the css lines using string template literal
// h2.setAttribute('class',`{currentClass} border`)

//we can do this easily with classList
h2.classList.add('purple')
h2.classList.add('border') 
h2.classList.remove('border')
h2.classList.contains('border')
h2.classList.contains('purple')//gotta conslog

h2.classList.toggle('purple')//if it is true or it is in the class it will turn it off and vice-versa EVRYTIME WE CALL IT
//the upper line will return false now  if we conslog it because it was true before 
h2.classList.toggle('purple')//now its true again
h2.classList.toggle('purple')//now it is false 
h2.classList.toggle('purple')//true again


// exercise
// const li=document.querySelectorAll('li')
// for (let i=0; i<document.querySelectorAll('li').length;i++){
//     document.querySelectorAll('li')[i].classList.toggle('highlight')
// }
// for (let eachLi of li) {
//     eachLi.classList.toggle("highlight")
// }
const firstBold=document.querySelector('b')
const paragraph=firstBold.parentElement
paragraph.children//html collection[]

const square1=document.querySelector('.square')
square1.nextElementSibling
square1.previousElementSibling


// ************************************************************************************
// document.createElement('img')
const newImg=document.createElement('img');
newImg.src='https://www.pngitem.com/pimgs/m/650-6507957_more-like-courage-the-cowardly-dog-by-imperial1722.png';
document.body.appendChild(newImg)
newImg.classList.add('square')
const newH3=document.createElement('h3');
newH3.innerText='Courage The Cowardly Dog'
document.body.appendChild(newH3)

// apppend
const p=document.querySelector('p')
p.append('CHICKEEEEEEEEEEEEEEEN','  ','MORE CHIKENS')
const newB=document.createElement('b')
newB.append('Hi! ')
p.prepend(newB)

const Nh2=document.createElement('h2')
Nh2.append('Silkie Chickens are looks cute!!!')
document.querySelector('h1').insertAdjacentElement('afterend',Nh2)