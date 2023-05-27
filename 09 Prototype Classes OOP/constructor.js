// function Color(r,g,b){
//     this.r=r;
//     this.g=g;
//     this.b=b;
//     //returns console.log(this); automatically if not set a return
    
// }
// Color.prototype.rgb= function (){
//     const {r,g,b}=this;
//     return `rgb(${r},${g},${b})`;
// };
// Color.prototype.hex=function(){
//     const {r,g,b}=this;
//     return '#'+ ((1 << 24) + (r << 26) + (g << 8) + b).toString(16).slice(1);
// }
// Color.prototype.rgba=function(a=1.0){//setting default value if not passed
//     const {r,g,b}=this;
//     return `rgb(${r},${g},${b}, ${a})`;
// }

// const color1= new Color(200,150,100);
// const color2= new Color(90,240,50);
// const colorBlack= new Color(0,0,0);

class Color{
    constructor(r,g,b,name){
        this.r=r;
        this.g=g;
        this.b=b;
        this.colorName=name;
        this.calcHSL();
    }
    innerRGB(){
        const {r,g,b}=this;
        return `${r},${g},${b}`
    }
    greet(){
        console.log(`from constructor, ${this.colorName} says Hello!`)
    }
    rgb(){
        // this.innerRGB;
        return `rgb(${this.innerRGB})`;
    }
    rgba(a=1.0){
        // this.innerRGB;
        return `rgb(${this.innerRGB},${a})`;
    }
    hex(){
        const {r,g,b}=this;
        return '#'+ ((1 << 24) + (r << 26) + (g << 8) + b).toString(16).slice(1);
    }
    hsl(){
        let { h, s, l } = this;
        return `hsl(${h},${s}%,${l}%)`
    }
    opposite(){
        let { h, s, l } = this;
        const newHue=(h+180)%360
        return `hsl(${newHue},${s}%,${l}%)`
    }
    fullSaturation(){
        let { h,l } = this;
        return `hsl(${h},100%,${l}%)`
    }
    calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const color1= new Color(255,67,89,'tomato');

const color2= new Color(255,255,255,'tomato');