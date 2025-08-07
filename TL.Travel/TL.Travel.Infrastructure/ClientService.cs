using TL.DataAccess.Models;
using TL.Travel.DataAccess.Base;
using TL.Travel.Interfaces;

namespace TL.Travel.Infrastructure
{
    public class ClientService : GenericCrudService<Client>, IClientService
    {
        public ClientService(BaseTLTravelDbContext dbContext) : base(dbContext)
        {
        }

        public IQueryable<Client> GetByName(string name)
        {
            return GetAll().Where(c => c.Name.Contains(name));
        }
    }
}
