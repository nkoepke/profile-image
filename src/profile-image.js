/*
	Client JavaScript
*/
class ProfileImage {
	constructor(name, options = {}) {
		this.name = name;
		this.textColor = options.textColor || "#ffffff";
		this.backgroundColor = options.backgroundColor || "#1f6feb";
		this.fontFamily = options.fontFamily || "Arial";
		this.fontSize = options.fontSize || 40;
		this.fontWeight = options.fontWeight || "normal";
	}
	svg() { // returns svg as string
		return `<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100' width='100' height='100' style='font-weight: ${this.fontWeight};'><rect width='100' height='100' x='0' y='0' fill='${this.backgroundColor}'></rect><text x='50%' y='50%' alignment-baseline='central' text-anchor='middle' font-family='${this.fontFamily}' font-size='${this.fontSize}' fill='${this.textColor}' dominant-baseline='middle'>${this.#shortName()}</text></svg>`;
	}
	png() { // returns png as base64 string
		let canvas = document.createElement("canvas");
		let context = canvas.getContext("2d");
		canvas.width = 256;
		canvas.height = 256;
		context.fillStyle = this.backgroundColor;
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.font = this.fontWeight + " 100px " + this.fontFamily;
		context.fillStyle = this.textColor;
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(this.#shortName(), canvas.width / 2, canvas.height / 2);
		return canvas.toDataURL("image/png");
	}
	previewInConsole() { // a color preview in the console
		console.log(`%c ${this.#shortName()} `, `background: ${this.backgroundColor}; color: ${this.textColor}`);
		return this;
	}
	listAttributesInConsole() { // list all object attributes as a table in the console
		console.table(this);
		return this;
	}
	#shortName() { // internal function, shortens the name to max. 2 characters
		let n_arr = this.name.split(" ");
		let n_res = "";
		if(n_arr.length <= 2){
		    for(let i = 0; i < n_arr.length; i++){
			n_res += n_arr[i][0].toUpperCase();
		    }
		}
		else{
		    for(let i = 0; i < 2; i++){
			n_res += n_arr[i][0].toUpperCase();
		    }
		}
		return n_res;		
	}
}

// Exporting the class ProfileImage to be used in other files as a commonjs module
/*
module.exports = ProfileImage;
*/
