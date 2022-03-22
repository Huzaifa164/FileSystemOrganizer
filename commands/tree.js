function treeFn(dirPath) {
    // let destPath;
    if (dirPath == undefined) {
        treeHelper(process.cwd(), "");;
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        }
        else {
            console.log("Kindly enter the path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    // isFile or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "|--" + fileName);
    }
    else {
        let dirName = path.basename(dirPath);
        console.log(indent + "|__" + dirName);
        let children = fs.readdirSync(dirPath);
        for (let i = 0; i < children.length; i++) {
            let childPath = path.join(dirPath, children[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey: treeFn
}