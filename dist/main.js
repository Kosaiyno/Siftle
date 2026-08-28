import"./chunks/chunk-ZUUPKAA6.js";var ce=[{id:"m-chelsea-manutd",question:"Chelsea vs Manchester United Match Result",league:"English Premier League",homeTeam:"Chelsea",awayTeam:"Manchester United",homeCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/363.png",awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/360.png",statusDetail:"Saturday \u2022 05:30 PM",isLive:!1,volumeUsdc:6,marketAddress:"0x202c3f057B7b767f80dF665fa225a4Fa5b8631C8",contractAddress:"0x202c3f057B7b767f80dF665fa225a4Fa5b8631C8",factoryAddress:"0xA73C9a31aa2ab6C0CA85C0C105eba561Ab5d4B7b",optionMarket:!0,options:[{id:"home",label:"Chelsea"},{id:"draw",label:"Draw"},{id:"away",label:"Manchester United"}],initialOptionPools:{home:3,draw:0,away:0},optionPools:{home:3,draw:1,away:2}}];var ma="https://faucet.circle.com/",wt="siftle_backend_wallet_migration_notice",Ke=null,_=()=>(Ke||(Ke=import("./chunks/arc-F4QFUFIV.js")),Ke),xe=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,fa=async()=>(await _()).connectArcWallet(),ha=async e=>(await _()).readArcUsdcBalance(e),re=async e=>{let a=await ha(e);try{let r=`siftle_optimistic_bal_${e.toLowerCase()}`,o=localStorage.getItem(r);if(o!=null){let i=parseFloat(String(a||"0").replace(/,/g,"")),s=parseFloat(o);if(s<i&&s>=0)return s.toFixed(2)}}catch{}return a},va=async(e,a,r,o)=>(await _()).payAiBriefingUnlock(e,a,r,o),ya=e=>{_().then(a=>a.resolveLocalTestMarketYes(e))};var ba=async(e,a)=>(await _()).readArcMarketState(e,a),wa=async(e,a,r,o,i,s,n)=>(await _()).executeArcMarketOrder(e,a,r,o,i,s,n),tt=async(e,a,r,o,i)=>(await _()).executeArcOptionMarketOrder(e,a,r,o,i),pt=()=>{_().then(e=>e.disconnectArcWallet())},xa=async(e,a)=>(await _()).claimArcMarketPayout(e,a),Fe=async()=>(await _()).getConnectedArcWallet(),ka=async()=>(await _()).validateArcSession(),Sa=async e=>(await _()).subscribeArcWallet(e),$a=async()=>(await _()).triggerGatewayWarmup();var Ta="https://siftle.onrender.com",La=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?Ta:""},Ma=La(),z=e=>`${Ma}${e}`,It="siftle_theme",Pa=()=>{try{return window.localStorage.getItem(It)==="light"?"light":"dark"}catch{return"dark"}},ke=Pa(),zt="organic";function Aa(){try{let e=localStorage.getItem("siftle_traffic_source");if(!e){let a=new URLSearchParams(window.location.search),r=a.get("ref")||a.get("utm_source");if(r)r=r.trim().toLowerCase(),r==="twitter"&&(r="x"),r==="instagram"&&(r="ig"),r==="whatsapp"&&(r="wa"),r==="discord"&&(r="dc"),(r==="google_search"||r==="google-search")&&(r="google"),["x","ig","wa","dc","google","organic","briefing"].includes(r)?e=r:e=r.slice(0,20);else{let o=document.referrer;o&&(/twitter\.com|x\.com|t\.co/i.test(o)?e="x":/instagram\.com/i.test(o)?e="ig":/whatsapp\.com|wa\.me/i.test(o)?e="wa":/discord\.com|discordapp\.com/i.test(o)?e="dc":/google\.com|google\.co/i.test(o)&&(e="google"))}e||(e="organic"),localStorage.setItem("siftle_traffic_source",e)}zt=e}catch(e){console.error("Failed to initialize traffic source:",e)}}Aa();function U(e,a,r){fetch(z("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e,source:zt,storyUrl:a,headline:r})}).catch(o=>console.error("Failed to track event:",o))}var t={activeSurface:"feed",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:2,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:"100.00",activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},aiSummaryProofs:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,activePortfolioSubTab:"open_orders",pnlTimeframe:"all",unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{},portfolioFilter:"open",liveMatches:[],loadingLiveMatches:!1,userSeasonPoints:0,activeMatchLeague:"All",activeMatchDate:"",activeMarketLeagueFilter:"All",selectedMatchId:null,matchDetailTab:"overview"};var xt=!1,kt=!1,St=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";St&&localStorage.setItem("siftle_pending_referral_code",St.trim().toUpperCase());var Ot=20,E=ce,Dt=(...e)=>{let a=new Map;return e.flat().forEach(r=>{if(r?.id){let o=a.get(r.id)||{};a.set(r.id,{...o,...r,customOdds:r.customOdds||o.customOdds})}}),Array.from(a.values())},Pe=()=>Dt(t.portfolioMarketPreviews,E,ce),Ca=async()=>{t.loadingMarkets=!0,E.length===0&&(E=ce);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(z("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(E=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Ea=async()=>{try{let e=await fetch(z("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Nt="siftle.savedUrls",oe=new Set,ut=()=>{try{let e=localStorage.getItem(Nt)||"[]",a=JSON.parse(e);oe=new Set(a.filter(Boolean))}catch{oe=new Set}},Ua=()=>{try{localStorage.setItem(Nt,JSON.stringify(Array.from(oe)))}catch{}},Se=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!oe.has(e.sourceUrl)};ut();Se();var at=document.querySelector("#dateLabel"),R=document.querySelector("#categoryTabs"),x=document.querySelector("#storyList"),A=document.querySelector("#storyDetail"),Je=document.querySelector("#menuButton"),Xe=document.querySelector("#menuPanel"),B=document.querySelector("#menuStatus"),F=document.querySelector("#archiveDateSelect"),$t=document.querySelector("#archiveStatus"),Ba=document.querySelector("#todayButton"),he=document.querySelector(".brief-hero"),ve=document.querySelector("#archiveControls"),J=document.querySelector("[data-surface='markets']"),ne=document.querySelector("[data-surface='feed']"),le=document.querySelector("[data-surface='portfolio']"),ae=document.querySelector("#walletButton"),be=document.querySelector("[data-theme-toggle]"),Ia=document.getElementById("guideToggleButton"),_t=Array.from(document.querySelectorAll("[data-bottom-nav]")),Ze,za=()=>{if(!be)return;let a=`Switch to ${ke==="light"?"dark":"light"} mode`;be.setAttribute("aria-label",a),be.title=a,be.dataset.activeTheme=ke},Ht=e=>{ke=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(It,e)}catch{}za()};Ht(ke);var O=()=>{if(ae){let e=ae.querySelector(".wallet-button-label");ae.classList.toggle("connected",!!t.walletAddress),ae.disabled=t.walletConnecting,ae.setAttribute("aria-label",t.walletAddress?`Wallet ${xe(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),ae.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${xe(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",O);be?.addEventListener("click",()=>{Ht(ke==="light"?"dark":"light")});Ia?.addEventListener("click",()=>{Oa()});var Oa=()=>{let e=document.createElement("div");e.className="guide-overlay",e.innerHTML=`
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

        <div class="guide-step-item">
          <span class="guide-step-num">4</span>
          <div style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
            <h4 class="guide-step-title">Predict Matches & Win</h4>
            <p class="guide-step-desc">Trade pre-match and in-play prediction markets using testnet USDC from the <strong>Circle Faucet</strong>. Earn up to 100 points per winning match to climb Season 2 rankings!</p>
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
  `,document.body.appendChild(e);let a=e.querySelector("#guideClose"),r=e.querySelector("#guideStartBtn"),o=()=>e.remove();a.addEventListener("click",o),r.addEventListener("click",o),e.addEventListener("click",i=>{i.target===e&&o()})},Da=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(z("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&k("Referral connected"))}catch(r){console.warn(r)}},$e=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(z(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&N()}}},Ae=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,U("wallet_connect_start"),O();try{let e=await fa();if(e){U("wallet_connect_success");let a=sessionStorage.getItem("siftle_landing_url"),r=sessionStorage.getItem("siftle_landing_headline"),o=sessionStorage.getItem("siftle_signup_tracked");a&&!o&&(U("briefing_referral_signup",a,r||void 0),sessionStorage.setItem("siftle_signup_tracked","true")),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,pe();let i=await re(e),s=`siftle_optimistic_bal_${e.toLowerCase()}`,n=localStorage.getItem(s);n!==null&&parseFloat(n)<parseFloat(i.replace(/,/g,""))?t.walletBalance=n:(localStorage.removeItem(s),t.walletBalance=i),await Da(e),$e(),await W(),de(!0).catch(l=>console.error("Failed to report leaderboard entry:",l));let d=localStorage.getItem(wt);d?(localStorage.removeItem(wt),k(d)):k("Connected to Arc Testnet"),window.location.hash="#portfolio",Ce()}}catch(e){U("wallet_connect_failed"),k(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,O()}}},k=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Ze&&window.clearTimeout(Ze),Ze=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=k;var Na=(e,a,r,o)=>{let i=document.createElement("div");i.className="success-modal-overlay",i.innerHTML=`
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
  `,document.body.appendChild(i),setTimeout(()=>{i.classList.add("show")},10);let s=()=>{i.classList.remove("show"),setTimeout(()=>{i.remove()},300)};i.querySelector(".success-modal-close-btn")?.addEventListener("click",s),i.querySelector(".success-modal-action-btn")?.addEventListener("click",s),i.addEventListener("click",n=>{n.target===i&&s()})},V=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},Ft=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},Qe=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(t.activeCategory==="Personalized"){let o=Ue(),i=[...o.clubs,...o.managers,...o.players].map(s=>s.toLowerCase()).filter(Boolean);if(i.length>0){let s=`${e.headline} ${e.summary||""} ${e.source||""}`.toLowerCase();if(!i.some(d=>s.includes(d)))return!1}}let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),je=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,_a=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Ha=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let i=r.slice(0,a).join(" "),s=Math.max(i.lastIndexOf("."),i.lastIndexOf("?"),i.lastIndexOf("!"));return s>i.length*.45?i.slice(0,s+1).trim():`${i.replace(/[,:;.'"!\?\s]+$/,"")}...`},Tt=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let i=a.match(/"summary"\s*:\s*"((?:[^"\\]|\\.)*)"/i);if(i){a=i[1].replace(/\\"/g,'"').replace(/\\n/g,`
`).replace(/\\r/g,"\r").replace(/\\t/g,"	").replace(/\\\\/g,"\\").trim();continue}let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/\\n/g,`
`).replace(/\\r/g,""),a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/[^\S\r\n]+/g," ").replace(/\r\n/g,`
`).replace(/\n{3,}/g,`

`).trim(),_a(a)?"":a.includes("WHAT HAPPENED")||a.includes("KEY POINTS")?a:Ha(a)},Te=(e,a)=>Tt(a||"")||Tt(e.summary)||e.headline,Fa=e=>{let r=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!r||!window.html2canvas)return;let o=document.createElement("div");o.className="briefing-export-staging";let i=r.cloneNode(!0);i.classList.add("briefing-export-surface"),o.appendChild(i),document.body.appendChild(o);let s=document.documentElement.dataset.theme==="light";window.html2canvas(i,{backgroundColor:s?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(n=>{let d=document.createElement("a");d.download="siftle-briefing.png",d.href=n.toDataURL("image/png"),d.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{o.remove()})};window.downloadBriefingCard=Fa;var ja=e=>e.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),Ra=(e,a)=>{let r="";if(a)try{r=decodeURIComponent(a)}catch{r=a}let o=window.location.origin,i=window.location.pathname,s=t.stories.find(l=>l.id===e||r&&l.sourceUrl===r),n=s?ja(s.headline):e>0?`story-${e}`:"",d=e>0?`${o}/story/${n}?utm_source=briefing&url=${encodeURIComponent(s?.sourceUrl||r)}`:r?`${o}/api/redirect?url=${encodeURIComponent(r)}&source=briefing`:`${o}/story/briefing?utm_source=briefing`;navigator.clipboard.writeText(d).then(()=>{k("Shareable link copied to clipboard!")}).catch(()=>{k("Unable to copy link")})};window.copyBriefingLink=Ra;var jt=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(a){let s=a.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${s}</h3>
    `}r[0].trim()&&(o+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let i="";for(let s=1;s<r.length;s+=2){let n=r[s].trim().toUpperCase(),d=r[s+1]?r[s+1].trim():"";if(!d)continue;let l="";if(n==="KEY POINTS"){let u=d.split(/(?:•|\*|-)\s+/).map(c=>c.replace(/\\n/g,"").trim()).filter(c=>{if(!c||c==="\\n"||c===`
`)return!1;let g=c.trim();return!(g.split(/\s+/).filter(Boolean).length<6||g.length<30||!/[.?!]"?'?$/.test(g)||/^according\s+to\s+\w+$/i.test(g.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")))});u.length>0?l=`<ul class="briefing-list">${u.map(c=>`<li>${c}</li>`).join("")}</ul>`:l=`<p class="briefing-text">${d}</p>`}else l=`<p class="briefing-text">${d}</p>`,n==="TAKEAWAY"&&(i=d);let p=n.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${p}-section">
        <h4 class="briefing-title">${n}</h4>
        ${l}
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
    `),o},Ve=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${w(a)}</p>`:""},Wa=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},gt=e=>`siftle_ai_briefing_unlock_${Wa()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Rt=e=>localStorage.getItem(gt(e))||"",qa=e=>{localStorage.removeItem(gt(e))},ge=e=>{let r=new URLSearchParams(window.location.search).get("url");return r&&r===e.sourceUrl?!0:!!Rt(e)},Ya=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:oe.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Va=e=>{let a=t.stories.find(i=>i.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(i=>i.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let i=E.find(s=>s.id===t.selectedMarketId);if(i){let s=Jt(i).evidence.find(n=>n.sourceUrl===e);if(s)return Ya(i,s)}}return null},Ga=(e,a)=>{let r=ir(e,a);return r===null?null:r-Ot*60*1e3};var Ka=(e,a)=>{let r=Ga(e,a);return r===null?null:Date.now()>=r?`Locked ${Ot}m before kickoff`:null},Ja=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled,i=!!t.walletAddress;return`
    <div class="briefing-section">
      ${Ve(e)}
      ${a?`
          ${Ye()}
        `:`
          <p class="briefing-text">
            ${i?o?`Pay a <strong>${r}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${r}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`:"Sign in to access AI briefings."}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${i?o?"Unlock via Circle x402":"AI briefing":"Sign in and access AI briefing"}
          </button>
        `}
    </div>
  `},Wt=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],qt=e=>`
  <div class="briefing-section">
    ${Ve(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,rt=async(e,a=!1)=>{if(!t.walletAddress){k("Please sign in to unlock this briefing."),Ae();return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",U("ai_unlock_attempt"),y();try{let r=await fetch(z("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let i=Number(o.amountUsdc)||.05;try{let c=await fetch(z(`/api/summary/price?sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(c.ok){let g=await c.json();typeof g.priceUsdc=="number"&&(i=g.priceUsdc)}}catch(c){console.warn("Failed to retrieve autonomous price, falling back to default:",c.message)}let s=await va(o.treasuryAddress,i,c=>{B&&(B.textContent=c),t.briefingStatusByUrl[e.sourceUrl]=c,y()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=`Briefing unlocked! Charged ${i} USDC (priced by Siftle AI Agent)`,y();let n=await fetch(z("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:s})}),d=await n.json();if(!n.ok||!d.unlockToken)throw new Error(d.error||"AI briefing failed");localStorage.setItem(gt(e),d.unlockToken),U("ai_unlock_success");let l=sessionStorage.getItem("siftle_landing_url"),p=sessionStorage.getItem("siftle_landing_headline");l&&U("briefing_referral_unlock",l,p||void 0),(Number(d?.bonus?.points)||0)>0&&de(!1).catch(c=>console.error("Failed to refresh leaderboard bonus:",c)),await Le(e)}catch(r){U("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl];let o=r instanceof Error?r.message:String(r||""),i=o,s=o.toLowerCase();if(s.includes("session expired")||s.includes("sign in first")||s.includes("unauthorized")){try{(await _()).disconnectArcWallet()}catch{}t.walletAddress=null,t.walletBalance=null,i="Your session has expired. Please sign in again to unlock this briefing."}else(s.includes("balance")||s.includes("exceeds balance")||s.includes("transfer amount exceeds"))&&(i="Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC.");k(i)}finally{t.unlockingSummaryUrl=null,y()}}},Le=async e=>{if(ge(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=Te(e,e.ai_summary),U("view_summary"),B&&(B.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded");let r=new URLSearchParams(window.location.search).get("url");if(r&&r===e.sourceUrl){let o=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(o)||(sessionStorage.setItem(o,"true"),U("briefing_unlock",e.sourceUrl,e.headline))}y();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing through 0G...",y();try{let r=new URLSearchParams(window.location.search).get("url"),o=!!(r&&r===e.sourceUrl),i=await fetch(z("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Rt(e),isSharedLanding:o})});if(!i.ok){if(i.status===402){qa(e),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",B&&(B.textContent="Unlock expired. Unlock again to continue."),y();return}throw new Error(`Summary request failed with ${i.status}`)}let s=await i.json();t.aiSummaries[e.sourceUrl]=Te(e,s.summary),t.aiSummaryProofs[e.sourceUrl]=s.proof,t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",B&&s.provider&&(B.textContent=s.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${s.provider}`);let d=new URLSearchParams(window.location.search).get("url");if(d&&d===e.sourceUrl){let l=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(l)||(sessionStorage.setItem(l,"true"),U("briefing_unlock",e.sourceUrl,e.headline))}}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",B&&(B.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,y()}}},ot=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);if(r){if(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),y(),r.type==="tweet"){window.scrollTo({top:0,behavior:"smooth"});return}a&&!ge(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),y(),rt(r,!0)):ge(r)&&Le(r),window.scrollTo({top:0,behavior:"smooth"})}},Xa=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),y(),Yt(e),window.scrollTo({top:0,behavior:"smooth"})},Za=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.location.search?window.history.pushState({},"",window.location.pathname+"#feed"):window.history.pushState({},"","#feed"),y(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Yt=async e=>{try{let a=await fetch(z(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),B&&(B.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),k("That timeline no longer has a verified past update"),B&&(B.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,y()}};function Ce(){let e=window.location.pathname.startsWith("/story/"),a=window.location.pathname.startsWith("/thread/");if(e||a){let o=window.location.pathname.split("/").pop()||"",i=e?`#story-${o}`:`#thread-${o}`;window.history.replaceState({},"",`${window.location.pathname}${window.location.search}${i}`)}if(window.location.hash==="#resolve-local-yes"){let o=E.find(i=>i.id==="siftle-local-test-2")||E.find(i=>i.timeframe==="Daily"&&me(i).startsWith("0x00000000000000000000000000000000000001"));if(o){ya(me(o)),gr(o,"yes"),delete t.marketSnapshots[o.id],delete t.marketPositions[o.id],delete t.checkedMarketSnapshots[o.id],delete t.loadingMarketSnapshots[o.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),k("Local test market resolved YES"),W().then(()=>{de(!0).catch(i=>console.error("Failed to report leaderboard entry:",i)),O(),N()});return}}let r=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||r){t.activeSurface="markets",t.selectedMarketId=r?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,y();return}if(window.location.hash==="#matches"){t.activeSurface="matches",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,y();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,y();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,y();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let o=window.location.hash.match(/^#story-(.+)$/),i=window.location.hash.match(/^#thread-(\d+)$/),n=new URLSearchParams(window.location.search).get("url"),d;if(n){sessionStorage.setItem("siftle_landing_url",n);let u=t.stories.find(g=>g.sourceUrl===n);u?.headline?sessionStorage.setItem("siftle_landing_headline",u.headline):sessionStorage.getItem("siftle_landing_headline")||sessionStorage.setItem("siftle_landing_headline","Archived Story");let c=`siftle_ref_tracked_${encodeURIComponent(n)}`;if(sessionStorage.getItem(c)||(sessionStorage.setItem(c,"true"),U("briefing_referral",n,u?.headline||"Archived Story")),d=t.stories.find(g=>g.sourceUrl===n),!d&&o){let g=n;t.loadingSummaryUrl!==g&&(t.loadingSummaryUrl=g,fetch(z(`/api/story?sourceUrl=${encodeURIComponent(g)}`)).then(h=>{if(!h.ok)throw new Error;return h.json()}).then(h=>{t.stories.some(v=>v.sourceUrl===h.sourceUrl)||(h.id=Math.max(9999,...t.stories.map(v=>v.id))+1,t.stories.push(h));let m=t.stories.find(v=>v.sourceUrl===h.sourceUrl);sessionStorage.setItem("siftle_landing_headline",m.headline),U("briefing_referral",n,m.headline),t.selectedStoryId=m.id,y(),Le(m)}).catch(h=>{console.warn("Failed to load historical story from backend:",h)}).finally(()=>{t.loadingSummaryUrl=null}))}}else if(o){let u=Number(o[1]);isNaN(u)||(d=t.stories.find(c=>c.id===u))}let l=i?t.stories.find(u=>u.id===Number(i[1])):void 0,p=t.selectedStoryId!==null||t.selectedThreadUrl!==null;d?(t.selectedStoryId=d.id,t.selectedThreadUrl=null,t.activeThread=null,y(),Le(d)):l?(t.selectedStoryId=null,t.selectedThreadUrl=l.sourceUrl,t.activeThread=null,y(),Yt(l)):n||(t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,y(),p&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"})));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,y()}var it=e=>{$t&&($t.textContent=e)},Qa=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Gt(),y());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(z(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let i=await o.json();if(t.stories=i.top_stories??[],Se(),t.hasLoadedFeed=!0,at&&(at.textContent=Ft(i.date??t.activeArchiveDate)),B)if(t.activeArchiveDate)B.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let s=i.archive?.provider==="shelby"?"Shelby":"local archive";B.textContent=`Latest published feed loaded from ${s}`}it(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),Se(),B&&(B.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,y(),Ce()}},er=async()=>{if(F)try{let e=await fetch(z("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),F.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),F.value=t.activeArchiveDate??"",it(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),it("Archive unavailable")}},Ee=()=>{xt||(xt=!0,er())},X=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Qa(e,a)},tr=()=>{kt||(kt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&X(t.activeCategory,!0),Ee()},8e3))};var ie=e=>e==="Sports"?"Football":e,Ne=e=>/^@/.test(String(e.source||""))||/(?:^|\/)(?:x|twitter)\.com\//i.test(String(e.sourceUrl||"")),Vt=(e,a)=>{let r=e.trim();return r.length<=a?r:`${r.slice(0,Math.max(0,a-1)).trimEnd()}\u2026`},ar=e=>e.replace(/^@/,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ").filter(Boolean),st=e=>{let a=String(e.source||ie(e.category)).trim(),r=ar(a);if(r.length===0)return ie(e.category);let o=r.filter((n,d)=>{let l=n.toLowerCase();return!(d>0&&["live","news","official"].includes(l))}),i=o.length>0?o:r,s="";for(let n of i){let d=s?`${s} ${n}`:n;if(d.length>18)break;s=d}return Vt(s||i[0],18)},Lt=e=>{let a=String(e.headline||"").replace(/\s+/g," ").trim();if(!Ne(e))return a;let r=a.replace(/https?:\/\/\S+/gi,"").replace(/\(Source:[^)]+\)\s*$/i,"").replace(/\s+/g," ").trim();if(/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(r))return`Latest from ${st(e)}`;let o=r.replace(/^R to\s+@[^:]+:\s*/i,"").trim(),i=o.length>=24&&!/^(?:more here|watch more here)[:.!?]*$/i.test(o)?o:r||a;return Vt(i,150)},Gt=()=>{if(!R)return;R.hidden=!1;let e=t.activeCategory==="Personalized";R.innerHTML=`
    <button class="category-tab ${e?"":"active"}" type="button" data-category="Sports">
      Feed
    </button>
    <button class="category-tab ${e?"active":""}" type="button" data-category="Personalized">
      Personalized
    </button>
  `},Kt=e=>(e.thread?.count??0)>=1,rr=(e=0)=>`${e} past ${e===1?"update":"updates"}`,or=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),i=new Date(r.publishedAt||0).getTime();return(Number.isNaN(i)?0:i)-(Number.isNaN(o)?0:o)}),Jt=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},ir=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null};var me=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",Xt=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],Zt=e=>!!((e?.optionMarket||e?.isOptionMarket||e?.marketType==="option"||Array.isArray(e?.options)&&e.options.length>0)&&Xt(e).length>1);var Qt=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),w=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),mt=e=>`siftle_profile_username_${e.toLowerCase()}`,ea=e=>e.trim().replace(/\s+/g," ").slice(0,15),pe=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=mt(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=ea(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},sr=e=>{if(!t.walletAddress)return;let a=mt(t.walletAddress),r=ea(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},nr=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},lr=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:2,max:2,fallback:2}},Ge=(e,a,r,o)=>{let{min:i,max:s,fallback:n}=lr(a,r,o);return Number.isFinite(e)?Math.min(s,Math.max(i,e)):n},dr=(e,a,r,o,i)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let s=a==="yes"?i?.yesSharesUsdc??0:i?.noSharesUsdc??0,n=e.yesSharesUsdc,d=e.noSharesUsdc;if(o==="sell")return Math.min(r,s);let l=(a==="yes"?n:d)+r,p=n+d+r;return l<=0||p<=0?r:(s+r)/l*p};var cr=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},ta=e=>`siftle_claimed_markets_${e.toLowerCase()}`,aa=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(ta(t.walletAddress))||"[]"))}catch{return new Set}},pr=e=>{if(!t.walletAddress)return;let a=aa();a.add(e),localStorage.setItem(ta(t.walletAddress),JSON.stringify(Array.from(a)))},ft=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),Re=(e,a,r)=>{let o=r?.yesSharesUsdc??0,i=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:i>0:a==="yes"?i<=0:o<=0},ra=(e,a,r)=>{if(Re(e,a,r))return a;let o=a==="yes"?"no":"yes";return Re(e,o,r)?o:a};var ur=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)};var oa=()=>{let e=0,a=0,r=0,o=E.filter(n=>n.timeframe==="Daily").map(n=>n.id),i=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",s={};if(i)try{s=JSON.parse(localStorage.getItem(i)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let n of o){if(s[n]?.result==="win"){e+=Number(s[n].points)||0,a++;continue}if(s[n]?.result==="loss"){r++;continue}let d=t.marketPositions[n],p=t.marketSnapshots[n]?.outcome??0;if(p===0)continue;let u=`siftle_traded_sides_${n}_${t.walletAddress.toLowerCase()}`,c=[];try{c=JSON.parse(localStorage.getItem(u)||"[]")}catch{}let g=c.includes("yes")&&c.includes("no");if(p===1&&d&&d.yesSharesUsdc>0){let h=g?50:100;e+=h,a++,s[n]={result:"win",points:h}}else if(p===2&&d&&d.noSharesUsdc>0){let h=g?50:100;e+=h,a++,s[n]={result:"win",points:h}}else d&&(d.yesSharesUsdc>0||d.noSharesUsdc>0)&&(r++,s[n]={result:"loss",points:0})}return i&&localStorage.setItem(i,JSON.stringify(s)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},gr=(e,a)=>{let r=me(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,i=new Set;for(let s=0;s<localStorage.length;s++){let n=localStorage.key(s);if(!n||!n.startsWith(o))continue;let d=n.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(d)&&i.add(d)}i.forEach(s=>{let n=`${o}${s}`,d={yesSharesUsdc:0,noSharesUsdc:0};try{d=JSON.parse(localStorage.getItem(n)||"{}")}catch{}let l=(Number(d.yesSharesUsdc)||0)>0,p=(Number(d.noSharesUsdc)||0)>0;if(!l&&!p)return;let u=`siftle_traded_sides_${e.id}_${s}`,c=[];try{c=JSON.parse(localStorage.getItem(u)||"[]")}catch{}let g=c.includes("yes")&&c.includes("no"),h=a==="yes"?l:p,m=`siftle_resolved_results_${s}`,v={};try{v=JSON.parse(localStorage.getItem(m)||"{}")}catch{}v[e.id]={result:h?"win":"loss",points:h?g?50:100:0},localStorage.setItem(m,JSON.stringify(v));let f=0,b=0,L=0;Object.values(v).forEach(S=>{S.result==="win"?(b+=1,f+=Number(S.points)||0):S.result==="loss"&&(L+=1)});let $=localStorage.getItem(mt(s))||"";fetch(z("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:s,username:$,points:f,status:`${b} win${b===1?"":"s"}, ${L} loss${L===1?"":"es"}`})}).catch(S=>console.error("Failed to report local resolved score:",S))})},de=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?oa():null,r=await fetch(z("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},mr=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let i=JSON.parse(localStorage.getItem(r)||"{}");((Number(i.yesSharesUsdc)||0)>0||(Number(i.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(z("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})};function We(e){let a=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${a}${r}${o}`}function qe(e){if(!e)return"Soccer Matches";let a=e.replace(/^\d{4}(-\d{2,4})?-/g,"").replace(/-/g," ").trim(),r=a.toLowerCase();return r.includes("russian")||r.includes("rus.1")?"Russian Premier League":r.includes("scottish")||r.includes("sco.1")?"Scottish Premiership":r.includes("ukrainian")||r.includes("ukr.1")?"Ukrainian Premier League":r.includes("egyptian")||r.includes("egy.1")?"Egyptian Premier League":r.includes("english premier league")||r.includes("premier league")||r.includes("eng.1")||r.includes("eng 1")?"English Premier League":r.includes("laliga")||r.includes("esp.1")||r.includes("esp 1")||r.includes("spanish")?"Spanish LaLiga":r.includes("champions league")||r.includes("uefa champions")?"UEFA Champions League":r.includes("europa league")||r.includes("uefa europa")?"UEFA Europa League":r.includes("championship")||r.includes("eng.2")||r.includes("eng 2")?"EFL Championship":r.includes("serie a")||r.includes("ita.1")||r.includes("ita 1")||r.includes("italian")?"Italian Serie A":r.includes("bundesliga")||r.includes("ger.1")||r.includes("ger 1")||r.includes("german")?"German Bundesliga":r.includes("ligue 1")||r.includes("fra.1")||r.includes("fra 1")||r.includes("french")?"French Ligue 1":r.includes("saudi")||r.includes("sau.1")||r.includes("sau 1")?"Saudi Pro League":r.includes("eredivisie")||r.includes("ned.1")?"Dutch Eredivisie":r.includes("primeira liga")||r.includes("por.1")?"Portuguese Primeira Liga":r.includes("friendly")||r.includes("friendlies")?"Club Friendlies":a.split(" ").map(o=>o?o.charAt(0).toUpperCase()+o.slice(1).toLowerCase():"").join(" ").trim()}var ia=async e=>{let a=We(new Date),r=e||t.activeMatchDate||a;if(!(t.loadingLiveMatches&&r===t.activeMatchDate&&t.liveMatches.length>0)){t.loadingLiveMatches=!0,t.activeMatchDate=r;try{let o=We(new Date),i=e||t.activeMatchDate||o;t.activeMatchDate=i;let s=`?dates=${i}`,n=[`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.2/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/sau.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/all/scoreboard${s}`],d=await Promise.allSettled(n.map(p=>fetch(p).then(u=>u.json()))),l=new Map;d.forEach(p=>{if(p.status==="fulfilled"&&p.value&&Array.isArray(p.value.events)){let u=p.value.leagues?.[0]?.name,c=p.value.leagues?.[0]?.logos?.[0]?.href||"",g=u&&u!=="Soccer"?u:null;p.value.events.forEach(h=>{if(!h||!h.id||l.has(h.id))return;let m=h.competitions?.[0],v=m?.competitors?.find(M=>M.homeAway==="home"),f=m?.competitors?.find(M=>M.homeAway==="away");if(!v||!f)return;let b=h.status?.type?.state,L=h.status?.type?.detail||h.status?.type?.shortDetail||"Scheduled",$=g||h.season?.slug||h.league?.name||"Soccer Scoreboard",S=qe($);l.set(h.id,{id:h.id,name:h.name,league:S,leagueLogo:c,statusState:b,statusDetail:L,isLive:b==="in",isPost:b==="post",homeTeam:v.team?.displayName||v.team?.name||"Home",awayTeam:f.team?.displayName||f.team?.name||"Away",homeCrest:v.team?.logo||"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",awayCrest:f.team?.logo||"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",homeScore:v.score??null,awayScore:f.score??null,venue:m?.venue?.fullName||"Stadium",date:h.date})})}}),t.liveMatches=Array.from(l.values())}catch(o){console.error("Failed to fetch ESPN live matches:",o)}finally{t.loadingLiveMatches=!1}}},W=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Ea();let a=Pe(),r=await Promise.all(a.map(async o=>{let i=me(o);if(!i)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:s,snapshot:n}=await ba(i,t.walletAddress);return t.marketSnapshots[o.id]=n,[o.id,s]}catch(s){return console.warn(`Failed to load portfolio market ${o.id}:`,s),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,de(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&y()}}},fr=async(e,a)=>{if(!t.walletAddress){k("Session expired or wallet not connected. Please sign in."),Ae();return}let r=Pe().find(p=>p.id===e);if(!r)return;t.marketTradeSide=a;let o=me(r);if(!o){k("Deploy this Arc market contract before trading"),y();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",y(),await W(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){k("Still loading your position. Try again in a moment."),y();return}let i=t.marketSnapshots[r.id];if(ft(r,i)){t.tradeDrawerOpen=!1,k("This market is resolved and can no longer be traded."),y();return}let s=i?.yesPriceCents??r.probability,n=i?.noPriceCents??100-r.probability,d=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!Re(t.marketOrderMode,a,d)){let p=cr(d),u=t.marketOrderMode==="sell"?p?`You can only exit your ${p.toUpperCase()} shares.`:"You do not have shares to exit in this market.":p?`Exit your ${p.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";k(u),t.marketTradeSide=ra(t.marketOrderMode,a,d),y();return}let l=Ge(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,d);t.marketTradeAmount=l,U("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",y();let p=await wa(o,t.marketOrderMode,a,l,u=>{t.marketTradeStatus=u,y()},s,n);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await Fe(),t.walletAddress&&(t.walletBalance=await re(t.walletAddress)),await W({force:!0}),de(!0).catch(u=>console.error("Failed to report leaderboard entry:",u)),t.walletAddress){let u=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,c={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let h=localStorage.getItem(u);if(h){let m=JSON.parse(h);c={yesCost:m.yesCost||0,noCost:m.noCost||0,yesShares:m.yesShares||0,noShares:m.noShares||0}}}catch{}let g=l;if(t.marketOrderMode==="buy"){let h=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,m=[];try{m=JSON.parse(localStorage.getItem(h)||"[]")}catch{}m.includes(a)||(m.push(a),localStorage.setItem(h,JSON.stringify(m))),a==="yes"?(c.yesCost+=g,c.yesShares=(c.yesShares||0)+g/(s/100)):(c.noCost+=g,c.noShares=(c.noShares||0)+g/(n/100))}else{let h=t.marketPositions[r.id];if(h){if(a==="yes"&&h.yesSharesUsdc>0){let m=Math.min(1,g/h.yesSharesUsdc);c.yesCost=Math.max(0,c.yesCost-c.yesCost*m),c.yesShares=Math.max(0,(c.yesShares||0)-(c.yesShares||0)*m)}else if(a==="no"&&h.noSharesUsdc>0){let m=Math.min(1,g/h.noSharesUsdc);c.noCost=Math.max(0,c.noCost-c.noCost*m),c.noShares=Math.max(0,(c.noShares||0)-(c.noShares||0)*m)}}}localStorage.setItem(u,JSON.stringify(c))}k(`Trade confirmed ${p.slice(0,8)}...`),U(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Na(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(p){U("trade_failed"),ur(p)?(pt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,pe(),k("Session expired. Please sign in again.")):k(p instanceof Error?p.message:"Arc trade failed")}finally{t.marketTradeStatus=null,O(),y()}},hr=e=>Kt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",vr=e=>Kt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"";var ht=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,yr=()=>`
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
`,br=(e=4)=>`${ht("Loading stories")}${Array.from({length:e},yr).join("")}`,Ye=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${ht("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,wr=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${ht("Loading thread timeline")}
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
`;var et=e=>{let a=e.type==="tweet",r='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-top; color: var(--color-text-primary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',o='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 12px; height: 12px; display: inline-block; vertical-align: text-top; margin-right: 4px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';return`
    <article class="story-card ${a?"social-story tweet-card":Ne(e)?"social-story":""}" data-story-id="${e.id}" role="button" tabindex="0" aria-label="Open summary for ${e.headline}">

      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            ${a?`<div style="margin-bottom: 6px;">${r}</div>`:""}
            <strong>${e.source}</strong>
            <span>${je(e)} - ${e.readTime}</span>
          </div>
        </div>
        </div>
        </div>
      </div>

      <div class="story-image-frame desktop-only" aria-hidden="true">
        <img src="${e.imageUrl}" alt="" loading="lazy" />
      </div>

      <div class="story-copy desktop-only">
        <span class="category-chip ${e.category}">${ie(e.category)}</span>
        <h2 class="card-headline">${Lt(e)}</h2>
        <p>${a?"Tap to read the tweet":"Tap to read the AI briefing."}</p>
      </div>

      <div class="card-action-row desktop-only">
        ${a?`<button class="card-source-button read-tweet-btn" type="button" style="cursor: pointer;">Read Tweet</button>
             <a class="card-source-button twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; gap: 6px;">
              ${r}
              Open Tweet
             </a>`:`
              ${hr(e)}
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
                <span class="mobile-source-pill ${Ne(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px; max-width: 100% !important;">
                  ${o}
                  ${st(e)}
                </span>
              `:`
                <div class="mobile-source-container">
                  <span class="mobile-source-pill ${Ne(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px; max-width: 100% !important;">
                    ${st(e)}
                  </span>
                </div>
              `}
              
            </div>
            <h2 class="card-headline">${Lt(e)}</h2>
            <span class="mobile-card-time">${je(e)}</span>
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
                ${vr(e)}
                ${/example\\.com/i.test(e.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
                <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
              `}
        </div>
      </div>

    </article>
  `},fe=()=>{if(!x)return;if(x.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){x.innerHTML=br(4);return}if(G){x.innerHTML=Nr(),te();return}let e=w(t.newsSearchQuery.trim()),r=`
    ${e?`<div class="news-feed-search-copy"><p>${Qe().length} matches for "${e}".</p></div>`:""}
    <div class="feed-minimal-top-bar" style="margin-bottom: 12px;">
      <label class="news-feed-search-bar minimal-search" style="flex: 1;" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search followed news..." value="${w(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </div>
  `;if(t.activeCategory==="Personalized"){let i=Ue(),s=ua(),n=[...i.clubs,...i.players,...i.managers].join(", ");if(!s){x.innerHTML=`
        <div class="briefing-header-card" style="margin-top: 10px; padding: 24px 18px; text-align: center;">
          <h3 style="margin: 0 0 6px 0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Personalize Your Football Feed</h3>
          <p style="font-size: 0.84rem; color: #69728a; margin: 0 auto 16px auto; max-width: 420px;">Type your favorite clubs, managers, and players to build your custom feed.</p>
          <button type="button" class="briefing-back-btn" id="openTopicPickerBtn" style="margin: 0 auto; padding: 6px 20px;">Add Topics</button>
        </div>
      `,document.querySelector("#openTopicPickerBtn")?.addEventListener("click",He),te();return}let d=Qe(),l=`
      <div class="personalized-minimal-bar">
        <div class="personalized-following-text">
          <span class="following-label">Following:</span>
          <span class="following-topics">${w(n)}</span>
          <button type="button" class="minimal-edit-btn" id="customizeTopicsFeedBtn">Edit</button>
        </div>
      </div>
    `;if(d.length===0){x.innerHTML=l+'<div class="portfolio-empty compact news-search-empty">No stories match your followed topics in recent news. Tap Edit to add more clubs or players.</div>',document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",He),te();return}x.innerHTML=l+d.map(et).join(""),document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",He),te();return}let o=Qe();if(o.length===0){let i=t.showSaved?[]:t.stories;if(i.length>0){x.innerHTML=r+i.map(et).join(""),te();return}x.innerHTML=r+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>',te();return}x.innerHTML=r+o.map(et).join(""),te()},Mt=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),we=(e,a,r,o,i,s)=>{e.beginPath(),e.moveTo(a+s,r),e.lineTo(a+o-s,r),e.quadraticCurveTo(a+o,r,a+o,r+s),e.lineTo(a+o,r+i-s),e.quadraticCurveTo(a+o,r+i,a+o-s,r+i),e.lineTo(a+s,r+i),e.quadraticCurveTo(a,r+i,a,r+i-s),e.lineTo(a,r+s),e.quadraticCurveTo(a,r,a+s,r),e.closePath()},xr=(e,a,r,o,i,s,n)=>{let d=a.split(/\s+/).filter(Boolean),l=[],p="";for(let u of d){let c=p?`${p} ${u}`:u;if(e.measureText(c).width<=i){p=c;continue}if(p&&l.push(p),p=u,l.length===n)break}if(p&&l.length<n&&l.push(p),d.length>0&&l.length===n){for(;e.measureText(`${l[n-1]}...`).width>i&&l[n-1].length>0;)l[n-1]=l[n-1].slice(0,-1).trim();l[n-1]=`${l[n-1]}...`}return l.forEach((u,c)=>e.fillText(u,r,o+c*s)),o+l.length*s},kr=(e,a,r,o,i,s,n)=>{let d=Math.max(i/a.naturalWidth,s/a.naturalHeight),l=i/d,p=s/d,u=(a.naturalWidth-l)/2,c=(a.naturalHeight-p)/2;e.save(),we(e,r,o,i,s,n),e.clip(),e.drawImage(a,u,c,l,p,r,o,i,s),e.restore()},Pt=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),Sr={"&quot;":'"',"&apos;":"'","&amp;":"&","&lt;":"<","&gt;":">","&nbsp;":" ","&ndash;":"-","&mdash;":"\u2014","&hellip;":"...","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&scaron;":"\u0161","&Scaron;":"\u0160","&eacute;":"\xE9","&Eacute;":"\xC9","&egrave;":"\xE8","&Egrave;":"\xC8","&ecirc;":"\xEA","&Ecirc;":"\xCA","&aacute;":"\xE1","&Aacute;":"\xC1","&agrave;":"\xE0","&Agrave;":"\xC0","&iacute;":"\xED","&Iacute;":"\xCD","&oacute;":"\xF3","&Oacute;":"\xD3","&uacute;":"\xFA","&Uacute;":"\xDA","&uuml;":"\xFC","&Uuml;":"\xDC","&ouml;":"\xF6","&Ouml;":"\xD6","&auml;":"\xE4","&Auml;":"\xC4","&ntilde;":"\xF1","&Ntilde;":"\xD1","&ccedil;":"\xE7","&Ccedil;":"\xC7","&szlig;":"\xDF","&euro;":"\u20AC","&pound;":"\xA3","&copy;":"\xA9"},nt=e=>e?e.replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"-").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))).replace(/&#x([0-9a-fA-F]+);/g,(a,r)=>String.fromCharCode(parseInt(r,16))).replace(/&[a-zA-Z]+;/g,a=>Sr[a]||a).replace(/&#[a-zA-Z0-9]*;?/g,""):"",$r=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",At=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",we(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let i=await Mt("./assets/siftle-logo-small.png").catch(()=>null);i&&o.drawImage(i,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${nt(e.source)} - ${e.postedAt} ago`,110,140);let s=195;if(a){let d=await Mt($r(e.imageUrl)).catch(()=>null);d?kr(o,d,110,s,860,520,28):(o.fillStyle="#eef2ff",we(o,110,s,860,520,28),o.fill())}else o.fillStyle="#eef2ff",we(o,110,s,860,520,28),o.fill();let n=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",we(o,110,n,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(ie(e.category),132,n+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",xr(o,nt(e.headline),110,888,860,54,4),r},sa=async e=>{let a=await At(e,!0);try{return await Pt(a)}catch{return Pt(await At(e,!1))}},na=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,la=async e=>{let a=await sa(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=na(e),o.click(),URL.revokeObjectURL(r)},Tr=async e=>{let a=await sa(e),r=new File([a],na(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await la(e)},Lr=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,fe(),k(a==="share"?"Preparing share image":"Preparing download"),B&&(B.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await Tr(r):await la(r),k(a==="share"?"Share image ready":"Image saved"),B&&(B.textContent="Branded story image ready")}catch(o){console.warn(o),k("Image export unavailable"),B&&(B.textContent="Image export was cancelled or unavailable")}}},Ct=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,o=Wt(e);return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${ie(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${Te(e)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${r?"disabled":""}>${r?"Preparing...":"AI briefing"}</button>
      </div>
      ${Ve(e)}
      ${r?`<div style="margin-top: 12px;">${Ye()}</div>`:ge(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${Ye()}</div>`:o?`<div style="margin-top: 12px;">${qt(e)}</div>`:`<div style="margin-top: 12px;">${jt(Te(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},Mr=async(e,a)=>{if(!t.walletAddress){k("Session expired or wallet not connected. Please sign in."),Ae();return}let r=Pe().find(p=>p.id===e);if(!r||!Zt(r))return;let o=Xt(r).find(p=>p.id===a);if(!o){k("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",y(),await W(),t.marketTradeStatus=null);let i=t.marketSnapshots[r.id];if(ft(r,i)){k("This market is resolved and can no longer be traded.");return}let s=t.marketPositions[r.id],n=t.marketOrderMode==="sell";if(!n&&s?.optionId){k("Your pick is already locked for this market.");return}if(n&&!s?.optionId){k("You do not have a pick to exit.");return}let d=Math.max(0,Number(s?.optionSharesUsdc)||0);if(n&&d<=0){k("Your pick is still loading. Please try again."),await W({force:!0});return}let l=n?d:Ge(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=l,t.marketTradeOptionId=n&&s?.optionId||o.id,U("trade_attempt");try{t.marketTradeStatus=n?"Exiting your pick...":"Locking your pick...",y(),await tt(r.id,n?"sell":"buy",n&&s?.optionId||o.id,l,p=>{t.marketTradeStatus=p,y()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await Fe(),t.walletAddress&&(t.walletBalance=await re(t.walletAddress)),await W({force:!0}),U(n?"trade_sell_success":"trade_buy_success"),k(n?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(p){U("trade_failed"),k(p instanceof Error?p.message:"Trade failed")}finally{t.marketTradeStatus=null,O(),y()}},Pr=()=>{if(!A||!x)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(x.hidden=!0,A.hidden=!1,A.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){A.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){A.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${wr(3)}
        </article>
      </div>
    `;return}A.innerHTML=`
    <div class="detail-container thread-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card thread-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${ie(e.category)}</span>
          <span>${rr(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${Ct(e,"Latest")}
          ${or(r?.items??[]).map(o=>Ct(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Ar=()=>{if(!A||!x)return;if(t.selectedThreadUrl){Pr();return}let e=t.stories.find(n=>n.id===t.selectedStoryId);if(!e){A.hidden=!0,A.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),x.hidden=!1;return}if(e.type==="tweet"){x.hidden=!0,A.hidden=!1,A.classList.add("fullscreen"),document.body.classList.add("detail-mode");let n='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';A.innerHTML=`
      <div class="detail-container tweet-detail-container" style="max-width: 600px; margin: 0 auto; padding: 20px 16px;">
        <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed" style="margin-bottom: 20px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to feed
        </button>
        <article class="detail-card tweet-detail-card" style="border-radius: 16px; padding: 24px;">
          <div class="detail-topline" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; font-size: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color, #334155);">
            <div style="display: flex; align-items: center; gap: 8px;">
              ${n}
              <strong class="tweet-account-name" style="font-size: 15px;">${e.source}</strong>
            </div>
            <span class="tweet-detail-time">${je(e)}</span>
          </div>
          
          <div class="tweet-content-wrapper" style="margin-bottom: 24px;">
            ${e.imageUrl&&!/nitter\.net\/pic/i.test(e.imageUrl)&&!/placeholder/i.test(e.imageUrl)?`<img class="detail-image" src="${e.imageUrl}" alt="" style="width: 100%; border-radius: 12px; margin-bottom: 16px; object-fit: cover; max-height: 400px; border: 1px solid var(--border-color, #334155);" />`:""}
            <div class="tweet-full-text" style="font-size: 16px; line-height: 1.6; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-weight: 400; word-break: break-word;">
              ${e.summary}
            </div>
          </div>
          
          <a class="source-button twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; border-radius: 9999px; text-decoration: none; font-weight: 600; font-size: 15px; text-align: center; box-sizing: border-box;">
            ${n}
            Open Tweet on X
          </a>
        </article>
      </div>
    `;return}let a=Te(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=ge(e),i=t.unlockingSummaryUrl===e.sourceUrl,s=Wt(e);x.hidden=!0,A.hidden=!1,A.classList.add("fullscreen"),document.body.classList.add("detail-mode"),A.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${ie(e.category)}</span>
          <span>${e.source} - ${je(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?Ve(e):""}
          ${o?r?Ye():s?qt(e):jt(a,e):Ja(e,i)}
        </section>
        ${(()=>{let d=new URLSearchParams(window.location.search).get("url");return d&&d===e.sourceUrl?`
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px; width: 100%;">
              <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer" style="width: 100%; box-sizing: border-box; text-align: center; justify-content: center;">Open source</a>
              <button type="button" class="read-more-news-btn" data-back-to-feed>
                Read More News
              </button>
            </div>
            `:`<a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`})()}
      </article>
    </div>
  `};var Cr=e=>{let a=Jt(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,i=100-o,s=a.evidence[0],n=s?s.headline:"No updates yet",d=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | LIVE \u2022 *No:* ${i}\xA2

*Latest Development:* "${n}"

Trade and discuss here: ${d}`};var Gr=e=>{if(!e)return!1;if(e.isLocked===!0)return!0;let a=String(e.statusDetail||"").toLowerCase();if(a.includes("ft")||a.includes("final")||a.includes("ended")||a.includes("finished")||a.includes("resolved")||a.includes("postponed")||a.includes("locked")||String(e.closes||"").toLowerCase()==="resolved")return!0;if(e.isLive){let r=a.match(/([0-9]{1,3})/);if(r){let o=parseInt(r[1],10);if(!isNaN(o)&&o>=75)return!0}}return!1},Kr=(()=>{try{let e=localStorage.getItem("siftle_global_odds");return e?JSON.parse(e):{}}catch{return{}}})(),lt=e=>{let a=Number(e?.homePoolUsdc)||Number(e?.optionPools?.home)||Number(e?.initialOptionPools?.home)||0,r=Number(e?.drawPoolUsdc)||Number(e?.optionPools?.draw)||Number(e?.initialOptionPools?.draw)||0,o=Number(e?.awayPoolUsdc)||Number(e?.optionPools?.away)||Number(e?.initialOptionPools?.away)||0,i=a+r+o;return i>0?{home:(a/i*100).toFixed(1),draw:(r/i*100).toFixed(1),away:(o/i*100).toFixed(1)}:e&&e.currentOdds?{home:String(Number(e.currentOdds.home).toFixed(1)),draw:String(Number(e.currentOdds.draw).toFixed(1)),away:String(Number(e.currentOdds.away).toFixed(1))}:e&&e.customOdds?{home:String(Number(e.customOdds.home).toFixed(1)),draw:String(Number(e.customOdds.draw).toFixed(1)),away:String(Number(e.customOdds.away).toFixed(1))}:{home:"33.3",draw:"33.3",away:"33.3"}},se=()=>{if(!E||E.length===0?E=ce:E=Dt(ce,E),!x||!A)return;he?.toggleAttribute("hidden",!0),ve?.toggleAttribute("hidden",!0),R?.toggleAttribute("hidden",!0),J?.classList.add("active"),ne?.classList.remove("active"),le?.classList.remove("active"),document.body.classList.remove("detail-mode"),A.hidden=!0,A.classList.remove("fullscreen"),x.hidden=!1,x.classList.remove("matches-surface-active");let e=t.activeMarketLeagueFilter||"All";E=E.filter(i=>{let s=(i.id+" "+i.question+" "+(i.homeTeam||"")+" "+(i.awayTeam||"")).toLowerCase();return!["coventry","nizhny","chertanova","dinamo moscow","spartak moscow"].some(n=>s.includes(n))});let a=E.find(i=>i.id==="m-chelsea-manutd")||E[0],r=[{id:"All",label:"All"},{id:"English Premier League",label:"Premier League"},{id:"Spanish LaLiga",label:"La Liga"},{id:"Italian Serie A",label:"Serie A"},{id:"German Bundesliga",label:"Bundesliga"},{id:"French Ligue 1",label:"Ligue 1"},{id:"Portuguese Primeira Liga",label:"Primeira Liga"},{id:"Dutch Eredivisie",label:"Eredivisie"}],o=e==="All"?E:E.filter(i=>(i.league||"").toLowerCase().trim()===e.toLowerCase().trim());x.innerHTML=`
    <section class="markets-surface" style="width: 100% !important; max-width: 100% !important; margin: 0 auto !important; padding: 12px 16px 120px 16px !important; box-sizing: border-box !important; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif !important; color: var(--ink) !important; overflow-x: hidden !important;">
      
      <!-- Top Title Header -->
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 1.8rem; font-weight: 900; color: var(--ink); letter-spacing: -0.02em;">Live Markets</h1>
        <a href="${ma}" target="_blank" rel="noreferrer" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); font-size: 0.78rem; font-weight: 800; padding: 6px 12px; border-radius: 999px; text-decoration: none; white-space: nowrap; flex-shrink: 0;">Get testnet USDC</a>
      </header>

      <!-- Horizontal League Selection Nav Bar -->
      <div style="display: flex; gap: 8px; overflow-x: auto; overflow-y: hidden; padding-bottom: 10px; margin-bottom: 20px; scrollbar-width: none; -webkit-overflow-scrolling: touch; width: 100%; box-sizing: border-box;">
        ${r.map(i=>{let s=e===i.id;return`
            <button type="button" class="market-league-selector-btn" data-league-id="${i.id}" style="background: ${s?"#38bdf8":"rgba(255, 255, 255, 0.05)"}; color: ${s?"#000000":"var(--muted)"}; border: 1.5px solid ${s?"#38bdf8":"var(--border)"}; border-radius: 999px; padding: 8px 16px; font-size: 0.88rem; font-weight: ${s?"900":"700"}; cursor: pointer; flex-shrink: 0; white-space: nowrap; font-family: inherit; transition: all 0.2s ease; ${s?"box-shadow: 0 4px 12px rgba(56, 189, 248, 0.35);":""}">
              ${w(i.label)}
            </button>
          `}).join("")}
      </div>

      <!-- Active Filtered Markets List -->
      <div style="display: flex; flex-direction: column; gap: 18px;">
        
        <!-- League Section Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <h3 style="margin: 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">${e}</h3>
        </div>

        <!-- Market Cards -->
        ${o.length===0?`
          <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 48px 20px; text-align: center; color: var(--muted); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);">
            <div style="font-size: 1.15rem; font-weight: 800; color: var(--ink); margin-bottom: 8px;">No live markets in ${w(e)}</div>
            <div style="font-size: 0.88rem; font-weight: 600; color: var(--muted);">Check back soon for upcoming match fixtures.</div>
          </div>
        `:o.map((i,s)=>{let n=i.homeTeam||"Chelsea",d=i.awayTeam||"Manchester United",l=i.homeCrest||"https://a.espncdn.com/i/teamlogos/soccer/500/363.png",p=i.awayCrest||"https://a.espncdn.com/i/teamlogos/soccer/500/360.png",u=!!i.isLive,c=Number(i.volumeUsdc)||Number(i.optionPools?.home||0)+Number(i.optionPools?.draw||0)+Number(i.optionPools?.away||0)||Number(i.initialOptionPools?.home||0)+Number(i.initialOptionPools?.draw||0)+Number(i.initialOptionPools?.away||0)||0;return`
            <div class="thick-league-card" data-market-id="${i.id}" style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 18px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);">
              
              <!-- Card Header Status -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                <span style="font-size: 0.78rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; ${u?"background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);":"background: rgba(255, 255, 255, 0.06); color: var(--muted);"}">
                  ${u?"LIVE IN-PLAY":w(i.statusDetail||"Scheduled")}
                </span>
                <span style="font-size: 0.78rem; color: #38bdf8; font-weight: 800; background: rgba(56, 189, 248, 0.12); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.25);">${c>0?"$"+c.toFixed(2):"$0.00"} Vol</span>
              </div>

              <!-- Stacked Teams -->
              <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img src="${l}" alt="" style="width: 26px; height: 26px; object-fit: contain;" />
                  <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${w(n)}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img src="${p}" alt="" style="width: 26px; height: 26px; object-fit: contain;" />
                  <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${w(d)}</span>
                </div>
              </div>

              <!-- 3 Outcome Cents Odds Trading Boxes with Position Locking UX -->
              ${(()=>{let g=t.marketPositions[i.id],h=g&&(g.optionSharesUsdc||g.yesSharesUsdc||0)>0,m=g?.optionId||g?.side,v=lt(i),f=(b,L,$)=>{let S=h&&m===b,M=h&&m!==b;return S?`
                      <button type="button" class="siftle-bet-option-btn" data-market-id="${i.id}" data-option-id="${b}" style="background: rgba(52, 211, 153, 0.12); border: 1.5px solid #34d399; border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 3px; cursor: pointer; text-align: left; box-shadow: 0 0 12px rgba(52, 211, 153, 0.2);">
                        <span style="font-size: 0.68rem; font-weight: 800; color: #34d399; text-transform: uppercase;">Holding ${g.optionSharesUsdc}</span>
                        <span style="font-size: 0.78rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">${w(L)}</span>
                        <span style="font-size: 1rem; font-weight: 900; color: #34d399;">${$}\xA2</span>
                      </button>
                    `:M?`
                      <button type="button" class="siftle-bet-option-btn" data-market-id="${i.id}" data-option-id="${b}" data-held-lock="true" style="background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.12); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 3px; cursor: not-allowed; opacity: 0.45; text-align: left;">
                        <span style="font-size: 0.68rem; font-weight: 800; color: var(--muted);">Locked</span>
                        <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">${w(L)}</span>
                        <span style="font-size: 1rem; font-weight: 800; color: var(--muted);">${$}\xA2</span>
                      </button>
                    `:`
                    <button type="button" class="siftle-bet-option-btn" data-market-id="${i.id}" data-option-id="${b}" style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; cursor: pointer; text-align: left;">
                      <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">${w(L)}</span>
                      <span style="font-size: 1rem; font-weight: 900; color: #38bdf8;">${$}\xA2</span>
                    </button>
                  `};return`
                  <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px;">
                    ${f("home",n,v.home)}
                    ${f("draw","Draw",v.draw)}
                    ${f("away",d,v.away)}
                  </div>
                  ${h?`
                    <div style="margin-top: 10px; font-size: 0.78rem; color: var(--muted); font-weight: 600; text-align: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 8px 12px; border: 1px solid rgba(255, 255, 255, 0.06);">
                      You hold a position in <strong style="color: #34d399;">${w(g.optionLabel||m)}</strong>. You can buy more or sell. Other outcomes are locked.
                    </div>
                  `:""}
                `})()}

            </div>
          `}).join("")}

      </div>

    </section>
  `,document.querySelectorAll(".market-league-selector-btn").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation();let n=i.getAttribute("data-league-id");n&&(t.activeMarketLeagueFilter=n,se())})}),document.querySelectorAll(".siftle-bet-option-btn").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation();let n=i.getAttribute("data-market-id"),d=i.getAttribute("data-option-id");n&&d&&window.openSiftleBettingModal(n,d)})})},Er=()=>{if(!x||!A)return;he?.toggleAttribute("hidden",!0),ve?.toggleAttribute("hidden",!0),R?.toggleAttribute("hidden",!0),J?.classList.remove("active"),ne?.classList.remove("active"),le?.classList.remove("active"),document.body.classList.remove("detail-mode"),A.hidden=!0,x.hidden=!1,x.classList.remove("matches-surface-active"),x.classList.add("markets-list"),x.innerHTML=`
    <section class="leaderboard-surface" style="padding: 14px 14px 120px 14px; max-width: 600px; margin: 0 auto; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif;">
      
      <!-- Clean Minimal Header matching screenshot -->
      <header style="margin-bottom: 22px;">
        <h1 style="margin: 0 0 8px 0; font-size: 1.6rem; font-weight: 900; color: var(--ink); letter-spacing: -0.02em;">
          Season 2 rankings
        </h1>
        <p style="margin: 0; font-size: 0.88rem; color: var(--muted); font-weight: 500; line-height: 1.5;">
          Everyone ranked by Season 2 points. Earn 100 points for pre-match predictions (50 points for in-play live predictions) + daily points for unlocking AI Briefings.
        </p>
      </header>

      <!-- Clean Single Leaderboard Card List -->
      <div class="leaderboard-list" id="leaderboardListContainer" role="list" style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        <!-- Skeleton Loader -->
        <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
          ${Array.from({length:6}).map(()=>`
            <div style="height: 52px; background: rgba(255,255,255,0.03); border-radius: 12px; width: 100%;"></div>
          `).join("")}
        </div>
      </div>

    </section>
  `;let e=document.getElementById("leaderboardListContainer");fetch(z("/api/leaderboard/preseason")).then(a=>a.json()).then(a=>{let r=a.players||[];e&&(e.innerHTML=r.length===0?'<p style="color: var(--muted); text-align: center; padding: 32px 0; font-weight: 600;">No players on Season 2 rankings yet. Make a prediction or unlock a briefing to join!</p>':r.map((o,i)=>{let s=i+1,n=String(o.username||""),d=!!(t.walletAddress&&n.toLowerCase()===t.walletAddress.toLowerCase()),l=d&&t.profileUsername?t.profileUsername:o.displayName||n,p=d?`${t.profileUsername?l:xe(n)} (You)`:l.startsWith("0x")&&l.length===42?xe(l):l,u=w(p),c=Number(o.points)||0,g=s===1?'<span style="width: 26px; height: 26px; border-radius: 50%; background: #fbbf24; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">1</span>':s===2?'<span style="width: 26px; height: 26px; border-radius: 50%; background: #94a3b8; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">2</span>':s===3?'<span style="width: 26px; height: 26px; border-radius: 50%; background: #d97706; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">3</span>':`<span style="width: 26px; height: 26px; border-radius: 50%; background: rgba(255,255,255,0.06); color: var(--muted); font-weight: 800; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">${s}</span>`;return`
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 12px; border-radius: 12px; margin-bottom: 4px; background: ${d?"rgba(56, 189, 248, 0.08)":"transparent"}; border-left: ${d?"3px solid #38bdf8":"3px solid transparent"}; transition: all 0.2s ease;">
                  <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                    ${g}
                    <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px;">
                      ${u}
                    </span>
                  </div>

                  <div style="text-align: right; margin-right: 12px;">
                    <strong style="font-size: 1rem; font-weight: 900; color: var(--ink);">${c} pts</strong>
                  </div>

                  <div style="text-align: right;">
                    <div style="font-size: 0.92rem; font-weight: 800; color: ${(Number(o.pnlUsdc)||0)>=0?"#34d399":"#ef4444"};">
                      ${(Number(o.pnlUsdc)||0)>=0?"+":""}${(Number(o.pnlUsdc)||0).toFixed(2)}
                    </div>
                    <div style="font-size: 0.75rem; font-weight: 700; color: ${(Number(o.roiPct)||0)>=0?"#34d399":"#ef4444"};">
                      ${(Number(o.roiPct)||0)>=0?"+":""}${(Number(o.roiPct)||0).toFixed(1)}%
                    </div>
                  </div>
                </div>
              `}).join(""))}).catch(a=>{console.error("Failed to load Season 2 leaderboard:",a),e&&(e.innerHTML='<p style="color: var(--muted); text-align: center; padding: 24px 0;">Error loading Season 2 rankings. Please refresh.</p>')})},da=()=>{t.activeSurface="feed",t.selectedMarketId=null,he?.toggleAttribute("hidden",!0),ve?.toggleAttribute("hidden",!0),R?.toggleAttribute("hidden",!0),J?.classList.remove("active"),ne?.classList.add("active"),le?.classList.remove("active"),x?.classList.remove("markets-list")};var Et=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0,optionSharesUsdc:0},r=t.marketSnapshots[e.id],o=e.homeTeam||"Home Team",i=e.awayTeam||"Away Team",s=e.homeCrest||"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",n=e.awayCrest||"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",d=a.optionSharesUsdc||a.yesSharesUsdc||1,l=a.optionLabel||(a.optionId==="home"?o:a.optionId==="away"?i:a.optionId==="draw"?"Draw":"Your Pick"),p=a.projectedPayout||(d>0?d*2.22:2.22),u=Math.max(0,p-d),c=(p/(d||1)).toFixed(2),g=r?.resolvedOptionId||null,h=!!g,m=h&&a.optionId===g;return`
    <div class="siftle-ticket-card" style="background: linear-gradient(145deg, #131722 0%, #0d1017 100%); border: 1.5px solid rgba(56, 189, 248, 0.2); border-radius: 20px; padding: 18px 16px; margin-bottom: 14px; position: relative; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.5); font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif;">
      
      <!-- Top Ticket Header: League & Matchday Badge -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; background: rgba(255, 255, 255, 0.08); color: var(--muted); padding: 4px 10px; border-radius: 8px;">
            ${w(e.league||"FOOTBALL")}
          </span>
          <span style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; color: #34d399;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #34d399; display: inline-block;"></span>
            ${h?m?"WON":"SETTLED":"OPEN TICKET"}
          </span>
        </div>

        <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted);">
          ${e.closes||"Today"}
        </span>
      </div>

      <!-- Match Row with Crests -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px dashed rgba(255, 255, 255, 0.1);">
        <div style="display: flex; align-items: center; margin-right: 4px;">
          <img src="${s}" alt="" style="width: 32px; height: 32px; object-fit: contain; z-index: 2;" />
          <img src="${n}" alt="" style="width: 32px; height: 32px; object-fit: contain; margin-left: -10px; z-index: 1; opacity: 0.9;" />
        </div>
        <div style="min-width: 0; flex: 1;">
          <div style="font-size: 1.05rem; font-weight: 900; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${w(o)} vs ${w(i)}
          </div>
          <div style="font-size: 0.8rem; color: #38bdf8; font-weight: 800; margin-top: 2px;">
            Pick: ${w(l)}
          </div>
        </div>
      </div>

      <!-- Ticket Slip Details Grid -->
      <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; padding: 14px; margin-bottom: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <span style="font-size: 0.72rem; color: var(--muted); font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 2px;">Stake Placed</span>
          <strong style="font-size: 1.15rem; font-weight: 900; color: var(--ink);">$${d.toFixed(2)} <span style="font-size: 0.75rem; color: var(--muted); font-weight: 700;">USDC</span></strong>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.72rem; color: var(--muted); font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 2px;">Est. Payout (${c}x)</span>
          <strong style="font-size: 1.25rem; font-weight: 900; color: #34d399;">+$${p.toFixed(2)} <span style="font-size: 0.75rem; color: #34d399; font-weight: 700;">USDC</span></strong>
        </div>
      </div>

      <!-- Action Buttons Row -->
      <div style="display: flex; gap: 8px; align-items: center;">
        <button type="button" onclick="window.openSiftleBettingModal('${e.id}', '${a.optionId||"home"}')" style="flex: 1; background: rgba(56, 189, 248, 0.12); border: 1.5px solid rgba(56, 189, 248, 0.35); color: #38bdf8; padding: 10px 0; border-radius: 12px; font-size: 0.88rem; font-weight: 800; cursor: pointer; text-align: center; transition: all 0.2s ease;">
          Manage / Cash Out \u2197
        </button>
        <a href="https://testnet.arcscan.app/address/0x8478b85e539fa3Ae8C53C360109BD82aE26Caa3E" target="_blank" rel="noopener noreferrer" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--muted); padding: 10px 14px; border-radius: 12px; font-size: 0.82rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
          ArcScan \u2197
        </a>
      </div>

    </div>
  `},Ur=async e=>{if(!t.walletAddress){k("Please sign in first.");return}let a=Pe().find(o=>o.id===e),r=a?me(a):"";if(!a||!r){k("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,N(),U("claim_attempt"),oa();let o=await xa(r,t.walletAddress);U("claim_success"),o.won&&pr(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await re(t.walletAddress),await W(),k(o.won?`Claimed $${Qt(o.amountUsdc)}`:"No payout to claim"),O(),N()}catch(o){U("claim_failed"),k(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],N()}};var ca=async e=>{try{let a=await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/all/summary?event=${e}`);return a.ok?await a.json():null}catch(a){return console.error("Failed to fetch ESPN match summary:",a),null}};var dt=0;window.openSiftleMatchModal=async e=>{console.log("Global openSiftleMatchModal called for id:",e);let a=t.liveMatches.find(I=>String(I.id)===String(e))||{id:e,homeTeam:"Home",awayTeam:"Away",homeCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",homeScore:0,awayScore:0,statusDetail:"Live",league:"Soccer Match",isLive:!0},r=document.getElementById("matchDetailModalOverlay");r&&r.remove(),r=document.createElement("div"),r.id="matchDetailModalOverlay",r.style.cssText="position: fixed; inset: 0; z-index: 999999; background: rgba(3, 7, 18, 0.88); backdrop-filter: blur(12px); display: flex; justify-content: center; align-items: flex-end; padding: 0;";let o=a.isLive,i=a.isPost,s=o?"background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);":i?"background: rgba(148, 163, 184, 0.15); color: var(--muted); border: 1px solid rgba(148, 163, 184, 0.2);":"background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3);";r.innerHTML=`
    <div class="match-detail-card" style="background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.12); border-top-left-radius: 24px; border-top-right-radius: 24px; width: 100%; max-width: 640px; max-height: 88vh; overflow-y: auto; padding: 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 -10px 40px rgba(0,0,0,0.9);">
      
      <!-- Top Close Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.05em;">
          ${w(a.league||"Soccer Match")}
        </span>
        <button type="button" onclick="document.getElementById('matchDetailModalOverlay')?.remove()" style="background: rgba(255, 255, 255, 0.1); border: none; color: var(--ink); width: 34px; height: 34px; border-radius: 50%; font-size: 1.2rem; font-weight: 700; cursor: pointer;">\u2715</button>
      </div>

      <!-- Match Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: var(--subtle-bg); padding: 18px 14px; border-radius: 18px; border: 1px solid var(--border);">
        
        <!-- Home Team -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
          <img src="${a.homeCrest}" alt="" style="width: 44px; height: 44px; object-fit: contain;" />
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${w(a.homeTeam)}</span>
        </div>

        <!-- Score Center -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 0 10px;">
          <span style="font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 10px; ${s}">
            ${o?`LIVE \u2022 ${w(a.statusDetail||"LIVE")}`:w(a.statusDetail||"Scheduled")}
          </span>
          <div style="font-size: 1.8rem; font-weight: 900; color: ${o?"#34d399":"var(--ink)"}; letter-spacing: 2px;">
            ${o||i?`${a.homeScore??0} - ${a.awayScore??0}`:"VS"}
          </div>
        </div>

        <!-- Away Team -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
          <img src="${a.awayCrest}" alt="" style="width: 44px; height: 44px; object-fit: contain;" />
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${w(a.awayTeam)}</span>
        </div>

      </div>

      <!-- Loading / Stats Container -->
      <div id="matchModalContent" style="display: flex; flex-direction: column; gap: 16px;">
        <div class="skeleton" style="height: 120px; border-radius: 16px; width: 100%;"></div>
        <div class="skeleton" style="height: 180px; border-radius: 16px; width: 100%;"></div>
      </div>

    </div>
  `,document.body.appendChild(r),r.addEventListener("click",I=>{I.target===r&&r.remove()});let n=await ca(e),d=document.getElementById("matchModalContent");if(!d)return;if(!n){d.innerHTML='<div style="text-align: center; color: var(--muted); padding: 32px 0;">Match statistics and commentary currently loading or unavailable for this fixture.</div>';return}let l=n.boxscore?.teams||[],p=l[0]?.statistics||[],u=l[1]?.statistics||[],c=(I,P)=>{let C=I.find(D=>D.label?.toLowerCase()===P.toLowerCase()||D.name?.toLowerCase()===P.toLowerCase());return C?C.displayValue:"-"},g=c(p,"possession")!=="-"?c(p,"possession")+"%":"50%",h=c(u,"possession")!=="-"?c(u,"possession")+"%":"50%",m=c(p,"shots"),v=c(u,"shots"),f=c(p,"on goal"),b=c(u,"on goal"),L=c(p,"corner kicks"),$=c(u,"corner kicks"),S=parseFloat(g)||50,M=parseFloat(h)||50;d.innerHTML=`
    <!-- Match Momentum Visualizer Bar -->
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">Match Momentum</span>
        <span style="font-size: 0.75rem; color: #34d399; font-weight: 700;">Live Stats</span>
      </div>
      <div style="display: flex; align-items: flex-end; height: 36px; gap: 3px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
        ${Array.from({length:24}).map((I,P)=>{let C=Math.floor(Math.sin(P*.7)*14)+16,D=P%2===0;return`<div style="flex: 1; height: ${C}px; background: ${D?"#3b82f6":"#34d399"}; border-radius: 2px; opacity: 0.85;"></div>`}).join("")}
      </div>
    </div>

    <!-- Team Statistics -->
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
      <h3 style="margin: 0 0 14px 0; font-size: 0.9rem; font-weight: 800; color: var(--ink);">Team Statistics</h3>

      <div style="margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700; color: var(--muted); margin-bottom: 6px;">
          <span style="color: #3b82f6; font-weight: 800;">${g}</span>
          <span>Possession</span>
          <span style="color: #34d399; font-weight: 800;">${h}</span>
        </div>
        <div style="display: flex; height: 8px; border-radius: 4px; overflow: hidden; background: rgba(255,255,255,0.1);">
          <div style="width: ${S}%; background: #3b82f6;"></div>
          <div style="width: ${M}%; background: #34d399;"></div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
        <span style="font-size: 0.85rem; font-weight: 800; color: #3b82f6; background: rgba(59, 130, 246, 0.15); padding: 2px 8px; border-radius: 6px;">${m!=="-"?m:0} (${f!=="-"?f:0})</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Shots (On Target)</span>
        <span style="font-size: 0.85rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); padding: 2px 8px; border-radius: 6px;">${v!=="-"?v:0} (${b!=="-"?b:0})</span>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">${L!=="-"?L:0}</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Corner Kicks</span>
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">${$!=="-"?$:0}</span>
      </div>
    </div>
  `};var Br=null,Ir=e=>{let a=document.getElementById("siftleSuccessModalOverlay");a&&a.remove();let r=document.createElement("div");r.id="siftleSuccessModalOverlay",r.style.cssText="position: fixed; inset: 0; z-index: 99999999; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;",r.innerHTML=`
    <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 28px; width: 100%; max-width: 420px; padding: 32px 24px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 24px 64px rgba(0,0,0,0.8); text-align: center; color: var(--ink); animation: popIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
      
      <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(52, 211, 153, 0.15); border: 2px solid rgba(52, 211, 153, 0.4); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; font-size: 2rem;">
        
      </div>

      <h2 style="margin: 0 0 6px 0; font-size: 1.4rem; font-weight: 900; color: var(--ink);">Trade Executed!</h2>
      <div style="font-size: 0.85rem; color: var(--muted); font-weight: 600; margin-bottom: 24px;">Your order has been filled on Arc testnet</div>

      <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 18px; padding: 18px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px; text-align: left;">
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Outcome</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${w(e.optionName)}</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Match</span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">${w(e.matchTitle)}</span>
        </div>


        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Amount Placed</span>
          <span style="font-size: 1.1rem; font-weight: 900; color: #38bdf8;">$${e.tradeAmount}.00 USDC</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Share Price Impact</span>
          <span style="font-size: 0.9rem; font-weight: 800; color: #34d399;">${e.oldPrice}\xA2 \u2192 ${e.newPrice}\xA2</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 10px; margin-top: 2px;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Est. Payout</span>
          <span style="font-size: 1.05rem; font-weight: 900; color: #34d399;">${e.potentialWin} USDC</span>
        </div>
      </div>

      <!-- Prominent Clickable ArcScan Verification Button -->
      <a href="${e.txHash?`https://testnet.arcscan.app/tx/${e.txHash}`:`https://testnet.arcscan.app/address/${t.walletAddress||"0x8478b85e539fa3Ae8C53C360109BD82aE26Caa3E"}`}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; background: rgba(56, 189, 248, 0.12); border: 1.5px solid rgba(56, 189, 248, 0.35); color: #38bdf8; padding: 13px; border-radius: 14px; font-size: 0.95rem; font-weight: 800; text-decoration: none; margin-bottom: 12px; box-sizing: border-box; transition: all 0.2s ease;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        Verify on ArcScan Explorer \u2197
      </a>

      <button type="button" id="closeSuccessModalBtn" style="width: 100%; background: #38bdf8; color: #000000; border: none; padding: 14px; border-radius: 14px; font-size: 1rem; font-weight: 900; cursor: pointer; box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4); transition: all 0.2s ease;">
        Done
      </button>

    </div>
  `,document.body.appendChild(r),r.querySelector("#closeSuccessModalBtn")?.addEventListener("click",()=>{r.remove(),se(),window.scrollTo({top:dt,behavior:"instant"})}),r.addEventListener("click",o=>{o.target===r&&(r.remove(),se(),window.scrollTo({top:dt,behavior:"instant"}))})};window.openSiftleBettingModal=(e,a,r)=>{r&&(r.preventDefault(),r.stopPropagation()),dt=window.scrollY;let o=E.find(L=>L.id===e)||E[0]||{id:e,question:"Crystal Palace vs Manchester City",homeTeam:"Crystal Palace",awayTeam:"Manchester City",homeCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/384.png",awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/382.png"},i=t.marketPositions[o.id],s=i&&(i.optionSharesUsdc||i.yesSharesUsdc||0)>0,n=i?.optionId||i?.side;if(s&&n!==a){k(`Outcome Locked: You currently hold ${i.optionSharesUsdc} in ${i.optionLabel||n}. You can buy more or sell. Other outcomes are locked.`);return}let d=a,l=lt(o),p=parseFloat(l.home)||33.3;a==="home"?(d=o.homeTeam||"Home",p=parseFloat(l.home)||33.3):a==="away"?(d=o.awayTeam||"Away",p=parseFloat(l.away)||33.3):a==="draw"&&(d="Draw",p=parseFloat(l.draw)||33.3);let u=document.getElementById("siftleBettingModalOverlay");u&&u.remove(),u=document.createElement("div"),u.id="siftleBettingModalOverlay",u.style.cssText="position: fixed; inset: 0; z-index: 9999999; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: flex-end; padding: 0; box-sizing: border-box;";let c="BUY",g=2,h=t.marketPositions[o.id],m=h&&(h.optionSharesUsdc||h.yesSharesUsdc)||0,v=t.walletAddress?t.walletBalance?`${parseFloat(String(t.walletBalance).replace(/,/g,"")).toFixed(2)} USDC`:"0.00 USDC":"$0.00 USDC",f=L=>{let $=Number(o.volumeUsdc)||0,S=Number(o[`${a}PoolUsdc`])||($>0?$*.333:0),M=$+L,I=S+L;return I>0?L/I*M:L},b=()=>{let L=f(g),$=(L/(g||1)).toFixed(2),S=m.toFixed(2);u.innerHTML=`
      <div id="bettingModalSheet" style="background: var(--paper); border: 1px solid rgba(255, 255, 255, 0.12); border-top-left-radius: 28px; border-top-right-radius: 28px; width: 100%; max-width: 600px; padding: 24px 20px 36px 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 -16px 48px rgba(0,0,0,0.95); animation: slideUp 0.25s ease-out; color: var(--ink); pointer-events: auto;">
        
        <!-- Modal Top Navigation Header with BUY / SELL Tabs -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div style="display: flex; gap: 6px; background: var(--subtle-bg); padding: 4px; border-radius: 12px; border: 1px solid var(--border);">
            <button type="button" id="tabBuyBtn" style="padding: 8px 24px; border-radius: 8px; border: none; font-size: 0.95rem; font-weight: 800; cursor: pointer; transition: all 0.2s ease; background: ${c==="BUY"?"#38bdf8":"transparent"}; color: ${c==="BUY"?"#000000":"var(--muted)"};">
              Buy
            </button>
            <button type="button" id="tabSellBtn" style="padding: 8px 24px; border-radius: 8px; border: none; font-size: 0.95rem; font-weight: 800; cursor: pointer; transition: all 0.2s ease; background: ${c==="SELL"?"#ef4444":"transparent"}; color: ${c==="SELL"?"#ffffff":"var(--muted)"};">
              Sell
            </button>
          </div>
          
          <button type="button" id="closeBettingModalBtn" style="background: var(--subtle-bg); border: none; color: var(--muted); width: 34px; height: 34px; border-radius: 50%; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center;">\u2715</button>
        </div>

        <!-- Outcome Selection Details -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${a==="home"?o.homeCrest:a==="away"?o.awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png"}" alt="" style="width: 38px; height: 38px; object-fit: contain;" />
            <div>
              <div style="font-size: 1.1rem; font-weight: 800; color: var(--ink);">${w(d)}</div>
              <div style="font-size: 0.82rem; color: var(--muted); font-weight: 600;">${w(o.homeTeam||"Home")} vs ${w(o.awayTeam||"Away")}</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.78rem; color: var(--muted); font-weight: 600;">${c==="BUY"?"Balance":"You Own"}</div>
            <div style="font-size: 0.9rem; font-weight: 800; color: #38bdf8;">${c==="BUY"?v:`$${m.toFixed(2)} Shares`}</div>
          </div>
        </div>

        ${c==="BUY"?`
          <!-- BUY VIEW -->
          <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 16px; padding: 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
            <button type="button" id="decBetBtn" style="background: rgba(255,255,255,0.08); border: none; color: var(--ink); width: 40px; height: 40px; border-radius: 10px; font-size: 1.3rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;">-</button>
            
            <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 0.75rem; color: var(--muted); font-weight: 700; text-transform: uppercase;">Amount</div>
              <div style="display: flex; align-items: center; gap: 2px;">
                <span style="font-size: 1.6rem; font-weight: 900; color: var(--ink);">$</span>
                <input type="number" id="tradeAmountInput" value="${g}" min="1" max="10000" style="background: transparent; border: none; font-size: 1.6rem; font-weight: 900; color: var(--ink); width: 90px; text-align: center; font-family: inherit; outline: none;" />
              </div>
            </div>
            
            <button type="button" id="incBetBtn" style="background: rgba(255,255,255,0.08); border: none; color: var(--ink); width: 40px; height: 40px; border-radius: 10px; font-size: 1.3rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;">+</button>
          </div>

          <!-- Clickable Quick Amount Pills ($10, $20, $50) -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">
            ${[10,20,50].map(P=>`
              <button type="button" class="quick-amt-btn" data-amt="${P}" style="background: ${g===P?"rgba(56, 189, 248, 0.2)":"rgba(255, 255, 255, 0.04)"}; border: 1.5px solid ${g===P?"#38bdf8":"rgba(255, 255, 255, 0.08)"}; color: ${g===P?"#38bdf8":"var(--ink)"}; padding: 12px 0; border-radius: 14px; font-weight: 800; cursor: pointer; text-align: center; font-size: 1rem; transition: all 0.2s ease;">
                ${P}
              </button>
            `).join("")}
          </div>

          <!-- Payout Summary (Pari-Mutuel Shared Pot) -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 0.95rem; font-weight: 800;">
            <span style="color: var(--muted);">Est. Pool Payout: <strong id="toWinAmountLabel" style="color: #34d399;">$${L.toFixed(2)} USDC (${$}x)</strong></span>
            <span style="color: var(--muted);">Pool Odds: <strong style="color: #38bdf8;">${p.toFixed(1)}\xA2</strong></span>
          </div>

          <button type="button" id="confirmTradeBtn" style="width: 100%; background: #38bdf8; color: #000000; border: none; padding: 16px; border-radius: 16px; font-size: 1.1rem; font-weight: 900; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4);">
            Buy Shares (${g} USDC)
          </button>
        `:`
          <!-- SELL VIEW -->
          ${m<=0?`
            <div style="background: var(--subtle-bg); border: 1px dashed var(--border); border-radius: 16px; padding: 24px 16px; text-align: center; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 700; color: var(--ink);">No Shares Owned</p>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">You don't own any shares of ${w(d)} yet. Switch to Buy to place a prediction!</p>
            </div>
            <button type="button" id="switchBuyTabBtn" style="width: 100%; background: #38bdf8; color: #000000; border: none; padding: 16px; border-radius: 16px; font-size: 1.05rem; font-weight: 900; cursor: pointer;">
              Switch to Buy
            </button>
          `:`
            <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 16px; padding: 18px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Shares to Exit</span>
                <span style="font-size: 1rem; font-weight: 800; color: var(--ink);">$${m.toFixed(2)} USDC</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 12px;">
                <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Full Refund Return</span>
                <span style="font-size: 1.15rem; font-weight: 900; color: #34d399;">$${S} USDC</span>
              </div>
            </div>

            <button type="button" id="confirmSellBtn" style="width: 100%; background: #ef4444; color: #ffffff; border: none; padding: 16px; border-radius: 16px; font-size: 1.1rem; font-weight: 900; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 20px rgba(239, 68, 68, 0.4);">
              Sell All Shares (Receive $${S} USDC)
            </button>
          `}
        `}

      </div>
    `;let M=(P,C=!1)=>{let D=parseInt(P,10);g=P.trim()===""||isNaN(D)?0:Math.max(0,D);let Z=u.querySelector("#tradeAmountInput");Z&&C&&(Z.value=g>0?String(g):"");let j=u.querySelector("#toWinAmountLabel");if(g>0){let T=f(g),Y=(T/g).toFixed(2);j&&(j.textContent=`${T.toFixed(2)} USDC (${Y}x)`)}else j&&(j.textContent="$0.00 USDC (1.00x)");let q=u.querySelector("#confirmTradeBtn");q&&(q.textContent=g>0?`Buy Shares (${g} USDC)`:"Enter Amount",q.disabled=g<=0),u.querySelectorAll(".quick-amt-btn").forEach(T=>{Number(T.getAttribute("data-amt"))===g?(T.style.background="rgba(56, 189, 248, 0.2)",T.style.borderColor="#38bdf8",T.style.color="#38bdf8"):(T.style.background="rgba(255, 255, 255, 0.04)",T.style.borderColor="rgba(255, 255, 255, 0.08)",T.style.color="var(--ink)")})};u.querySelector("#closeBettingModalBtn")?.addEventListener("click",()=>u?.remove()),u.querySelector("#tabBuyBtn")?.addEventListener("click",()=>{c="BUY",b()}),u.querySelector("#tabSellBtn")?.addEventListener("click",()=>{c="SELL",b()}),u.querySelector("#switchBuyTabBtn")?.addEventListener("click",()=>{c="BUY",b()}),u.querySelector("#decBetBtn")?.addEventListener("click",()=>{let P=g||0,C=P>5?P-5:Math.max(1,P-1);M(String(C),!0)}),u.querySelector("#incBetBtn")?.addEventListener("click",()=>{M(String((g||0)+5),!0)});let I=u.querySelector("#tradeAmountInput");I&&(I.addEventListener("input",P=>{M(P.target.value,!1)}),I.addEventListener("keyup",P=>{M(P.target.value,!1)}),I.addEventListener("blur",P=>{let C=P.target.value.trim();(C===""||parseInt(C,10)<1)&&M("1",!0)})),u.querySelectorAll(".quick-amt-btn").forEach(P=>{P.addEventListener("click",C=>{C.preventDefault(),C.stopPropagation();let D=P.getAttribute("data-amt")||"20";M(D,!0)})}),u.querySelector("#confirmSellBtn")?.addEventListener("click",async P=>{P.preventDefault(),P.stopPropagation();let C=u.querySelector("#confirmSellBtn");if(C&&(C.disabled=!0,C.textContent="Placing trade on Arc..."),t.walletAddress)try{await tt(o.id,"sell",a,m,T=>{C&&(C.textContent=T)})}catch(T){console.warn("Sell execution fallback:",T?.message||T)}let D=String(t.walletBalance||"100.00").replace(/,/g,""),Be=parseFloat(D)||100,Z=parseFloat(m.toFixed(2)),j=(Be+Z).toFixed(2);t.walletBalance=j;let q=t.walletAddress?t.walletAddress.toLowerCase():"guest";try{localStorage.setItem(`siftle_optimistic_bal_${q}`,j)}catch{}delete t.marketPositions[o.id];try{let T=`siftle_positions_${q}`,Y=JSON.parse(localStorage.getItem(T)||"{}");delete Y[o.id],localStorage.setItem(T,JSON.stringify(Y))}catch{}u?.remove(),se(),O(),k(`Successfully sold shares! +$${Z} USDC refunded.`)}),u.querySelector("#confirmTradeBtn")?.addEventListener("click",async P=>{P.preventDefault(),P.stopPropagation();let C=u.querySelector("#confirmTradeBtn");C&&(C.disabled=!0,C.textContent="Placing trade on Arc...");let D;if(t.walletAddress)try{if(D=await tt(o.id,"buy",a,g,H=>{C&&(C.textContent=H)}),!D||!D.startsWith("0x"))throw new Error("No on-chain transaction hash returned from Arc Testnet")}catch(H){console.error("On-chain trade failed:",H),C&&(C.disabled=!1,C.textContent="Buy Shares"),k(`Trade failed on Arc: ${H?.message||H}`);return}let Be=String(t.walletBalance||"100.00").replace(/,/g,""),Z=parseFloat(Be)||100,j=Math.max(0,Z-g).toFixed(2);t.walletBalance=j;let q=t.walletAddress?t.walletAddress.toLowerCase():"guest";try{localStorage.setItem(`siftle_optimistic_bal_${q}`,j)}catch{}let T=E.find(H=>String(H.id)===String(o.id))||o,Y=lt(T),Ie=parseFloat(Y.home)||33.3,vt=parseFloat(Y.draw)||33.3,ze=parseFloat(Y.away)||33.3,Q=Ie,ye=vt,ee=ze;a==="home"?(Q=Math.min(85,Ie+2.5),ee=Math.max(10,ze-1.5),ye=Math.max(10,100-(Q+ee))):a==="away"?(ee=Math.min(85,ze+2.5),Q=Math.max(10,Ie-1.5),ye=Math.max(10,100-(Q+ee))):(ye=Math.min(60,vt+2.5),Q=Math.max(10,Ie-1.25),ee=Math.max(10,ze-1.25));let yt=(Number(T.volumeUsdc)||Number(T.optionPools?.home||0)+Number(T.optionPools?.draw||0)+Number(T.optionPools?.away||0)||Number(T.initialOptionPools?.home||0)+Number(T.initialOptionPools?.draw||0)+Number(T.initialOptionPools?.away||0)||0)+g;T.volumeUsdc=yt,T.optionPools=T.optionPools||{...T.initialOptionPools||{}},T.optionPools[a]=(Number(T.optionPools[a])||0)+g,T[`${a}PoolUsdc`]=(Number(T[`${a}PoolUsdc`])||0)+g,T.volume=`$${yt.toFixed(2)}`,T.currentOdds={home:Q.toFixed(1),draw:ye.toFixed(1),away:ee.toFixed(1)};let Oe=(t.marketPositions[o.id]?.optionSharesUsdc||0)+g;t.marketPositions[o.id]={marketId:o.id,side:a,optionId:a,optionLabel:d,optionSharesUsdc:Oe,yesSharesUsdc:Oe,noSharesUsdc:0,stakePlaced:Oe,costBasisUsdc:Oe,entryPriceCents:p,isLiveTrade:!!o.isLive};try{let H=`siftle_positions_${q}`,bt=JSON.parse(localStorage.getItem(H)||"{}");bt[o.id]=t.marketPositions[o.id],localStorage.setItem(H,JSON.stringify(bt))}catch{}u?.remove(),se(),O(),k(`Successfully placed $${g} prediction on ${w(d)}!`);let ga=f(g);Ir({optionName:d,matchTitle:`${T.homeTeam||"Home"} vs ${T.awayTeam||"Away"}`,tradeAmount:g,oldPrice:parseFloat(p.toFixed(1)),newPrice:parseFloat((a==="home"?Q:a==="away"?ee:ye).toFixed(1)),potentialWin:ga.toFixed(2),txHash:D})})};b(),document.body.appendChild(u)};window.openSiftleMatchPage=e=>{console.log("openSiftleMatchPage called for matchId:",e),t.selectedMatchId=String(e),t.matchDetailTab="overview",t.activeSurface==="matches"?pa(String(e)):y()};var pa=async e=>{if(!x||!A)return;he?.toggleAttribute("hidden",!0),ve?.toggleAttribute("hidden",!0),R?.toggleAttribute("hidden",!0),J?.classList.remove("active"),ne?.classList.remove("active"),le?.classList.remove("active"),document.body.classList.remove("detail-mode"),A.hidden=!0,x.hidden=!1,x.classList.remove("markets-list"),x.classList.add("matches-surface-active");let a=t.liveMatches.find($=>String($.id)===String(e))||{id:e,homeTeam:"Espanyol",awayTeam:"Real Madrid",homeCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",homeScore:1,awayScore:1,statusDetail:"44'",league:"Spanish LaLiga",isLive:!0,isPost:!1,date:new Date().toISOString()},r=t.matchDetailTab||"overview";x.innerHTML=`
    <section class="match-full-page" style="padding: 12px 10px 120px 10px; width: 100%; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif; color: var(--ink);">
      
      <!-- Top Navigation Header with Back Arrow -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <button type="button" id="backToMatchesBtn" style="background: var(--subtle-bg); border: 1px solid rgba(255, 255, 255, 0.12); color: var(--ink); width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
          \u2190
        </button>
        <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink); letter-spacing: -0.01em;">
          ${w(qe(a.league))}
        </span>
        <div style="width: 42px;"></div>
      </div>

      <!-- Hero Scoreboard Card (Matching Reference Image) -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 24px; padding: 24px 16px; margin-bottom: 20px; box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);">
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <!-- Home Team -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
            <img src="${a.homeCrest}" alt="" style="width: 56px; height: 56px; object-fit: contain;" />
            <span style="font-size: 1.05rem; font-weight: 800; color: var(--ink);">${w(a.homeTeam)}</span>
            
          </div>

          <!-- Score & Live Status -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 0 12px;">
            <span style="font-size: 0.8rem; font-weight: 800; padding: 4px 12px; border-radius: 12px; ${a.isLive?"background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);":"background: var(--subtle-bg); color: var(--muted);"}">
              ${a.isLive?`LIVE \u2022 ${w(a.statusDetail)}`:w(a.statusDetail)}
            </span>
            <div style="font-size: 2.5rem; font-weight: 900; color: ${a.isLive?"#34d399":"var(--ink)"}; letter-spacing: 3px;">
              ${a.isLive||a.isPost?`${a.homeScore??0} - ${a.awayScore??0}`:"VS"}
            </div>
          </div>

          <!-- Away Team -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
            <img src="${a.awayCrest}" alt="" style="width: 56px; height: 56px; object-fit: contain;" />
            <span style="font-size: 1.05rem; font-weight: 800; color: var(--ink);">${w(a.awayTeam)}</span>
            
          </div>
        </div>

        <div id="heroGoalScorersList" style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; gap: 4px; font-size: 0.85rem; color: var(--muted); font-weight: 600; text-align: center;"></div>

      </div>

      <!-- Tab Bar Navigation Pills (Matching Reference Image) -->
      <div style="display: flex; gap: 8px; overflow-x: auto; margin-bottom: 24px; padding-bottom: 4px; scrollbar-width: none;">
        ${[{id:"overview",label:"Overview"},{id:"ticker",label:"Live Ticker"},{id:"lineup",label:"Line-up"},{id:"stats",label:"Stats"}].map($=>{let S=r===$.id;return`
            <button type="button" class="match-page-tab-btn" data-tab-id="${$.id}" style="background: ${S?"#ffffff":"rgba(255, 255, 255, 0.05)"}; color: ${S?"#0f172a":"#94a3b8"}; border: 1.5px solid ${S?"#ffffff":"rgba(255, 255, 255, 0.08)"}; padding: 10px 22px; border-radius: 999px; font-size: 0.9rem; font-weight: 800; cursor: pointer; white-space: nowrap; flex: 1; text-align: center; transition: all 0.2s ease;">
              ${$.label}
            </button>
          `}).join("")}
      </div>

      <!-- Tab Content Area with Rich Glowing Skeleton Loader -->
      <div id="matchDetailPageTabContent" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 22px 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
          <div style="width: 120px; height: 18px; border-radius: 6px; background: rgba(255, 255, 255, 0.08); margin-bottom: 18px; animation: pulse 1.2s infinite ease-in-out;"></div>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${[1,2,3,4].map(()=>`
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="width: 35%; height: 12px; border-radius: 4px; background: rgba(255, 255, 255, 0.06); animation: pulse 1.2s infinite ease-in-out;"></div>
                <div style="width: 25%; height: 14px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                <div style="width: 35%; height: 12px; border-radius: 4px; background: rgba(255, 255, 255, 0.06); animation: pulse 1.2s infinite ease-in-out;"></div>
              </div>
            `).join("")}
          </div>
        </div>

        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 22px 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
          <div style="width: 150px; height: 18px; border-radius: 6px; background: rgba(255, 255, 255, 0.08); margin-bottom: 18px; animation: pulse 1.2s infinite ease-in-out;"></div>
          <div style="height: 120px; border-radius: 12px; background: rgba(255, 255, 255, 0.03); animation: pulse 1.2s infinite ease-in-out;"></div>
        </div>
      </div>

    </section>
  `,document.getElementById("backToMatchesBtn")?.addEventListener("click",()=>{t.selectedMatchId=null,Me()}),document.querySelectorAll(".match-page-tab-btn").forEach($=>{$.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation();let M=$.getAttribute("data-tab-id");M&&(t.matchDetailTab=M,pa(e))})});let o=await ca(e);Br=o;let i=document.getElementById("matchDetailPageTabContent");if(!i)return;if(!a.isLive&&!a.isPost){i.innerHTML=`
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 36px 20px; text-align: center; color: var(--muted);">
        <div style="font-size: 2.2rem; margin-bottom: 10px;">\u23F1\uFE0F</div>
        <div style="font-size: 1.15rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">Match Has Not Started Yet</div>
        <div style="font-size: 0.9rem; color: var(--muted);">Scheduled Kickoff: ${w(a.statusDetail||"Upcoming")}. Statistics, live commentary, and rosters will display here once the match begins.</div>
      </div>
    `;return}if(!o){i.innerHTML='<div style="text-align: center; color: var(--muted); padding: 48px 16px;">Match details loading or currently unavailable for this fixture.</div>';return}let s=o.boxscore?.teams||[],n=s[0]?.statistics||[],d=s[1]?.statistics||[],l=($,S)=>{let M=$.find(I=>I.label?.toLowerCase()===S.toLowerCase()||I.name?.toLowerCase()===S.toLowerCase());return M?M.displayValue:"-"},p=l(n,"possession")!=="-"?l(n,"possession")+"%":"38%",u=l(d,"possession")!=="-"?l(d,"possession")+"%":"62%",c=l(n,"shots"),g=l(d,"shots"),h=l(n,"on goal")!=="-"?l(n,"on goal"):"2",m=l(d,"on goal")!=="-"?l(d,"on goal"):"5",v=l(n,"corner kicks"),f=l(d,"corner kicks"),b=parseFloat(p)||38,L=parseFloat(u)||62;if(r==="overview"){if(!a.isLive&&!a.isPost){i.innerHTML=`
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 36px 20px; text-align: center; color: var(--muted);">
          <div style="font-size: 2rem; margin-bottom: 10px;">\u23F1\uFE0F</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">Match Has Not Started</div>
          <div style="font-size: 0.88rem; color: var(--muted);">Scheduled Kickoff: ${w(a.statusDetail||"Upcoming")}. Live statistics and key events will display here once the match begins.</div>
        </div>
      `;return}i.innerHTML=`
      <!-- Stats Container (Matching Reference UI) -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">Stats</h3>

        

        <!-- Possession Bar -->
        <div style="margin-bottom: 18px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 800; color: var(--ink); margin-bottom: 8px;">
            <span style="font-weight: 800;">${p}</span>
            <span style="color: var(--muted); font-weight: 700;">Possession</span>
            <span style="color: #34d399; font-weight: 800; background: rgba(52, 211, 153, 0.18); padding: 2px 10px; border-radius: 999px;">${u}</span>
          </div>
          <div style="display: flex; height: 10px; border-radius: 6px; overflow: hidden; background: rgba(255,255,255,0.08);">
            <div style="width: ${b}%; background: #3b82f6;"></div>
            <div style="width: ${L}%; background: #34d399;"></div>
          </div>
        </div>

        

        <!-- Shots on Target -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-top: 1px solid rgba(255,255,255,0.06);">
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${h}</span>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--muted);">Shots on target</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.18); padding: 4px 14px; border-radius: 999px;">${m}</span>
        </div>

        <!-- Duels Won -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-top: 1px solid rgba(255,255,255,0.06);">
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">36%</span>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--muted);">Duels won</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.18); padding: 4px 14px; border-radius: 999px;">64%</span>
        </div>

      </div>

      <!-- Key Events Section -->
      <!-- Dynamic Real Key Events Section -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">Key events</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${(()=>{let S=(o.keyEvents||o.commentary||[]).filter(M=>M.type?.text?.toLowerCase().includes("goal")||M.scoringPlay||M.text?.toLowerCase().includes("goal"));return S.length===0?'<div style="color: var(--muted); font-size: 0.9rem;">No goals recorded for this match yet.</div>':S.map(M=>`
              <div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; min-width: 30px;">${M.clock?.displayValue||M.time?.displayValue||"\u2022"}</span>
                <span style="font-size: 1.1rem;"></span>
                <span style="font-size: 0.9rem; font-weight: 700; color: var(--ink);">${w(M.text)}</span>
              </div>
            `).join("")})()}
        </div>
      </div>
    `}else if(r==="ticker"){let $=(o.commentary||o.keyEvents||[]).slice().reverse();i.innerHTML=`
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">Live Ticker & Commentary</h3>
        ${$.length===0?`
          <div style="text-align: center; color: var(--muted); padding: 24px 0;">No live commentary available for this match.</div>
        `:`
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${$.map(S=>`
              <div style="display: flex; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; min-width: 36px;">${S.clock?.displayValue||S.time?.displayValue||"\u2022"}</span>
                <span style="font-size: 0.9rem; color: var(--ink); line-height: 1.4;">${w(S.text)}</span>
              </div>
            `).join("")}
          </div>
        `}
      </div>
    `}else if(r==="lineup"){let $=o.rosters||[],S=$[0]?.roster||[],M=$[1]?.roster||[];i.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Home Team Roster -->
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
          <h3 style="margin: 0 0 14px 0; font-size: 1rem; font-weight: 800; color: #3b82f6;">${w(a.homeTeam)} Starting Lineup</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px;">
            ${S.slice(0,11).map(I=>`
              <div style="background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.15); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${I.jersey||"#"}</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${w(I.athlete?.displayName||"Player")}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Away Team Roster -->
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
          <h3 style="margin: 0 0 14px 0; font-size: 1rem; font-weight: 800; color: #34d399;">${w(a.awayTeam)} Starting Lineup</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px;">
            ${M.slice(0,11).map(I=>`
              <div style="background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${I.jersey||"#"}</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${w(I.athlete?.displayName||"Player")}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `}else r==="stats"&&(i.innerHTML=`
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1rem; font-weight: 800; color: var(--ink);">Full Match Statistics</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: #3b82f6;">${p}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Possession</span>
            <span style="font-weight: 800; color: #34d399;">${u}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${c}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Total Shots</span>
            <span style="font-weight: 800; color: var(--ink);">${g}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${h}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Shots on Target</span>
            <span style="font-weight: 800; color: var(--ink);">${m}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${v}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Corner Kicks</span>
            <span style="font-weight: 800; color: var(--ink);">${f}</span>
          </div>
        </div>
      </div>
    `)},Me=()=>{if(!x||!A)return;he?.toggleAttribute("hidden",!0),ve?.toggleAttribute("hidden",!0),R?.toggleAttribute("hidden",!0),J?.classList.remove("active"),ne?.classList.remove("active"),le?.classList.remove("active"),document.body.classList.remove("detail-mode"),A.hidden=!0,x.hidden=!1,x.classList.remove("markets-list"),x.classList.add("matches-surface-active");let e=new Date,a=We(e);t.activeMatchDate||(t.activeMatchDate=a),t.liveMatches.length===0&&!t.loadingLiveMatches&&ia(t.activeMatchDate).then(()=>{t.activeSurface==="matches"&&Me()});let r=t.liveMatches,o=t.loadingLiveMatches&&r.length===0,i=r.filter(l=>l.isLive),s=r.filter(l=>!l.isLive),n=new Map;i.length>0&&n.set("LIVE \u2022 LIVE MATCHES NOW",i),s.forEach(l=>{let p=qe(l.league||"Matches");n.has(p)||n.set(p,[]),n.get(p).push(l)});let d=[];for(let l=-1;l<=5;l++){let p=new Date(e);p.setDate(e.getDate()+l);let u=We(p),c="";l===-1?c="Yesterday":l===0?c="Today":l===1?c="Tomorrow":c=p.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}),d.push({label:c,dateStr:u})}x.innerHTML=`
    <section class="matches-surface" style="padding: 16px 12px 110px 12px; box-sizing: border-box; width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;">
      
      <!-- Top Title Header -->
      <header class="matches-header" style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <h1 style="margin: 0; font-size: 1.6rem; font-weight: 800; color: var(--ink); letter-spacing: -0.02em;">Matches</h1>
      </header>

      <!-- Dynamic 7-Day Date Navigation Pills -->
      <div class="matches-date-pills-scroll">
        ${d.map(l=>{let p=t.activeMatchDate===l.dateStr;return`
            <button type="button" class="match-date-pill-btn" data-match-date="${l.dateStr}" style="background: ${p?"#1e293b":"rgba(255, 255, 255, 0.04)"}; color: ${p?"#38bdf8":"#94a3b8"}; border: 1.5px solid ${p?"#0284c7":"rgba(255, 255, 255, 0.08)"}; padding: 8px 18px; border-radius: 10px; font-size: 0.85rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0; font-family: inherit; transition: all 0.2s ease;">
              ${w(l.label)}
            </button>
          `}).join("")}
      </div>

      ${o?`
        <!-- Rich Football Match Loading Skeletons -->
        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
          ${[1,2,3].map(()=>`
            <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); width: 100%; box-sizing: border-box;">
              <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); margin-bottom: 14px;">
                <div style="width: 28px; height: 28px; border-radius: 8px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                <div style="width: 140px; height: 16px; border-radius: 6px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                    <div style="width: 110px; height: 14px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                  </div>
                  <div style="width: 20px; height: 16px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                    <div style="width: 95px; height: 14px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                  </div>
                  <div style="width: 20px; height: 16px; border-radius: 4px; background: rgba(255, 255, 255, 0.08); animation: pulse 1.2s infinite ease-in-out;"></div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `:r.length===0?`
        <div style="text-align: center; padding: 48px 16px; color: var(--muted); font-size: 0.95rem; font-weight: 500;">
          No matches available for this date. Select another date above!
        </div>
      `:`
        <div class="league-groups-container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
          ${Array.from(n.entries()).map(([l,p])=>{let u=l.includes("LIVE MATCHES"),c=p[0]?.leagueLogo||"";return`
              <!-- Thick Card per League (News Card Background #12131a) -->
              <div class="thick-league-card" style="background: var(--paper); border: 1px solid ${u?"rgba(239, 68, 68, 0.4)":"rgba(255, 255, 255, 0.08)"}; border-radius: 18px; padding: 18px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4); width: 100%; box-sizing: border-box;">
                
                <!-- Authentic League Card Header -->
                <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 14px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(255, 255, 255, 0.06); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    ${c?`<img src="${c}" alt="" style="width: 22px; height: 22px; object-fit: contain;" />`:""}
                  </div>
                  <div>
                    <h2 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: ${u?"#ef4444":"var(--ink)"}; letter-spacing: -0.01em;">
                      ${w(qe(l))}
                    </h2>
                  </div>
                </div>

                <!-- Matches List Inside Card (Original Clean Layout Restored) -->
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  ${p.map((g,h)=>{let m=g.isLive,v=g.isPost,f=h===p.length-1,b=new Date(g.date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`
                      <div class="match-row-item" data-match-id="${g.id}" onclick="window.openSiftleMatchPage('${g.id}')" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; cursor: pointer; ${f?"":"border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 14px;"}">
                        
                        <!-- Left Side: Team Crests & Names + Scores -->
                        <div style="display: flex; flex-direction: column; gap: 10px; flex: 1; min-width: 0;">
                          
                          <!-- Home Team Row -->
                          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
                              <img src="${g.homeCrest}" alt="" style="width: 26px; height: 26px; object-fit: contain; flex-shrink: 0;" />
                              <span style="font-size: 0.95rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${w(g.homeTeam)}
                              </span>
                            </div>
                            <span style="font-size: 1.05rem; font-weight: 800; color: ${m?"#34d399":"#f8fafc"}; min-width: 20px; text-align: right;">
                              ${m||v?g.homeScore??0:""}
                            </span>
                          </div>

                          <!-- Away Team Row -->
                          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
                              <img src="${g.awayCrest}" alt="" style="width: 26px; height: 26px; object-fit: contain; flex-shrink: 0;" />
                              <span style="font-size: 0.95rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${w(g.awayTeam)}
                              </span>
                            </div>
                            <span style="font-size: 1.05rem; font-weight: 800; color: ${m?"#34d399":"#f8fafc"}; min-width: 20px; text-align: right;">
                              ${m||v?g.awayScore??0:""}
                            </span>
                          </div>

                        </div>

                        <!-- Vertical Divider Line -->
                        <div style="width: 1px; height: 42px; background: var(--subtle-bg); flex-shrink: 0;"></div>

                        <!-- Right Side: Status Badge / Match Time -->
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 75px; flex-shrink: 0; text-align: center;">
                          ${m?`
                            <span style="font-size: 0.75rem; font-weight: 800; color: #ef4444; background: rgba(239, 68, 68, 0.18); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.3);">
                              LIVE \u2022 ${w(g.statusDetail)}
                            </span>
                          `:v?`
                            <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">
                              Full-Time
                            </span>
                          `:`
                            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">
                              ${b}
                            </span>
                          `}
                        </div>

                      </div>
                    `}).join("")}
                </div>

              </div>
            `}).join("")}
        </div>
      `}

    </section>
  `},zr=()=>{try{let a=`siftle_positions_${t.walletAddress?t.walletAddress.toLowerCase():"guest"}`,r=localStorage.getItem(a);if(r){let o=JSON.parse(r);Object.assign(t.marketPositions,o)}}catch{}},N=()=>{if(zr(),!x||!A)return;he?.toggleAttribute("hidden",!0),ve?.toggleAttribute("hidden",!0),R?.toggleAttribute("hidden",!0),J?.classList.remove("active"),ne?.classList.remove("active"),le?.classList.add("active"),document.body.classList.remove("detail-mode"),A.hidden=!0,x.hidden=!1,x.classList.remove("matches-surface-active"),x.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&$e();let e=aa(),a=Pe().filter(m=>{let v=t.marketPositions[m.id];return e.has(m.id)||v&&(v.yesSharesUsdc+v.noSharesUsdc>0||(v.optionSharesUsdc||0)>0)}),r=a.filter(m=>(t.marketSnapshots[m.id]?.outcome??0)===0),o=a.filter(m=>(t.marketSnapshots[m.id]?.outcome??0)!==0),i=!!t.walletAddress,s=t.walletBalance||(t.walletAddress?localStorage.getItem(`siftle_optimistic_bal_${t.walletAddress.toLowerCase()}`):"0.00")||"0.00",n=parseFloat(String(s).replace(/,/g,""))||0,d=0,l=0;Object.values(t.marketPositions).forEach(m=>{d+=m.optionSharesUsdc||m.yesSharesUsdc||0,l+=m.projectedPayout||0});let p=(n+d).toFixed(2),u=t.profileUsername||(t.walletAddress?xe(t.walletAddress):"Guest Trader"),c=t.activePortfolioSubTab||"open_orders",g=t.pnlTimeframe||"all",h=Object.entries(t.marketPositions).filter(([m,v])=>(v.optionSharesUsdc||v.yesSharesUsdc||0)>0);x.innerHTML=`
    <section class="portfolio-surface" style="width: 100% !important; max-width: 100% !important; margin: 0 auto !important; padding: 12px 16px 120px 16px !important; box-sizing: border-box !important; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif !important; color: var(--ink) !important; overflow-x: hidden !important;">
      
      <!-- TOP PORTFOLIO BALANCE -->
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--muted);">Portfolio</span>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--muted); font-weight: 600;">
            <span>${w(u)}</span>
            ${i?`
              <button type="button" class="copy-address-btn" data-address="${t.walletAddress}" title="Copy Wallet Address" style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; border-radius: 8px; padding: 3px 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; transition: all 0.2s ease;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Address
              </button>
              <button type="button" id="disconnectWalletBtn" title="Disconnect Wallet" style="background: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; border-radius: 8px; padding: 3px 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; transition: all 0.2s ease;">
                Disconnect
              </button>
              <button type="button" id="editUsernameBtn" title="Edit Username" style="background: transparent; border: none; color: var(--muted); cursor: pointer; padding: 2px; display: inline-flex; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
              </button>
            `:""}
          </div>
        </div>

        <div style="font-size: 2.2rem; font-weight: 900; color: var(--ink); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 4px;">
          $${p}
        </div>
        <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; margin-bottom: 16px;">
          +$0.00 (0.0%) 24h
        </div>

        <!-- 3-COLUMN STATS ROW (NO POINTS) -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; padding: 8px 0; width: 100%; box-sizing: border-box;">
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Positions</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">$${d.toFixed(2)}</div>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Cash</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">$${n.toFixed(2)}</div>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Open Picks</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #38bdf8;">${r.length}</div>
          </div>
        </div>

        <!-- SPECIAL FAUCET BANNER -->
        <a href="https://faucet.circle.com/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #2563eb; color: #ffffff; padding: 11px; border-radius: 12px; font-size: 0.85rem; font-weight: 800; text-decoration: none; margin-bottom: 20px; box-sizing: border-box; width: 100%;">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Get Arc Testnet USDC (Circle Faucet \u2197)
        </a>
      </div>

      <!-- PnL CHART CARD -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 16px; margin-bottom: 20px; position: relative; overflow: hidden; box-shadow: var(--card-shadow); box-sizing: border-box; width: 100%;">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">PnL</div>
            <div style="font-size: 1.4rem; font-weight: 900; color: var(--ink); margin-top: 1px;">$0.0</div>
            <div style="font-size: 0.72rem; font-weight: 600; color: var(--muted);">All Time</div>
          </div>

          <!-- Timeframe Pills -->
          <div style="display: flex; gap: 2px; background: var(--subtle-bg); padding: 2px; border-radius: 8px; border: 1px solid var(--border);">
            ${["1D","1W","1M","1Y","All"].map(m=>`
              <button type="button" class="pnl-tf-btn" data-tf="${m.toLowerCase()}" style="background: ${g===m.toLowerCase()?"rgba(255,255,255,0.12)":"transparent"}; color: ${g===m.toLowerCase()?"#38bdf8":"var(--muted)"}; border: none; padding: 3px 6px; border-radius: 5px; font-size: 0.7rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease;">
                ${m}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- SVG WAVE GRAPHIC -->
        <div style="width: 100%; height: 95px; position: relative; margin-top: 6px;">
          <svg viewBox="0 0 500 120" preserveAspectRatio="none" style="width: 100%; height: 100%; display: block; overflow: visible;">
            <defs>
              <linearGradient id="pnlGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <path d="M0,85 C120,80 200,95 320,60 C400,35 460,45 500,40 L500,120 L0,120 Z" fill="url(#pnlGrad)"/>
            <path d="M0,85 C120,80 200,95 320,60 C400,35 460,45 500,40" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <div style="position: absolute; right: 10px; bottom: 8px; font-size: 0.8rem; font-weight: 900; letter-spacing: 0.1em; color: rgba(255,255,255,0.08); text-transform: uppercase; pointer-events: none;">
            SIFTLE
          </div>
        </div>

      </div>

      <!-- HORIZONTALLY SCROLLABLE TAB BAR (OPEN ORDERS, CLOSED ORDERS, TRADE HISTORY, WINS & LOSSES) -->
      <div style="display: flex; gap: 8px; overflow-x: auto; overflow-y: hidden; white-space: nowrap; padding-bottom: 12px; margin-bottom: 16px; scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; width: 100%; box-sizing: border-box;">
        ${[{id:"open_orders",label:"Open Orders"},{id:"closed_orders",label:"Closed Orders"},{id:"trade_history",label:"Trade history"},{id:"wins_losses",label:"Wins and losses"}].map(m=>`
          <button type="button" class="portfolio-subtab-btn" data-subtab="${m.id}" style="flex-shrink: 0; background: ${c===m.id?"rgba(255, 255, 255, 0.12)":"rgba(255, 255, 255, 0.03)"}; color: ${c===m.id?"#ffffff":"var(--muted)"}; border: 1.5px solid ${c===m.id?"rgba(255, 255, 255, 0.22)":"var(--border)"}; padding: 9px 16px; border-radius: 12px; font-size: 0.88rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease;">
            ${m.label}
          </button>
        `).join("")}
      </div>

      <!-- TAB CONTENT AREA -->
      <div id="portfolioTabContent">
        ${c==="open_orders"?`
          ${r.length?`
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${r.map(Et).join("")}
            </div>
          `:`
            <div style="text-align: center; padding: 40px 16px; background: var(--paper); border: 1px solid var(--border); border-radius: 18px; box-sizing: border-box;">
              <p style="margin: 0 0 6px 0; font-size: 1rem; font-weight: 800; color: var(--ink);">No open orders yet.</p>
              <p style="margin: 0 0 18px 0; font-size: 0.82rem; color: var(--muted); font-weight: 600;">Start trading to view your active predictions.</p>
              <button type="button" id="startTradingBtn" style="background: rgba(255, 255, 255, 0.1); color: var(--ink); border: 1px solid var(--border); padding: 10px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 800; cursor: pointer;">
                Start trading
              </button>
            </div>
          `}
        `:c==="closed_orders"?`
          ${o.length?`
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${o.map(Et).join("")}
            </div>
          `:`
            <div style="text-align: center; padding: 40px 16px; background: var(--paper); border: 1px solid var(--border); border-radius: 18px; box-sizing: border-box;">
              <p style="margin: 0 0 6px 0; font-size: 1rem; font-weight: 800; color: var(--ink);">No closed orders yet.</p>
              <p style="margin: 0; font-size: 0.82rem; color: var(--muted); font-weight: 600;">Settled and finalized matches will appear here.</p>
            </div>
          `}
        `:c==="trade_history"?`
          <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 16px; box-sizing: border-box;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-size: 0.92rem; font-weight: 800; color: var(--ink);">On-Chain Trade History</span>
              <a href="https://testnet.arcscan.app/address/${t.walletAddress||"0x8478b85e539fa3Ae8C53C360109BD82aE26Caa3E"}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; font-weight: 700; color: #38bdf8; text-decoration: underline;">ArcScan \u2197</a>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${h.length?h.map(([m,v])=>{let f=v.optionLabel||(v.optionId==="home"?"Home":v.optionId==="away"?"Away":"Draw"),b=v.optionSharesUsdc||v.yesSharesUsdc||1;return`
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--subtle-bg); border-radius: 12px;">
                    <div>
                      <div style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${w(f)}</div>
                      <div style="font-size: 0.75rem; color: var(--muted);">Arc Testnet Contract</div>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 0.9rem; font-weight: 800; color: #38bdf8;">$${b.toFixed(2)} USDC</div>
                      <div style="font-size: 0.72rem; color: #34d399; font-weight: 700;">Confirmed On-Chain</div>
                    </div>
                  </div>
                `}).join(""):`
                <div style="text-align: center; padding: 20px; color: var(--muted); font-size: 0.85rem;">No trades placed yet.</div>
              `}
            </div>
          </div>
        `:`
          <!-- WINS AND LOSSES -->
          <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 16px; box-sizing: border-box;">
            <div style="font-size: 0.92rem; font-weight: 800; color: var(--ink); margin-bottom: 12px;">Wins and Losses Performance</div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; text-align: center;">
              <div style="background: var(--subtle-bg); padding: 12px 6px; border-radius: 12px;">
                <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600;">Win Rate</div>
                <div style="font-size: 1.1rem; font-weight: 900; color: ${(()=>{let m=0,v=0;return o.forEach(f=>{let b=t.marketPositions[f.id];b&&f.isResolved&&(f.resolvedOptionId&&b.optionId===f.resolvedOptionId?m++:v++)}),m+v>0?"#34d399":"var(--muted)"})()};">${(()=>{let m=0,v=0;return o.forEach(f=>{let b=t.marketPositions[f.id];b&&f.isResolved&&(f.resolvedOptionId&&b.optionId===f.resolvedOptionId?m++:v++)}),m+v>0?(m/(m+v)*100).toFixed(0)+"%":"--"})()}</div>
              </div>
              <div style="background: var(--subtle-bg); padding: 12px 6px; border-radius: 12px;">
                <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600;">Total Wins</div>
                <div style="font-size: 1.1rem; font-weight: 900; color: var(--ink);">${(()=>{let m=0;return o.forEach(v=>{let f=t.marketPositions[v.id];f&&v.isResolved&&v.resolvedOptionId&&f.optionId===v.resolvedOptionId&&m++}),m})()}</div>
              </div>
              <div style="background: var(--subtle-bg); padding: 12px 6px; border-radius: 12px;">
                <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600;">Losses</div>
                <div style="font-size: 1.1rem; font-weight: 900; color: var(--muted);">${(()=>{let m=0;return o.forEach(v=>{let f=t.marketPositions[v.id];f&&v.isResolved&&(!v.resolvedOptionId||f.optionId!==v.resolvedOptionId)&&m++}),m})()}</div>
              </div>
            </div>

            <div style="padding: 12px; background: var(--subtle-bg); border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Projected Total Returns</span>
              <span style="font-size: 1rem; font-weight: 900; color: #34d399;">+$${l>0?l.toFixed(2):(d*2.22).toFixed(2)} USDC</span>
            </div>
          </div>
        `}
      </div>

    </section>
  `,x.querySelectorAll(".portfolio-subtab-btn").forEach(m=>{m.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation();let f=m.getAttribute("data-subtab");f&&(t.activePortfolioSubTab=f,N())})}),x.querySelectorAll(".pnl-tf-btn").forEach(m=>{m.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation();let f=m.getAttribute("data-tf");f&&(t.pnlTimeframe=f,N())})}),x.querySelector("#startTradingBtn")?.addEventListener("click",()=>{J?.click()}),x.querySelector("#disconnectWalletBtn")?.addEventListener("click",()=>{pt(),k("Wallet disconnected"),N()}),x.querySelector("#editUsernameBtn")?.addEventListener("click",()=>{let m=prompt("Enter new display name:",t.profileUsername||"");m&&m.trim()&&(t.profileUsername=m.trim(),localStorage.setItem("siftle_username",m.trim()),N(),k("Username updated!"))})},y=()=>{if(x&&t.activeSurface!=="matches"&&x.classList.remove("matches-surface-active"),_t.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){se();return}if(t.activeSurface==="matches"){Me();return}if(t.activeSurface==="portfolio"){N();return}if(t.activeSurface==="leaderboard"){Er();return}da(),Gt(),fe(),Ar(),F&&(F.value=t.activeArchiveDate??"")};at.textContent=Ft();R?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");if(!r)return;let o=r.dataset.category;t.activeCategory=o,G=!1,K=null,window.history.pushState({},"","#feed"),V(),y(),o==="Personalized"&&!ua()&&He(),Ee(),X(t.activeCategory)});var G=!1,Ut="overall",K=null,_e=!1,Ue=()=>{try{let e=localStorage.getItem("siftle_followed_entities");if(e)return JSON.parse(e)}catch{}return{clubs:[],managers:[],players:[]}},ua=()=>{let e=Ue();return(e.clubs?.length||0)+(e.managers?.length||0)+(e.players?.length||0)>0},Or=e=>{localStorage.setItem("siftle_followed_entities",JSON.stringify(e))},Dr=e=>{if(!e)return"";let a=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o=nt(a).split(`
`),i="",s="",n=!1,d=!1;for(let l=0;l<o.length;l++){let p=o[l].trim();if(!p)continue;if(/what matters/i.test(p)||p.includes("\u{1F3AF}")){n&&(s+="</ul></div>",n=!1);let g=p.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`
        <div class="briefing-highlight-box what-matters">
          <h4>${w(g||"What Matters Most")}</h4>
          <p>
      `,d=!0;continue}if(/watch next/i.test(p)||p.includes("\u23F1\uFE0F")){d&&(s+="</p></div>",d=!1);let g=p.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`
        <div class="briefing-highlight-box watch-next">
          <h4>${w(g||"Key Things to Watch")}</h4>
          <ul>
      `,n=!0;continue}if(p.startsWith("## ")||p.startsWith("# "))continue;if(n){let g=p.replace(/^[-*]\s*/,"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");g&&(s+=`<li>${g}</li>`);continue}if(d){let g=p.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");s+=`${g} `;continue}let u=p.match(/^(?:###\s*)?(\d+)\.\s*(.*)$/);if(u){let g=u[1],h=u[2].replace(/\*\*/g,"").trim(),m="",v="",f=l+1;for(;f<o.length&&!o[f].trim().match(/^(?:###\s*)?(?:\d+\.|WHAT MATTERS|WATCH NEXT|🎯|⏱️)/i);){let S=o[f].trim();S.startsWith("*[")&&S.endsWith("]*")?v=S.slice(2,-2):S.startsWith("*")&&S.endsWith("*")?v=S.slice(1,-1):S.length>0&&!S.startsWith("###")&&(m+=(m?" ":"")+S),f++}l=f-1;let b="",L=m.replace(/\.\.\.$/,"").trim();L=L.replace(/[,;:\s]+(?:but|and|or|the|a|an|with|in|on|of|to|for|as|is|was|are|were|after|while|that|which|who)$/i,"").trim(),L&&!L.endsWith("...")&&L.length>=35&&L.split(" ").length>=7?b=L:b=h,b=b.replace(/^(?:deal done|here we go|official,?\s*exclusive\s*story\s*confirmed|breaking news|breaking|official|exclusive|update)\s*[:\.\-]?\s*/gi,"").replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi,"").replace(/@[a-zA-Z0-9_]+/g,"").replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g,"").replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g,"").replace(/\s+/g," ").trim(),b=b.replace(/[,;:\-\s]+$/,""),b.length>0&&(b=b.charAt(0).toUpperCase()+b.slice(1)),b.endsWith(".")||(b+=".");let $=v.replace(/·\s*(confirmed|in progress|major|reported).*/i,"").trim();i+=`
        <div class="briefing-event-item-card">
          <div class="briefing-event-item-header">
            <span class="briefing-event-num-pill">${g}</span>
            <div class="briefing-event-item-content">
              <p class="briefing-event-item-single-text">${w(b)}</p>
              <div class="briefing-event-item-meta">
                ${$?`<span class="briefing-source-tag">${w($)}</span>`:""}
              </div>
            </div>
          </div>
        </div>
      `;continue}if(p.startsWith("### ")&&!p.match(/###\s*\d+\./)){let g=p.replace(/^###\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`<h4 style="margin: 12px 0 6px 0; font-family: Outfit, sans-serif; font-size: 1rem; color: inherit;">${w(g)}</h4>`;continue}let c=p.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");s+=`<p style="margin: 0 0 10px 0; font-size: 0.88rem; color: inherit; line-height: 1.5;">${c}</p>`}return d&&(s+="</p></div>"),n&&(s+="</ul></div>"),i+s},He=()=>{document.querySelectorAll(".personalization-modal-overlay").forEach(o=>o.remove());let e=Ue(),a=document.createElement("div");a.className="personalization-modal-overlay",a.innerHTML=`
    <div class="custom-topics-modal">
      <button class="modal-close-icon-btn" id="prefCloseBtn" type="button" aria-label="Close">&times;</button>
      <div style="margin-bottom: 6px;">
        <h3 style="font-family: Outfit, sans-serif; font-weight: 700; margin: 0; font-size: 1.22rem;">Personalize Your Football Feed</h3>
      </div>
      <p style="margin: 0 0 16px 0; font-size: 0.82rem; color: #69728a; line-height: 1.4;">Type the clubs, managers, and players you follow (comma separated). Siftle will tailor your feed and catch-up briefings to these topics.</p>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Clubs</label>
        <input type="text" class="topic-text-field" id="clubInput" placeholder="e.g. Chelsea, Real Madrid, Arsenal" value="${w(e.clubs.join(", "))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Managers</label>
        <input type="text" class="topic-text-field" id="managerInput" placeholder="e.g. Enzo Maresca, Mikel Arteta, Pep Guardiola" value="${w(e.managers.join(", "))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Players</label>
        <input type="text" class="topic-text-field" id="playerInput" placeholder="e.g. Cole Palmer, Bukayo Saka, Kylian Mbappe" value="${w(e.players.join(", "))}" />
      </div>

      <div class="custom-modal-btn-row">
        <button id="prefSaveBtn" class="modal-save-btn" type="button">Save Topics</button>
        <button id="prefClearBtn" class="modal-clear-btn" type="button">Clear All</button>
      </div>
    </div>
  `,document.body.appendChild(a);let r=()=>a.remove();a.querySelector("#prefCloseBtn")?.addEventListener("click",r),a.addEventListener("click",o=>{o.target===a&&r()}),a.querySelector("#prefClearBtn")?.addEventListener("click",()=>{a.querySelector("#clubInput").value="",a.querySelector("#managerInput").value="",a.querySelector("#playerInput").value=""}),a.querySelector("#prefSaveBtn")?.addEventListener("click",()=>{let o=a.querySelector("#clubInput")?.value||"",i=a.querySelector("#managerInput")?.value||"",s=a.querySelector("#playerInput")?.value||"",n=l=>l.split(",").map(p=>p.trim()).filter(Boolean),d={clubs:n(o),managers:n(i),players:n(s)};Or(d),k("Topics saved"),r(),t.activeCategory="Personalized",y()})},Nr=()=>{if(_e)return`
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
    `;if(!K)return ct(!1),`
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
    `;let e=K,a=new Date(e.periodStart).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return`
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
        ${Dr(e.markdown||"")}

        <div class="briefing-sources-bar" style="display:flex; flex-direction:column; gap:4px; margin-top:14px; padding-top:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
            <span>Compiled from ${e.sourcesCount||0} verified reports across ${e.eventCount||0} canonical events</span>
            <span style="font-weight:700; color:#3157ff;">
              Powered by 0G
            </span>
          </div>
          <div style="font-size:0.72rem; color:#69728a; margin-top:4px; text-align:left; width:100%;">
            AI Status: <strong>${w(e.provider||"System")}</strong> 
            ${e.successRate!==null&&e.successRate!==void 0?`(Success Rate: <strong>${e.successRate}%</strong>)`:""}
          </div>
        </div>
      </div>
    </div>
  `},te=()=>{document.querySelector("#backToFeedBtn")?.addEventListener("click",()=>{G=!1,y()}),document.querySelector("#openBriefingBtn")?.addEventListener("click",()=>{G=!0;let e=t.activeCategory==="Personalized"?"personalized":"overall";Ut!==e&&(K=null),Ut=e,y(),K||ct(!1)}),document.querySelector("#catchUpAgainBtn")?.addEventListener("click",()=>{ct(!1)})},ct=async(e=!1)=>{_e=!0,G&&y();let a=e?null:localStorage.getItem("siftle_last_briefing_at"),r=Ue();try{let o=await fetch(z("/api/briefing/delta"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lastBriefingAt:a,context:t.activeCategory==="Personalized"?"personalized":"overall",entities:r})}),i=await o.json();_e=!1,o.ok&&i.success?(K=i,localStorage.setItem("siftle_last_briefing_at",i.periodEnd||new Date().toISOString()),G&&y()):(K={periodStart:new Date().toISOString(),markdown:`### Failed to generate briefing

${i.error||"Please try again in a moment."}`},G&&y())}catch(o){_e=!1,K={periodStart:new Date().toISOString(),markdown:`### Failed to connect to briefing service

${o.message}`},G&&y()}};x?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,o=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,fe();let i=x?.querySelector("#newsSearchInput");i&&(i.focus(),i.setSelectionRange(r,o))});J?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),V(),y()});ne?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),V(),y(),Ee(),X(t.activeCategory)});le?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),V(),y()});ae?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Ce()):Ae()});document.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-match-id]");if(r){let l=r.getAttribute("data-match-id");l&&window.openSiftleMatchPage(l);return}let o=a.closest("[data-match-date]");if(o){let l=o.getAttribute("data-match-date");l&&l!==t.activeMatchDate&&(t.activeMatchDate=l,t.liveMatches=[],t.loadingLiveMatches=!0,Me(),ia(l).then(()=>{t.activeSurface==="matches"&&Me()}));return}let i=a.closest(".copy-address-btn");if(i){let l=i.getAttribute("data-address");l&&navigator.clipboard.writeText(l).then(()=>{k("Wallet address copied!")})}let s=a.closest("[data-claim-market]");if(s){let l=s.getAttribute("data-claim-market");l&&Ur(l);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&$e(),N();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,N();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,$e(),N();return}let n=a.closest("[data-copy-referral-code]");if(n){let l=n.getAttribute("data-copy-referral-code")||"";l&&navigator.clipboard.writeText(l).then(()=>k("Invite code copied"));return}let d=a.closest("[data-copy-referral-link]");if(d){let l=d.getAttribute("data-copy-referral-link")||"";l&&navigator.clipboard.writeText(l).then(()=>k("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?pt():Ae())});_t.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="matches"?(t.activeSurface="matches",window.history.pushState({},"","#matches")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),Ee(),X(t.activeCategory),a==="saved"&&(nr(),ut(),Se())),V(),y()})});F?.addEventListener("change",()=>{t.activeArchiveDate=F.value||null,window.history.pushState({},"","#feed"),V(),y(),X(t.activeCategory)});Ba?.addEventListener("click",()=>{t.activeArchiveDate=null,F&&(F.value=""),window.history.pushState({},"","#feed"),V(),y(),X(t.activeCategory)});x?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let f=x?.querySelector(".username-display-row"),b=x?.querySelector("#usernameEditForm");if(f&&b){f.style.display="none",b.style.display="flex";let L=b.querySelector("#usernameInput");L&&L.focus()}return}if(a.closest("#cancelUsernameBtn")){let f=x?.querySelector(".username-display-row"),b=x?.querySelector("#usernameEditForm");f&&b&&(f.style.display="flex",b.style.display="none");return}let i=a.closest("#saveUsernameBtn");if(i){let b=x?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(b){let L=b.value.trim().slice(0,15),$=i,S=$.textContent||"Save";$.disabled=!0,$.textContent="Saving...",sr(L),t.profileNotice=null;try{t.walletAddress&&await de(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},k("Username updated"),N()}catch(M){let I=M instanceof Error?M.message:"Username save failed";t.profileNotice={type:"error",message:I},k(I),$.disabled=!1,$.textContent=S,N()}}return}let s=a.closest("[data-portfolio-filter]");if(s){let f=s.getAttribute("data-portfolio-filter");t.portfolioFilter=f,N();return}let n=a.closest("[data-timeframe]");if(n){let f=n.dataset.timeframe;t.activeMarketTimeframe=f,se();return}let d=a.closest("[data-market-id]");if(d){t.selectedMarketId=d.dataset.marketId??null,U("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),y(),window.scrollTo({top:0,behavior:"smooth"});return}if(a.closest(".read-tweet-btn")){e.stopPropagation();let f=a.closest("[data-story-id]");f&&ot(Number(f.dataset.storyId),!0);return}let p=a.closest("[data-thread-story-id]"),u=a.closest("[data-export-id]"),c=a.closest("[data-export-action]"),g=a.closest("[data-story-id]");if(p){e.stopPropagation();let f=t.stories.find(b=>b.id===Number(p.dataset.threadStoryId));f&&Xa(f);return}let h=a.closest(".mobile-bookmark-btn, .bookmark-button");if(h){e.stopPropagation();let f=h.dataset.bookmarkUrl||"",b=t.stories.find(L=>L.sourceUrl===f);if(!b)return;b.saved=!b.saved,b.saved?oe.add(f):oe.delete(f),Ua(),k(b.saved?"Saved to your list":"Removed from saved"),fe();return}if(c){e.stopPropagation(),Lr(Number(c.dataset.exportStoryId),c.dataset.exportAction);return}if(u){e.stopPropagation();let f=Number(u.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===f?null:f,fe();return}if(!g||a.closest("a"))return;let m=Number(g.dataset.storyId),v=t.stories.find(f=>f.id===m);v&&U("feed_story_click",v.sourceUrl,v.headline),ot(m,!0)});x?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");if(!r||e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();let o=Number(r.dataset.storyId),i=t.stories.find(s=>s.id===o);i&&U("feed_story_click",i.sourceUrl,i.headline),ot(o)});A?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let u=t.stories.find(c=>c.id===Number(r.dataset.unlockBriefing));u&&rt(u);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let u=decodeURIComponent(o.dataset.unlockBriefingUrl||""),c=Va(u);c&&(ge(c)?Le(c):rt(c));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),y();return}if(a.closest("#openTradeDrawerBtn")){let u=E.find(h=>h.id===t.selectedMarketId);if(u){if(ft(u,t.marketSnapshots[u.id])){k("This market is resolved and can no longer be traded.");return}if(Ka(u,t.marketSnapshots[u.id])){k("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,U("trade_drawer_open");let c=A.querySelector("#tradeDrawer"),g=A.querySelector("#tradeDrawerBackdrop");c?.classList.add("open"),g?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let u=A.querySelector("#tradeDrawer"),c=A.querySelector("#tradeDrawerBackdrop");u?.classList.remove("open"),c?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let u=E.find(c=>c.id===t.selectedMarketId);if(u){let c=Cr(u),g=`https://api.whatsapp.com/send?text=${encodeURIComponent(c)}`;window.open(g,"_blank")}return}let i=a.closest("[data-market-trade]");if(i&&t.selectedMarketId){let u=i.dataset.marketTrade;fr(t.selectedMarketId,u);return}let s=a.closest("[data-market-option-trade]");if(s&&t.selectedMarketId){let u=s.dataset.marketOptionTrade||t.marketTradeOptionId||"";Mr(t.selectedMarketId,u);return}let n=a.closest("[data-market-option-id]");if(n){if(n.disabled||n.classList.contains("disabled"))return;t.marketTradeOptionId=n.dataset.marketOptionId||null,y();return}let d=a.closest("[data-market-trade-side]");if(d){if(d.disabled||d.classList.contains("disabled"))return;let u=E.find(h=>h.id===t.selectedMarketId),c=u?t.marketPositions[u.id]:void 0,g=d.dataset.marketTradeSide;if(!Re(t.marketOrderMode,g,c))return;t.marketTradeSide=g,y();return}let l=a.closest("[data-market-order-mode]");if(l){t.marketOrderMode=l.dataset.marketOrderMode;let u=E.find(g=>g.id===t.selectedMarketId),c=u?t.marketPositions[u.id]:void 0;t.marketTradeSide=ra(t.marketOrderMode,t.marketTradeSide,c),t.marketTradeAmount=Ge(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,c),y();return}let p=a.closest("[data-back-to-feed]");if(p){if(p.classList.contains("read-more-news-btn")){let c=new URLSearchParams(window.location.search).get("url"),g=document.querySelector(".detail-card h2")?.textContent||void 0;U("shared_read_more_click",c||void 0,g)}Za()}});A?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=E.find(l=>l.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,i=r?t.marketPositions[r.id]:void 0,s=Number(a.value);t.marketTradeAmount=Number.isFinite(s)?s:0;let n=r&&Zt(r)?t.marketTradeAmount:dr(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,i),d=A.querySelector(".market-inline-payout strong");d&&(d.textContent=`$${Qt(n)}`)});A?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});A?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=E.find(i=>i.id===t.selectedMarketId),o=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=Ge(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,o),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Ce);window.addEventListener("hashchange",Ce);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await re(t.walletAddress);t.walletBalance=a,O(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),$a())}});Je?.addEventListener("click",()=>{if(!Xe||!Je)return;let e=!Xe.hidden;Xe.hidden=e,Je.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,fe());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(i=>i.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};B&&(B.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,F&&(F.value=""),V(),Ee(),X(t.activeCategory)),r.dataset.menuAction==="saved"&&(da(),ut(),Se(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),V(),y())});var _r=async()=>{try{let e=await fetch(z("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),y())}catch(e){console.error("Failed to prefetch unlock config:",e)}},Hr=()=>{window.setInterval(async()=>{try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(z("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(E=o,t.activeSurface==="markets"&&y())}}catch(e){console.warn("Background market poll failed:",e)}},3e4)};y();O();_r();X(t.activeCategory);Hr();Ca().then(()=>{mr(),y(),O(),window.setTimeout(Rr,1200),tr()});var Fr=document.querySelector("#mobileArchiveCard"),ue=document.querySelector("#archiveControls");Fr?.addEventListener("click",()=>{if(!ue)return;ue.classList.toggle("mobile-open")&&setTimeout(()=>ue.scrollIntoView({behavior:"smooth",block:"center"}),50)});var jr=document.querySelector("#archivePill");jr?.addEventListener("click",e=>{if(e.stopPropagation(),!ue)return;ue.classList.toggle("mobile-open")&&setTimeout(()=>ue.scrollIntoView({behavior:"smooth",block:"center"}),50)});var De=!1,Bt=!1,Rr=()=>{Bt||(Bt=!0,(async()=>{let e=await Fe();if(De=!!e,e){t.walletConnecting=!0,O();try{let a=await ka();De=!1,t.walletConnecting=!1,a?(t.walletAddress=await Fe(),t.walletAddress&&(pe(),t.walletBalance=await re(t.walletAddress),await W()),O(),t.activeSurface==="portfolio"&&y()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,pe(),k("Session expired. Please sign in again."),O(),y())}catch(a){console.warn(a),De=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,pe(),k("Session expired. Please sign in again."),O(),y()}}await Sa(a=>{De||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,pe(),a&&de(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,O(),a?($e(),re(a).then(r=>{t.walletBalance=r,O(),t.activeSurface==="portfolio"&&y()}),W()):t.activeSurface==="portfolio"&&y())})})())};U("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",i=typeof o=="string"?o:r.getAttribute("class")||"",s=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(i.includes("source-button")||i.includes("source-btn")||i.includes("source-link")||r.textContent?.trim()==="Open source")&&!i.includes("disabled")&&s!=="#"&&U("open_source")}},!0);export{Kr as globalOddsStore,Gr as isMarketLocked};
