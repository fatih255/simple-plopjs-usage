const componentOptions = {
    description: 'Create a new React component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Name of your component:'
        },
        {
            type: 'confirm',
            name: 'form',
            message: 'Do you have form hooks inside the component'
        }
    ],
    actions: () => [
        {
            type: 'pretty-add',
            path: './src/components/{{pascalCase name}}/index.ts',
            templateFile: './.plop/templates/component/index.ts.hbs'
        },
        {
            type: 'pretty-add',
            path: './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: './.plop/templates/component/{{name}}.tsx.hbs'
        },
        {
            type: 'pretty-add',
            path: './src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: './.plop/templates/component/{{name}}.stories.tsx.hbs'
        },
        {
            type: 'pretty-add',
            path: './src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
            templateFile: './.plop/templates/component/{{name}}.spec.tsx.hbs'
        },
        {
            type: 'pretty-add',
            path: './src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
            templateFile: './.plop/templates/component/{{name}}.module.scss.hbs'
        }
    ]
};

module.exports = (plop) => {
    const prettierConfig = require('prettier').resolveConfig.sync(__dirname)
    plop.load('plop-prettier', prettierConfig)
    plop.setGenerator('Component', componentOptions)
}