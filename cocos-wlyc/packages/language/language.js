let fs = require('fs')

module.exports = {

	'en-us': function () {
		this.changeLanguage('en-us');
	},
	
	'zh-cn': function () {
		this.changeLanguage('zh-cn');
	},
	  
	changeLanguage(folderName)
	{
		Editor.log('[language] start change..' ,folderName);
		let folderPath = Editor.Project.path + '\\language\\' + folderName;		
		this.countingFiles = 1;
		this.findOrCopyFile(folderName, folderPath);
	},
	
	findOrCopyFile(folderName, folderPath){
			
		Editor.log('[language] folderPath' ,folderPath);
		let self = this;
		fs.readdir(folderPath, function (err, files) {
			if (err) {
				throw err;
			}
			self.countingFiles += files.length;
			files.forEach(function (name) {
				var filePath = folderPath + '\\' + name;
				var stat = fs.statSync(filePath);
				if (stat.isFile()) {
					self.copyFile(folderName, filePath);
				} else if (stat.isDirectory()) {
					self.findOrCopyFile(folderName, filePath);
				}
			});

			self.countingFiles--;
			if(self.countingFiles == 0){
				self.refreshResource();
			}
		});

	},	
	
	// 替換檔案
	copyFile(folderName, filePath){
		let self = this;
		let targetPath = filePath.replace('\\language\\' + folderName, '\\assets')
		fs.copyFile(filePath, targetPath, (err) => {
			if (err) throw err;
			Editor.log('[language]copy' , targetPath);	
			self.countingFiles --;	
			if(self.countingFiles == 0){
				self.refreshResource();
			}		
		});
	},
	
	// 刷新資源
	refreshResource(){
		let self = this;
		Editor.assetdb.refresh('db://assets', function (err, results) {
			if (err) throw err;
			Editor.log("[language] refresh");
		});	
	},	


};