using Microsoft.EntityFrameworkCore;
using TL.Travel.DataAccess.Abstractions.Interfaces;
using TL.Travel.DataAccess.Base;
using TL.Travel.Interfaces;

namespace TL.Travel.Infrastructure
{
    public class GenericCrudService<T> : BaseService, IGenericCrudService<T>
        where T : class, IIdentity, ISoftDeletable
    {
        private readonly DbSet<T> _dbSet;

        public GenericCrudService(BaseTLTravelDbContext dbContext) : base(dbContext)
        {
            _dbSet = dbContext.Set<T>();
        }

        public virtual IQueryable<T> GetAll()
        {
            return _dbSet.Where(e => e.IsActive);
        }

        public virtual T? GetById(int id)
        {
            return _dbSet.FirstOrDefault(e => e.Id == id && e.IsActive);
        }

        public virtual T AddEdit(T entity, int id = 0)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));

            if (id == 0 || entity.Id == 0)
            {
                entity.IsActive = true;

                if (entity is IAuditable auditableEntity)
                {
                    auditableEntity.CreatedOn = DateTime.UtcNow;
                    auditableEntity.CreatedBy = GetCurrentUser();
                }

                _dbSet.Add(entity);
            }
            else
            {
                var existingEntity = _dbSet.FirstOrDefault(e => e.Id == id);
                if (existingEntity == null)
                    throw new InvalidOperationException($"Entity with ID {id} not found");

                if (entity is IAuditable auditableEntity)
                {
                    auditableEntity.UpdatedOn = DateTime.UtcNow;
                    auditableEntity.UpdatedBy = GetCurrentUser();
                }

                Db.Entry(existingEntity).CurrentValues.SetValues(entity);
                entity = existingEntity;
            }

            Db.SaveChanges();
            return entity;
        }

        public virtual void Delete(int id)
        {
            var entity = _dbSet.FirstOrDefault(e => e.Id == id);
            if (entity == null)
                throw new InvalidOperationException($"Entity with ID {id} not found");

            entity.IsActive = false;

            if (entity is IAuditable auditableEntity)
            {
                auditableEntity.UpdatedOn = DateTime.UtcNow;
                auditableEntity.UpdatedBy = GetCurrentUser();
            }

            Db.SaveChanges();
        }

    }
}
