const Realm = require("realm");

function openRealm(path) {
    return new Realm({ path, disableFormatUpgrade: true });
}

exports.openRealm = openRealm;
