module.exports = {
    "name": "AlienVaultOTX",
    "acronym":"AVOTX",
    "logging": { level: 'info'},
    "description": "AlienVaultOTX api integration",
    "entityTypes": ['domain', 'IPv4', 'hash'],
    "styles":[
        "./styles/otx.less"
    ],
    "block": {
        "component": {
            "file": "./components/otx-block.js"
        },
        "template": {
            "file": "./templates/otx-block.hbs"
        }
    },
    "options":[
        {
            "key"         : "apiKey",
            "name"        : "API Key",
            "description" : "AlienVaultOTX API key",
            "default"     : "default value",
            "type"        : "text",
            "userCanEdit" : false,
            "adminOnly"    : false
        },
        {
            "key"         : "blacklist",
            "name"        : "Blacklist Domains",
            "description" : "List of domains that you never want to send to AlienVaultOTX",
            "default"     : "default value",
            "type"        : "text",
            "userCanEdit" : false,
            "adminOnly"    : false
        }

    ]
};
