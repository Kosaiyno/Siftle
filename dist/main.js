import"./chunks/chunk-ZUUPKAA6.js";var Be=[];var Ve="https://faucet.circle.com/",ut="siftle_backend_wallet_migration_notice",qe=null,N=()=>(qe||(qe=import("./chunks/arc-D5FHWX7S.js")),qe),R=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,ir=async()=>(await N()).connectArcWallet(),ne=async e=>(await N()).readArcUsdcBalance(e),lr=async(e,r,a,o)=>(await N()).payAiBriefingUnlock(e,r,a,o),dr=e=>{N().then(r=>r.resolveLocalTestMarketYes(e))},cr=async e=>(await N()).readArcMarketSnapshot(e);var Ut=async(e,r)=>(await N()).readArcMarketState(e,r),pr=async(e,r,a,o,s,n,i)=>(await N()).executeArcMarketOrder(e,r,a,o,s,n,i),ur=async(e,r,a,o,s)=>(await N()).executeArcOptionMarketOrder(e,r,a,o,s),Pt=()=>{N().then(e=>e.disconnectArcWallet())},mr=async(e,r)=>(await N()).claimArcMarketPayout(e,r),Ne=async()=>(await N()).getConnectedArcWallet(),fr=async()=>(await N()).validateArcSession(),gr=async e=>(await N()).subscribeArcWallet(e),hr=async()=>(await N()).triggerGatewayWarmup(),vr=["Sports"],br="https://siftle.onrender.com",yr=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let r=typeof window<"u"?window.location.hostname.toLowerCase():"";return r==="siftle.xyz"||r.endsWith(".siftle.xyz")||r.endsWith(".vercel.app")?br:""},kr=yr(),C=e=>`${kr}${e}`,Ct="siftle_theme",wr=()=>{try{return window.localStorage.getItem(Ct)==="light"?"light":"dark"}catch{return"dark"}},we=wr(),It="organic";function Sr(){try{let e=localStorage.getItem("siftle_traffic_source");if(!e){let r=new URLSearchParams(window.location.search),a=r.get("ref")||r.get("utm_source");if(a)a=a.trim().toLowerCase(),a==="twitter"&&(a="x"),a==="instagram"&&(a="ig"),a==="whatsapp"&&(a="wa"),a==="discord"&&(a="dc"),(a==="google_search"||a==="google-search")&&(a="google"),["x","ig","wa","dc","google","organic","briefing"].includes(a)?e=a:e=a.slice(0,20);else{let o=document.referrer;o&&(/twitter\.com|x\.com|t\.co/i.test(o)?e="x":/instagram\.com/i.test(o)?e="ig":/whatsapp\.com|wa\.me/i.test(o)?e="wa":/discord\.com|discordapp\.com/i.test(o)?e="dc":/google\.com|google\.co/i.test(o)&&(e="google"))}e||(e="organic"),localStorage.setItem("siftle_traffic_source",e)}It=e}catch(e){console.error("Failed to initialize traffic source:",e)}}Sr();function P(e,r,a){fetch(C("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e,source:It,storyUrl:r,headline:a})}).catch(o=>console.error("Failed to track event:",o))}var t={activeSurface:"feed",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:2,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{}};var G="global",Z=!1,ee=null,mt=!1,ft=!1,gt=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";gt&&localStorage.setItem("siftle_pending_referral_code",gt.trim().toUpperCase());var Et=20,I=Be,xr=(...e)=>{let r=new Map;return e.flat().forEach(a=>{a?.id&&r.set(a.id,{...r.get(a.id)||{},...a})}),Array.from(r.values())},Te=()=>xr(t.portfolioMarketPreviews,I,Be),$r=async()=>{t.loadingMarkets=!0,I.length===0&&(I=Be);try{let e=new AbortController,r=window.setTimeout(()=>e.abort(),3500),a=await fetch(C("/api/markets"),{signal:e.signal});if(window.clearTimeout(r),a.ok){let o=await a.json();Array.isArray(o)&&o.length>0&&(I=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Bt=async()=>{try{let e=await fetch(C("/api/portfolio/markets"));if(!e.ok)return;let r=await e.json();Array.isArray(r)&&(t.portfolioMarketPreviews=r.map(a=>({threadStoryId:0,updates:0,movement:0,evidence:[],...a})))}catch(e){console.warn(e)}},Dt="siftle.savedUrls",ie=new Set,rt=()=>{try{let e=localStorage.getItem(Dt)||"[]",r=JSON.parse(e);ie=new Set(r.filter(Boolean))}catch{ie=new Set}},Tr=()=>{try{localStorage.setItem(Dt,JSON.stringify(Array.from(ie)))}catch{}},Se=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!ie.has(e.sourceUrl)};rt();Se();var Qe=document.querySelector("#dateLabel"),le=document.querySelector("#categoryTabs"),w=document.querySelector("#storyList"),S=document.querySelector("#storyDetail"),Ye=document.querySelector("#menuButton"),Ge=document.querySelector("#menuPanel"),L=document.querySelector("#menuStatus"),j=document.querySelector("#archiveDateSelect"),ht=document.querySelector("#archiveStatus"),Mr=document.querySelector("#todayButton"),He=document.querySelector(".brief-hero"),Re=document.querySelector("#archiveControls"),Me=document.querySelector("[data-surface='markets']"),Ae=document.querySelector("[data-surface='feed']"),Le=document.querySelector("[data-surface='portfolio']"),oe=document.querySelector("#walletButton"),ye=document.querySelector("[data-theme-toggle]"),Ar=document.getElementById("guideToggleButton"),Nt=Array.from(document.querySelectorAll("[data-bottom-nav]")),Je,Lr=()=>{if(!ye)return;let r=`Switch to ${we==="light"?"dark":"light"} mode`;ye.setAttribute("aria-label",r),ye.title=r,ye.dataset.activeTheme=we},Ot=e=>{we=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(Ct,e)}catch{}Lr()};Ot(we);var D=()=>{if(oe){let e=oe.querySelector(".wallet-button-label");oe.classList.toggle("connected",!!t.walletAddress),oe.disabled=t.walletConnecting,oe.setAttribute("aria-label",t.walletAddress?`Wallet ${R(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),oe.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${R(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",D);ye?.addEventListener("click",()=>{Ot(we==="light"?"dark":"light")});Ar?.addEventListener("click",()=>{Ur()});var Ur=()=>{let e=document.createElement("div");e.className="guide-overlay",e.innerHTML=`
    <div class="guide-card">
      <button class="circle-auth-close" id="guideClose" type="button">&times;</button>
      <div class="circle-auth-logo">
        <img src="./assets/siftle-logo-small.png" alt="Siftle logo" />
        <h2 style="font-family: Outfit, sans-serif; font-weight: 700; letter-spacing: -0.02em;">Welcome to Siftle!</h2>
      </div>
      <p class="circle-auth-subtitle" style="margin-bottom: 24px; font-family: Inter, sans-serif; line-height: 1.5; font-size: 0.88rem;">Siftle is the home of latest football news with AI briefings. Here is how to get started in 3 simple steps:</p>
      
      <div class="guide-steps-list">
        <div class="guide-step-item">
          <span class="guide-step-num">1</span>
          <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
            <h4 class="guide-step-title">Sign In</h4>
            <p class="guide-step-desc">Tap <strong>"Sign in"</strong> in the top right, enter your email, and verify. We instantly generate a secure Web3 wallet for you.</p>
          </div>
        </div>
        
        <div class="guide-step-item">
          <span class="guide-step-num">2</span>
          <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
            <h4 class="guide-step-title">Get Free USDC</h4>
            <p class="guide-step-desc">We automatically fund your wallet with <strong>0.02 USDC</strong> upon sign-in so you can start reading immediately with no manual setup.</p>
          </div>
        </div>
        
        <div class="guide-step-item">
          <span class="guide-step-num">3</span>
          <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
            <h4 class="guide-step-title">Unlock AI Briefings</h4>
            <p class="guide-step-desc">Click <strong>"AI briefing"</strong> on any news card to unlock a quick AI summary of what happened, key points, and takeaways.</p>
          </div>
        </div>
      </div>
      
      <button id="guideStartBtn" class="circle-auth-btn" type="button" style="width: 100%; font-family: Outfit, sans-serif;">Get Started</button>
    </div>
  `,document.body.appendChild(e);let r=e.querySelector("#guideClose"),a=e.querySelector("#guideStartBtn"),o=()=>e.remove();r.addEventListener("click",o),a.addEventListener("click",o),e.addEventListener("click",s=>{s.target===e&&o()})},Pr=async e=>{let r=localStorage.getItem("siftle_pending_referral_code");if(r)try{let a=await fetch(C("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:r})}),o=await a.json().catch(()=>({}));a.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&y("Referral connected"))}catch(a){console.warn(a)}},xe=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(C(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),r=await e.json().catch(()=>({}));e.ok?t.referralData=r:t.referralError=r?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&F()}}},Ue=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,P("wallet_connect_start"),D();try{let e=await ir();if(e){P("wallet_connect_success"),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),t.walletBalance=await ne(e),await Pr(e),xe(),await z(),pe(!0).catch(a=>console.error("Failed to report leaderboard entry:",a));let r=localStorage.getItem(ut);r?(localStorage.removeItem(ut),y(r)):y("Connected to Arc Testnet"),window.location.hash="#portfolio",Ce()}}catch(e){P("wallet_connect_failed"),y(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,D()}}},y=e=>{let r=document.querySelector("#actionToast");r||(r=document.createElement("div"),r.id="actionToast",r.className="action-toast",r.setAttribute("role","status"),r.setAttribute("aria-live","polite"),document.body.appendChild(r)),r.textContent=e,r.classList.add("show"),Je&&window.clearTimeout(Je),Je=window.setTimeout(()=>{r?.classList.remove("show")},1700)};window.showActionToast=y;var Cr=(e,r,a,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
    <div class="success-modal-card">
      <div class="success-modal-close-btn" aria-label="Close modal">&times;</div>
      <div class="success-modal-icon-container">
        <svg class="success-modal-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="success-modal-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="success-modal-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
      <h3 class="success-modal-title">Transaction Confirmed</h3>
      <p class="success-modal-body">
        You have successfully <strong>${e==="buy"?"bought":"exited"}</strong> <strong>${r} USDC</strong> worth of <strong>${a}</strong> shares in:
      </p>
      <div class="success-modal-market-title">${o}</div>
      <button class="success-modal-action-btn" type="button">Awesome</button>
    </div>
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let n=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",n),s.querySelector(".success-modal-action-btn")?.addEventListener("click",n),s.addEventListener("click",i=>{i.target===s&&n()})},J=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},_t=e=>{let r=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(r)},Ir=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(!(t.activeCategory==="All"||e.category===t.activeCategory))return!1;let r=t.newsSearchQuery.trim().toLowerCase();return r?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(r):!0}),Oe=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,Er=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Br=(e,r=140)=>{let a=e.split(/\s+/).filter(Boolean);if(a.length<=r)return e;let s=a.slice(0,r).join(" "),n=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return n>s.length*.45?s.slice(0,n+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},vt=e=>{let r=String(e||"").trim();for(let a=0;a<2;a+=1){let o=r.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(r=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(r))break;try{let s=JSON.parse(r);if(typeof s.summary=="string"){r=s.summary.trim();continue}}catch{break}break}return r=r.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),Er(r)?"":Br(r)},de=(e,r)=>vt(r||"")||vt(e.summary)||e.headline,Dr=e=>{let a=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!a||!window.html2canvas)return;let o=document.createElement("div");o.className="briefing-export-staging";let s=a.cloneNode(!0);s.classList.add("briefing-export-surface"),o.appendChild(s),document.body.appendChild(o);let n=document.documentElement.dataset.theme==="light";window.html2canvas(s,{backgroundColor:n?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(i=>{let l=document.createElement("a");l.download="siftle-briefing.png",l.href=i.toDataURL("image/png"),l.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{o.remove()})};window.downloadBriefingCard=Dr;var Nr=e=>e.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),Or=(e,r)=>{let a="";if(r)try{a=decodeURIComponent(r)}catch{a=r}let o=window.location.origin,s=window.location.pathname,n=t.stories.find(c=>c.id===e||a&&c.sourceUrl===a),i=n?Nr(n.headline):e>0?`story-${e}`:"",l=e>0?`${o}/story/${i}?utm_source=briefing&url=${encodeURIComponent(n?.sourceUrl||a)}`:a?`${o}/api/redirect?url=${encodeURIComponent(a)}&source=briefing`:`${o}/story/briefing?utm_source=briefing`;navigator.clipboard.writeText(l).then(()=>{y("Shareable link copied to clipboard!")}).catch(()=>{y("Unable to copy link")})};window.copyBriefingLink=Or;var at=(e,r)=>{let a=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(a.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(r){let n=r.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${n}</h3>
    `}a[0].trim()&&(o+=`<p class="briefing-capture-intro">${a[0].trim()}</p>`);let s="";for(let n=1;n<a.length;n+=2){let i=a[n].trim().toUpperCase(),l=a[n+1]?a[n+1].trim():"";if(!l)continue;let c="";if(i==="KEY POINTS"){let p=l.split(/(?:•|\*|-)\s+/).map(d=>d.trim()).filter(Boolean);p.length>0?c=`<ul class="briefing-list">${p.map(d=>`<li>${d}</li>`).join("")}</ul>`:c=`<p class="briefing-text">${l}</p>`}else c=`<p class="briefing-text">${l}</p>`,i==="TAKEAWAY"&&(s=l);let u=i.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${u}-section">
        <h4 class="briefing-title">${i}</h4>
        ${c}
      </div>
    `}return o+="</div>",r&&(o+=`
      <div class="share-briefing-container">
        <button type="button" class="share-briefing-btn copy-link-btn" onclick="window.copyBriefingLink?.(${r.id}, '${encodeURIComponent(r.sourceUrl||"")}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          <span>Copy Link</span>
        </button>
        <button type="button" class="share-briefing-btn" onclick="window.downloadBriefingCard?.(event.currentTarget)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Download Card</span>
        </button>
      </div>
    `),o},Pe=e=>{let r=t.briefingStatusByUrl[e.sourceUrl]||"";return r?`<p class="briefing-status-note">${U(r)}</p>`:""},_r=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},ot=e=>`siftle_ai_briefing_unlock_${_r()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Ht=e=>localStorage.getItem(ot(e))||"",Hr=e=>{localStorage.removeItem(ot(e))},ce=e=>{let a=new URLSearchParams(window.location.search).get("url");return a&&a===e.sourceUrl?!0:!!Ht(e)},Rt=(e,r)=>({id:0,headline:r.headline,category:e.category,summary:r.summary,source:r.source,sourceUrl:r.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:r.date,accent:"slate",saved:ie.has(r.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Rr=e=>{let r=t.stories.find(s=>s.sourceUrl===e);if(r)return r;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=I.find(n=>n.id===t.selectedMarketId);if(s){let n=ze(s).evidence.find(i=>i.sourceUrl===e);if(n)return Rt(s,n)}}return null},st=(e,r)=>{let a=Vr(e,r);return a===null?null:a-Et*60*1e3},zt=(e,r)=>{let a=st(e,r);return a===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(a))},jt=(e,r)=>{let a=st(e,r);return a===null?null:Date.now()>=a?`Locked ${Et}m before kickoff`:null},zr=(e,r)=>{let a=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled,s=!!t.walletAddress;return`
    <div class="briefing-section">
      ${Pe(e)}
      ${r?`
          ${he()}
        `:`
          <p class="briefing-text">
            ${s?o?`Pay a <strong>${a}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${a}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`:"Sign in to access AI briefings."}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${s?o?"Unlock via Circle x402":"AI briefing":"Sign in and access AI briefing"}
          </button>
        `}
    </div>
  `},nt=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],it=e=>`
  <div class="briefing-section">
    ${Pe(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,Xe=async(e,r=!1)=>{if(!t.walletAddress){y("Please sign in to unlock this briefing."),Ue();return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!r)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",P("ai_unlock_attempt"),h();try{let a=await fetch(C("/api/summary/unlock-config")),o=await a.json();if(!a.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let s=Number(o.amountUsdc)||.05;try{let u=await fetch(C(`/api/summary/price?sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(u.ok){let p=await u.json();typeof p.priceUsdc=="number"&&(s=p.priceUsdc)}}catch(u){console.warn("Failed to retrieve autonomous price, falling back to default:",u.message)}let n=await lr(o.treasuryAddress,s,u=>{L&&(L.textContent=u),t.briefingStatusByUrl[e.sourceUrl]=u,h()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=`Briefing unlocked! Charged ${s} USDC (priced by Siftle AI Agent)`,h();let i=await fetch(C("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:n})}),l=await i.json();if(!i.ok||!l.unlockToken)throw new Error(l.error||"AI briefing failed");localStorage.setItem(ot(e),l.unlockToken),P("ai_unlock_success"),(Number(l?.bonus?.points)||0)>0&&pe(!1).catch(u=>console.error("Failed to refresh leaderboard bonus:",u)),await $e(e)}catch(a){P("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl];let o=a instanceof Error?a.message:String(a||""),s=o,n=o.toLowerCase();(n.includes("balance")||n.includes("exceeds balance")||n.includes("transfer amount exceeds"))&&(s="Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC."),y(s)}finally{t.unlockingSummaryUrl=null,h()}}},$e=async e=>{if(ce(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=de(e,e.ai_summary),P("view_summary"),L&&(L.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded");let a=new URLSearchParams(window.location.search).get("url");if(a&&a===e.sourceUrl){let o=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(o)||(sessionStorage.setItem(o,"true"),P("briefing_unlock",e.sourceUrl,e.headline))}h();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing...",h();try{let a=new URLSearchParams(window.location.search).get("url"),o=!!(a&&a===e.sourceUrl),s=await fetch(C("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Ht(e),isSharedLanding:o})});if(!s.ok){if(s.status===402){Hr(e),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",L&&(L.textContent="Unlock expired. Unlock again to continue."),h();return}throw new Error(`Summary request failed with ${s.status}`)}let n=await s.json();t.aiSummaries[e.sourceUrl]=de(e,n.summary),t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",L&&n.provider&&(L.textContent=n.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${n.provider}`);let l=new URLSearchParams(window.location.search).get("url");if(l&&l===e.sourceUrl){let c=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(c)||(sessionStorage.setItem(c,"true"),P("briefing_unlock",e.sourceUrl,e.headline))}}catch(r){console.warn(r),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",L&&(L.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,h()}}},Ze=(e,r=!1)=>{let a=t.stories.find(o=>o.id===e);if(a){if(t.feedScrollY=window.scrollY,t.selectedStoryId=a.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${a.id}`),h(),a.type==="tweet"){window.scrollTo({top:0,behavior:"smooth"});return}r&&!ce(a)?(t.walletAddress&&(t.unlockingSummaryUrl=a.sourceUrl),h(),Xe(a,!0)):ce(a)&&$e(a),window.scrollTo({top:0,behavior:"smooth"})}},jr=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),h(),Ft(e),window.scrollTo({top:0,behavior:"smooth"})},Fr=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.location.search?window.history.pushState({},"",window.location.pathname+"#feed"):window.history.pushState({},"","#feed"),h(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Ft=async e=>{try{let r=await fetch(C(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!r.ok)throw new Error(`Thread request failed with ${r.status}`);t.activeThread=await r.json(),L&&(L.textContent=`${t.activeThread?.count??0} related updates found`)}catch(r){console.warn(r),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),y("That timeline no longer has a verified past update"),L&&(L.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,h()}};function Ce(){let e=window.location.pathname.startsWith("/story/"),r=window.location.pathname.startsWith("/thread/");if(e||r){let o=window.location.pathname.split("/").pop()||"",s=e?`#story-${o}`:`#thread-${o}`;window.history.replaceState({},"",`${window.location.pathname}${window.location.search}${s}`)}if(window.location.hash==="#resolve-local-yes"){let o=I.find(s=>s.id==="siftle-local-test-2")||I.find(s=>s.timeframe==="Daily"&&K(s).startsWith("0x00000000000000000000000000000000000001"));if(o){dr(K(o)),na(o,"yes"),delete t.marketSnapshots[o.id],delete t.marketPositions[o.id],delete t.checkedMarketSnapshots[o.id],delete t.loadingMarketSnapshots[o.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),y("Local test market resolved YES"),z().then(()=>{pe(!0).catch(s=>console.error("Failed to report leaderboard entry:",s)),D(),F()});return}}let a=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||a){t.activeSurface="markets",t.selectedMarketId=a?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,h();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let o=window.location.hash.match(/^#story-(.+)$/),s=window.location.hash.match(/^#thread-(\d+)$/),i=new URLSearchParams(window.location.search).get("url"),l;if(i){let p=`siftle_ref_tracked_${encodeURIComponent(i)}`;if(!sessionStorage.getItem(p)){sessionStorage.setItem(p,"true");let d=t.stories.find(b=>b.sourceUrl===i);P("briefing_referral",i,d?.headline||"Archived Story")}if(l=t.stories.find(d=>d.sourceUrl===i),!l&&o){let d=i;t.loadingSummaryUrl!==d&&(t.loadingSummaryUrl=d,fetch(C(`/api/story?sourceUrl=${encodeURIComponent(d)}`)).then(b=>{if(!b.ok)throw new Error;return b.json()}).then(b=>{t.stories.some(g=>g.sourceUrl===b.sourceUrl)||(b.id=Math.max(9999,...t.stories.map(g=>g.id))+1,t.stories.push(b));let m=t.stories.find(g=>g.sourceUrl===b.sourceUrl);P("briefing_referral",i,m.headline),t.selectedStoryId=m.id,h(),$e(m)}).catch(b=>{console.warn("Failed to load historical story from backend:",b)}).finally(()=>{t.loadingSummaryUrl=null}))}}else if(o){let p=Number(o[1]);isNaN(p)||(l=t.stories.find(d=>d.id===p))}let c=s?t.stories.find(p=>p.id===Number(s[1])):void 0,u=t.selectedStoryId!==null||t.selectedThreadUrl!==null;l?(t.selectedStoryId=l.id,t.selectedThreadUrl=null,t.activeThread=null,h(),$e(l)):c?(t.selectedStoryId=null,t.selectedThreadUrl=c.sourceUrl,t.activeThread=null,h(),Ft(c)):i||(t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,h(),u&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"})));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h()}var et=e=>{ht&&(ht.textContent=e)},Wr=async(e=t.activeCategory,r=!1)=>{r||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Yt(),h());try{let a=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(C(a));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],Se(),t.hasLoadedFeed=!0,Qe&&(Qe.textContent=_t(s.date??t.activeArchiveDate)),L)if(t.activeArchiveDate)L.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=s.archive?.provider==="shelby"?"Shelby":"local archive";L.textContent=`Latest published feed loaded from ${n}`}et(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(a){console.warn(a),t.hasLoadedFeed||(t.stories=[]),Se(),L&&(L.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,h(),Ce()}},qr=async()=>{if(j)try{let e=await fetch(C("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let r=await e.json(),a=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(r.dates??[]).filter(o=>o.date!==a),j.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),j.value=t.activeArchiveDate??"",et(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),et("Archive unavailable")}},Ie=()=>{mt||(mt=!0,qr())},re=(e=t.activeCategory,r=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Wr(e,r)},Yr=()=>{ft||(ft=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&re(t.activeCategory,!0),Ie()},8e3))},Gr=e=>e==="All"?"For you":e==="Sports"?"Football":e,W=e=>e==="Sports"?"Football":e,tt=e=>/^@/.test(String(e.source||""))||/(?:^|\/)(?:x|twitter)\.com\//i.test(String(e.sourceUrl||"")),Wt=(e,r)=>{let a=e.trim();return a.length<=r?a:`${a.slice(0,Math.max(0,r-1)).trimEnd()}\u2026`},Jr=e=>e.replace(/^@/,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ").filter(Boolean),qt=e=>{let r=String(e.source||W(e.category)).trim(),a=Jr(r);if(a.length===0)return W(e.category);let o=a.filter((i,l)=>{let c=i.toLowerCase();return!(l>0&&["live","news","official"].includes(c))}),s=o.length>0?o:a,n="";for(let i of s){let l=n?`${n} ${i}`:i;if(l.length>18)break;n=l}return Wt(n||s[0],18)},bt=e=>{let r=String(e.headline||"").replace(/\s+/g," ").trim();if(!tt(e))return r;let a=r.replace(/https?:\/\/\S+/gi,"").replace(/\(Source:[^)]+\)\s*$/i,"").replace(/\s+/g," ").trim();if(/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(a))return`Latest from ${qt(e)}`;let o=a.replace(/^R to\s+@[^:]+:\s*/i,"").trim(),s=o.length>=24&&!/^(?:more here|watch more here)[:.!?]*$/i.test(o)?o:a||r;return Wt(s,150)},Yt=()=>{le&&(le.innerHTML=vr.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${Gr(e)}
        </button>
      `).join(""))},Gt=e=>(e.thread?.count??0)>=1,Kr=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Jt=(e=[])=>[...e].sort((r,a)=>{let o=new Date(r.publishedAt||0).getTime(),s=new Date(a.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),ze=e=>{let r=t.marketEvidenceOverrides[e.id],a={...e,evidence:e.evidence??[]};return r?{...a,...r,updates:r.evidence.length}:a},Vr=(e,r)=>{if(e.timeframe!=="Daily")return null;let a=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(a))return a;let o=r?.closesAtUnix??0;return o>0?o*1e3:null},Qr=(e,r)=>r===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,Xr=(e,r)=>({date:Qr(e,r),source:e.source,headline:e.headline,summary:de(e),impact:r===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Kt=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let r=await fetch(C(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!r.ok)return;let a=await r.json(),o=[a.current,...Jt(a.items??[])],s=o.filter((l,c,u)=>u.findIndex(p=>p.sourceUrl===l.sourceUrl)===c).map(Xr),i=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:a.topic||e.threadTopic,evidence:s,imageUrl:i||e.imageUrl})}catch(r){console.warn(r)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&h()}}},K=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",ae=e=>Array.isArray(e.options)?e.options.filter(r=>r?.id&&r?.label):[],te=e=>!!(e.optionMarket&&ae(e).length>1),Zr=e=>{let r=ae(e);return r.find(a=>a.id===t.marketTradeOptionId)||r[0]||null},H=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),U=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),lt=e=>`siftle_profile_username_${e.toLowerCase()}`,Vt=e=>e.trim().replace(/\s+/g," ").slice(0,15),fe=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=lt(t.walletAddress),r=localStorage.getItem(e),a=localStorage.getItem("siftle_profile_username");!r&&a&&(r=Vt(a),r&&localStorage.setItem(e,r),localStorage.removeItem("siftle_profile_username")),t.profileUsername=r||null,t.profileNotice=null},ea=e=>{if(!t.walletAddress)return;let r=lt(t.walletAddress),a=Vt(e);a?(localStorage.setItem(r,a),t.profileUsername=a):(localStorage.removeItem(r),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},ta=()=>{let e="one-hour-test-market",r=[];for(let a=0;a<localStorage.length;a++){let o=localStorage.key(a);o&&o.includes(e)&&r.push(o)}r.forEach(a=>localStorage.removeItem(a))},Qt=(e,r,a)=>{if(e==="sell"){let o=r==="yes"?a?.yesSharesUsdc??0:a?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:2,max:2,fallback:2}},Ee=(e,r,a,o)=>{let{min:s,max:n,fallback:i}=Qt(r,a,o);return Number.isFinite(e)?Math.min(n,Math.max(s,e)):i},Xt=(e,r,a,o,s)=>{if(!e||!Number.isFinite(a)||a<=0)return 0;let n=r==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,i=e.yesSharesUsdc,l=e.noSharesUsdc;if(o==="sell")return Math.min(a,n);let c=(r==="yes"?i:l)+a,u=i+l+a;return c<=0||u<=0?a:(n+a)/c*u},Zt=(e,r)=>{let a=r?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:r&&r.yesSharesUsdc>0?e.yesSharesUsdc/r.yesSharesUsdc*a:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:r&&r.noSharesUsdc>0?e.noSharesUsdc/r.noSharesUsdc*a:0}),o},ra=e=>{let r=e?.yesSharesUsdc??0,a=e?.noSharesUsdc??0;return r>0&&a<=0?"yes":a>0&&r<=0?"no":null},er=e=>`siftle_claimed_markets_${e.toLowerCase()}`,_e=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(er(t.walletAddress))||"[]"))}catch{return new Set}},aa=e=>{if(!t.walletAddress)return;let r=_e();r.add(e),localStorage.setItem(er(t.walletAddress),JSON.stringify(Array.from(r)))},je=(e,r)=>(r?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),se=(e,r,a)=>{let o=a?.yesSharesUsdc??0,s=a?.noSharesUsdc??0;return e==="sell"?r==="yes"?o>0:s>0:r==="yes"?s<=0:o<=0},dt=(e,r,a)=>{if(se(e,r,a))return r;let o=r==="yes"?"no":"yes";return se(e,o,a)?o:r};var oa=e=>{let r=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(r)},yt=e=>{let r=String(e||"").trim();if(!r)return"0 wins, 0 losses";let a=r.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(a)?a:`${a}, 0 losses`};var kt=e=>{let r=String(e||"").match(/(\d+)\s+wins?/i),a=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:r&&Number(r[1])||0,losses:a&&Number(a[1])||0}};var sa=(e,r)=>{let a=String(e?.optionId||"").trim(),o=Math.max(0,Number(e?.optionSharesUsdc)||0),s=Math.max(0,Number(r?.optionPools?.[a])||0),n=Math.max(0,Number(r?.volumeUsdc)||0);return!a||o<=0?0:s<=0||n<=0?o:o/s*n},Ke=(e,r)=>!te(e)||!r?r:{...r,optionPools:Object.fromEntries(ae(e).map(a=>[a.id,0]))};var ct=()=>{let e=0,r=0,a=0,o=I.filter(i=>i.timeframe==="Daily").map(i=>i.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(s)try{n=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,r++;continue}if(n[i]?.result==="loss"){a++;continue}let l=t.marketPositions[i],u=t.marketSnapshots[i]?.outcome??0;if(u===0)continue;let p=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,d=[];try{d=JSON.parse(localStorage.getItem(p)||"[]")}catch{}let b=d.includes("yes")&&d.includes("no");if(u===1&&l&&l.yesSharesUsdc>0){let m=b?50:100;e+=m,r++,n[i]={result:"win",points:m}}else if(u===2&&l&&l.noSharesUsdc>0){let m=b?50:100;e+=m,r++,n[i]={result:"win",points:m}}else l&&(l.yesSharesUsdc>0||l.noSharesUsdc>0)&&(a++,n[i]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(n)),{points:e,status:`${r} win${r===1?"":"s"}, ${a} loss${a===1?"":"es"}`}},na=(e,r)=>{let a=K(e).toLowerCase();if(!a)return;let o=`siftle_mock_pos_${a}_`,s=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(o))continue;let l=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(l)&&s.add(l)}s.forEach(n=>{let i=`${o}${n}`,l={yesSharesUsdc:0,noSharesUsdc:0};try{l=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let c=(Number(l.yesSharesUsdc)||0)>0,u=(Number(l.noSharesUsdc)||0)>0;if(!c&&!u)return;let p=`siftle_traded_sides_${e.id}_${n}`,d=[];try{d=JSON.parse(localStorage.getItem(p)||"[]")}catch{}let b=d.includes("yes")&&d.includes("no"),m=r==="yes"?c:u,g=`siftle_resolved_results_${n}`,T={};try{T=JSON.parse(localStorage.getItem(g)||"{}")}catch{}T[e.id]={result:m?"win":"loss",points:m?b?50:100:0},localStorage.setItem(g,JSON.stringify(T));let B=0,v=0,f=0;Object.values(T).forEach(k=>{k.result==="win"?(v+=1,B+=Number(k.points)||0):k.result==="loss"&&(f+=1)});let A=localStorage.getItem(lt(n))||"";fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:A,points:B,status:`${v} win${v===1?"":"s"}, ${f} loss${f===1?"":"es"}`})}).catch(k=>console.error("Failed to report local resolved score:",k))})},pe=async e=>{if(!t.walletAddress)return!1;let r=e&&t.hasLoadedPortfolioPositions?ct():null,a=await fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...r?{points:r.points,status:r.status}:{}})}),o=await a.json().catch(()=>({}));if(!a.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},ia=()=>{let e=new Set;for(let r=0;r<localStorage.length;r++){let a=localStorage.key(r);if(a&&a.startsWith("siftle_mock_pos_")){let o=a.slice(a.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(a)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(r=>{fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:r})}).catch(a=>console.error("Failed to report stored local trader:",a))})},la=async e=>{let r=K(e);if(!(!r||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(te(e)&&!t.walletAddress){let a=e.resolvedOptionId||null,o=Number(e.outcome);t.marketSnapshots[e.id]=Ke(e,{yesPriceCents:0,noPriceCents:0,volumeUsdc:Number(e.volumeUsdc)||0,yesSharesUsdc:0,noSharesUsdc:0,outcome:o===1||o===2||o===3?o:a?1:0,optionPools:e.optionPools||Object.fromEntries(ae(e).map(s=>[s.id,0])),resolvedOptionId:a,traderCount:0}),t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(te(e)&&t.walletAddress){let{position:a,snapshot:o}=await Ut(r,t.walletAddress);t.marketPositions[e.id]=a,t.marketSnapshots[e.id]=Ke(e,o)}else t.marketSnapshots[e.id]=Ke(e,await cr(r))}catch(a){console.warn(a)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&h()}}},z=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Bt();let r=Te(),a=await Promise.all(r.map(async o=>{let s=K(o);if(!s)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:n,snapshot:i}=await Ut(s,t.walletAddress);return t.marketSnapshots[o.id]=i,[o.id,n]}catch(n){return console.warn(`Failed to load portfolio market ${o.id}:`,n),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(a),t.portfolioPositionsLoadedAt=Date.now()}catch(r){console.warn(r)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,pe(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&h()}}},da=async(e,r)=>{if(!t.walletAddress){y("Session expired or wallet not connected. Please sign in."),Ue();return}let a=Te().find(u=>u.id===e);if(!a)return;t.marketTradeSide=r;let o=K(a);if(!o){y("Deploy this Arc market contract before trading"),h();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await z(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){y("Still loading your position. Try again in a moment."),h();return}let s=t.marketSnapshots[a.id];if(je(a,s)){t.tradeDrawerOpen=!1,y("This market is resolved and can no longer be traded."),h();return}let n=s?.yesPriceCents??a.probability,i=s?.noPriceCents??100-a.probability,l=t.marketPositions[a.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!se(t.marketOrderMode,r,l)){let u=ra(l),p=t.marketOrderMode==="sell"?u?`You can only exit your ${u.toUpperCase()} shares.`:"You do not have shares to exit in this market.":u?`Exit your ${u.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";y(p),t.marketTradeSide=dt(t.marketOrderMode,r,l),h();return}let c=Ee(Number(t.marketTradeAmount)||0,t.marketOrderMode,r,l);t.marketTradeAmount=c,P("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",h();let u=await pr(o,t.marketOrderMode,r,c,p=>{t.marketTradeStatus=p,h()},n,i);if(delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await Ne(),t.walletAddress&&(t.walletBalance=await ne(t.walletAddress)),await z({force:!0}),pe(!0).catch(p=>console.error("Failed to report leaderboard entry:",p)),t.walletAddress){let p=`siftle_cost_basis_${a.id}_${t.walletAddress.toLowerCase()}`,d={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let m=localStorage.getItem(p);if(m){let g=JSON.parse(m);d={yesCost:g.yesCost||0,noCost:g.noCost||0,yesShares:g.yesShares||0,noShares:g.noShares||0}}}catch{}let b=c;if(t.marketOrderMode==="buy"){let m=`siftle_traded_sides_${a.id}_${t.walletAddress.toLowerCase()}`,g=[];try{g=JSON.parse(localStorage.getItem(m)||"[]")}catch{}g.includes(r)||(g.push(r),localStorage.setItem(m,JSON.stringify(g))),r==="yes"?(d.yesCost+=b,d.yesShares=(d.yesShares||0)+b/(n/100)):(d.noCost+=b,d.noShares=(d.noShares||0)+b/(i/100))}else{let m=t.marketPositions[a.id];if(m){if(r==="yes"&&m.yesSharesUsdc>0){let g=Math.min(1,b/m.yesSharesUsdc);d.yesCost=Math.max(0,d.yesCost-d.yesCost*g),d.yesShares=Math.max(0,(d.yesShares||0)-(d.yesShares||0)*g)}else if(r==="no"&&m.noSharesUsdc>0){let g=Math.min(1,b/m.noSharesUsdc);d.noCost=Math.max(0,d.noCost-d.noCost*g),d.noShares=Math.max(0,(d.noShares||0)-(d.noShares||0)*g)}}}localStorage.setItem(p,JSON.stringify(d))}y(`Trade confirmed ${u.slice(0,8)}...`),P(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Cr(t.marketOrderMode,t.marketTradeAmount,r.toUpperCase(),a.question)}catch(u){P("trade_failed"),oa(u)?(Pt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),y("Session expired. Please sign in again.")):y(u instanceof Error?u.message:"Arc trade failed")}finally{t.marketTradeStatus=null,D(),h()}},ca=e=>Gt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",pa=e=>Gt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",ua=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',ma=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',be=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,fa=()=>`
  <article class="story-card skeleton-card" aria-hidden="true">
    <div class="story-topline desktop-only">
      <div class="skeleton skeleton-line sm"></div>
      <div class="skeleton skeleton-line xs"></div>
    </div>
    <div class="skeleton skeleton-image desktop-only"></div>
    <div class="story-copy desktop-only">
      <div class="skeleton skeleton-chip"></div>
      <div class="skeleton skeleton-line xl" style="height: 22px; margin-top: 12px;"></div>
      <div class="skeleton skeleton-line lg" style="height: 22px;"></div>
      <div class="skeleton skeleton-line md" style="margin-top: 8px;"></div>
    </div>
    <div class="mobile-card-inner mobile-only">
      <div class="mobile-card-body">
        <div class="mobile-card-text">
          <div class="skeleton skeleton-chip"></div>
          <div class="skeleton skeleton-line xl" style="height: 18px; margin-top: 10px;"></div>
          <div class="skeleton skeleton-line lg" style="height: 18px;"></div>
          <div class="skeleton skeleton-line sm" style="margin-top: 8px;"></div>
        </div>
        <div class="skeleton skeleton-image" style="width: 88px; height: 88px; border-radius: 14px;"></div>
      </div>
    </div>
  </article>
`,ga=(e=4)=>`${be("Loading stories")}${Array.from({length:e},fa).join("")}`,he=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${be("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,ha=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${be("Loading thread timeline")}
    ${Array.from({length:e},()=>`
      <div class="thread-skeleton-item">
        <div class="skeleton thread-skeleton-dot"></div>
        <div>
          <div class="skeleton skeleton-line sm" style="margin-bottom: 12px;"></div>
          <div class="skeleton skeleton-line xl" style="height: 18px;"></div>
          <div class="skeleton skeleton-line lg" style="height: 18px; margin-top: 8px;"></div>
          <div class="skeleton skeleton-line md" style="margin-top: 12px;"></div>
        </div>
      </div>
    `).join("")}
  </div>
`;var va=(e=3)=>`
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${be("Loading market evidence")}
    ${Array.from({length:e},()=>`
      <div class="market-evidence-skeleton-item">
        <div class="skeleton thread-skeleton-dot"></div>
        <div>
          <div class="skeleton skeleton-line sm" style="margin-bottom: 10px;"></div>
          <div class="skeleton skeleton-line xl" style="height: 16px;"></div>
          <div class="skeleton skeleton-line lg" style="height: 16px; margin-top: 8px;"></div>
          <div class="skeleton skeleton-line md" style="margin-top: 10px;"></div>
        </div>
      </div>
    `).join("")}
  </div>
`,ba=(e=2)=>`
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${be("Loading portfolio positions")}
    ${Array.from({length:e},()=>`
      <article class="portfolio-skeleton-card">
        <div class="skeleton skeleton-line sm"></div>
        <div class="skeleton skeleton-line xl" style="height: 20px;"></div>
        <div class="skeleton skeleton-line lg" style="height: 20px;"></div>
        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 6px;">
          <div class="skeleton skeleton-line md" style="height: 36px;"></div>
          <div class="skeleton skeleton-line md" style="height: 36px;"></div>
          <div class="skeleton skeleton-line md" style="height: 36px;"></div>
        </div>
      </article>
    `).join("")}
  </div>
`,wt=e=>{let r=e.type==="tweet",a='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-top; color: var(--color-text-primary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',o='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 12px; height: 12px; display: inline-block; vertical-align: text-top; margin-right: 4px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';return`
    <article class="story-card ${r?"social-story tweet-card":tt(e)?"social-story":""}" data-story-id="${e.id}" role="button" tabindex="0" aria-label="Open summary for ${e.headline}">

      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            ${r?`<div style="margin-bottom: 6px;">${a}</div>`:""}
            <strong>${e.source}</strong>
            <span>${Oe(e)} - ${e.readTime}</span>
          </div>
        </div>
        <div class="story-card-actions">
          <button class="bookmark-button" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="${e.saved?"Remove saved story":"Save story"}">
            ${ua()}
          </button>
          <div class="share-control">
            <button class="export-button" type="button" aria-label="Export story card" data-export-id="${e.id}" aria-expanded="${t.activeShareStoryId===e.id}">
              ${ma()}
            </button>
            <div class="share-menu" ${t.activeShareStoryId===e.id?"":"hidden"}>
              <button type="button" data-export-action="save" data-export-story-id="${e.id}">Save image</button>
              <button type="button" data-export-action="share" data-export-story-id="${e.id}">Share</button>
            </div>
          </div>
        </div>
      </div>

      <div class="story-image-frame desktop-only" aria-hidden="true">
        <img src="${e.imageUrl}" alt="" loading="lazy" />
      </div>

      <div class="story-copy desktop-only">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <h2 class="card-headline">${bt(e)}</h2>
        <p>${r?"Tap to read the tweet":"Tap to read the AI briefing."}</p>
      </div>

      <div class="card-action-row desktop-only">
        ${r?`<button class="card-source-button read-tweet-btn" type="button" style="cursor: pointer;">Read Tweet</button>
             <a class="card-source-button twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; gap: 6px;">
              ${a}
              Open Tweet
             </a>`:`
              ${ca(e)}
              <button class="card-source-button summary-btn" type="button">AI briefing</button>
              ${/example\\.com/i.test(e.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
            `}
      </div>

      <!-- Mobile layout (visible at 640px and below) -->
      <div class="mobile-card-inner mobile-only">
        <div class="mobile-card-body">
          <div class="mobile-card-text">
            <div class="mobile-card-topline">
              <span class="mobile-source-pill ${tt(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px;">
                ${r?o:""}
                ${qt(e)}
              </span>
              <div class="mobile-icons">
                <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="Save story">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                </button>
                <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${e.id}" aria-label="Save image">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                </button>
              </div>
            </div>
            <h2 class="card-headline">${bt(e)}</h2>
            <span class="mobile-card-time">${Oe(e)}</span>
          </div>
          <div class="mobile-card-image" aria-hidden="true">
            <img src="${e.imageUrl}" alt="" loading="lazy" />
          </div>
        </div>
        <div class="mobile-card-actions">
          ${r?`<button class="mobile-action-btn read-tweet-btn" type="button" style="width: 50%; cursor: pointer;">Read Tweet</button>
               <a class="mobile-action-btn source-btn twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; width: 50%;">
                ${o}
                Open Tweet
               </a>`:`
                ${pa(e)}
                ${/example\\.com/i.test(e.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
                <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
              `}
        </div>
      </div>

    </article>
  `},ve=()=>{if(!w)return;let e=Ir();if(w.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){w.innerHTML=ga(4);return}let r=U(t.newsSearchQuery.trim()),o=`
    <section class="news-feed-search-shell">
      ${r?`<div class="news-feed-search-copy"><p>${e.length} matches for "${r}".</p></div>`:""}
      <label class="news-feed-search-bar" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search all saved news by keyword" value="${U(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </section>
  `;if(e.length===0){let s=t.showSaved?[]:t.stories;if(s.length>0){w.innerHTML=o+s.map(wt).join("");return}w.innerHTML=o+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>';return}w.innerHTML=o+e.map(wt).join("")},St=e=>new Promise((r,a)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>r(o),o.onerror=()=>a(new Error(`Unable to load image: ${e}`)),o.src=e}),ke=(e,r,a,o,s,n)=>{e.beginPath(),e.moveTo(r+n,a),e.lineTo(r+o-n,a),e.quadraticCurveTo(r+o,a,r+o,a+n),e.lineTo(r+o,a+s-n),e.quadraticCurveTo(r+o,a+s,r+o-n,a+s),e.lineTo(r+n,a+s),e.quadraticCurveTo(r,a+s,r,a+s-n),e.lineTo(r,a+n),e.quadraticCurveTo(r,a,r+n,a),e.closePath()},ya=(e,r,a,o,s,n,i)=>{let l=r.split(/\s+/).filter(Boolean),c=[],u="";for(let p of l){let d=u?`${u} ${p}`:p;if(e.measureText(d).width<=s){u=d;continue}if(u&&c.push(u),u=p,c.length===i)break}if(u&&c.length<i&&c.push(u),l.length>0&&c.length===i){for(;e.measureText(`${c[i-1]}...`).width>s&&c[i-1].length>0;)c[i-1]=c[i-1].slice(0,-1).trim();c[i-1]=`${c[i-1]}...`}return c.forEach((p,d)=>e.fillText(p,a,o+d*n)),o+c.length*n},ka=(e,r,a,o,s,n,i)=>{let l=Math.max(s/r.naturalWidth,n/r.naturalHeight),c=s/l,u=n/l,p=(r.naturalWidth-c)/2,d=(r.naturalHeight-u)/2;e.save(),ke(e,a,o,s,n,i),e.clip(),e.drawImage(r,p,d,c,u,a,o,s,n),e.restore()},xt=e=>new Promise((r,a)=>{try{e.toBlob(o=>{o?r(o):a(new Error("Unable to export image"))},"image/png")}catch(o){a(o)}}),$t=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(r,a)=>String.fromCharCode(Number(a))):"",wa=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",Tt=async(e,r=!0)=>{let a=document.createElement("canvas");a.width=1080,a.height=1120;let o=a.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,a.width,a.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",ke(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await St("./assets/siftle-logo-small.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${$t(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(r){let l=await St(wa(e.imageUrl)).catch(()=>null);l?ka(o,l,110,n,860,520,28):(o.fillStyle="#eef2ff",ke(o,110,n,860,520,28),o.fill())}else o.fillStyle="#eef2ff",ke(o,110,n,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",ke(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(W(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",ya(o,$t(e.headline),110,888,860,54,4),a},tr=async e=>{let r=await Tt(e,!0);try{return await xt(r)}catch{return xt(await Tt(e,!1))}},rr=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,ar=async e=>{let r=await tr(e),a=URL.createObjectURL(r),o=document.createElement("a");o.href=a,o.download=rr(e),o.click(),URL.revokeObjectURL(a)},Sa=async e=>{let r=await tr(e),a=new File([r],rr(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[a]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await ar(e)},xa=async(e,r)=>{let a=t.stories.find(o=>o.id===e);if(a){t.activeShareStoryId=null,ve(),y(r==="share"?"Preparing share image":"Preparing download"),L&&(L.textContent=r==="share"?"Preparing share image...":"Preparing image download...");try{r==="share"?await Sa(a):await ar(a),y(r==="share"?"Share image ready":"Image saved"),L&&(L.textContent="Branded story image ready")}catch(o){console.warn(o),y("Image export unavailable"),L&&(L.textContent="Image export was cancelled or unavailable")}}},Mt=(e,r)=>{let a=t.unlockingSummaryUrl===e.sourceUrl,o=nt(e);return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${r} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${de(e)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${a?"disabled":""}>${a?"Preparing...":"AI briefing"}</button>
      </div>
      ${Pe(e)}
      ${a?`<div style="margin-top: 12px;">${he()}</div>`:ce(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${he()}</div>`:o?`<div style="margin-top: 12px;">${it(e)}</div>`:`<div style="margin-top: 12px;">${at(de(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},$a=async(e,r)=>{if(!t.walletAddress){y("Session expired or wallet not connected. Please sign in."),Ue();return}let a=Te().find(u=>u.id===e);if(!a||!te(a))return;let o=ae(a).find(u=>u.id===r);if(!o){y("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await z(),t.marketTradeStatus=null);let s=t.marketSnapshots[a.id];if(je(a,s)){y("This market is resolved and can no longer be traded.");return}let n=t.marketPositions[a.id],i=t.marketOrderMode==="sell";if(!i&&n?.optionId){y("Your pick is already locked for this market.");return}if(i&&!n?.optionId){y("You do not have a pick to exit.");return}let l=Math.max(0,Number(n?.optionSharesUsdc)||0);if(i&&l<=0){y("Your pick is still loading. Please try again."),await z({force:!0});return}let c=i?l:Ee(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=c,t.marketTradeOptionId=i&&n?.optionId||o.id,P("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",h(),await ur(a.id,i?"sell":"buy",i&&n?.optionId||o.id,c,u=>{t.marketTradeStatus=u,h()}),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await Ne(),t.walletAddress&&(t.walletBalance=await ne(t.walletAddress)),await z({force:!0}),P(i?"trade_sell_success":"trade_buy_success"),y(i?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(u){P("trade_failed"),y(u instanceof Error?u.message:"Trade failed")}finally{t.marketTradeStatus=null,D(),h()}},Ta=()=>{if(!S||!w)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(w.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){S.innerHTML="";return}let r=t.loadingThreadUrl===e.sourceUrl,a=t.activeThread;if(r&&!a){S.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${ha(3)}
        </article>
      </div>
    `;return}S.innerHTML=`
    <div class="detail-container thread-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card thread-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${Kr(a?.items?.length??0)}</span>
        </div>
        <h2>${a?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${Mt(e,"Latest")}
          ${Jt(a?.items??[]).map(o=>Mt(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Ma=()=>{if(!S||!w)return;if(t.selectedThreadUrl){Ta();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){S.hidden=!0,S.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),w.hidden=!1;return}if(e.type==="tweet"){w.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode");let i='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';S.innerHTML=`
      <div class="detail-container tweet-detail-container" style="max-width: 600px; margin: 0 auto; padding: 20px 16px;">
        <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed" style="margin-bottom: 20px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to feed
        </button>
        <article class="detail-card tweet-detail-card" style="border-radius: 16px; padding: 24px;">
          <div class="detail-topline" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; font-size: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color, #334155);">
            <div style="display: flex; align-items: center; gap: 8px;">
              ${i}
              <strong class="tweet-account-name" style="font-size: 15px;">${e.source}</strong>
            </div>
            <span class="tweet-detail-time">${Oe(e)}</span>
          </div>
          
          <div class="tweet-content-wrapper" style="margin-bottom: 24px;">
            ${e.imageUrl&&!/nitter\.net\/pic/i.test(e.imageUrl)&&!/placeholder/i.test(e.imageUrl)?`<img class="detail-image" src="${e.imageUrl}" alt="" style="width: 100%; border-radius: 12px; margin-bottom: 16px; object-fit: cover; max-height: 400px; border: 1px solid var(--border-color, #334155);" />`:""}
            <div class="tweet-full-text" style="font-size: 16px; line-height: 1.6; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-weight: 400; word-break: break-word;">
              ${e.summary}
            </div>
          </div>
          
          <a class="source-button twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; border-radius: 9999px; text-decoration: none; font-weight: 600; font-size: 15px; text-align: center; box-sizing: border-box;">
            ${i}
            Open Tweet on X
          </a>
        </article>
      </div>
    `;return}let r=de(e,t.aiSummaries[e.sourceUrl]),a=t.loadingSummaryUrl===e.sourceUrl,o=ce(e),s=t.unlockingSummaryUrl===e.sourceUrl,n=nt(e);w.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),S.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${e.source} - ${Oe(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?Pe(e):""}
          ${o?a?he():n?it(e):at(r,e):zr(e,s)}
        </section>
        ${(()=>{let l=new URLSearchParams(window.location.search).get("url");return l&&l===e.sourceUrl?`
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px; width: 100%;">
              <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer" style="width: 100%; box-sizing: border-box; text-align: center; justify-content: center;">Open source</a>
              <button type="button" class="read-more-news-btn" data-back-to-feed>
                Read More News
              </button>
            </div>
            `:`<a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`})()}
      </article>
    </div>
  `},Aa=e=>{let r=t.marketSnapshots[e.id],a=K(e),o=te(e),s=ae(e).length,n=r?.volumeUsdc??(Number(e.volumeUsdc)||0),i=r?.yesPriceCents,l=i??e.probability,c=o?`${s}`:`${l}%`,u=i===void 0?a?"Loading Arc pools":"Arc setup required":`Yes ${i}\xA2 \xB7 No ${100-i}\xA2`,p=i===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:u,d=ze(e),b=e.timeframe==="Daily"?zt(e,r):e.closes;return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span class="timeframe-chip ${e.timeframe}">${e.timeframe==="Sagas"?"Sagas":e.timeframe}</span>
          ${e.points?`<span class="points-chip">+${e.points} pts</span>`:""}
        </div>
        <span class="market-card-updates">${d.evidence.length} updates</span>
      </div>
      <div class="market-card-body" style="display: flex; gap: 16px; align-items: flex-start; justify-content: space-between; width: 100%; text-align: left; margin: 4px 0;">
        <div class="market-card-text" style="flex: 1; min-width: 0;">
          <h2>${e.question}</h2>
        </div>
        ${d.imageUrl?`
        <div class="market-card-image-frame" style="width: 72px; height: 72px; min-width: 72px; border-radius: 12px; overflow: hidden; border: 1px solid var(--market-border); flex-shrink: 0;">
          <img src="${d.imageUrl}" alt="" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        `:""}
      </div>
      <div class="market-probability-row">
        <strong>${c}</strong>
        <span>${o?"possible outcomes":a?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${o?"Pick exactly one":"Choose a side"}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${o?100:l}%"></span></div>
      <div class="market-volume">
        <span>Market activity</span>
        <strong>Hidden</strong>
      </div>
      ${d.evidence&&d.evidence.length>0?`
      <div class="market-card-news" style="margin: 12px 0 8px; width: 100%; border-top: 1px dashed var(--market-border); padding-top: 10px; box-sizing: border-box;">
        <span style="font-size: 0.72rem; font-weight: 700; color: var(--market-text-muted); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px; text-align: left;">Related News</span>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          ${d.evidence.slice(0,2).map(m=>`
            <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 0.76rem; text-align: left; line-height: 1.35; padding: 4px 0;">
              <span style="background: rgba(59, 130, 246, 0.08); color: var(--market-accent); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 4px; padding: 1px 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; flex-shrink: 0; line-height: 1;">${U(m.source)}</span>
              <span style="color: var(--market-text-main); font-weight: 500;">${U(m.headline)}</span>
            </div>
          `).join("")}
        </div>
      </div>
      `:""}
      <div class="market-card-footer">
        <span>${d.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${b}`:`Closes ${b}`}</span>
      </div>
    </button>
  `},La=e=>{let r=ze(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,n=r.evidence[0],i=n?n.headline:"No updates yet",l=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${l}`},Ua=e=>{if(!w||!S)return;let r=ze(e),a=!t.checkedMarketEvidence[e.id],o=K(e),s=t.marketSnapshots[e.id],n=te(e),i=ae(e);n&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let l=Zr(e),c=!!(o&&!s),u=s?.yesPriceCents??(o?e.probability:0),p=s?.noPriceCents??(o?100-e.probability:0),d=c?"":o?`${u}\xA2`:"--",b=c?"":o?`${p}\xA2`:"--",m=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},g=!!m.optionId;n&&g&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),n&&!g&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let T=n&&t.marketOrderMode==="sell"&&g?Math.max(0,Number(m.optionSharesUsdc)||0):0,B=T>0?T:Ee(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,m),v=T>0?{min:0,max:T}:Qt(t.marketOrderMode,t.marketTradeSide,m),f=t.marketOrderMode==="buy"?"exactly $2.00 USDC":`Up to $${H(v.max)} USDC`,A=!t.walletAddress||t.hasLoadedPortfolioPositions,k=je(e,s),$=jt(e,s),x=!!$;n||(t.marketTradeSide=dt(t.marketOrderMode,t.marketTradeSide,m));let M=!n&&!k&&!x&&A&&se(t.marketOrderMode,"yes",m),O=!n&&!k&&!x&&A&&se(t.marketOrderMode,"no",m),Y=n?!k&&!x&&A&&(t.marketOrderMode==="sell"?g:!g&&!!l):!k&&!x&&A&&se(t.marketOrderMode,t.marketTradeSide,m),q=k?"Market resolved":$||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),V=k?"Market resolved":$||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),Q=n?B:Xt(s,t.marketTradeSide,B,t.marketOrderMode,m),X=t.marketOrderMode==="buy"?"Buy":"Exit",ue=n?"Pick one outcome":o?"Arc testnet live":"Contract not deployed";w.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),la(e),Kt(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&z({force:!t.hasLoadedPortfolioPositions});let pt=n?!!m.optionId:m.yesSharesUsdc>0||m.noSharesUsdc>0,We="";n&&pt&&t.walletAddress?We=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${U(m.optionLabel||"Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Status</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">Locked in</strong>
          </div>
        </div>
      </div>
    `:pt&&t.walletAddress&&(We=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${Zt(m,s).map(_=>`
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${_.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${H(_.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${H(_.payout)}</strong>
            </div>
          </div>
        `).join("")}
        <div style="border-top: 1px solid var(--market-border); padding-top: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--market-text-muted);">Winning side splits the final pool</span>
        </div>
      </div>
    `),S.innerHTML=`
    <div class="detail-container market-detail-container">
      <div class="detail-header-row">
        <button class="back-button" type="button" data-back-markets aria-label="Go back to markets">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to markets
        </button>
        
        <button class="share-whatsapp-btn" type="button" id="shareWhatsAppBtn" aria-label="Share to WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.22c5.507 0 9.99-4.478 9.99-9.985A9.996 9.996 0 0 0 12.012 2zm5.782 14.155c-.249.703-1.442 1.3-1.966 1.385-.472.078-1.091.147-3.149-.705-2.631-1.09-4.301-3.771-4.432-3.947-.13-.177-1.066-1.417-1.066-2.703 0-1.287.674-1.92.915-2.176.241-.256.529-.32.707-.32.177 0 .355.001.507.009.157.008.368-.06.576.44.214.516.732 1.785.795 1.916.063.13.104.282.019.452-.085.17-.128.277-.255.426-.127.15-.268.334-.383.45-.13.13-.266.27-.115.529.15.258.669 1.103 1.433 1.784.983.876 1.808 1.146 2.062 1.252.254.107.402.09.553-.085.15-.177.644-.75.817-.98.173-.23.346-.192.576-.107.23.085 1.464.69 1.719.817.255.127.424.192.487.3.063.107.063.619-.186 1.322z"/></svg>
          <span>Share WhatsApp</span>
        </button>
      </div>

      <article class="market-detail-card">
        <div class="market-detail-main">
          <div class="market-detail-topline">
            <span class="category-chip ${e.category}">${W(e.category)}</span>
            <span class="market-status-pill">${ue}</span>
          </div>
          <h2>${e.question}</h2>
          ${We}
          ${r.imageUrl?`
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${r.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          `:""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${st(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${zt(e,s)}</strong>
            </div>
            <div class="market-stat">
              <span>Market activity</span>
              <strong>Hidden</strong>
            </div>
          </div>

          <div class="market-resolution-panel">
            <h3>Resolution Rules</h3>
            <p>${e.resolution}</p>
            ${$?`<p style="margin-top: 10px; color: #f59e0b; font-weight: 600;">${$}</p>`:""}
          </div>

          <section class="market-evidence-thread">
            <header>
              <h3>Related News</h3>
              <span>${a?"Loading...":`${r.evidence.length} stories`}</span>
            </header>
            <p class="market-thread-intro">Read the stories connected to this market, newest first.</p>
            <div class="market-thread-timeline">
              ${a?va(3):r.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':r.evidence.map(E=>{let _=Rt(e,E),me=t.unlockingSummaryUrl===E.sourceUrl;return`
                <article class="market-thread-update">
                  <div class="market-thread-marker"></div>
                  <div class="market-thread-update-content">
                    <div class="market-thread-update-meta">
                      <span>${E.date} \xB7 ${E.source}</span>
                    </div>
                    <h4>${E.headline}</h4>
                    <p>${E.summary}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                      ${/example\.com/i.test(E.sourceUrl)?"":`<a class="market-thread-source-link" href="${E.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(E.sourceUrl)}" ${me?"disabled":""}>${me?"Preparing...":"AI briefing"}</button>
                    </div>
                    ${Pe(_)}
                    ${me?`<div style="margin-top: 12px;">${he()}</div>`:ce(_)?t.loadingSummaryUrl===E.sourceUrl?`<div style="margin-top: 12px;">${he()}</div>`:nt(_)?`<div style="margin-top: 12px;">${it(_)}</div>`:`<div style="margin-top: 12px;">${at(de(_,t.aiSummaries[E.sourceUrl]),_)}</div>`:""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${n?`<span>${g?"Pick locked":"Choose one option"}</span><span><strong>${i.length} options</strong></span>`:`<span>Choose a side</span><span><strong>${t.marketOrderMode==="sell"?"Exit available":"Trade open"}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${k||x?"disabled":""}>
          ${k?"Market Resolved":$||(n?g?"Pick Locked":"Pick Outcome":"Trade Market")}
        </button>
      </div>

      <div class="trade-drawer-backdrop ${t.tradeDrawerOpen?"open":""}" id="tradeDrawerBackdrop"></div>
      <div class="trade-drawer ${t.tradeDrawerOpen?"open":""}" id="tradeDrawer">
        <div class="trade-drawer-header">
          <h3>Place Trade</h3>
          <button class="close-drawer-btn" type="button" id="closeTradeDrawerBtn" aria-label="Close trade panel">&times;</button>
        </div>
        <div class="trade-drawer-body">
          <div class="market-order-mode">
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${k||x?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${k||x?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?i.map(E=>{let _=t.marketTradeOptionId===E.id||m.optionId===E.id,me=k||x||t.marketOrderMode==="sell"||g||!A;return`
                  <button type="button" class="market-side option ${_?"active":""} ${me?"disabled":""}" data-market-option-id="${U(E.id)}" ${me?"disabled":""}>
                    <span>${U(E.label)}</span>
                    ${m.optionId===E.id?"<small>Your pick</small>":""}
                  </button>
                `}).join(""):c?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${M?"":"disabled"}" data-market-trade-side="yes" ${M?"":"disabled"} title="${M?"Yes":q}">
                  <span>Yes</span>
                  ${M?"":`<small>${q}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${O?"":"disabled"}" data-market-trade-side="no" ${O?"":"disabled"} title="${O?"No":V}">
                  <span>No</span>
                  ${O?"":`<small>${V}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${f}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${v.min.toFixed(2)}" max="${Math.max(v.min,v.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${B}" data-market-amount ${k||x||t.marketOrderMode==="buy"?"disabled":""} style="${t.marketOrderMode==="buy"?"opacity: 0.7; cursor: not-allowed;":""}" />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>Market amounts are hidden while this market is open.</span>
          </div>

          <div class="drawer-action-container">
            ${c?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:k?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':x?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${$}</button>`:t.walletAddress?A?n&&t.marketOrderMode==="sell"&&g?`<button type="button" class="market-submit-button" data-market-option-trade="${U(m.optionId||"")}">Exit pick</button>`:Y?n?`<button type="button" class="market-submit-button" data-market-option-trade="${U(l?.id||"")}">Confirm ${U(l?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${X} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${X.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},or=()=>{if(!w||!S)return;if(He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),le?.toggleAttribute("hidden",!0),Me?.classList.add("active"),Ae?.classList.remove("active"),Le?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&I.forEach(n=>{Kt(n)})},750),t.selectedMarketId){let n=I.find(i=>i.id===t.selectedMarketId);if(n){Ua(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),S.hidden=!0,S.classList.remove("fullscreen"),w.hidden=!1,w.classList.add("markets-list");let e=I,a=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(n=>{let i=t.activeMarketTimeframe===n,l=n==="All"?e.length:e.filter(u=>u.timeframe===n).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${n}">
            <span>${n==="Sagas"?"Sagas":n}</span>
            <span class="timeframe-tab-count">${l}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&I.length===0){w.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${Ve}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
        </div>
        <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
          Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
        </p>
      </header>
      ${a}
      <div class="markets-container">
        <section class="markets-grid" aria-label="Loading prediction markets">
          ${Array.from({length:3}).map(()=>`
            <article class="market-card skeleton-market-card">
              <div class="skeleton skeleton-line sm"></div>
              <div class="skeleton skeleton-line xl" style="height: 22px;"></div>
              <div class="skeleton skeleton-line lg"></div>
              <div class="skeleton skeleton-line md"></div>
              <div class="skeleton skeleton-line xl" style="height: 8px; margin-top: 18px;"></div>
            </article>
          `).join("")}
        </section>
      </div>
    `;return}let o="",s=(n,i,l)=>l.length===0?"":`
      <div class="market-timeframe-section">
        <div class="timeframe-section-header">
          <div class="timeframe-section-header-left">
            <h2>${n}</h2>
            <span class="timeframe-section-subtitle">${i}</span>
          </div>
          <span class="timeframe-section-count-badge">${l.length} ${l.length===1?"market":"markets"}</span>
        </div>
        <section class="markets-grid" aria-label="${n} prediction markets">
          ${l.map(Aa).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(c=>c.timeframe==="Daily"),i=e.filter(c=>c.timeframe==="Weekly"),l=e.filter(c=>c.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",n)}
      ${s("Weekly","Ends in a week",i)}
      ${s("Sagas (Long-term)","Narratives & futures",l)}
    `}else{let n=e.filter(c=>c.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,l="";t.activeMarketTimeframe==="Daily"?l="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?l="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",l="Narratives & futures"),o=`
      ${s(i,l,n)}
    `}w.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${Ve}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${a}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},sr=()=>{if(!w||!S)return;He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),le?.toggleAttribute("hidden",!0),Me?.classList.remove("active"),Ae?.classList.remove("active"),Le?.classList.remove("active"),document.body.classList.remove("detail-mode"),S.hidden=!0,w.hidden=!1,w.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?ct():null;t.walletAddress&&e&&fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(v=>console.error("Failed to report user score:",v)),ee&&(clearInterval(ee),ee=null),w.innerHTML=`
    <section class="leaderboard-surface">
      <header class="leaderboard-header">
        <span>Siftle Seasonal Arena</span>
        <h1>Preseason Leaderboard</h1>
        <p>Compete with other traders. Preseason points are earned by unlocking daily AI Briefings to read news and stay updated.</p>
      </header>

      <div class="leaderboard-faucet-box">
        <div class="faucet-box-details">
          <h3>Claim Test USDC</h3>
          <p>Get test USDC to trade daily prediction markets and climb the seasonal ranks.</p>
        </div>
        <button id="faucetClaimButton" class="faucet-claim-btn" type="button">Claim Faucet</button>
      </div>

      <div class="season-countdown-banner">
        <span class="countdown-label">Preseason Active</span>
        <span class="countdown-value">Build up points for Season 2!</span>
      </div>

      <div class="global-prize-box" id="globalPrizeBox">
        <div>
          <span>Preseason Race</span>
          <strong>Ranked by preseason points</strong>
        </div>
      </div>

      <div class="global-title-container" id="globalControls">
        <div>
          <h2>Preseason rankings</h2>
          <p>Everyone ranked by preseason points. Unlock at least 3 briefings daily to earn 30 points. Points carry forward to Season 2.</p>
        </div>
      </div>

      <div class="leaderboard-list" id="leaderboardListContainer" role="list">
        <!-- Loader Skeleton -->
        <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
          ${Array.from({length:6}).map(()=>`
            <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
              <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
                <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
                <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
              </div>
              <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Season 1 Archive Collapsible Accordion -->
      <div class="leaderboard-archive-section" style="margin-top: 32px; border-top: 1px solid var(--market-border); padding-top: 24px;">
        <button id="archiveExpandBtn" class="archive-expand-btn" type="button" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; background: var(--market-card-bg); border: 1px solid var(--market-border); border-radius: 10px; color: var(--market-text-main); font-weight: 600; cursor: pointer; font-family: 'Space Grotesk', sans-serif; font-size: 1rem; transition: background 0.2s;">
          <span style="display: flex; align-items: center; gap: 8px;">\u{1F4C2} View Season 1 (World Cup) Leaderboard Archive</span>
          <span id="archiveChevron" style="transition: transform 0.2s; font-size: 0.8rem; transform: ${Z?"rotate(180deg)":"rotate(0deg)"}; color: var(--market-text-main);">\u25BC</span>
        </button>
        
        <div id="archiveContent" style="display: ${Z?"block":"none"}; padding: 8px 4px 0 4px;">
          <div class="leaderboard-mode-tabs" role="tablist" aria-label="Season 1 views" style="margin-top: 20px; display: flex; gap: 8px;">
            <button class="leaderboard-mode-tab ${G==="global"?"active":""}" type="button" data-season1-view="global" style="flex: 1;">Global</button>
            <button class="leaderboard-mode-tab ${G==="division"?"active":""}" type="button" data-season1-view="division" style="flex: 1;">Division</button>
          </div>

          <div class="global-prize-box" id="season1PrizeBox" ${G==="global"?"":"hidden"} style="margin-top: 16px; display: grid; grid-template-columns: 1fr; gap: 12px;">
            <div>
              <span>Global Season Race</span>
              <strong>Top 10 share a 150 USDC prize pool</strong>
            </div>
          </div>

          <div class="division-title-container" id="season1DivisionControls" ${G==="division"?"":"hidden"} style="margin-top: 16px;">
            <div class="division-title-left" style="display: flex; align-items: center; gap: 8px; flex-wrap: nowrap !important; flex-shrink: 0 !important;">
              <h2 id="season1DivisionTitleText" style="margin: 0; white-space: nowrap !important;">Division 1</h2>
              <button class="how-it-works-btn" id="season1HowItWorksBtn" type="button" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; color: var(--market-text-main) !important; border-radius: 6px !important; padding: 4px 10px !important; font-size: 0.82rem !important; font-weight: 600 !important; cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important; white-space: nowrap !important; flex-shrink: 0 !important;">How it works</button>
            </div>
            <select id="season1DivisionSelector" class="division-select-menu">
              <option value="1">Division 1</option>
              <option value="2">Division 2</option>
            </select>
          </div>

          <div class="global-title-container" id="season1GlobalControls" ${G==="global"?"":"hidden"} style="margin-top: 16px;">
            <div>
              <h2>Season 1 Final Rankings</h2>
              <p>Everyone ranked by points, wins, fewer losses, then earliest market activity.</p>
            </div>
          </div>

          <div class="leaderboard-list" id="season1LeaderboardListContainer" role="list" style="margin-top: 16px;">
            <!-- Render skeleton or rows -->
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Dropdown Modal -->
    <div id="howItWorksModal" class="rules-modal-overlay">
      <div class="rules-modal-content">
        <div class="rules-modal-header">
          <h2>Seasonal Arena Rules</h2>
          <button id="closeRulesModalBtn" class="close-modal-btn" type="button">&times;</button>
        </div>
        <div class="rules-modal-body">
          <div class="rules-section">
            <h3>\u{1F3C6} 6-Player Divisions</h3>
            <p>You are assigned to a division of 6 players. You only compete against the 5 opponents in your division.</p>
          </div>
          <div class="rules-section">
            <h3>\u26A1 Daily Markets Only</h3>
            <p>Points are only accumulated on Daily Markets (which resolve in 24\u201372 hours).</p>
          </div>
          <div class="rules-section">
            <h3>\u{1F4C8} Scoring System</h3>
            <p><strong>+100 pts</strong> for finishing on the winning side.<br>
            <strong>+50 pts</strong> if you switched sides and ultimately finished on the winning side.</p>
          </div>
          <div class="rules-section">
            <h3>\u{1F504} Division Rebalancing</h3>
            <p>At the end of each season, divisions are dynamically restructured. You are matched and regrouped into a new 6-player league with competitors who finished the season with similar point totals. Depending on your performance, you may face higher or lower tier matchups next season to keep the competition balanced, fair, and fun.</p>
          </div>
        </div>
      </div>
    </div>
  `,((v="2026-07-19T23:59:59.000Z")=>{let f=document.getElementById("seasonTimer");ee&&clearInterval(ee);let A=()=>{let $=new Date(v).getTime()-new Date().getTime();if($<=0){f&&(f.innerText="Season Finished!"),ee&&clearInterval(ee);return}let x=Math.floor($/(1e3*60*60*24)),M=Math.floor($%(1e3*60*60*24)/(1e3*60*60)),O=Math.floor($%(1e3*60*60)/(1e3*60)),Y=Math.floor($%(1e3*60)/1e3);f&&(f.innerText=`${x}d ${M}h ${O}m ${Y}s`)};A(),ee=setInterval(A,1e3)})();let a=v=>v.map((f,A)=>{let k=Number(f.globalRank)||A+1,$=String(f.username||""),x=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),M=x&&t.profileUsername?t.profileUsername:f.displayName||$,O=x?`${t.profileUsername?M:R($)} (You)`:M.startsWith("0x")&&M.length===42?R(M):M,Y=U(O),q=yt(f.status);if(f.totalTrades!==void 0&&f.aiBriefingUnlocks!==void 0){let Fe=kt(f.status);q=`${Fe.wins}W - ${Fe.losses}L \xB7 ${f.totalTrades} trades \xB7 ${f.aiBriefingUnlocks} unlocks`}let V=U(q),Q=f.nextSeasonDivision?`Division ${f.nextSeasonDivision}`:"Qualify",X=k<=10?"promotion-zone":"safety-zone",ue=k<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${x?"user-highlight":""} ${X}" role="listitem">
        <div class="leaderboard-row-left">
          ${ue}
          <span class="leaderboard-rank rank-${k}">${k}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(f.points)||0} pts</strong>
          <span>${f.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${U(Q)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${V}</span>
        </div>
      </div>
    `}).join(""),o=v=>v.map((f,A)=>{let k=A+1,$=String(f.username||""),x=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),M=x&&t.profileUsername?t.profileUsername:f.displayName||$,O=yt(f.status);if(f.totalTrades!==void 0&&f.aiBriefingUnlocks!==void 0){let ue=kt(f.status);O=`${ue.wins}W - ${ue.losses}L \xB7 ${f.totalTrades} trades \xB7 ${f.aiBriefingUnlocks} unlocks`}let Y=U(O),q=x?`${t.profileUsername?M:R($)} (You)`:M.startsWith("0x")&&M.length===42?R(M):M,V=U(q),Q="safety-zone",X='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return k<=2?(Q="promotion-zone",X='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):k>=5&&(Q="relegation-zone",X='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${x?"user-highlight":""} ${Q}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${X}
          <span class="leaderboard-rank rank-${k}" style="flex-shrink: 0; margin-right: 4px;">${k}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${V}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(f.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${Y}</span>
        </div>
      </div>
    `}).join(""),s=v=>v.map((f,A)=>{let k=A+1,$=String(f.username||""),x=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),M=x&&t.profileUsername?t.profileUsername:f.displayName||$,O=x?`${t.profileUsername?M:R($)} (You)`:M.startsWith("0x")&&M.length===42?R(M):M,Y=U(O),q=Number(f.unlocks)||0,V=Number(f.points)||0,Q=f.status||`${q} briefing unlock${q===1?"":"s"}`;return`
      <div class="leaderboard-row global-row ${x?"user-highlight":""}" role="listitem">
        <div class="leaderboard-row-left">
          <span class="leaderboard-rank rank-${k}">${k}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${V} pts</strong>
          <span>${Q}</span>
        </div>
        <div class="leaderboard-row-right">
          <span style="color: #34d399; font-weight: 600;">Preseason</span>
        </div>
      </div>
    `}).join(""),n=(v,f)=>{v&&(v.innerHTML=`
      <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        ${Array.from({length:f}).map(()=>`
          <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
            <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
              <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
            <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        `).join("")}
      </div>
    `)},i=()=>{let v=document.getElementById("leaderboardListContainer");n(v,6),fetch(C("/api/leaderboard/preseason")).then(f=>f.json()).then(f=>{let A=f.players||[];v&&(v.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the preseason leaderboard yet. Unlock a daily AI briefing to join!</p>`:s(A))}).catch(f=>{console.error("Failed to load preseason leaderboard:",f),v&&(v.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading preseason leaderboard. Please try again.</p>`)})},l=()=>{let v=document.getElementById("season1LeaderboardListContainer");n(v,6),fetch(C("/api/leaderboard/season1")).then(f=>f.json()).then(f=>{let A=f.map((k,$)=>{let x=$+1,M=null;return x<=6?M=1:x<=12&&(M=2),{username:k.wallet_address,displayName:k.username,points:k.points,status:`${k.wins} wins, ${k.losses} losses`,totalTrades:k.total_trades,aiBriefingUnlocks:k.ai_briefing_unlocks,globalRank:x,prizeEligible:x<=10,nextSeasonDivision:M}});if(v)if(G==="global")v.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in Season 1.</p>`:a(A);else{let k=document.getElementById("season1DivisionSelector"),$=k?Number(k.value):1,x=A.filter(M=>M.nextSeasonDivision===$);v.innerHTML=x.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in this division.</p>`:o(x)}}).catch(f=>{console.error("Failed to load Season 1 archive:",f),v&&(v.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading Season 1 leaderboard archive. Please try again.</p>`)})},c=v=>{G=v,document.querySelectorAll("[data-season1-view]").forEach(f=>{f.classList.toggle("active",f.dataset.season1View===v)}),document.getElementById("season1DivisionControls")?.toggleAttribute("hidden",v!=="division"),document.getElementById("season1GlobalControls")?.toggleAttribute("hidden",v!=="global"),document.getElementById("season1PrizeBox")?.toggleAttribute("hidden",v!=="global"),l()};i(),Z&&c(G);let u=document.getElementById("archiveExpandBtn"),p=document.getElementById("archiveContent"),d=document.getElementById("archiveChevron");u?.addEventListener("click",()=>{Z=!Z,p&&(p.style.display=Z?"block":"none"),d&&(d.style.transform=Z?"rotate(180deg)":"rotate(0deg)"),Z&&c(G)}),document.querySelectorAll("[data-season1-view]").forEach(v=>{v.addEventListener("click",()=>{let f=v.dataset.season1View==="division"?"division":"global";c(f)})}),document.getElementById("season1DivisionSelector")?.addEventListener("change",()=>{l()}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){y("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let f=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,f.toFixed(2)),t.walletBalance=f.toFixed(2),y("Claimed $100 USDC mock credits!"),D(),sr()}else y("Opening Circle Faucet..."),window.open(Ve,"_blank")});let g=document.getElementById("howItWorksBtn"),T=document.getElementById("howItWorksModal"),B=document.getElementById("closeRulesModalBtn");g?.addEventListener("click",()=>{T&&T.classList.add("active")}),B?.addEventListener("click",()=>{T&&T.classList.remove("active")}),T?.addEventListener("click",v=>{v.target===T&&T.classList.remove("active")})},nr=()=>{t.activeSurface="feed",t.selectedMarketId=null,He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),le?.toggleAttribute("hidden",!0),Me?.classList.remove("active"),Ae?.classList.add("active"),Le?.classList.remove("active"),w?.classList.remove("markets-list")},Pa=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",At=e=>{let r=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},a=t.marketSnapshots[e.id];if(te(e)){let g=a?.resolvedOptionId||null,T=!!g,B=T&&r.optionId===g,v=sa(r,a),f=B?v:0,A=ae(e).find(x=>x.id===g)?.label,k=!!r.claimedAt||_e().has(e.id),$=!!t.claimingMarketIds[e.id];return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${T?`Resolved: ${U(A||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${U(r.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${H(r.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${H(f)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${T?"":`Closes ${e.closes}`}</span>
          ${T?k?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':$?'<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>':B?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(f)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let o=Pa(a?.outcome),s=Zt(r,a),n=s.reduce((g,T)=>Math.max(g,T.payout),0),i=r.yesSharesUsdc+r.noSharesUsdc,l=a?.outcome??0,c=_e().has(e.id),u=l===1?r.yesSharesUsdc:l===2?r.noSharesUsdc:0,p=l===1?a?.yesSharesUsdc??0:l===2?a?.noSharesUsdc??0:0,d=a?.volumeUsdc??0,b=u>0&&p>0?u/p*d:0,m=l===0?"":c?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':b>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(b)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${H(n)}</strong></div>
        ${s.map(g=>`
          <div><span>${g.label}</span><strong>${H(g.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${H(i)} total shares`:""}</span>
        ${m||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Ca=async e=>{if(!t.walletAddress){y("Please sign in first.");return}let r=Te().find(o=>o.id===e),a=r?K(r):"";if(!r||!a){y("Market is not available.");return}try{t.claimingMarketIds[r.id]=!0,F(),P("claim_attempt"),ct();let o=await mr(a,t.walletAddress);P("claim_success"),o.won&&aa(r.id),delete t.marketPositions[r.id],delete t.marketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await ne(t.walletAddress),await z(),y(o.won?`Claimed $${H(o.amountUsdc)}`:"No payout to claim"),D(),F()}catch(o){P("claim_failed"),y(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[r.id],F()}},Ia=e=>{if(!e)return"";let r=t.referralData,a=r?.referrals?.length?r.referrals.map(s=>{let n=s.displayName||R(s.walletAddress),i=s.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${U(n)}</strong>
            <span>${R(s.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${s.used}/${s.maxUses}</strong>
            <span>${i?"Expired":`${s.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!r?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!r?`
        <div class="portfolio-referral-message">
          <span>${U(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:r?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${U(r.code)}">
              <span>Invite code</span>
              <strong>${U(r.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${U(r.inviteLink)}">
              <span>Invite link</span>
              <strong>Copy link</strong>
            </button>
          </div>
          <div class="portfolio-referral-metrics">
            <div><span>Joined referrals</span><strong>${r.activeReferralCount}</strong></div>
            <div><span>Bonus earned</span><strong>+${r.totalEarned} pts</strong></div>
          </div>
          <button type="button" class="portfolio-referral-toggle" data-open-referrals>
            ${t.referralPanelOpen?"Hide referral details":"View referral details"}
          </button>
          ${t.referralPanelOpen?`
            <div class="portfolio-referral-details">
              ${a}
              <p>When you and a direct referral both win the same Daily market, you earn +10 pts. Max 3 referrals per market. Each referral can help on 5 winning markets.</p>
            </div>
          `:""}
        `:'<div class="portfolio-referral-message">Preparing your invite tools...</div>';return`
    <section class="portfolio-referral-card">
      <div class="portfolio-referral-head">
        <div>
          <span>Referral hub</span>
          <h2>Invite friends. Win together.</h2>
        </div>
        <button type="button" data-refresh-referrals ${t.loadingReferralData?"disabled":""}>Refresh</button>
      </div>
      <p>Earn bonus points only when you and your direct referrals win the same Daily market.</p>
      ${o}
    </section>
  `},F=()=>{if(!w||!S)return;He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),le?.toggleAttribute("hidden",!0),Me?.classList.remove("active"),Ae?.classList.remove("active"),Le?.classList.add("active"),document.body.classList.remove("detail-mode"),S.hidden=!0,w.hidden=!1,w.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&xe(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&Bt(),z({force:!t.hasLoadedPortfolioPositions}));let r=_e(),a=Te().filter(d=>{let b=t.marketPositions[d.id];return r.has(d.id)||b&&(b.yesSharesUsdc+b.noSharesUsdc>0||(b.optionSharesUsdc||0)>0)}),o=a.filter(d=>(t.marketSnapshots[d.id]?.outcome??0)===0),s=a.filter(d=>(t.marketSnapshots[d.id]?.outcome??0)!==0),n=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?R(t.walletAddress):"Anonymous"),l=U(i),c=U(t.profileUsername||""),u=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${U(t.profileNotice.message)}</div>`:"",p=i.charAt(0).toUpperCase();w.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${Ia(n)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${p}</span>
          </div>
          <div class="profile-details" style="display: flex !important; flex-direction: column !important; min-width: 0 !important;">
            <div class="username-display-row" style="display: flex !important; align-items: center !important; gap: 8px !important;">
              <span class="profile-username" style="font-family: 'Space Grotesk', sans-serif !important; font-size: 1.08rem !important; font-weight: 750 !important; color: var(--market-text-main) !important; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis !important; max-width: 180px !important;">${l}</span>
              ${n?`
                <button type="button" class="edit-username-btn" id="editUsernameBtn" style="background: transparent !important; border: none !important; color: var(--market-text-muted) !important; cursor: pointer !important; padding: 4px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
                </button>
              `:""}
            </div>
            ${n?`
              <div class="wallet-address-row" style="display: flex !important; align-items: center !important; gap: 8px !important; margin-top: 4px !important;">
                <small style="color: var(--market-text-muted) !important; font-family: monospace !important; font-size: 0.78rem !important;">${R(t.walletAddress)}</small>
                <button type="button" class="copy-address-btn" data-address="${t.walletAddress}" style="background: rgba(59,130,246,0.06) !important; border: 1px solid var(--market-border) !important; color: var(--market-text-muted) !important; border-radius: 4px !important; padding: 2px 6px !important; font-size: 0.7rem !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 4px !important; transition: all 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy
                </button>
              </div>
            `:'<small style="color: var(--market-text-muted) !important; font-size: 0.8rem !important; display: block !important; margin-top: 4px !important;">Connect wallet to customize profile</small>'}
          </div>
        </div>

        ${n?`
          <div class="profile-username-edit-form" id="usernameEditForm" style="display: none !important; align-items: center !important; gap: 8px !important; margin-top: 16px !important; width: 100% !important;">
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${c}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${u}


        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${be("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
            </strong>
          </div>
          <div style="display: flex !important; align-items: center !important; gap: 8px !important;">
            ${n?`
              <a href="https://faucet.circle.com/" target="_blank" rel="noreferrer" class="faucet-link" style="background: transparent !important; border: 1px solid var(--market-border) !important; color: var(--market-text-muted) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.8rem !important; text-decoration: none !important; display: inline-flex !important; align-items: center !important; gap: 6px !important; transition: all 0.2s ease !important;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                Get USDC
              </a>
            `:""}
            <button type="button" class="connect-wallet-btn" data-connect-wallet style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 16px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;" ${t.walletConnecting?"disabled":""}>
              ${t.walletConnecting?"Connecting...":t.walletAddress?"Disconnect":"Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
      </div>
      <div class="portfolio-section-tabs">
        <span>Open ${o.length}</span>
        <span>Finalized ${s.length}</span>
      </div>
      ${t.loadingPortfolioPositions?ba(2):t.walletAddress?a.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${o.length?o.map(At).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${s.length?s.map(At).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},h=()=>{if(Nt.forEach(e=>{let r=e.dataset.bottomNav;e.classList.toggle("active",r==="saved"?t.showSaved:r===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){or();return}if(t.activeSurface==="portfolio"){F();return}if(t.activeSurface==="leaderboard"){sr();return}nr(),Yt(),ve(),Ma(),j&&(j.value=t.activeArchiveDate??"")};Qe.textContent=_t();le?.addEventListener("click",e=>{let a=e.target.closest("[data-category]");a&&(t.activeCategory=a.dataset.category,window.history.pushState({},"","#feed"),J(),h(),Ie(),re(t.activeCategory))});w?.addEventListener("input",e=>{let r=e.target;if(r.id!=="newsSearchInput")return;let a=r.selectionStart??r.value.length,o=r.selectionEnd??r.value.length;t.newsSearchQuery=r.value,ve();let s=w?.querySelector("#newsSearchInput");s&&(s.focus(),s.setSelectionRange(a,o))});Me?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),J(),h()});Ae?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),J(),h(),Ie(),re(t.activeCategory)});Le?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),J(),h()});oe?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Ce()):Ue()});document.addEventListener("click",e=>{let r=e.target,a=r.closest(".copy-address-btn");if(a){let i=a.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{y("Wallet address copied!")})}let o=r.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&Ca(i);return}if(r.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&xe(),F();return}if(r.closest("[data-close-referrals]")){t.referralPanelOpen=!1,F();return}if(r.closest("[data-refresh-referrals]")){t.referralError=null,xe(),F();return}let s=r.closest("[data-copy-referral-code]");if(s){let i=s.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>y("Invite code copied"));return}let n=r.closest("[data-copy-referral-link]");if(n){let i=n.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>y("Invite link copied"));return}r.closest("[data-connect-wallet]")&&(t.walletAddress?Pt():Ue())});Nt.forEach(e=>{e.addEventListener("click",()=>{let r=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=r==="saved",r==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):r==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):r==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),Ie(),re(t.activeCategory),r==="saved"&&(ta(),rt(),Se())),J(),h()})});j?.addEventListener("change",()=>{t.activeArchiveDate=j.value||null,window.history.pushState({},"","#feed"),J(),h(),re(t.activeCategory)});Mr?.addEventListener("click",()=>{t.activeArchiveDate=null,j&&(j.value=""),window.history.pushState({},"","#feed"),J(),h(),re(t.activeCategory)});w?.addEventListener("click",async e=>{let r=e.target;if(r.closest("#editUsernameBtn")){let m=w?.querySelector(".username-display-row"),g=w?.querySelector("#usernameEditForm");if(m&&g){m.style.display="none",g.style.display="flex";let T=g.querySelector("#usernameInput");T&&T.focus()}return}if(r.closest("#cancelUsernameBtn")){let m=w?.querySelector(".username-display-row"),g=w?.querySelector("#usernameEditForm");m&&g&&(m.style.display="flex",g.style.display="none");return}let s=r.closest("#saveUsernameBtn");if(s){let g=w?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(g){let T=g.value.trim().slice(0,15),B=s,v=B.textContent||"Save";B.disabled=!0,B.textContent="Saving...",ea(T),t.profileNotice=null;try{t.walletAddress&&await pe(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},y("Username updated"),F()}catch(f){let A=f instanceof Error?f.message:"Username save failed";t.profileNotice={type:"error",message:A},y(A),B.disabled=!1,B.textContent=v,F()}}return}let n=r.closest("[data-timeframe]");if(n){let m=n.dataset.timeframe;t.activeMarketTimeframe=m,or();return}let i=r.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,P("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),h(),window.scrollTo({top:0,behavior:"smooth"});return}if(r.closest(".read-tweet-btn")){e.stopPropagation();let m=r.closest("[data-story-id]");m&&Ze(Number(m.dataset.storyId),!0);return}let c=r.closest("[data-thread-story-id]"),u=r.closest("[data-export-id]"),p=r.closest("[data-export-action]"),d=r.closest("[data-story-id]");if(c){e.stopPropagation();let m=t.stories.find(g=>g.id===Number(c.dataset.threadStoryId));m&&jr(m);return}let b=r.closest(".mobile-bookmark-btn, .bookmark-button");if(b){e.stopPropagation();let m=b.dataset.bookmarkUrl||"",g=t.stories.find(T=>T.sourceUrl===m);if(!g)return;g.saved=!g.saved,g.saved?ie.add(m):ie.delete(m),Tr(),y(g.saved?"Saved to your list":"Removed from saved"),ve();return}if(p){e.stopPropagation(),xa(Number(p.dataset.exportStoryId),p.dataset.exportAction);return}if(u){e.stopPropagation();let m=Number(u.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===m?null:m,ve();return}d&&(r.closest("a")||Ze(Number(d.dataset.storyId),!0))});w?.addEventListener("keydown",e=>{let a=e.target.closest("[data-story-id]");!a||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Ze(Number(a.dataset.storyId)))});S?.addEventListener("click",e=>{let r=e.target,a=r.closest("[data-unlock-briefing]");if(a){let p=t.stories.find(d=>d.id===Number(a.dataset.unlockBriefing));p&&Xe(p);return}let o=r.closest("[data-unlock-briefing-url]");if(o){let p=decodeURIComponent(o.dataset.unlockBriefingUrl||""),d=Rr(p);d&&(ce(d)?$e(d):Xe(d));return}if(r.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),h();return}if(r.closest("#openTradeDrawerBtn")){let p=I.find(m=>m.id===t.selectedMarketId);if(p){if(je(p,t.marketSnapshots[p.id])){y("This market is resolved and can no longer be traded.");return}if(jt(p,t.marketSnapshots[p.id])){y("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,P("trade_drawer_open");let d=S.querySelector("#tradeDrawer"),b=S.querySelector("#tradeDrawerBackdrop");d?.classList.add("open"),b?.classList.add("open");return}if(r.closest("#closeTradeDrawerBtn")||r.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let p=S.querySelector("#tradeDrawer"),d=S.querySelector("#tradeDrawerBackdrop");p?.classList.remove("open"),d?.classList.remove("open");return}if(r.closest("#shareWhatsAppBtn")){let p=I.find(d=>d.id===t.selectedMarketId);if(p){let d=La(p),b=`https://api.whatsapp.com/send?text=${encodeURIComponent(d)}`;window.open(b,"_blank")}return}let s=r.closest("[data-market-trade]");if(s&&t.selectedMarketId){let p=s.dataset.marketTrade;da(t.selectedMarketId,p);return}let n=r.closest("[data-market-option-trade]");if(n&&t.selectedMarketId){let p=n.dataset.marketOptionTrade||t.marketTradeOptionId||"";$a(t.selectedMarketId,p);return}let i=r.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,h();return}let l=r.closest("[data-market-trade-side]");if(l){if(l.disabled||l.classList.contains("disabled"))return;let p=I.find(m=>m.id===t.selectedMarketId),d=p?t.marketPositions[p.id]:void 0,b=l.dataset.marketTradeSide;if(!se(t.marketOrderMode,b,d))return;t.marketTradeSide=b,h();return}let c=r.closest("[data-market-order-mode]");if(c){t.marketOrderMode=c.dataset.marketOrderMode;let p=I.find(b=>b.id===t.selectedMarketId),d=p?t.marketPositions[p.id]:void 0;t.marketTradeSide=dt(t.marketOrderMode,t.marketTradeSide,d),t.marketTradeAmount=Ee(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,d),h();return}r.closest("[data-back-to-feed]")&&Fr()});S?.addEventListener("input",e=>{let r=e.target;if(!r.matches("[data-market-amount]"))return;let a=I.find(c=>c.id===t.selectedMarketId),o=a?t.marketSnapshots[a.id]:void 0,s=a?t.marketPositions[a.id]:void 0,n=Number(r.value);t.marketTradeAmount=Number.isFinite(n)?n:0;let i=a&&te(a)?t.marketTradeAmount:Xt(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),l=S.querySelector(".market-inline-payout strong");l&&(l.textContent=`$${H(i)}`)});S?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});S?.addEventListener("focusout",e=>{let r=e.target;if(r.matches("[data-market-amount]")){let a=I.find(s=>s.id===t.selectedMarketId),o=a?t.marketPositions[a.id]:void 0;t.marketTradeAmount=Ee(Number(r.value)||0,t.marketOrderMode,t.marketTradeSide,o),r.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Ce);window.addEventListener("hashchange",Ce);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,r=await ne(t.walletAddress);t.walletBalance=r,D(),(!e||parseFloat(e)===0)&&parseFloat(r)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),hr())}});Ye?.addEventListener("click",()=>{if(!Ge||!Ye)return;let e=!Ge.hidden;Ge.hidden=e,Ye.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let r=e.target;!r.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,ve());let a=r.closest("[data-menu-action]");if(!a)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};L&&(L.textContent=o[a.dataset.menuAction??"today"]),a.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,j&&(j.value=""),J(),Ie(),re(t.activeCategory)),a.dataset.menuAction==="saved"&&(nr(),rt(),Se(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),J(),h())});var Ea=async()=>{try{let e=await fetch(C("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),h())}catch(e){console.error("Failed to prefetch unlock config:",e)}},Ba=()=>{window.setInterval(async()=>{try{let e=new AbortController,r=window.setTimeout(()=>e.abort(),3500),a=await fetch(C("/api/markets"),{signal:e.signal});if(window.clearTimeout(r),a.ok){let o=await a.json();Array.isArray(o)&&o.length>0&&(I=o,t.activeSurface==="markets"&&h())}}catch(e){console.warn("Background market poll failed:",e)}},3e4)};h();D();Ea();re(t.activeCategory);Ba();$r().then(()=>{ia(),h(),D(),window.setTimeout(Oa,1200),Yr()});var Da=document.querySelector("#mobileArchiveCard"),ge=document.querySelector("#archiveControls");Da?.addEventListener("click",()=>{if(!ge)return;ge.classList.toggle("mobile-open")&&setTimeout(()=>ge.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Na=document.querySelector("#archivePill");Na?.addEventListener("click",e=>{if(e.stopPropagation(),!ge)return;ge.classList.toggle("mobile-open")&&setTimeout(()=>ge.scrollIntoView({behavior:"smooth",block:"center"}),50)});var De=!1,Lt=!1,Oa=()=>{Lt||(Lt=!0,(async()=>{let e=await Ne();if(De=!!e,e){t.walletConnecting=!0,D();try{let r=await fr();De=!1,t.walletConnecting=!1,r?(t.walletAddress=await Ne(),t.walletAddress&&(fe(),t.walletBalance=await ne(t.walletAddress),await z()),D(),t.activeSurface==="portfolio"&&h()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),y("Session expired. Please sign in again."),D(),h())}catch(r){console.warn(r),De=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),y("Session expired. Please sign in again."),D(),h()}}await gr(r=>{De||(t.walletAddress=r,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),r&&pe(!1).catch(a=>console.error("Failed to report leaderboard entry:",a)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,D(),r?(xe(),ne(r).then(a=>{t.walletBalance=a,D(),t.activeSurface==="portfolio"&&h()}),z()):t.activeSurface==="portfolio"&&h())})})())};P("app_open");document.addEventListener("click",e=>{let a=e.target.closest("a, button");if(a){let o=a.className||"",s=typeof o=="string"?o:a.getAttribute("class")||"",n=a.getAttribute("href")||"";!(a.hasAttribute("data-unlock-briefing")||a.hasAttribute("data-unlock-briefing-url")||a.classList.contains("summary-btn")||a.textContent?.trim()==="AI briefing"||a.textContent?.trim().includes("Unlock via"))&&(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||a.textContent?.trim()==="Open source")&&!s.includes("disabled")&&n!=="#"&&P("open_source")}},!0);
