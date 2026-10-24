using PlatformRouteGen.Repository;
using System;
using System.Collections.Generic;
using example.invalid;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace PlatformRouteGen.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Create()
        {
            
            return View("");
        }
        [HttpPost]
        public ActionResult Create(PlatformRoute pr, string Agent, string FlagShare, string Version)
        {
            PlatformRouteRepository prr = new PlatformRouteRepository();
            PlatformRoute newpr = new PlatformRoute();

            newpr.Agent = Agent == null ? 0 : 1;
            newpr.AppKey = pr.BundleID.Replace(".","_") + pr.StaticSiteID.ToString();
            newpr.AppleID = pr.AppleID == null ? "nil" : pr.AppleID;
            newpr.AppName = pr.AppName ;
            newpr.BundleID = pr.BundleID ;
            newpr.CompanyName = pr.CompanyName;
            newpr.FlagShare = FlagShare == null ? 0 : 1;
            newpr.IconName = string.IsNullOrEmpty(pr.IconName)? "nil": pr.IconName;
            newpr.Index = pr.Index;
            newpr.Platform = pr.Platform;
            newpr.PlatformID = pr.PlatformID;
            newpr.ProductName = pr.ProductName;
            newpr.ServerOption = pr.ServerOption;
            newpr.SiteID = pr.SiteID;
            newpr.StaticSiteID = pr.StaticSiteID;
            newpr.Version = Version == null ? 0 : 1;
            newpr.Template = "0";
            newpr.NotExport = pr.NotExport == "on" ? "1" : "0";
            newpr.Branch = pr.Branch;
            prr.Create(newpr);

            return RedirectToAction("index");
        }

        [HttpGet]
        public ActionResult Update(string Appkey)
        {
            if (string.IsNullOrEmpty(Appkey))
             return   RedirectToAction("index");
            PlatformRouteRepository prr = new PlatformRouteRepository();
            PlatformRoute pr = prr.Get(x => x.AppKey == Appkey);
            return View(pr);

        }
        [HttpPost]
        public ActionResult Update(PlatformRoute pr,string Agent,string FlagShare,string Version)
        {
            pr.Agent = Agent == null ? 0 : 1;
            pr.FlagShare = FlagShare == null ? 0 : 1;
            pr.Version = Version == null ? 0 : 1;

            PlatformRouteRepository prr = new PlatformRouteRepository();
            PlatformRoute tmppr = prr.Get(x => x.AppKey == pr.AppKey);
            tmppr.Agent = pr.Agent;
            tmppr.AppleID = pr.AppleID=="nil"? tmppr.AppleID : pr.AppleID;
            tmppr.AppName = pr.AppName;
            tmppr.BundleID = pr.BundleID;
            tmppr.CompanyName = pr.CompanyName;
            tmppr.FlagShare = pr.FlagShare;           
            tmppr.Index = pr.Index;
            tmppr.PlatformID = pr.PlatformID;
            tmppr.ProductName = pr.ProductName;
            tmppr.ServerOption = pr.ServerOption;
            tmppr.SiteID = pr.SiteID;
            tmppr.StaticSiteID = pr.StaticSiteID;
            tmppr.Version = pr.Version;
            tmppr.Template = "0";
            tmppr.IconName = pr.IconName;
            tmppr.NotExport = pr.NotExport=="on"?"1":"0";
            tmppr.Branch = pr.Branch;
            prr.Update(tmppr);

            return RedirectToAction("index");

        }

        [HttpGet]
        public ActionResult Delete(string id)
        {
            if (string.IsNullOrEmpty(id))
                return RedirectToAction("index");
            PlatformRouteRepository prr = new PlatformRouteRepository();
            int linqid = int.Parse(id);
            PlatformRoute pr = prr.Get(x => x.Id == linqid);
            pr.IsDelete = 1;
            prr.Update(pr);

            return RedirectToAction("index");

        }

        [HttpGet]
        public ActionResult BatchCreate(string id)
        {
            if (string.IsNullOrEmpty(id))
                return RedirectToAction("index");
            PlatformRouteRepository prr = new PlatformRouteRepository();
            int linqid = int.Parse(id);
            PlatformRoute pr = prr.Get(x => x.Id == linqid);
            int appnum = int.Parse(pr.AppName.Substring(pr.AppName.Length - 2));
            for (int i = pr.StaticSiteID+1; i <= pr.StaticSiteID + 5; i++)
            {               
                PlatformRoute newpr = prr.Get(x => x.BundleID==pr.BundleID && x.StaticSiteID == i);
                appnum++;
                if (newpr == null)
                {
                    newpr = new PlatformRoute();
                    newpr.Agent = pr.Agent;
                    newpr.AppKey = pr.BundleID.Replace(".", "_") +  i.ToString();
                    newpr.AppleID = pr.AppleID == null ? "nil" : pr.AppleID;
                    newpr.AppName = pr.AppName.Substring(0, pr.AppName.Length-3) + appnum.ToString("D3");
                    newpr.BundleID = pr.BundleID;
                    newpr.CompanyName = pr.CompanyName;
                    newpr.FlagShare = pr.FlagShare;
                    newpr.IconName = "nil";
                    newpr.Index = pr.Index;
                    newpr.Platform = pr.Platform;
                    newpr.PlatformID = pr.PlatformID;
                    newpr.ProductName = pr.ProductName;
                    newpr.ServerOption = pr.ServerOption;
                    newpr.SiteID = i;
                    newpr.StaticSiteID = i;
                    newpr.Version = pr.Version;
                    newpr.Template = pr.Template;
                    newpr.IconName = pr.IconName;
                    newpr.NotExport = pr.NotExport;
                    newpr.Branch = pr.Branch;
                    prr.Create(newpr);
                }
            }
            return RedirectToAction("index");
        }
        
        [HttpGet]
        public ActionResult GetFile(int platform)
        {
            PlatformMode pm = (PlatformMode)platform;
            if (pm != PlatformMode.ANDROID && pm != PlatformMode.IOS)
                return RedirectToAction("index");

            Response.Clear();
            Response.AddHeader("Content-Disposition", "attachment; filename=PlatformRoute.lua");
            Response.ContentType = "application/json";
            PlatformRouteRepository prr = new PlatformRouteRepository();
            IEnumerable<PlatformRoute> prs = prr.GetByParm(x=>x.Platform==platform);
            Response.Write("local list = {");
            Response.Write("\n");
            foreach (PlatformRoute p in prs)
            {               
                String s = String.Format("{0} = {{ Index = {1},CompanyName = \"{2}\",ProductName = \"{3}\",BundleID = \"{4}\",AppName = \"{5}\",AppleID = \"{6}\",ServerOption = {7},PlatformID = {8},SiteID = {9},StaticSiteID = {10},FlagShare = {11},Version = {12},Agent={13},Template=\"{14}\",Branch={15} }},",
                                        p.AppKey,p.Index,p.CompanyName,p.ProductName,p.BundleID,p.AppName,p.AppleID,p.ServerOption,p.PlatformID,p.SiteID,p.StaticSiteID,p.FlagShare,p.Version,p.Agent,p.Template,p.Branch);
                Response.Write(s);
                Response.Write("\n");
            }
            Response.Write("\n");
            Response.Write("}");
            //jiuliao
            Response.Write("\n");
           
            //jiuliao Code
            if (pm==PlatformMode.ANDROID)
              Response.Write(Global.PublicConfig.JiuLiaoAndroid);
            if (pm == PlatformMode.IOS)
                Response.Write(Global.PublicConfig.JiuLiaoIOS);
         
            Response.Write("\n");
            Response.Write(Global.PublicConfig.JiuLiaoCode);
            //Platform Code
            Response.Write("\n");
            Response.Write(Global.PublicConfig.PlatformCode);

            Response.End();

            // Not sure what else to do here
            return Content(String.Empty);
        }

        public void GenPR(PlatformMode pm)
        {
            StringBuilder sb = new StringBuilder();
            
            StreamWriter log;
            FileStream fileStream = null;
            DirectoryInfo logDirInfo = null;
            FileInfo logFileInfo;

            string logFilePath = "C:\\Users\\user02\\Desktop\\Client777\\Terpro777Game\\Assets\\Hall\\LuaScript\\Com\\PlatformRoute.lua";
          
            logFileInfo = new FileInfo(logFilePath);
            logDirInfo = new DirectoryInfo(logFileInfo.DirectoryName);
            if (!logDirInfo.Exists) logDirInfo.Create();
            if (!logFileInfo.Exists)
            {
                fileStream = logFileInfo.Create();
            }
            else
            {
                fileStream = new FileStream(logFilePath, FileMode.Create);
            }
            log = new StreamWriter(fileStream);
            log.Write(GetData(pm));
            log.Close();

        }

        //public void CommitLua()
        //{
        //    System.Diagnostics.Process.Start(@"C:\Users\user02\Desktop\Client777\Terpro777Game\Assets\Hall\LuaScript\Com\commit.bat");

        //}

        public string GetData(PlatformMode pm)
        {
            PlatformRouteRepository prr = new PlatformRouteRepository();
            IEnumerable<PlatformRoute> prs = prr.GetAll();
            string d = "";
           d+="local list = {";
            d += "\n";
            foreach (PlatformRoute p in prs)
            {
                String s = String.Format("{0} = {{ Index = {1},CompanyName = \"{2}\",ProductName = \"{3}\",BundleID = \"{4}\",AppName = \"{5}\",AppleID = \"{6}\",ServerOption = {7},PlatformID = {8},SiteID = {9},StaticSiteID = {10},FlagShare = {11},Version = {12},Agent={13},Branch={14} }},",
                                        p.AppKey, p.Index, p.CompanyName, p.ProductName, p.BundleID, p.AppName, p.AppleID, p.ServerOption, p.PlatformID, p.SiteID, p.StaticSiteID, p.FlagShare, p.Version, p.Agent, p.Branch);
                d += (s);
                d += ("\n");
            }
            d += ("\n");
            d += ("}");
            //jiuliao
            d += ("\n");
            //jiuliao Code
            if (pm == PlatformMode.ANDROID)
                d += (Global.PublicConfig.JiuLiaoAndroid);
            if (pm == PlatformMode.IOS)
                d += (Global.PublicConfig.JiuLiaoIOS);

            //jiuliao Code
            d += ("\n");
            d += (Global.PublicConfig.JiuLiaoCode);
            //Platform Code
            d += ("\n");
            d += (Global.PublicConfig.PlatformCode);

            return d;

        }

        public void BatchImport()
        {
            string p = @" com_zzdw_bjl0 ="""", Index = 96, CompanyName = ""zzdw"", ProductName = ""纯正金花"", BundleID = ""com.zzdw.bjl"", AppName = ""lpuc92"", AppleID = ""1437231658"", ServerOption = 4, PlatformID = 92, SiteID = 9200, StaticSiteID = 0, FlagShare = 1, Version = 0,IconName=""vfh99996""@
    com_cfsz_zjh0 ="""", Index = 89, CompanyName = ""cfsz"", ProductName = ""清风三张"", BundleID = ""com.cfsz.zjh"", AppName = ""cfsz69"", AppleID = ""1436687846"", ServerOption = 4, PlatformID = 69, SiteID = 6900, StaticSiteID = 0, FlagShare = 1, Version = 0,IconName=""vfh99989""@
  	com_sjsz_nnzjh0 ="""", Index = 53, CompanyName = ""sjsz"", ProductName = ""顺金三张"", BundleID = ""com.sjsz.nnzjh"", AppName = ""sjsz53"", AppleID = ""1435867600"", ServerOption = 4, PlatformID = 53, SiteID = 5300, StaticSiteID = 0, FlagShare = 1, Version = 0,IconName=""vfh99953""@
    com_tkdw_qznn0 ="""", Index = 55, CompanyName = ""tkdw"", ProductName = ""天空电玩"", BundleID = ""com.tkdw.qznn"", AppName = ""tkdw55"", AppleID = ""1436388126"", ServerOption = 4, PlatformID = 55, SiteID = 5500, StaticSiteID = 0, FlagShare = 1, Version = 0,IconName=""vfh99955""@
    com_kzwcp_ddz0 ="""", Index = 117, CompanyName = ""kzwcp"", ProductName = ""酒神玩棋牌"", BundleID = ""com.kzwcp.ddz"", AppName = ""kzwcp117"", AppleID = ""1439004585"", ServerOption = 3, PlatformID = 117, SiteID = 11700, StaticSiteID = 0, FlagShare = 1, Version = 0,IconName=""vfh999117""";
	             
            var arr_record = p.Split('@');
            PlatformRouteRepository prr = new PlatformRouteRepository();
          
            foreach (string s in arr_record)
            {
                var arr_attr = s.Split(',');
                bool isFirst = true;
                PlatformRoute newpr = new PlatformRoute();
             
                foreach (string attr in arr_attr)
                {
                    if (isFirst)
                    {
                       newpr.AppKey = attr.Split('=')[0].ToString().Replace(" ","");
                   //    Response.Write("appkey:" + attr.Split('=')[0].ToString());
                        isFirst = false;
                    }
                    else
                    {
                        string Key = attr.Split('=')[0].ToString().Replace(" ", "");
                        string V = attr.Split('=')[1].ToString().Replace(" ", "").Replace("\"","");
                        if (Key== "Agent")
                            newpr.Agent = (string.IsNullOrEmpty(V) || V=="") ? 0 : 1;
                        if (Key == "AppleID")
                            newpr.AppleID = (string.IsNullOrEmpty(V) || V == "") ? "nil" :V;
                        if (Key == "AppName")
                            newpr.AppName = V;
                        if (Key == "BundleID")
                            newpr.BundleID = V;
                        if (Key == "CompanyName")
                            newpr.CompanyName = V;
                        if (Key == "FlagShare")
                            newpr.FlagShare = (string.IsNullOrEmpty(V) || V == "") ? 0 : 1;
                        if (Key == "IconName")
                            newpr.IconName = (string.IsNullOrEmpty(V) || V == "") ? "nil" : V;
                        if (Key == "Index")
                            newpr.Index = int.Parse(V);                        
                        if (Key == "PlatformID")
                            newpr.PlatformID = int.Parse(V);
                        if (Key == "ProductName")
                            newpr.ProductName = V;
                        if (Key == "ServerOption")
                            newpr.ServerOption = int.Parse(V);
                        if (Key == "SiteID")
                            newpr.SiteID = int.Parse(V);
                        if (Key == "StaticSiteID")
                            newpr.StaticSiteID = int.Parse(V);
                        if (Key == "Version")
                            newpr.Version = (string.IsNullOrEmpty(V) || V == "") ? 0 : 1;
                        if (Key == "Branch")
                            newpr.Branch = int.Parse(V);

                    }                    
                    newpr.Platform = 1;
                }
                //等有需求批次匯入再打開
                //    prr.Create(newpr);
                //Response.Write("@");   
            }
         //   Response.End();
        }

        
    }
}