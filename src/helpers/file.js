const fs = require('fs');

module.exports = {
    unlinkFile: ((dir) => {
        fs.unlink(dir, (err) => {
            if (err) throw err;
            console.log(`successfully deleted ${dir}`);
        });
    })
}