using PlatformRouteGen.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using example.invalid;
using example.invalid.Http;
using System.Web.Http;

namespace PlatformRouteGen.Controllers
{
    [RoutePrefix("api/gv")]
    public class ApiGameVerController : ApiController
    {


        [HttpGet]
        [Route("g/{gn}")]
        public IHttpActionResult one(string gn)
        {   
            var response = new HttpResponseMessage();
            GameVerRepository gvr = new GameVerRepository();
            IEnumerable<GameVer> gvs = gvr.GetAll();

            gvs = gvs.Where(a => a.Game == gn);
            return Json(gvs);
        }
        [HttpGet]
        [Route("all")]
        public IHttpActionResult all()
        {
            var response = new HttpResponseMessage();
            GameVerRepository gvr = new GameVerRepository();
            IEnumerable<GameVer> gvs = gvr.GetAll();

            return Json(gvs);
        }

        [HttpGet]
        [Route("curpack/{Platform}")]
        public IHttpActionResult all(string Platform)
        {
            var response = new HttpResponseMessage();
            BuildingQueueRepository bqr = new BuildingQueueRepository();
            BuildingQueue bq = bqr.Get(x=>x.Platform==Platform && x.Status==1);

            return Json(bq);
        }
        [HttpGet]
        [Route("ProcessBuild/{id}")]
        public string ProcessBuild(int id)
        {

            BuildingQueueRepository bqr = new BuildingQueueRepository();
            BuildingQueue bq = bqr.Get(x => x.Id == id && x.Status == 1);
            if (bq != null)
            {
                bq.Status = 2;
                bqr.Update(bq);
            }
            return "OK";
        }
        [HttpGet]
        [Route("CompleteBuild/{id}")]
        public string CompleteBuild(int id)
        {

            BuildingQueueRepository bqr = new BuildingQueueRepository();
            BuildingQueue bq = bqr.Get(x => x.Id == id && x.Status == 2);
            if (bq != null)
            {
                bq.Status = 3;
                bqr.Update(bq);
            }
            return "OK";
        }
    }
}
