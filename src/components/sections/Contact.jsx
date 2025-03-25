import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className="py-20 px-6 bg-[#2b1e42]"> 
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in touch 🚀</h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in working together? Let's discuss your documentation needs.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/_ileolami" className="hover:text-blue-400"><Twitter /></a>
            <a href="https://github.com/ileolami" className="hover:text-blue-400"><Github /></a>
            <a href="https://www.linkedin.com/in/makindemercymiracle" className="hover:text-blue-400"><Linkedin /></a>
            <a href="mailto:makindemercymiracle@gmail.com" className="hover:text-blue-400"><Mail /></a>
          </div>
        </div>
      </section>

      <footer className="py-6 px-6 bg-[#2b0966]">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Makinde Mercy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}