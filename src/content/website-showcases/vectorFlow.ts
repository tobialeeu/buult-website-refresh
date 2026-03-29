import { showcaseReactStylesheetHref } from "./assetManifest.js";
import type { WebsiteShowcaseSlide } from "./index";
import { createBundledReactPreviewDocument } from "./reactPreview";

const vectorFlowSource = `import React from 'react';
import {
  Workflow, Zap, Database, ArrowRight, Shield, Terminal,
  Command, GitBranch, Play, CheckCircle2, ChevronDown,
  Layers, Cpu, Box, LayoutGrid, Activity, Hexagon,
  Triangle, Circle, Cloud
} from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', icon: Icon }) => {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md text-sm px-4 py-2";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button className={\`\${base} \${variants[variant]} \${className}\`}>
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};

const NavBar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
    <div className="flex items-center justify-between px-8 h-16 max-w-[1400px] mx-auto">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2 text-white font-semibold text-lg tracking-tight">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Workflow className="w-3.5 h-3.5 text-white" />
          </div>
          <span>VectorFlow</span>
        </div>
        <div className="flex items-center space-x-6 text-sm text-gray-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Developers</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Sign In</Button>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  </nav>
);

const NodeItem = ({ icon: Icon, title, desc, status = 'active' }) => (
  <div className="bg-[#111113] border border-white/10 rounded-lg p-4 w-64 shadow-xl relative z-10 flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-2">
        <div className="p-1.5 rounded-md bg-white/5 border border-white/5">
          <Icon className="w-4 h-4 text-gray-300" />
        </div>
        <span className="text-sm font-medium text-gray-200">{title}</span>
      </div>
      {status === 'active' && <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />}
      {status === 'pending' && <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />}
    </div>
    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const HeroMockup = () => (
  <div className="relative w-full max-w-5xl mx-auto mt-20 perspective-1000">
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-purple-500/5 blur-[100px] -z-10 rounded-full" />
    <div className="rounded-xl border border-white/10 bg-[#0A0A0C] shadow-2xl overflow-hidden backdrop-blur-xl">
      <div className="h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-4 justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono bg-black/40 px-3 py-1 rounded-md border border-white/5">
          <Terminal className="w-3 h-3" />
          <span>production / user_routing_pipeline</span>
        </div>
        <div className="w-16" />
      </div>

      <div className="flex h-[400px]">
        <div className="w-48 border-r border-white/10 bg-white/[0.01] p-3 flex flex-col gap-1">
          <div className="text-xs font-semibold text-gray-500 mb-2 px-2 mt-2">EXPLORER</div>
          {['Pipelines', 'Models', 'Connections', 'Deployments', 'Settings'].map((item, i) => (
            <div key={item} className={\`px-2 py-1.5 rounded-md text-sm flex items-center space-x-2 cursor-pointer \${i === 0 ? 'bg-indigo-500/10 text-indigo-300' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}\`}>
              <Layers className="w-3.5 h-3.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 relative bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <path d="M 280 200 C 350 200, 350 120, 420 120" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="drop-shadow-[0_0_4px_rgba(99,102,241,0.4)]" />
            <path d="M 280 200 C 350 200, 350 280, 420 280" stroke="#333" strokeWidth="2" strokeDasharray="4 4" fill="none" />
            <path d="M 680 120 C 730 120, 730 200, 780 200" stroke="url(#lineGrad2)" strokeWidth="2" fill="none" className="drop-shadow-[0_0_4px_rgba(168,85,247,0.4)]" />
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-10 top-1/2 -translate-y-1/2">
            <NodeItem
              icon={Zap}
              title="Webhook Trigger"
              desc="Listens for incoming user payloads from the main API gateway."
              status="active"
            />
          </div>

          <div className="absolute left-[420px] top-[120px] -translate-y-1/2">
            <NodeItem
              icon={Cpu}
              title="LLM Routing"
              desc="Classifies intent and routes to specialized sub-models."
              status="active"
            />
          </div>

          <div className="absolute left-[420px] top-[280px] -translate-y-1/2 opacity-60">
            <NodeItem
              icon={Database}
              title="Cache Lookup"
              desc="Checks Redis for identical recent queries to bypass generation."
              status="pending"
            />
          </div>

          <div className="absolute left-[780px] top-1/2 -translate-y-1/2">
            <NodeItem
              icon={Cloud}
              title="Response Sync"
              desc="Formats output and streams final response back to client."
              status="active"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title }) => (
  <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-300 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-gray-300 group-hover:text-white group-hover:border-white/20 transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam.
    </p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-gray-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden min-w-[1200px]">
      <NavBar />

      <main>
        <section className="pt-40 pb-20 px-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Automate the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                impossible workflows.
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>

            <div className="flex items-center justify-center space-x-4">
              <Button className="h-12 px-8 text-base" icon={ArrowRight}>Start Building</Button>
              <Button variant="secondary" className="h-12 px-8 text-base">Read the Docs</Button>
            </div>

            <HeroMockup />
          </div>
        </section>

        <section className="py-12 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-[1200px] mx-auto text-center px-8">
            <p className="text-xs font-semibold text-gray-500 tracking-widest mb-8">TRUSTED BY INNOVATIVE ENGINEERING TEAMS</p>
            <div className="flex items-center justify-between opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center space-x-2 text-xl font-bold"><Triangle className="w-6 h-6" /><span>AcmeCorp</span></div>
              <div className="flex items-center space-x-2 text-xl font-bold"><Hexagon className="w-6 h-6" /><span>Polymath</span></div>
              <div className="flex items-center space-x-2 text-xl font-bold"><Circle className="w-6 h-6" /><span>Orbital</span></div>
              <div className="flex items-center space-x-2 text-xl font-bold"><Box className="w-6 h-6" /><span>BlockScale</span></div>
              <div className="flex items-center space-x-2 text-xl font-bold"><Activity className="w-6 h-6" /><span>Pulsar</span></div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Intelligence at scale.</h2>
              <p className="text-gray-400 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas pellentesque nunc, eget varius mi commodo vel.</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <FeatureCard icon={GitBranch} title="Visual Orchestration" />
              <FeatureCard icon={Terminal} title="Code-first Approach" />
              <FeatureCard icon={Shield} title="Enterprise Security" />
              <FeatureCard icon={Activity} title="Real-time Analytics" />
              <FeatureCard icon={Command} title="CLI & API Access" />
              <FeatureCard icon={Layers} title="Version Control" />
            </div>
          </div>
        </section>

        <section className="py-32 px-8 bg-gradient-to-b from-[#0a0a0c] to-black border-t border-white/5">
          <div className="max-w-[1200px] mx-auto flex items-center gap-16">
            <div className="w-1/2">
              <div className="inline-flex items-center space-x-2 text-purple-400 mb-4 text-sm font-semibold">
                <Cpu className="w-4 h-4" />
                <span>NATIVE INTEGRATION</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Connect your entire stack in milliseconds.</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <ul className="space-y-4 mb-10">
                {['Seamless deployment to edge networks', 'Type-safe API auto-generation', 'Zero-downtime schema migrations'].map((text, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <Button variant="secondary" icon={ArrowRight}>View Integrations</Button>
            </div>

            <div className="w-1/2 relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-[100px] -z-10" />
              <div className="bg-[#0D0D10] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center space-x-4 bg-white/[0.02] border-b border-white/10 px-4 py-3">
                  <div className="flex space-x-4 text-sm font-medium">
                    <span className="text-white border-b border-indigo-500 pb-3 -mb-3">vector.config.ts</span>
                    <span className="text-gray-500">schema.prisma</span>
                    <span className="text-gray-500">package.json</span>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto">
                  <span className="text-purple-400">import</span> {'{'} Pipeline, Agent {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@vectorflow/core'</span>;<br /><br />
                  <span className="text-purple-400">export const</span> router = <span className="text-blue-400">new</span> Pipeline({'{'}<br />
                  &nbsp;&nbsp;name: <span className="text-green-400">'main-router'</span>,<br />
                  &nbsp;&nbsp;triggers: ['webhook', 'schedule'],<br />
                  &nbsp;&nbsp;models: ['gpt-4-turbo', 'claude-3'],<br />
                  &nbsp;&nbsp;execute: <span className="text-blue-400">async</span> (ctx) =&gt; {'{'}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Lorem ipsum dolor sit amet</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> intent = <span className="text-blue-400">await</span> ctx.agent.classify(ctx.payload);<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> ctx.route(intent);<br />
                  &nbsp;&nbsp;{'}'}<br />
                  {'}'});
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Built for every team.</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Terminal className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 relative z-10">For Engineering</h3>
                <p className="text-gray-400 mb-6 max-w-md relative z-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center text-sm relative z-10">
                  Explore Engineering Docs <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <LayoutGrid className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 relative z-10">For Product</h3>
                <p className="text-gray-400 mb-6 max-w-md relative z-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center text-sm relative z-10">
                  See Product Workflows <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-900/10" />
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <Triangle className="w-12 h-12 text-white/20 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-10 leading-tight max-w-4xl mx-auto">
              "VectorFlow completely changed how we ship AI features. What used to take our platform team three weeks to architect now takes a single afternoon."
            </h2>
            <div className="flex flex-col items-center">
              <img
                src="/website-showcases/assets/vectorflow/sarah-jenkins-generated.jpg"
                alt="Sarah Jenkins"
                className="w-12 h-12 rounded-full object-cover object-center mb-4 border border-white/20"
              />
              <div className="text-white font-medium">Sarah Jenkins</div>
              <div className="text-gray-500 text-sm">CTO at AcmeCorp</div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: "How does VectorFlow integrate with my existing infrastructure?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { q: "Is my data secure and compliant?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { q: "Can I self-host VectorFlow?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { q: "What is the pricing model?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
              ].map((faq, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-lg p-6 hover:bg-white/[0.04] transition-colors cursor-pointer flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-medium mb-2">{faq.q}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-500 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-black -z-10" />
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">Ready to build?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button className="h-14 px-10 text-lg">Start for free</Button>
              <Button variant="secondary" className="h-14 px-10 text-lg">Contact Sales</Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">No credit card required. Free community tier available.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between mb-16">
            <div className="w-1/3">
              <div className="flex items-center space-x-2 text-white font-semibold text-lg mb-6">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Workflow className="w-3 h-3 text-white" />
                </div>
                <span>VectorFlow</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
            </div>

            <div className="flex space-x-24">
              <div>
                <h4 className="text-white font-medium mb-4">Product</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex justify-between items-center text-sm text-gray-600">
            <p>© 2026 VectorFlow Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">GitHub</a>
              <a href="#" className="hover:text-gray-300">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
`;

export const vectorFlowSlide: WebsiteShowcaseSlide = {
  id: "vectorflow",
  title: "VectorFlow",
  posterSrc: "/website-showcases/posters/vectorflow.jpg",
  html: createBundledReactPreviewDocument({
    title: "VectorFlow",
    bundleSrc: "/website-showcases/generated/vectorflow.js",
    stylesheetHrefs: [showcaseReactStylesheetHref],
  }),
  preloadPriority: 30,
};
