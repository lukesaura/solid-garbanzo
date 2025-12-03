// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-16 py-12 text-center text-sm text-warmgray-600">
      <div className="container">
        <div className="mt-2">
          Email: 
          <a href="mailto:ashrink91@gmail.com" className="underline ml-1">
            ashrink91@gmail.com
          </a>
          {' '}• Github: 
          <a 
            href="https://github.com/lukesaura" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline ml-1"
          >
            github.com/lukesaura
          </a>
        </div>
      </div>
    </footer>
  );
}
