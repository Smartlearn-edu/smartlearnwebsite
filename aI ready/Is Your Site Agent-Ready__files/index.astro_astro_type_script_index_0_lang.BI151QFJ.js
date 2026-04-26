const Ze="modulepreload",ze=function(e){return"/"+e},ke={},Ye=function(t,s,o){let n=Promise.resolve();if(s&&s.length>0){let a=function(i){return Promise.all(i.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=c?.nonce||c?.getAttribute("nonce");n=a(s.map(i=>{if(i=ze(i),i in ke)return;ke[i]=!0;const d=i.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${p}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":Ze,d||(l.as="script"),l.crossOrigin="",l.href=i,h&&l.setAttribute("nonce",h),document.head.appendChild(l),d)return new Promise((y,u)=>{l.addEventListener("load",y),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return n.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return t().catch(r)})};function we(){try{const e=localStorage.getItem("theme");if(e==="light"||e==="dark"||e==="system")return e}catch{}return"system"}function $e(e){const t=document.documentElement;e==="system"?t.removeAttribute("data-theme"):t.setAttribute("data-theme",e),t.setAttribute("data-theme-pref",e);try{localStorage.setItem("theme",e)}catch{}}function Je(){const e=document.getElementById("theme-toggle");if(!e)return;const t=["light","dark","system"],s={light:"Light mode — click for dark",dark:"Dark mode — click for system",system:"System mode — click for light"};function o(r){e.setAttribute("aria-label",s[r]),e.setAttribute("title",s[r])}e.addEventListener("click",()=>{const r=we(),a=(t.indexOf(r)+1)%t.length,c=t[a];$e(c),o(c)});const n=we();$e(n),o(n)}function Xe(){const e=document.documentElement.getAttribute("data-theme");return e==="dark"||e==="light"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}Je();const he=["robotsTxt","sitemap","linkHeaders","markdownNegotiation","robotsTxtAiRules","contentSignals","webBotAuth","apiCatalog","oauthDiscovery","oauthProtectedResource","mcpServerCard","a2aAgentCard","agentSkills","webMcp","x402","mpp","ucp","acp","ap2"],Ue=new Set(["a2aAgentCard","ap2"]),me=he.filter(e=>!Ue.has(e)),q={all:{name:"All Checks",description:"Run all default checks — best for comprehensive audits",checks:new Set(me)},content:{name:"Content Site",description:"Blog, docs, or marketing site — focuses on discoverability and content accessibility",checks:new Set(["robotsTxt","sitemap","linkHeaders","markdownNegotiation","robotsTxtAiRules","contentSignals"])},apiApp:{name:"API / Application",description:"API service or web app — all checks except commerce",checks:new Set(["robotsTxt","sitemap","linkHeaders","markdownNegotiation","robotsTxtAiRules","contentSignals","webBotAuth","apiCatalog","oauthDiscovery","oauthProtectedResource","mcpServerCard","agentSkills","webMcp"])}},Qe={robotsTxt:"robots.txt",sitemap:"Sitemap",linkHeaders:"Link headers",markdownNegotiation:"Markdown Negotiation",robotsTxtAiRules:"AI bot rules in robots.txt",contentSignals:"Content Signals in robots.txt",webBotAuth:"Web Bot Auth request signing",oauthDiscovery:"OAuth / OIDC discovery",oauthProtectedResource:"OAuth Protected Resource",mcpServerCard:"MCP Server Card",a2aAgentCard:"A2A Agent Card",agentSkills:"Agent Skills index",apiCatalog:"API Catalog",webMcp:"WebMCP",ucp:"Universal Commerce Protocol",x402:"x402 Protocol",mpp:"MPP (Machine Payment Protocol)",acp:"ACP (Agentic Commerce Protocol)"},k=`${window.location.origin}/.well-known/agent-skills`,et={robotsTxt:{description:"Publish /robots.txt with clear crawl rules",specUrls:["https://www.rfc-editor.org/rfc/rfc9309"],prompt:"Create /robots.txt at the site root with explicit User-agent directives and allow/disallow rules for key paths. Ensure it is plain text and returns 200.",skillUrl:`${k}/robots-txt/SKILL.md`},robotsTxtAiRules:{description:"Add User-agent rules for AI crawlers like GPTBot, Claude-Web, and others",specUrls:["https://www.rfc-editor.org/rfc/rfc9309","https://developers.cloudflare.com/ai-crawl-control/"],prompt:"Add explicit User-agent entries for AI crawlers (GPTBot, OAI-SearchBot, Claude-Web, Google-Extended) with allow/disallow rules that match your policy.",skillUrl:`${k}/ai-rules/SKILL.md`},contentSignals:{description:"Declare AI content usage preferences with Content Signals in robots.txt",specUrls:["https://contentsignals.org/","https://datatracker.ietf.org/doc/draft-romm-aipref-contentsignals/"],prompt:`Add Content-Signal directives to your robots.txt declaring preferences for ai-train, search, and ai-input. For example:
Content-Signal: ai-train=no, search=yes, ai-input=no`,skillUrl:`${k}/content-signals/SKILL.md`},sitemap:{description:"Publish a sitemap and reference it from robots.txt",specUrls:["https://www.sitemaps.org/protocol.html"],prompt:"Generate /sitemap.xml listing canonical URLs, keep it updated on publish, and reference it from /robots.txt.",skillUrl:`${k}/sitemap/SKILL.md`},markdownNegotiation:{description:"Return HTML responses as markdown when agents request it",specUrls:["https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/"],prompt:"Enable Markdown for Agents so requests with Accept: text/markdown return a markdown version of your HTML response while HTML stays the default for browsers. Confirm the response uses Content-Type: text/markdown (and x-markdown-tokens if available).",skillUrl:`${k}/markdown-negotiation/SKILL.md`},webBotAuth:{description:"Let your site identify itself as a bot with Web Bot Auth",specUrls:["https://datatracker.ietf.org/wg/webbotauth/about/","https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/"],prompt:"Publish a JWKS at /.well-known/http-message-signatures-directory so your site can identify itself when it sends bot or agent requests. Receiving sites can use it to verify those signed requests.",skillUrl:`${k}/web-bot-auth/SKILL.md`},oauthDiscovery:{description:"Publish OAuth/OIDC discovery metadata so agents can authenticate with your APIs",specUrls:["http://openid.net/specs/openid-connect-discovery-1_0.html","https://www.rfc-editor.org/rfc/rfc8414"],prompt:"If your site has protected APIs, publish /.well-known/openid-configuration (for OpenID Connect) or /.well-known/oauth-authorization-server (for pure OAuth 2.0) with your issuer, authorization_endpoint, token_endpoint, jwks_uri, and grant_types_supported. This allows AI agents to programmatically discover how to authenticate.",skillUrl:`${k}/oauth-discovery/SKILL.md`},oauthProtectedResource:{description:"Publish OAuth Protected Resource Metadata so agents can discover how to authenticate",specUrls:["https://www.rfc-editor.org/rfc/rfc9728"],prompt:"Publish /.well-known/oauth-protected-resource with your resource identifier, authorization_servers (list of OAuth/OIDC issuer URLs that can issue tokens for this resource), and scopes_supported. This tells agents how to obtain access tokens for your protected APIs.",skillUrl:`${k}/oauth-protected-resource/SKILL.md`},mcpServerCard:{description:"Publish an MCP Server Card for agent discovery",specUrls:["https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127"],prompt:"Serve an MCP Server Card (SEP-1649) at /.well-known/mcp/server-card.json with serverInfo (name, version), transport endpoint, and capabilities. The schema is being standardized at https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127",skillUrl:`${k}/mcp-server-card/SKILL.md`},a2aAgentCard:{description:"Publish an A2A Agent Card for agent-to-agent discovery",specUrls:["https://a2a-protocol.org/latest/specification/","https://a2a-protocol.org/latest/topics/agent-discovery/"],prompt:"Serve an A2A Agent Card (JSON) at /.well-known/agent-card.json describing your agent. Include name, version, description, supportedInterfaces (with service URL and transport protocol), capabilities, and skills (each with id, name, description). This enables other AI agents to discover and interact with your agent via the A2A protocol.",skillUrl:`${k}/a2a-agent-card/SKILL.md`},agentSkills:{description:"Publish an agent skills discovery index",specUrls:["https://github.com/cloudflare/agent-skills-discovery-rfc","https://agentskills.io/"],prompt:"Publish a skills discovery index at /.well-known/agent-skills/index.json (per the Agent Skills Discovery RFC v0.2.0). Include a $schema field, and a skills array where each entry has name, type, description, url, and a sha256 digest.",skillUrl:`${k}/agent-skills/SKILL.md`},apiCatalog:{description:"Publish an API catalog for automated API discovery (RFC 9727)",specUrls:["https://www.rfc-editor.org/rfc/rfc9727","https://www.rfc-editor.org/rfc/rfc9264"],prompt:'Create /.well-known/api-catalog returning application/linkset+json with a "linkset" array. Each entry should include an "anchor" URL for the API and link relations for service-desc (OpenAPI spec), service-doc (documentation), and status (health endpoint). See RFC 9727 Appendix A for examples.',skillUrl:`${k}/api-catalog/SKILL.md`},ucp:{description:"Enable content payments via Universal Commerce Protocol",specUrls:["https://ucp.dev/specification/overview/"],prompt:"Serve /.well-known/ucp with protocol version, services, capabilities, and endpoints, and ensure spec URLs and schemas are reachable.",skillUrl:`${k}/ucp/SKILL.md`},x402:{description:"Support x402 protocol for agent-native HTTP payments",specUrls:["https://x402.org","https://github.com/coinbase/x402","https://docs.x402.org"],prompt:"Add x402 payment middleware to your API routes to enable AI agents to pay for access via HTTP. Use @x402/express, @x402/hono, or @x402/next middleware with a facilitator URL and wallet address. Protected routes will return HTTP 402 with payment requirements that agents can fulfill automatically.",skillUrl:`${k}/x402/SKILL.md`},mpp:{description:"Support MPP (Machine Payment Protocol) for agent-native HTTP payments",specUrls:["https://mpp.dev","https://paymentauth.org/draft-payment-discovery-00.txt"],prompt:"Publish an OpenAPI document at /openapi.json with x-payment-info extensions on payable operations. Each operation should declare intent (charge or session), method (tempo, stripe, lightning, card), amount, and currency. Use the MPP SDK (mppx for TypeScript, pympp for Python) with framework middleware for Hono, Express, Next.js, or Elysia to add MPP payment handling.",skillUrl:`${k}/mpp/SKILL.md`},acp:{description:"Publish ACP discovery metadata so agents can discover your commerce API",specUrls:["https://agenticcommerce.dev","https://github.com/agentic-commerce-protocol/agentic-commerce-protocol/blob/main/rfcs/rfc.discovery.md"],prompt:'Serve /.well-known/acp.json at the origin root with protocol.name "acp", protocol.version, api_base_url, supported transports, and capabilities.services so agents can discover your ACP implementation without creating a checkout session first.',skillUrl:`${k}/acp/SKILL.md`},webMcp:{description:"Support WebMCP to expose site tools to AI agents via the browser",specUrls:["https://webmachinelearning.github.io/webmcp/","https://developer.chrome.com/blog/webmcp-epp"],prompt:"Implement the WebMCP API by calling navigator.modelContext.provideContext() with tool definitions that expose your site's key actions to AI agents. Each tool needs a name, description, inputSchema (JSON Schema), and an execute callback function.",skillUrl:`${k}/webmcp/SKILL.md`},linkHeaders:{description:"Include Link response headers for agent discovery (RFC 8288)",specUrls:["https://www.rfc-editor.org/rfc/rfc8288","https://www.rfc-editor.org/rfc/rfc9727#section-3"],prompt:'Add Link response headers to your homepage that point agents to useful resources. For example: Link: </.well-known/api-catalog>; rel="api-catalog" to advertise your API catalog, or Link: </docs/api>; rel="service-doc" for API documentation. See RFC 8288 for the Link header format and IANA Link Relations for registered relation types.',skillUrl:`${k}/link-headers/SKILL.md`}},ae=document.getElementById("scan-form"),B=document.getElementById("url-input"),ge=document.getElementById("scan-button"),tt=ge.querySelector(".button-text"),st=ge.querySelector(".button-loading"),ie=document.getElementById("form-error"),E=document.getElementById("results"),F=document.getElementById("results-timestamp"),Me=document.getElementById("score-card-container"),Be=document.getElementById("check-categories"),nt=document.getElementById("scan-another"),K=document.getElementById("info-cards"),te=document.getElementById("copy-all-fab"),j=document.getElementById("customize-toggle"),ce=document.getElementById("customize-panel"),Oe=document.getElementById("profile-pills"),xe=document.getElementById("profile-description"),le=document.getElementById("checks-grid");let De=!1,Ce=!1,I="all",x=null;function Se(e){De=e,ge.disabled=e,B.disabled=e,tt.hidden=e,st.hidden=!e}function de(e){ie.textContent=e,ie.hidden=!1}function ot(){ie.hidden=!0}function _e(){return x?[...x]:[...q[I].checks]}function pe(){const e=x||q[I].checks;le.querySelectorAll('input[name="check"]').forEach(t=>{t.checked=e.has(t.value)})}function J(){Oe.querySelectorAll(".profile-pill").forEach(e=>{const t=e.dataset.profile,s=!x&&t===I;e.classList.toggle("profile-pill--active",s),e.setAttribute("aria-checked",String(s))}),x?xe.textContent=`Custom selection — ${x.size} of ${me.length} checks enabled`:xe.textContent=q[I].description}j.addEventListener("click",()=>{const e=j.getAttribute("aria-expanded")==="true";j.setAttribute("aria-expanded",String(!e)),ce.hidden=e});Oe.addEventListener("click",e=>{const t=e.target.closest(".profile-pill");if(!t)return;const s=t.dataset.profile;!s||!(s in q)||(I=s,x=null,pe(),J(),je())});le.addEventListener("change",e=>{if(e.target.name!=="check")return;const s=new Set;le.querySelectorAll('input[name="check"]:checked').forEach(n=>{s.add(n.value)});let o=null;for(const[n,r]of Object.entries(q))if(s.size===r.checks.size&&[...s].every(a=>r.checks.has(a))){o=n;break}o?(I=o,x=null):x=s,J(),je()});function qe(e){const t=new Date(e);return`Last scanned ${t.toLocaleDateString()} at ${t.toLocaleTimeString()}`}function rt(e){return Ue.has(e)?(x||q[I].checks).has(e):!0}function Ne(e){return Object.fromEntries(Object.entries(e).filter(([t])=>{const s=he.find(o=>o===t);return s?rt(s):!0}))}function X(e){return e.total===0&&e.checkCount>0}function at(e,t){const s=[{name:"discoverability",checks:e.discoverability,countInScore:!0},{name:"contentAccessibility",checks:e.contentAccessibility,countInScore:!0},{name:"botAccessControl",checks:e.botAccessControl,countInScore:!0},{name:"discovery",checks:e.discovery,countInScore:!0},{name:"commerce",checks:e.commerce,countInScore:!1}];let o=0,n=0;const r=s.map(({name:c,checks:h,countInScore:i})=>{const d=Ne(h),p=Object.values(d),l=p.filter(g=>g.status==="pass").length,y=p.filter(g=>g.status==="neutral").length,u=p.length-y;return i&&(o+=l,n+=u),{name:c,score:u>0?Math.round(l/u*100):0,passed:l,total:u,checkCount:p.length}}),a=n>0?Math.round(o/n*100):0;return{categories:r,overall:a}}function W(e){return e>=90?"var(--color-score-good)":e>=50?"var(--color-score-average)":"var(--color-score-poor)"}const fe={discoverability:"Discoverability",contentAccessibility:"Content",botAccessControl:"Bot Access Control",discovery:"API, Auth, MCP & Skill Discovery",commerce:"Commerce"},Ae={0:"var(--color-level-0)",1:"var(--color-level-1)",2:"var(--color-level-2)",3:"var(--color-level-3)",4:"var(--color-level-4)",5:"var(--color-level-5)"};function it(e,t){const l=180-12*(t.length-1),y=t.reduce((b,$)=>b+$.checkCount,0),u=b=>b*Math.PI/180,g=b=>({x:120+95*Math.cos(u(b)),y:125-95*Math.sin(u(b))}),v=(b,$)=>{if(Math.abs(b-$)<.5)return"";const T=g(b),L=g($),R=Math.abs(b-$)>180?1:0,U=b>$?1:0;return`M ${T.x.toFixed(2)} ${T.y.toFixed(2)} A 95 95 0 ${R} ${U} ${L.x.toFixed(2)} ${L.y.toFixed(2)}`},w=v(180,0),m=180*(e/100),C=v(180,180-m),S=W(e),O=`
      <g class="gauge-combined">
        <path 
          class="combined-bg"
          d="${w}"
          fill="none"
          stroke="var(--color-gauge-bg)"
          stroke-width="16"
          stroke-linecap="round"
        />
        ${C?`
        <path 
          class="combined-fill"
          d="${C}"
          fill="none"
          stroke="${S}"
          stroke-width="16"
          stroke-linecap="round"
        />
        `:""}
      </g>
    `;let A=180;const H=`<g class="gauge-segmented">${t.map((b,$)=>{const T=y>0?b.checkCount/y:1/t.length,L=l*T,R=X(b),U=A,Z=A-L,D=v(U,Z);let _;if(R)_=`
          <g class="segment-group segment-group--skipped" data-index="${$}">
            <path 
              class="segment-bg"
              d="${D}"
              fill="none"
              stroke="var(--color-gauge-bg)"
              stroke-width="16"
              stroke-linecap="round"
              stroke-dasharray="6 4"
            />
          </g>
        `;else{const be=b.score/100,We=L*be,Ke=U-We,Ve=W(b.score),ye=be>.02?v(U,Ke):"";_=`
          <g class="segment-group" data-index="${$}">
            <path 
              class="segment-bg"
              d="${D}"
              fill="none"
              stroke="var(--color-gauge-bg)"
              stroke-width="16"
              stroke-linecap="round"
            />
            ${ye?`
            <path 
              class="segment-fill"
              data-category="${b.name}"
              data-score="${b.score}"
              d="${ye}"
              fill="none"
              stroke="${Ve}"
              stroke-width="16"
              stroke-linecap="round"
            />
            `:""}
          </g>
        `}return A=Z-12,_}).join("")}</g>`,N=W(e),ne=t.map((b,$)=>{const T=fe[b.name]||b.name,L=X(b),R=L?`${T} (not checked)`:T;return`<span class="gauge-category-label${L?" gauge-category-label--skipped":""}" data-index="${$}">${R}</span>`}).join("");return`
      <div class="segmented-gauge" data-highlight="">
        <svg 
          width="240" 
          height="140" 
          viewBox="0 0 240 140" 
          class="gauge-svg"
          role="img"
          aria-label="Overall score: ${e} out of 100"
        >
          ${O}
          ${H}
        </svg>
        <div class="gauge-score-container">
          <span class="gauge-score" style="color: ${N};">${e}</span>
          <div class="gauge-category-labels">${ne}</div>
        </div>
      </div>
    `}function Le(e,t,s,o){const r=(t-6)/2,a=2*Math.PI*r,c=a*(1-e/100),h=W(e),i=t/2;return`
      <div class="circle-gauge-item${s?"":" circle-gauge-item--inline"}">
        <div class="circle-gauge" style="width: ${t}px; height: ${t}px;">
          <svg width="${t}" height="${t}" viewBox="0 0 ${t} ${t}" class="circle-gauge-svg" aria-hidden="true">
            <circle
              class="circle-gauge-track"
              cx="${i}"
              cy="${i}"
              r="${r}"
              fill="none"
              stroke="var(--color-gauge-bg)"
              stroke-width="6"
            />
            <circle
              class="circle-gauge-fill"
              cx="${i}"
              cy="${i}"
              r="${r}"
              fill="none"
              stroke="${h}"
              stroke-width="6"
              stroke-linecap="round"
              stroke-dasharray="${a.toFixed(2)}"
              stroke-dashoffset="${c.toFixed(2)}"
              style="--gauge-circumference: ${a.toFixed(2)}; --gauge-dash-offset: ${c.toFixed(2)};"
            />
            <text
              class="circle-gauge-score"
              x="${i}"
              y="${i}"
              text-anchor="middle"
              dominant-baseline="central"
              fill="${h}"
              font-size="1.25rem"
              font-weight="700"
              font-family="var(--font-sans)"
            >${e}</text>
          </svg>
        </div>
        ${s?`<span class="circle-gauge-label">${f(s)}</span>`:""}
        ${o?`<span class="circle-gauge-sublabel">${f(o)}</span>`:""}
      </div>
    `}function Ee(e,t){const o=(e-6)/2,n=e/2;return`
      <div class="circle-gauge-item">
        <div class="circle-gauge" style="width: ${e}px; height: ${e}px;">
          <svg width="${e}" height="${e}" viewBox="0 0 ${e} ${e}" class="circle-gauge-svg" aria-hidden="true">
            <circle
              class="circle-gauge-track"
              cx="${n}"
              cy="${n}"
              r="${o}"
              fill="none"
              stroke="var(--color-gauge-bg)"
              stroke-width="6"
              stroke-dasharray="4 4"
            />
            <text
              class="circle-gauge-score"
              x="${n}"
              y="${n}"
              text-anchor="middle"
              dominant-baseline="central"
              fill="var(--color-neutral)"
              font-size="1.25rem"
              font-weight="700"
              font-family="var(--font-sans)"
            >—</text>
          </svg>
        </div>
        <span class="circle-gauge-label">${f(t)}</span>
        <span class="circle-gauge-sublabel">Not checked</span>
      </div>
    `}function ct(e,t,s){const o=Ae[e.level]||Ae[0],n=t.categories.filter(u=>u.name!=="commerce"),r=n.map((u,g)=>{const v=fe[u.name]||u.name;if(X(u))return`
          <button class="category-gauge-btn category-gauge-btn--skipped" data-index="${g}" type="button" aria-label="${f(v)}: Not checked">
            ${Ee(72,v)}
          </button>
        `;const m=`${u.passed}/${u.total}`;return`
        <button class="category-gauge-btn" data-index="${g}" type="button" aria-label="${v}: ${u.passed}/${u.total}">
          ${Le(u.score,72,v,m)}
        </button>
      `}).join(""),a=t.categories.find(u=>u.name==="commerce"),c=a&&X(a),h=a&&a.total>0?`
      <button class="category-gauge-btn category-gauge-btn--optional" data-index="${n.length}" type="button" aria-label="Commerce (Optional): ${a.passed}/${a.total}">
        ${Le(a.score,72,"Commerce","Optional")}
      </button>
    `:c?`
      <button class="category-gauge-btn category-gauge-btn--skipped" data-index="${n.length}" type="button" aria-label="Commerce: Not checked">
        ${Ee(72,"Commerce")}
      </button>
    `:"";let i="";if(e.redirectedFrom)i=`<p class="origin-note">Redirected from ${f(e.redirectedFrom)}. Scanned origin: <strong>${f(e.url)}</strong></p>`;else if(s){const u=s.replace(/\/+$/,"").toLowerCase(),g=e.url.toLowerCase();u!==g&&u!==g+"/"&&(i=`<p class="origin-note">Checks run at the domain level. Scanned origin: <strong>${f(e.url)}</strong></p>`)}const d=_e().length,p=me.length,y=d<p?`
        <div class="partial-scan-note">
          <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"/>
          </svg>
          Partial scan — ${d} of ${p} checks enabled
        </div>
    `:"";return`
      <div class="score-card">
        <button class="share-card-btn" type="button" aria-label="Share score card" data-url="${f(e.url)}" data-level="${e.level}" data-level-name="${f(e.levelName)}">
          <svg class="share-card-icon" viewBox="0 0 256 256" fill="currentColor" width="16" height="16" aria-hidden="true">
            <path d="M176,160a39.89,39.89,0,0,0-28.62,12.09l-46.1-29.63a39.8,39.8,0,0,0,0-28.92l46.1-29.63a40,40,0,1,0-8.66-13.45l-46.1,29.63a40,40,0,1,0,0,55.82l46.1,29.63A40,40,0,1,0,176,160Zm0-128a24,24,0,1,1-24,24A24,24,0,0,1,176,32ZM64,152a24,24,0,1,1,24-24A24,24,0,0,1,64,152Zm112,72a24,24,0,1,1,24-24A24,24,0,0,1,176,224Z"/>
          </svg>
          <svg class="share-card-spinner" viewBox="0 0 256 256" fill="currentColor" width="16" height="16" aria-hidden="true" style="display:none;">
            <path d="M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"/>
          </svg>
          <span class="share-card-label">Share</span>
        </button>
        <div class="score-header">
          <div class="url-display">
            <span class="url-label">Results for</span>
            <span class="url-value">${f(e.url)}</span>
            ${i}
          </div>
        </div>
        
        <div class="score-main">
          <div class="overall-score">
            ${it(t.overall,n)}
          </div>
          
          <div class="level-info">
            <div class="level-badge" style="background-color: ${o};">
              Level ${e.level}
            </div>
            <span class="level-name">${e.levelName}</span>
          </div>
        </div>
        
        ${y}
        
        <div class="category-gauges-row">
          ${r}
          ${h}
        </div>
      </div>
    `}function lt(e){const t={fetch:'<svg viewBox="0 0 256 256" fill="currentColor" width="14" height="14"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/></svg>',parse:'<svg viewBox="0 0 256 256" fill="currentColor" width="14" height="14"><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"/></svg>',validate:'<svg viewBox="0 0 256 256" fill="currentColor" width="14" height="14"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/></svg>',conclude:'<svg viewBox="0 0 256 256" fill="currentColor" width="14" height="14"><path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"/></svg>'};let s="";if(e.response){const h=e.response.status;s=`<span class="evidence-status-badge ${h<300?"evidence-status--2xx":h<400?"evidence-status--3xx":h<500?"evidence-status--4xx":"evidence-status--5xx"}">${h}</span>`}let o="";e.finding&&(o=`<div class="evidence-finding"><span class="evidence-dot ${e.finding.outcome==="positive"?"evidence-dot--positive":e.finding.outcome==="negative"?"evidence-dot--negative":"evidence-dot--neutral"}"></span><span class="evidence-finding-text">${f(e.finding.summary)}</span></div>`);const n=e.request?.headers&&Object.keys(e.request.headers).length>0;let r="";n&&(r=`<div class="evidence-section-label">Request</div><table class="evidence-headers">${Object.entries(e.request.headers).map(([i,d])=>`<tr><td class="evidence-header-key">${f(i.toLowerCase())}</td><td class="evidence-header-val">${f(d)}</td></tr>`).join("")}</table>`);let a="";if(e.response?.headers&&Object.keys(e.response.headers).length>0){const h=Object.entries(e.response.headers).map(([d,p])=>`<tr><td class="evidence-header-key">${f(d)}</td><td class="evidence-header-val">${f(p)}</td></tr>`).join("");a=`${n?'<div class="evidence-section-label">Response</div>':""}<table class="evidence-headers">${h}</table>`}let c="";return e.response?.bodyPreview&&(c=`<pre class="evidence-body-preview">${f(e.response.bodyPreview)}</pre>`),`
      <div class="evidence-step evidence-step--${e.action}">
        <div class="evidence-step-header">
          <span class="evidence-step-icon">${t[e.action]||""}</span>
          <span class="evidence-step-label">${f(e.label)}</span>
          ${s}
        </div>
        ${r}
        ${a}
        ${c}
        ${o}
      </div>
    `}function dt(e,t){if(!e||e.length===0)return'<p class="evidence-empty">No audit data available</p>';const s=e.map(lt).join(""),o=typeof t=="number"?`<div class="evidence-timing">Completed in ${t}ms</div>`:"";return`<div class="evidence-timeline">${s}</div>${o}`}function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function pt(e){try{const t=new URL(e),s=t.pathname,o=s.match(/\/rfc\/rfc(\d+)/);if(o)return`RFC ${o[1]}`;if(t.hostname==="datatracker.ietf.org")return s.includes("/doc/draft-")?"IETF Draft":s.includes("/wg/")?"IETF Working Group":"IETF";if(t.hostname==="github.com"){if(s.startsWith("/modelcontextprotocol/")){const c=s.match(/\/pull\/(\d+)/);if(c)return`SEP-${c[1]}`}const n=s.match(/\/([^/]+\/[^/]+)\/pull\/(\d+)/);if(n)return`${n[1]} PR #${n[2]}`;const r=s.match(/\/[^/]+\/[^/]+\/(?:blob|tree)\/[^/]+\/(.+)/);if(r){const c=r[1].split("/");return c[c.length-1].replace(/\.[^.]+$/,"")}const a=s.match(/\/([^/]+\/[^/]+)/);if(a)return a[1]}return t.hostname==="developers.cloudflare.com"?"Cloudflare Docs":t.hostname==="openid.net"?"OpenID Spec":t.hostname.replace("www.","")}catch{return e}}function ut(e,t,s){const o=Qe[t]||t,n=et[t],r=`${e}.${t}`,a=s.status==="pass",c=s.status==="neutral",h=c&&s.message?.toLowerCase().includes("excluded by scan configuration"),i=!a&&!c,d=h?'Skipped (<a href="#scan-form" class="check-skip-link" data-open-customize-scan>customize scan</a>)':"";let p,l,y,u;a?(p="var(--color-pass)",l='<svg viewBox="0 0 256 256" fill="#fff" aria-hidden="true"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"/></svg>',y="check-item--pass",u="Pass"):c?(p="var(--color-neutral)",l='<svg viewBox="0 0 256 256" fill="#fff" aria-hidden="true"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"/></svg>',y="check-item--neutral",u=h?"Skipped":"Not applicable"):(p="var(--color-fail)",l='<svg viewBox="0 0 256 256" fill="#fff" aria-hidden="true"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"/></svg>',y="check-item--fail",u="Fail");const g=[];a?(n?.description&&g.push(`Goal: ${n.description}`),s.message&&g.push(`Result: ${s.message}`),n?.specUrls?.length&&g.push(`Docs: ${n.specUrls.join(", ")}`)):h?(n?.description&&g.push(`Goal: ${n.description}`),n?.specUrls?.length&&g.push(`Docs: ${n.specUrls.join(", ")}`)):(n?.description&&g.push(`Goal: ${n.description}`),s.message&&g.push(`${c?"Note":"Issue"}: ${s.message}`),n?.prompt&&g.push(`Fix: ${n.prompt}`),n?.skillUrl&&g.push(`Skill: ${n.skillUrl}`),n?.specUrls?.length&&g.push(`Docs: ${n.specUrls.join(", ")}`));const v=g.join(`

`),w=v.length>0,m=!h&&s.evidence&&s.evidence.length>0,C=h?`<div class="check-skip-meta"><span class="check-skip-note">${d}</span></div>`:"";let S="";if(w){const A=!a&&!h,G='<svg class="copy-button-icon" viewBox="0 0 256 256" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"/></svg>',H='<svg viewBox="0 0 256 256" fill="currentColor" width="12" height="12" aria-hidden="true"><path d="M224,104a8,8,0,0,1-16,0V59.31l-66.34,66.35a8,8,0,0,1-11.32-11.32L196.69,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"/></svg>',N=[];if(n?.description&&N.push(`<div class="check-detail-row"><dt class="check-detail-label">Goal</dt><dd class="check-detail-value">${f(n.description)}</dd></div>`),s.message){const D=a?"Result":c?"Note":"Issue",_=i?" check-detail-value--fail":c?" check-detail-value--neutral":a?" check-detail-value--pass":"";N.push(`<div class="check-detail-row"><dt class="check-detail-label">${D}</dt><dd class="check-detail-value${_}">${f(s.message)}</dd></div>`)}const ne=N.length>0?`<dl class="check-detail-list">${N.join("")}</dl>`:"";let b="";A&&n?.prompt&&(b=`
          <div class="check-fix-section">
            <span class="check-detail-label">How to implement</span>
            <div class="check-fix-code">${f(n.prompt)}</div>
          </div>
        `);const $=[];if(n?.specUrls?.length)for(const D of n.specUrls){const _=pt(D);$.push(`<a class="check-link" href="${f(D)}" target="_blank" rel="noopener noreferrer">${f(_)} ${H}</a>`)}n?.skillUrl&&$.push(`<a class="check-link" href="${f(n.skillUrl)}" target="_blank" rel="noopener noreferrer">Skill ${H}</a>`);const T=$.length>0?`<div class="check-links-section"><span class="check-detail-label">Resources</span><div class="check-links">${$.join("")}</div></div>`:"",L=A?`<pre class="check-prompt-text" hidden>${f(v)}</pre>`:"",R=A?`<button class="copy-button" type="button" data-tooltip="Paste into your coding agent to fix this check">${G}<span class="copy-button-label" aria-live="polite">Copy prompt</span></button>`:"",U=m?'<button class="evidence-trigger" type="button" aria-label="View audit details">Audit details <svg viewBox="0 0 256 256" fill="currentColor" width="14" height="14"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/></svg></button>':"",Z=R||U?`<div class="check-details-footer">${R}${U}</div>`:"";S=`
        <div class="check-details"${A?" data-prompt":""}>
          ${L}
          ${ne}
          ${b}
          ${T}
          ${Z}
        </div>
      `}let O="";return m&&(O=`
        <div class="check-card-back">
          <div class="check-card-back-header">
            <div class="check-item-info">
              <span class="check-icon" style="background-color: ${p};">${l}</span>
              <span class="check-name">${o}</span>
            </div>
          </div>
          <div class="check-card-back-body">
            ${dt(s.evidence,s.durationMs)}
          </div>
          <button class="evidence-back-trigger" type="button" aria-label="Back to results"><svg viewBox="0 0 256 256" fill="currentColor" width="14" height="14"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/></svg> Back</button>
        </div>
      `),`
      <div class="check-card-container" data-check-container>
        <div class="check-card-inner">
          <div class="check-card-front">
            <div class="check-item ${y} ${w?"check-item--expandable":""} ${w&&i?"check-item--expanded":""}" data-check-item data-key="${r}" data-status="${s.status}" ${w?"data-expandable":""}>
              <div class="check-item-header" ${w?'role="button" tabindex="0"':""}>
                <div class="check-item-info">
                  <span class="check-icon" style="background-color: ${p};" role="img" aria-label="${u}">
                    ${l}
                  </span>
                  <span class="check-name">${o}</span>
                </div>
                ${C}
                ${w?'<span class="check-expand-icon"><svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg></span>':""}
              </div>
              ${S}
            </div>
          </div>
          ${O}
        </div>
      </div>
    `}function ht(e,t,s,o,n){const r=fe[e]||e,a={pass:0,neutral:1,fail:2,unableToCheck:2},c=Object.entries(Ne(t)).sort(([,p],[,l])=>(a[p.status]??2)-(a[l.status]??2)),h=W(s.score),i=e==="commerce"?' <span class="category-optional">Optional</span>':"";let d="";return e==="commerce"&&(d=n?'<p class="commerce-note">Commerce protocols are emerging standards. These results are shown for informational purposes and do not affect the score.</p>':'<p class="commerce-note">No e-commerce signals were detected on this site. These checks are shown for informational purposes and do not affect the score.</p>'),`
      <section class="category-section" id="category-${o}" data-category="${e}">
        <div class="category-header">
          <div class="category-title-row">
            <h2 class="category-title">${r}${i}</h2>
          </div>
          <span class="category-score" style="color: ${h};">${s.passed}/${s.total}</span>
        </div>
        ${d}
        <div class="checks-list">
          ${c.map(([p,l])=>ut(e,p,l)).join("")}
        </div>
      </section>
    `}function mt(e,t){F.textContent=qe(e.scannedAt),F.hidden=!1;const s=e.isCommerce===!0,o=at(e.checks),a=[{key:"discoverability",checks:e.checks.discoverability},{key:"contentAccessibility",checks:e.checks.contentAccessibility},{key:"botAccessControl",checks:e.checks.botAccessControl},{key:"discovery",checks:e.checks.discovery},{key:"commerce",checks:e.checks.commerce}].map((i,d)=>{const p=o.categories.find(l=>l.name===i.key);return ht(i.key,i.checks,p,d,s)}).join("");Me.innerHTML=ct(e,o,t),Be.innerHTML=a,Ce||(E.addEventListener("keydown",i=>{if(i.key!=="Enter"&&i.key!==" ")return;const d=i.target;if(!(d instanceof Element))return;const p=d.closest(".check-item-header");if(p){const l=p.closest("[data-expandable]");l instanceof HTMLElement&&(i.preventDefault(),l.classList.toggle("check-item--expanded"))}}),E.addEventListener("click",async i=>{const d=i.target;if(!(d instanceof Element))return;if(d.closest(".copy-button")){const l=d.closest(".copy-button"),y=l.closest("[data-prompt]");if(!(y instanceof HTMLElement))return;const u=y.querySelector("pre");if(!(u instanceof HTMLElement))return;const g=u.textContent?.trim();if(!g)return;const v=l.querySelector(".copy-button-label"),w=l.querySelector(".copy-button-icon"),m=v?.textContent??"Copy prompt";try{await navigator.clipboard.writeText(g),l.classList.add("copy-button--copied"),v&&(v.textContent="Copied!"),w&&(w.style.display="none"),setTimeout(()=>{l.classList.remove("copy-button--copied"),v&&(v.textContent=m),w&&(w.style.display="")},2e3)}catch{v&&(v.textContent="Copy failed"),setTimeout(()=>{v&&(v.textContent=m)},1500)}return}if(d.closest(".share-card-btn")){const l=d.closest(".share-card-btn");bt(l);return}if(d.closest("[data-open-customize-scan]")){if(i.preventDefault(),!j||!ce||!ae)return;j.setAttribute("aria-expanded","true"),ce.hidden=!1,ae.scrollIntoView({behavior:"smooth",block:"start"}),j.focus({preventScroll:!0});return}if(d.closest(".evidence-trigger")){const l=d.closest("[data-check-container]");l&&c(l,!0);return}if(d.closest(".evidence-back-trigger")){const l=d.closest("[data-check-container]");l&&c(l,!1);return}const p=d.closest(".check-item-header");if(p){const l=p.closest("[data-expandable]");l instanceof HTMLElement&&l.classList.toggle("check-item--expanded")}}),Ce=!0);function c(i,d){const p=i.querySelector(".check-card-inner");p&&(d?p.classList.add("flipped"):p.classList.remove("flipped"))}E.hidden=!1,K.hidden=!0,E.scrollIntoView({behavior:"smooth",block:"start"});const h=E.querySelectorAll(".check-item--fail:not(.check-item--pass) [data-prompt] pre").length;te.hidden=h===0,h>0?(Y.textContent=String(h),Y.hidden=!1):Y.hidden=!0,gt()}function Ie(e){if(e===null)return;const t=document.getElementById(`category-${e}`);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}function gt(){const e=document.querySelector(".segmented-gauge");if(!e)return;const t=e.querySelectorAll(".segment-group"),s=document.querySelectorAll(".category-gauge-btn");t.forEach(o=>{o.addEventListener("mouseenter",()=>{const n=o.getAttribute("data-index");e.setAttribute("data-highlight",n||""),s.forEach(r=>{r.getAttribute("data-index")===n?r.classList.add("category-gauge-btn--active"):r.classList.remove("category-gauge-btn--active")})}),o.addEventListener("mouseleave",()=>{e.setAttribute("data-highlight",""),s.forEach(n=>n.classList.remove("category-gauge-btn--active"))}),o.addEventListener("click",()=>{const n=o.getAttribute("data-index");Ie(n)})}),s.forEach(o=>{const n=o.getAttribute("data-index");o.addEventListener("mouseenter",()=>{e.setAttribute("data-highlight",n||"")}),o.addEventListener("mouseleave",()=>{e.setAttribute("data-highlight","")}),o.addEventListener("click",()=>{Ie(n)})})}function ft(e){const t=e.httpStatus;return t?t===429?"The site is rate-limiting requests. This is not an agent-readiness issue. Try scanning again later.":t===403?"The site is blocking our scanner. This may be due to WAF rules, bot detection, or IP-based restrictions.":t>=500?"The site appears to be experiencing server errors. This is not an agent-readiness issue. Try scanning again later.":"The site returned an error. This is not an agent-readiness issue. Try scanning again later.":"We couldn't establish a connection to this site. Check that the URL is correct and the site is online."}function vt(e){const{siteError:t}=e;F.textContent=qe(e.scannedAt),F.hidden=!1;let s;try{s=new URL(e.url).hostname}catch{s=e.url}let o;t.httpStatus?o=`${f(s)} returned <strong>${t.httpStatus} ${f(t.statusText)}</strong>`:o=`Could not connect to ${f(s)}`;let n="";t.bodyPreview&&(n=`
        <div class="site-error-preview">
          <pre class="site-error-preview-text">${f(t.bodyPreview)}</pre>
        </div>
      `);let r="";t.retryAfter&&(r=`
        <div class="site-error-retry-after">
          The server suggests retrying after: <strong>${f(t.retryAfter)}</strong>
        </div>
      `);const a=ft(t);Be.innerHTML=`
      <div class="site-error-card">
        <div class="site-error-header">
          <span class="site-error-icon">
            <svg viewBox="0 0 256 256" fill="currentColor" width="24" height="24">
              <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"/>
            </svg>
          </span>
          <div class="site-error-titles">
            <h2 class="site-error-headline">We couldn't scan this site</h2>
            <p class="site-error-subheadline">${o}</p>
          </div>
        </div>
        ${n}
        ${r}
        <p class="site-error-explanation">${f(a)}</p>
        <button class="site-error-retry-btn" type="button" id="retry-scan-btn"><svg viewBox="0 0 256 256" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"/></svg> Try Again</button>
      </div>
    `;const c=document.getElementById("retry-scan-btn");c&&c.addEventListener("click",()=>{Q(e.url)}),Me.innerHTML="",E.hidden=!1,K.hidden=!0,E.scrollIntoView({behavior:"smooth",block:"start"})}let z=!1;async function bt(e){if(z)return;z=!0;const t=document.querySelector(".score-card");if(!t){z=!1;return}const s='<svg xmlns="http://www.w3.org/2000/svg" width="62" height="29" fill="none" viewBox="-1 -1 62 29" aria-hidden="true"><g><path stroke="#ff4801" d="M47.927 11.725c-.2 0-.397.007-.594.014a.271.271 0 0 0-.094.022.33.33 0 0 0-.214.229l-.846 2.924c-.365 1.257-.23 2.418.383 3.27.563.789 1.498 1.251 2.634 1.305l4.589.276a.41.41 0 0 1 .326.179.44.44 0 0 1 .046.39.58.58 0 0 1-.498.384l-4.768.276c-2.59.118-5.377 2.21-6.355 4.761l-.344.9a.253.253 0 0 0 .225.343H58.84a.435.435 0 0 0 .422-.315 11.69 11.69 0 0 0 .437-3.185c0-6.5-5.266-11.766-11.764-11.766" vectorEffect="non-scaling-stroke"/><path stroke="#ff4801" d="m40.76 26.62.304-1.057c.365-1.258.229-2.418-.384-3.271-.562-.788-1.497-1.25-2.633-1.304l-21.527-.276a.426.426 0 0 1-.34-.18.44.44 0 0 1-.047-.39.581.581 0 0 1 .502-.383l21.727-.276c2.58-.118 5.367-2.21 6.345-4.761l1.24-3.24a.814.814 0 0 0 .035-.43C44.572 4.733 38.925 0 32.172 0c-6.223 0-11.503 4.016-13.399 9.598a6.344 6.344 0 0 0-4.467-1.236 6.367 6.367 0 0 0-5.517 7.91C3.913 16.417 0 20.412 0 25.32c0 .445.032.882.097 1.308a.418.418 0 0 0 .415.362H40.268a.517.517 0 0 0 .491-.376" vectorEffect="non-scaling-stroke"/></g></svg>',o=e.querySelector(".share-card-icon"),n=e.querySelector(".share-card-spinner"),r=e.querySelector(".share-card-label");o&&(o.style.display="none"),n&&(n.style.display=""),r&&(r.textContent="Capturing…"),e.classList.add("share-card-btn--loading");try{const{domToBlob:a}=await Ye(async()=>{const{domToBlob:m}=await import("./index.DgVX0TKj.js");return{domToBlob:m}},[]),c=Xe()==="dark",h=c?"#1a1a2e":"#ffffff",i=c?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)",d=c?"#fffbf5":"#1a1a2e",p=c?"rgba(255,251,245,0.5)":"rgba(26,26,46,0.4)",y=Math.max(t.offsetWidth,700),u=await a(t,{scale:2,backgroundColor:h,width:y,height:(()=>{const m=Math.max(Math.min(t.offsetWidth/y,1),.8),C=Math.round(t.offsetHeight*m),S=150+Math.round((1-m)*100);return Math.max(C+S,660)})(),onCloneNode:m=>{if(!(m instanceof HTMLElement))return;const C=document.createElement("div");C.style.cssText=`display:flex;align-items:center;justify-content:center;gap:12px;padding-bottom:24px;margin-bottom:8px;border-bottom:1px solid ${i}`,C.innerHTML=`${s}<span style="font-size:1.5rem;font-weight:700;letter-spacing:-0.02em;color:${d}">Is Your Site Agent-Ready?</span>`,m.prepend(C);const S=m.querySelector(".share-card-btn");S&&(S.style.display="none");const O=m.querySelector(".gauge-combined"),A=m.querySelector(".gauge-segmented");O&&(O.style.opacity="1"),A&&(A.style.opacity="0");const G=document.createElement("style");G.textContent=`
            .score-card { width: ${y}px !important; padding: 2rem !important; border-radius: 0 !important; border: none !important; overflow: visible !important; }
            .score-header { width: 100% !important; text-align: center !important; }
            .url-display { width: 100% !important; align-items: center !important; }
            .url-value { font-size: 1.125rem !important; }
            .score-main { width: 100% !important; align-items: center !important; }
            .overall-score { width: 100% !important; justify-content: center !important; }
            .level-info { width: 100% !important; align-items: center !important; }
            .level-badge { white-space: nowrap !important; }
            .level-name { font-size: 1.25rem !important; white-space: nowrap !important; }
            .category-gauges-row { width: 100% !important; justify-content: center !important; gap: 2rem !important; border-top: none !important; }
            .category-gauge-btn { padding: 0.5rem !important; }
            .circle-gauge-label { max-width: 120px !important; }
          `,m.prepend(G);const H=document.createElement("div");H.style.cssText=`display:flex;justify-content:center;padding-top:16px;margin-top:8px;border-top:1px solid ${i}`,H.innerHTML=`<span style="font-size:0.8125rem;font-weight:500;color:${p};letter-spacing:0.01em">isitagentready.com</span>`,m.appendChild(H)}}),g=e.dataset.url||"",v=`agent-readiness-${g.replace(/[^a-z0-9]/gi,"-")}.png`,w=new File([u],v,{type:"image/png"});if(navigator.canShare?.({files:[w]})){const m={files:[w],title:"Agent Readiness Scanner"};if(window.matchMedia("(pointer: coarse)").matches){const C=e.dataset.level||"",S=e.dataset.levelName||"";m.text=`${g} scored Level ${C} (${S}) on Cloudflare's Agent Readiness Scanner`,m.url=window.location.href}await navigator.share(m),r&&(r.textContent="Shared!")}else try{await navigator.clipboard.write([new ClipboardItem({"image/png":u})]),r&&(r.textContent="Copied!")}catch{const m=document.createElement("a");m.href=URL.createObjectURL(u),m.download=v,m.click(),URL.revokeObjectURL(m.href),r&&(r.textContent="Downloaded!")}setTimeout(()=>{r&&(r.textContent="Share")},2e3)}catch(a){if(a instanceof DOMException&&a.name==="AbortError"){r&&(r.textContent="Share");return}r&&(r.textContent="Failed"),setTimeout(()=>{r&&(r.textContent="Share")},2e3)}finally{o&&(o.style.display=""),n&&(n.style.display="none"),e.classList.remove("share-card-btn--loading"),z=!1}}async function Q(e){ot(),E.hidden=!0,Se(!0);try{const t=_e();if(t.length===0){de("Select at least one check");return}const o=await fetch("/api/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,enabledChecks:t})}),n=await o.json();if(!o.ok)throw new Error(n.error||"Scan failed");n.siteError?vt(n):mt(n,e)}catch(t){const s=t instanceof Error?t.message:"An error occurred";de(s)}finally{Se(!1)}}function ue(e){const t=e.trim();let s=t,o=t;try{const n=/^https?:\/\//i.test(t)?t:`https://${t}`,r=new URL(n);s=r.toString(),o=r.hostname}catch{s=t,o=t}return{scanUrl:s,pathSegment:o}}function ee(e){const t=`/${encodeURIComponent(e)}`,s=new URLSearchParams;x?s.set("checks",[...x].join(",")):I!=="all"&&s.set("profile",I);const o=s.toString();window.history.replaceState({},"",o?`${t}?${o}`:t)}function yt(){window.history.replaceState({},"","/")}function je(){const e=window.location.pathname.replace(/^\/+/,"");e&&ee(decodeURIComponent(e))}ae.addEventListener("submit",e=>{if(e.preventDefault(),De)return;const t=B.value.trim();if(!t){de("Please enter a URL");return}/^https?:\/\//i.test(t)||(B.value=`https://${t}`);const{scanUrl:s,pathSegment:o}=ue(B.value);ee(o),Q(s)});nt.addEventListener("click",()=>{E.hidden=!0,te.hidden=!0,Y.hidden=!0,K.hidden=!1,B.value="",B.focus(),F.textContent="",F.hidden=!0,yt(),P.hidden||se(),window.scrollTo({top:0,behavior:"smooth"})});const V=document.getElementById("fix-sheet-backdrop"),P=document.getElementById("fix-sheet"),Fe=document.getElementById("fix-sheet-close"),Ge=document.getElementById("fix-sheet-prompt"),M=document.getElementById("fix-sheet-copy"),kt=document.getElementById("fix-sheet-count"),Y=document.getElementById("fab-count");function wt(){const e=E.querySelectorAll(".check-item--fail:not(.check-item--pass) [data-prompt] pre"),t=[];return e.forEach(s=>{const o=s.textContent?.trim();o&&t.push(o)}),{prompts:t,combined:t.join(`

---

`)}}function $t(){const{prompts:e,combined:t}=wt();e.length!==0&&(Ge.textContent=t,kt.textContent=`${e.length} issue${e.length===1?"":"s"} found`,V.hidden=!1,P.hidden=!1,document.body.style.overflow="hidden",requestAnimationFrame(()=>{V.classList.add("fix-sheet-visible"),P.classList.add("fix-sheet-visible"),M.focus()}))}let oe=!1;function se(){if(P.hidden||oe)return;oe=!0,V.classList.remove("fix-sheet-visible"),P.classList.remove("fix-sheet-visible"),document.body.style.overflow="";const e=()=>{V.hidden=!0,P.hidden=!0,oe=!1,te.focus()},t=setTimeout(e,350);P.addEventListener("transitionend",function s(){clearTimeout(t),e(),P.removeEventListener("transitionend",s)})}te.addEventListener("click",$t);Fe.addEventListener("click",se);V.addEventListener("click",se);document.addEventListener("keydown",e=>{if(!P.hidden){if(e.key==="Escape"){se();return}if(e.key==="Tab"){const t=[Fe,M],s=t[0],o=t[t.length-1];e.shiftKey&&document.activeElement===s?(e.preventDefault(),o.focus()):!e.shiftKey&&document.activeElement===o&&(e.preventDefault(),s.focus())}}});M.addEventListener("click",async()=>{const e=Ge.textContent?.trim()??"";if(!e)return;const t=M.querySelector(".fix-sheet-copy-label"),s=M.querySelector(".fix-sheet-copy-icon"),o=M.querySelector(".fix-sheet-check-icon");try{await navigator.clipboard.writeText(e),M.classList.add("fix-sheet-copied"),s&&(s.style.display="none"),o&&(o.style.display="block"),t&&(t.textContent="Copied!"),setTimeout(()=>{M.classList.remove("fix-sheet-copied"),s&&(s.style.display=""),o&&(o.style.display="none"),t&&(t.textContent="Copy all instructions")},2500)}catch{t&&(t.textContent="Copy failed"),setTimeout(()=>{t&&(t.textContent="Copy all instructions")},1500)}});const ve=new URLSearchParams(window.location.search),Te=ve.get("checks"),re=ve.get("profile");if(Te){const e=Te.split(",").filter(t=>he.includes(t));e.length>0&&(x=new Set(e),pe(),J())}else re&&re in q&&(I=re,x=null,pe(),J());const Pe=window.location.pathname.replace(/^\/+/,"");if(Pe){const e=decodeURIComponent(Pe),{scanUrl:t,pathSegment:s}=ue(e);B.value=t,ee(s),K.hidden=!0,Q(t)}else{const e=ve.get("url");if(e){const t=decodeURIComponent(e),{scanUrl:s,pathSegment:o}=ue(t);B.value=s,ee(o),K.hidden=!0,Q(s)}}document.querySelectorAll(".faq-header").forEach(e=>{const t=e.nextElementSibling;t.style.height="0px",e.addEventListener("click",()=>{const s=e.getAttribute("aria-expanded")==="true",o=t.querySelector(".faq-content-inner");s?(t.style.height=t.scrollHeight+"px",requestAnimationFrame(()=>{t.style.height="0px"})):(t.style.height=o.offsetHeight+"px",t.addEventListener("transitionend",function n(){e.getAttribute("aria-expanded")==="true"&&(t.style.height="auto"),t.removeEventListener("transitionend",n)})),e.setAttribute("aria-expanded",String(!s))})});const He=document.querySelector(".hero-title"),Re=document.querySelector(".header-title");He&&Re&&new IntersectionObserver(([t])=>{Re.classList.toggle("is-visible",!t.isIntersecting)},{threshold:0}).observe(He);
