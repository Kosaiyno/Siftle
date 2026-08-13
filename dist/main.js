import"./chunks/chunk-ZUUPKAA6.js";var Oe=[];var st="https://faucet.circle.com/",xt="siftle_backend_wallet_migration_notice",Qe=null,D=()=>(Qe||(Qe=import("./chunks/arc-L5NGGVTX.js")),Qe),R=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,va=async()=>(await D()).connectArcWallet(),ce=async e=>(await D()).readArcUsdcBalance(e),ba=async(e,a,r,o)=>(await D()).payAiBriefingUnlock(e,a,r,o),ya=e=>{D().then(a=>a.resolveLocalTestMarketYes(e))},ka=async e=>(await D()).readArcMarketSnapshot(e);var Ht=async(e,a)=>(await D()).readArcMarketState(e,a),wa=async(e,a,r,o,s,n,i)=>(await D()).executeArcMarketOrder(e,a,r,o,s,n,i),Sa=async(e,a,r,o,s)=>(await D()).executeArcOptionMarketOrder(e,a,r,o,s),Rt=()=>{D().then(e=>e.disconnectArcWallet())},xa=async(e,a)=>(await D()).claimArcMarketPayout(e,a),je=async()=>(await D()).getConnectedArcWallet(),$a=async()=>(await D()).validateArcSession(),Ta=async e=>(await D()).subscribeArcWallet(e),Ma=async()=>(await D()).triggerGatewayWarmup();var Aa="https://siftle.onrender.com",La=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?Aa:""},Pa=La(),I=e=>`${Pa}${e}`,zt="siftle_theme",Ua=()=>{try{return window.localStorage.getItem(zt)==="light"?"light":"dark"}catch{return"dark"}},$e=Ua(),Ft="organic";function Ca(){try{let e=localStorage.getItem("siftle_traffic_source");if(!e){let a=new URLSearchParams(window.location.search),r=a.get("ref")||a.get("utm_source");if(r)r=r.trim().toLowerCase(),r==="twitter"&&(r="x"),r==="instagram"&&(r="ig"),r==="whatsapp"&&(r="wa"),r==="discord"&&(r="dc"),(r==="google_search"||r==="google-search")&&(r="google"),["x","ig","wa","dc","google","organic","briefing"].includes(r)?e=r:e=r.slice(0,20);else{let o=document.referrer;o&&(/twitter\.com|x\.com|t\.co/i.test(o)?e="x":/instagram\.com/i.test(o)?e="ig":/whatsapp\.com|wa\.me/i.test(o)?e="wa":/discord\.com|discordapp\.com/i.test(o)?e="dc":/google\.com|google\.co/i.test(o)&&(e="google"))}e||(e="organic"),localStorage.setItem("siftle_traffic_source",e)}Ft=e}catch(e){console.error("Failed to initialize traffic source:",e)}}Ca();function U(e,a,r){fetch(I("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e,source:Ft,storyUrl:a,headline:r})}).catch(o=>console.error("Failed to track event:",o))}var t={activeSurface:"feed",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:2,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},aiSummaryProofs:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{},portfolioFilter:"open"};var G="global",X=!1,ee=null,$t=!1,Tt=!1,Mt=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";Mt&&localStorage.setItem("siftle_pending_referral_code",Mt.trim().toUpperCase());var jt=20,E=Oe,Ia=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},Le=()=>Ia(t.portfolioMarketPreviews,E,Oe),Ea=async()=>{t.loadingMarkets=!0,E.length===0&&(E=Oe);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(I("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(E=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Wt=async()=>{try{let e=await fetch(I("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},qt="siftle.savedUrls",pe=new Set,mt=()=>{try{let e=localStorage.getItem(qt)||"[]",a=JSON.parse(e);pe=new Set(a.filter(Boolean))}catch{pe=new Set}},Ba=()=>{try{localStorage.setItem(qt,JSON.stringify(Array.from(pe)))}catch{}},Te=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!pe.has(e.sourceUrl)};mt();Te();var nt=document.querySelector("#dateLabel"),ae=document.querySelector("#categoryTabs"),S=document.querySelector("#storyList"),L=document.querySelector("#storyDetail"),Xe=document.querySelector("#menuButton"),et=document.querySelector("#menuPanel"),C=document.querySelector("#menuStatus"),j=document.querySelector("#archiveDateSelect"),At=document.querySelector("#archiveStatus"),_a=document.querySelector("#todayButton"),Ye=document.querySelector(".brief-hero"),Ge=document.querySelector("#archiveControls"),Pe=document.querySelector("[data-surface='markets']"),Ue=document.querySelector("[data-surface='feed']"),Ce=document.querySelector("[data-surface='portfolio']"),le=document.querySelector("#walletButton"),Se=document.querySelector("[data-theme-toggle]"),Da=document.getElementById("guideToggleButton"),Yt=Array.from(document.querySelectorAll("[data-bottom-nav]")),tt,Na=()=>{if(!Se)return;let a=`Switch to ${$e==="light"?"dark":"light"} mode`;Se.setAttribute("aria-label",a),Se.title=a,Se.dataset.activeTheme=$e},Gt=e=>{$e=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(zt,e)}catch{}Na()};Gt($e);var _=()=>{if(le){let e=le.querySelector(".wallet-button-label");le.classList.toggle("connected",!!t.walletAddress),le.disabled=t.walletConnecting,le.setAttribute("aria-label",t.walletAddress?`Wallet ${R(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),le.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${R(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",_);Se?.addEventListener("click",()=>{Gt($e==="light"?"dark":"light")});Da?.addEventListener("click",()=>{Oa()});var Oa=()=>{let e=document.createElement("div");e.className="guide-overlay",e.innerHTML=`
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

      <div class="powered-by-section">
        <span class="powered-by-label">Powered by</span>
        <div class="logo-carousel">
          <!-- 0G (Light / Dark) -->
          <img src="./assets/0G_Black_logo.png" class="powered-logo light-only" alt="0G" />
          <img src="./assets/0G-Logo-Purple_Hero.png" class="powered-logo dark-only" alt="0G" />
          <!-- Arc (Light / Dark) -->
          <img src="./assets/Arc_Logo_Black.png" class="powered-logo light-only" alt="Arc" />
          <img src="./assets/Arc_Logo_White.png" class="powered-logo dark-only" alt="Arc" />
          <!-- Shelby (Light / Dark) -->
          <img src="./assets/Group 1000002712 (2).png" class="powered-logo light-only" alt="Shelby" />
          <img src="./assets/Group 1000002712 (1).png" class="powered-logo dark-only" alt="Shelby" />
          <!-- Circle (Light / Dark) -->
          <img src="./assets/circle-logo.png" class="powered-logo light-only" alt="Circle" />
          <img src="./assets/circle-logo-ondark.png" class="powered-logo dark-only" alt="Circle" />
        </div>
      </div>
    </div>
  `,document.body.appendChild(e);let a=e.querySelector("#guideClose"),r=e.querySelector("#guideStartBtn"),o=()=>e.remove();a.addEventListener("click",o),r.addEventListener("click",o),e.addEventListener("click",s=>{s.target===e&&o()})},Ha=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(I("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&k("Referral connected"))}catch(r){console.warn(r)}},Me=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(I(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&F()}}},Ie=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,U("wallet_connect_start"),_();try{let e=await va();if(e){U("wallet_connect_success");let a=sessionStorage.getItem("siftle_landing_url"),r=sessionStorage.getItem("siftle_landing_headline"),o=sessionStorage.getItem("siftle_signup_tracked");a&&!o&&(U("briefing_referral_signup",a,r||void 0),sessionStorage.setItem("siftle_signup_tracked","true")),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),t.walletBalance=await ce(e),await Ha(e),Me(),await z(),fe(!0).catch(n=>console.error("Failed to report leaderboard entry:",n));let s=localStorage.getItem(xt);s?(localStorage.removeItem(xt),k(s)):k("Connected to Arc Testnet"),window.location.hash="#portfolio",Be()}}catch(e){U("wallet_connect_failed"),k(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,_()}}},k=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),tt&&window.clearTimeout(tt),tt=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=k;var Ra=(e,a,r,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
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
        You have successfully <strong>${e==="buy"?"bought":"exited"}</strong> <strong>${a} USDC</strong> worth of <strong>${r}</strong> shares in:
      </p>
      <div class="success-modal-market-title">${o}</div>
      <button class="success-modal-action-btn" type="button">Awesome</button>
    </div>
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let n=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",n),s.querySelector(".success-modal-action-btn")?.addEventListener("click",n),s.addEventListener("click",i=>{i.target===s&&n()})},J=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},Jt=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},at=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(t.activeCategory==="Personalized"){let o=Ne(),s=[...o.clubs,...o.managers,...o.players].map(n=>n.toLowerCase()).filter(Boolean);if(s.length>0){let n=`${e.headline} ${e.summary||""} ${e.source||""}`.toLowerCase();if(!s.some(l=>n.includes(l)))return!1}}let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),We=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,za=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Fa=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let s=r.slice(0,a).join(" "),n=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return n>s.length*.45?s.slice(0,n+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},Lt=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/[^\S\r\n]+/g," ").replace(/\r\n/g,`
`).replace(/\n{3,}/g,`

`).trim(),za(a)?"":Fa(a)},ue=(e,a)=>Lt(a||"")||Lt(e.summary)||e.headline,ja=e=>{let r=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!r||!window.html2canvas)return;let o=document.createElement("div");o.className="briefing-export-staging";let s=r.cloneNode(!0);s.classList.add("briefing-export-surface"),o.appendChild(s),document.body.appendChild(o);let n=document.documentElement.dataset.theme==="light";window.html2canvas(s,{backgroundColor:n?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(i=>{let l=document.createElement("a");l.download="siftle-briefing.png",l.href=i.toDataURL("image/png"),l.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{o.remove()})};window.downloadBriefingCard=ja;var Wa=e=>e.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),qa=(e,a)=>{let r="";if(a)try{r=decodeURIComponent(a)}catch{r=a}let o=window.location.origin,s=window.location.pathname,n=t.stories.find(c=>c.id===e||r&&c.sourceUrl===r),i=n?Wa(n.headline):e>0?`story-${e}`:"",l=e>0?`${o}/story/${i}?utm_source=briefing&url=${encodeURIComponent(n?.sourceUrl||r)}`:r?`${o}/api/redirect?url=${encodeURIComponent(r)}&source=briefing`:`${o}/story/briefing?utm_source=briefing`;navigator.clipboard.writeText(l).then(()=>{k("Shareable link copied to clipboard!")}).catch(()=>{k("Unable to copy link")})};window.copyBriefingLink=qa;var ft=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(a){let n=a.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${n}</h3>
    `}r[0].trim()&&(o+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let s="";for(let n=1;n<r.length;n+=2){let i=r[n].trim().toUpperCase(),l=r[n+1]?r[n+1].trim():"";if(!l)continue;let c="";if(i==="KEY POINTS"){let u=l.split(/(?:•|\*|-)\s+/).map(d=>d.trim()).filter(Boolean);u.length>0?c=`<ul class="briefing-list">${u.map(d=>`<li>${d}</li>`).join("")}</ul>`:c=`<p class="briefing-text">${l}</p>`}else c=`<p class="briefing-text">${l}</p>`,i==="TAKEAWAY"&&(s=l);let p=i.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${p}-section">
        <h4 class="briefing-title">${i}</h4>
        ${c}
      </div>
    `}return o+="</div>",a&&(o+=`
      <div class="share-briefing-container">
        <button type="button" class="share-briefing-btn copy-link-btn" onclick="window.copyBriefingLink?.(${a.id}, '${encodeURIComponent(a.sourceUrl||"")}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          <span>Copy Link</span>
        </button>
        <button type="button" class="share-briefing-btn" onclick="window.downloadBriefingCard?.(event.currentTarget)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Download Card</span>
        </button>
      </div>
    `),o},Ee=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${T(a)}</p>`:""},Ya=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},gt=e=>`siftle_ai_briefing_unlock_${Ya()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Kt=e=>localStorage.getItem(gt(e))||"",Ga=e=>{localStorage.removeItem(gt(e))},me=e=>{let r=new URLSearchParams(window.location.search).get("url");return r&&r===e.sourceUrl?!0:!!Kt(e)},Vt=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:pe.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Ja=e=>{let a=t.stories.find(s=>s.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=E.find(n=>n.id===t.selectedMarketId);if(s){let n=Je(s).evidence.find(i=>i.sourceUrl===e);if(n)return Vt(s,n)}}return null},ht=(e,a)=>{let r=rr(e,a);return r===null?null:r-jt*60*1e3},Zt=(e,a)=>{let r=ht(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},Qt=(e,a)=>{let r=ht(e,a);return r===null?null:Date.now()>=r?`Locked ${jt}m before kickoff`:null},Ka=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled,s=!!t.walletAddress;return`
    <div class="briefing-section">
      ${Ee(e)}
      ${a?`
          ${ye()}
        `:`
          <p class="briefing-text">
            ${s?o?`Pay a <strong>${r}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${r}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`:"Sign in to access AI briefings."}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${s?o?"Unlock via Circle x402":"AI briefing":"Sign in and access AI briefing"}
          </button>
        `}
    </div>
  `},vt=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],bt=e=>`
  <div class="briefing-section">
    ${Ee(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,it=async(e,a=!1)=>{if(!t.walletAddress){k("Please sign in to unlock this briefing."),Ie();return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",U("ai_unlock_attempt"),g();try{let r=await fetch(I("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let s=Number(o.amountUsdc)||.05;try{let d=await fetch(I(`/api/summary/price?sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(d.ok){let v=await d.json();typeof v.priceUsdc=="number"&&(s=v.priceUsdc)}}catch(d){console.warn("Failed to retrieve autonomous price, falling back to default:",d.message)}let n=await ba(o.treasuryAddress,s,d=>{C&&(C.textContent=d),t.briefingStatusByUrl[e.sourceUrl]=d,g()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=`Briefing unlocked! Charged ${s} USDC (priced by Siftle AI Agent)`,g();let i=await fetch(I("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:n})}),l=await i.json();if(!i.ok||!l.unlockToken)throw new Error(l.error||"AI briefing failed");localStorage.setItem(gt(e),l.unlockToken),U("ai_unlock_success");let c=sessionStorage.getItem("siftle_landing_url"),p=sessionStorage.getItem("siftle_landing_headline");c&&U("briefing_referral_unlock",c,p||void 0),(Number(l?.bonus?.points)||0)>0&&fe(!1).catch(d=>console.error("Failed to refresh leaderboard bonus:",d)),await Ae(e)}catch(r){U("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl];let o=r instanceof Error?r.message:String(r||""),s=o,n=o.toLowerCase();if(n.includes("session expired")||n.includes("sign in first")||n.includes("unauthorized")){try{(await D()).disconnectArcWallet()}catch{}t.walletAddress=null,t.walletBalance=null,s="Your session has expired. Please sign in again to unlock this briefing."}else(n.includes("balance")||n.includes("exceeds balance")||n.includes("transfer amount exceeds"))&&(s="Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC.");k(s)}finally{t.unlockingSummaryUrl=null,g()}}},Ae=async e=>{if(me(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=ue(e,e.ai_summary),U("view_summary"),C&&(C.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded");let r=new URLSearchParams(window.location.search).get("url");if(r&&r===e.sourceUrl){let o=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(o)||(sessionStorage.setItem(o,"true"),U("briefing_unlock",e.sourceUrl,e.headline))}g();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing through 0G...",g();try{let r=new URLSearchParams(window.location.search).get("url"),o=!!(r&&r===e.sourceUrl),s=await fetch(I("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Kt(e),isSharedLanding:o})});if(!s.ok){if(s.status===402){Ga(e),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",C&&(C.textContent="Unlock expired. Unlock again to continue."),g();return}throw new Error(`Summary request failed with ${s.status}`)}let n=await s.json();t.aiSummaries[e.sourceUrl]=ue(e,n.summary),t.aiSummaryProofs[e.sourceUrl]=n.proof,t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",C&&n.provider&&(C.textContent=n.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${n.provider}`);let l=new URLSearchParams(window.location.search).get("url");if(l&&l===e.sourceUrl){let c=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(c)||(sessionStorage.setItem(c,"true"),U("briefing_unlock",e.sourceUrl,e.headline))}}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",C&&(C.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,g()}}},lt=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);if(r){if(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),g(),r.type==="tweet"){window.scrollTo({top:0,behavior:"smooth"});return}a&&!me(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),g(),it(r,!0)):me(r)&&Ae(r),window.scrollTo({top:0,behavior:"smooth"})}},Va=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),g(),Xt(e),window.scrollTo({top:0,behavior:"smooth"})},Za=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.location.search?window.history.pushState({},"",window.location.pathname+"#feed"):window.history.pushState({},"","#feed"),g(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Xt=async e=>{try{let a=await fetch(I(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),C&&(C.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),k("That timeline no longer has a verified past update"),C&&(C.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,g()}};function Be(){let e=window.location.pathname.startsWith("/story/"),a=window.location.pathname.startsWith("/thread/");if(e||a){let o=window.location.pathname.split("/").pop()||"",s=e?`#story-${o}`:`#thread-${o}`;window.history.replaceState({},"",`${window.location.pathname}${window.location.search}${s}`)}if(window.location.hash==="#resolve-local-yes"){let o=E.find(s=>s.id==="siftle-local-test-2")||E.find(s=>s.timeframe==="Daily"&&K(s).startsWith("0x00000000000000000000000000000000000001"));if(o){ya(K(o)),mr(o,"yes"),delete t.marketSnapshots[o.id],delete t.marketPositions[o.id],delete t.checkedMarketSnapshots[o.id],delete t.loadingMarketSnapshots[o.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),k("Local test market resolved YES"),z().then(()=>{fe(!0).catch(s=>console.error("Failed to report leaderboard entry:",s)),_(),F()});return}}let r=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||r){t.activeSurface="markets",t.selectedMarketId=r?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,g();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let o=window.location.hash.match(/^#story-(.+)$/),s=window.location.hash.match(/^#thread-(\d+)$/),i=new URLSearchParams(window.location.search).get("url"),l;if(i){sessionStorage.setItem("siftle_landing_url",i);let u=t.stories.find(v=>v.sourceUrl===i);u?.headline?sessionStorage.setItem("siftle_landing_headline",u.headline):sessionStorage.getItem("siftle_landing_headline")||sessionStorage.setItem("siftle_landing_headline","Archived Story");let d=`siftle_ref_tracked_${encodeURIComponent(i)}`;if(sessionStorage.getItem(d)||(sessionStorage.setItem(d,"true"),U("briefing_referral",i,u?.headline||"Archived Story")),l=t.stories.find(v=>v.sourceUrl===i),!l&&o){let v=i;t.loadingSummaryUrl!==v&&(t.loadingSummaryUrl=v,fetch(I(`/api/story?sourceUrl=${encodeURIComponent(v)}`)).then(h=>{if(!h.ok)throw new Error;return h.json()}).then(h=>{t.stories.some(x=>x.sourceUrl===h.sourceUrl)||(h.id=Math.max(9999,...t.stories.map(x=>x.id))+1,t.stories.push(h));let y=t.stories.find(x=>x.sourceUrl===h.sourceUrl);sessionStorage.setItem("siftle_landing_headline",y.headline),U("briefing_referral",i,y.headline),t.selectedStoryId=y.id,g(),Ae(y)}).catch(h=>{console.warn("Failed to load historical story from backend:",h)}).finally(()=>{t.loadingSummaryUrl=null}))}}else if(o){let u=Number(o[1]);isNaN(u)||(l=t.stories.find(d=>d.id===u))}let c=s?t.stories.find(u=>u.id===Number(s[1])):void 0,p=t.selectedStoryId!==null||t.selectedThreadUrl!==null;l?(t.selectedStoryId=l.id,t.selectedThreadUrl=null,t.activeThread=null,g(),Ae(l)):c?(t.selectedStoryId=null,t.selectedThreadUrl=c.sourceUrl,t.activeThread=null,g(),Xt(c)):i||(t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,g(),p&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"})));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g()}var dt=e=>{At&&(At.textContent=e)},Qa=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(ta(),g());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(I(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],Te(),t.hasLoadedFeed=!0,nt&&(nt.textContent=Jt(s.date??t.activeArchiveDate)),C)if(t.activeArchiveDate)C.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=s.archive?.provider==="shelby"?"Shelby":"local archive";C.textContent=`Latest published feed loaded from ${n}`}dt(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),Te(),C&&(C.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,g(),Be()}},Xa=async()=>{if(j)try{let e=await fetch(I("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),j.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),j.value=t.activeArchiveDate??"",dt(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),dt("Archive unavailable")}},_e=()=>{$t||($t=!0,Xa())},se=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Qa(e,a)},er=()=>{Tt||(Tt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&se(t.activeCategory,!0),_e()},8e3))};var W=e=>e==="Sports"?"Football":e,Re=e=>/^@/.test(String(e.source||""))||/(?:^|\/)(?:x|twitter)\.com\//i.test(String(e.sourceUrl||"")),ea=(e,a)=>{let r=e.trim();return r.length<=a?r:`${r.slice(0,Math.max(0,a-1)).trimEnd()}\u2026`},tr=e=>e.replace(/^@/,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ").filter(Boolean),ct=e=>{let a=String(e.source||W(e.category)).trim(),r=tr(a);if(r.length===0)return W(e.category);let o=r.filter((i,l)=>{let c=i.toLowerCase();return!(l>0&&["live","news","official"].includes(c))}),s=o.length>0?o:r,n="";for(let i of s){let l=n?`${n} ${i}`:i;if(l.length>18)break;n=l}return ea(n||s[0],18)},Pt=e=>{let a=String(e.headline||"").replace(/\s+/g," ").trim();if(!Re(e))return a;let r=a.replace(/https?:\/\/\S+/gi,"").replace(/\(Source:[^)]+\)\s*$/i,"").replace(/\s+/g," ").trim();if(/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(r))return`Latest from ${ct(e)}`;let o=r.replace(/^R to\s+@[^:]+:\s*/i,"").trim(),s=o.length>=24&&!/^(?:more here|watch more here)[:.!?]*$/i.test(o)?o:r||a;return ea(s,150)},ta=()=>{if(!ae)return;ae.hidden=!1;let e=t.activeCategory==="Personalized";ae.innerHTML=`
    <button class="category-tab ${e?"":"active"}" type="button" data-category="Sports">
      Feed
    </button>
    <button class="category-tab ${e?"active":""}" type="button" data-category="Personalized">
      Personalized
    </button>
  `},aa=e=>(e.thread?.count??0)>=1,ar=(e=0)=>`${e} past ${e===1?"update":"updates"}`,ra=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),s=new Date(r.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),Je=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},rr=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},or=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,sr=(e,a)=>({date:or(e,a),source:e.source,headline:e.headline,summary:ue(e),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),oa=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(I(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...ra(r.items??[])],s=o.filter((l,c,p)=>p.findIndex(u=>u.sourceUrl===l.sourceUrl)===c).map(sr),i=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:s,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&g()}}},K=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",ne=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],oe=e=>!!(e.optionMarket&&ne(e).length>1),nr=e=>{let a=ne(e);return a.find(r=>r.id===t.marketTradeOptionId)||a[0]||null},H=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),T=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),yt=e=>`siftle_profile_username_${e.toLowerCase()}`,sa=e=>e.trim().replace(/\s+/g," ").slice(0,15),ve=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=yt(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=sa(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},ir=e=>{if(!t.walletAddress)return;let a=yt(t.walletAddress),r=sa(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},lr=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},na=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:2,max:2,fallback:2}},De=(e,a,r,o)=>{let{min:s,max:n,fallback:i}=na(a,r,o);return Number.isFinite(e)?Math.min(n,Math.max(s,e)):i},ia=(e,a,r,o,s)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let n=a==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,i=e.yesSharesUsdc,l=e.noSharesUsdc;if(o==="sell")return Math.min(r,n);let c=(a==="yes"?i:l)+r,p=i+l+r;return c<=0||p<=0?r:(n+r)/c*p},la=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},dr=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},da=e=>`siftle_claimed_markets_${e.toLowerCase()}`,qe=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(da(t.walletAddress))||"[]"))}catch{return new Set}},cr=e=>{if(!t.walletAddress)return;let a=qe();a.add(e),localStorage.setItem(da(t.walletAddress),JSON.stringify(Array.from(a)))},Ke=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),de=(e,a,r)=>{let o=r?.yesSharesUsdc??0,s=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:s>0:a==="yes"?s<=0:o<=0},kt=(e,a,r)=>{if(de(e,a,r))return a;let o=a==="yes"?"no":"yes";return de(e,o,r)?o:a};var pr=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},Ut=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`};var Ct=e=>{let a=String(e||"").match(/(\d+)\s+wins?/i),r=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:a&&Number(a[1])||0,losses:r&&Number(r[1])||0}};var ur=(e,a)=>{let r=String(e?.optionId||"").trim(),o=Math.max(0,Number(e?.optionSharesUsdc)||0),s=Math.max(0,Number(a?.optionPools?.[r])||0),n=Math.max(0,Number(a?.volumeUsdc)||0);return!r||o<=0?0:s<=0||n<=0?o:o/s*n},rt=(e,a)=>!oe(e)||!a?a:{...a,optionPools:Object.fromEntries(ne(e).map(r=>[r.id,0]))};var wt=()=>{let e=0,a=0,r=0,o=E.filter(i=>i.timeframe==="Daily").map(i=>i.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(s)try{n=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,a++;continue}if(n[i]?.result==="loss"){r++;continue}let l=t.marketPositions[i],p=t.marketSnapshots[i]?.outcome??0;if(p===0)continue;let u=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,d=[];try{d=JSON.parse(localStorage.getItem(u)||"[]")}catch{}let v=d.includes("yes")&&d.includes("no");if(p===1&&l&&l.yesSharesUsdc>0){let h=v?50:100;e+=h,a++,n[i]={result:"win",points:h}}else if(p===2&&l&&l.noSharesUsdc>0){let h=v?50:100;e+=h,a++,n[i]={result:"win",points:h}}else l&&(l.yesSharesUsdc>0||l.noSharesUsdc>0)&&(r++,n[i]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(n)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},mr=(e,a)=>{let r=K(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,s=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(o))continue;let l=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(l)&&s.add(l)}s.forEach(n=>{let i=`${o}${n}`,l={yesSharesUsdc:0,noSharesUsdc:0};try{l=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let c=(Number(l.yesSharesUsdc)||0)>0,p=(Number(l.noSharesUsdc)||0)>0;if(!c&&!p)return;let u=`siftle_traded_sides_${e.id}_${n}`,d=[];try{d=JSON.parse(localStorage.getItem(u)||"[]")}catch{}let v=d.includes("yes")&&d.includes("no"),h=a==="yes"?c:p,y=`siftle_resolved_results_${n}`,x={};try{x=JSON.parse(localStorage.getItem(y)||"{}")}catch{}x[e.id]={result:h?"win":"loss",points:h?v?50:100:0},localStorage.setItem(y,JSON.stringify(x));let w=0,m=0,f=0;Object.values(x).forEach(b=>{b.result==="win"?(m+=1,w+=Number(b.points)||0):b.result==="loss"&&(f+=1)});let A=localStorage.getItem(yt(n))||"";fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:A,points:w,status:`${m} win${m===1?"":"s"}, ${f} loss${f===1?"":"es"}`})}).catch(b=>console.error("Failed to report local resolved score:",b))})},fe=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?wt():null,r=await fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},fr=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(r)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},gr=async e=>{let a=K(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(oe(e)&&!t.walletAddress){let r=e.resolvedOptionId||null,o=Number(e.outcome);t.marketSnapshots[e.id]=rt(e,{yesPriceCents:0,noPriceCents:0,volumeUsdc:Number(e.volumeUsdc)||0,yesSharesUsdc:0,noSharesUsdc:0,outcome:o===1||o===2||o===3?o:r?1:0,optionPools:e.optionPools||Object.fromEntries(ne(e).map(s=>[s.id,0])),resolvedOptionId:r,traderCount:0}),t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(oe(e)&&t.walletAddress){let{position:r,snapshot:o}=await Ht(a,t.walletAddress);t.marketPositions[e.id]=r,t.marketSnapshots[e.id]=rt(e,o)}else t.marketSnapshots[e.id]=rt(e,await ka(a))}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&g()}}},z=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Wt();let a=Le(),r=await Promise.all(a.map(async o=>{let s=K(o);if(!s)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:n,snapshot:i}=await Ht(s,t.walletAddress);return t.marketSnapshots[o.id]=i,[o.id,n]}catch(n){return console.warn(`Failed to load portfolio market ${o.id}:`,n),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,fe(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&g()}}},hr=async(e,a)=>{if(!t.walletAddress){k("Session expired or wallet not connected. Please sign in."),Ie();return}let r=Le().find(p=>p.id===e);if(!r)return;t.marketTradeSide=a;let o=K(r);if(!o){k("Deploy this Arc market contract before trading"),g();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",g(),await z(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){k("Still loading your position. Try again in a moment."),g();return}let s=t.marketSnapshots[r.id];if(Ke(r,s)){t.tradeDrawerOpen=!1,k("This market is resolved and can no longer be traded."),g();return}let n=s?.yesPriceCents??r.probability,i=s?.noPriceCents??100-r.probability,l=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!de(t.marketOrderMode,a,l)){let p=dr(l),u=t.marketOrderMode==="sell"?p?`You can only exit your ${p.toUpperCase()} shares.`:"You do not have shares to exit in this market.":p?`Exit your ${p.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";k(u),t.marketTradeSide=kt(t.marketOrderMode,a,l),g();return}let c=De(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,l);t.marketTradeAmount=c,U("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",g();let p=await wa(o,t.marketOrderMode,a,c,u=>{t.marketTradeStatus=u,g()},n,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await je(),t.walletAddress&&(t.walletBalance=await ce(t.walletAddress)),await z({force:!0}),fe(!0).catch(u=>console.error("Failed to report leaderboard entry:",u)),t.walletAddress){let u=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,d={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let h=localStorage.getItem(u);if(h){let y=JSON.parse(h);d={yesCost:y.yesCost||0,noCost:y.noCost||0,yesShares:y.yesShares||0,noShares:y.noShares||0}}}catch{}let v=c;if(t.marketOrderMode==="buy"){let h=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,y=[];try{y=JSON.parse(localStorage.getItem(h)||"[]")}catch{}y.includes(a)||(y.push(a),localStorage.setItem(h,JSON.stringify(y))),a==="yes"?(d.yesCost+=v,d.yesShares=(d.yesShares||0)+v/(n/100)):(d.noCost+=v,d.noShares=(d.noShares||0)+v/(i/100))}else{let h=t.marketPositions[r.id];if(h){if(a==="yes"&&h.yesSharesUsdc>0){let y=Math.min(1,v/h.yesSharesUsdc);d.yesCost=Math.max(0,d.yesCost-d.yesCost*y),d.yesShares=Math.max(0,(d.yesShares||0)-(d.yesShares||0)*y)}else if(a==="no"&&h.noSharesUsdc>0){let y=Math.min(1,v/h.noSharesUsdc);d.noCost=Math.max(0,d.noCost-d.noCost*y),d.noShares=Math.max(0,(d.noShares||0)-(d.noShares||0)*y)}}}localStorage.setItem(u,JSON.stringify(d))}k(`Trade confirmed ${p.slice(0,8)}...`),U(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Ra(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(p){U("trade_failed"),pr(p)?(Rt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),k("Session expired. Please sign in again.")):k(p instanceof Error?p.message:"Arc trade failed")}finally{t.marketTradeStatus=null,_(),g()}},vr=e=>aa(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",br=e=>aa(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",yr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',kr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',we=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,wr=()=>`
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
`,Sr=(e=4)=>`${we("Loading stories")}${Array.from({length:e},wr).join("")}`,ye=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${we("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,xr=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${we("Loading thread timeline")}
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
`;var $r=(e=3)=>`
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${we("Loading market evidence")}
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
`,Tr=(e=2)=>`
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${we("Loading portfolio positions")}
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
`,ot=e=>{let a=e.type==="tweet",r='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-top; color: var(--color-text-primary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',o='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 12px; height: 12px; display: inline-block; vertical-align: text-top; margin-right: 4px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';return`
    <article class="story-card ${a?"social-story tweet-card":Re(e)?"social-story":""}" data-story-id="${e.id}" role="button" tabindex="0" aria-label="Open summary for ${e.headline}">

      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            ${a?`<div style="margin-bottom: 6px;">${r}</div>`:""}
            <strong>${e.source}</strong>
            <span>${We(e)} - ${e.readTime}</span>
          </div>
        </div>
        <div class="story-card-actions">
          <button class="bookmark-button" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="${e.saved?"Remove saved story":"Save story"}">
            ${yr()}
          </button>
          <div class="share-control">
            <button class="export-button" type="button" aria-label="Export story card" data-export-id="${e.id}" aria-expanded="${t.activeShareStoryId===e.id}">
              ${kr()}
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
        <h2 class="card-headline">${Pt(e)}</h2>
        <p>${a?"Tap to read the tweet":"Tap to read the AI briefing."}</p>
      </div>

      <div class="card-action-row desktop-only">
        ${a?`<button class="card-source-button read-tweet-btn" type="button" style="cursor: pointer;">Read Tweet</button>
             <a class="card-source-button twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; gap: 6px;">
              ${r}
              Open Tweet
             </a>`:`
              ${vr(e)}
              <button class="card-source-button summary-btn" type="button">AI briefing</button>
              ${/example\\.com/i.test(e.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
            `}
      </div>

      <!-- Mobile layout (visible at 640px and below) -->
      <div class="mobile-card-inner mobile-only">
        <div class="mobile-card-body">
          <div class="mobile-card-text">
            <div class="mobile-card-topline">
              ${a?`
                <span class="mobile-source-pill ${Re(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px; max-width: 100% !important;">
                  ${o}
                  ${ct(e)}
                </span>
              `:`
                <div class="mobile-source-container">
                  <span class="mobile-source-pill ${Re(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px; max-width: 100% !important;">
                    ${ct(e)}
                  </span>
                </div>
              `}
              <div class="mobile-icons">
                <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="Save story">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                </button>
                <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${e.id}" aria-label="Save image">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                </button>
              </div>
            </div>
            <h2 class="card-headline">${Pt(e)}</h2>
            <span class="mobile-card-time">${We(e)}</span>
          </div>
          <div class="mobile-card-image" aria-hidden="true">
            <img src="${e.imageUrl}" alt="" loading="lazy" />
          </div>
        </div>
        <div class="mobile-card-actions">
          ${a?`<button class="mobile-action-btn read-tweet-btn" type="button" style="width: 50%; cursor: pointer;">Read Tweet</button>
               <a class="mobile-action-btn source-btn twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; width: 50%;">
                ${o}
                Open Tweet
               </a>`:`
                ${br(e)}
                ${/example\\.com/i.test(e.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
                <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
              `}
        </div>
      </div>

    </article>
  `},ke=()=>{if(!S)return;if(S.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){S.innerHTML=Sr(4);return}if(te){S.innerHTML=jr(),ie();return}let e=T(t.newsSearchQuery.trim()),r=`
    ${e?`<div class="news-feed-search-copy"><p>${at().length} matches for "${e}".</p></div>`:""}
    <div class="feed-minimal-top-bar" style="margin-bottom: 12px;">
      <label class="news-feed-search-bar minimal-search" style="flex: 1;" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search followed news..." value="${T(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </div>
  `;if(t.activeCategory==="Personalized"){let s=Ne(),n=ha(),i=[...s.clubs,...s.players,...s.managers].join(", ");if(!n){S.innerHTML=`
        <div class="briefing-header-card" style="margin-top: 10px; padding: 24px 18px; text-align: center;">
          <h3 style="margin: 0 0 6px 0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Personalize Your Football Feed</h3>
          <p style="font-size: 0.84rem; color: #69728a; margin: 0 auto 16px auto; max-width: 420px;">Type your favorite clubs, managers, and players to build your custom feed.</p>
          <button type="button" class="briefing-back-btn" id="openTopicPickerBtn" style="margin: 0 auto; padding: 6px 20px;">Add Topics</button>
        </div>
      `,document.querySelector("#openTopicPickerBtn")?.addEventListener("click",Fe),ie();return}let l=at(),c=`
      <div class="personalized-minimal-bar">
        <div class="personalized-following-text">
          <span class="following-label">Following:</span>
          <span class="following-topics">${T(i)}</span>
          <button type="button" class="minimal-edit-btn" id="customizeTopicsFeedBtn">Edit</button>
        </div>
      </div>
    `;if(l.length===0){S.innerHTML=c+'<div class="portfolio-empty compact news-search-empty">No stories match your followed topics in recent news. Tap Edit to add more clubs or players.</div>',document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",Fe),ie();return}S.innerHTML=c+l.map(ot).join(""),document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",Fe),ie();return}let o=at();if(o.length===0){let s=t.showSaved?[]:t.stories;if(s.length>0){S.innerHTML=r+s.map(ot).join(""),ie();return}S.innerHTML=r+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>',ie();return}S.innerHTML=r+o.map(ot).join(""),ie()},It=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),xe=(e,a,r,o,s,n)=>{e.beginPath(),e.moveTo(a+n,r),e.lineTo(a+o-n,r),e.quadraticCurveTo(a+o,r,a+o,r+n),e.lineTo(a+o,r+s-n),e.quadraticCurveTo(a+o,r+s,a+o-n,r+s),e.lineTo(a+n,r+s),e.quadraticCurveTo(a,r+s,a,r+s-n),e.lineTo(a,r+n),e.quadraticCurveTo(a,r,a+n,r),e.closePath()},Mr=(e,a,r,o,s,n,i)=>{let l=a.split(/\s+/).filter(Boolean),c=[],p="";for(let u of l){let d=p?`${p} ${u}`:u;if(e.measureText(d).width<=s){p=d;continue}if(p&&c.push(p),p=u,c.length===i)break}if(p&&c.length<i&&c.push(p),l.length>0&&c.length===i){for(;e.measureText(`${c[i-1]}...`).width>s&&c[i-1].length>0;)c[i-1]=c[i-1].slice(0,-1).trim();c[i-1]=`${c[i-1]}...`}return c.forEach((u,d)=>e.fillText(u,r,o+d*n)),o+c.length*n},Ar=(e,a,r,o,s,n,i)=>{let l=Math.max(s/a.naturalWidth,n/a.naturalHeight),c=s/l,p=n/l,u=(a.naturalWidth-c)/2,d=(a.naturalHeight-p)/2;e.save(),xe(e,r,o,s,n,i),e.clip(),e.drawImage(a,u,d,c,p,r,o,s,n),e.restore()},Et=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),Lr={"&quot;":'"',"&apos;":"'","&amp;":"&","&lt;":"<","&gt;":">","&nbsp;":" ","&ndash;":"-","&mdash;":"\u2014","&hellip;":"...","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&scaron;":"\u0161","&Scaron;":"\u0160","&eacute;":"\xE9","&Eacute;":"\xC9","&egrave;":"\xE8","&Egrave;":"\xC8","&ecirc;":"\xEA","&Ecirc;":"\xCA","&aacute;":"\xE1","&Aacute;":"\xC1","&agrave;":"\xE0","&Agrave;":"\xC0","&iacute;":"\xED","&Iacute;":"\xCD","&oacute;":"\xF3","&Oacute;":"\xD3","&uacute;":"\xFA","&Uacute;":"\xDA","&uuml;":"\xFC","&Uuml;":"\xDC","&ouml;":"\xF6","&Ouml;":"\xD6","&auml;":"\xE4","&Auml;":"\xC4","&ntilde;":"\xF1","&Ntilde;":"\xD1","&ccedil;":"\xE7","&Ccedil;":"\xC7","&szlig;":"\xDF","&euro;":"\u20AC","&pound;":"\xA3","&copy;":"\xA9"},pt=e=>e?e.replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"-").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))).replace(/&#x([0-9a-fA-F]+);/g,(a,r)=>String.fromCharCode(parseInt(r,16))).replace(/&[a-zA-Z]+;/g,a=>Lr[a]||a).replace(/&#[a-zA-Z0-9]*;?/g,""):"",Pr=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",Bt=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",xe(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await It("./assets/siftle-logo-small.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${pt(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(a){let l=await It(Pr(e.imageUrl)).catch(()=>null);l?Ar(o,l,110,n,860,520,28):(o.fillStyle="#eef2ff",xe(o,110,n,860,520,28),o.fill())}else o.fillStyle="#eef2ff",xe(o,110,n,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",xe(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(W(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",Mr(o,pt(e.headline),110,888,860,54,4),r},ca=async e=>{let a=await Bt(e,!0);try{return await Et(a)}catch{return Et(await Bt(e,!1))}},pa=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,ua=async e=>{let a=await ca(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=pa(e),o.click(),URL.revokeObjectURL(r)},Ur=async e=>{let a=await ca(e),r=new File([a],pa(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await ua(e)},Cr=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,ke(),k(a==="share"?"Preparing share image":"Preparing download"),C&&(C.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await Ur(r):await ua(r),k(a==="share"?"Share image ready":"Image saved"),C&&(C.textContent="Branded story image ready")}catch(o){console.warn(o),k("Image export unavailable"),C&&(C.textContent="Image export was cancelled or unavailable")}}},_t=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,o=vt(e);return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${ue(e)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${r?"disabled":""}>${r?"Preparing...":"AI briefing"}</button>
      </div>
      ${Ee(e)}
      ${r?`<div style="margin-top: 12px;">${ye()}</div>`:me(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${ye()}</div>`:o?`<div style="margin-top: 12px;">${bt(e)}</div>`:`<div style="margin-top: 12px;">${ft(ue(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},Ir=async(e,a)=>{if(!t.walletAddress){k("Session expired or wallet not connected. Please sign in."),Ie();return}let r=Le().find(p=>p.id===e);if(!r||!oe(r))return;let o=ne(r).find(p=>p.id===a);if(!o){k("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",g(),await z(),t.marketTradeStatus=null);let s=t.marketSnapshots[r.id];if(Ke(r,s)){k("This market is resolved and can no longer be traded.");return}let n=t.marketPositions[r.id],i=t.marketOrderMode==="sell";if(!i&&n?.optionId){k("Your pick is already locked for this market.");return}if(i&&!n?.optionId){k("You do not have a pick to exit.");return}let l=Math.max(0,Number(n?.optionSharesUsdc)||0);if(i&&l<=0){k("Your pick is still loading. Please try again."),await z({force:!0});return}let c=i?l:De(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=c,t.marketTradeOptionId=i&&n?.optionId||o.id,U("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",g(),await Sa(r.id,i?"sell":"buy",i&&n?.optionId||o.id,c,p=>{t.marketTradeStatus=p,g()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await je(),t.walletAddress&&(t.walletBalance=await ce(t.walletAddress)),await z({force:!0}),U(i?"trade_sell_success":"trade_buy_success"),k(i?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(p){U("trade_failed"),k(p instanceof Error?p.message:"Trade failed")}finally{t.marketTradeStatus=null,_(),g()}},Er=()=>{if(!L||!S)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(S.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){L.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){L.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${xr(3)}
        </article>
      </div>
    `;return}L.innerHTML=`
    <div class="detail-container thread-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card thread-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${ar(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${_t(e,"Latest")}
          ${ra(r?.items??[]).map(o=>_t(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Br=()=>{if(!L||!S)return;if(t.selectedThreadUrl){Er();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){L.hidden=!0,L.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),S.hidden=!1;return}if(e.type==="tweet"){S.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode");let i='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';L.innerHTML=`
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
            <span class="tweet-detail-time">${We(e)}</span>
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
    `;return}let a=ue(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=me(e),s=t.unlockingSummaryUrl===e.sourceUrl,n=vt(e);S.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode"),L.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${e.source} - ${We(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?Ee(e):""}
          ${o?r?ye():n?bt(e):ft(a,e):Ka(e,s)}
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
  `},_r=e=>{let a=t.marketSnapshots[e.id],r=K(e),o=oe(e),s=ne(e).length,n=a?.volumeUsdc??(Number(e.volumeUsdc)||0),i=a?.yesPriceCents,l=i??e.probability,c=o?`${s}`:`${l}%`,p=i===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${i}\xA2 \xB7 No ${100-i}\xA2`,u=i===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:p,d=Je(e),v=e.timeframe==="Daily"?Zt(e,a):e.closes;return`
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
        <span>${o?"possible outcomes":r?"market probability":"pending deployment"}</span>
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
          ${d.evidence.slice(0,2).map(h=>`
            <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 0.76rem; text-align: left; line-height: 1.35; padding: 4px 0;">
              <span style="background: rgba(59, 130, 246, 0.08); color: var(--market-accent); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 4px; padding: 1px 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; flex-shrink: 0; line-height: 1;">${T(h.source)}</span>
              <span style="color: var(--market-text-main); font-weight: 500;">${T(h.headline)}</span>
            </div>
          `).join("")}
        </div>
      </div>
      `:""}
      <div class="market-card-footer">
        <span>${d.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${v}`:`Closes ${v}`}</span>
      </div>
    </button>
  `},Dr=e=>{let a=Je(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,n=a.evidence[0],i=n?n.headline:"No updates yet",l=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${l}`},Nr=e=>{if(!S||!L)return;let a=Je(e),r=!t.checkedMarketEvidence[e.id],o=K(e),s=t.marketSnapshots[e.id],n=oe(e),i=ne(e);n&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let l=nr(e),c=!!(o&&!s),p=s?.yesPriceCents??(o?e.probability:0),u=s?.noPriceCents??(o?100-e.probability:0),d=c?"":o?`${p}\xA2`:"--",v=c?"":o?`${u}\xA2`:"--",h=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},y=!!h.optionId;n&&y&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),n&&!y&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let x=n&&t.marketOrderMode==="sell"&&y?Math.max(0,Number(h.optionSharesUsdc)||0):0,w=x>0?x:De(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,h),m=x>0?{min:0,max:x}:na(t.marketOrderMode,t.marketTradeSide,h),f=t.marketOrderMode==="buy"?"exactly $2.00 USDC":`Up to $${H(m.max)} USDC`,A=!t.walletAddress||t.hasLoadedPortfolioPositions,b=Ke(e,s),M=Qt(e,s),$=!!M;n||(t.marketTradeSide=kt(t.marketOrderMode,t.marketTradeSide,h));let P=!n&&!b&&!$&&A&&de(t.marketOrderMode,"yes",h),N=!n&&!b&&!$&&A&&de(t.marketOrderMode,"no",h),Y=n?!b&&!$&&A&&(t.marketOrderMode==="sell"?y:!y&&!!l):!b&&!$&&A&&de(t.marketOrderMode,t.marketTradeSide,h),q=b?"Market resolved":M||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),V=b?"Market resolved":M||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),Z=n?w:ia(s,t.marketTradeSide,w,t.marketOrderMode,h),Q=t.marketOrderMode==="buy"?"Buy":"Exit",ge=n?"Pick one outcome":o?"Arc testnet live":"Contract not deployed";S.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode"),gr(e),oa(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&z({force:!t.hasLoadedPortfolioPositions});let St=n?!!h.optionId:h.yesSharesUsdc>0||h.noSharesUsdc>0,Ze="";n&&St&&t.walletAddress?Ze=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${T(h.optionLabel||"Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Status</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">Locked in</strong>
          </div>
        </div>
      </div>
    `:St&&t.walletAddress&&(Ze=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${la(h,s).map(O=>`
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${O.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${H(O.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${H(O.payout)}</strong>
            </div>
          </div>
        `).join("")}
        <div style="border-top: 1px solid var(--market-border); padding-top: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--market-text-muted);">Winning side splits the final pool</span>
        </div>
      </div>
    `),L.innerHTML=`
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
            <span class="market-status-pill">${ge}</span>
          </div>
          <h2>${e.question}</h2>
          ${Ze}
          ${a.imageUrl?`
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${a.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          `:""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${ht(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${Zt(e,s)}</strong>
            </div>
            <div class="market-stat">
              <span>Market activity</span>
              <strong>Hidden</strong>
            </div>
          </div>

          <div class="market-resolution-panel">
            <h3>Resolution Rules</h3>
            <p>${e.resolution}</p>
            ${M?`<p style="margin-top: 10px; color: #f59e0b; font-weight: 600;">${M}</p>`:""}
          </div>

          <section class="market-evidence-thread">
            <header>
              <h3>Related News</h3>
              <span>${r?"Loading...":`${a.evidence.length} stories`}</span>
            </header>
            <p class="market-thread-intro">Read the stories connected to this market, newest first.</p>
            <div class="market-thread-timeline">
              ${r?$r(3):a.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':a.evidence.map(B=>{let O=Vt(e,B),he=t.unlockingSummaryUrl===B.sourceUrl;return`
                <article class="market-thread-update">
                  <div class="market-thread-marker"></div>
                  <div class="market-thread-update-content">
                    <div class="market-thread-update-meta">
                      <span>${B.date} \xB7 ${B.source}</span>
                    </div>
                    <h4>${B.headline}</h4>
                    <p>${B.summary}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                      ${/example\.com/i.test(B.sourceUrl)?"":`<a class="market-thread-source-link" href="${B.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(B.sourceUrl)}" ${he?"disabled":""}>${he?"Preparing...":"AI briefing"}</button>
                    </div>
                    ${Ee(O)}
                    ${he?`<div style="margin-top: 12px;">${ye()}</div>`:me(O)?t.loadingSummaryUrl===B.sourceUrl?`<div style="margin-top: 12px;">${ye()}</div>`:vt(O)?`<div style="margin-top: 12px;">${bt(O)}</div>`:`<div style="margin-top: 12px;">${ft(ue(O,t.aiSummaries[B.sourceUrl]),O)}</div>`:""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${n?`<span>${y?"Pick locked":"Choose one option"}</span><span><strong>${i.length} options</strong></span>`:`<span>Choose a side</span><span><strong>${t.marketOrderMode==="sell"?"Exit available":"Trade open"}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${b||$?"disabled":""}>
          ${b?"Market Resolved":M||(n?y?"Pick Locked":"Pick Outcome":"Trade Market")}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${b||$?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${b||$?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?i.map(B=>{let O=t.marketTradeOptionId===B.id||h.optionId===B.id,he=b||$||t.marketOrderMode==="sell"||y||!A;return`
                  <button type="button" class="market-side option ${O?"active":""} ${he?"disabled":""}" data-market-option-id="${T(B.id)}" ${he?"disabled":""}>
                    <span>${T(B.label)}</span>
                    ${h.optionId===B.id?"<small>Your pick</small>":""}
                  </button>
                `}).join(""):c?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${P?"":"disabled"}" data-market-trade-side="yes" ${P?"":"disabled"} title="${P?"Yes":q}">
                  <span>Yes</span>
                  ${P?"":`<small>${q}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${N?"":"disabled"}" data-market-trade-side="no" ${N?"":"disabled"} title="${N?"No":V}">
                  <span>No</span>
                  ${N?"":`<small>${V}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${f}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${m.min.toFixed(2)}" max="${Math.max(m.min,m.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${w}" data-market-amount ${b||$||t.marketOrderMode==="buy"?"disabled":""} style="${t.marketOrderMode==="buy"?"opacity: 0.7; cursor: not-allowed;":""}" />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>Market amounts are hidden while this market is open.</span>
          </div>

          <div class="drawer-action-container">
            ${c?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:b?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':$?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${M}</button>`:t.walletAddress?A?n&&t.marketOrderMode==="sell"&&y?`<button type="button" class="market-submit-button" data-market-option-trade="${T(h.optionId||"")}">Exit pick</button>`:Y?n?`<button type="button" class="market-submit-button" data-market-option-trade="${T(l?.id||"")}">Confirm ${T(l?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${Q} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${Q.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},ma=()=>{if(!S||!L)return;if(Ye?.toggleAttribute("hidden",!0),Ge?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.add("active"),Ue?.classList.remove("active"),Ce?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&E.forEach(n=>{oa(n)})},750),t.selectedMarketId){let n=E.find(i=>i.id===t.selectedMarketId);if(n){Nr(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),L.hidden=!0,L.classList.remove("fullscreen"),S.hidden=!1,S.classList.add("markets-list");let e=E,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(n=>{let i=t.activeMarketTimeframe===n,l=n==="All"?e.length:e.filter(p=>p.timeframe===n).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${n}">
            <span>${n==="Sagas"?"Sagas":n}</span>
            <span class="timeframe-tab-count">${l}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&E.length===0){S.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${st}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
        </div>
        <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
          Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
        </p>
      </header>
      ${r}
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
          ${l.map(_r).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(c=>c.timeframe==="Daily"),i=e.filter(c=>c.timeframe==="Weekly"),l=e.filter(c=>c.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",n)}
      ${s("Weekly","Ends in a week",i)}
      ${s("Sagas (Long-term)","Narratives & futures",l)}
    `}else{let n=e.filter(c=>c.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,l="";t.activeMarketTimeframe==="Daily"?l="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?l="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",l="Narratives & futures"),o=`
      ${s(i,l,n)}
    `}S.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${st}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},fa=()=>{if(!S||!L)return;Ye?.toggleAttribute("hidden",!0),Ge?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.remove("active"),Ce?.classList.remove("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,S.hidden=!1,S.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?wt():null;t.walletAddress&&e&&fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(m=>console.error("Failed to report user score:",m)),ee&&(clearInterval(ee),ee=null),S.innerHTML=`
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
          <span id="archiveChevron" style="transition: transform 0.2s; font-size: 0.8rem; transform: ${X?"rotate(180deg)":"rotate(0deg)"}; color: var(--market-text-main);">\u25BC</span>
        </button>
        
        <div id="archiveContent" style="display: ${X?"block":"none"}; padding: 8px 4px 0 4px;">
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
  `,((m="2026-07-19T23:59:59.000Z")=>{let f=document.getElementById("seasonTimer");ee&&clearInterval(ee);let A=()=>{let M=new Date(m).getTime()-new Date().getTime();if(M<=0){f&&(f.innerText="Season Finished!"),ee&&clearInterval(ee);return}let $=Math.floor(M/(1e3*60*60*24)),P=Math.floor(M%(1e3*60*60*24)/(1e3*60*60)),N=Math.floor(M%(1e3*60*60)/(1e3*60)),Y=Math.floor(M%(1e3*60)/1e3);f&&(f.innerText=`${$}d ${P}h ${N}m ${Y}s`)};A(),ee=setInterval(A,1e3)})();let r=m=>m.map((f,A)=>{let b=Number(f.globalRank)||A+1,M=String(f.username||""),$=!!(t.walletAddress&&M.toLowerCase()===t.walletAddress.toLowerCase()),P=$&&t.profileUsername?t.profileUsername:f.displayName||M,N=$?`${t.profileUsername?P:R(M)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,Y=T(N),q=Ut(f.status);if(f.totalTrades!==void 0&&f.aiBriefingUnlocks!==void 0){let Ve=Ct(f.status);q=`${Ve.wins}W - ${Ve.losses}L \xB7 ${f.totalTrades} trades \xB7 ${f.aiBriefingUnlocks} unlocks`}let V=T(q),Z=f.nextSeasonDivision?`Division ${f.nextSeasonDivision}`:"Qualify",Q=b<=10?"promotion-zone":"safety-zone",ge=b<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${$?"user-highlight":""} ${Q}" role="listitem">
        <div class="leaderboard-row-left">
          ${ge}
          <span class="leaderboard-rank rank-${b}">${b}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(f.points)||0} pts</strong>
          <span>${f.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${T(Z)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${V}</span>
        </div>
      </div>
    `}).join(""),o=m=>m.map((f,A)=>{let b=A+1,M=String(f.username||""),$=!!(t.walletAddress&&M.toLowerCase()===t.walletAddress.toLowerCase()),P=$&&t.profileUsername?t.profileUsername:f.displayName||M,N=Ut(f.status);if(f.totalTrades!==void 0&&f.aiBriefingUnlocks!==void 0){let ge=Ct(f.status);N=`${ge.wins}W - ${ge.losses}L \xB7 ${f.totalTrades} trades \xB7 ${f.aiBriefingUnlocks} unlocks`}let Y=T(N),q=$?`${t.profileUsername?P:R(M)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,V=T(q),Z="safety-zone",Q='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return b<=2?(Z="promotion-zone",Q='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):b>=5&&(Z="relegation-zone",Q='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${$?"user-highlight":""} ${Z}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${Q}
          <span class="leaderboard-rank rank-${b}" style="flex-shrink: 0; margin-right: 4px;">${b}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${V}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(f.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${Y}</span>
        </div>
      </div>
    `}).join(""),s=m=>m.map((f,A)=>{let b=A+1,M=String(f.username||""),$=!!(t.walletAddress&&M.toLowerCase()===t.walletAddress.toLowerCase()),P=$&&t.profileUsername?t.profileUsername:f.displayName||M,N=$?`${t.profileUsername?P:R(M)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,Y=T(N),q=Number(f.unlocks)||0,V=Number(f.points)||0,Z=f.status||`${q} briefing unlock${q===1?"":"s"}`;return`
      <div class="leaderboard-row global-row ${$?"user-highlight":""}" role="listitem">
        <div class="leaderboard-row-left">
          <span class="leaderboard-rank rank-${b}">${b}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${V} pts</strong>
          <span>${Z}</span>
        </div>
        <div class="leaderboard-row-right">
          <span style="color: #34d399; font-weight: 600;">Preseason</span>
        </div>
      </div>
    `}).join(""),n=(m,f)=>{m&&(m.innerHTML=`
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
    `)},i=()=>{let m=document.getElementById("leaderboardListContainer");n(m,6),fetch(I("/api/leaderboard/preseason")).then(f=>f.json()).then(f=>{let A=f.players||[];m&&(m.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the preseason leaderboard yet. Unlock a daily AI briefing to join!</p>`:s(A))}).catch(f=>{console.error("Failed to load preseason leaderboard:",f),m&&(m.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading preseason leaderboard. Please try again.</p>`)})},l=()=>{let m=document.getElementById("season1LeaderboardListContainer");n(m,6),fetch(I("/api/leaderboard/season1")).then(f=>f.json()).then(f=>{let A=f.map((b,M)=>{let $=M+1,P=null;return $<=6?P=1:$<=12&&(P=2),{username:b.wallet_address,displayName:b.username,points:b.points,status:`${b.wins} wins, ${b.losses} losses`,totalTrades:b.total_trades,aiBriefingUnlocks:b.ai_briefing_unlocks,globalRank:$,prizeEligible:$<=10,nextSeasonDivision:P}});if(m)if(G==="global")m.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in Season 1.</p>`:r(A);else{let b=document.getElementById("season1DivisionSelector"),M=b?Number(b.value):1,$=A.filter(P=>P.nextSeasonDivision===M);m.innerHTML=$.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in this division.</p>`:o($)}}).catch(f=>{console.error("Failed to load Season 1 archive:",f),m&&(m.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading Season 1 leaderboard archive. Please try again.</p>`)})},c=m=>{G=m,document.querySelectorAll("[data-season1-view]").forEach(f=>{f.classList.toggle("active",f.dataset.season1View===m)}),document.getElementById("season1DivisionControls")?.toggleAttribute("hidden",m!=="division"),document.getElementById("season1GlobalControls")?.toggleAttribute("hidden",m!=="global"),document.getElementById("season1PrizeBox")?.toggleAttribute("hidden",m!=="global"),l()};i(),X&&c(G);let p=document.getElementById("archiveExpandBtn"),u=document.getElementById("archiveContent"),d=document.getElementById("archiveChevron");p?.addEventListener("click",()=>{X=!X,u&&(u.style.display=X?"block":"none"),d&&(d.style.transform=X?"rotate(180deg)":"rotate(0deg)"),X&&c(G)}),document.querySelectorAll("[data-season1-view]").forEach(m=>{m.addEventListener("click",()=>{let f=m.dataset.season1View==="division"?"division":"global";c(f)})}),document.getElementById("season1DivisionSelector")?.addEventListener("change",()=>{l()}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){k("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let f=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,f.toFixed(2)),t.walletBalance=f.toFixed(2),k("Claimed $100 USDC mock credits!"),_(),fa()}else k("Opening Circle Faucet..."),window.open(st,"_blank")});let y=document.getElementById("howItWorksBtn"),x=document.getElementById("howItWorksModal"),w=document.getElementById("closeRulesModalBtn");y?.addEventListener("click",()=>{x&&x.classList.add("active")}),w?.addEventListener("click",()=>{x&&x.classList.remove("active")}),x?.addEventListener("click",m=>{m.target===x&&x.classList.remove("active")})},ga=()=>{t.activeSurface="feed",t.selectedMarketId=null,Ye?.toggleAttribute("hidden",!0),Ge?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.add("active"),Ce?.classList.remove("active"),S?.classList.remove("markets-list")},Or=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",Dt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id];if(oe(e)){let y=r?.resolvedOptionId||null,x=!!y,w=x&&a.optionId===y,m=ur(a,r),f=w?m:0,A=ne(e).find($=>$.id===y)?.label,b=!!a.claimedAt||qe().has(e.id),M=!!t.claimingMarketIds[e.id];return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${x?`Resolved: ${T(A||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${T(a.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${H(a.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${H(f)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${x?"":`Closes ${e.closes}`}</span>
          ${x?b?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':M?'<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>':w?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(f)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let o=Or(r?.outcome),s=la(a,r),n=s.reduce((y,x)=>Math.max(y,x.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,l=r?.outcome??0,c=qe().has(e.id),p=l===1?a.yesSharesUsdc:l===2?a.noSharesUsdc:0,u=l===1?r?.yesSharesUsdc??0:l===2?r?.noSharesUsdc??0:0,d=r?.volumeUsdc??0,v=p>0&&u>0?p/u*d:0,h=l===0?"":c?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':v>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(v)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${H(n)}</strong></div>
        ${s.map(y=>`
          <div><span>${y.label}</span><strong>${H(y.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${H(i)} total shares`:""}</span>
        ${h||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Hr=async e=>{if(!t.walletAddress){k("Please sign in first.");return}let a=Le().find(o=>o.id===e),r=a?K(a):"";if(!a||!r){k("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,F(),U("claim_attempt"),wt();let o=await xa(r,t.walletAddress);U("claim_success"),o.won&&cr(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await ce(t.walletAddress),await z(),k(o.won?`Claimed $${H(o.amountUsdc)}`:"No payout to claim"),_(),F()}catch(o){U("claim_failed"),k(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],F()}},Rr=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(s=>{let n=s.displayName||R(s.walletAddress),i=s.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${T(n)}</strong>
            <span>${R(s.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${s.used}/${s.maxUses}</strong>
            <span>${i?"Expired":`${s.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${T(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${T(a.code)}">
              <span>Invite code</span>
              <strong>${T(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${T(a.inviteLink)}">
              <span>Invite link</span>
              <strong>Copy link</strong>
            </button>
          </div>
          <div class="portfolio-referral-metrics">
            <div><span>Joined referrals</span><strong>${a.activeReferralCount}</strong></div>
            <div><span>Bonus earned</span><strong>+${a.totalEarned} pts</strong></div>
          </div>
          <button type="button" class="portfolio-referral-toggle" data-open-referrals>
            ${t.referralPanelOpen?"Hide referral details":"View referral details"}
          </button>
          ${t.referralPanelOpen?`
            <div class="portfolio-referral-details">
              ${r}
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
  `},F=()=>{if(!S||!L)return;Ye?.toggleAttribute("hidden",!0),Ge?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.remove("active"),Ce?.classList.add("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,S.hidden=!1,S.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Me(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&Wt(),z({force:!t.hasLoadedPortfolioPositions}));let a=qe(),r=Le().filter(d=>{let v=t.marketPositions[d.id];return a.has(d.id)||v&&(v.yesSharesUsdc+v.noSharesUsdc>0||(v.optionSharesUsdc||0)>0)}),o=r.filter(d=>(t.marketSnapshots[d.id]?.outcome??0)===0),s=r.filter(d=>(t.marketSnapshots[d.id]?.outcome??0)!==0),n=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?R(t.walletAddress):"Anonymous"),l=T(i),c=T(t.profileUsername||""),p=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${T(t.profileNotice.message)}</div>`:"",u=i.charAt(0).toUpperCase();S.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${Rr(n)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${u}</span>
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

        ${p}


        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${we("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
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
        <button class="${t.portfolioFilter==="open"?"active":""}" type="button" data-portfolio-filter="open">Open ${o.length}</button>
        <button class="${t.portfolioFilter==="finalized"?"active":""}" type="button" data-portfolio-filter="finalized">Finalized ${s.length}</button>
      </div>
      ${t.loadingPortfolioPositions?Tr(2):t.walletAddress?r.length===0?'<div class="portfolio-empty">No predictions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':t.portfolioFilter==="open"?`
                <section class="portfolio-position-section">
                  <h2>Open Predictions</h2>
                  ${o.length?o.map(Dt).join(""):'<div class="portfolio-empty compact">No active predictions open.</div>'}
                </section>
              `:`
                <section class="portfolio-position-section">
                  <h2>Prediction History (Finalized)</h2>
                  ${s.length?s.map(Dt).join(""):'<div class="portfolio-empty compact">No finalized predictions.</div>'}
                </section>
              `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market predictions.</div>'}
    </section>
  `},g=()=>{if(Yt.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){ma();return}if(t.activeSurface==="portfolio"){F();return}if(t.activeSurface==="leaderboard"){fa();return}ga(),ta(),ke(),Br(),j&&(j.value=t.activeArchiveDate??"")};nt.textContent=Jt();ae?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");if(!r)return;let o=r.dataset.category;t.activeCategory=o,te=!1,re=null,window.history.pushState({},"","#feed"),J(),g(),o==="Personalized"&&!ha()&&Fe(),_e(),se(t.activeCategory)});var te=!1,Nt="overall",re=null,ze=!1,Ne=()=>{try{let e=localStorage.getItem("siftle_followed_entities");if(e)return JSON.parse(e)}catch{}return{clubs:[],managers:[],players:[]}},ha=()=>{let e=Ne();return(e.clubs?.length||0)+(e.managers?.length||0)+(e.players?.length||0)>0},zr=e=>{localStorage.setItem("siftle_followed_entities",JSON.stringify(e))},Fr=e=>{if(!e)return"";let a=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o=pt(a).split(`
`),s="",n="",i=!1,l=!1;for(let c=0;c<o.length;c++){let p=o[c].trim();if(!p)continue;if(/what matters/i.test(p)||p.includes("\u{1F3AF}")){i&&(n+="</ul></div>",i=!1);let v=p.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");n+=`
        <div class="briefing-highlight-box what-matters">
          <h4>${T(v||"What Matters Most")}</h4>
          <p>
      `,l=!0;continue}if(/watch next/i.test(p)||p.includes("\u23F1\uFE0F")){l&&(n+="</p></div>",l=!1);let v=p.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");n+=`
        <div class="briefing-highlight-box watch-next">
          <h4>${T(v||"Key Things to Watch")}</h4>
          <ul>
      `,i=!0;continue}if(p.startsWith("## ")||p.startsWith("# "))continue;if(i){let v=p.replace(/^[-*]\s*/,"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");v&&(n+=`<li>${v}</li>`);continue}if(l){let v=p.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");n+=`${v} `;continue}let u=p.match(/^(?:###\s*)?(\d+)\.\s*(.*)$/);if(u){let v=u[1],h=u[2].replace(/\*\*/g,"").trim(),y="",x="",w=c+1;for(;w<o.length&&!o[w].trim().match(/^(?:###\s*)?(?:\d+\.|WHAT MATTERS|WATCH NEXT|🎯|⏱️)/i);){let b=o[w].trim();b.startsWith("*[")&&b.endsWith("]*")?x=b.slice(2,-2):b.startsWith("*")&&b.endsWith("*")?x=b.slice(1,-1):b.length>0&&!b.startsWith("###")&&(y+=(y?" ":"")+b),w++}c=w-1;let m="",f=y.replace(/\.\.\.$/,"").trim();f=f.replace(/[,;:\s]+(?:but|and|or|the|a|an|with|in|on|of|to|for|as|is|was|are|were|after|while|that|which|who)$/i,"").trim(),f&&!f.endsWith("...")&&f.length>=35&&f.split(" ").length>=7?m=f:m=h,m=m.replace(/^(?:deal done|here we go|official,?\s*exclusive\s*story\s*confirmed|breaking news|breaking|official|exclusive|update)\s*[:\.\-]?\s*/gi,"").replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi,"").replace(/@[a-zA-Z0-9_]+/g,"").replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g,"").replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g,"").replace(/\s+/g," ").trim(),m=m.replace(/[,;:\-\s]+$/,""),m.length>0&&(m=m.charAt(0).toUpperCase()+m.slice(1)),m.endsWith(".")||(m+=".");let A=x.replace(/·\s*(confirmed|in progress|major|reported).*/i,"").trim();s+=`
        <div class="briefing-event-item-card">
          <div class="briefing-event-item-header">
            <span class="briefing-event-num-pill">${v}</span>
            <div class="briefing-event-item-content">
              <p class="briefing-event-item-single-text">${T(m)}</p>
              <div class="briefing-event-item-meta">
                ${A?`<span class="briefing-source-tag">${T(A)}</span>`:""}
              </div>
            </div>
          </div>
        </div>
      `;continue}if(p.startsWith("### ")&&!p.match(/###\s*\d+\./)){let v=p.replace(/^###\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");n+=`<h4 style="margin: 12px 0 6px 0; font-family: Outfit, sans-serif; font-size: 1rem; color: inherit;">${T(v)}</h4>`;continue}let d=p.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");n+=`<p style="margin: 0 0 10px 0; font-size: 0.88rem; color: inherit; line-height: 1.5;">${d}</p>`}return l&&(n+="</p></div>"),i&&(n+="</ul></div>"),s+n},Fe=()=>{document.querySelectorAll(".personalization-modal-overlay").forEach(o=>o.remove());let e=Ne(),a=document.createElement("div");a.className="personalization-modal-overlay",a.innerHTML=`
    <div class="custom-topics-modal">
      <button class="modal-close-icon-btn" id="prefCloseBtn" type="button" aria-label="Close">&times;</button>
      <div style="margin-bottom: 6px;">
        <h3 style="font-family: Outfit, sans-serif; font-weight: 700; margin: 0; font-size: 1.22rem;">Personalize Your Football Feed</h3>
      </div>
      <p style="margin: 0 0 16px 0; font-size: 0.82rem; color: #69728a; line-height: 1.4;">Type the clubs, managers, and players you follow (comma separated). Siftle will tailor your feed and catch-up briefings to these topics.</p>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Clubs</label>
        <input type="text" class="topic-text-field" id="clubInput" placeholder="e.g. Chelsea, Real Madrid, Arsenal" value="${T(e.clubs.join(", "))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Managers</label>
        <input type="text" class="topic-text-field" id="managerInput" placeholder="e.g. Enzo Maresca, Mikel Arteta, Pep Guardiola" value="${T(e.managers.join(", "))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Players</label>
        <input type="text" class="topic-text-field" id="playerInput" placeholder="e.g. Cole Palmer, Bukayo Saka, Kylian Mbappe" value="${T(e.players.join(", "))}" />
      </div>

      <div class="custom-modal-btn-row">
        <button id="prefSaveBtn" class="modal-save-btn" type="button">Save Topics</button>
        <button id="prefClearBtn" class="modal-clear-btn" type="button">Clear All</button>
      </div>
    </div>
  `,document.body.appendChild(a);let r=()=>a.remove();a.querySelector("#prefCloseBtn")?.addEventListener("click",r),a.addEventListener("click",o=>{o.target===a&&r()}),a.querySelector("#prefClearBtn")?.addEventListener("click",()=>{a.querySelector("#clubInput").value="",a.querySelector("#managerInput").value="",a.querySelector("#playerInput").value=""}),a.querySelector("#prefSaveBtn")?.addEventListener("click",()=>{let o=a.querySelector("#clubInput")?.value||"",s=a.querySelector("#managerInput")?.value||"",n=a.querySelector("#playerInput")?.value||"",i=c=>c.split(",").map(p=>p.trim()).filter(Boolean),l={clubs:i(o),managers:i(s),players:i(n)};zr(l),k("Topics saved"),r(),t.activeCategory="Personalized",g()})},jr=()=>{if(ze)return`
      <div class="briefing-view-container">
        <div class="briefing-top-nav-bar">
          <button type="button" class="briefing-back-btn" id="backToFeedBtn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Back to Feed</span>
          </button>
        </div>
        <div class="briefing-header-card" style="text-align:center; padding: 40px 20px;">
          <div class="loading-spinner" style="margin: 0 auto 16px auto; width: 32px; height: 32px; border: 3px solid rgba(49, 87, 255, 0.2); border-top-color: #3157ff; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
          <h3 style="margin:0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Generating briefing through 0G...</h3>
          <p style="color: #69728a; font-size: 0.85rem; margin-top: 6px;">Clustering verified reports and synthesizing developments since last check...</p>
        </div>
      </div>
    `;if(!re)return ut(!1),`
      <div class="briefing-view-container">
        <div class="briefing-top-nav-bar">
          <button type="button" class="briefing-back-btn" id="backToFeedBtn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Back to Feed</span>
          </button>
        </div>
        <div class="briefing-header-card" style="text-align:center; padding: 40px 20px;">
          <div class="loading-spinner" style="margin: 0 auto 16px auto; width: 32px; height: 32px; border: 3px solid rgba(49, 87, 255, 0.2); border-top-color: #3157ff; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
          <h3 style="margin:0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Loading briefing...</h3>
        </div>
      </div>
    `;let e=re,a=new Date(e.periodStart).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return`
    <div class="briefing-view-container">
      <div class="briefing-top-nav-bar">
        <button type="button" class="briefing-back-btn" id="backToFeedBtn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Back to Feed</span>
        </button>
        <button type="button" class="briefing-action-pill" id="catchUpAgainBtn" title="Check for new developments right now">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
          <span>Catch Up Again</span>
        </button>
      </div>

      <div class="briefing-header-card">
        <h2 class="briefing-main-title">
          ${t.activeCategory==="Personalized"?"Your Personalized Briefing":"Your Football Briefing"}
        </h2>
        <p class="briefing-sub-copy">
          Covering key developments since ${a}
        </p>
      </div>

      <div class="briefing-body-card">
        ${Fr(e.markdown||"")}

        <div class="briefing-sources-bar" style="display:flex; flex-direction:column; gap:4px; margin-top:14px; padding-top:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
            <span>Compiled from ${e.sourcesCount||0} verified reports across ${e.eventCount||0} canonical events</span>
            <span style="font-weight:700; color:#3157ff;">
              Powered by 0G
            </span>
          </div>
          <div style="font-size:0.72rem; color:#69728a; margin-top:4px; text-align:left; width:100%;">
            AI Status: <strong>${T(e.provider||"System")}</strong> 
            ${e.successRate!==null&&e.successRate!==void 0?`(Success Rate: <strong>${e.successRate}%</strong>)`:""}
          </div>
        </div>
      </div>
    </div>
  `},ie=()=>{document.querySelector("#backToFeedBtn")?.addEventListener("click",()=>{te=!1,g()}),document.querySelector("#openBriefingBtn")?.addEventListener("click",()=>{te=!0;let e=t.activeCategory==="Personalized"?"personalized":"overall";Nt!==e&&(re=null),Nt=e,g(),re||ut(!1)}),document.querySelector("#catchUpAgainBtn")?.addEventListener("click",()=>{ut(!1)})},ut=async(e=!1)=>{ze=!0,te&&g();let a=e?null:localStorage.getItem("siftle_last_briefing_at"),r=Ne();try{let o=await fetch(I("/api/briefing/delta"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lastBriefingAt:a,context:t.activeCategory==="Personalized"?"personalized":"overall",entities:r})}),s=await o.json();ze=!1,o.ok&&s.success?(re=s,localStorage.setItem("siftle_last_briefing_at",s.periodEnd||new Date().toISOString()),te&&g()):(re={periodStart:new Date().toISOString(),markdown:`### Failed to generate briefing

${s.error||"Please try again in a moment."}`},te&&g())}catch(o){ze=!1,re={periodStart:new Date().toISOString(),markdown:`### Failed to connect to briefing service

${o.message}`},te&&g()}};S?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,o=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,ke();let s=S?.querySelector("#newsSearchInput");s&&(s.focus(),s.setSelectionRange(r,o))});Pe?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),J(),g()});Ue?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),J(),g(),_e(),se(t.activeCategory)});Ce?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),J(),g()});le?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Be()):Ie()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{k("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&Hr(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Me(),F();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,F();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Me(),F();return}let s=a.closest("[data-copy-referral-code]");if(s){let i=s.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>k("Invite code copied"));return}let n=a.closest("[data-copy-referral-link]");if(n){let i=n.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>k("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Rt():Ie())});Yt.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),_e(),se(t.activeCategory),a==="saved"&&(lr(),mt(),Te())),J(),g()})});j?.addEventListener("change",()=>{t.activeArchiveDate=j.value||null,window.history.pushState({},"","#feed"),J(),g(),se(t.activeCategory)});_a?.addEventListener("click",()=>{t.activeArchiveDate=null,j&&(j.value=""),window.history.pushState({},"","#feed"),J(),g(),se(t.activeCategory)});S?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let w=S?.querySelector(".username-display-row"),m=S?.querySelector("#usernameEditForm");if(w&&m){w.style.display="none",m.style.display="flex";let f=m.querySelector("#usernameInput");f&&f.focus()}return}if(a.closest("#cancelUsernameBtn")){let w=S?.querySelector(".username-display-row"),m=S?.querySelector("#usernameEditForm");w&&m&&(w.style.display="flex",m.style.display="none");return}let s=a.closest("#saveUsernameBtn");if(s){let m=S?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(m){let f=m.value.trim().slice(0,15),A=s,b=A.textContent||"Save";A.disabled=!0,A.textContent="Saving...",ir(f),t.profileNotice=null;try{t.walletAddress&&await fe(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},k("Username updated"),F()}catch(M){let $=M instanceof Error?M.message:"Username save failed";t.profileNotice={type:"error",message:$},k($),A.disabled=!1,A.textContent=b,F()}}return}let n=a.closest("[data-portfolio-filter]");if(n){let w=n.getAttribute("data-portfolio-filter");t.portfolioFilter=w,F();return}let i=a.closest("[data-timeframe]");if(i){let w=i.dataset.timeframe;t.activeMarketTimeframe=w,ma();return}let l=a.closest("[data-market-id]");if(l){t.selectedMarketId=l.dataset.marketId??null,U("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),g(),window.scrollTo({top:0,behavior:"smooth"});return}if(a.closest(".read-tweet-btn")){e.stopPropagation();let w=a.closest("[data-story-id]");w&&lt(Number(w.dataset.storyId),!0);return}let p=a.closest("[data-thread-story-id]"),u=a.closest("[data-export-id]"),d=a.closest("[data-export-action]"),v=a.closest("[data-story-id]");if(p){e.stopPropagation();let w=t.stories.find(m=>m.id===Number(p.dataset.threadStoryId));w&&Va(w);return}let h=a.closest(".mobile-bookmark-btn, .bookmark-button");if(h){e.stopPropagation();let w=h.dataset.bookmarkUrl||"",m=t.stories.find(f=>f.sourceUrl===w);if(!m)return;m.saved=!m.saved,m.saved?pe.add(w):pe.delete(w),Ba(),k(m.saved?"Saved to your list":"Removed from saved"),ke();return}if(d){e.stopPropagation(),Cr(Number(d.dataset.exportStoryId),d.dataset.exportAction);return}if(u){e.stopPropagation();let w=Number(u.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===w?null:w,ke();return}if(!v||a.closest("a"))return;let y=Number(v.dataset.storyId),x=t.stories.find(w=>w.id===y);x&&U("feed_story_click",x.sourceUrl,x.headline),lt(y,!0)});S?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");if(!r||e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();let o=Number(r.dataset.storyId),s=t.stories.find(n=>n.id===o);s&&U("feed_story_click",s.sourceUrl,s.headline),lt(o)});L?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let u=t.stories.find(d=>d.id===Number(r.dataset.unlockBriefing));u&&it(u);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let u=decodeURIComponent(o.dataset.unlockBriefingUrl||""),d=Ja(u);d&&(me(d)?Ae(d):it(d));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),g();return}if(a.closest("#openTradeDrawerBtn")){let u=E.find(h=>h.id===t.selectedMarketId);if(u){if(Ke(u,t.marketSnapshots[u.id])){k("This market is resolved and can no longer be traded.");return}if(Qt(u,t.marketSnapshots[u.id])){k("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,U("trade_drawer_open");let d=L.querySelector("#tradeDrawer"),v=L.querySelector("#tradeDrawerBackdrop");d?.classList.add("open"),v?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let u=L.querySelector("#tradeDrawer"),d=L.querySelector("#tradeDrawerBackdrop");u?.classList.remove("open"),d?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let u=E.find(d=>d.id===t.selectedMarketId);if(u){let d=Dr(u),v=`https://api.whatsapp.com/send?text=${encodeURIComponent(d)}`;window.open(v,"_blank")}return}let s=a.closest("[data-market-trade]");if(s&&t.selectedMarketId){let u=s.dataset.marketTrade;hr(t.selectedMarketId,u);return}let n=a.closest("[data-market-option-trade]");if(n&&t.selectedMarketId){let u=n.dataset.marketOptionTrade||t.marketTradeOptionId||"";Ir(t.selectedMarketId,u);return}let i=a.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,g();return}let l=a.closest("[data-market-trade-side]");if(l){if(l.disabled||l.classList.contains("disabled"))return;let u=E.find(h=>h.id===t.selectedMarketId),d=u?t.marketPositions[u.id]:void 0,v=l.dataset.marketTradeSide;if(!de(t.marketOrderMode,v,d))return;t.marketTradeSide=v,g();return}let c=a.closest("[data-market-order-mode]");if(c){t.marketOrderMode=c.dataset.marketOrderMode;let u=E.find(v=>v.id===t.selectedMarketId),d=u?t.marketPositions[u.id]:void 0;t.marketTradeSide=kt(t.marketOrderMode,t.marketTradeSide,d),t.marketTradeAmount=De(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,d),g();return}let p=a.closest("[data-back-to-feed]");if(p){if(p.classList.contains("read-more-news-btn")){let d=new URLSearchParams(window.location.search).get("url"),v=document.querySelector(".detail-card h2")?.textContent||void 0;U("shared_read_more_click",d||void 0,v)}Za()}});L?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=E.find(c=>c.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,s=r?t.marketPositions[r.id]:void 0,n=Number(a.value);t.marketTradeAmount=Number.isFinite(n)?n:0;let i=r&&oe(r)?t.marketTradeAmount:ia(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),l=L.querySelector(".market-inline-payout strong");l&&(l.textContent=`$${H(i)}`)});L?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});L?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=E.find(s=>s.id===t.selectedMarketId),o=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=De(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,o),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Be);window.addEventListener("hashchange",Be);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await ce(t.walletAddress);t.walletBalance=a,_(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),Ma())}});Xe?.addEventListener("click",()=>{if(!et||!Xe)return;let e=!et.hidden;et.hidden=e,Xe.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,ke());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};C&&(C.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,j&&(j.value=""),J(),_e(),se(t.activeCategory)),r.dataset.menuAction==="saved"&&(ga(),mt(),Te(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),J(),g())});var Wr=async()=>{try{let e=await fetch(I("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),g())}catch(e){console.error("Failed to prefetch unlock config:",e)}},qr=()=>{window.setInterval(async()=>{try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(I("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(E=o,t.activeSurface==="markets"&&g())}}catch(e){console.warn("Background market poll failed:",e)}},3e4)};g();_();Wr();se(t.activeCategory);qr();Ea().then(()=>{fr(),g(),_(),window.setTimeout(Jr,1200),er()});var Yr=document.querySelector("#mobileArchiveCard"),be=document.querySelector("#archiveControls");Yr?.addEventListener("click",()=>{if(!be)return;be.classList.toggle("mobile-open")&&setTimeout(()=>be.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Gr=document.querySelector("#archivePill");Gr?.addEventListener("click",e=>{if(e.stopPropagation(),!be)return;be.classList.toggle("mobile-open")&&setTimeout(()=>be.scrollIntoView({behavior:"smooth",block:"center"}),50)});var He=!1,Ot=!1,Jr=()=>{Ot||(Ot=!0,(async()=>{let e=await je();if(He=!!e,e){t.walletConnecting=!0,_();try{let a=await $a();He=!1,t.walletConnecting=!1,a?(t.walletAddress=await je(),t.walletAddress&&(ve(),t.walletBalance=await ce(t.walletAddress),await z()),_(),t.activeSurface==="portfolio"&&g()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),k("Session expired. Please sign in again."),_(),g())}catch(a){console.warn(a),He=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),k("Session expired. Please sign in again."),_(),g()}}await Ta(a=>{He||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),a&&fe(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,_(),a?(Me(),ce(a).then(r=>{t.walletBalance=r,_(),t.activeSurface==="portfolio"&&g()}),z()):t.activeSurface==="portfolio"&&g())})})())};U("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",s=typeof o=="string"?o:r.getAttribute("class")||"",n=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||r.textContent?.trim()==="Open source")&&!s.includes("disabled")&&n!=="#"&&U("open_source")}},!0);
