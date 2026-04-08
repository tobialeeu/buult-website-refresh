import { showcaseReactStylesheetHref } from "./assetManifest.js";
import type { WebsiteShowcaseSlide } from "./index";
import { createBundledReactPreviewDocument } from "./reactPreview";

const vectorFlowSource = String.raw`import React from "react";
import {
  Workflow,
  Zap,
  Database,
  ArrowRight,
  Shield,
  Terminal,
  Command,
  GitBranch,
  CheckCircle2,
  ChevronDown,
  Layers,
  Cpu,
  Box,
  LayoutGrid,
  Activity,
  Hexagon,
  Triangle,
  Circle,
  Cloud,
} from "lucide-react";

const Button = ({ children, variant = "primary", className = "", icon: Icon }) => {
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.08)]",
    secondary: "border border-white/10 bg-white/5 text-white hover:bg-white/10",
    ghost: "text-gray-400 hover:bg-white/5 hover:text-white",
  };

  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
      {Icon ? <Icon className="ml-2 h-4 w-4" /> : null}
    </button>
  );
};

const NodeItem = ({ icon: Icon, title, desc, status }) => (
  <div className="rounded-3xl border border-white/10 bg-[#111113] p-4 shadow-2xl">
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
          <Icon className="h-4 w-4 text-gray-200" />
        </div>
        <span className="text-sm font-medium text-gray-100">{title}</span>
      </div>
      <div
        className={
          "h-2.5 w-2.5 rounded-full " +
          (status === "active"
            ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.55)]"
            : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.55)]")
        }
      />
    </div>
    <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
  </div>
);

const HeroMockup = () => (
  <div className="relative mx-auto mt-12 w-full max-w-5xl">
    <div className="absolute inset-x-10 top-0 h-40 rounded-full bg-indigo-500/20 blur-[100px]" />
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0C] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500 sm:flex">
          <Terminal className="h-3 w-3" />
          production / user-routing
        </div>
        <div className="text-xs font-medium text-gray-500">Live canvas</div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="border-b border-white/10 bg-white/[0.02] p-4 md:w-56 md:border-b-0 md:border-r">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500">Explorer</div>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-1">
            {["Pipelines", "Models", "Connections", "Deployments", "Settings"].map((item, index) => (
              <div
                key={item}
                className={
                  "rounded-2xl px-3 py-2 text-sm " +
                  (index === 0
                    ? "bg-indigo-500/10 text-indigo-300"
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200")
                }
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid flex-1 gap-4 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] p-4 sm:p-6 lg:grid-cols-3">
          <NodeItem
            icon={Zap}
            title="Webhook Trigger"
            desc="Listens for incoming user payloads from the API gateway."
            status="active"
          />
          <NodeItem
            icon={Cpu}
            title="LLM Routing"
            desc="Classifies intent and routes requests to specialized flows."
            status="active"
          />
          <NodeItem
            icon={Database}
            title="Cache Lookup"
            desc="Checks Redis for identical recent queries before generation."
            status="pending"
          />
          <div className="hidden items-center justify-center lg:flex">
            <ArrowRight className="h-6 w-6 text-white/30" />
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <ArrowRight className="h-6 w-6 text-white/30" />
          </div>
          <NodeItem
            icon={Cloud}
            title="Response Sync"
            desc="Formats output and streams a final response back to the client."
            status="active"
          />
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, body }) => (
  <div className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-colors duration-300 hover:bg-white/[0.07] sm:p-8">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 to-purple-500/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{body}</p>
    </div>
  </div>
);

const companies = [
  { icon: Triangle, name: "AcmeCorp" },
  { icon: Hexagon, name: "Polymath" },
  { icon: Circle, name: "Orbital" },
  { icon: Box, name: "BlockScale" },
  { icon: Activity, name: "Pulsar" },
];

const features = [
  { icon: GitBranch, title: "Visual Orchestration", body: "Build workflows from reusable primitives with a graph that stays readable on day one and day one hundred." },
  { icon: Terminal, title: "Code-first Approach", body: "Drop into code whenever needed without losing the clarity of a shared visual system." },
  { icon: Shield, title: "Enterprise Security", body: "Keep data boundaries explicit with permissions, audit trails and controlled execution zones." },
  { icon: Activity, title: "Real-time Analytics", body: "Watch flow latency, model output quality and infra spend in one operating layer." },
  { icon: Command, title: "CLI & API Access", body: "Ship from the command line, the dashboard or your own tooling without duplicating setup." },
  { icon: Layers, title: "Version Control", body: "Promote pipeline revisions safely with environments, approvals and rollback points." },
];

const faqs = [
  "How does VectorFlow integrate with my existing infrastructure?",
  "Is my data secure and compliant?",
  "Can I self-host VectorFlow?",
  "What is the pricing model?",
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-gray-200 selection:bg-indigo-500/30">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                <Workflow className="h-4 w-4" />
              </div>
              <span className="text-lg font-semibold tracking-tight">VectorFlow</span>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <Button variant="ghost" className="px-4 py-2 text-xs">Sign In</Button>
              <Button className="px-4 py-2 text-xs">Start</Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-400 sm:gap-6">
            <a href="#" className="transition-colors hover:text-white">Products</a>
            <a href="#" className="transition-colors hover:text-white">Solutions</a>
            <a href="#" className="transition-colors hover:text-white">Developers</a>
            <a href="#" className="transition-colors hover:text-white">Pricing</a>
            <a href="#" className="transition-colors hover:text-white">Docs</a>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="relative">
        <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
          <div className="absolute left-1/2 top-0 h-64 w-[70vw] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.05]">
              Automate the
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                impossible workflows.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Orchestrate agents, infra and business logic in a single system built for teams that need speed without visual chaos.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto" icon={ArrowRight}>Start Building</Button>
              <Button variant="secondary" className="w-full sm:w-auto">Read the Docs</Button>
            </div>

            <HeroMockup />
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/[0.02] py-10">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-6 text-[11px] font-semibold tracking-[0.3em] text-gray-500">TRUSTED BY INNOVATIVE ENGINEERING TEAMS</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-lg font-bold text-white/50 grayscale sm:text-xl">
              {companies.map(({ icon: Icon, name }) => (
                <div key={name} className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Intelligence at scale.</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                VectorFlow gives platform, product and applied AI teams a shared execution layer instead of a pile of disconnected scripts.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} body={feature.body} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-gradient-to-b from-[#0a0a0c] to-black px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-400">
                <Cpu className="h-4 w-4" />
                NATIVE INTEGRATION
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Connect your entire stack in milliseconds.</h2>
              <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
                Plug into edge workers, internal APIs and model providers without rebuilding the orchestration layer every time your architecture evolves.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Seamless deployment to edge networks",
                  "Type-safe API auto-generation",
                  "Zero-downtime schema migrations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button variant="secondary" icon={ArrowRight}>View Integrations</Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-[100px]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D10] shadow-2xl">
                <div className="flex items-center gap-4 border-b border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium">
                  <span className="border-b border-indigo-500 pb-2 text-white">vector.config.ts</span>
                  <span className="text-gray-500">schema.prisma</span>
                  <span className="text-gray-500">package.json</span>
                </div>
                <div className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-gray-300">
                  <div><span className="text-purple-400">import</span> {"{"} Pipeline, Agent {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">'@vectorflow/core'</span>;</div>
                  <div className="mt-4"><span className="text-purple-400">export const</span> router = <span className="text-blue-400">new</span> Pipeline({"{"}</div>
                  <div>&nbsp;&nbsp;name: <span className="text-green-400">'main-router'</span>,</div>
                  <div>&nbsp;&nbsp;triggers: ['webhook', 'schedule'],</div>
                  <div>&nbsp;&nbsp;models: ['gpt-4-turbo', 'claude-3'],</div>
                  <div>&nbsp;&nbsp;execute: <span className="text-blue-400">async</span> (ctx) =&gt; {"{"}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// classify payload and dispatch</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> intent = <span className="text-blue-400">await</span> ctx.agent.classify(ctx.payload);</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> ctx.route(intent);</div>
                  <div>&nbsp;&nbsp;{"}"}</div>
                  <div>{"}"});</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for every team.</h2>
              <p className="mt-4 text-base text-gray-400">From platform engineering to product operations, every group works from the same graph.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0C] p-8">
                <div className="absolute right-0 top-0 p-8 opacity-10 transition-opacity group-hover:opacity-20">
                  <Terminal className="h-24 w-24" />
                </div>
                <h3 className="relative z-10 text-2xl font-semibold text-white">For Engineering</h3>
                <p className="relative z-10 mt-4 max-w-md text-gray-400">
                  Design robust automations, wire infra concerns into the graph and keep execution behavior inspectable.
                </p>
                <a href="#" className="relative z-10 mt-6 inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300">
                  Explore Engineering Docs <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0C] p-8">
                <div className="absolute right-0 top-0 p-8 opacity-10 transition-opacity group-hover:opacity-20">
                  <LayoutGrid className="h-24 w-24" />
                </div>
                <h3 className="relative z-10 text-2xl font-semibold text-white">For Product</h3>
                <p className="relative z-10 mt-4 max-w-md text-gray-400">
                  Launch new workflows faster, map user journeys visually and keep stakeholders close to the live system.
                </p>
                <a href="#" className="relative z-10 mt-6 inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300">
                  See Product Workflows <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/5 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="absolute inset-0 bg-indigo-900/10" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Triangle className="mx-auto mb-6 h-12 w-12 text-white/20" />
            <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              "VectorFlow completely changed how we ship AI features. What used to take our platform team three weeks to architect now takes a single afternoon."
            </h2>
            <div className="mt-8 flex flex-col items-center">
              <img
                src="/website-showcases/assets/vectorflow/sarah-jenkins-generated.jpg"
                alt="Sarah Jenkins"
                className="mb-4 h-14 w-14 rounded-full border border-white/20 object-cover object-center"
              />
              <div className="font-medium text-white">Sarah Jenkins</div>
              <div className="text-sm text-gray-500">CTO at AcmeCorp</div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Frequently asked questions</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div key={faq} className="flex items-start justify-between gap-4 rounded-3xl border border-white/8 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04] sm:p-6">
                  <div>
                    <h4 className="font-medium text-white">{faq}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-indigo-900/20 to-black" />
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Ready to build?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-xl">
              Start with a free workspace, connect your first service and ship a production-ready automation graph this week.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto">Start for free</Button>
              <Button variant="secondary" className="w-full sm:w-auto">Contact Sales</Button>
            </div>
            <p className="mt-5 text-sm text-gray-500">No credit card required. Free community tier available.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050505] px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_2fr]">
            <div>
              <div className="mb-6 flex items-center gap-3 text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                  <Workflow className="h-4 w-4" />
                </div>
                <span className="text-lg font-semibold">VectorFlow</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                Build orchestration systems for AI products, platform operations and the workflows that connect them.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h4 className="mb-4 font-medium text-white">Product</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="transition-colors hover:text-white">Features</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Integrations</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Pricing</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Changelog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-medium text-white">Resources</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="transition-colors hover:text-white">Documentation</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">API Reference</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Community</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-medium text-white">Company</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="transition-colors hover:text-white">About</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Careers</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Legal</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
            <p>© 2026 VectorFlow Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <a href="#" className="transition-colors hover:text-gray-300">Twitter</a>
              <a href="#" className="transition-colors hover:text-gray-300">GitHub</a>
              <a href="#" className="transition-colors hover:text-gray-300">Discord</a>
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
