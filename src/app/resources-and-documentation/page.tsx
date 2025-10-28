import { ResourcesHeroSection, FeaturedResources, Newsletter } from '@/types';

export const metadata = {
  title: 'Resources and Documentation | KP Pay - Developer Resources',
  description:
    'Everything you need to build, integrate and scale with KP Pay. Access comprehensive API documentation, tutorials, guides, and developer support.',
};

const ResourcesPage = () => {
  return (
    <main className="page-transition">
      <ResourcesHeroSection />
      <FeaturedResources />
      {/* Newsletter Section */}
      <section className="container-padding py-16 md:py-24 bg-surface-primary">
        <div className="max-w-7xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
