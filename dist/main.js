import"./chunks/chunk-ZUUPKAA6.js";var Oe=[];var rt="https://faucet.circle.com/",kt="siftle_backend_wallet_migration_notice",Ve=null,D=()=>(Ve||(Ve=import("./chunks/arc-QVRLAGVF.js")),Ve),R=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,ma=async()=>(await D()).connectArcWallet(),ce=async e=>(await D()).readArcUsdcBalance(e),fa=async(e,a,r,s)=>(await D()).payAiBriefingUnlock(e,a,r,s),ga=e=>{D().then(a=>a.resolveLocalTestMarketYes(e))},ha=async e=>(await D()).readArcMarketSnapshot(e);var Dt=async(e,a)=>(await D()).readArcMarketState(e,a),va=async(e,a,r,s,o,n,i)=>(await D()).executeArcMarketOrder(e,a,r,s,o,n,i),ya=async(e,a,r,s,o)=>(await D()).executeArcOptionMarketOrder(e,a,r,s,o),Nt=()=>{D().then(e=>e.disconnectArcWallet())},ba=async(e,a)=>(await D()).claimArcMarketPayout(e,a),ze=async()=>(await D()).getConnectedArcWallet(),wa=async()=>(await D()).validateArcSession(),ka=async e=>(await D()).subscribeArcWallet(e),Sa=async()=>(await D()).triggerGatewayWarmup();var xa="https://siftle.onrender.com",$a=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?xa:""},Ta=$a(),I=e=>`${Ta}${e}`,Ot="siftle_theme",Ma=()=>{try{return window.localStorage.getItem(Ot)==="light"?"light":"dark"}catch{return"dark"}},$e=Ma(),Ht="organic";function Aa(){try{let e=localStorage.getItem("siftle_traffic_source");if(!e){let a=new URLSearchParams(window.location.search),r=a.get("ref")||a.get("utm_source");if(r)r=r.trim().toLowerCase(),r==="twitter"&&(r="x"),r==="instagram"&&(r="ig"),r==="whatsapp"&&(r="wa"),r==="discord"&&(r="dc"),(r==="google_search"||r==="google-search")&&(r="google"),["x","ig","wa","dc","google","organic","briefing"].includes(r)?e=r:e=r.slice(0,20);else{let s=document.referrer;s&&(/twitter\.com|x\.com|t\.co/i.test(s)?e="x":/instagram\.com/i.test(s)?e="ig":/whatsapp\.com|wa\.me/i.test(s)?e="wa":/discord\.com|discordapp\.com/i.test(s)?e="dc":/google\.com|google\.co/i.test(s)&&(e="google"))}e||(e="organic"),localStorage.setItem("siftle_traffic_source",e)}Ht=e}catch(e){console.error("Failed to initialize traffic source:",e)}}Aa();function U(e,a,r){fetch(I("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e,source:Ht,storyUrl:a,headline:r})}).catch(s=>console.error("Failed to track event:",s))}var t={activeSurface:"feed",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:2,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},aiSummaryProofs:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{},portfolioFilter:"open"};var G="global",X=!1,ee=null,St=!1,xt=!1,$t=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";$t&&localStorage.setItem("siftle_pending_referral_code",$t.trim().toUpperCase());var Rt=20,E=Oe,La=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},Le=()=>La(t.portfolioMarketPreviews,E,Oe),Pa=async()=>{t.loadingMarkets=!0,E.length===0&&(E=Oe);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(I("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let s=await r.json();Array.isArray(s)&&s.length>0&&(E=s)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Ft=async()=>{try{let e=await fetch(I("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},zt="siftle.savedUrls",pe=new Set,pt=()=>{try{let e=localStorage.getItem(zt)||"[]",a=JSON.parse(e);pe=new Set(a.filter(Boolean))}catch{pe=new Set}},Ua=()=>{try{localStorage.setItem(zt,JSON.stringify(Array.from(pe)))}catch{}},Te=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!pe.has(e.sourceUrl)};pt();Te();var st=document.querySelector("#dateLabel"),ae=document.querySelector("#categoryTabs"),S=document.querySelector("#storyList"),L=document.querySelector("#storyDetail"),Ze=document.querySelector("#menuButton"),Qe=document.querySelector("#menuPanel"),C=document.querySelector("#menuStatus"),j=document.querySelector("#archiveDateSelect"),Tt=document.querySelector("#archiveStatus"),Ca=document.querySelector("#todayButton"),We=document.querySelector(".brief-hero"),qe=document.querySelector("#archiveControls"),Pe=document.querySelector("[data-surface='markets']"),Ue=document.querySelector("[data-surface='feed']"),Ce=document.querySelector("[data-surface='portfolio']"),le=document.querySelector("#walletButton"),Se=document.querySelector("[data-theme-toggle]"),Ia=document.getElementById("guideToggleButton"),jt=Array.from(document.querySelectorAll("[data-bottom-nav]")),Xe,Ea=()=>{if(!Se)return;let a=`Switch to ${$e==="light"?"dark":"light"} mode`;Se.setAttribute("aria-label",a),Se.title=a,Se.dataset.activeTheme=$e},Wt=e=>{$e=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(Ot,e)}catch{}Ea()};Wt($e);var _=()=>{if(le){let e=le.querySelector(".wallet-button-label");le.classList.toggle("connected",!!t.walletAddress),le.disabled=t.walletConnecting,le.setAttribute("aria-label",t.walletAddress?`Wallet ${R(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),le.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${R(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",_);Se?.addEventListener("click",()=>{Wt($e==="light"?"dark":"light")});Ia?.addEventListener("click",()=>{Ba()});var Ba=()=>{let e=document.createElement("div");e.className="guide-overlay",e.innerHTML=`
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
  `,document.body.appendChild(e);let a=e.querySelector("#guideClose"),r=e.querySelector("#guideStartBtn"),s=()=>e.remove();a.addEventListener("click",s),r.addEventListener("click",s),e.addEventListener("click",o=>{o.target===e&&s()})},_a=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(I("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),s=await r.json().catch(()=>({}));r.ok&&(s.bound||s.reason==="already_bound"||s.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),s.bound&&w("Referral connected"))}catch(r){console.warn(r)}},Me=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(I(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&z()}}},Ie=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,U("wallet_connect_start"),_();try{let e=await ma();if(e){U("wallet_connect_success");let a=sessionStorage.getItem("siftle_landing_url"),r=sessionStorage.getItem("siftle_landing_headline"),s=sessionStorage.getItem("siftle_signup_tracked");a&&!s&&(U("briefing_referral_signup",a,r||void 0),sessionStorage.setItem("siftle_signup_tracked","true")),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),t.walletBalance=await ce(e),await _a(e),Me(),await F(),fe(!0).catch(n=>console.error("Failed to report leaderboard entry:",n));let o=localStorage.getItem(kt);o?(localStorage.removeItem(kt),w(o)):w("Connected to Arc Testnet"),window.location.hash="#portfolio",Be()}}catch(e){U("wallet_connect_failed"),w(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,_()}}},w=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Xe&&window.clearTimeout(Xe),Xe=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=w;var Da=(e,a,r,s)=>{let o=document.createElement("div");o.className="success-modal-overlay",o.innerHTML=`
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
      <div class="success-modal-market-title">${s}</div>
      <button class="success-modal-action-btn" type="button">Awesome</button>
    </div>
  `,document.body.appendChild(o),setTimeout(()=>{o.classList.add("show")},10);let n=()=>{o.classList.remove("show"),setTimeout(()=>{o.remove()},300)};o.querySelector(".success-modal-close-btn")?.addEventListener("click",n),o.querySelector(".success-modal-action-btn")?.addEventListener("click",n),o.addEventListener("click",i=>{i.target===o&&n()})},J=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},qt=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},et=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(t.activeCategory==="Personalized"){let s=Ne(),o=[...s.clubs,...s.managers,...s.players].map(n=>n.toLowerCase()).filter(Boolean);if(o.length>0){let n=`${e.headline} ${e.summary||""} ${e.source||""}`.toLowerCase();if(!o.some(l=>n.includes(l)))return!1}}let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),ot=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,Na=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Oa=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let o=r.slice(0,a).join(" "),n=Math.max(o.lastIndexOf("."),o.lastIndexOf("?"),o.lastIndexOf("!"));return n>o.length*.45?o.slice(0,n+1).trim():`${o.replace(/[,:;.'"!\?\s]+$/,"")}...`},Mt=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let s=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(s&&(a=s[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let o=a.match(/"summary"\s*:\s*"((?:[^"\\]|\\.)*)"/i);if(o){a=o[1].replace(/\\"/g,'"').replace(/\\n/g,`
`).replace(/\\r/g,"\r").replace(/\\t/g,"	").replace(/\\\\/g,"\\").trim();continue}let n=JSON.parse(a);if(typeof n.summary=="string"){a=n.summary.trim();continue}}catch{break}break}return a=a.replace(/\\n/g,`
`).replace(/\\r/g,""),a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/[^\S\r\n]+/g," ").replace(/\r\n/g,`
`).replace(/\n{3,}/g,`

`).trim(),Na(a)?"":a.includes("WHAT HAPPENED")||a.includes("KEY POINTS")?a:Oa(a)},ue=(e,a)=>Mt(a||"")||Mt(e.summary)||e.headline,Ha=e=>{let r=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!r||!window.html2canvas)return;let s=document.createElement("div");s.className="briefing-export-staging";let o=r.cloneNode(!0);o.classList.add("briefing-export-surface"),s.appendChild(o),document.body.appendChild(s);let n=document.documentElement.dataset.theme==="light";window.html2canvas(o,{backgroundColor:n?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(i=>{let l=document.createElement("a");l.download="siftle-briefing.png",l.href=i.toDataURL("image/png"),l.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{s.remove()})};window.downloadBriefingCard=Ha;var Ra=e=>e.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),Fa=(e,a)=>{let r="";if(a)try{r=decodeURIComponent(a)}catch{r=a}let s=window.location.origin,o=window.location.pathname,n=t.stories.find(c=>c.id===e||r&&c.sourceUrl===r),i=n?Ra(n.headline):e>0?`story-${e}`:"",l=e>0?`${s}/story/${i}?utm_source=briefing&url=${encodeURIComponent(n?.sourceUrl||r)}`:r?`${s}/api/redirect?url=${encodeURIComponent(r)}&source=briefing`:`${s}/story/briefing?utm_source=briefing`;navigator.clipboard.writeText(l).then(()=>{w("Shareable link copied to clipboard!")}).catch(()=>{w("Unable to copy link")})};window.copyBriefingLink=Fa;var ut=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let s='<div class="briefing-capture-area">';if(a){let n=a.headline||"Football Match Update";s+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${n}</h3>
    `}r[0].trim()&&(s+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let o="";for(let n=1;n<r.length;n+=2){let i=r[n].trim().toUpperCase(),l=r[n+1]?r[n+1].trim():"";if(!l)continue;let c="";if(i==="KEY POINTS"){let u=l.split(/(?:•|\*|-)\s+/).map(d=>d.replace(/\\n/g,"").trim()).filter(d=>{if(!d||d==="\\n"||d===`
`)return!1;let g=d.trim();return!(g.split(/\s+/).filter(Boolean).length<6||g.length<30||!/[.?!]"?'?$/.test(g)||/^according\s+to\s+\w+$/i.test(g.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")))});u.length>0?c=`<ul class="briefing-list">${u.map(d=>`<li>${d}</li>`).join("")}</ul>`:c=`<p class="briefing-text">${l}</p>`}else c=`<p class="briefing-text">${l}</p>`,i==="TAKEAWAY"&&(o=l);let p=i.toLowerCase().replace(/\s+/g,"-");s+=`
      <div class="briefing-section ${p}-section">
        <h4 class="briefing-title">${i}</h4>
        ${c}
      </div>
    `}return s+="</div>",a&&(s+=`
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
    `),s},Ee=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${$(a)}</p>`:""},za=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},mt=e=>`siftle_ai_briefing_unlock_${za()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Yt=e=>localStorage.getItem(mt(e))||"",ja=e=>{localStorage.removeItem(mt(e))},me=e=>{let r=new URLSearchParams(window.location.search).get("url");return r&&r===e.sourceUrl?!0:!!Yt(e)},Gt=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:pe.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Wa=e=>{let a=t.stories.find(o=>o.sourceUrl===e);if(a)return a;let s=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(o=>o.sourceUrl===e);if(s)return s;if(t.selectedMarketId){let o=E.find(n=>n.id===t.selectedMarketId);if(o){let n=Ye(o).evidence.find(i=>i.sourceUrl===e);if(n)return Gt(o,n)}}return null},ft=(e,a)=>{let r=ar(e,a);return r===null?null:r-Rt*60*1e3},Jt=(e,a)=>{let r=ft(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},Kt=(e,a)=>{let r=ft(e,a);return r===null?null:Date.now()>=r?`Locked ${Rt}m before kickoff`:null},qa=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",s=t.unlockConfig?.x402Enabled,o=!!t.walletAddress;return`
    <div class="briefing-section">
      ${Ee(e)}
      ${a?`
          ${be()}
        `:`
          <p class="briefing-text">
            ${o?s?`Pay a <strong>${r}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${r}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`:"Sign in to access AI briefings."}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${o?s?"Unlock via Circle x402":"AI briefing":"Sign in and access AI briefing"}
          </button>
        `}
    </div>
  `},gt=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],ht=e=>`
  <div class="briefing-section">
    ${Ee(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,nt=async(e,a=!1)=>{if(!t.walletAddress){w("Please sign in to unlock this briefing."),Ie();return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",U("ai_unlock_attempt"),h();try{let r=await fetch(I("/api/summary/unlock-config")),s=await r.json();if(!r.ok||!s.treasuryAddress)throw new Error(s.error||"AI briefing is not configured");let o=Number(s.amountUsdc)||.05;try{let d=await fetch(I(`/api/summary/price?sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(d.ok){let g=await d.json();typeof g.priceUsdc=="number"&&(o=g.priceUsdc)}}catch(d){console.warn("Failed to retrieve autonomous price, falling back to default:",d.message)}let n=await fa(s.treasuryAddress,o,d=>{C&&(C.textContent=d),t.briefingStatusByUrl[e.sourceUrl]=d,h()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=`Briefing unlocked! Charged ${o} USDC (priced by Siftle AI Agent)`,h();let i=await fetch(I("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:n})}),l=await i.json();if(!i.ok||!l.unlockToken)throw new Error(l.error||"AI briefing failed");localStorage.setItem(mt(e),l.unlockToken),U("ai_unlock_success");let c=sessionStorage.getItem("siftle_landing_url"),p=sessionStorage.getItem("siftle_landing_headline");c&&U("briefing_referral_unlock",c,p||void 0),(Number(l?.bonus?.points)||0)>0&&fe(!1).catch(d=>console.error("Failed to refresh leaderboard bonus:",d)),await Ae(e)}catch(r){U("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl];let s=r instanceof Error?r.message:String(r||""),o=s,n=s.toLowerCase();if(n.includes("session expired")||n.includes("sign in first")||n.includes("unauthorized")){try{(await D()).disconnectArcWallet()}catch{}t.walletAddress=null,t.walletBalance=null,o="Your session has expired. Please sign in again to unlock this briefing."}else(n.includes("balance")||n.includes("exceeds balance")||n.includes("transfer amount exceeds"))&&(o="Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC.");w(o)}finally{t.unlockingSummaryUrl=null,h()}}},Ae=async e=>{if(me(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=ue(e,e.ai_summary),U("view_summary"),C&&(C.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded");let r=new URLSearchParams(window.location.search).get("url");if(r&&r===e.sourceUrl){let s=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(s)||(sessionStorage.setItem(s,"true"),U("briefing_unlock",e.sourceUrl,e.headline))}h();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing through 0G...",h();try{let r=new URLSearchParams(window.location.search).get("url"),s=!!(r&&r===e.sourceUrl),o=await fetch(I("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Yt(e),isSharedLanding:s})});if(!o.ok){if(o.status===402){ja(e),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",C&&(C.textContent="Unlock expired. Unlock again to continue."),h();return}throw new Error(`Summary request failed with ${o.status}`)}let n=await o.json();t.aiSummaries[e.sourceUrl]=ue(e,n.summary),t.aiSummaryProofs[e.sourceUrl]=n.proof,t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",C&&n.provider&&(C.textContent=n.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${n.provider}`);let l=new URLSearchParams(window.location.search).get("url");if(l&&l===e.sourceUrl){let c=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(c)||(sessionStorage.setItem(c,"true"),U("briefing_unlock",e.sourceUrl,e.headline))}}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",C&&(C.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,h()}}},it=(e,a=!1)=>{let r=t.stories.find(s=>s.id===e);if(r){if(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),h(),r.type==="tweet"){window.scrollTo({top:0,behavior:"smooth"});return}a&&!me(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),h(),nt(r,!0)):me(r)&&Ae(r),window.scrollTo({top:0,behavior:"smooth"})}},Ya=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),h(),Vt(e),window.scrollTo({top:0,behavior:"smooth"})},Ga=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.location.search?window.history.pushState({},"",window.location.pathname+"#feed"):window.history.pushState({},"","#feed"),h(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Vt=async e=>{try{let a=await fetch(I(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),C&&(C.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),w("That timeline no longer has a verified past update"),C&&(C.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,h()}};function Be(){let e=window.location.pathname.startsWith("/story/"),a=window.location.pathname.startsWith("/thread/");if(e||a){let s=window.location.pathname.split("/").pop()||"",o=e?`#story-${s}`:`#thread-${s}`;window.history.replaceState({},"",`${window.location.pathname}${window.location.search}${o}`)}if(window.location.hash==="#resolve-local-yes"){let s=E.find(o=>o.id==="siftle-local-test-2")||E.find(o=>o.timeframe==="Daily"&&K(o).startsWith("0x00000000000000000000000000000000000001"));if(s){ga(K(s)),ur(s,"yes"),delete t.marketSnapshots[s.id],delete t.marketPositions[s.id],delete t.checkedMarketSnapshots[s.id],delete t.loadingMarketSnapshots[s.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),w("Local test market resolved YES"),F().then(()=>{fe(!0).catch(o=>console.error("Failed to report leaderboard entry:",o)),_(),z()});return}}let r=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||r){t.activeSurface="markets",t.selectedMarketId=r?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,h();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let s=window.location.hash.match(/^#story-(.+)$/),o=window.location.hash.match(/^#thread-(\d+)$/),i=new URLSearchParams(window.location.search).get("url"),l;if(i){sessionStorage.setItem("siftle_landing_url",i);let u=t.stories.find(g=>g.sourceUrl===i);u?.headline?sessionStorage.setItem("siftle_landing_headline",u.headline):sessionStorage.getItem("siftle_landing_headline")||sessionStorage.setItem("siftle_landing_headline","Archived Story");let d=`siftle_ref_tracked_${encodeURIComponent(i)}`;if(sessionStorage.getItem(d)||(sessionStorage.setItem(d,"true"),U("briefing_referral",i,u?.headline||"Archived Story")),l=t.stories.find(g=>g.sourceUrl===i),!l&&s){let g=i;t.loadingSummaryUrl!==g&&(t.loadingSummaryUrl=g,fetch(I(`/api/story?sourceUrl=${encodeURIComponent(g)}`)).then(v=>{if(!v.ok)throw new Error;return v.json()}).then(v=>{t.stories.some(x=>x.sourceUrl===v.sourceUrl)||(v.id=Math.max(9999,...t.stories.map(x=>x.id))+1,t.stories.push(v));let b=t.stories.find(x=>x.sourceUrl===v.sourceUrl);sessionStorage.setItem("siftle_landing_headline",b.headline),U("briefing_referral",i,b.headline),t.selectedStoryId=b.id,h(),Ae(b)}).catch(v=>{console.warn("Failed to load historical story from backend:",v)}).finally(()=>{t.loadingSummaryUrl=null}))}}else if(s){let u=Number(s[1]);isNaN(u)||(l=t.stories.find(d=>d.id===u))}let c=o?t.stories.find(u=>u.id===Number(o[1])):void 0,p=t.selectedStoryId!==null||t.selectedThreadUrl!==null;l?(t.selectedStoryId=l.id,t.selectedThreadUrl=null,t.activeThread=null,h(),Ae(l)):c?(t.selectedStoryId=null,t.selectedThreadUrl=c.sourceUrl,t.activeThread=null,h(),Vt(c)):i||(t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,h(),p&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"})));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h()}var lt=e=>{Tt&&(Tt.textContent=e)},Ja=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Qt(),h());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,s=await fetch(I(r));if(!s.ok)throw new Error(`Feed request failed with ${s.status}`);let o=await s.json();if(t.stories=o.top_stories??[],Te(),t.hasLoadedFeed=!0,st&&(st.textContent=qt(o.date??t.activeArchiveDate)),C)if(t.activeArchiveDate)C.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=o.archive?.provider==="shelby"?"Shelby":"local archive";C.textContent=`Latest published feed loaded from ${n}`}lt(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),Te(),C&&(C.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,h(),Be()}},Ka=async()=>{if(j)try{let e=await fetch(I("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(s=>s.date!==r),j.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(s=>`<option value="${s.date}">${s.date}</option>`)].join(""),j.value=t.activeArchiveDate??"",lt(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),lt("Archive unavailable")}},_e=()=>{St||(St=!0,Ka())},oe=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Ja(e,a)},Va=()=>{xt||(xt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&oe(t.activeCategory,!0),_e()},8e3))};var W=e=>e==="Sports"?"Football":e,Za=e=>/^@/.test(String(e.source||""))||/(?:^|\/)(?:x|twitter)\.com\//i.test(String(e.sourceUrl||"")),Zt=(e,a)=>{let r=e.trim();return r.length<=a?r:`${r.slice(0,Math.max(0,a-1)).trimEnd()}\u2026`},Qa=e=>e.replace(/^@/,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ").filter(Boolean),Xa=e=>{let a=String(e.source||W(e.category)).trim(),r=Qa(a);if(r.length===0)return W(e.category);let s=r.filter((i,l)=>{let c=i.toLowerCase();return!(l>0&&["live","news","official"].includes(c))}),o=s.length>0?s:r,n="";for(let i of o){let l=n?`${n} ${i}`:i;if(l.length>18)break;n=l}return Zt(n||o[0],18)},er=e=>{let a=String(e.headline||"").replace(/\s+/g," ").trim();if(!Za(e))return a;let r=a.replace(/https?:\/\/\S+/gi,"").replace(/\(Source:[^)]+\)\s*$/i,"").replace(/\s+/g," ").trim();if(/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(r))return`Latest from ${Xa(e)}`;let s=r.replace(/^R to\s+@[^:]+:\s*/i,"").trim(),o=s.length>=24&&!/^(?:more here|watch more here)[:.!?]*$/i.test(s)?s:r||a;return Zt(o,150)},Qt=()=>{if(!ae)return;ae.hidden=!1;let e=t.activeCategory==="Personalized";ae.innerHTML=`
    <button class="category-tab ${e?"":"active"}" type="button" data-category="Sports">
      Feed
    </button>
    <button class="category-tab ${e?"active":""}" type="button" data-category="Personalized">
      Personalized
    </button>
  `};var tr=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Xt=(e=[])=>[...e].sort((a,r)=>{let s=new Date(a.publishedAt||0).getTime(),o=new Date(r.publishedAt||0).getTime();return(Number.isNaN(o)?0:o)-(Number.isNaN(s)?0:s)}),Ye=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},ar=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let s=a?.closesAtUnix??0;return s>0?s*1e3:null},rr=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,sr=(e,a)=>({date:rr(e,a),source:e.source,headline:e.headline,summary:ue(e),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),ea=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(I(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),s=[r.current,...Xt(r.items??[])],o=s.filter((l,c,p)=>p.findIndex(u=>u.sourceUrl===l.sourceUrl)===c).map(sr),i=s[0]?.imageUrl;o.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:o,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&h()}}},K=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",ne=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],se=e=>!!(e.optionMarket&&ne(e).length>1),or=e=>{let a=ne(e);return a.find(r=>r.id===t.marketTradeOptionId)||a[0]||null},H=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),$=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),vt=e=>`siftle_profile_username_${e.toLowerCase()}`,ta=e=>e.trim().replace(/\s+/g," ").slice(0,15),ve=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=vt(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=ta(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},nr=e=>{if(!t.walletAddress)return;let a=vt(t.walletAddress),r=ta(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},ir=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let s=localStorage.key(r);s&&s.includes(e)&&a.push(s)}a.forEach(r=>localStorage.removeItem(r))},aa=(e,a,r)=>{if(e==="sell"){let s=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return s<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,s),max:s,fallback:s}}return{min:2,max:2,fallback:2}},De=(e,a,r,s)=>{let{min:o,max:n,fallback:i}=aa(a,r,s);return Number.isFinite(e)?Math.min(n,Math.max(o,e)):i},ra=(e,a,r,s,o)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let n=a==="yes"?o?.yesSharesUsdc??0:o?.noSharesUsdc??0,i=e.yesSharesUsdc,l=e.noSharesUsdc;if(s==="sell")return Math.min(r,n);let c=(a==="yes"?i:l)+r,p=i+l+r;return c<=0||p<=0?r:(n+r)/c*p},sa=(e,a)=>{let r=a?.volumeUsdc??0,s=[];return e.yesSharesUsdc>0&&s.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&s.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),s},lr=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},oa=e=>`siftle_claimed_markets_${e.toLowerCase()}`,je=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(oa(t.walletAddress))||"[]"))}catch{return new Set}},dr=e=>{if(!t.walletAddress)return;let a=je();a.add(e),localStorage.setItem(oa(t.walletAddress),JSON.stringify(Array.from(a)))},Ge=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),de=(e,a,r)=>{let s=r?.yesSharesUsdc??0,o=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?s>0:o>0:a==="yes"?o<=0:s<=0},yt=(e,a,r)=>{if(de(e,a,r))return a;let s=a==="yes"?"no":"yes";return de(e,s,r)?s:a};var cr=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},At=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`};var Lt=e=>{let a=String(e||"").match(/(\d+)\s+wins?/i),r=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:a&&Number(a[1])||0,losses:r&&Number(r[1])||0}};var pr=(e,a)=>{let r=String(e?.optionId||"").trim(),s=Math.max(0,Number(e?.optionSharesUsdc)||0),o=Math.max(0,Number(a?.optionPools?.[r])||0),n=Math.max(0,Number(a?.volumeUsdc)||0);return!r||s<=0?0:o<=0||n<=0?s:s/o*n},tt=(e,a)=>!se(e)||!a?a:{...a,optionPools:Object.fromEntries(ne(e).map(r=>[r.id,0]))};var bt=()=>{let e=0,a=0,r=0,s=E.filter(i=>i.timeframe==="Daily").map(i=>i.id),o=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(o)try{n=JSON.parse(localStorage.getItem(o)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of s){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,a++;continue}if(n[i]?.result==="loss"){r++;continue}let l=t.marketPositions[i],p=t.marketSnapshots[i]?.outcome??0;if(p===0)continue;let u=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,d=[];try{d=JSON.parse(localStorage.getItem(u)||"[]")}catch{}let g=d.includes("yes")&&d.includes("no");if(p===1&&l&&l.yesSharesUsdc>0){let v=g?50:100;e+=v,a++,n[i]={result:"win",points:v}}else if(p===2&&l&&l.noSharesUsdc>0){let v=g?50:100;e+=v,a++,n[i]={result:"win",points:v}}else l&&(l.yesSharesUsdc>0||l.noSharesUsdc>0)&&(r++,n[i]={result:"loss",points:0})}return o&&localStorage.setItem(o,JSON.stringify(n)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},ur=(e,a)=>{let r=K(e).toLowerCase();if(!r)return;let s=`siftle_mock_pos_${r}_`,o=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(s))continue;let l=i.slice(s.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(l)&&o.add(l)}o.forEach(n=>{let i=`${s}${n}`,l={yesSharesUsdc:0,noSharesUsdc:0};try{l=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let c=(Number(l.yesSharesUsdc)||0)>0,p=(Number(l.noSharesUsdc)||0)>0;if(!c&&!p)return;let u=`siftle_traded_sides_${e.id}_${n}`,d=[];try{d=JSON.parse(localStorage.getItem(u)||"[]")}catch{}let g=d.includes("yes")&&d.includes("no"),v=a==="yes"?c:p,b=`siftle_resolved_results_${n}`,x={};try{x=JSON.parse(localStorage.getItem(b)||"{}")}catch{}x[e.id]={result:v?"win":"loss",points:v?g?50:100:0},localStorage.setItem(b,JSON.stringify(x));let k=0,m=0,f=0;Object.values(x).forEach(y=>{y.result==="win"?(m+=1,k+=Number(y.points)||0):y.result==="loss"&&(f+=1)});let A=localStorage.getItem(vt(n))||"";fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:A,points:k,status:`${m} win${m===1?"":"s"}, ${f} loss${f===1?"":"es"}`})}).catch(y=>console.error("Failed to report local resolved score:",y))})},fe=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?bt():null,r=await fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),s=await r.json().catch(()=>({}));if(!r.ok||s?.success===!1)throw new Error(s?.error||"Failed to save leaderboard profile");if(s?.supabaseConfigured&&s?.supabaseSaved===!1)throw new Error(s?.supabaseError||"Supabase did not save profile");return!0},mr=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let s=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let o=JSON.parse(localStorage.getItem(r)||"{}");((Number(o.yesSharesUsdc)||0)>0||(Number(o.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(s)&&e.add(s)}catch{}}}e.forEach(a=>{fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},fr=async e=>{let a=K(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(se(e)&&!t.walletAddress){let r=e.resolvedOptionId||null,s=Number(e.outcome);t.marketSnapshots[e.id]=tt(e,{yesPriceCents:0,noPriceCents:0,volumeUsdc:Number(e.volumeUsdc)||0,yesSharesUsdc:0,noSharesUsdc:0,outcome:s===1||s===2||s===3?s:r?1:0,optionPools:e.optionPools||Object.fromEntries(ne(e).map(o=>[o.id,0])),resolvedOptionId:r,traderCount:0}),t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(se(e)&&t.walletAddress){let{position:r,snapshot:s}=await Dt(a,t.walletAddress);t.marketPositions[e.id]=r,t.marketSnapshots[e.id]=tt(e,s)}else t.marketSnapshots[e.id]=tt(e,await ha(a))}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&h()}}},F=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Ft();let a=Le(),r=await Promise.all(a.map(async s=>{let o=K(s);if(!o)return[s.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:n,snapshot:i}=await Dt(o,t.walletAddress);return t.marketSnapshots[s.id]=i,[s.id,n]}catch(n){return console.warn(`Failed to load portfolio market ${s.id}:`,n),[s.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,fe(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&h()}}},gr=async(e,a)=>{if(!t.walletAddress){w("Session expired or wallet not connected. Please sign in."),Ie();return}let r=Le().find(p=>p.id===e);if(!r)return;t.marketTradeSide=a;let s=K(r);if(!s){w("Deploy this Arc market contract before trading"),h();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await F(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){w("Still loading your position. Try again in a moment."),h();return}let o=t.marketSnapshots[r.id];if(Ge(r,o)){t.tradeDrawerOpen=!1,w("This market is resolved and can no longer be traded."),h();return}let n=o?.yesPriceCents??r.probability,i=o?.noPriceCents??100-r.probability,l=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!de(t.marketOrderMode,a,l)){let p=lr(l),u=t.marketOrderMode==="sell"?p?`You can only exit your ${p.toUpperCase()} shares.`:"You do not have shares to exit in this market.":p?`Exit your ${p.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";w(u),t.marketTradeSide=yt(t.marketOrderMode,a,l),h();return}let c=De(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,l);t.marketTradeAmount=c,U("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",h();let p=await va(s,t.marketOrderMode,a,c,u=>{t.marketTradeStatus=u,h()},n,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await ze(),t.walletAddress&&(t.walletBalance=await ce(t.walletAddress)),await F({force:!0}),fe(!0).catch(u=>console.error("Failed to report leaderboard entry:",u)),t.walletAddress){let u=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,d={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let v=localStorage.getItem(u);if(v){let b=JSON.parse(v);d={yesCost:b.yesCost||0,noCost:b.noCost||0,yesShares:b.yesShares||0,noShares:b.noShares||0}}}catch{}let g=c;if(t.marketOrderMode==="buy"){let v=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,b=[];try{b=JSON.parse(localStorage.getItem(v)||"[]")}catch{}b.includes(a)||(b.push(a),localStorage.setItem(v,JSON.stringify(b))),a==="yes"?(d.yesCost+=g,d.yesShares=(d.yesShares||0)+g/(n/100)):(d.noCost+=g,d.noShares=(d.noShares||0)+g/(i/100))}else{let v=t.marketPositions[r.id];if(v){if(a==="yes"&&v.yesSharesUsdc>0){let b=Math.min(1,g/v.yesSharesUsdc);d.yesCost=Math.max(0,d.yesCost-d.yesCost*b),d.yesShares=Math.max(0,(d.yesShares||0)-(d.yesShares||0)*b)}else if(a==="no"&&v.noSharesUsdc>0){let b=Math.min(1,g/v.noSharesUsdc);d.noCost=Math.max(0,d.noCost-d.noCost*b),d.noShares=Math.max(0,(d.noShares||0)-(d.noShares||0)*b)}}}localStorage.setItem(u,JSON.stringify(d))}w(`Trade confirmed ${p.slice(0,8)}...`),U(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Da(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(p){U("trade_failed"),cr(p)?(Nt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),w("Session expired. Please sign in again.")):w(p instanceof Error?p.message:"Arc trade failed")}finally{t.marketTradeStatus=null,_(),h()}};var ke=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,hr=()=>`
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
`,vr=(e=4)=>`${ke("Loading stories")}${Array.from({length:e},hr).join("")}`,be=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${ke("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,yr=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${ke("Loading thread timeline")}
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
`;var br=(e=3)=>`
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${ke("Loading market evidence")}
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
`,wr=(e=2)=>`
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${ke("Loading portfolio positions")}
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
`,at=e=>{let a=W(e.category).toUpperCase(),r=ot(e).toUpperCase(),s=e.summary?$(e.summary.slice(0,140))+"...":"Tap to view full AI briefing and on-chain intelligence.";return`
    <article class="chelsea-news-card" data-story-id="${e.id}" role="button" tabindex="0" aria-label="Open ${e.headline}">
      <div class="chelsea-card-media">
        <img src="${e.imageUrl}" alt="" loading="lazy" />
        <div class="chelsea-media-badge">
          <span class="badge-cat">${a}</span>
          <span class="badge-time">${r}</span>
        </div>
      </div>
      <div class="chelsea-card-body">
        <h2 class="chelsea-card-title">${er(e)}</h2>
        <p class="chelsea-card-excerpt">${s}</p>
        <div class="chelsea-card-footer">
          <button class="chelsea-action-btn summary-btn" type="button">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#0052FF"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            AI BRIEFING
          </button>
          <span class="chelsea-source-tag">${e.source}</span>
        </div>
      </div>
    </article>
  `};var we=()=>{if(!S)return;if(S.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){S.innerHTML=vr(4);return}if(te){S.innerHTML=Or(),ie();return}let e=$(t.newsSearchQuery.trim()),r=`
    ${e?`<div class="news-feed-search-copy"><p>${et().length} matches for "${e}".</p></div>`:""}
    <div class="feed-minimal-top-bar" style="margin-bottom: 12px;">
      <label class="news-feed-search-bar minimal-search" style="flex: 1;" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search followed news..." value="${$(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </div>
  `;if(t.activeCategory==="Personalized"){let o=Ne(),n=ua(),i=[...o.clubs,...o.players,...o.managers].join(", ");if(!n){S.innerHTML=`
        <div class="briefing-header-card" style="margin-top: 10px; padding: 24px 18px; text-align: center;">
          <h3 style="margin: 0 0 6px 0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Personalize Your Football Feed</h3>
          <p style="font-size: 0.84rem; color: #69728a; margin: 0 auto 16px auto; max-width: 420px;">Type your favorite clubs, managers, and players to build your custom feed.</p>
          <button type="button" class="briefing-back-btn" id="openTopicPickerBtn" style="margin: 0 auto; padding: 6px 20px;">Add Topics</button>
        </div>
      `,document.querySelector("#openTopicPickerBtn")?.addEventListener("click",Fe),ie();return}let l=et(),c=`
      <div class="personalized-minimal-bar">
        <div class="personalized-following-text">
          <span class="following-label">Following:</span>
          <span class="following-topics">${$(i)}</span>
          <button type="button" class="minimal-edit-btn" id="customizeTopicsFeedBtn">Edit</button>
        </div>
      </div>
    `;if(l.length===0){S.innerHTML=c+'<div class="portfolio-empty compact news-search-empty">No stories match your followed topics in recent news. Tap Edit to add more clubs or players.</div>',document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",Fe),ie();return}S.innerHTML=c+l.map(at).join(""),document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",Fe),ie();return}let s=et();if(s.length===0){let o=t.showSaved?[]:t.stories;if(o.length>0){S.innerHTML=r+o.map(at).join(""),ie();return}S.innerHTML=r+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>',ie();return}S.innerHTML=r+s.map(at).join(""),ie()},Pt=e=>new Promise((a,r)=>{let s=new Image;s.crossOrigin="anonymous",s.onload=()=>a(s),s.onerror=()=>r(new Error(`Unable to load image: ${e}`)),s.src=e}),xe=(e,a,r,s,o,n)=>{e.beginPath(),e.moveTo(a+n,r),e.lineTo(a+s-n,r),e.quadraticCurveTo(a+s,r,a+s,r+n),e.lineTo(a+s,r+o-n),e.quadraticCurveTo(a+s,r+o,a+s-n,r+o),e.lineTo(a+n,r+o),e.quadraticCurveTo(a,r+o,a,r+o-n),e.lineTo(a,r+n),e.quadraticCurveTo(a,r,a+n,r),e.closePath()},kr=(e,a,r,s,o,n,i)=>{let l=a.split(/\s+/).filter(Boolean),c=[],p="";for(let u of l){let d=p?`${p} ${u}`:u;if(e.measureText(d).width<=o){p=d;continue}if(p&&c.push(p),p=u,c.length===i)break}if(p&&c.length<i&&c.push(p),l.length>0&&c.length===i){for(;e.measureText(`${c[i-1]}...`).width>o&&c[i-1].length>0;)c[i-1]=c[i-1].slice(0,-1).trim();c[i-1]=`${c[i-1]}...`}return c.forEach((u,d)=>e.fillText(u,r,s+d*n)),s+c.length*n},Sr=(e,a,r,s,o,n,i)=>{let l=Math.max(o/a.naturalWidth,n/a.naturalHeight),c=o/l,p=n/l,u=(a.naturalWidth-c)/2,d=(a.naturalHeight-p)/2;e.save(),xe(e,r,s,o,n,i),e.clip(),e.drawImage(a,u,d,c,p,r,s,o,n),e.restore()},Ut=e=>new Promise((a,r)=>{try{e.toBlob(s=>{s?a(s):r(new Error("Unable to export image"))},"image/png")}catch(s){r(s)}}),xr={"&quot;":'"',"&apos;":"'","&amp;":"&","&lt;":"<","&gt;":">","&nbsp;":" ","&ndash;":"-","&mdash;":"\u2014","&hellip;":"...","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&scaron;":"\u0161","&Scaron;":"\u0160","&eacute;":"\xE9","&Eacute;":"\xC9","&egrave;":"\xE8","&Egrave;":"\xC8","&ecirc;":"\xEA","&Ecirc;":"\xCA","&aacute;":"\xE1","&Aacute;":"\xC1","&agrave;":"\xE0","&Agrave;":"\xC0","&iacute;":"\xED","&Iacute;":"\xCD","&oacute;":"\xF3","&Oacute;":"\xD3","&uacute;":"\xFA","&Uacute;":"\xDA","&uuml;":"\xFC","&Uuml;":"\xDC","&ouml;":"\xF6","&Ouml;":"\xD6","&auml;":"\xE4","&Auml;":"\xC4","&ntilde;":"\xF1","&Ntilde;":"\xD1","&ccedil;":"\xE7","&Ccedil;":"\xC7","&szlig;":"\xDF","&euro;":"\u20AC","&pound;":"\xA3","&copy;":"\xA9"},dt=e=>e?e.replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"-").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))).replace(/&#x([0-9a-fA-F]+);/g,(a,r)=>String.fromCharCode(parseInt(r,16))).replace(/&[a-zA-Z]+;/g,a=>xr[a]||a).replace(/&#[a-zA-Z0-9]*;?/g,""):"",$r=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",Ct=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let s=r.getContext("2d");if(!s)throw new Error("Canvas is not available");s.fillStyle="#f4f7fb",s.fillRect(0,0,r.width,r.height),s.shadowColor="rgba(23, 34, 72, 0.16)",s.shadowBlur=44,s.shadowOffsetY=18,s.fillStyle="#ffffff",xe(s,70,70,940,980,34),s.fill(),s.shadowColor="transparent";let o=await Pt("./assets/siftle-logo-small.png").catch(()=>null);o&&s.drawImage(o,784,106,54,54),s.fillStyle="#071229",s.font="800 34px Inter, Arial, sans-serif",s.textAlign="left",s.fillText("Siftle",850,143),s.fillStyle="#6b748c",s.font="700 24px Inter, Arial, sans-serif",s.fillText(`${dt(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(a){let l=await Pt($r(e.imageUrl)).catch(()=>null);l?Sr(s,l,110,n,860,520,28):(s.fillStyle="#eef2ff",xe(s,110,n,860,520,28),s.fill())}else s.fillStyle="#eef2ff",xe(s,110,n,860,520,28),s.fill();let i=775;return s.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",xe(s,110,i,118,42,21),s.fill(),s.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",s.font="800 22px Inter, Arial, sans-serif",s.fillText(W(e.category),132,i+28),s.fillStyle="#07142f",s.font="680 44px Space Grotesk, Inter, Arial, sans-serif",kr(s,dt(e.headline),110,888,860,54,4),r},na=async e=>{let a=await Ct(e,!0);try{return await Ut(a)}catch{return Ut(await Ct(e,!1))}},ia=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,la=async e=>{let a=await na(e),r=URL.createObjectURL(a),s=document.createElement("a");s.href=r,s.download=ia(e),s.click(),URL.revokeObjectURL(r)},Tr=async e=>{let a=await na(e),r=new File([a],ia(e),{type:"image/png"}),s={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(s)&&navigator.share){await navigator.share(s);return}await la(e)},Mr=async(e,a)=>{let r=t.stories.find(s=>s.id===e);if(r){t.activeShareStoryId=null,we(),w(a==="share"?"Preparing share image":"Preparing download"),C&&(C.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await Tr(r):await la(r),w(a==="share"?"Share image ready":"Image saved"),C&&(C.textContent="Branded story image ready")}catch(s){console.warn(s),w("Image export unavailable"),C&&(C.textContent="Image export was cancelled or unavailable")}}},It=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,s=gt(e);return`
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
      ${r?`<div style="margin-top: 12px;">${be()}</div>`:me(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${be()}</div>`:s?`<div style="margin-top: 12px;">${ht(e)}</div>`:`<div style="margin-top: 12px;">${ut(ue(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},Ar=async(e,a)=>{if(!t.walletAddress){w("Session expired or wallet not connected. Please sign in."),Ie();return}let r=Le().find(p=>p.id===e);if(!r||!se(r))return;let s=ne(r).find(p=>p.id===a);if(!s){w("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await F(),t.marketTradeStatus=null);let o=t.marketSnapshots[r.id];if(Ge(r,o)){w("This market is resolved and can no longer be traded.");return}let n=t.marketPositions[r.id],i=t.marketOrderMode==="sell";if(!i&&n?.optionId){w("Your pick is already locked for this market.");return}if(i&&!n?.optionId){w("You do not have a pick to exit.");return}let l=Math.max(0,Number(n?.optionSharesUsdc)||0);if(i&&l<=0){w("Your pick is still loading. Please try again."),await F({force:!0});return}let c=i?l:De(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=c,t.marketTradeOptionId=i&&n?.optionId||s.id,U("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",h(),await ya(r.id,i?"sell":"buy",i&&n?.optionId||s.id,c,p=>{t.marketTradeStatus=p,h()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await ze(),t.walletAddress&&(t.walletBalance=await ce(t.walletAddress)),await F({force:!0}),U(i?"trade_sell_success":"trade_buy_success"),w(i?"Pick exited":`Pick locked: ${s.label}`),t.tradeDrawerOpen=!1}catch(p){U("trade_failed"),w(p instanceof Error?p.message:"Trade failed")}finally{t.marketTradeStatus=null,_(),h()}},Lr=()=>{if(!L||!S)return;let e=t.stories.find(s=>s.sourceUrl===t.selectedThreadUrl);if(S.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){L.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){L.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${yr(3)}
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
          <span>${tr(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${It(e,"Latest")}
          ${Xt(r?.items??[]).map(s=>It(s,s.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Pr=()=>{if(!L||!S)return;if(t.selectedThreadUrl){Lr();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){L.hidden=!0,L.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),S.hidden=!1;return}if(e.type==="tweet"){S.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode");let i='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';L.innerHTML=`
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
            <span class="tweet-detail-time">${ot(e)}</span>
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
    `;return}let a=ue(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,s=me(e),o=t.unlockingSummaryUrl===e.sourceUrl,n=gt(e);S.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode"),L.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${e.source} - ${ot(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${s?Ee(e):""}
          ${s?r?be():n?ht(e):ut(a,e):qa(e,o)}
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
  `},Ur=e=>{let a=t.marketSnapshots[e.id],r=K(e),s=se(e),o=ne(e).length,n=a?.volumeUsdc??(Number(e.volumeUsdc)||0),i=a?.yesPriceCents,l=i??e.probability,c=s?`${o}`:`${l}%`,p=i===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${i}\xA2 \xB7 No ${100-i}\xA2`,u=i===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:p,d=Ye(e),g=e.timeframe==="Daily"?Jt(e,a):e.closes;return`
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
        <span>${s?"possible outcomes":r?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${s?"Pick exactly one":"Choose a side"}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${s?100:l}%"></span></div>
      <div class="market-volume">
        <span>Market activity</span>
        <strong>Hidden</strong>
      </div>
      ${d.evidence&&d.evidence.length>0?`
      <div class="market-card-news" style="margin: 12px 0 8px; width: 100%; border-top: 1px dashed var(--market-border); padding-top: 10px; box-sizing: border-box;">
        <span style="font-size: 0.72rem; font-weight: 700; color: var(--market-text-muted); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px; text-align: left;">Related News</span>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          ${d.evidence.slice(0,2).map(v=>`
            <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 0.76rem; text-align: left; line-height: 1.35; padding: 4px 0;">
              <span style="background: rgba(59, 130, 246, 0.08); color: var(--market-accent); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 4px; padding: 1px 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; flex-shrink: 0; line-height: 1;">${$(v.source)}</span>
              <span style="color: var(--market-text-main); font-weight: 500;">${$(v.headline)}</span>
            </div>
          `).join("")}
        </div>
      </div>
      `:""}
      <div class="market-card-footer">
        <span>${d.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${g}`:`Closes ${g}`}</span>
      </div>
    </button>
  `},Cr=e=>{let a=Ye(e),s=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,o=100-s,n=a.evidence[0],i=n?n.headline:"No updates yet",l=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${s}\xA2 | \u{1F534} *No:* ${o}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${l}`},Ir=e=>{if(!S||!L)return;let a=Ye(e),r=!t.checkedMarketEvidence[e.id],s=K(e),o=t.marketSnapshots[e.id],n=se(e),i=ne(e);n&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let l=or(e),c=!!(s&&!o),p=o?.yesPriceCents??(s?e.probability:0),u=o?.noPriceCents??(s?100-e.probability:0),d=c?"":s?`${p}\xA2`:"--",g=c?"":s?`${u}\xA2`:"--",v=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},b=!!v.optionId;n&&b&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),n&&!b&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let x=n&&t.marketOrderMode==="sell"&&b?Math.max(0,Number(v.optionSharesUsdc)||0):0,k=x>0?x:De(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,v),m=x>0?{min:0,max:x}:aa(t.marketOrderMode,t.marketTradeSide,v),f=t.marketOrderMode==="buy"?"exactly $2.00 USDC":`Up to $${H(m.max)} USDC`,A=!t.walletAddress||t.hasLoadedPortfolioPositions,y=Ge(e,o),M=Kt(e,o),T=!!M;n||(t.marketTradeSide=yt(t.marketOrderMode,t.marketTradeSide,v));let P=!n&&!y&&!T&&A&&de(t.marketOrderMode,"yes",v),N=!n&&!y&&!T&&A&&de(t.marketOrderMode,"no",v),Y=n?!y&&!T&&A&&(t.marketOrderMode==="sell"?b:!b&&!!l):!y&&!T&&A&&de(t.marketOrderMode,t.marketTradeSide,v),q=y?"Market resolved":M||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),V=y?"Market resolved":M||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),Z=n?k:ra(o,t.marketTradeSide,k,t.marketOrderMode,v),Q=t.marketOrderMode==="buy"?"Buy":"Exit",ge=n?"Pick one outcome":s?"Arc testnet live":"Contract not deployed";S.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode"),fr(e),ea(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&F({force:!t.hasLoadedPortfolioPositions});let wt=n?!!v.optionId:v.yesSharesUsdc>0||v.noSharesUsdc>0,Ke="";n&&wt&&t.walletAddress?Ke=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${$(v.optionLabel||"Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Status</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">Locked in</strong>
          </div>
        </div>
      </div>
    `:wt&&t.walletAddress&&(Ke=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${sa(v,o).map(O=>`
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
          ${Ke}
          ${a.imageUrl?`
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${a.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          `:""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${ft(e,o)===null?"Closes":"Trade lock"}</span>
              <strong>${Jt(e,o)}</strong>
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
              ${r?br(3):a.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':a.evidence.map(B=>{let O=Gt(e,B),he=t.unlockingSummaryUrl===B.sourceUrl;return`
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
                    ${he?`<div style="margin-top: 12px;">${be()}</div>`:me(O)?t.loadingSummaryUrl===B.sourceUrl?`<div style="margin-top: 12px;">${be()}</div>`:gt(O)?`<div style="margin-top: 12px;">${ht(O)}</div>`:`<div style="margin-top: 12px;">${ut(ue(O,t.aiSummaries[B.sourceUrl]),O)}</div>`:""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${n?`<span>${b?"Pick locked":"Choose one option"}</span><span><strong>${i.length} options</strong></span>`:`<span>Choose a side</span><span><strong>${t.marketOrderMode==="sell"?"Exit available":"Trade open"}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${y||T?"disabled":""}>
          ${y?"Market Resolved":M||(n?b?"Pick Locked":"Pick Outcome":"Trade Market")}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${y||T?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${y||T?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?i.map(B=>{let O=t.marketTradeOptionId===B.id||v.optionId===B.id,he=y||T||t.marketOrderMode==="sell"||b||!A;return`
                  <button type="button" class="market-side option ${O?"active":""} ${he?"disabled":""}" data-market-option-id="${$(B.id)}" ${he?"disabled":""}>
                    <span>${$(B.label)}</span>
                    ${v.optionId===B.id?"<small>Your pick</small>":""}
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
              <input id="marketAmountInput" type="number" min="${m.min.toFixed(2)}" max="${Math.max(m.min,m.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${k}" data-market-amount ${y||T||t.marketOrderMode==="buy"?"disabled":""} style="${t.marketOrderMode==="buy"?"opacity: 0.7; cursor: not-allowed;":""}" />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>Market amounts are hidden while this market is open.</span>
          </div>

          <div class="drawer-action-container">
            ${c?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:y?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':T?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${M}</button>`:t.walletAddress?A?n&&t.marketOrderMode==="sell"&&b?`<button type="button" class="market-submit-button" data-market-option-trade="${$(v.optionId||"")}">Exit pick</button>`:Y?n?`<button type="button" class="market-submit-button" data-market-option-trade="${$(l?.id||"")}">Confirm ${$(l?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${Q} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${Q.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},da=()=>{if(!S||!L)return;if(We?.toggleAttribute("hidden",!0),qe?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.add("active"),Ue?.classList.remove("active"),Ce?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&E.forEach(n=>{ea(n)})},750),t.selectedMarketId){let n=E.find(i=>i.id===t.selectedMarketId);if(n){Ir(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),L.hidden=!0,L.classList.remove("fullscreen"),S.hidden=!1,S.classList.add("markets-list");let e=E,r=`
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
          <a class="arc-faucet-button" href="${rt}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
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
    `;return}let s="",o=(n,i,l)=>l.length===0?"":`
      <div class="market-timeframe-section">
        <div class="timeframe-section-header">
          <div class="timeframe-section-header-left">
            <h2>${n}</h2>
            <span class="timeframe-section-subtitle">${i}</span>
          </div>
          <span class="timeframe-section-count-badge">${l.length} ${l.length===1?"market":"markets"}</span>
        </div>
        <section class="markets-grid" aria-label="${n} prediction markets">
          ${l.map(Ur).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(c=>c.timeframe==="Daily"),i=e.filter(c=>c.timeframe==="Weekly"),l=e.filter(c=>c.timeframe==="Sagas");s=`
      ${o("Daily","Ends in a day or two",n)}
      ${o("Weekly","Ends in a week",i)}
      ${o("Sagas (Long-term)","Narratives & futures",l)}
    `}else{let n=e.filter(c=>c.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,l="";t.activeMarketTimeframe==="Daily"?l="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?l="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",l="Narratives & futures"),s=`
      ${o(i,l,n)}
    `}S.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${rt}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${s||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},ca=()=>{if(!S||!L)return;We?.toggleAttribute("hidden",!0),qe?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.remove("active"),Ce?.classList.remove("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,S.hidden=!1,S.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?bt():null;t.walletAddress&&e&&fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(m=>console.error("Failed to report user score:",m)),ee&&(clearInterval(ee),ee=null),S.innerHTML=`
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
  `,((m="2026-07-19T23:59:59.000Z")=>{let f=document.getElementById("seasonTimer");ee&&clearInterval(ee);let A=()=>{let M=new Date(m).getTime()-new Date().getTime();if(M<=0){f&&(f.innerText="Season Finished!"),ee&&clearInterval(ee);return}let T=Math.floor(M/(1e3*60*60*24)),P=Math.floor(M%(1e3*60*60*24)/(1e3*60*60)),N=Math.floor(M%(1e3*60*60)/(1e3*60)),Y=Math.floor(M%(1e3*60)/1e3);f&&(f.innerText=`${T}d ${P}h ${N}m ${Y}s`)};A(),ee=setInterval(A,1e3)})();let r=m=>m.map((f,A)=>{let y=Number(f.globalRank)||A+1,M=String(f.username||""),T=!!(t.walletAddress&&M.toLowerCase()===t.walletAddress.toLowerCase()),P=T&&t.profileUsername?t.profileUsername:f.displayName||M,N=T?`${t.profileUsername?P:R(M)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,Y=$(N),q=At(f.status);if(f.totalTrades!==void 0&&f.aiBriefingUnlocks!==void 0){let Je=Lt(f.status);q=`${Je.wins}W - ${Je.losses}L \xB7 ${f.totalTrades} trades \xB7 ${f.aiBriefingUnlocks} unlocks`}let V=$(q),Z=f.nextSeasonDivision?`Division ${f.nextSeasonDivision}`:"Qualify",Q=y<=10?"promotion-zone":"safety-zone",ge=y<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${T?"user-highlight":""} ${Q}" role="listitem">
        <div class="leaderboard-row-left">
          ${ge}
          <span class="leaderboard-rank rank-${y}">${y}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(f.points)||0} pts</strong>
          <span>${f.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${$(Z)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${V}</span>
        </div>
      </div>
    `}).join(""),s=m=>m.map((f,A)=>{let y=A+1,M=String(f.username||""),T=!!(t.walletAddress&&M.toLowerCase()===t.walletAddress.toLowerCase()),P=T&&t.profileUsername?t.profileUsername:f.displayName||M,N=At(f.status);if(f.totalTrades!==void 0&&f.aiBriefingUnlocks!==void 0){let ge=Lt(f.status);N=`${ge.wins}W - ${ge.losses}L \xB7 ${f.totalTrades} trades \xB7 ${f.aiBriefingUnlocks} unlocks`}let Y=$(N),q=T?`${t.profileUsername?P:R(M)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,V=$(q),Z="safety-zone",Q='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return y<=2?(Z="promotion-zone",Q='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):y>=5&&(Z="relegation-zone",Q='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${T?"user-highlight":""} ${Z}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${Q}
          <span class="leaderboard-rank rank-${y}" style="flex-shrink: 0; margin-right: 4px;">${y}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${V}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(f.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${Y}</span>
        </div>
      </div>
    `}).join(""),o=m=>m.map((f,A)=>{let y=A+1,M=String(f.username||""),T=!!(t.walletAddress&&M.toLowerCase()===t.walletAddress.toLowerCase()),P=T&&t.profileUsername?t.profileUsername:f.displayName||M,N=T?`${t.profileUsername?P:R(M)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,Y=$(N),q=Number(f.unlocks)||0,V=Number(f.points)||0,Z=f.status||`${q} briefing unlock${q===1?"":"s"}`;return`
      <div class="leaderboard-row global-row ${T?"user-highlight":""}" role="listitem">
        <div class="leaderboard-row-left">
          <span class="leaderboard-rank rank-${y}">${y}</span>
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
    `)},i=()=>{let m=document.getElementById("leaderboardListContainer");n(m,6),fetch(I("/api/leaderboard/preseason")).then(f=>f.json()).then(f=>{let A=f.players||[];m&&(m.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the preseason leaderboard yet. Unlock a daily AI briefing to join!</p>`:o(A))}).catch(f=>{console.error("Failed to load preseason leaderboard:",f),m&&(m.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading preseason leaderboard. Please try again.</p>`)})},l=()=>{let m=document.getElementById("season1LeaderboardListContainer");n(m,6),fetch(I("/api/leaderboard/season1")).then(f=>f.json()).then(f=>{let A=f.map((y,M)=>{let T=M+1,P=null;return T<=6?P=1:T<=12&&(P=2),{username:y.wallet_address,displayName:y.username,points:y.points,status:`${y.wins} wins, ${y.losses} losses`,totalTrades:y.total_trades,aiBriefingUnlocks:y.ai_briefing_unlocks,globalRank:T,prizeEligible:T<=10,nextSeasonDivision:P}});if(m)if(G==="global")m.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in Season 1.</p>`:r(A);else{let y=document.getElementById("season1DivisionSelector"),M=y?Number(y.value):1,T=A.filter(P=>P.nextSeasonDivision===M);m.innerHTML=T.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in this division.</p>`:s(T)}}).catch(f=>{console.error("Failed to load Season 1 archive:",f),m&&(m.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading Season 1 leaderboard archive. Please try again.</p>`)})},c=m=>{G=m,document.querySelectorAll("[data-season1-view]").forEach(f=>{f.classList.toggle("active",f.dataset.season1View===m)}),document.getElementById("season1DivisionControls")?.toggleAttribute("hidden",m!=="division"),document.getElementById("season1GlobalControls")?.toggleAttribute("hidden",m!=="global"),document.getElementById("season1PrizeBox")?.toggleAttribute("hidden",m!=="global"),l()};i(),X&&c(G);let p=document.getElementById("archiveExpandBtn"),u=document.getElementById("archiveContent"),d=document.getElementById("archiveChevron");p?.addEventListener("click",()=>{X=!X,u&&(u.style.display=X?"block":"none"),d&&(d.style.transform=X?"rotate(180deg)":"rotate(0deg)"),X&&c(G)}),document.querySelectorAll("[data-season1-view]").forEach(m=>{m.addEventListener("click",()=>{let f=m.dataset.season1View==="division"?"division":"global";c(f)})}),document.getElementById("season1DivisionSelector")?.addEventListener("change",()=>{l()}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){w("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let f=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,f.toFixed(2)),t.walletBalance=f.toFixed(2),w("Claimed $100 USDC mock credits!"),_(),ca()}else w("Opening Circle Faucet..."),window.open(rt,"_blank")});let b=document.getElementById("howItWorksBtn"),x=document.getElementById("howItWorksModal"),k=document.getElementById("closeRulesModalBtn");b?.addEventListener("click",()=>{x&&x.classList.add("active")}),k?.addEventListener("click",()=>{x&&x.classList.remove("active")}),x?.addEventListener("click",m=>{m.target===x&&x.classList.remove("active")})},pa=()=>{t.activeSurface="feed",t.selectedMarketId=null,We?.toggleAttribute("hidden",!0),qe?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.add("active"),Ce?.classList.remove("active"),S?.classList.remove("markets-list")},Er=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",Et=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id];if(se(e)){let b=r?.resolvedOptionId||null,x=!!b,k=x&&a.optionId===b,m=pr(a,r),f=k?m:0,A=ne(e).find(T=>T.id===b)?.label,y=!!a.claimedAt||je().has(e.id),M=!!t.claimingMarketIds[e.id];return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${x?`Resolved: ${$(A||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${$(a.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${H(a.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${H(f)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${x?"":`Closes ${e.closes}`}</span>
          ${x?y?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':M?'<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>':k?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(f)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let s=Er(r?.outcome),o=sa(a,r),n=o.reduce((b,x)=>Math.max(b,x.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,l=r?.outcome??0,c=je().has(e.id),p=l===1?a.yesSharesUsdc:l===2?a.noSharesUsdc:0,u=l===1?r?.yesSharesUsdc??0:l===2?r?.noSharesUsdc??0:0,d=r?.volumeUsdc??0,g=p>0&&u>0?p/u*d:0,v=l===0?"":c?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':g>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(g)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${s}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${H(n)}</strong></div>
        ${o.map(b=>`
          <div><span>${b.label}</span><strong>${H(b.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${H(i)} total shares`:""}</span>
        ${v||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Br=async e=>{if(!t.walletAddress){w("Please sign in first.");return}let a=Le().find(s=>s.id===e),r=a?K(a):"";if(!a||!r){w("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,z(),U("claim_attempt"),bt();let s=await ba(r,t.walletAddress);U("claim_success"),s.won&&dr(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await ce(t.walletAddress),await F(),w(s.won?`Claimed $${H(s.amountUsdc)}`:"No payout to claim"),_(),z()}catch(s){U("claim_failed"),w(s instanceof Error?s.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],z()}},_r=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(o=>{let n=o.displayName||R(o.walletAddress),i=o.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${$(n)}</strong>
            <span>${R(o.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${o.used}/${o.maxUses}</strong>
            <span>${i?"Expired":`${o.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',s=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${$(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${$(a.code)}">
              <span>Invite code</span>
              <strong>${$(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${$(a.inviteLink)}">
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
      ${s}
    </section>
  `},z=()=>{if(!S||!L)return;We?.toggleAttribute("hidden",!0),qe?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.remove("active"),Ce?.classList.add("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,S.hidden=!1,S.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Me(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&Ft(),F({force:!t.hasLoadedPortfolioPositions}));let a=je(),r=Le().filter(d=>{let g=t.marketPositions[d.id];return a.has(d.id)||g&&(g.yesSharesUsdc+g.noSharesUsdc>0||(g.optionSharesUsdc||0)>0)}),s=r.filter(d=>(t.marketSnapshots[d.id]?.outcome??0)===0),o=r.filter(d=>(t.marketSnapshots[d.id]?.outcome??0)!==0),n=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?R(t.walletAddress):"Anonymous"),l=$(i),c=$(t.profileUsername||""),p=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${$(t.profileNotice.message)}</div>`:"",u=i.charAt(0).toUpperCase();S.innerHTML=`
    <section class="portfolio-surface">
      <div class="institutional-networth-hero">
        <div class="networth-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#0052FF"><circle cx="12" cy="12" r="10"/></svg>
          <span>Institutional Portfolio Net Worth</span>
        </div>
        <div class="networth-amount">
          ${t.walletAddress?t.walletBalance===null?"$1,610.00 USDC":`${t.walletBalance} USDC`:"$0.00 USDC"}
        </div>
        <div class="networth-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          <span>+14.2% Return (Circle x402 Protocol)</span>
        </div>
      </div>

      <div class="portfolio-stats-grid">
        <div class="portfolio-stat-card">
          <span>Total Trades Settled</span>
          <strong>424 Trades</strong>
        </div>
        <div class="portfolio-stat-card">
          <span>Prediction Volume</span>
          <strong>$1,610.00 USDC</strong>
        </div>
        <div class="portfolio-stat-card">
          <span>AI Briefings Sold</span>
          <strong>1,582 Unlocks</strong>
        </div>
        <div class="portfolio-stat-card">
          <span>Protocol Revenue</span>
          <strong>$45.07 USDC</strong>
        </div>
      </div>
      <div class="portfolio-top-grid">
        ${_r(n)}
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
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${ke("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
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
        <button class="${t.portfolioFilter==="open"?"active":""}" type="button" data-portfolio-filter="open">Open ${s.length}</button>
        <button class="${t.portfolioFilter==="finalized"?"active":""}" type="button" data-portfolio-filter="finalized">Finalized ${o.length}</button>
      </div>
      ${t.loadingPortfolioPositions?wr(2):t.walletAddress?r.length===0?'<div class="portfolio-empty">No predictions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':t.portfolioFilter==="open"?`
                <section class="portfolio-position-section">
                  <h2>Open Predictions</h2>
                  ${s.length?s.map(Et).join(""):'<div class="portfolio-empty compact">No active predictions open.</div>'}
                </section>
              `:`
                <section class="portfolio-position-section">
                  <h2>Prediction History (Finalized)</h2>
                  ${o.length?o.map(Et).join(""):'<div class="portfolio-empty compact">No finalized predictions.</div>'}
                </section>
              `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market predictions.</div>'}
    </section>
  `},h=()=>{if(jt.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){da();return}if(t.activeSurface==="portfolio"){z();return}if(t.activeSurface==="leaderboard"){ca();return}pa(),Qt(),we(),Pr(),j&&(j.value=t.activeArchiveDate??"")};st.textContent=qt();ae?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");if(!r)return;let s=r.dataset.category;t.activeCategory=s,te=!1,re=null,window.history.pushState({},"","#feed"),J(),h(),s==="Personalized"&&!ua()&&Fe(),_e(),oe(t.activeCategory)});var te=!1,Bt="overall",re=null,Re=!1,Ne=()=>{try{let e=localStorage.getItem("siftle_followed_entities");if(e)return JSON.parse(e)}catch{}return{clubs:[],managers:[],players:[]}},ua=()=>{let e=Ne();return(e.clubs?.length||0)+(e.managers?.length||0)+(e.players?.length||0)>0},Dr=e=>{localStorage.setItem("siftle_followed_entities",JSON.stringify(e))},Nr=e=>{if(!e)return"";let a=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),s=dt(a).split(`
`),o="",n="",i=!1,l=!1;for(let c=0;c<s.length;c++){let p=s[c].trim();if(!p)continue;if(/what matters/i.test(p)||p.includes("\u{1F3AF}")){i&&(n+="</ul></div>",i=!1);let g=p.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");n+=`
        <div class="briefing-highlight-box what-matters">
          <h4>${$(g||"What Matters Most")}</h4>
          <p>
      `,l=!0;continue}if(/watch next/i.test(p)||p.includes("\u23F1\uFE0F")){l&&(n+="</p></div>",l=!1);let g=p.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");n+=`
        <div class="briefing-highlight-box watch-next">
          <h4>${$(g||"Key Things to Watch")}</h4>
          <ul>
      `,i=!0;continue}if(p.startsWith("## ")||p.startsWith("# "))continue;if(i){let g=p.replace(/^[-*]\s*/,"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");g&&(n+=`<li>${g}</li>`);continue}if(l){let g=p.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");n+=`${g} `;continue}let u=p.match(/^(?:###\s*)?(\d+)\.\s*(.*)$/);if(u){let g=u[1],v=u[2].replace(/\*\*/g,"").trim(),b="",x="",k=c+1;for(;k<s.length&&!s[k].trim().match(/^(?:###\s*)?(?:\d+\.|WHAT MATTERS|WATCH NEXT|🎯|⏱️)/i);){let y=s[k].trim();y.startsWith("*[")&&y.endsWith("]*")?x=y.slice(2,-2):y.startsWith("*")&&y.endsWith("*")?x=y.slice(1,-1):y.length>0&&!y.startsWith("###")&&(b+=(b?" ":"")+y),k++}c=k-1;let m="",f=b.replace(/\.\.\.$/,"").trim();f=f.replace(/[,;:\s]+(?:but|and|or|the|a|an|with|in|on|of|to|for|as|is|was|are|were|after|while|that|which|who)$/i,"").trim(),f&&!f.endsWith("...")&&f.length>=35&&f.split(" ").length>=7?m=f:m=v,m=m.replace(/^(?:deal done|here we go|official,?\s*exclusive\s*story\s*confirmed|breaking news|breaking|official|exclusive|update)\s*[:\.\-]?\s*/gi,"").replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi,"").replace(/@[a-zA-Z0-9_]+/g,"").replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g,"").replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g,"").replace(/\s+/g," ").trim(),m=m.replace(/[,;:\-\s]+$/,""),m.length>0&&(m=m.charAt(0).toUpperCase()+m.slice(1)),m.endsWith(".")||(m+=".");let A=x.replace(/·\s*(confirmed|in progress|major|reported).*/i,"").trim();o+=`
        <div class="briefing-event-item-card">
          <div class="briefing-event-item-header">
            <span class="briefing-event-num-pill">${g}</span>
            <div class="briefing-event-item-content">
              <p class="briefing-event-item-single-text">${$(m)}</p>
              <div class="briefing-event-item-meta">
                ${A?`<span class="briefing-source-tag">${$(A)}</span>`:""}
              </div>
            </div>
          </div>
        </div>
      `;continue}if(p.startsWith("### ")&&!p.match(/###\s*\d+\./)){let g=p.replace(/^###\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");n+=`<h4 style="margin: 12px 0 6px 0; font-family: Outfit, sans-serif; font-size: 1rem; color: inherit;">${$(g)}</h4>`;continue}let d=p.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");n+=`<p style="margin: 0 0 10px 0; font-size: 0.88rem; color: inherit; line-height: 1.5;">${d}</p>`}return l&&(n+="</p></div>"),i&&(n+="</ul></div>"),o+n},Fe=()=>{document.querySelectorAll(".personalization-modal-overlay").forEach(s=>s.remove());let e=Ne(),a=document.createElement("div");a.className="personalization-modal-overlay",a.innerHTML=`
    <div class="custom-topics-modal">
      <button class="modal-close-icon-btn" id="prefCloseBtn" type="button" aria-label="Close">&times;</button>
      <div style="margin-bottom: 6px;">
        <h3 style="font-family: Outfit, sans-serif; font-weight: 700; margin: 0; font-size: 1.22rem;">Personalize Your Football Feed</h3>
      </div>
      <p style="margin: 0 0 16px 0; font-size: 0.82rem; color: #69728a; line-height: 1.4;">Type the clubs, managers, and players you follow (comma separated). Siftle will tailor your feed and catch-up briefings to these topics.</p>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Clubs</label>
        <input type="text" class="topic-text-field" id="clubInput" placeholder="e.g. Chelsea, Real Madrid, Arsenal" value="${$(e.clubs.join(", "))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Managers</label>
        <input type="text" class="topic-text-field" id="managerInput" placeholder="e.g. Enzo Maresca, Mikel Arteta, Pep Guardiola" value="${$(e.managers.join(", "))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Players</label>
        <input type="text" class="topic-text-field" id="playerInput" placeholder="e.g. Cole Palmer, Bukayo Saka, Kylian Mbappe" value="${$(e.players.join(", "))}" />
      </div>

      <div class="custom-modal-btn-row">
        <button id="prefSaveBtn" class="modal-save-btn" type="button">Save Topics</button>
        <button id="prefClearBtn" class="modal-clear-btn" type="button">Clear All</button>
      </div>
    </div>
  `,document.body.appendChild(a);let r=()=>a.remove();a.querySelector("#prefCloseBtn")?.addEventListener("click",r),a.addEventListener("click",s=>{s.target===a&&r()}),a.querySelector("#prefClearBtn")?.addEventListener("click",()=>{a.querySelector("#clubInput").value="",a.querySelector("#managerInput").value="",a.querySelector("#playerInput").value=""}),a.querySelector("#prefSaveBtn")?.addEventListener("click",()=>{let s=a.querySelector("#clubInput")?.value||"",o=a.querySelector("#managerInput")?.value||"",n=a.querySelector("#playerInput")?.value||"",i=c=>c.split(",").map(p=>p.trim()).filter(Boolean),l={clubs:i(s),managers:i(o),players:i(n)};Dr(l),w("Topics saved"),r(),t.activeCategory="Personalized",h()})},Or=()=>{if(Re)return`
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
    `;if(!re)return ct(!1),`
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
        ${Nr(e.markdown||"")}

        <div class="briefing-sources-bar" style="display:flex; flex-direction:column; gap:4px; margin-top:14px; padding-top:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
            <span>Compiled from ${e.sourcesCount||0} verified reports across ${e.eventCount||0} canonical events</span>
            <span style="font-weight:700; color:#3157ff;">
              Powered by 0G
            </span>
          </div>
          <div style="font-size:0.72rem; color:#69728a; margin-top:4px; text-align:left; width:100%;">
            AI Status: <strong>${$(e.provider||"System")}</strong> 
            ${e.successRate!==null&&e.successRate!==void 0?`(Success Rate: <strong>${e.successRate}%</strong>)`:""}
          </div>
        </div>
      </div>
    </div>
  `},ie=()=>{document.querySelector("#backToFeedBtn")?.addEventListener("click",()=>{te=!1,h()}),document.querySelector("#openBriefingBtn")?.addEventListener("click",()=>{te=!0;let e=t.activeCategory==="Personalized"?"personalized":"overall";Bt!==e&&(re=null),Bt=e,h(),re||ct(!1)}),document.querySelector("#catchUpAgainBtn")?.addEventListener("click",()=>{ct(!1)})},ct=async(e=!1)=>{Re=!0,te&&h();let a=e?null:localStorage.getItem("siftle_last_briefing_at"),r=Ne();try{let s=await fetch(I("/api/briefing/delta"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lastBriefingAt:a,context:t.activeCategory==="Personalized"?"personalized":"overall",entities:r})}),o=await s.json();Re=!1,s.ok&&o.success?(re=o,localStorage.setItem("siftle_last_briefing_at",o.periodEnd||new Date().toISOString()),te&&h()):(re={periodStart:new Date().toISOString(),markdown:`### Failed to generate briefing

${o.error||"Please try again in a moment."}`},te&&h())}catch(s){Re=!1,re={periodStart:new Date().toISOString(),markdown:`### Failed to connect to briefing service

${s.message}`},te&&h()}};S?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,s=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,we();let o=S?.querySelector("#newsSearchInput");o&&(o.focus(),o.setSelectionRange(r,s))});Pe?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),J(),h()});Ue?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),J(),h(),_e(),oe(t.activeCategory)});Ce?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),J(),h()});le?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Be()):Ie()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{w("Wallet address copied!")})}let s=a.closest("[data-claim-market]");if(s){let i=s.getAttribute("data-claim-market");i&&Br(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Me(),z();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,z();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Me(),z();return}let o=a.closest("[data-copy-referral-code]");if(o){let i=o.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>w("Invite code copied"));return}let n=a.closest("[data-copy-referral-link]");if(n){let i=n.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>w("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Nt():Ie())});jt.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),_e(),oe(t.activeCategory),a==="saved"&&(ir(),pt(),Te())),J(),h()})});j?.addEventListener("change",()=>{t.activeArchiveDate=j.value||null,window.history.pushState({},"","#feed"),J(),h(),oe(t.activeCategory)});Ca?.addEventListener("click",()=>{t.activeArchiveDate=null,j&&(j.value=""),window.history.pushState({},"","#feed"),J(),h(),oe(t.activeCategory)});S?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let k=S?.querySelector(".username-display-row"),m=S?.querySelector("#usernameEditForm");if(k&&m){k.style.display="none",m.style.display="flex";let f=m.querySelector("#usernameInput");f&&f.focus()}return}if(a.closest("#cancelUsernameBtn")){let k=S?.querySelector(".username-display-row"),m=S?.querySelector("#usernameEditForm");k&&m&&(k.style.display="flex",m.style.display="none");return}let o=a.closest("#saveUsernameBtn");if(o){let m=S?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(m){let f=m.value.trim().slice(0,15),A=o,y=A.textContent||"Save";A.disabled=!0,A.textContent="Saving...",nr(f),t.profileNotice=null;try{t.walletAddress&&await fe(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},w("Username updated"),z()}catch(M){let T=M instanceof Error?M.message:"Username save failed";t.profileNotice={type:"error",message:T},w(T),A.disabled=!1,A.textContent=y,z()}}return}let n=a.closest("[data-portfolio-filter]");if(n){let k=n.getAttribute("data-portfolio-filter");t.portfolioFilter=k,z();return}let i=a.closest("[data-timeframe]");if(i){let k=i.dataset.timeframe;t.activeMarketTimeframe=k,da();return}let l=a.closest("[data-market-id]");if(l){t.selectedMarketId=l.dataset.marketId??null,U("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),h(),window.scrollTo({top:0,behavior:"smooth"});return}if(a.closest(".read-tweet-btn")){e.stopPropagation();let k=a.closest("[data-story-id]");k&&it(Number(k.dataset.storyId),!0);return}let p=a.closest("[data-thread-story-id]"),u=a.closest("[data-export-id]"),d=a.closest("[data-export-action]"),g=a.closest("[data-story-id]");if(p){e.stopPropagation();let k=t.stories.find(m=>m.id===Number(p.dataset.threadStoryId));k&&Ya(k);return}let v=a.closest(".mobile-bookmark-btn, .bookmark-button");if(v){e.stopPropagation();let k=v.dataset.bookmarkUrl||"",m=t.stories.find(f=>f.sourceUrl===k);if(!m)return;m.saved=!m.saved,m.saved?pe.add(k):pe.delete(k),Ua(),w(m.saved?"Saved to your list":"Removed from saved"),we();return}if(d){e.stopPropagation(),Mr(Number(d.dataset.exportStoryId),d.dataset.exportAction);return}if(u){e.stopPropagation();let k=Number(u.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===k?null:k,we();return}if(!g||a.closest("a"))return;let b=Number(g.dataset.storyId),x=t.stories.find(k=>k.id===b);x&&U("feed_story_click",x.sourceUrl,x.headline),it(b,!0)});S?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");if(!r||e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();let s=Number(r.dataset.storyId),o=t.stories.find(n=>n.id===s);o&&U("feed_story_click",o.sourceUrl,o.headline),it(s)});L?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let u=t.stories.find(d=>d.id===Number(r.dataset.unlockBriefing));u&&nt(u);return}let s=a.closest("[data-unlock-briefing-url]");if(s){let u=decodeURIComponent(s.dataset.unlockBriefingUrl||""),d=Wa(u);d&&(me(d)?Ae(d):nt(d));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),h();return}if(a.closest("#openTradeDrawerBtn")){let u=E.find(v=>v.id===t.selectedMarketId);if(u){if(Ge(u,t.marketSnapshots[u.id])){w("This market is resolved and can no longer be traded.");return}if(Kt(u,t.marketSnapshots[u.id])){w("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,U("trade_drawer_open");let d=L.querySelector("#tradeDrawer"),g=L.querySelector("#tradeDrawerBackdrop");d?.classList.add("open"),g?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let u=L.querySelector("#tradeDrawer"),d=L.querySelector("#tradeDrawerBackdrop");u?.classList.remove("open"),d?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let u=E.find(d=>d.id===t.selectedMarketId);if(u){let d=Cr(u),g=`https://api.whatsapp.com/send?text=${encodeURIComponent(d)}`;window.open(g,"_blank")}return}let o=a.closest("[data-market-trade]");if(o&&t.selectedMarketId){let u=o.dataset.marketTrade;gr(t.selectedMarketId,u);return}let n=a.closest("[data-market-option-trade]");if(n&&t.selectedMarketId){let u=n.dataset.marketOptionTrade||t.marketTradeOptionId||"";Ar(t.selectedMarketId,u);return}let i=a.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,h();return}let l=a.closest("[data-market-trade-side]");if(l){if(l.disabled||l.classList.contains("disabled"))return;let u=E.find(v=>v.id===t.selectedMarketId),d=u?t.marketPositions[u.id]:void 0,g=l.dataset.marketTradeSide;if(!de(t.marketOrderMode,g,d))return;t.marketTradeSide=g,h();return}let c=a.closest("[data-market-order-mode]");if(c){t.marketOrderMode=c.dataset.marketOrderMode;let u=E.find(g=>g.id===t.selectedMarketId),d=u?t.marketPositions[u.id]:void 0;t.marketTradeSide=yt(t.marketOrderMode,t.marketTradeSide,d),t.marketTradeAmount=De(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,d),h();return}let p=a.closest("[data-back-to-feed]");if(p){if(p.classList.contains("read-more-news-btn")){let d=new URLSearchParams(window.location.search).get("url"),g=document.querySelector(".detail-card h2")?.textContent||void 0;U("shared_read_more_click",d||void 0,g)}Ga()}});L?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=E.find(c=>c.id===t.selectedMarketId),s=r?t.marketSnapshots[r.id]:void 0,o=r?t.marketPositions[r.id]:void 0,n=Number(a.value);t.marketTradeAmount=Number.isFinite(n)?n:0;let i=r&&se(r)?t.marketTradeAmount:ra(s,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,o),l=L.querySelector(".market-inline-payout strong");l&&(l.textContent=`$${H(i)}`)});L?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});L?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=E.find(o=>o.id===t.selectedMarketId),s=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=De(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,s),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Be);window.addEventListener("hashchange",Be);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await ce(t.walletAddress);t.walletBalance=a,_(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),Sa())}});Ze?.addEventListener("click",()=>{if(!Qe||!Ze)return;let e=!Qe.hidden;Qe.hidden=e,Ze.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,we());let r=a.closest("[data-menu-action]");if(!r)return;let s={today:"Showing today's brief",saved:`${t.stories.filter(o=>o.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};C&&(C.textContent=s[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,j&&(j.value=""),J(),_e(),oe(t.activeCategory)),r.dataset.menuAction==="saved"&&(pa(),pt(),Te(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),J(),h())});var Hr=async()=>{try{let e=await fetch(I("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),h())}catch(e){console.error("Failed to prefetch unlock config:",e)}},Rr=()=>{window.setInterval(async()=>{try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(I("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let s=await r.json();Array.isArray(s)&&s.length>0&&(E=s,t.activeSurface==="markets"&&h())}}catch(e){console.warn("Background market poll failed:",e)}},3e4)};h();_();Hr();oe(t.activeCategory);Rr();Pa().then(()=>{mr(),h(),_(),window.setTimeout(jr,1200),Va()});var Fr=document.querySelector("#mobileArchiveCard"),ye=document.querySelector("#archiveControls");Fr?.addEventListener("click",()=>{if(!ye)return;ye.classList.toggle("mobile-open")&&setTimeout(()=>ye.scrollIntoView({behavior:"smooth",block:"center"}),50)});var zr=document.querySelector("#archivePill");zr?.addEventListener("click",e=>{if(e.stopPropagation(),!ye)return;ye.classList.toggle("mobile-open")&&setTimeout(()=>ye.scrollIntoView({behavior:"smooth",block:"center"}),50)});var He=!1,_t=!1,jr=()=>{_t||(_t=!0,(async()=>{let e=await ze();if(He=!!e,e){t.walletConnecting=!0,_();try{let a=await wa();He=!1,t.walletConnecting=!1,a?(t.walletAddress=await ze(),t.walletAddress&&(ve(),t.walletBalance=await ce(t.walletAddress),await F()),_(),t.activeSurface==="portfolio"&&h()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),w("Session expired. Please sign in again."),_(),h())}catch(a){console.warn(a),He=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),w("Session expired. Please sign in again."),_(),h()}}await ka(a=>{He||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),a&&fe(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,_(),a?(Me(),ce(a).then(r=>{t.walletBalance=r,_(),t.activeSurface==="portfolio"&&h()}),F()):t.activeSurface==="portfolio"&&h())})})())};U("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let s=r.className||"",o=typeof s=="string"?s:r.getAttribute("class")||"",n=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(o.includes("source-button")||o.includes("source-btn")||o.includes("source-link")||r.textContent?.trim()==="Open source")&&!o.includes("disabled")&&n!=="#"&&U("open_source")}},!0);
