import Link from 'next/link';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getProducts() {
  return prisma.product.findMany({
    take: 3,
    orderBy: { id: 'desc' },
  });
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-[#f8f7f6] dark:bg-[#221a10] text-[#181511] dark:text-[#f8f7f6]">


      {/* Hero Section */}
      <section className="relative w-full bg-[#f4f1ed] dark:bg-[#1a150e] overflow-hidden py-12 md:py-20 lg:py-28 px-4 md:px-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-[#ec9213]/10 text-9xl font-serif opacity-50 select-none">&quot;</div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ec9213]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 items-center relative z-10">
          <div className="flex flex-col gap-6 md:gap-8 pr-0 lg:pr-10 text-center lg:text-left">
            <h1 className="text-[#181511] dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              A Piece Of Craft Can Tell A{' '}
              <span className="relative inline-block z-10">
                Thousand Stories
                <span className="absolute bottom-2 left-0 w-full h-3 md:h-5 bg-[#ec9213]/80 -z-10 transform -rotate-1"></span>
              </span>
            </h1>
            <p className="text-[#897961] text-lg md:text-xl font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Suwarna Bharat is a platform dedicated to reviving the dying arts of Bengal. We connect you directly with the master artisans of Sholapith, Dokra, and Terracotta.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="/marketplace"
                className="flex items-center justify-center bg-[#181511] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#ec9213] transition-colors duration-300 shadow-lg"
              >
                Shop Collection
              </Link>
              <Link
                href="/artisan-speaks"
                className="flex items-center justify-center border border-[#181511] text-[#181511] dark:border-white dark:text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#181511] hover:text-white transition-colors duration-300"
              >
                Watch Video
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full mt-10 lg:mt-0 flex items-center justify-center">
            <div className="absolute top-0 left-[10%] w-40 md:w-56 bg-white p-2 md:p-3 shadow-lg transform -rotate-6 z-10 hover:scale-105 hover:rotate-0 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                <img alt="Artisan weaving" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa0jSRUdo_O6joy9Ok2Vv_b6wdU-chSRjZrNdkWPKH4a0cWN3eiep8FmPHrhJbsM-3CD-0haOhaYes4Fs9MVo8qVDByP5NWK_2QEQN7eYfymEJQpmiyh5sO5ikSBJMuvRs_Vf_TeWcsXskliA6KT_uV6HEV0lwJLmtoSDsUJcK9BZzdTwei5hDjrU9mcOAoJ0OM3hNGZa0GV6x2n4ijk9fTeBOcCcuTJZdIQqO8I_kZzGU-dbtPRnVluymgTfthvHAgTOpa4s6XzI" />
              </div>
            </div>
            <div className="absolute top-[10%] left-[35%] w-48 md:w-64 bg-white p-2 md:p-3 shadow-lg transform rotate-3 z-20 hover:scale-105 hover:rotate-0 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img alt="Pottery hands" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdjKpn8aJgk13Fsm9I2sO07v1c-Ev-w9vJyaP2JzAq7lf3lwzY2lUC3WhNTOpl1pUwhunZpzOkR_fDRwht8Kj3B3SchocJD-LyRoOOa6Z7q3jZrYX8Bad_3ytpCoCkLVSo1kpqvncLTjcY2VU0HsR92ekWAodyMrrIfqabFsEm4gbeCfsvF4LkN5Bzn9Mxpf3DrzRKgasLXGd9CjIerihzoKLADAgwpjvvb4oXD6uebCbKKmkGdJZjesqn0fKdzdu8L3p19J03BuQ" />
              </div>
            </div>
            <div className="absolute bottom-[5%] right-[5%] w-40 md:w-52 bg-white p-2 md:p-3 shadow-lg transform -rotate-3 z-30 hover:scale-105 hover:rotate-0 transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img alt="Sholapith art" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp72p107s6hd7S53y5BuubqFDB9pdAZMvsemWkwGfIB2izMQ3r_SN-Z1tFBGfexxOcHiuuezhDUK5FNeoS05Imu00C4Tgx7egkvIYXW6gT07Nk1NgIlLOvVpknPJr60W9G064Osekl1oBfKAxvmtRvQg18yq2FSQQClTzZbyrs_sHrQ4cFhEK4RrV2wNSDNJBjqL6VLAYAq5Zu8f22dttzxUgozqhT7MuE2VHFnwCcPEZKd6yZISsAQyRegRw-0sjXSiDF9cc6lqg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-40 bg-[#f8f7f6] dark:bg-[#221a10]">
        <div className="mx-auto max-w-[960px] flex flex-col items-center text-center gap-10">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-[#ec9213] uppercase tracking-widest text-xs font-bold">Our Purpose</span>
            <h2 className="text-[#181511] dark:text-white text-3xl md:text-4xl font-bold leading-tight">Weaving Stories, Preserving Tradition</h2>
            <div className="h-1 w-24 bg-[#ec9213] mt-2"></div>
          </div>
          <p className="text-[#181511]/80 dark:text-white/80 text-xl md:text-2xl font-light leading-relaxed italic max-w-[800px]">
            &quot;Our heritage is fading into the shadows of modernization. We are a collective dedicated to empowering rural artisans and bringing the timeless craft of West Bengal to the global stage.&quot;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white dark:bg-[#2c2215] border border-[#e6e1db] dark:border-[#3a2e22] shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-[#ec9213]/10 flex items-center justify-center text-[#ec9213]">
                <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
              </div>
              <h3 className="text-lg font-bold">Empower Artisans</h3>
              <p className="text-sm text-[#897961]">Providing fair wages and recognition to the master craftsmen of rural Bengal.</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white dark:bg-[#2c2215] border border-[#e6e1db] dark:border-[#3a2e22] shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-[#ec9213]/10 flex items-center justify-center text-[#ec9213]">
                <span className="material-symbols-outlined text-3xl">handyman</span>
              </div>
              <h3 className="text-lg font-bold">Sustain Culture</h3>
              <p className="text-sm text-[#897961]">Keeping ancient techniques like lost-wax casting and silk weaving alive.</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white dark:bg-[#2c2215] border border-[#e6e1db] dark:border-[#3a2e22] shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-[#ec9213]/10 flex items-center justify-center text-[#ec9213]">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h3 className="text-lg font-bold">Global Reach</h3>
              <p className="text-sm text-[#897961]">Connecting local art with a global audience who values authenticity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Crafts Section */}
      <section className="py-20 px-4 md:px-40 bg-[#f4f1ed] dark:bg-[#1e170e]">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#dcd6ce] dark:border-[#3a2e22] pb-6">
            <div className="flex flex-col gap-2">
              <span className="text-[#ec9213] uppercase tracking-widest text-xs font-bold">Collection</span>
              <h2 className="text-[#181511] dark:text-white text-3xl md:text-4xl font-bold">Featured Crafts</h2>
            </div>
            <Link className="flex items-center gap-2 text-[#ec9213] font-bold hover:gap-3 transition-all" href="/marketplace">
              View all categories <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col gap-4 cursor-pointer">
                <div className="overflow-hidden rounded-lg aspect-[4/5] relative">
                  <img
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={product.imageUrl}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-[#181511] dark:text-white group-hover:text-[#ec9213] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[#897961] text-sm line-clamp-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181511] text-white py-16 px-4 md:px-40 border-t-4 border-[#ec9213]">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-[#2c2215] p-8 md:p-12 rounded-xl border border-white/5">
            <div className="flex flex-col gap-2 max-w-md">
              <h3 className="text-2xl font-bold">Join the Movement</h3>
              <p className="text-white/60 text-sm">Subscribe to receive stories of artisans, new collection alerts, and heritage news directly to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ec9213] w-full md:w-[300px]" placeholder="Enter your email" type="email" />
              <button className="bg-[#ec9213] hover:bg-[#ec9213]/90 text-[#181511] font-bold px-6 py-3 rounded-lg transition-colors">Subscribe</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/30 border-t border-white/5 pt-8">
            <p>© 2024 Suwarna Bharat. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
              <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
