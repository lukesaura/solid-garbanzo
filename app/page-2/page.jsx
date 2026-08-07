// app/page-2/page.jsx — "Page Two": the personal column.
export const metadata = {
  title: 'The Times of Shrinikheathan — Page 2',
  description: 'Off the clock: the personal column.'
};

const hobbies = [
  ['Bibliophile', 'A reader who buys faster than he finishes. Fiction, fantasy and self-help all make the shelf.'],
  ['Canvas Painting', 'Oils and acrylics when the code compiles.'],
  ['Digital Art & Comics', 'Panels, inks and the occasional webtoon.', 'https://www.webtoons.com/en/canvas/the-love-paradox/list?title_no=1037817'],
  ['Cinephile', 'If it has a good screenplay, consider the evening gone.'],
  ['Flute', 'Breath control for the impatient engineer.'],
  ['Carnatic Vocal', 'Fifteen years of training under Shri Yazhpanam V.R. Krishnan — still the thing I’m proudest of.'],
  ['Basketball & Table Tennis', 'The only bus errors I enjoy are on the court.'],
  ['Chess', 'When I want a real challenge.']
];

export default function PageTwo() {
  return (
    <main style={{ padding: 'clamp(12px, 3vw, 40px) 0' }}>
      <div className="sheet sheet-p2">
        <div className="wrap">
          {/* Mini masthead */}
          <hr className="rule-hair" />
          <div className="topbar">
            <span>Page Two</span>
            <span>The Personal Column</span>
            <span>Off the Clock</span>
          </div>
          <hr className="rule-thick" />

          <div className="section-space">
            <div style={{ textAlign: 'center' }}>
              <span className="kicker">Feature · The Man Himself</span>
            </div>
            <div style={{ textAlign: 'center', margin: '10px 0 16px' }}>
              <span className="byline">A personal dispatch · by Shrinikheathan Arunkumar</span>
            </div>
            <hr className="rule-thin" style={{ marginBottom: '18px' }} />

            <div className="prose cols-2 dropcap">
              <p>
                The first page introduced you to my work &mdash; this one&rsquo;s meant to
                introduce you to me!
              </p>
              <p>
                I grew up on the move. My parents&rsquo; work took our family from Bangalore to
                Chennai to Muscat and back again, and somewhere in that shuffle I picked up a habit
                of finding friends and firsts wherever I landed &mdash; Muscat, in particular, is
                where most of my childhood memories live, and where I first fell in love with
                Carnatic music, training for years under Shri Yazhpanam V.R. Krishnan. Fifteen
                years and several competition wins later, it&rsquo;s still the thing I&rsquo;m
                proudest of, more than any degree.
              </p>
              <p>
                After finishing school, I did my Bachelors in SASTRA, Thanjavur &mdash;
                the old Chola capital, quiet but steeped in history, a fitting place to spend four
                years studying software and culture. These days my parents are based in Dubai, so
                that&rsquo;s where I head for vacations.
              </p>
              <p>
                Academics, funnily enough, is the least of what drives me. Outside of engineering,
                I&rsquo;m usually playing basketball, table tennis, or chess when I want a real
                challenge, drawing comics purely for the fun of it, working through a flute lesson,
                or lost in a novel &mdash; fiction, fantasy, and self-help all make the shelf.
              </p>
            </div>
          </div>

          {/* Arts & Leisure */}
          <div className="section-space">
            <div className="section-head">
              <span className="section-label">Arts &amp; Leisure</span>
              <span className="section-sub">— What fills the margins</span>
            </div>
            <hr className="rule-thin" style={{ marginBottom: '18px' }} />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '18px 30px'
              }}
            >
              {hobbies.map(([name, note, link]) => (
                <div key={name} className="cell" style={{ paddingTop: '14px' }}>
                  <h3 className="article-title" style={{ fontSize: '18px', marginBottom: '4px' }}>
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}>
                        {name}
                      </a>
                    ) : name}
                  </h3>
                  <p className="prose" style={{ fontSize: '14px', margin: 0 }}>{note}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="rule-thick" style={{ marginTop: '20px' }} />
          <div className="topbar" style={{ justifyContent: 'center', padding: '18px 0' }}>
            <a
              href="/"
              style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}
            >
              ← Back to the Front Page
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
