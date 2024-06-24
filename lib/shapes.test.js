// loading in shapes.js file
const shapes = require('./shapes')
// rendered test
describe('shapes', () => {
    it('testing render', function(){
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })

})


