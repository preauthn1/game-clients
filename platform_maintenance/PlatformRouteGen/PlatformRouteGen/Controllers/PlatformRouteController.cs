using PlatformRouteGen.Models;
using PlatformRouteGen.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using example.invalid;
using example.invalid.Http;
using example.invalid.Http.Headers;
using System.Text;
using System.Web.Http;

namespace PlatformRouteGen.Controllers
{
    [RoutePrefix("api/pr")]   
    public class PlatformRouteController : ApiController
    {
        [HttpPost]
        [Route("all")]
        public IHttpActionResult all(TBData query)
        {
           
            var response = new HttpResponseMessage();
            
            string x = "<div class=\"table - responsive\"><table class=\"table table-striped table-sm\">" +
                        "<thead><tr>" +
                        "<th style =\"width:5%;\">Action    </th>"+
                        "<th style=\"width:20%;\">AppKey</th>" +
                        "<th style=\"width:3%;\">id</th>" +
                        "<th style=\"width:9%;\">CompName</th>" +
                        "<th style=\"width:13%;\">ProductName</th>" +
                        "<th style=\"width:18%;\">BundleID</th>" +
                        "<th style=\"width:13%;\">AppName</th>" +
                        "<th style=\"width:6%;\">AppleID</th>" +
                        "<th style=\"width:3%;\">SO</th>" +
                        "<th style=\"width:3%;\">PID</th>" +
                        "<th style=\"width:3%;\">SID</th>" +
                        "<th style=\"width:3%;\">StaticSID</th>" +
                        "<th style=\"width:3%;\">FlagShare</th>" +
                        "<th style=\"width:3%;\">Ver</th>" +
                        "<th style=\"width:3%;\">Ag</th>" +
                        "</tr></thead><tbody>";
            StringBuilder sb = new StringBuilder();
            sb.Append(x);
            PlatformRouteRepository prr = new PlatformRouteRepository();
            IEnumerable<PlatformRoute> prs = null;
            if (query == null)
            {
                prs = prr.GetByParm(y=>y.IsDelete==0);
            }
            else
            {
                if (query.appname != null)
                    prs = prr.GetByParm(a => a.ProductName.Contains(query.appname)|| a.BundleID.Contains(query.appname) || a.PlatformID.ToString().Contains(query.appname)); 
                else
                    prs = prs = prr.GetByParm(y => y.IsDelete == 0);


                if (query.SO != 99)
                    prs = prs.Where(a => a.ServerOption==(query.SO));
                if (query.fs != 99)
                    prs = prs.Where(a => a.FlagShare == (query.fs));
                if (query.ver != 99)
                    prs = prs.Where(a => a.Version == (query.ver));
                if (query.ag != 99)
                    prs = prs.Where(a => a.Agent == (query.ag));
                if (query.pf != 99)
                    prs = prs.Where(a => a.Platform == (query.pf));
                if (query.br != 99)
                    prs = prs.Where(a => a.Branch == (query.br));

                prs = prs.Where(a => a.IsDelete == 0);
            }
            foreach (PlatformRoute p in prs)
            {
                var urle = this.Url.Link("Default", new { Controller = "Home", Action = "Update", AppKey = p.AppKey });
                var urld = this.Url.Link("Default", new { Controller = "Home", Action = "Delete", id = p.Id });
                var urlbatchCreate = this.Url.Link("Default", new { Controller = "Home", Action = "BatchCreate", id = p.Id });

                sb.AppendFormat("<tr><td><a href='" + urlbatchCreate + "'>Batch5 </a><a href='" + urle + "'>Edit </a><a href='" + urld + "'>Delete</a> </td><td>{0}</td ><td>{1}</td><td>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td><td>{6}</td><td>{7}</td><td>{8}</td><td>{9}</td><td>{10}</td><td>{11}</td><td>{12}</td><td>{13}</td></tr>",
                p.AppKey, p.Index, p.CompanyName, p.ProductName, p.BundleID, p.AppName, p.AppleID, p.ServerOption, p.PlatformID, p.SiteID, p.StaticSiteID, p.FlagShare, p.Version, p.Agent);
            }
            sb.Append("</tbody></table></div>");
            return Json(sb.ToString());
        }

        [HttpGet]
        [Route("unity")]
        public IHttpActionResult unity(int  pl)
        {
            var response = new HttpResponseMessage();
            
            IEnumerable<PlatformRoute> prs = null;
         
          
            prs = GetData((PlatformMode)Enum.Parse(typeof(PlatformMode), pl.ToString()));
            int amt = prs.Count();
            string ot_str = "";
            ot_str += "local list = {";
            ot_str += "\n";
            foreach (PlatformRoute p in prs)
            {
                String s = String.Format("{0} = {{ Index = {1},CompanyName = \"{2}\",ProductName = \"{3}\",BundleID = \"{4}\",AppName = \"{5}\",AppleID = \"{6}\",ServerOption = {7},PlatformID = {8},SiteID = {9},StaticSiteID = {10},FlagShare = {11},Agent={12},IconName=\"{13}\",NotExport=\"{14}\",Branch={15} }},",
                                        p.AppKey, p.Index, p.CompanyName, p.ProductName, p.BundleID, p.AppName, p.AppleID, p.ServerOption, p.PlatformID, p.SiteID, p.StaticSiteID, p.FlagShare, p.Agent,(p.IconName=="nil")?"": p.IconName,p.NotExport, p.Branch);
                ot_str += (s);
                ot_str += ("\n");
            }
            ot_str += ("\n");
            ot_str += ("}");
            return Json(ot_str);
        }
        [HttpGet]
        [Route("unityjson")]
        public IHttpActionResult untiyjson(int pl)
        {
            var response = new HttpResponseMessage();
            IEnumerable<PlatformRoute> prs = null;
            
            prs = GetData((PlatformMode)Enum.Parse(typeof(PlatformMode), pl.ToString()));
            return Json(prs);
        }
        public IEnumerable<PlatformRoute> GetData(PlatformMode pm)
        {
            PlatformRouteRepository prr = new PlatformRouteRepository();
            IEnumerable<PlatformRoute> prs = prr.GetAll();
            int platform = (int)pm;
            prs = prs.Where(a => a.Platform == platform && a.IsDelete==0);
           
            
            

            return prs;

        }

        [HttpPost]
        [Route("testpost")]
        public IHttpActionResult testpost(tp query)
        {

            var response = new HttpResponseMessage();

            Dictionary<string, string> k = new Dictionary<string, string>();
            k.Add("1", query.q);
            k.Add("2", query.s);
            return Json(k);
        }


    }
}
