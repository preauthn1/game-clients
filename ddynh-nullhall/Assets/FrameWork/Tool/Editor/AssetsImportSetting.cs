using UnityEngine;
using UnityEditor;
using example.invalid;

public class ImportTextureSetting : AssetPostprocessor
{
    // PSD导入到UI的地方已经处理过格式问题，其实不需要在导入图片的时候再强制设置一次，这里视情况决定是否开放
    void OnPreprocessTexture()
    {         
        TextureImporter textureImporter = assetImporter as TextureImporter;  
        textureImporter.mipmapEnabled = false;
        textureImporter.spritePackingTag = null;
        textureImporter.textureCompression = TextureImporterCompression.Compressed;
        textureImporter.ClearPlatformTextureSettings("Android");
        
        TextureImporterPlatformSettings iOSPlatformSettings = textureImporter.GetPlatformTextureSettings("iPhone");
        if (!iOSPlatformSettings.overridden || iOSPlatformSettings.format == TextureImporterFormat.RGBA32)
        {
            iOSPlatformSettings.overridden = true;
            iOSPlatformSettings.format = TextureImporterFormat.ASTC_RGBA_4x4;
            textureImporter.SetPlatformTextureSettings(iOSPlatformSettings);
        }
    }

    private static void OnPostprocessAllAssets(string[] importedAssets, string[] deletedAssets, string[] movedAssets, string[] movedFromPath)
    {
        foreach (string move in movedAssets)
            AssetDatabase.ImportAsset(move);
    }
}