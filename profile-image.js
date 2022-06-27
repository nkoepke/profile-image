class ProfileImage {
    constructor(text = "NN", textColor = "#ffffff", backgroungColor = "#1081c1", font = "sans-serif", fontSize = 40) {
        this.text = text;
        this.textColor = textColor;
        this.backgroungColor = backgroungColor;
        this.font = font;
        this.fontSize = fontSize;
    }
    svg(goodColor = false){
        if(goodColor)
            this.textColor = "#ffffff";
        return `<svg viewBox='0 0 100 100' width='100' height='100' style='background-color:${(!goodColor ? this.backgroundColor : this.#getColor(this.text))}'><text x='50%' y='50%' alignment-baseline='central' text-anchor='middle' font-family='${this.font}' font-size='${this.fontSize}' fill='${this.textColor}' dominant-baseline='middle' text-anchor='middle'>${this.text}</text></svg>`;
    }
    png(goodColor = false){
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        canvas.width = 256;
        canvas.height = 256;
        // Draw background
        context.fillStyle = (!goodColor ? this.backgroundColor : this.#getColor(this.text));
        context.fillRect(0, 0, canvas.width, canvas.height);
        // Draw text
        context.font = "bold 100px Arial";
        context.fillStyle = this.textColor;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(this.text, canvas.width / 2, canvas.height / 2);
        return canvas.toDataURL("image/png");
    }
    #getArbitrary(seed, min, max) {
        return Math.floor(this.#hashFnv32a(seed, false, 7)/10000000000 * (max - min) + min);
    };
    #hashFnv32a(str, asString, seed) {
        var i, l,
            hval = (seed === undefined) ? 0x811c9dc5 : seed;
    
        for (i = 0, l = str.length; i < l; i++) {
            hval ^= str.charCodeAt(i);
            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
        }
        if(asString){
            // Convert to 8 digit hex string
            return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
        }
        return hval >>> 0;
    };
    #getColor(str){
        return "hsl(" + this.#getArbitrary(str,0,360) + "," + this.#getArbitrary(str,60,100) + "%," + this.#getArbitrary(str,40,60) + "%)";
    };
}
