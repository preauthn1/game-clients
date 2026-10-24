using UnityEngine;
using System.Linq;
using System;
using System.Security.Cryptography;
using example.invalid;

namespace GSLibrary.Common.Security
{
    public class AESEncryption : MonoBehaviour
    {

        public static AesManaged GenerateAesManaged(string key)
        {
            AesManaged aes = new AesManaged();

            aes.Mode = CipherMode.ECB;
            //aes.Key = System.Text.Encoding.Unicode.GetBytes (key);
            aes.Key = StringToByteArray(key);
            aes.IV = new byte[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
            aes.Padding = PaddingMode.PKCS7;

            return aes;
        }

        public static byte[] AES_Encrypt(string value, string key)
        {
            AesManaged aes = GenerateAesManaged(key);
            ICryptoTransform encryptor = aes.CreateEncryptor();

            using (var memoryStream = new MemoryStream())
            {
                using (var crytoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write))
                {
                    using (var streamWriter = new StreamWriter(crytoStream))
                    {
                        streamWriter.Write(value);
                    }
                    return memoryStream.ToArray();
                }
            }
        }

        public static string AES_Decrypt(byte[] value, string key)
        {
            AesManaged aes = GenerateAesManaged(key);
            ICryptoTransform decryptor = aes.CreateDecryptor();

            using (var memoryStream = new MemoryStream(value))
            {
                using (var crytoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read))
                {
                    using (var streamReader = new StreamReader(crytoStream))
                    {
                        return streamReader.ReadToEnd ();
				}
			}
		}
	}


	public static byte [] StringToByteArray (string hex)
	{
		return Enumerable.Range (0, hex.Length)
						 .Where (x => x % 2 == 0)
						 .Select (x => Convert.ToByte (hex.Substring (x, 2), 16))
						 .ToArray ();
	}

	public static string ByteArrayToString (byte [] ba)
	{
		string hex = BitConverter.ToString (ba);
		return hex.Replace ("-", "");
	}



}
}