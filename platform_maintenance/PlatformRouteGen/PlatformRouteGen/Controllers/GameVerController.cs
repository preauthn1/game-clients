using PlatformRouteGen.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlatformRouteGen.Controllers
{
    public class GameVerController : Controller
    {
        // GET: GameVer
        public ActionResult Index()
        {
            GameVerRepository gvr = new GameVerRepository();
            IEnumerable<GameVer> gvs = gvr.GetAll();
            return View(gvs);

        }

        [HttpGet]
        public ActionResult Update(string g,string p)
        {
           
            GameVerRepository gvr = new GameVerRepository();
            GameVer gv = gvr.Get(x=>x.Game==g&&x.Platform==p);
            return View(gv);

        }

        [HttpPost]
        public ActionResult Update(GameVer gv)
        {
            gv.UpdateAt = DateTime.Now;

            GameVerRepository gvr = new GameVerRepository();
            GameVer ugv = gvr.Get(x => x.Game==gv.Game&&x.Platform==gv.Platform);
            ugv.Ver = gv.Ver;
            ugv.UpdateAt = DateTime.Now;
            gvr.Update(ugv);

            return RedirectToAction("index");

        }


        public ActionResult BuildGame(string g,string v,string p)
        {

            BuildingQueueRepository bqr = new BuildingQueueRepository();
            IEnumerable<BuildingQueue> bqs = bqr.GetByParm(x => x.GameName == g && x.Platform == p && x.Ver== v && x.Status==1);
            if (bqs.Count() > 0)
            {
                //處於佇列中,無須加入
                //ViewBag.ErrorMsg = "處於佇列中,無須重複加入";
                TempData["ErrorMsg"] = "處於佇列中,無須重複加入";
                return RedirectToAction("index");
            }
            else
            {
                BuildingQueue bq = new BuildingQueue();
                bq.GameName = g;
                bq.Platform = p;
                bq.Status = 1;
                bq.UpdateAt = DateTime.Now;
                bq.Ver = v;
                bqr.Create(bq);
                return RedirectToAction("BuildList");
            }

           

        }

        public ActionResult BuildList()
        {
            BuildingQueueRepository bqr = new BuildingQueueRepository();
            IEnumerable<BuildingQueue> bqs = bqr.GetByParm(x=>x.Status==1 || x.Status == 2);
            return View(bqs);
        }

        public ActionResult CancelBuild(int id)
        {

            BuildingQueueRepository bqr = new BuildingQueueRepository();
            BuildingQueue bq = bqr.Get(x => x.Id==id);
            if (bq!=null)
            {
                bq.Status = 10;  
                bqr.Update(bq);
            }

            return RedirectToAction("BuildList");

        }

      
    }
}