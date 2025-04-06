import Layout from '@/components/Layout';

type StudentStory = {
  name: string;
  photo?: string;
  journey: string;
  before: string;
  after: string;
};

const stories: StudentStory[] = [
  {
    name: 'Ritika Sharma',
    journey:
      'I was confused between NEET and B.Sc. Everyone said NEET is the only way. But I chose B.Sc in Microbiology, and now I’m doing research at IISER.',
    before: 'Pressured to do NEET',
    after: 'Found passion in research & B.Sc',
  },
  {
    name: 'Aman Verma',
    journey:
      'I barely passed 12th. Everyone laughed when I picked Graphic Design. But 2 years later, I got a job at a startup and freelance clients.',
    before: 'Struggled academically',
    after: 'Now a freelance designer',
  },
  {
    name: 'Sanya Chauhan',
    journey:
      'Tried B.Tech, hated coding. Dropped out, switched to BBA and loved marketing. Today, I lead growth at a D2C brand.',
    before: 'Dropped out of B.Tech',
    after: 'Built career in Marketing',
  },
];

export default function StoriesPage() {
  return (
    <Layout>
      <section style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center' }}>Real Student Stories</h1>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '1rem auto' }}>
          Every student has a unique journey. These real stories might help you find clarity, courage, or even your calling.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          {stories.map((story, idx) => (
            <div key={idx} style={{ border: '1px solid #ccc', borderRadius: '1rem', padding: '1.5rem', background: '#fefefe' }}>
              <h3>{story.name}</h3>
              <p style={{ fontStyle: 'italic', color: '#555' }}>Before: {story.before}</p>
              <p style={{ margin: '1rem 0' }}>{story.journey}</p>
              <p style={{ fontWeight: 'bold' }}>After: {story.after}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
