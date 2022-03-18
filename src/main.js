module.exports = (vemto) => {

    return {

        canInstall() {
            return true
        },

        onInstall() {
            vemto.savePluginData({
                packages: [
                    {name: 'Arcanedev Laravel Notes', package: 'arcanedev/laravel-notes', version: '^9.0', checked: true, description: 'Arcanedev Laravel Notes is a package that allows you to create notes for your Laravel projects.', link: 'https://github.com/ARCANEDEV/LaravelNotes'},
                    {name: 'Cybercog Laravel Love', package: 'cybercog/laravel-love', version: '^8.9', checked: true, description: 'Add favourites to your models', link: 'https://github.com/cybercog/laravel-love'},
                    {name: 'Cybercog Laravel Ban', package: 'cybercog/laravel-ban', version: '^4.7', checked: true, description: 'Add bans to your models', link: 'https://github.com/cybercog/laravel-ban'},
                ]
            })
        },

        composerPackages(packages) {
            let data = vemto.getPluginData()

            for (let package of data.packages) {
                if (package.checked) {
                    packages.require[package.package] = package.version
                }
            }

            return packages
        },

        beforeCodeGenerationStart() {
            let data = vemto.getPluginData()

            vemto.log.info(data.text)
            vemto.log.warning(`That's awesome!!! A Vemto plugin showing a message during code generation`)
        },

    }

}