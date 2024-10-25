using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Domain.Activity> // Specifica il namespace completo
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Domain.Activity> // Specifica il namespace completo
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Domain.Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }
    }
}
