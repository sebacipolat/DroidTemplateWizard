const logo = require('./logo.js');


function welcome() {
    console.log(logo);
    console.log("********************************************"); 
    console.log("  Welcome to the Android Module Generator   "); 
    console.log("********************************************"); 
}

// Configuración de Plop
module.exports = function (plop) {
    welcome();
    // controller generator
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Module name:'
        },
        {
            type: 'input',
            name: 'packageID',
            message: 'Package:'
        }],
        actions: [{
            type: 'addMany',
            destination: 'output/',
            templateFiles: 'template/**/*'
        }]
    });
};

