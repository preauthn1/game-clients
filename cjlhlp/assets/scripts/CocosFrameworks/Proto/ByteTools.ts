/**
 * Byte to Int and int to Byte Tools
 */

export abstract class ByteTools {
 
    static bytes2Int (b: ArrayBuffer) {
        var a = [];
        a.length = 4;
        var i = a.length - 1
        var j = b.byteLength - 1;
        for (; i >= 0; i--, j--) {
            if (j >= 0) {
                a[i] = b[j];
            } else {
                a[i] = 0;
            }
        }
        var v0 = (a[0] & 0xff) << 24;
        var v1 = (a[1] & 0xff) << 16;
        var v2 = (a[2] & 0xff) << 8;
        var v3 = (a[3] & 0xff);
        return v0 + v1 + v2 + v3;
    }

    static int2Bytes (one: number) {
        var re = [];
        re[0] = (one >>> 24);
        re[1] = (one >>> 16);
        re[2] = (one >>> 8);
        re[3] = (one);
        return re;
    }

    static buf2hex(buffer: ArrayBuffer) { // buffer is an ArrayBuffer
        return [...new Uint8Array(buffer)]
            .map(x => x.toString(16).padStart(2, '0'))
            .join(' ');
    }
}


