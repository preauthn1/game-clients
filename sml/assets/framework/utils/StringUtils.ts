/**
 * 字串工具
 * @copyright Maycharm
 * @version 1.0.0
 * @author Jason.Chuang
 */
export namespace StringUtils {
    
    /**
     * 格式化字串
     * @param format 字串格式
     * @param args 參數
     * @returns 格式化結果
     */
    export function format(format: string, ...args: any[]) {
        for (var i = 0; i < args.length; ++i) {
            var reg = getStringFormatPlaceHolderRegEx(i);
            format = format.replace(reg, (args[i] === null ? '' : args[i].toString()));
        }
        return cleanStringFormatResult(format);
    }

    function getStringFormatPlaceHolderRegEx(placeHolderIndex: any) {
        return new RegExp('({)?\\{' + placeHolderIndex + '\\}(?!})', 'gm');
    }

    function cleanStringFormatResult(txt: string) {
        if (txt == null) return "";
        return txt.replace(getStringFormatPlaceHolderRegEx("\\d+"), "");
    }

}