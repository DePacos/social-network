export {}

module.exports = {
    "devDependencies": {
        "babel-plugin-styled-components": "^2.1.4"
    },

"babel": {
        "plugins": [
        [
            "babel-plugin-styled-components",
            {
                "namespace": "",
                "displayName": true,
                "fileName": true,
                "ssr": false,
                "meaninglessFileNames": ["index"]
            }
        ]
    ]
},
}

