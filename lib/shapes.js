//
const shapes = (answers) => {
    const { shape, color, height, width, title } = answers;
    const seventyPercentWidth = 0.70 * width;
    const seventyPercentHeight = 0.70 * height;

    let svgContent = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
    // switch module for my shapes and text
    switch (shape.toLowerCase()) {
        case 'circle':
            svgContent += `<circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) / 2}" fill="${color}" />
            <text x="75" y="165" font-size="${Math.min(seventyPercentWidth, seventyPercentHeight) / 3}" fill="white">${title}</text>`;
            break;
        case 'triangle':
            const trianglePoints = `0,${height} ${width / 2},0 ${width},${height}`;
            svgContent += `<polygon points="${trianglePoints}" fill="${color}" />
            <text x="75" y="165" font-size="${Math.min(seventyPercentWidth, seventyPercentHeight) / 3}" fill="white">${title}</text>`;
            break;
        case 'square':
            svgContent += `<rect x="0" y="0" width="${width}" height="${height}" fill="${color}" />
            <text x="75" y="165" font-size="${Math.min(seventyPercentWidth, seventyPercentHeight) / 3}" fill="white">${title}</text>`;
            break;
        case 'title':
            svgContent += `<text x="75" y="165" font-size="${Math.min(seventyPercentWidth, seventyPercentHeight) / 3}" fill="white">${title}</text>`;
            break;
        default:
            svgContent += `<text x="10" y="20">Shape not recognized</text>`;
    }

    svgContent += `</svg>`;
  
    return svgContent;
};
// export module
module.exports = shapes;

