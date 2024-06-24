//
const shapes = (answers) => {
    const { shape, color, height, width, title } = answers;
    const seventyFivePercentWidth = 0.75 * width;
    const seventyFivePercentHeight = 0.75 * height;

    let svgContent = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;

    switch (shape.toLowerCase()) {
        case 'circle':
            svgContent += `<circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="${color}" />`;
            break;
        case 'triangle':
            const trianglePoints = `0,${height} ${width / 2},0 ${width},${height}`;
            svgContent += `<polygon points="${trianglePoints}" fill="${color}" />`;
            break;
        case 'square':
            svgContent += `<rect x="0" y="0" width="${width}" height="${height}" fill="${color}" />`;
            break;
        case 'title':
            svgContent += `<text x="10" y="20" font-size="${Math.min(seventyFivePercentWidth, seventyFivePercentHeight) / 3}" fill="white">${title}</text>`;
            break;
        default:
            svgContent += `<text x="10" y="20">Shape not recognized</text>`;
    }

    svgContent += `</svg>`;
    return svgContent;
};

module.exports = shapes;
