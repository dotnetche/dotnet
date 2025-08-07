using TL.DataAccess.Models;
using TL.Travel.DataAccess.Base;
using TL.Travel.Interfaces;

namespace TL.Travel.Infrastructure
{
    public class ReservationStatusService : GenericCrudService<ReservationStatus>, IReservationStatusService
    {
        public ReservationStatusService(BaseTLTravelDbContext dbContext) : base(dbContext)
        {
        }

        public IQueryable<ReservationStatus> GetByCode(string code)
        {
            return GetAll().Where(rs => rs.Code == code);
        }
    }
}
