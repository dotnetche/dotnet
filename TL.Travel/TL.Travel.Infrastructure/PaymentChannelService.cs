using TL.DataAccess.Models;
using TL.Travel.DataAccess.Base;
using TL.Travel.Interfaces;

namespace TL.Travel.Infrastructure
{
    public class PaymentChannelService : GenericCrudService<PaymentChannel>, IPaymentChannelService
    {
        public PaymentChannelService(BaseTLTravelDbContext dbContext) : base(dbContext)
        {
        }

        public IQueryable<PaymentChannel> GetByName(string name)
        {
            return GetAll().Where(pc => pc.Name.Contains(name));
        }
    }
}
