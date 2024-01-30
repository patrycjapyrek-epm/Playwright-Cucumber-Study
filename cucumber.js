const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    require set-definitions/**/*.step.js
`

module.expoerts = {
    default: `${common} features/**/*.feature`
}