using TL.DataAccess.Models;
using TL.Travel.DataAccess.Base;
using TL.Travel.Interfaces;

namespace TL.Travel.Infrastructure
{
    public class AgentService : GenericCrudService<Agent>, IAgentService
    {
        public AgentService(BaseTLTravelDbContext dbContext) : base(dbContext)
        {
        }

        public IQueryable<Agent> GetByName(string name)
        {
            return GetAll().Where(a => a.Name.Contains(name));
        }

        public IQueryable<Agent> GetByCommissionRange(decimal minCommission, decimal maxCommission)
        {
            return GetAll().Where(a => a.ComissionPercent >= minCommission && a.ComissionPercent <= maxCommission);
        }
    }
}
