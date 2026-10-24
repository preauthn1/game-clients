let fs=require('fs');
let countingFiles=0;
let fileCoverList=[];

module.exports={

    'EN-US' : function () {
        this.changeLanguage('EN-US');
    },

    'ZH-CN' : function () {
        this.changeLanguage('ZH-CN');
    },

    changeLanguage(folderName) {
        window.Lang=folderName;
        Editor.log('[language] start change..', folderName);
        let folderPath=Editor.Project.path + '\\language\\' + folderName;
        countingFiles=1;
        fileCoverList=[];
        this.findOrCopyFile(folderName, folderPath);
    },

    findOrCopyFile(folderName, folderPath) {
        Editor.log('[language] folderPath', folderPath);
        let self=this;
        fs.readdir(folderPath, function (err, files) {
            if (err) {
                throw err;
            }
            countingFiles+=files.length;
            files.forEach(function (name) {
                var filePath=folderPath + '\\' + name;
                var stat=fs.statSync(filePath);
                if (stat.isFile()) {
                    self.copyFile(folderName, filePath);
                } else if (stat.isDirectory()) {
                    self.findOrCopyFile(folderName, filePath);
                }
            });

            countingFiles --;
            if (countingFiles == 0) {
                self.refreshResource(folderPath);
            }
        });

    },

    // 替換檔案
    copyFile(folderName, filePath) {
        fileCoverList.push(cc.path.basename(filePath));
        let self=this;
        let targetPath=filePath.replace('\\language\\' + folderName, '\\assets\\resources');
        fs.copyFile(filePath, targetPath, (err) => {
            if (err) throw err;
            Editor.log('[language]copy', targetPath);
            countingFiles --;
            if (countingFiles == 0) {
                self.refreshResource(folderName);
            }
        });
    },

    // 刷新資源
    refreshResource() {
        let self=this;
        Editor.assetdb.refresh('db://assets/resources', function (err, results) {
            if (err) throw err;
            Editor.log("[language] refresh");
            // setTimeout(function () {
            //     self.resetPictureSize();
            // }, 1000);
        });

    },

};