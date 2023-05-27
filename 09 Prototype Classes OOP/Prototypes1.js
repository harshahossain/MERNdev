function rgb(r,g,b){
    return `rgb(${r},${g},${b})`
}
function makeColor(r,g,b){
    const color={}
    color.r=r;
    color.g=g;
    color.b=b;
    color.rgb= function (){
        const {r,g,b}=this;
        return `rgb(${r},${g},${b})`;
    }
    color.hex=function(){
        const {r,g,b}=this;
        return '#'+ ((1 << 24) + (r << 26) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}
const f1Color=makeColor(30,235,150)
f1Color.rgb();


