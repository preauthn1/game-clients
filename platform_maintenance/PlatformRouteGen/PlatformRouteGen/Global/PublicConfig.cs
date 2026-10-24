using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlatformRouteGen.Global
{
    public class PublicConfig
    {
        public static PlatformMode platformMode = PlatformMode.ANDROID;

        public static string JiuLiaoAndroid
        {
            get
            {               
                    return @"--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---
-- 模块定义
--function mmodule(mname)
--    local M = { }
--    _G[mname] = M
--    package.loaded[mname] = M
--    setmetatable(M, { __index = _G })
--    setfenv(2, M)
--   -- print(mname)
--end
--mmodule(...)
local appInfoList = {
com_vfh99900_richpoker= {JiuLiaoId = ""100024"",JiuLiaoSecrety = ""21A1983C7E1A90051450D7B2AEE2FFEE"",JiuLiaoName = ""超级大赢家 - 世纪富豪版"",DownloadUrl = """"},
com_vfh99907_richpoker = { JiuLiaoId = ""100025"",JiuLiaoSecrety = ""36B5527CD67B569ABFDC1C236E550DD8"",JiuLiaoName = ""微微斗牛-街机版"",DownloadUrl = """"},
com_vfh99910_richpoker = { JiuLiaoId = ""100026"",JiuLiaoSecrety = ""69227C432FBB8F2D9749A2302BB6692C"",JiuLiaoName = ""茂茂龙虎斗地主-澳门版"",DownloadUrl = """"},
com_vfh99912_richpoker = { JiuLiaoId = ""100027"",JiuLiaoSecrety = ""655DBF819A4C3515706CF19F988CE2BD"",JiuLiaoName = ""微微电玩-澳门版"",DownloadUrl = """"},
com_vfh99917_richpoker = { JiuLiaoId = ""100028"",JiuLiaoSecrety = ""BC57737001040D71AA4B38925FD2F462"",JiuLiaoName = ""赚赚金点"",DownloadUrl = """"},
com_vfh99920_richpoker = { JiuLiaoId = ""100029"",JiuLiaoSecrety = ""0F029DB3B473A4E1A671A9B1BE6B1624"",JiuLiaoName = ""財神娛樂"",DownloadUrl = """"},
com_vfh99919_richpoker = { JiuLiaoId = ""100030"",JiuLiaoSecrety = ""4F5AD7AB270F73919316D0362A949BB8"",JiuLiaoName = ""大赢家游戏城"",DownloadUrl = """"},
com_vfh99921_richpoker = { JiuLiaoId = ""100031"",JiuLiaoSecrety = ""1825E488F525F8F21446C85CC68A243D"",JiuLiaoName = ""大神游戏-在线娱乐"",DownloadUrl = """"},
com_vfh99963_richpoker = { JiuLiaoId = ""100032"",JiuLiaoSecrety = ""3D84EC669892A43A230397E42072B57E"",JiuLiaoName = ""斗地主"",DownloadUrl = """"},
com_vfh99962_richpoker = { JiuLiaoId = ""100033"",JiuLiaoSecrety = ""AB4A290FA54C59B44FF36BBBC29BA33F"",JiuLiaoName = ""王者巅峰娱乐城"",DownloadUrl = """"},
com_vfh99964_richpoker = { JiuLiaoId = ""100034"",JiuLiaoSecrety = ""05B2C5E34474336F08FE8CC66E852469"",JiuLiaoName = ""玩玩乐"",DownloadUrl = """"},
com_vfh99965_richpoker = { JiuLiaoId = ""100035"",JiuLiaoSecrety = ""B08E471551A2F6D8DE16D701CA82EABB"",JiuLiaoName = ""逍遥娱乐城"",DownloadUrl = """"},
com_vfh99966_richpoker = { JiuLiaoId = ""100036"",JiuLiaoSecrety = ""6AC977C3C8CC4F1F108088CFC7693CC2"",JiuLiaoName = ""天天棋牌"",DownloadUrl = """"},
com_vfh99932_richpoker = { JiuLiaoId = ""100037"",JiuLiaoSecrety = ""3DFEBD3F5CC598737FCC87043745CF89"",JiuLiaoName = ""王者游戏"",DownloadUrl = """"},
com_vfh99970_richpoker = { JiuLiaoId = ""100038"",JiuLiaoSecrety = ""9515CF0ED9BE6D20E9B1D25C6E1B1674"",JiuLiaoName = ""花样棋牌"",DownloadUrl = """"},
com_vfh99971_richpoker = { JiuLiaoId = ""100039"",JiuLiaoSecrety = ""0B72E993F376C3364EA90C9A3045B1F1"",JiuLiaoName = ""方舟娱乐"",DownloadUrl = """"},
com_vfh99972_richpoker = { JiuLiaoId = ""100040"",JiuLiaoSecrety = ""911B29F4BBBABBA38C111D0828DE3E7F"",JiuLiaoName = ""欢喜棋牌"",DownloadUrl = """"},
com_vfh99974_richpoker = { JiuLiaoId = ""100041"",JiuLiaoSecrety = ""5C98A853F41C96D7D5E39ED13ACAAE32"",JiuLiaoName = ""黑桃娱乐"",DownloadUrl = ""example.invalid""},
com_vfh99975_richpoker = { JiuLiaoId = ""100042"",JiuLiaoSecrety = ""675F7565C336B3EFFF2C5924443FA3E2"",JiuLiaoName = ""途途棋牌"",DownloadUrl = """"},
com_vfh99976_richpoker = { JiuLiaoId = ""100043"",JiuLiaoSecrety = ""585AAA786CC01A2377E6D10DE82A5BCE"",JiuLiaoName = ""王者娱乐"",DownloadUrl = """"},
com_vfh99968_richpoker = { JiuLiaoId = ""100045"",JiuLiaoSecrety = ""3B254CA234A9A3132DA69D5582A98C1E"",JiuLiaoName = ""王者捕鱼"",DownloadUrl = """"},
com_vfh99980_richpoker = { JiuLiaoId = ""100048"",JiuLiaoSecrety = ""54C9D45B3A0756BBDC6567A36D0AB096"",JiuLiaoName = ""金牌扎花牛麻将"",DownloadUrl = """"},
com_vfh99953_richpoker = { JiuLiaoId = ""100050"",JiuLiaoSecrety = ""7215BB7E2FF5469A4231EE86637CC072"",JiuLiaoName = ""顺金三张"",DownloadUrl = """"},
com_vfh99955_richpoker = { JiuLiaoId = ""100052"",JiuLiaoSecrety = ""8415821757EFA838ED8D11293A47289A"",JiuLiaoName = ""天空电玩"",DownloadUrl = """"},
com_vfh99985_richpoker = { JiuLiaoId = ""100054"",JiuLiaoSecrety = ""AF184B8F04E084FD0CDD565CCF4168BF"",JiuLiaoName = ""小麦娱乐"",DownloadUrl = """"},
com_vfh99996_richpoker = { JiuLiaoId = ""100056"",JiuLiaoSecrety = ""3A77F7028C7DAA2F08C00D49B7B70A6E"",JiuLiaoName = ""纯正金花"",DownloadUrl = """"},
com_vfh99989_richpoker = { JiuLiaoId = ""100058"",JiuLiaoSecrety = ""41B73B4A523031F61B6D6798725CE9C0"",JiuLiaoName = ""清风三张"",DownloadUrl = """"},
com_vfh99959_richpoker = { JiuLiaoId = """",JiuLiaoSecrety = """",JiuLiaoName = ""花神财金龙虎斗"",DownloadUrl = """"},

com_wzdfylz_dzzbrnn = { JiuLiaoId = ""100012"",JiuLiaoSecrety = ""8A34983D30460E3E61F9F04D751C2164"",JiuLiaoName = ""王者巅峰娱乐城"",DownloadUrl = """"},
com_jyqp_dzzbrnn = { JiuLiaoId = ""100013"",JiuLiaoSecrety = ""C428FE253ECA1C0C52FF557F406409A6"",JiuLiaoName = ""聚友棋牌"",DownloadUrl = """"},
com_wwl_dzzbrnn = { JiuLiaoId = ""100014"",JiuLiaoSecrety = ""AEE291608DB2D1F37A073B7575D48AC0"",JiuLiaoName = ""玩玩乐"",DownloadUrl = """"},
com_xyylc_dzzbrnn = { JiuLiaoId = ""100015"",JiuLiaoSecrety = ""6F89B9189CDA896E8AD45723D0623C00"",JiuLiaoName = ""逍遥娱乐城"",DownloadUrl = """"},
com_ttqp_dzzbrnn = { JiuLiaoId = ""100016"",JiuLiaoSecrety = ""9E65E514F85E32BD54FD53C5914E9323"",JiuLiaoName = ""天天棋牌"",DownloadUrl = """"},
com_hycp_ddz = { JiuLiaoId = ""100017"",JiuLiaoSecrety = ""2D60D170277A757CE70646359AB58025"",JiuLiaoName = ""花样棋牌"",DownloadUrl = ""http://example.invalid""},
com_fzylo_ddz = { JiuLiaoId = ""100018"",JiuLiaoSecrety = ""872C8E3C183191ED4C64880D4C608614"",JiuLiaoName = ""方舟娱乐"",DownloadUrl = ""http://example.invalid/""},
com_hscp_ddz = { JiuLiaoId = ""100019"",JiuLiaoSecrety = ""5044AEC17F38AB727EBA80D15EEC0BD6"",JiuLiaoName = ""欢喜棋牌"",DownloadUrl = ""http://example.invalid/""},
com_htul_ddz = { JiuLiaoId = ""100020"",JiuLiaoSecrety = ""C0B86BF59A9FAA5D3DE7B86CB09B2090"",JiuLiaoName = ""黑桃娱乐"",DownloadUrl = ""http://example.invalid""},
com_ttul_ddz = { JiuLiaoId = ""100021"",JiuLiaoSecrety = ""6AA43CCCF65CB214A747C4BFF92DC613"",JiuLiaoName = ""途途棋牌"",DownloadUrl = ""http://example.invalid/""},
com_wzul_ddz = { JiuLiaoId = ""100022"",JiuLiaoSecrety = ""567D083115DF94F1908A6B5A1AEA55DB"",JiuLiaoName = ""王者娱乐"",DownloadUrl = ""http://example.invalid/""},
com_wzby_ggez = { JiuLiaoId = ""100023"",JiuLiaoSecrety = ""8873567149D57F0DD0437C7FF2AD9F21"",JiuLiaoName = ""王者捕鱼"",DownloadUrl = ""http://example.invalid/""},
com_mmjiang_ma = { JiuLiaoId = ""100047"",JiuLiaoSecrety = ""F31E505F187E07FB128B94C2CC297FC5"",JiuLiaoName = ""金牌扎花牛麻将"",DownloadUrl = """"},
com_tkdw_qznn = { JiuLiaoId = ""100051"",JiuLiaoSecrety = ""90F3B9C3D087F03B05B2C44F097E9759"",JiuLiaoName = ""天空电玩"",DownloadUrl = """"},
com_xmyl_ggez = { JiuLiaoId = ""100053"",JiuLiaoSecrety = ""CB5957C3016ADDC783B226B2FCBA7EEE"",JiuLiaoName = ""小麦娱乐"",DownloadUrl = """"},
com_zzdw_bjl = { JiuLiaoId = ""100055"",JiuLiaoSecrety = ""7CFFF273D2CD84FEA2693DA0739C500D"",JiuLiaoName = ""纯正金花"",DownloadUrl = """"},
com_cfsz_zjh = { JiuLiaoId = ""100057"",JiuLiaoSecrety = ""2E9EFF07A1FC121A42ED92CB9254DA44"",JiuLiaoName = ""清风三张"",DownloadUrl = """"},
com_zsjhlhd_zjhlhd = { JiuLiaoId = """",JiuLiaoSecrety = """",JiuLiaoName = ""花神财金龙虎斗"",DownloadUrl = """"},

com_terpro_qa = { JiuLiaoId = ""100046"",JiuLiaoSecrety = ""BDD7377C6F9BCF06BC1C778BE169A301"",JiuLiaoName = ""QA"",DownloadUrl = ""http://com_terpro_qa/""},
com_terpro_stage = { JiuLiaoId = ""100046"",JiuLiaoSecrety = ""BDD7377C6F9BCF06BC1C778BE169A301"",JiuLiaoName = ""Stage"",DownloadUrl = ""http://com_terpro_stage/""},
com_wwdw_stage = { JiuLiaoId = ""100046"",JiuLiaoSecrety = ""BDD7377C6F9BCF06BC1C778BE169A301"",JiuLiaoName = ""QA"",DownloadUrl = ""http://com_wwdw_stage/""},
com_wwdw_stagecc = { JiuLiaoId = ""100046"",JiuLiaoSecrety = ""BDD7377C6F9BCF06BC1C778BE169A301"",JiuLiaoName = ""Stage"",DownloadUrl = ""http://com_wwdw_stagecc/""},

}";              

            }
        }

        public static string JiuLiaoIOS
        {
            get
            {
                return @"local appInfoList = {
com_vfh99900_richpoker= {JiuLiaoId = ""100024"",JiuLiaoSecrety = ""21A1983C7E1A90051450D7B2AEE2FFEE"",JiuLiaoName = ""超级大赢家-世纪富豪版"",DownloadUrl = """"},
com_vfh99907_richpoker= {JiuLiaoId = ""100025"",JiuLiaoSecrety = ""36B5527CD67B569ABFDC1C236E550DD8"",JiuLiaoName = ""微微斗牛-街机版"",DownloadUrl = """"},
com_vfh99910_richpoker= {JiuLiaoId = ""100026"",JiuLiaoSecrety = ""69227C432FBB8F2D9749A2302BB6692C"",JiuLiaoName = ""茂茂龙虎斗地主-澳门版"",DownloadUrl = """"},
com_vfh99912_richpoker= {JiuLiaoId = ""100027"",JiuLiaoSecrety = ""655DBF819A4C3515706CF19F988CE2BD"",JiuLiaoName = ""微微电玩-澳门版"",DownloadUrl = """"},
com_vfh99917_richpoker= {JiuLiaoId = ""100028"",JiuLiaoSecrety = ""BC57737001040D71AA4B38925FD2F462"",JiuLiaoName = ""赚赚金点"",DownloadUrl = """"},
com_vfh99920_richpoker= {JiuLiaoId = ""100029"",JiuLiaoSecrety = ""0F029DB3B473A4E1A671A9B1BE6B1624"",JiuLiaoName = ""財神娛樂"",DownloadUrl = """"},
com_vfh99919_richpoker= {JiuLiaoId = ""100030"",JiuLiaoSecrety = ""4F5AD7AB270F73919316D0362A949BB8"",JiuLiaoName = ""大赢家游戏城"",DownloadUrl = """"},
com_vfh99921_richpoker= {JiuLiaoId = ""100031"",JiuLiaoSecrety = ""1825E488F525F8F21446C85CC68A243D"",JiuLiaoName = ""大神游戏-在线娱乐"",DownloadUrl = """"},
com_vfh99963_richpoker= {JiuLiaoId = ""100032"",JiuLiaoSecrety = ""3D84EC669892A43A230397E42072B57E"",JiuLiaoName = ""斗地主"",DownloadUrl = """"},
com_vfh99962_richpoker= {JiuLiaoId = ""100033"",JiuLiaoSecrety = ""AB4A290FA54C59B44FF36BBBC29BA33F"",JiuLiaoName = ""王者巅峰娱乐城"",DownloadUrl = """"},
com_vfh99964_richpoker= {JiuLiaoId = ""100034"",JiuLiaoSecrety = ""05B2C5E34474336F08FE8CC66E852469"",JiuLiaoName = ""玩玩乐"",DownloadUrl = """"},
com_vfh99965_richpoker= {JiuLiaoId = ""100035"",JiuLiaoSecrety = ""B08E471551A2F6D8DE16D701CA82EABB"",JiuLiaoName = ""逍遥娱乐城"",DownloadUrl = """"},
com_vfh99966_richpoker= {JiuLiaoId = ""100036"",JiuLiaoSecrety = ""6AC977C3C8CC4F1F108088CFC7693CC2"",JiuLiaoName = ""天天棋牌"",DownloadUrl = """"},
com_vfh99932_richpoker= {JiuLiaoId = ""100037"",JiuLiaoSecrety = ""3DFEBD3F5CC598737FCC87043745CF89"",JiuLiaoName = ""王者游戏"",DownloadUrl = """"},
com_vfh99970_richpoker= {JiuLiaoId = ""100038"",JiuLiaoSecrety = ""9515CF0ED9BE6D20E9B1D25C6E1B1674"",JiuLiaoName = ""花样棋牌"",DownloadUrl = """"},
com_vfh99971_richpoker= {JiuLiaoId = ""100039"",JiuLiaoSecrety = ""0B72E993F376C3364EA90C9A3045B1F1"",JiuLiaoName = ""方舟娱乐"",DownloadUrl = """"},
com_vfh99972_richpoker= {JiuLiaoId = ""100040"",JiuLiaoSecrety = ""911B29F4BBBABBA38C111D0828DE3E7F"",JiuLiaoName = ""欢喜棋牌"",DownloadUrl = """"},
com_vfh99974_richpoker= {JiuLiaoId = ""100041"",JiuLiaoSecrety = ""5C98A853F41C96D7D5E39ED13ACAAE32"",JiuLiaoName = ""黑桃娱乐"",DownloadUrl = ""example.invalid""},
com_vfh99975_richpoker= {JiuLiaoId = ""100042"",JiuLiaoSecrety = ""675F7565C336B3EFFF2C5924443FA3E2"",JiuLiaoName = ""途途棋牌"",DownloadUrl = """"},
com_vfh99976_richpoker= {JiuLiaoId = ""100043"",JiuLiaoSecrety = ""585AAA786CC01A2377E6D10DE82A5BCE"",JiuLiaoName = ""王者娱乐"",DownloadUrl = """"},
com_vfh99968_richpoker= {JiuLiaoId = ""100045"",JiuLiaoSecrety = ""3B254CA234A9A3132DA69D5582A98C1E"",JiuLiaoName = ""王者捕鱼"",DownloadUrl = """"},
com_vfh99980_richpoker= {JiuLiaoId = ""100048"",JiuLiaoSecrety = ""54C9D45B3A0756BBDC6567A36D0AB096"",JiuLiaoName = ""金牌扎花牛麻将"",DownloadUrl = """"},
com_vfh99953_richpoker= {JiuLiaoId = ""100050"",JiuLiaoSecrety = ""7215BB7E2FF5469A4231EE86637CC072"",JiuLiaoName = ""顺金三张"",DownloadUrl = """"},
com_vfh99955_richpoker= {JiuLiaoId = ""100052"",JiuLiaoSecrety = ""8415821757EFA838ED8D11293A47289A"",JiuLiaoName = ""天空电玩"",DownloadUrl = """"},
com_vfh99985_richpoker= {JiuLiaoId = ""100054"",JiuLiaoSecrety = ""AF184B8F04E084FD0CDD565CCF4168BF"",JiuLiaoName = ""小麦娱乐"",DownloadUrl = """"},
com_vfh99996_richpoker= {JiuLiaoId = ""100056"",JiuLiaoSecrety = ""3A77F7028C7DAA2F08C00D49B7B70A6E"",JiuLiaoName = ""纯正金花"",DownloadUrl = """"},
com_vfh99989_richpoker= {JiuLiaoId = ""100058"",JiuLiaoSecrety = ""41B73B4A523031F61B6D6798725CE9C0"",JiuLiaoName = ""清风三张"",DownloadUrl = """"},
com_vfh99959_richpoker= {JiuLiaoId = """",JiuLiaoSecrety = """",JiuLiaoName = ""花神财金龙虎斗"",DownloadUrl = """"},

com_wzdfylz_dzzbrnn= {JiuLiaoId = ""100012"",JiuLiaoSecrety = ""8A34983D30460E3E61F9F04D751C2164"",JiuLiaoName = ""王者巅峰娱乐城"",DownloadUrl = """"},
com_jyqp_dzzbrnn= {JiuLiaoId = ""100013"",JiuLiaoSecrety = ""C428FE253ECA1C0C52FF557F406409A6"",JiuLiaoName = ""聚友棋牌"",DownloadUrl = """"},
com_wwl_dzzbrnn= {JiuLiaoId = ""100014"",JiuLiaoSecrety = ""AEE291608DB2D1F37A073B7575D48AC0"",JiuLiaoName = ""玩玩乐"",DownloadUrl = """"},
com_xyylc_dzzbrnn= {JiuLiaoId = ""100015"",JiuLiaoSecrety = ""6F89B9189CDA896E8AD45723D0623C00"",JiuLiaoName = ""逍遥娱乐城"",DownloadUrl = """"},
com_ttqp_dzzbrnn= {JiuLiaoId = ""100016"",JiuLiaoSecrety = ""9E65E514F85E32BD54FD53C5914E9323"",JiuLiaoName = ""天天棋牌"",DownloadUrl = """"},
com_hycp_ddz= {JiuLiaoId = ""100017"",JiuLiaoSecrety = ""2D60D170277A757CE70646359AB58025"",JiuLiaoName = ""花样棋牌"",DownloadUrl = ""http://example.invalid""},
com_fzylo_ddz= {JiuLiaoId = ""100018"",JiuLiaoSecrety = ""872C8E3C183191ED4C64880D4C608614"",JiuLiaoName = ""方舟娱乐"",DownloadUrl = ""http://example.invalid/""},
com_hscp_ddz= {JiuLiaoId = ""100019"",JiuLiaoSecrety = ""5044AEC17F38AB727EBA80D15EEC0BD6"",JiuLiaoName = ""欢喜棋牌"",DownloadUrl = ""http://example.invalid/""},
com_htul_ddz= {JiuLiaoId = ""100020"",JiuLiaoSecrety = ""C0B86BF59A9FAA5D3DE7B86CB09B2090"",JiuLiaoName = ""黑桃娱乐"",DownloadUrl = ""http://example.invalid""},
com_ttul_ddz= {JiuLiaoId = ""100021"",JiuLiaoSecrety = ""6AA43CCCF65CB214A747C4BFF92DC613"",JiuLiaoName = ""途途棋牌"",DownloadUrl = ""http://example.invalid/""},
com_wzul_ddz= {JiuLiaoId = ""100022"",JiuLiaoSecrety = ""567D083115DF94F1908A6B5A1AEA55DB"",JiuLiaoName = ""王者娱乐"",DownloadUrl = ""http://example.invalid/""},
com_wzby_ggez= {JiuLiaoId = ""100023"",JiuLiaoSecrety = ""8873567149D57F0DD0437C7FF2AD9F21"",JiuLiaoName = ""王者捕鱼"",DownloadUrl = ""http://example.invalid/""},
com_mmjiang_ma= {JiuLiaoId = ""100047"",JiuLiaoSecrety = ""F31E505F187E07FB128B94C2CC297FC5"",JiuLiaoName = ""金牌扎花牛麻将"",DownloadUrl = """"},
com_tkdw_qznn= {JiuLiaoId = ""100051"",JiuLiaoSecrety = ""90F3B9C3D087F03B05B2C44F097E9759"",JiuLiaoName = ""天空电玩"",DownloadUrl = """"},
com_xmyl_ggez= {JiuLiaoId = ""100053"",JiuLiaoSecrety = ""CB5957C3016ADDC783B226B2FCBA7EEE"",JiuLiaoName = ""小麦娱乐"",DownloadUrl = """"},
com_zzdw_bjl= {JiuLiaoId = ""100055"",JiuLiaoSecrety = ""7CFFF273D2CD84FEA2693DA0739C500D"",JiuLiaoName = ""纯正金花"",DownloadUrl = """"},
com_cfsz_zjh= {JiuLiaoId = ""100057"",JiuLiaoSecrety = ""2E9EFF07A1FC121A42ED92CB9254DA44"",JiuLiaoName = ""清风三张"",DownloadUrl = """"},
com_zsjhlhd_zjhlhd= {JiuLiaoId = """",JiuLiaoSecrety = """",JiuLiaoName = ""花神财金龙虎斗"",DownloadUrl = """"},

com_terpro_qa= {JiuLiaoId = ""100046"",JiuLiaoSecrety = ""BDD7377C6F9BCF06BC1C778BE169A301"",JiuLiaoName = ""QA"",DownloadUrl = ""http://com_terpro_qa/""},
com_terpro_stage= {JiuLiaoId = ""100046"",JiuLiaoSecrety = ""BDD7377C6F9BCF06BC1C778BE169A301"",JiuLiaoName = ""Stage"",DownloadUrl = ""http://com_terpro_stage/""},
com_wwdw_stage= {JiuLiaoId = ""100046"",JiuLiaoSecrety = ""BDD7377C6F9BCF06BC1C778BE169A301"",JiuLiaoName = ""QA"",DownloadUrl = ""http://com_wwdw_stage/""},
com_wwdw_stagecc= {JiuLiaoId = ""100046"",JiuLiaoSecrety = ""BDD7377C6F9BCF06BC1C778BE169A301"",JiuLiaoName = ""Stage"",DownloadUrl = ""http://com_wwdw_stagecc/""},

}";

            }
        }


        public static string JiuLiaoCode
        {
            get
            {
                return @"function GetAppInfoTable ()
	local bundleId_site = CS.Utility.GetbundleIdentifier()
	bundleId_site = string.gsub(bundleId_site,""%."",""_"")	
	
	if appInfoList[tostring(bundleId_site)] ~= nil then
		return appInfoList[tostring(bundleId_site)]
	else
		CS.UnityEngine.Debug.Log(""PlatformRoute no App info "" .. tostring(bundleId_site))
			local class = {
				JiuLiaoId = """",
				JiuLiaoSecrety = """",
				JiuLiaoName = """",
				DownloadUrl = """",
			}
		return class
	end	
end";
            }

        }

        public static string PlatformCode
        {
            get
            {
                return @"function GetTable ()
	local bundleId_site = CS.Utility.GetbundleIdentifier()
	bundleId_site = string.gsub(bundleId_site,""%."",""_"")	
	bundleId_site = bundleId_site .. CS.AppDefine.GameSiteID
	
	if list[tostring(bundleId_site)] ~= nil then
		return list[tostring(bundleId_site)]
	else
		CS.UnityEngine.Debug.Log(""PlatformRoute no this "" .. tostring(bundleId_site))
		local class = {
			Index = 0,
			CompanyName = """",
			ProductName = """",
			BundleID = """",
			AppName = """",
			AppleID = """",
			ServerOption = 4,
			PlatformID = 2,
			SiteID = 2,
			Version=0,
			Agent = nil,
            Template=""0""

        }
		
		return class
	end	
end

function GetAll ()
	return 	list	
end";
            }
        }
    }
}