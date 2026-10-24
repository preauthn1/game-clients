var aesjs = require('aes-js');

class AESEncrypt {
	constructor(token) {
		this.token = [REDACTED];
		var tokenBytes = aesjs.utils.hex.toBytes(this.token);
		this.client = new aesjs.ModeOfOperation.ecb(tokenBytes);
  }

  encrypt (text) {
		var textBytes = aesjs.utils.utf8.toBytes(text);
		var paded = aesjs.padding.pkcs7.pad(textBytes);
		var encryptedBytes = this.client.encrypt(paded);
		var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
		return encryptedHex;
  }

decrypt (text){
		var encryptedBytes = aesjs.utils.hex.toBytes(text);
		var decryptedBytes = this.client.decrypt(encryptedBytes);
		var unpaded = aesjs.padding.pkcs7.strip(decryptedBytes);
		var decryptedText = aesjs.utils.utf8.fromBytes(unpaded);
		return decryptedText;
	}
}

module.exports = AESEncrypt
