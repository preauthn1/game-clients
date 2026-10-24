import { DataTool } from '../Tools/DataTool';
interface packetOptions {
    mainId: number,
    subId: number,
    data: Uint8Array
}

// 封包檔頭長度
const head_length: number = 4;

/**
 * 封包資料
 */
export class Packet {    
    private mainId: number = 0;
    private subId: number = 0;
    private data: Uint8Array = new Uint8Array(0);
    
    constructor (option: packetOptions) {
        this.mainId = option.mainId || 0;
        this.subId = option.subId || 0;
        this.data = option.data || new Uint8Array(0)
    }

    public encode() {
        //內容長度
        var data_length = 8 + this.data.byteLength;
        //封包資料總長度
        var packetDataArray = new ArrayBuffer(head_length + data_length);
        var resData = new Uint8Array(packetDataArray);
        var data_length2Bytes = DataTool.int2Bytes(data_length)

        for (let i = 0; i < data_length2Bytes.length; i++) {
            resData[i] = data_length2Bytes[i];
        }

        var mainId_bytes = DataTool.int2Bytes(this.mainId);
        for (let i = 0; i < mainId_bytes.length; i++) {
            resData[i + 4] = mainId_bytes[i];
        }

        var subId_bytes = DataTool.int2Bytes(this.subId);
        for (let i = 0; i < subId_bytes.length; i++) {
            resData[i + 8] = subId_bytes[i];
        }

        for (let i = 0; i < this.data.length; i++) {
            resData[i + 12] = this.data[i];
        }

        return packetDataArray;
    }
}


