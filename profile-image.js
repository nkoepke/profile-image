class ProfileImage {
    constructor(text = "NN", textColor = "#ffffff", backgroundColor = "#1081c1", font = "Arial", fontSize = 40) {
        this.text = text;
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
        this.font = font;
        this.fontSize = fontSize;
    }
    svg(){
        return `<svg viewBox='0 0 100 100' width='100' height='100' style='background-color:${this.backgroundColor}; font-weight: bold;'><text x='50%' y='50%' alignment-baseline='central' text-anchor='middle' font-family='${this.font}' font-size='${this.fontSize}' fill='${this.textColor}' dominant-baseline='middle'>${this.text}</text></svg>`;
    }
    png(){
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        canvas.width = 256;
        canvas.height = 256;
        context.fillStyle = this.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = "bold 100px " + this.font;
        context.fillStyle = this.textColor;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(this.text, canvas.width / 2, canvas.height / 2);
        return canvas.toDataURL("image/png");
    }
    previewInConsole(){
        console.log(`%c ${this.text} `, `background: ${this.backgroundColor}; color: ${this.textColor}`);
    }
}
