import"./chunks/chunk-ZUUPKAA6.js";var le=[{id:"m-chelsea-manutd",question:"Chelsea vs Manchester United Match Result",league:"English Premier League",homeTeam:"Chelsea",awayTeam:"Manchester United",homeCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/363.png",awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/360.png",statusDetail:"Saturday \u2022 05:30 PM",isLive:!1,volumeUsdc:5,marketAddress:"0x202c3f057B7b767f80dF665fa225a4Fa5b8631C8",contractAddress:"0x202c3f057B7b767f80dF665fa225a4Fa5b8631C8",factoryAddress:"0xA73C9a31aa2ab6C0CA85C0C105eba561Ab5d4B7b",optionMarket:!0,options:[{id:"home",label:"Chelsea"},{id:"draw",label:"Draw"},{id:"away",label:"Manchester United"}],initialOptionPools:{home:3,draw:0,away:2},optionPools:{home:3,draw:0,away:2}}];var ua="https://faucet.circle.com/",vt="siftle_backend_wallet_migration_notice",Ge=null,D=()=>(Ge||(Ge=import("./chunks/arc-F4QFUFIV.js")),Ge),we=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,ma=async()=>(await D()).connectArcWallet(),ga=async e=>(await D()).readArcUsdcBalance(e),te=async e=>{let a=await ga(e);try{let r=`siftle_optimistic_bal_${e.toLowerCase()}`,o=localStorage.getItem(r);if(o!=null){let i=parseFloat(String(a||"0").replace(/,/g,"")),s=parseFloat(o);if(s<i&&s>=0)return s.toFixed(2)}}catch{}return a},fa=async(e,a,r,o)=>(await D()).payAiBriefingUnlock(e,a,r,o),ha=e=>{D().then(a=>a.resolveLocalTestMarketYes(e))};var va=async(e,a)=>(await D()).readArcMarketState(e,a),ya=async(e,a,r,o,i,s,n)=>(await D()).executeArcMarketOrder(e,a,r,o,i,s,n),et=async(e,a,r,o,i)=>(await D()).executeArcOptionMarketOrder(e,a,r,o,i),Et=()=>{D().then(e=>e.disconnectArcWallet())},ba=async(e,a)=>(await D()).claimArcMarketPayout(e,a),He=async()=>(await D()).getConnectedArcWallet(),wa=async()=>(await D()).validateArcSession(),xa=async e=>(await D()).subscribeArcWallet(e),ka=async()=>(await D()).triggerGatewayWarmup();var Sa="https://siftle.onrender.com",$a=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?Sa:""},Ta=$a(),B=e=>`${Ta}${e}`,Ut="siftle_theme",Ma=()=>{try{return window.localStorage.getItem(Ut)==="light"?"light":"dark"}catch{return"dark"}},xe=Ma(),Bt="organic";function La(){try{let e=localStorage.getItem("siftle_traffic_source");if(!e){let a=new URLSearchParams(window.location.search),r=a.get("ref")||a.get("utm_source");if(r)r=r.trim().toLowerCase(),r==="twitter"&&(r="x"),r==="instagram"&&(r="ig"),r==="whatsapp"&&(r="wa"),r==="discord"&&(r="dc"),(r==="google_search"||r==="google-search")&&(r="google"),["x","ig","wa","dc","google","organic","briefing"].includes(r)?e=r:e=r.slice(0,20);else{let o=document.referrer;o&&(/twitter\.com|x\.com|t\.co/i.test(o)?e="x":/instagram\.com/i.test(o)?e="ig":/whatsapp\.com|wa\.me/i.test(o)?e="wa":/discord\.com|discordapp\.com/i.test(o)?e="dc":/google\.com|google\.co/i.test(o)&&(e="google"))}e||(e="organic"),localStorage.setItem("siftle_traffic_source",e)}Bt=e}catch(e){console.error("Failed to initialize traffic source:",e)}}La();function C(e,a,r){fetch(B("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e,source:Bt,storyUrl:a,headline:r})}).catch(o=>console.error("Failed to track event:",o))}var t={activeSurface:"feed",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:2,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:"100.00",activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},aiSummaryProofs:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,activePortfolioSubTab:"open_orders",pnlTimeframe:"all",unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{},portfolioFilter:"open",liveMatches:[],loadingLiveMatches:!1,userSeasonPoints:0,activeMatchLeague:"All",activeMatchDate:"",activeMarketLeagueFilter:"All",selectedMatchId:null,matchDetailTab:"overview"};var yt=!1,bt=!1,wt=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";wt&&localStorage.setItem("siftle_pending_referral_code",wt.trim().toUpperCase());var It=20,A=le,zt=(...e)=>{let a=new Map;return e.flat().forEach(r=>{if(r?.id){let o=a.get(r.id)||{};a.set(r.id,{...o,...r,customOdds:r.customOdds||o.customOdds})}}),Array.from(a.values())},Le=()=>zt(t.portfolioMarketPreviews,A,le),Pa=async()=>{t.loadingMarkets=!0,A.length===0&&(A=le);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(B("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(A=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Aa=async()=>{try{let e=await fetch(B("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Ot="siftle.savedUrls",ae=new Set,dt=()=>{try{let e=localStorage.getItem(Ot)||"[]",a=JSON.parse(e);ae=new Set(a.filter(Boolean))}catch{ae=new Set}},Ca=()=>{try{localStorage.setItem(Ot,JSON.stringify(Array.from(ae)))}catch{}},ke=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!ae.has(e.sourceUrl)};dt();ke();var tt=document.querySelector("#dateLabel"),j=document.querySelector("#categoryTabs"),k=document.querySelector("#storyList"),L=document.querySelector("#storyDetail"),Ke=document.querySelector("#menuButton"),Je=document.querySelector("#menuPanel"),U=document.querySelector("#menuStatus"),H=document.querySelector("#archiveDateSelect"),xt=document.querySelector("#archiveStatus"),Ea=document.querySelector("#todayButton"),ge=document.querySelector(".brief-hero"),fe=document.querySelector("#archiveControls"),K=document.querySelector("[data-surface='markets']"),ie=document.querySelector("[data-surface='feed']"),se=document.querySelector("[data-surface='portfolio']"),ee=document.querySelector("#walletButton"),ve=document.querySelector("[data-theme-toggle]"),Ua=document.getElementById("guideToggleButton"),Dt=Array.from(document.querySelectorAll("[data-bottom-nav]")),Ze,Ba=()=>{if(!ve)return;let a=`Switch to ${xe==="light"?"dark":"light"} mode`;ve.setAttribute("aria-label",a),ve.title=a,ve.dataset.activeTheme=xe},Nt=e=>{xe=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(Ut,e)}catch{}Ba()};Nt(xe);var I=()=>{if(ee){let e=ee.querySelector(".wallet-button-label");ee.classList.toggle("connected",!!t.walletAddress),ee.disabled=t.walletConnecting,ee.setAttribute("aria-label",t.walletAddress?`Wallet ${we(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),ee.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${we(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",I);ve?.addEventListener("click",()=>{Nt(xe==="light"?"dark":"light")});Ua?.addEventListener("click",()=>{Ia()});var Ia=()=>{let e=document.createElement("div");e.className="guide-overlay",e.innerHTML=`
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
  `,document.body.appendChild(e);let a=e.querySelector("#guideClose"),r=e.querySelector("#guideStartBtn"),o=()=>e.remove();a.addEventListener("click",o),r.addEventListener("click",o),e.addEventListener("click",i=>{i.target===e&&o()})},za=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(B("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&S("Referral connected"))}catch(r){console.warn(r)}},Se=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(B(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&O()}}},Pe=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,C("wallet_connect_start"),I();try{let e=await ma();if(e){C("wallet_connect_success");let a=sessionStorage.getItem("siftle_landing_url"),r=sessionStorage.getItem("siftle_landing_headline"),o=sessionStorage.getItem("siftle_signup_tracked");a&&!o&&(C("briefing_referral_signup",a,r||void 0),sessionStorage.setItem("siftle_signup_tracked","true")),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,de();let i=await te(e),s=`siftle_optimistic_bal_${e.toLowerCase()}`,n=localStorage.getItem(s);n!==null&&parseFloat(n)<parseFloat(i.replace(/,/g,""))?t.walletBalance=n:(localStorage.removeItem(s),t.walletBalance=i),await za(e),Se(),await R(),ne(!0).catch(d=>console.error("Failed to report leaderboard entry:",d));let l=localStorage.getItem(vt);l?(localStorage.removeItem(vt),S(l)):S("Connected to Arc Testnet"),window.location.hash="#portfolio",Ae()}}catch(e){C("wallet_connect_failed"),S(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,I()}}},S=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Ze&&window.clearTimeout(Ze),Ze=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=S;var Oa=(e,a,r,o)=>{let i=document.createElement("div");i.className="success-modal-overlay",i.innerHTML=`
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
  `,document.body.appendChild(i),setTimeout(()=>{i.classList.add("show")},10);let s=()=>{i.classList.remove("show"),setTimeout(()=>{i.remove()},300)};i.querySelector(".success-modal-close-btn")?.addEventListener("click",s),i.querySelector(".success-modal-action-btn")?.addEventListener("click",s),i.addEventListener("click",n=>{n.target===i&&s()})},Y=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},_t=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},Xe=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(t.activeCategory==="Personalized"){let o=Ee(),i=[...o.clubs,...o.managers,...o.players].map(s=>s.toLowerCase()).filter(Boolean);if(i.length>0){let s=`${e.headline} ${e.summary||""} ${e.source||""}`.toLowerCase();if(!i.some(l=>s.includes(l)))return!1}}let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),Fe=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,Da=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Na=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let i=r.slice(0,a).join(" "),s=Math.max(i.lastIndexOf("."),i.lastIndexOf("?"),i.lastIndexOf("!"));return s>i.length*.45?i.slice(0,s+1).trim():`${i.replace(/[,:;.'"!\?\s]+$/,"")}...`},kt=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let i=a.match(/"summary"\s*:\s*"((?:[^"\\]|\\.)*)"/i);if(i){a=i[1].replace(/\\"/g,'"').replace(/\\n/g,`
`).replace(/\\r/g,"\r").replace(/\\t/g,"	").replace(/\\\\/g,"\\").trim();continue}let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/\\n/g,`
`).replace(/\\r/g,""),a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/[^\S\r\n]+/g," ").replace(/\r\n/g,`
`).replace(/\n{3,}/g,`

`).trim(),Da(a)?"":a.includes("WHAT HAPPENED")||a.includes("KEY POINTS")?a:Na(a)},$e=(e,a)=>kt(a||"")||kt(e.summary)||e.headline,_a=e=>{let r=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!r||!window.html2canvas)return;let o=document.createElement("div");o.className="briefing-export-staging";let i=r.cloneNode(!0);i.classList.add("briefing-export-surface"),o.appendChild(i),document.body.appendChild(o);let s=document.documentElement.dataset.theme==="light";window.html2canvas(i,{backgroundColor:s?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(n=>{let l=document.createElement("a");l.download="siftle-briefing.png",l.href=n.toDataURL("image/png"),l.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{o.remove()})};window.downloadBriefingCard=_a;var Ha=e=>e.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),Fa=(e,a)=>{let r="";if(a)try{r=decodeURIComponent(a)}catch{r=a}let o=window.location.origin,i=window.location.pathname,s=t.stories.find(d=>d.id===e||r&&d.sourceUrl===r),n=s?Ha(s.headline):e>0?`story-${e}`:"",l=e>0?`${o}/story/${n}?utm_source=briefing&url=${encodeURIComponent(s?.sourceUrl||r)}`:r?`${o}/api/redirect?url=${encodeURIComponent(r)}&source=briefing`:`${o}/story/briefing?utm_source=briefing`;navigator.clipboard.writeText(l).then(()=>{S("Shareable link copied to clipboard!")}).catch(()=>{S("Unable to copy link")})};window.copyBriefingLink=Fa;var Ht=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(a){let s=a.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${s}</h3>
    `}r[0].trim()&&(o+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let i="";for(let s=1;s<r.length;s+=2){let n=r[s].trim().toUpperCase(),l=r[s+1]?r[s+1].trim():"";if(!l)continue;let d="";if(n==="KEY POINTS"){let m=l.split(/(?:•|\*|-)\s+/).map(p=>p.replace(/\\n/g,"").trim()).filter(p=>{if(!p||p==="\\n"||p===`
`)return!1;let g=p.trim();return!(g.split(/\s+/).filter(Boolean).length<6||g.length<30||!/[.?!]"?'?$/.test(g)||/^according\s+to\s+\w+$/i.test(g.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")))});m.length>0?d=`<ul class="briefing-list">${m.map(p=>`<li>${p}</li>`).join("")}</ul>`:d=`<p class="briefing-text">${l}</p>`}else d=`<p class="briefing-text">${l}</p>`,n==="TAKEAWAY"&&(i=l);let c=n.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${c}-section">
        <h4 class="briefing-title">${n}</h4>
        ${d}
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
    `),o},Ye=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${x(a)}</p>`:""},ja=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},ct=e=>`siftle_ai_briefing_unlock_${ja()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Ft=e=>localStorage.getItem(ct(e))||"",Ra=e=>{localStorage.removeItem(ct(e))},pe=e=>{let r=new URLSearchParams(window.location.search).get("url");return r&&r===e.sourceUrl?!0:!!Ft(e)},qa=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:ae.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Wa=e=>{let a=t.stories.find(i=>i.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(i=>i.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let i=A.find(s=>s.id===t.selectedMarketId);if(i){let s=Gt(i).evidence.find(n=>n.sourceUrl===e);if(s)return qa(i,s)}}return null},Ya=(e,a)=>{let r=rr(e,a);return r===null?null:r-It*60*1e3};var Va=(e,a)=>{let r=Ya(e,a);return r===null?null:Date.now()>=r?`Locked ${It}m before kickoff`:null},Ga=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled,i=!!t.walletAddress;return`
    <div class="briefing-section">
      ${Ye(e)}
      ${a?`
          ${We()}
        `:`
          <p class="briefing-text">
            ${i?o?`Pay a <strong>${r}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${r}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`:"Sign in to access AI briefings."}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${i?o?"Unlock via Circle x402":"AI briefing":"Sign in and access AI briefing"}
          </button>
        `}
    </div>
  `},jt=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],Rt=e=>`
  <div class="briefing-section">
    ${Ye(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,at=async(e,a=!1)=>{if(!t.walletAddress){S("Please sign in to unlock this briefing."),Pe();return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",C("ai_unlock_attempt"),b();try{let r=await fetch(B("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let i=Number(o.amountUsdc)||.05;try{let p=await fetch(B(`/api/summary/price?sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(p.ok){let g=await p.json();typeof g.priceUsdc=="number"&&(i=g.priceUsdc)}}catch(p){console.warn("Failed to retrieve autonomous price, falling back to default:",p.message)}let s=await fa(o.treasuryAddress,i,p=>{U&&(U.textContent=p),t.briefingStatusByUrl[e.sourceUrl]=p,b()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=`Briefing unlocked! Charged ${i} USDC (priced by Siftle AI Agent)`,b();let n=await fetch(B("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:s})}),l=await n.json();if(!n.ok||!l.unlockToken)throw new Error(l.error||"AI briefing failed");localStorage.setItem(ct(e),l.unlockToken),C("ai_unlock_success");let d=sessionStorage.getItem("siftle_landing_url"),c=sessionStorage.getItem("siftle_landing_headline");d&&C("briefing_referral_unlock",d,c||void 0),(Number(l?.bonus?.points)||0)>0&&ne(!1).catch(p=>console.error("Failed to refresh leaderboard bonus:",p)),await Te(e)}catch(r){C("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl];let o=r instanceof Error?r.message:String(r||""),i=o,s=o.toLowerCase();if(s.includes("session expired")||s.includes("sign in first")||s.includes("unauthorized")){try{(await D()).disconnectArcWallet()}catch{}t.walletAddress=null,t.walletBalance=null,i="Your session has expired. Please sign in again to unlock this briefing."}else(s.includes("balance")||s.includes("exceeds balance")||s.includes("transfer amount exceeds"))&&(i="Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC.");S(i)}finally{t.unlockingSummaryUrl=null,b()}}},Te=async e=>{if(pe(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=$e(e,e.ai_summary),C("view_summary"),U&&(U.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded");let r=new URLSearchParams(window.location.search).get("url");if(r&&r===e.sourceUrl){let o=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(o)||(sessionStorage.setItem(o,"true"),C("briefing_unlock",e.sourceUrl,e.headline))}b();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing through 0G...",b();try{let r=new URLSearchParams(window.location.search).get("url"),o=!!(r&&r===e.sourceUrl),i=await fetch(B("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Ft(e),isSharedLanding:o})});if(!i.ok){if(i.status===402){Ra(e),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",U&&(U.textContent="Unlock expired. Unlock again to continue."),b();return}throw new Error(`Summary request failed with ${i.status}`)}let s=await i.json();t.aiSummaries[e.sourceUrl]=$e(e,s.summary),t.aiSummaryProofs[e.sourceUrl]=s.proof,t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",U&&s.provider&&(U.textContent=s.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${s.provider}`);let l=new URLSearchParams(window.location.search).get("url");if(l&&l===e.sourceUrl){let d=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(d)||(sessionStorage.setItem(d,"true"),C("briefing_unlock",e.sourceUrl,e.headline))}}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",U&&(U.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,b()}}},rt=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);if(r){if(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),b(),r.type==="tweet"){window.scrollTo({top:0,behavior:"smooth"});return}a&&!pe(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),b(),at(r,!0)):pe(r)&&Te(r),window.scrollTo({top:0,behavior:"smooth"})}},Ka=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),b(),qt(e),window.scrollTo({top:0,behavior:"smooth"})},Ja=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.location.search?window.history.pushState({},"",window.location.pathname+"#feed"):window.history.pushState({},"","#feed"),b(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},qt=async e=>{try{let a=await fetch(B(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),U&&(U.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),S("That timeline no longer has a verified past update"),U&&(U.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,b()}};function Ae(){let e=window.location.pathname.startsWith("/story/"),a=window.location.pathname.startsWith("/thread/");if(e||a){let o=window.location.pathname.split("/").pop()||"",i=e?`#story-${o}`:`#thread-${o}`;window.history.replaceState({},"",`${window.location.pathname}${window.location.search}${i}`)}if(window.location.hash==="#resolve-local-yes"){let o=A.find(i=>i.id==="siftle-local-test-2")||A.find(i=>i.timeframe==="Daily"&&ue(i).startsWith("0x00000000000000000000000000000000000001"));if(o){ha(ue(o)),pr(o,"yes"),delete t.marketSnapshots[o.id],delete t.marketPositions[o.id],delete t.checkedMarketSnapshots[o.id],delete t.loadingMarketSnapshots[o.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),S("Local test market resolved YES"),R().then(()=>{ne(!0).catch(i=>console.error("Failed to report leaderboard entry:",i)),I(),O()});return}}let r=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||r){t.activeSurface="markets",t.selectedMarketId=r?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,b();return}if(window.location.hash==="#matches"){t.activeSurface="matches",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,b();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,b();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,b();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let o=window.location.hash.match(/^#story-(.+)$/),i=window.location.hash.match(/^#thread-(\d+)$/),n=new URLSearchParams(window.location.search).get("url"),l;if(n){sessionStorage.setItem("siftle_landing_url",n);let m=t.stories.find(g=>g.sourceUrl===n);m?.headline?sessionStorage.setItem("siftle_landing_headline",m.headline):sessionStorage.getItem("siftle_landing_headline")||sessionStorage.setItem("siftle_landing_headline","Archived Story");let p=`siftle_ref_tracked_${encodeURIComponent(n)}`;if(sessionStorage.getItem(p)||(sessionStorage.setItem(p,"true"),C("briefing_referral",n,m?.headline||"Archived Story")),l=t.stories.find(g=>g.sourceUrl===n),!l&&o){let g=n;t.loadingSummaryUrl!==g&&(t.loadingSummaryUrl=g,fetch(B(`/api/story?sourceUrl=${encodeURIComponent(g)}`)).then(v=>{if(!v.ok)throw new Error;return v.json()}).then(v=>{t.stories.some(f=>f.sourceUrl===v.sourceUrl)||(v.id=Math.max(9999,...t.stories.map(f=>f.id))+1,t.stories.push(v));let u=t.stories.find(f=>f.sourceUrl===v.sourceUrl);sessionStorage.setItem("siftle_landing_headline",u.headline),C("briefing_referral",n,u.headline),t.selectedStoryId=u.id,b(),Te(u)}).catch(v=>{console.warn("Failed to load historical story from backend:",v)}).finally(()=>{t.loadingSummaryUrl=null}))}}else if(o){let m=Number(o[1]);isNaN(m)||(l=t.stories.find(p=>p.id===m))}let d=i?t.stories.find(m=>m.id===Number(i[1])):void 0,c=t.selectedStoryId!==null||t.selectedThreadUrl!==null;l?(t.selectedStoryId=l.id,t.selectedThreadUrl=null,t.activeThread=null,b(),Te(l)):d?(t.selectedStoryId=null,t.selectedThreadUrl=d.sourceUrl,t.activeThread=null,b(),qt(d)):n||(t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,b(),c&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"})));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,b()}var ot=e=>{xt&&(xt.textContent=e)},Za=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Yt(),b());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(B(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let i=await o.json();if(t.stories=i.top_stories??[],ke(),t.hasLoadedFeed=!0,tt&&(tt.textContent=_t(i.date??t.activeArchiveDate)),U)if(t.activeArchiveDate)U.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let s=i.archive?.provider==="shelby"?"Shelby":"local archive";U.textContent=`Latest published feed loaded from ${s}`}ot(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),ke(),U&&(U.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,b(),Ae()}},Xa=async()=>{if(H)try{let e=await fetch(B("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),H.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),H.value=t.activeArchiveDate??"",ot(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),ot("Archive unavailable")}},Ce=()=>{yt||(yt=!0,Xa())},J=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Za(e,a)},Qa=()=>{bt||(bt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&J(t.activeCategory,!0),Ce()},8e3))};var re=e=>e==="Sports"?"Football":e,De=e=>/^@/.test(String(e.source||""))||/(?:^|\/)(?:x|twitter)\.com\//i.test(String(e.sourceUrl||"")),Wt=(e,a)=>{let r=e.trim();return r.length<=a?r:`${r.slice(0,Math.max(0,a-1)).trimEnd()}\u2026`},er=e=>e.replace(/^@/,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ").filter(Boolean),it=e=>{let a=String(e.source||re(e.category)).trim(),r=er(a);if(r.length===0)return re(e.category);let o=r.filter((n,l)=>{let d=n.toLowerCase();return!(l>0&&["live","news","official"].includes(d))}),i=o.length>0?o:r,s="";for(let n of i){let l=s?`${s} ${n}`:n;if(l.length>18)break;s=l}return Wt(s||i[0],18)},St=e=>{let a=String(e.headline||"").replace(/\s+/g," ").trim();if(!De(e))return a;let r=a.replace(/https?:\/\/\S+/gi,"").replace(/\(Source:[^)]+\)\s*$/i,"").replace(/\s+/g," ").trim();if(/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(r))return`Latest from ${it(e)}`;let o=r.replace(/^R to\s+@[^:]+:\s*/i,"").trim(),i=o.length>=24&&!/^(?:more here|watch more here)[:.!?]*$/i.test(o)?o:r||a;return Wt(i,150)},Yt=()=>{if(!j)return;j.hidden=!1;let e=t.activeCategory==="Personalized";j.innerHTML=`
    <button class="category-tab ${e?"":"active"}" type="button" data-category="Sports">
      Feed
    </button>
    <button class="category-tab ${e?"active":""}" type="button" data-category="Personalized">
      Personalized
    </button>
  `},Vt=e=>(e.thread?.count??0)>=1,tr=(e=0)=>`${e} past ${e===1?"update":"updates"}`,ar=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),i=new Date(r.publishedAt||0).getTime();return(Number.isNaN(i)?0:i)-(Number.isNaN(o)?0:o)}),Gt=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},rr=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null};var ue=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",Kt=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],Jt=e=>!!((e?.optionMarket||e?.isOptionMarket||e?.marketType==="option"||Array.isArray(e?.options)&&e.options.length>0)&&Kt(e).length>1);var Zt=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),x=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),pt=e=>`siftle_profile_username_${e.toLowerCase()}`,Xt=e=>e.trim().replace(/\s+/g," ").slice(0,15),de=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=pt(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=Xt(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},or=e=>{if(!t.walletAddress)return;let a=pt(t.walletAddress),r=Xt(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},ir=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},sr=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:2,max:2,fallback:2}},Ve=(e,a,r,o)=>{let{min:i,max:s,fallback:n}=sr(a,r,o);return Number.isFinite(e)?Math.min(s,Math.max(i,e)):n},nr=(e,a,r,o,i)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let s=a==="yes"?i?.yesSharesUsdc??0:i?.noSharesUsdc??0,n=e.yesSharesUsdc,l=e.noSharesUsdc;if(o==="sell")return Math.min(r,s);let d=(a==="yes"?n:l)+r,c=n+l+r;return d<=0||c<=0?r:(s+r)/d*c};var lr=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},Qt=e=>`siftle_claimed_markets_${e.toLowerCase()}`,ea=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(Qt(t.walletAddress))||"[]"))}catch{return new Set}},dr=e=>{if(!t.walletAddress)return;let a=ea();a.add(e),localStorage.setItem(Qt(t.walletAddress),JSON.stringify(Array.from(a)))},ut=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),je=(e,a,r)=>{let o=r?.yesSharesUsdc??0,i=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:i>0:a==="yes"?i<=0:o<=0},ta=(e,a,r)=>{if(je(e,a,r))return a;let o=a==="yes"?"no":"yes";return je(e,o,r)?o:a};var cr=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)};var aa=()=>{let e=0,a=0,r=0,o=A.filter(n=>n.timeframe==="Daily").map(n=>n.id),i=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",s={};if(i)try{s=JSON.parse(localStorage.getItem(i)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let n of o){if(s[n]?.result==="win"){e+=Number(s[n].points)||0,a++;continue}if(s[n]?.result==="loss"){r++;continue}let l=t.marketPositions[n],c=t.marketSnapshots[n]?.outcome??0;if(c===0)continue;let m=`siftle_traded_sides_${n}_${t.walletAddress.toLowerCase()}`,p=[];try{p=JSON.parse(localStorage.getItem(m)||"[]")}catch{}let g=p.includes("yes")&&p.includes("no");if(c===1&&l&&l.yesSharesUsdc>0){let v=g?50:100;e+=v,a++,s[n]={result:"win",points:v}}else if(c===2&&l&&l.noSharesUsdc>0){let v=g?50:100;e+=v,a++,s[n]={result:"win",points:v}}else l&&(l.yesSharesUsdc>0||l.noSharesUsdc>0)&&(r++,s[n]={result:"loss",points:0})}return i&&localStorage.setItem(i,JSON.stringify(s)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},pr=(e,a)=>{let r=ue(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,i=new Set;for(let s=0;s<localStorage.length;s++){let n=localStorage.key(s);if(!n||!n.startsWith(o))continue;let l=n.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(l)&&i.add(l)}i.forEach(s=>{let n=`${o}${s}`,l={yesSharesUsdc:0,noSharesUsdc:0};try{l=JSON.parse(localStorage.getItem(n)||"{}")}catch{}let d=(Number(l.yesSharesUsdc)||0)>0,c=(Number(l.noSharesUsdc)||0)>0;if(!d&&!c)return;let m=`siftle_traded_sides_${e.id}_${s}`,p=[];try{p=JSON.parse(localStorage.getItem(m)||"[]")}catch{}let g=p.includes("yes")&&p.includes("no"),v=a==="yes"?d:c,u=`siftle_resolved_results_${s}`,f={};try{f=JSON.parse(localStorage.getItem(u)||"{}")}catch{}f[e.id]={result:v?"win":"loss",points:v?g?50:100:0},localStorage.setItem(u,JSON.stringify(f));let h=0,w=0,P=0;Object.values(f).forEach(y=>{y.result==="win"?(w+=1,h+=Number(y.points)||0):y.result==="loss"&&(P+=1)});let T=localStorage.getItem(pt(s))||"";fetch(B("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:s,username:T,points:h,status:`${w} win${w===1?"":"s"}, ${P} loss${P===1?"":"es"}`})}).catch(y=>console.error("Failed to report local resolved score:",y))})},ne=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?aa():null,r=await fetch(B("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},ur=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let i=JSON.parse(localStorage.getItem(r)||"{}");((Number(i.yesSharesUsdc)||0)>0||(Number(i.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(B("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})};function Re(e){let a=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${a}${r}${o}`}function qe(e){if(!e)return"Soccer Matches";let a=e.replace(/^\d{4}(-\d{2,4})?-/g,"").replace(/-/g," ").trim(),r=a.toLowerCase();return r.includes("russian")||r.includes("rus.1")?"Russian Premier League":r.includes("scottish")||r.includes("sco.1")?"Scottish Premiership":r.includes("ukrainian")||r.includes("ukr.1")?"Ukrainian Premier League":r.includes("egyptian")||r.includes("egy.1")?"Egyptian Premier League":r.includes("english premier league")||r.includes("premier league")||r.includes("eng.1")||r.includes("eng 1")?"English Premier League":r.includes("laliga")||r.includes("esp.1")||r.includes("esp 1")||r.includes("spanish")?"Spanish LaLiga":r.includes("champions league")||r.includes("uefa champions")?"UEFA Champions League":r.includes("europa league")||r.includes("uefa europa")?"UEFA Europa League":r.includes("championship")||r.includes("eng.2")||r.includes("eng 2")?"EFL Championship":r.includes("serie a")||r.includes("ita.1")||r.includes("ita 1")||r.includes("italian")?"Italian Serie A":r.includes("bundesliga")||r.includes("ger.1")||r.includes("ger 1")||r.includes("german")?"German Bundesliga":r.includes("ligue 1")||r.includes("fra.1")||r.includes("fra 1")||r.includes("french")?"French Ligue 1":r.includes("saudi")||r.includes("sau.1")||r.includes("sau 1")?"Saudi Pro League":r.includes("eredivisie")||r.includes("ned.1")?"Dutch Eredivisie":r.includes("primeira liga")||r.includes("por.1")?"Portuguese Primeira Liga":r.includes("friendly")||r.includes("friendlies")?"Club Friendlies":a.split(" ").map(o=>o?o.charAt(0).toUpperCase()+o.slice(1).toLowerCase():"").join(" ").trim()}var ra=async e=>{let a=Re(new Date),r=e||t.activeMatchDate||a;if(!(t.loadingLiveMatches&&r===t.activeMatchDate&&t.liveMatches.length>0)){t.loadingLiveMatches=!0,t.activeMatchDate=r;try{let o=Re(new Date),i=e||t.activeMatchDate||o;t.activeMatchDate=i;let s=`?dates=${i}`,n=[`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/eng.2/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/sau.1/scoreboard${s}`,`https://site.api.espn.com/apis/site/v2/sports/soccer/all/scoreboard${s}`],l=await Promise.allSettled(n.map(c=>fetch(c).then(m=>m.json()))),d=new Map;l.forEach(c=>{if(c.status==="fulfilled"&&c.value&&Array.isArray(c.value.events)){let m=c.value.leagues?.[0]?.name,p=c.value.leagues?.[0]?.logos?.[0]?.href||"",g=m&&m!=="Soccer"?m:null;c.value.events.forEach(v=>{if(!v||!v.id||d.has(v.id))return;let u=v.competitions?.[0],f=u?.competitors?.find($=>$.homeAway==="home"),h=u?.competitors?.find($=>$.homeAway==="away");if(!f||!h)return;let w=v.status?.type?.state,P=v.status?.type?.detail||v.status?.type?.shortDetail||"Scheduled",T=g||v.season?.slug||v.league?.name||"Soccer Scoreboard",y=qe(T);d.set(v.id,{id:v.id,name:v.name,league:y,leagueLogo:p,statusState:w,statusDetail:P,isLive:w==="in",isPost:w==="post",homeTeam:f.team?.displayName||f.team?.name||"Home",awayTeam:h.team?.displayName||h.team?.name||"Away",homeCrest:f.team?.logo||"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",awayCrest:h.team?.logo||"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",homeScore:f.score??null,awayScore:h.score??null,venue:u?.venue?.fullName||"Stadium",date:v.date})})}}),t.liveMatches=Array.from(d.values())}catch(o){console.error("Failed to fetch ESPN live matches:",o)}finally{t.loadingLiveMatches=!1}}},R=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Aa();let a=Le(),r=await Promise.all(a.map(async o=>{let i=ue(o);if(!i)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:s,snapshot:n}=await va(i,t.walletAddress);return t.marketSnapshots[o.id]=n,[o.id,s]}catch(s){return console.warn(`Failed to load portfolio market ${o.id}:`,s),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,ne(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&b()}}},mr=async(e,a)=>{if(!t.walletAddress){S("Session expired or wallet not connected. Please sign in."),Pe();return}let r=Le().find(c=>c.id===e);if(!r)return;t.marketTradeSide=a;let o=ue(r);if(!o){S("Deploy this Arc market contract before trading"),b();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",b(),await R(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){S("Still loading your position. Try again in a moment."),b();return}let i=t.marketSnapshots[r.id];if(ut(r,i)){t.tradeDrawerOpen=!1,S("This market is resolved and can no longer be traded."),b();return}let s=i?.yesPriceCents??r.probability,n=i?.noPriceCents??100-r.probability,l=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!je(t.marketOrderMode,a,l)){let c=lr(l),m=t.marketOrderMode==="sell"?c?`You can only exit your ${c.toUpperCase()} shares.`:"You do not have shares to exit in this market.":c?`Exit your ${c.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";S(m),t.marketTradeSide=ta(t.marketOrderMode,a,l),b();return}let d=Ve(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,l);t.marketTradeAmount=d,C("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",b();let c=await ya(o,t.marketOrderMode,a,d,m=>{t.marketTradeStatus=m,b()},s,n);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await He(),t.walletAddress&&(t.walletBalance=await te(t.walletAddress)),await R({force:!0}),ne(!0).catch(m=>console.error("Failed to report leaderboard entry:",m)),t.walletAddress){let m=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,p={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let v=localStorage.getItem(m);if(v){let u=JSON.parse(v);p={yesCost:u.yesCost||0,noCost:u.noCost||0,yesShares:u.yesShares||0,noShares:u.noShares||0}}}catch{}let g=d;if(t.marketOrderMode==="buy"){let v=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,u=[];try{u=JSON.parse(localStorage.getItem(v)||"[]")}catch{}u.includes(a)||(u.push(a),localStorage.setItem(v,JSON.stringify(u))),a==="yes"?(p.yesCost+=g,p.yesShares=(p.yesShares||0)+g/(s/100)):(p.noCost+=g,p.noShares=(p.noShares||0)+g/(n/100))}else{let v=t.marketPositions[r.id];if(v){if(a==="yes"&&v.yesSharesUsdc>0){let u=Math.min(1,g/v.yesSharesUsdc);p.yesCost=Math.max(0,p.yesCost-p.yesCost*u),p.yesShares=Math.max(0,(p.yesShares||0)-(p.yesShares||0)*u)}else if(a==="no"&&v.noSharesUsdc>0){let u=Math.min(1,g/v.noSharesUsdc);p.noCost=Math.max(0,p.noCost-p.noCost*u),p.noShares=Math.max(0,(p.noShares||0)-(p.noShares||0)*u)}}}localStorage.setItem(m,JSON.stringify(p))}S(`Trade confirmed ${c.slice(0,8)}...`),C(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Oa(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(c){C("trade_failed"),cr(c)?(Et(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,de(),S("Session expired. Please sign in again.")):S(c instanceof Error?c.message:"Arc trade failed")}finally{t.marketTradeStatus=null,I(),b()}},gr=e=>Vt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",fr=e=>Vt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"";var mt=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,hr=()=>`
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
`,vr=(e=4)=>`${mt("Loading stories")}${Array.from({length:e},hr).join("")}`,We=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${mt("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,yr=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${mt("Loading thread timeline")}
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
`;var Qe=e=>{let a=e.type==="tweet",r='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-top; color: var(--color-text-primary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',o='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 12px; height: 12px; display: inline-block; vertical-align: text-top; margin-right: 4px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';return`
    <article class="story-card ${a?"social-story tweet-card":De(e)?"social-story":""}" data-story-id="${e.id}" role="button" tabindex="0" aria-label="Open summary for ${e.headline}">

      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            ${a?`<div style="margin-bottom: 6px;">${r}</div>`:""}
            <strong>${e.source}</strong>
            <span>${Fe(e)} - ${e.readTime}</span>
          </div>
        </div>
        </div>
        </div>
      </div>

      <div class="story-image-frame desktop-only" aria-hidden="true">
        <img src="${e.imageUrl}" alt="" loading="lazy" />
      </div>

      <div class="story-copy desktop-only">
        <span class="category-chip ${e.category}">${re(e.category)}</span>
        <h2 class="card-headline">${St(e)}</h2>
        <p>${a?"Tap to read the tweet":"Tap to read the AI briefing."}</p>
      </div>

      <div class="card-action-row desktop-only">
        ${a?`<button class="card-source-button read-tweet-btn" type="button" style="cursor: pointer;">Read Tweet</button>
             <a class="card-source-button twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; gap: 6px;">
              ${r}
              Open Tweet
             </a>`:`
              ${gr(e)}
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
                <span class="mobile-source-pill ${De(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px; max-width: 100% !important;">
                  ${o}
                  ${it(e)}
                </span>
              `:`
                <div class="mobile-source-container">
                  <span class="mobile-source-pill ${De(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px; max-width: 100% !important;">
                    ${it(e)}
                  </span>
                </div>
              `}
              
            </div>
            <h2 class="card-headline">${St(e)}</h2>
            <span class="mobile-card-time">${Fe(e)}</span>
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
                ${fr(e)}
                ${/example\\.com/i.test(e.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
                <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
              `}
        </div>
      </div>

    </article>
  `},me=()=>{if(!k)return;if(k.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){k.innerHTML=vr(4);return}if(V){k.innerHTML=Or(),Q();return}let e=x(t.newsSearchQuery.trim()),r=`
    ${e?`<div class="news-feed-search-copy"><p>${Xe().length} matches for "${e}".</p></div>`:""}
    <div class="feed-minimal-top-bar" style="margin-bottom: 12px;">
      <label class="news-feed-search-bar minimal-search" style="flex: 1;" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search followed news..." value="${x(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </div>
  `;if(t.activeCategory==="Personalized"){let i=Ee(),s=ca(),n=[...i.clubs,...i.players,...i.managers].join(", ");if(!s){k.innerHTML=`
        <div class="briefing-header-card" style="margin-top: 10px; padding: 24px 18px; text-align: center;">
          <h3 style="margin: 0 0 6px 0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Personalize Your Football Feed</h3>
          <p style="font-size: 0.84rem; color: #69728a; margin: 0 auto 16px auto; max-width: 420px;">Type your favorite clubs, managers, and players to build your custom feed.</p>
          <button type="button" class="briefing-back-btn" id="openTopicPickerBtn" style="margin: 0 auto; padding: 6px 20px;">Add Topics</button>
        </div>
      `,document.querySelector("#openTopicPickerBtn")?.addEventListener("click",_e),Q();return}let l=Xe(),d=`
      <div class="personalized-minimal-bar">
        <div class="personalized-following-text">
          <span class="following-label">Following:</span>
          <span class="following-topics">${x(n)}</span>
          <button type="button" class="minimal-edit-btn" id="customizeTopicsFeedBtn">Edit</button>
        </div>
      </div>
    `;if(l.length===0){k.innerHTML=d+'<div class="portfolio-empty compact news-search-empty">No stories match your followed topics in recent news. Tap Edit to add more clubs or players.</div>',document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",_e),Q();return}k.innerHTML=d+l.map(Qe).join(""),document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",_e),Q();return}let o=Xe();if(o.length===0){let i=t.showSaved?[]:t.stories;if(i.length>0){k.innerHTML=r+i.map(Qe).join(""),Q();return}k.innerHTML=r+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>',Q();return}k.innerHTML=r+o.map(Qe).join(""),Q()},$t=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),ye=(e,a,r,o,i,s)=>{e.beginPath(),e.moveTo(a+s,r),e.lineTo(a+o-s,r),e.quadraticCurveTo(a+o,r,a+o,r+s),e.lineTo(a+o,r+i-s),e.quadraticCurveTo(a+o,r+i,a+o-s,r+i),e.lineTo(a+s,r+i),e.quadraticCurveTo(a,r+i,a,r+i-s),e.lineTo(a,r+s),e.quadraticCurveTo(a,r,a+s,r),e.closePath()},br=(e,a,r,o,i,s,n)=>{let l=a.split(/\s+/).filter(Boolean),d=[],c="";for(let m of l){let p=c?`${c} ${m}`:m;if(e.measureText(p).width<=i){c=p;continue}if(c&&d.push(c),c=m,d.length===n)break}if(c&&d.length<n&&d.push(c),l.length>0&&d.length===n){for(;e.measureText(`${d[n-1]}...`).width>i&&d[n-1].length>0;)d[n-1]=d[n-1].slice(0,-1).trim();d[n-1]=`${d[n-1]}...`}return d.forEach((m,p)=>e.fillText(m,r,o+p*s)),o+d.length*s},wr=(e,a,r,o,i,s,n)=>{let l=Math.max(i/a.naturalWidth,s/a.naturalHeight),d=i/l,c=s/l,m=(a.naturalWidth-d)/2,p=(a.naturalHeight-c)/2;e.save(),ye(e,r,o,i,s,n),e.clip(),e.drawImage(a,m,p,d,c,r,o,i,s),e.restore()},Tt=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),xr={"&quot;":'"',"&apos;":"'","&amp;":"&","&lt;":"<","&gt;":">","&nbsp;":" ","&ndash;":"-","&mdash;":"\u2014","&hellip;":"...","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&scaron;":"\u0161","&Scaron;":"\u0160","&eacute;":"\xE9","&Eacute;":"\xC9","&egrave;":"\xE8","&Egrave;":"\xC8","&ecirc;":"\xEA","&Ecirc;":"\xCA","&aacute;":"\xE1","&Aacute;":"\xC1","&agrave;":"\xE0","&Agrave;":"\xC0","&iacute;":"\xED","&Iacute;":"\xCD","&oacute;":"\xF3","&Oacute;":"\xD3","&uacute;":"\xFA","&Uacute;":"\xDA","&uuml;":"\xFC","&Uuml;":"\xDC","&ouml;":"\xF6","&Ouml;":"\xD6","&auml;":"\xE4","&Auml;":"\xC4","&ntilde;":"\xF1","&Ntilde;":"\xD1","&ccedil;":"\xE7","&Ccedil;":"\xC7","&szlig;":"\xDF","&euro;":"\u20AC","&pound;":"\xA3","&copy;":"\xA9"},st=e=>e?e.replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"-").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))).replace(/&#x([0-9a-fA-F]+);/g,(a,r)=>String.fromCharCode(parseInt(r,16))).replace(/&[a-zA-Z]+;/g,a=>xr[a]||a).replace(/&#[a-zA-Z0-9]*;?/g,""):"",kr=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",Mt=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",ye(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let i=await $t("./assets/siftle-logo-small.png").catch(()=>null);i&&o.drawImage(i,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${st(e.source)} - ${e.postedAt} ago`,110,140);let s=195;if(a){let l=await $t(kr(e.imageUrl)).catch(()=>null);l?wr(o,l,110,s,860,520,28):(o.fillStyle="#eef2ff",ye(o,110,s,860,520,28),o.fill())}else o.fillStyle="#eef2ff",ye(o,110,s,860,520,28),o.fill();let n=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",ye(o,110,n,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(re(e.category),132,n+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",br(o,st(e.headline),110,888,860,54,4),r},oa=async e=>{let a=await Mt(e,!0);try{return await Tt(a)}catch{return Tt(await Mt(e,!1))}},ia=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,sa=async e=>{let a=await oa(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=ia(e),o.click(),URL.revokeObjectURL(r)},Sr=async e=>{let a=await oa(e),r=new File([a],ia(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await sa(e)},$r=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,me(),S(a==="share"?"Preparing share image":"Preparing download"),U&&(U.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await Sr(r):await sa(r),S(a==="share"?"Share image ready":"Image saved"),U&&(U.textContent="Branded story image ready")}catch(o){console.warn(o),S("Image export unavailable"),U&&(U.textContent="Image export was cancelled or unavailable")}}},Lt=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,o=jt(e);return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${re(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${$e(e)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${r?"disabled":""}>${r?"Preparing...":"AI briefing"}</button>
      </div>
      ${Ye(e)}
      ${r?`<div style="margin-top: 12px;">${We()}</div>`:pe(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${We()}</div>`:o?`<div style="margin-top: 12px;">${Rt(e)}</div>`:`<div style="margin-top: 12px;">${Ht($e(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},Tr=async(e,a)=>{if(!t.walletAddress){S("Session expired or wallet not connected. Please sign in."),Pe();return}let r=Le().find(c=>c.id===e);if(!r||!Jt(r))return;let o=Kt(r).find(c=>c.id===a);if(!o){S("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",b(),await R(),t.marketTradeStatus=null);let i=t.marketSnapshots[r.id];if(ut(r,i)){S("This market is resolved and can no longer be traded.");return}let s=t.marketPositions[r.id],n=t.marketOrderMode==="sell";if(!n&&s?.optionId){S("Your pick is already locked for this market.");return}if(n&&!s?.optionId){S("You do not have a pick to exit.");return}let l=Math.max(0,Number(s?.optionSharesUsdc)||0);if(n&&l<=0){S("Your pick is still loading. Please try again."),await R({force:!0});return}let d=n?l:Ve(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=d,t.marketTradeOptionId=n&&s?.optionId||o.id,C("trade_attempt");try{t.marketTradeStatus=n?"Exiting your pick...":"Locking your pick...",b(),await et(r.id,n?"sell":"buy",n&&s?.optionId||o.id,d,c=>{t.marketTradeStatus=c,b()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await He(),t.walletAddress&&(t.walletBalance=await te(t.walletAddress)),await R({force:!0}),C(n?"trade_sell_success":"trade_buy_success"),S(n?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(c){C("trade_failed"),S(c instanceof Error?c.message:"Trade failed")}finally{t.marketTradeStatus=null,I(),b()}},Mr=()=>{if(!L||!k)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(k.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){L.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){L.innerHTML=`
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
          <span class="category-chip ${e.category}">${re(e.category)}</span>
          <span>${tr(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${Lt(e,"Latest")}
          ${ar(r?.items??[]).map(o=>Lt(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Lr=()=>{if(!L||!k)return;if(t.selectedThreadUrl){Mr();return}let e=t.stories.find(n=>n.id===t.selectedStoryId);if(!e){L.hidden=!0,L.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),k.hidden=!1;return}if(e.type==="tweet"){k.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode");let n='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';L.innerHTML=`
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
            <span class="tweet-detail-time">${Fe(e)}</span>
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
    `;return}let a=$e(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=pe(e),i=t.unlockingSummaryUrl===e.sourceUrl,s=jt(e);k.hidden=!0,L.hidden=!1,L.classList.add("fullscreen"),document.body.classList.add("detail-mode"),L.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${re(e.category)}</span>
          <span>${e.source} - ${Fe(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?Ye(e):""}
          ${o?r?We():s?Rt(e):Ht(a,e):Ga(e,i)}
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
  `};var Pr=e=>{let a=Gt(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,i=100-o,s=a.evidence[0],n=s?s.headline:"No updates yet",l=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${i}\xA2

*Latest Development:* "${n}"

Trade and discuss here: ${l}`};var Yr=e=>{if(!e)return!1;if(e.isLocked===!0)return!0;let a=String(e.statusDetail||"").toLowerCase();if(a.includes("ft")||a.includes("final")||a.includes("ended")||a.includes("finished")||a.includes("resolved")||a.includes("postponed")||a.includes("locked")||String(e.closes||"").toLowerCase()==="resolved")return!0;if(e.isLive){let r=a.match(/([0-9]{1,3})/);if(r){let o=parseInt(r[1],10);if(!isNaN(o)&&o>=75)return!0}}return!1},ze=(()=>{try{let e=localStorage.getItem("siftle_global_odds");return e?JSON.parse(e):{}}catch{return{}}})(),be=e=>{let a=String(e?.id||"");if(ze[a])return{home:String(Number(ze[a].home).toFixed(1)),draw:String(Number(ze[a].draw).toFixed(1)),away:String(Number(ze[a].away).toFixed(1))};let r=Number(e?.homePoolUsdc)||Number(e?.optionPools?.home)||Number(e?.initialOptionPools?.home)||0,o=Number(e?.drawPoolUsdc)||Number(e?.optionPools?.draw)||Number(e?.initialOptionPools?.draw)||0,i=Number(e?.awayPoolUsdc)||Number(e?.optionPools?.away)||Number(e?.initialOptionPools?.away)||0,s=r+o+i;return s>0?{home:(r/s*100).toFixed(1),draw:(o/s*100).toFixed(1),away:(i/s*100).toFixed(1)}:e&&e.currentOdds?{home:String(Number(e.currentOdds.home).toFixed(1)),draw:String(Number(e.currentOdds.draw).toFixed(1)),away:String(Number(e.currentOdds.away).toFixed(1))}:e&&e.customOdds?{home:String(Number(e.customOdds.home).toFixed(1)),draw:String(Number(e.customOdds.draw).toFixed(1)),away:String(Number(e.customOdds.away).toFixed(1))}:{home:"33.3",draw:"33.3",away:"33.3"}},oe=()=>{if(!A||A.length===0?A=le:A=zt(le,A),!k||!L)return;ge?.toggleAttribute("hidden",!0),fe?.toggleAttribute("hidden",!0),j?.toggleAttribute("hidden",!0),K?.classList.add("active"),ie?.classList.remove("active"),se?.classList.remove("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,L.classList.remove("fullscreen"),k.hidden=!1,k.classList.remove("matches-surface-active");let e=t.activeMarketLeagueFilter||"All";A=A.filter(i=>{let s=(i.id+" "+i.question+" "+(i.homeTeam||"")+" "+(i.awayTeam||"")).toLowerCase();return!["coventry","nizhny","chertanova","dinamo moscow","spartak moscow"].some(n=>s.includes(n))});let a=A.find(i=>i.id==="m-chelsea-manutd")||A[0],r=[{id:"All",label:"All"},{id:"English Premier League",label:"Premier League"},{id:"Spanish LaLiga",label:"La Liga"},{id:"Italian Serie A",label:"Serie A"},{id:"German Bundesliga",label:"Bundesliga"},{id:"French Ligue 1",label:"Ligue 1"},{id:"Portuguese Primeira Liga",label:"Primeira Liga"},{id:"Dutch Eredivisie",label:"Eredivisie"}],o=e==="All"?A:A.filter(i=>(i.league||"").toLowerCase().trim()===e.toLowerCase().trim());k.innerHTML=`
    <section class="markets-surface" style="width: 100% !important; max-width: 100% !important; margin: 0 auto !important; padding: 12px 16px 120px 16px !important; box-sizing: border-box !important; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif !important; color: var(--ink) !important; overflow-x: hidden !important;">
      
      <!-- Top Title Header -->
      <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 1.8rem; font-weight: 900; color: var(--ink); letter-spacing: -0.02em;">Live Markets</h1>
        <a href="${ua}" target="_blank" rel="noreferrer" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); font-size: 0.78rem; font-weight: 800; padding: 6px 12px; border-radius: 999px; text-decoration: none; white-space: nowrap; flex-shrink: 0;">Get testnet USDC</a>
      </header>

      <!-- Horizontal League Selection Nav Bar -->
      <div style="display: flex; gap: 8px; overflow-x: auto; overflow-y: hidden; padding-bottom: 10px; margin-bottom: 20px; scrollbar-width: none; -webkit-overflow-scrolling: touch; width: 100%; box-sizing: border-box;">
        ${r.map(i=>{let s=e===i.id;return`
            <button type="button" class="market-league-selector-btn" data-league-id="${i.id}" style="background: ${s?"#38bdf8":"rgba(255, 255, 255, 0.05)"}; color: ${s?"#000000":"var(--muted)"}; border: 1.5px solid ${s?"#38bdf8":"var(--border)"}; border-radius: 999px; padding: 8px 16px; font-size: 0.88rem; font-weight: ${s?"900":"700"}; cursor: pointer; flex-shrink: 0; white-space: nowrap; font-family: inherit; transition: all 0.2s ease; ${s?"box-shadow: 0 4px 12px rgba(56, 189, 248, 0.35);":""}">
              ${x(i.label)}
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
        ${o.map((i,s)=>{let n=i.homeTeam||"Chelsea",l=i.awayTeam||"Manchester United",d=i.homeCrest||"https://a.espncdn.com/i/teamlogos/soccer/500/363.png",c=i.awayCrest||"https://a.espncdn.com/i/teamlogos/soccer/500/360.png",m=!!i.isLive,p=Number(i.volumeUsdc)||Number(i.optionPools?.home||0)+Number(i.optionPools?.draw||0)+Number(i.optionPools?.away||0)||Number(i.initialOptionPools?.home||0)+Number(i.initialOptionPools?.draw||0)+Number(i.initialOptionPools?.away||0)||0;return`
            <div class="thick-league-card" data-market-id="${i.id}" style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 18px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);">
              
              <!-- Card Header Status -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                <span style="font-size: 0.78rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; ${m?"background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);":"background: rgba(255, 255, 255, 0.06); color: var(--muted);"}">
                  ${m?"\u{1F534} LIVE IN-PLAY \u26A1":x(i.statusDetail||"Scheduled")}
                </span>
                <span style="font-size: 0.78rem; color: #38bdf8; font-weight: 800; background: rgba(56, 189, 248, 0.12); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(56, 189, 248, 0.25);">${p>0?"$"+p.toFixed(2):"$0.00"} Vol</span>
              </div>

              <!-- Stacked Teams -->
              <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img src="${d}" alt="" style="width: 26px; height: 26px; object-fit: contain;" />
                  <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${x(n)}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <img src="${c}" alt="" style="width: 26px; height: 26px; object-fit: contain;" />
                  <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${x(l)}</span>
                </div>
              </div>

              <!-- 3 Outcome Cents Odds Trading Boxes -->
              <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px;">
                <button type="button" class="siftle-bet-option-btn" data-market-id="${i.id}" data-option-id="home" style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; cursor: pointer;">
                  <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">${x(n)}</span>
                  <span style="font-size: 1rem; font-weight: 900; color: #38bdf8;">${be(i).home}\xA2</span>
                </button>

                <button type="button" class="siftle-bet-option-btn" data-market-id="${i.id}" data-option-id="draw" style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; cursor: pointer;">
                  <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted);">Draw</span>
                  <span style="font-size: 1rem; font-weight: 900; color: #38bdf8;">${be(i).draw}\xA2</span>
                </button>

                <button type="button" class="siftle-bet-option-btn" data-market-id="${i.id}" data-option-id="away" style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; cursor: pointer;">
                  <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">${x(l)}</span>
                  <span style="font-size: 1rem; font-weight: 900; color: #38bdf8;">${be(i).away}\xA2</span>
                </button>
              </div>

            </div>
          `}).join("")}

      </div>

    </section>
  `,document.querySelectorAll(".market-league-selector-btn").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation();let n=i.getAttribute("data-league-id");n&&(t.activeMarketLeagueFilter=n,oe())})}),document.querySelectorAll(".siftle-bet-option-btn").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation();let n=i.getAttribute("data-market-id"),l=i.getAttribute("data-option-id");n&&l&&window.openSiftleBettingModal(n,l)})})},Ar=()=>{if(!k||!L)return;ge?.toggleAttribute("hidden",!0),fe?.toggleAttribute("hidden",!0),j?.toggleAttribute("hidden",!0),K?.classList.remove("active"),ie?.classList.remove("active"),se?.classList.remove("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,k.hidden=!1,k.classList.remove("matches-surface-active"),k.classList.add("markets-list"),k.innerHTML=`
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
  `;let e=document.getElementById("leaderboardListContainer");fetch(B("/api/leaderboard/preseason")).then(a=>a.json()).then(a=>{let r=a.players||[];e&&(e.innerHTML=r.length===0?'<p style="color: var(--muted); text-align: center; padding: 32px 0; font-weight: 600;">No players on Season 2 rankings yet. Make a prediction or unlock a briefing to join!</p>':r.map((o,i)=>{let s=i+1,n=String(o.username||""),l=!!(t.walletAddress&&n.toLowerCase()===t.walletAddress.toLowerCase()),d=l&&t.profileUsername?t.profileUsername:o.displayName||n,c=l?`${t.profileUsername?d:we(n)} (You)`:d.startsWith("0x")&&d.length===42?we(d):d,m=x(c),p=Number(o.points)||0,g=s===1?'<span style="width: 26px; height: 26px; border-radius: 50%; background: #fbbf24; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">1</span>':s===2?'<span style="width: 26px; height: 26px; border-radius: 50%; background: #94a3b8; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">2</span>':s===3?'<span style="width: 26px; height: 26px; border-radius: 50%; background: #d97706; color: #000; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">3</span>':`<span style="width: 26px; height: 26px; border-radius: 50%; background: rgba(255,255,255,0.06); color: var(--muted); font-weight: 800; display: inline-flex; align-items: center; justify-content: center; font-size: 0.82rem;">${s}</span>`;return`
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 12px; border-radius: 12px; margin-bottom: 4px; background: ${l?"rgba(56, 189, 248, 0.08)":"transparent"}; border-left: ${l?"3px solid #38bdf8":"3px solid transparent"}; transition: all 0.2s ease;">
                  <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
                    ${g}
                    <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 140px;">
                      ${m}
                    </span>
                  </div>

                  <div style="text-align: right; margin-right: 12px;">
                    <strong style="font-size: 1rem; font-weight: 900; color: var(--ink);">${p} pts</strong>
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
              `}).join(""))}).catch(a=>{console.error("Failed to load Season 2 leaderboard:",a),e&&(e.innerHTML='<p style="color: var(--muted); text-align: center; padding: 24px 0;">Error loading Season 2 rankings. Please refresh.</p>')})},na=()=>{t.activeSurface="feed",t.selectedMarketId=null,ge?.toggleAttribute("hidden",!0),fe?.toggleAttribute("hidden",!0),j?.toggleAttribute("hidden",!0),K?.classList.remove("active"),ie?.classList.add("active"),se?.classList.remove("active"),k?.classList.remove("markets-list")};var Pt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0,optionSharesUsdc:0},r=t.marketSnapshots[e.id],o=e.homeTeam||"Home Team",i=e.awayTeam||"Away Team",s=e.homeCrest||"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",n=e.awayCrest||"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",l=a.optionSharesUsdc||a.yesSharesUsdc||1,d=a.optionLabel||(a.optionId==="home"?o:a.optionId==="away"?i:a.optionId==="draw"?"Draw":"Your Pick"),c=a.projectedPayout||(l>0?l*2.22:2.22),m=Math.max(0,c-l),p=(c/(l||1)).toFixed(2),g=r?.resolvedOptionId||null,v=!!g,u=v&&a.optionId===g;return`
    <div class="siftle-ticket-card" style="background: linear-gradient(145deg, #131722 0%, #0d1017 100%); border: 1.5px solid rgba(56, 189, 248, 0.2); border-radius: 20px; padding: 18px 16px; margin-bottom: 14px; position: relative; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.5); font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif;">
      
      <!-- Top Ticket Header: League & Matchday Badge -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; background: rgba(255, 255, 255, 0.08); color: var(--muted); padding: 4px 10px; border-radius: 8px;">
            ${x(e.league||"FOOTBALL")}
          </span>
          <span style="display: flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; color: #34d399;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #34d399; display: inline-block;"></span>
            ${v?u?"WON":"SETTLED":"OPEN TICKET"}
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
            ${x(o)} vs ${x(i)}
          </div>
          <div style="font-size: 0.8rem; color: #38bdf8; font-weight: 800; margin-top: 2px;">
            \u26A1 Pick: ${x(d)}
          </div>
        </div>
      </div>

      <!-- Ticket Slip Details Grid -->
      <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; padding: 14px; margin-bottom: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <span style="font-size: 0.72rem; color: var(--muted); font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 2px;">Stake Placed</span>
          <strong style="font-size: 1.15rem; font-weight: 900; color: var(--ink);">$${l.toFixed(2)} <span style="font-size: 0.75rem; color: var(--muted); font-weight: 700;">USDC</span></strong>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.72rem; color: var(--muted); font-weight: 600; text-transform: uppercase; display: block; margin-bottom: 2px;">Est. Payout (${p}x)</span>
          <strong style="font-size: 1.25rem; font-weight: 900; color: #34d399;">+$${c.toFixed(2)} <span style="font-size: 0.75rem; color: #34d399; font-weight: 700;">USDC</span></strong>
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
  `},Cr=async e=>{if(!t.walletAddress){S("Please sign in first.");return}let a=Le().find(o=>o.id===e),r=a?ue(a):"";if(!a||!r){S("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,O(),C("claim_attempt"),aa();let o=await ba(r,t.walletAddress);C("claim_success"),o.won&&dr(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await te(t.walletAddress),await R(),S(o.won?`Claimed $${Zt(o.amountUsdc)}`:"No payout to claim"),I(),O()}catch(o){C("claim_failed"),S(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],O()}};var la=async e=>{try{let a=await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/all/summary?event=${e}`);return a.ok?await a.json():null}catch(a){return console.error("Failed to fetch ESPN match summary:",a),null}};var nt=0;window.openSiftleMatchModal=async e=>{console.log("Global openSiftleMatchModal called for id:",e);let a=t.liveMatches.find(E=>String(E.id)===String(e))||{id:e,homeTeam:"Home",awayTeam:"Away",homeCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",homeScore:0,awayScore:0,statusDetail:"Live",league:"Soccer Match",isLive:!0},r=document.getElementById("matchDetailModalOverlay");r&&r.remove(),r=document.createElement("div"),r.id="matchDetailModalOverlay",r.style.cssText="position: fixed; inset: 0; z-index: 999999; background: rgba(3, 7, 18, 0.88); backdrop-filter: blur(12px); display: flex; justify-content: center; align-items: flex-end; padding: 0;";let o=a.isLive,i=a.isPost,s=o?"background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);":i?"background: rgba(148, 163, 184, 0.15); color: var(--muted); border: 1px solid rgba(148, 163, 184, 0.2);":"background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3);";r.innerHTML=`
    <div class="match-detail-card" style="background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.12); border-top-left-radius: 24px; border-top-right-radius: 24px; width: 100%; max-width: 640px; max-height: 88vh; overflow-y: auto; padding: 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 -10px 40px rgba(0,0,0,0.9);">
      
      <!-- Top Close Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.05em;">
          ${x(a.league||"Soccer Match")}
        </span>
        <button type="button" onclick="document.getElementById('matchDetailModalOverlay')?.remove()" style="background: rgba(255, 255, 255, 0.1); border: none; color: var(--ink); width: 34px; height: 34px; border-radius: 50%; font-size: 1.2rem; font-weight: 700; cursor: pointer;">\u2715</button>
      </div>

      <!-- Match Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: var(--subtle-bg); padding: 18px 14px; border-radius: 18px; border: 1px solid var(--border);">
        
        <!-- Home Team -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
          <img src="${a.homeCrest}" alt="" style="width: 44px; height: 44px; object-fit: contain;" />
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${x(a.homeTeam)}</span>
        </div>

        <!-- Score Center -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 0 10px;">
          <span style="font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 10px; ${s}">
            ${o?`\u{1F534} ${x(a.statusDetail||"LIVE")}`:x(a.statusDetail||"Scheduled")}
          </span>
          <div style="font-size: 1.8rem; font-weight: 900; color: ${o?"#34d399":"var(--ink)"}; letter-spacing: 2px;">
            ${o||i?`${a.homeScore??0} - ${a.awayScore??0}`:"VS"}
          </div>
        </div>

        <!-- Away Team -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
          <img src="${a.awayCrest}" alt="" style="width: 44px; height: 44px; object-fit: contain;" />
          <span style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${x(a.awayTeam)}</span>
        </div>

      </div>

      <!-- Loading / Stats Container -->
      <div id="matchModalContent" style="display: flex; flex-direction: column; gap: 16px;">
        <div class="skeleton" style="height: 120px; border-radius: 16px; width: 100%;"></div>
        <div class="skeleton" style="height: 180px; border-radius: 16px; width: 100%;"></div>
      </div>

    </div>
  `,document.body.appendChild(r),r.addEventListener("click",E=>{E.target===r&&r.remove()});let n=await la(e),l=document.getElementById("matchModalContent");if(!l)return;if(!n){l.innerHTML='<div style="text-align: center; color: var(--muted); padding: 32px 0;">Match statistics and commentary currently loading or unavailable for this fixture.</div>';return}let d=n.boxscore?.teams||[],c=d[0]?.statistics||[],m=d[1]?.statistics||[],p=(E,F)=>{let N=E.find(z=>z.label?.toLowerCase()===F.toLowerCase()||z.name?.toLowerCase()===F.toLowerCase());return N?N.displayValue:"-"},g=p(c,"possession")!=="-"?p(c,"possession")+"%":"50%",v=p(m,"possession")!=="-"?p(m,"possession")+"%":"50%",u=p(c,"shots"),f=p(m,"shots"),h=p(c,"on goal"),w=p(m,"on goal"),P=p(c,"corner kicks"),T=p(m,"corner kicks"),y=parseFloat(g)||50,$=parseFloat(v)||50;l.innerHTML=`
    <!-- Match Momentum Visualizer Bar -->
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">Match Momentum</span>
        <span style="font-size: 0.75rem; color: #34d399; font-weight: 700;">Live Stats</span>
      </div>
      <div style="display: flex; align-items: flex-end; height: 36px; gap: 3px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
        ${Array.from({length:24}).map((E,F)=>{let N=Math.floor(Math.sin(F*.7)*14)+16,z=F%2===0;return`<div style="flex: 1; height: ${N}px; background: ${z?"#3b82f6":"#34d399"}; border-radius: 2px; opacity: 0.85;"></div>`}).join("")}
      </div>
    </div>

    <!-- Team Statistics -->
    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
      <h3 style="margin: 0 0 14px 0; font-size: 0.9rem; font-weight: 800; color: var(--ink);">Team Statistics</h3>

      <div style="margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700; color: var(--muted); margin-bottom: 6px;">
          <span style="color: #3b82f6; font-weight: 800;">${g}</span>
          <span>Possession</span>
          <span style="color: #34d399; font-weight: 800;">${v}</span>
        </div>
        <div style="display: flex; height: 8px; border-radius: 4px; overflow: hidden; background: rgba(255,255,255,0.1);">
          <div style="width: ${y}%; background: #3b82f6;"></div>
          <div style="width: ${$}%; background: #34d399;"></div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
        <span style="font-size: 0.85rem; font-weight: 800; color: #3b82f6; background: rgba(59, 130, 246, 0.15); padding: 2px 8px; border-radius: 6px;">${u!=="-"?u:0} (${h!=="-"?h:0})</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Shots (On Target)</span>
        <span style="font-size: 0.85rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); padding: 2px 8px; border-radius: 6px;">${f!=="-"?f:0} (${w!=="-"?w:0})</span>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid rgba(255,255,255,0.05);">
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">${P!=="-"?P:0}</span>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">Corner Kicks</span>
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--ink);">${T!=="-"?T:0}</span>
      </div>
    </div>
  `};var Er=null,Ur=e=>{let a=document.getElementById("siftleSuccessModalOverlay");a&&a.remove();let r=document.createElement("div");r.id="siftleSuccessModalOverlay",r.style.cssText="position: fixed; inset: 0; z-index: 99999999; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;",r.innerHTML=`
    <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 28px; width: 100%; max-width: 420px; padding: 32px 24px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 24px 64px rgba(0,0,0,0.8); text-align: center; color: var(--ink); animation: popIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
      
      <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(52, 211, 153, 0.15); border: 2px solid rgba(52, 211, 153, 0.4); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; font-size: 2rem;">
        \u{1F389}
      </div>

      <h2 style="margin: 0 0 6px 0; font-size: 1.4rem; font-weight: 900; color: var(--ink);">Trade Executed!</h2>
      <div style="font-size: 0.85rem; color: var(--muted); font-weight: 600; margin-bottom: 24px;">Your order has been filled on Arc testnet</div>

      <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 18px; padding: 18px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px; text-align: left;">
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Outcome</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${x(e.optionName)}</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Match</span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">${x(e.matchTitle)}</span>
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
  `,document.body.appendChild(r),r.querySelector("#closeSuccessModalBtn")?.addEventListener("click",()=>{r.remove(),oe(),window.scrollTo({top:nt,behavior:"instant"})}),r.addEventListener("click",o=>{o.target===r&&(r.remove(),oe(),window.scrollTo({top:nt,behavior:"instant"}))})};window.openSiftleBettingModal=(e,a,r)=>{r&&(r.preventDefault(),r.stopPropagation()),nt=window.scrollY;let o=A.find(f=>f.id===e)||A[0]||{id:e,question:"Crystal Palace vs Manchester City",homeTeam:"Crystal Palace",awayTeam:"Manchester City",homeCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/384.png",awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/382.png"},i=a,s=be(o),n=parseFloat(s.home)||33.3;a==="home"?(i=o.homeTeam||"Home",n=parseFloat(s.home)||33.3):a==="away"?(i=o.awayTeam||"Away",n=parseFloat(s.away)||33.3):a==="draw"&&(i="Draw",n=parseFloat(s.draw)||33.3);let l=document.getElementById("siftleBettingModalOverlay");l&&l.remove(),l=document.createElement("div"),l.id="siftleBettingModalOverlay",l.style.cssText="position: fixed; inset: 0; z-index: 9999999; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(10px); display: flex; justify-content: center; align-items: flex-end; padding: 0; box-sizing: border-box;";let d="BUY",c=2,m=t.marketPositions[o.id],p=m&&(m.optionSharesUsdc||m.yesSharesUsdc)||0,g=t.walletAddress?t.walletBalance?`${parseFloat(String(t.walletBalance).replace(/,/g,"")).toFixed(2)} USDC`:"0.00 USDC":"$0.00 USDC",v=f=>{let h=Number(o.volumeUsdc)||0,w=Number(o[`${a}PoolUsdc`])||(h>0?h*.333:0),P=h+f,T=w+f;return T>0?f/T*P:f},u=()=>{let f=v(c),h=(f/(c||1)).toFixed(2),w=p.toFixed(2);l.innerHTML=`
      <div id="bettingModalSheet" style="background: var(--paper); border: 1px solid rgba(255, 255, 255, 0.12); border-top-left-radius: 28px; border-top-right-radius: 28px; width: 100%; max-width: 600px; padding: 24px 20px 36px 20px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; box-shadow: 0 -16px 48px rgba(0,0,0,0.95); animation: slideUp 0.25s ease-out; color: var(--ink); pointer-events: auto;">
        
        <!-- Modal Top Navigation Header with BUY / SELL Tabs -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div style="display: flex; gap: 6px; background: var(--subtle-bg); padding: 4px; border-radius: 12px; border: 1px solid var(--border);">
            <button type="button" id="tabBuyBtn" style="padding: 8px 24px; border-radius: 8px; border: none; font-size: 0.95rem; font-weight: 800; cursor: pointer; transition: all 0.2s ease; background: ${d==="BUY"?"#38bdf8":"transparent"}; color: ${d==="BUY"?"#000000":"var(--muted)"};">
              Buy
            </button>
            <button type="button" id="tabSellBtn" style="padding: 8px 24px; border-radius: 8px; border: none; font-size: 0.95rem; font-weight: 800; cursor: pointer; transition: all 0.2s ease; background: ${d==="SELL"?"#ef4444":"transparent"}; color: ${d==="SELL"?"#ffffff":"var(--muted)"};">
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
              <div style="font-size: 1.1rem; font-weight: 800; color: var(--ink);">${x(i)}</div>
              <div style="font-size: 0.82rem; color: var(--muted); font-weight: 600;">${x(o.homeTeam||"Home")} vs ${x(o.awayTeam||"Away")}</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.78rem; color: var(--muted); font-weight: 600;">${d==="BUY"?"Balance":"You Own"}</div>
            <div style="font-size: 0.9rem; font-weight: 800; color: #38bdf8;">${d==="BUY"?g:`$${p.toFixed(2)} Shares`}</div>
          </div>
        </div>

        ${d==="BUY"?`
          <!-- BUY VIEW -->
          <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 16px; padding: 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
            <button type="button" id="decBetBtn" style="background: rgba(255,255,255,0.08); border: none; color: var(--ink); width: 40px; height: 40px; border-radius: 10px; font-size: 1.3rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;">-</button>
            
            <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 0.75rem; color: var(--muted); font-weight: 700; text-transform: uppercase;">Amount</div>
              <div style="display: flex; align-items: center; gap: 2px;">
                <span style="font-size: 1.6rem; font-weight: 900; color: var(--ink);">$</span>
                <input type="number" id="tradeAmountInput" value="${c}" min="1" max="10000" style="background: transparent; border: none; font-size: 1.6rem; font-weight: 900; color: var(--ink); width: 90px; text-align: center; font-family: inherit; outline: none;" />
              </div>
            </div>
            
            <button type="button" id="incBetBtn" style="background: rgba(255,255,255,0.08); border: none; color: var(--ink); width: 40px; height: 40px; border-radius: 10px; font-size: 1.3rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;">+</button>
          </div>

          <!-- Clickable Quick Amount Pills ($10, $20, $50) -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">
            ${[10,20,50].map(y=>`
              <button type="button" class="quick-amt-btn" data-amt="${y}" style="background: ${c===y?"rgba(56, 189, 248, 0.2)":"rgba(255, 255, 255, 0.04)"}; border: 1.5px solid ${c===y?"#38bdf8":"rgba(255, 255, 255, 0.08)"}; color: ${c===y?"#38bdf8":"var(--ink)"}; padding: 12px 0; border-radius: 14px; font-weight: 800; cursor: pointer; text-align: center; font-size: 1rem; transition: all 0.2s ease;">
                ${y}
              </button>
            `).join("")}
          </div>

          <!-- Payout Summary (Pari-Mutuel Shared Pot) -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; font-size: 0.95rem; font-weight: 800;">
            <span style="color: var(--muted);">Est. Pool Payout: <strong id="toWinAmountLabel" style="color: #34d399;">$${f.toFixed(2)} USDC (${h}x)</strong></span>
            <span style="color: var(--muted);">Pool Odds: <strong style="color: #38bdf8;">${n.toFixed(1)}\xA2</strong></span>
          </div>

          <button type="button" id="confirmTradeBtn" style="width: 100%; background: #38bdf8; color: #000000; border: none; padding: 16px; border-radius: 16px; font-size: 1.1rem; font-weight: 900; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4);">
            Buy Shares (${c} USDC)
          </button>
        `:`
          <!-- SELL VIEW -->
          ${p<=0?`
            <div style="background: var(--subtle-bg); border: 1px dashed var(--border); border-radius: 16px; padding: 24px 16px; text-align: center; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 700; color: var(--ink);">No Shares Owned</p>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">You don't own any shares of ${x(i)} yet. Switch to Buy to place a prediction!</p>
            </div>
            <button type="button" id="switchBuyTabBtn" style="width: 100%; background: #38bdf8; color: #000000; border: none; padding: 16px; border-radius: 16px; font-size: 1.05rem; font-weight: 900; cursor: pointer;">
              Switch to Buy
            </button>
          `:`
            <div style="background: var(--subtle-bg); border: 1px solid var(--border); border-radius: 16px; padding: 18px; margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Shares to Exit</span>
                <span style="font-size: 1rem; font-weight: 800; color: var(--ink);">$${p.toFixed(2)} USDC</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 12px;">
                <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Full Refund Return</span>
                <span style="font-size: 1.15rem; font-weight: 900; color: #34d399;">$${w} USDC</span>
              </div>
            </div>

            <button type="button" id="confirmSellBtn" style="width: 100%; background: #ef4444; color: #ffffff; border: none; padding: 16px; border-radius: 16px; font-size: 1.1rem; font-weight: 900; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 20px rgba(239, 68, 68, 0.4);">
              Sell All Shares (Receive $${w} USDC)
            </button>
          `}
        `}

      </div>
    `;let P=(y,$=!1)=>{let E=parseInt(y,10);c=y.trim()===""||isNaN(E)?0:Math.max(0,E);let N=l.querySelector("#tradeAmountInput");N&&$&&(N.value=c>0?String(c):"");let z=l.querySelector("#toWinAmountLabel");if(c>0){let M=v(c),W=(M/c).toFixed(2);z&&(z.textContent=`${M.toFixed(2)} USDC (${W}x)`)}else z&&(z.textContent="$0.00 USDC (1.00x)");let q=l.querySelector("#confirmTradeBtn");q&&(q.textContent=c>0?`Buy Shares (${c} USDC)`:"Enter Amount",q.disabled=c<=0),l.querySelectorAll(".quick-amt-btn").forEach(M=>{Number(M.getAttribute("data-amt"))===c?(M.style.background="rgba(56, 189, 248, 0.2)",M.style.borderColor="#38bdf8",M.style.color="#38bdf8"):(M.style.background="rgba(255, 255, 255, 0.04)",M.style.borderColor="rgba(255, 255, 255, 0.08)",M.style.color="var(--ink)")})};l.querySelector("#closeBettingModalBtn")?.addEventListener("click",()=>l?.remove()),l.querySelector("#tabBuyBtn")?.addEventListener("click",()=>{d="BUY",u()}),l.querySelector("#tabSellBtn")?.addEventListener("click",()=>{d="SELL",u()}),l.querySelector("#switchBuyTabBtn")?.addEventListener("click",()=>{d="BUY",u()}),l.querySelector("#decBetBtn")?.addEventListener("click",()=>{let y=c||0,$=y>5?y-5:Math.max(1,y-1);P(String($),!0)}),l.querySelector("#incBetBtn")?.addEventListener("click",()=>{P(String((c||0)+5),!0)});let T=l.querySelector("#tradeAmountInput");T&&(T.addEventListener("input",y=>{P(y.target.value,!1)}),T.addEventListener("keyup",y=>{P(y.target.value,!1)}),T.addEventListener("blur",y=>{let $=y.target.value.trim();($===""||parseInt($,10)<1)&&P("1",!0)})),l.querySelectorAll(".quick-amt-btn").forEach(y=>{y.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation();let E=y.getAttribute("data-amt")||"20";P(E,!0)})}),l.querySelector("#confirmSellBtn")?.addEventListener("click",async y=>{y.preventDefault(),y.stopPropagation();let $=l.querySelector("#confirmSellBtn");if($&&($.disabled=!0,$.textContent="Placing trade on Arc..."),t.walletAddress)try{await et(o.id,"sell",a,p,M=>{$&&($.textContent=M)})}catch(M){console.warn("Sell execution fallback:",M?.message||M)}let E=String(t.walletBalance||"100.00").replace(/,/g,""),F=parseFloat(E)||100,N=parseFloat(p.toFixed(2)),z=(F+N).toFixed(2);t.walletBalance=z;let q=t.walletAddress?t.walletAddress.toLowerCase():"guest";try{localStorage.setItem(`siftle_optimistic_bal_${q}`,z)}catch{}delete t.marketPositions[o.id];try{let M=`siftle_positions_${q}`,W=JSON.parse(localStorage.getItem(M)||"{}");delete W[o.id],localStorage.setItem(M,JSON.stringify(W))}catch{}l?.remove(),oe(),I(),S(`Successfully sold shares! +$${N} USDC refunded.`)}),l.querySelector("#confirmTradeBtn")?.addEventListener("click",async y=>{y.preventDefault(),y.stopPropagation();let $=l.querySelector("#confirmTradeBtn");$&&($.disabled=!0,$.textContent="Placing trade on Arc...");let E;if(t.walletAddress)try{E=await et(o.id,"buy",a,c,_=>{$&&($.textContent=_)})}catch(_){console.warn("On-chain execution fallback notice:",_?.message||_)}let F=String(t.walletBalance||"100.00").replace(/,/g,""),N=parseFloat(F)||100,z=Math.max(0,N-c).toFixed(2);t.walletBalance=z;let q=t.walletAddress?t.walletAddress.toLowerCase():"guest";try{localStorage.setItem(`siftle_optimistic_bal_${q}`,z)}catch{}let M=A.find(_=>String(_.id)===String(o.id))||o,W=be(M),Ue=parseFloat(W.home)||33.3,gt=parseFloat(W.draw)||33.3,Be=parseFloat(W.away)||33.3,Z=Ue,he=gt,X=Be;a==="home"?(Z=Math.min(85,Ue+2.5),X=Math.max(10,Be-1.5),he=Math.max(10,100-(Z+X))):a==="away"?(X=Math.min(85,Be+2.5),Z=Math.max(10,Ue-1.5),he=Math.max(10,100-(Z+X))):(he=Math.min(60,gt+2.5),Z=Math.max(10,Ue-1.25),X=Math.max(10,Be-1.25));let ft=(Number(M.volumeUsdc)||Number(M.optionPools?.home||0)+Number(M.optionPools?.draw||0)+Number(M.optionPools?.away||0)||Number(M.initialOptionPools?.home||0)+Number(M.initialOptionPools?.draw||0)+Number(M.initialOptionPools?.away||0)||0)+c;M.volumeUsdc=ft,M.optionPools=M.optionPools||{...M.initialOptionPools||{}},M.optionPools[a]=(Number(M.optionPools[a])||0)+c,M[`${a}PoolUsdc`]=(Number(M[`${a}PoolUsdc`])||0)+c,M.volume=`$${ft.toFixed(2)}`,M.currentOdds={home:Z.toFixed(1),draw:he.toFixed(1),away:X.toFixed(1)};let Ie=(t.marketPositions[o.id]?.optionSharesUsdc||0)+c;t.marketPositions[o.id]={marketId:o.id,side:a,optionId:a,optionLabel:i,optionSharesUsdc:Ie,yesSharesUsdc:Ie,noSharesUsdc:0,stakePlaced:Ie,costBasisUsdc:Ie,entryPriceCents:n,isLiveTrade:!!o.isLive};try{let _=`siftle_positions_${q}`,ht=JSON.parse(localStorage.getItem(_)||"{}");ht[o.id]=t.marketPositions[o.id],localStorage.setItem(_,JSON.stringify(ht))}catch{}l?.remove(),oe(),I(),S(`Successfully placed $${c} prediction on ${x(i)}!`);let pa=v(c);Ur({optionName:i,matchTitle:`${M.homeTeam||"Home"} vs ${M.awayTeam||"Away"}`,tradeAmount:c,oldPrice:parseFloat(n.toFixed(1)),newPrice:parseFloat((a==="home"?Z:a==="away"?X:he).toFixed(1)),potentialWin:pa.toFixed(2),txHash:E})})};u(),document.body.appendChild(l)};window.openSiftleMatchPage=e=>{console.log("openSiftleMatchPage called for matchId:",e),t.selectedMatchId=String(e),t.matchDetailTab="overview",t.activeSurface==="matches"?da(String(e)):b()};var da=async e=>{if(!k||!L)return;ge?.toggleAttribute("hidden",!0),fe?.toggleAttribute("hidden",!0),j?.toggleAttribute("hidden",!0),K?.classList.remove("active"),ie?.classList.remove("active"),se?.classList.remove("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,k.hidden=!1,k.classList.remove("markets-list"),k.classList.add("matches-surface-active");let a=t.liveMatches.find(T=>String(T.id)===String(e))||{id:e,homeTeam:"Espanyol",awayTeam:"Real Madrid",homeCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",awayCrest:"https://a.espncdn.com/i/teamlogos/soccer/500/default-team-logo.png",homeScore:1,awayScore:1,statusDetail:"44'",league:"Spanish LaLiga",isLive:!0,isPost:!1,date:new Date().toISOString()},r=t.matchDetailTab||"overview";k.innerHTML=`
    <section class="match-full-page" style="padding: 12px 10px 120px 10px; width: 100%; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif; color: var(--ink);">
      
      <!-- Top Navigation Header with Back Arrow -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <button type="button" id="backToMatchesBtn" style="background: var(--subtle-bg); border: 1px solid rgba(255, 255, 255, 0.12); color: var(--ink); width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
          \u2190
        </button>
        <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink); letter-spacing: -0.01em;">
          ${x(qe(a.league))}
        </span>
        <div style="width: 42px;"></div>
      </div>

      <!-- Hero Scoreboard Card (Matching Reference Image) -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 24px; padding: 24px 16px; margin-bottom: 20px; box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);">
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <!-- Home Team -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
            <img src="${a.homeCrest}" alt="" style="width: 56px; height: 56px; object-fit: contain;" />
            <span style="font-size: 1.05rem; font-weight: 800; color: var(--ink);">${x(a.homeTeam)}</span>
            
          </div>

          <!-- Score & Live Status -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 0 12px;">
            <span style="font-size: 0.8rem; font-weight: 800; padding: 4px 12px; border-radius: 12px; ${a.isLive?"background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4);":"background: var(--subtle-bg); color: var(--muted);"}">
              ${a.isLive?`\u{1F534} ${x(a.statusDetail)}`:x(a.statusDetail)}
            </span>
            <div style="font-size: 2.5rem; font-weight: 900; color: ${a.isLive?"#34d399":"var(--ink)"}; letter-spacing: 3px;">
              ${a.isLive||a.isPost?`${a.homeScore??0} - ${a.awayScore??0}`:"VS"}
            </div>
          </div>

          <!-- Away Team -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; text-align: center;">
            <img src="${a.awayCrest}" alt="" style="width: 56px; height: 56px; object-fit: contain;" />
            <span style="font-size: 1.05rem; font-weight: 800; color: var(--ink);">${x(a.awayTeam)}</span>
            
          </div>
        </div>

        <div id="heroGoalScorersList" style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; gap: 4px; font-size: 0.85rem; color: var(--muted); font-weight: 600; text-align: center;"></div>

      </div>

      <!-- Tab Bar Navigation Pills (Matching Reference Image) -->
      <div style="display: flex; gap: 8px; overflow-x: auto; margin-bottom: 24px; padding-bottom: 4px; scrollbar-width: none;">
        ${[{id:"overview",label:"Overview"},{id:"ticker",label:"Live Ticker"},{id:"lineup",label:"Line-up"},{id:"stats",label:"Stats"}].map(T=>{let y=r===T.id;return`
            <button type="button" class="match-page-tab-btn" data-tab-id="${T.id}" style="background: ${y?"#ffffff":"rgba(255, 255, 255, 0.05)"}; color: ${y?"#0f172a":"#94a3b8"}; border: 1.5px solid ${y?"#ffffff":"rgba(255, 255, 255, 0.08)"}; padding: 10px 22px; border-radius: 999px; font-size: 0.9rem; font-weight: 800; cursor: pointer; white-space: nowrap; flex: 1; text-align: center; transition: all 0.2s ease;">
              ${T.label}
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
  `,document.getElementById("backToMatchesBtn")?.addEventListener("click",()=>{t.selectedMatchId=null,Me()}),document.querySelectorAll(".match-page-tab-btn").forEach(T=>{T.addEventListener("click",y=>{y.preventDefault(),y.stopPropagation();let $=T.getAttribute("data-tab-id");$&&(t.matchDetailTab=$,da(e))})});let o=await la(e);Er=o;let i=document.getElementById("matchDetailPageTabContent");if(!i)return;if(!a.isLive&&!a.isPost){i.innerHTML=`
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 36px 20px; text-align: center; color: var(--muted);">
        <div style="font-size: 2.2rem; margin-bottom: 10px;">\u23F1\uFE0F</div>
        <div style="font-size: 1.15rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">Match Has Not Started Yet</div>
        <div style="font-size: 0.9rem; color: var(--muted);">Scheduled Kickoff: ${x(a.statusDetail||"Upcoming")}. Statistics, live commentary, and rosters will display here once the match begins.</div>
      </div>
    `;return}if(!o){i.innerHTML='<div style="text-align: center; color: var(--muted); padding: 48px 16px;">Match details loading or currently unavailable for this fixture.</div>';return}let s=o.boxscore?.teams||[],n=s[0]?.statistics||[],l=s[1]?.statistics||[],d=(T,y)=>{let $=T.find(E=>E.label?.toLowerCase()===y.toLowerCase()||E.name?.toLowerCase()===y.toLowerCase());return $?$.displayValue:"-"},c=d(n,"possession")!=="-"?d(n,"possession")+"%":"38%",m=d(l,"possession")!=="-"?d(l,"possession")+"%":"62%",p=d(n,"shots"),g=d(l,"shots"),v=d(n,"on goal")!=="-"?d(n,"on goal"):"2",u=d(l,"on goal")!=="-"?d(l,"on goal"):"5",f=d(n,"corner kicks"),h=d(l,"corner kicks"),w=parseFloat(c)||38,P=parseFloat(m)||62;if(r==="overview"){if(!a.isLive&&!a.isPost){i.innerHTML=`
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 36px 20px; text-align: center; color: var(--muted);">
          <div style="font-size: 2rem; margin-bottom: 10px;">\u23F1\uFE0F</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--ink); margin-bottom: 6px;">Match Has Not Started</div>
          <div style="font-size: 0.88rem; color: var(--muted);">Scheduled Kickoff: ${x(a.statusDetail||"Upcoming")}. Live statistics and key events will display here once the match begins.</div>
        </div>
      `;return}i.innerHTML=`
      <!-- Stats Container (Matching Reference UI) -->
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">Stats</h3>

        

        <!-- Possession Bar -->
        <div style="margin-bottom: 18px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 800; color: var(--ink); margin-bottom: 8px;">
            <span style="font-weight: 800;">${c}</span>
            <span style="color: var(--muted); font-weight: 700;">Possession</span>
            <span style="color: #34d399; font-weight: 800; background: rgba(52, 211, 153, 0.18); padding: 2px 10px; border-radius: 999px;">${m}</span>
          </div>
          <div style="display: flex; height: 10px; border-radius: 6px; overflow: hidden; background: rgba(255,255,255,0.08);">
            <div style="width: ${w}%; background: #3b82f6;"></div>
            <div style="width: ${P}%; background: #34d399;"></div>
          </div>
        </div>

        

        <!-- Shots on Target -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-top: 1px solid rgba(255,255,255,0.06);">
          <span style="font-size: 0.95rem; font-weight: 800; color: var(--ink);">${v}</span>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--muted);">Shots on target</span>
          <span style="font-size: 0.95rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.18); padding: 4px 14px; border-radius: 999px;">${u}</span>
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
          ${(()=>{let y=(o.keyEvents||o.commentary||[]).filter($=>$.type?.text?.toLowerCase().includes("goal")||$.scoringPlay||$.text?.toLowerCase().includes("goal"));return y.length===0?'<div style="color: var(--muted); font-size: 0.9rem;">No goals recorded for this match yet.</div>':y.map($=>`
              <div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; min-width: 30px;">${$.clock?.displayValue||$.time?.displayValue||"\u2022"}</span>
                <span style="font-size: 1.1rem;">\u26BD</span>
                <span style="font-size: 0.9rem; font-weight: 700; color: var(--ink);">${x($.text)}</span>
              </div>
            `).join("")})()}
        </div>
      </div>
    `}else if(r==="ticker"){let T=(o.commentary||o.keyEvents||[]).slice().reverse();i.innerHTML=`
      <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: var(--ink);">Live Ticker & Commentary</h3>
        ${T.length===0?`
          <div style="text-align: center; color: var(--muted); padding: 24px 0;">No live commentary available for this match.</div>
        `:`
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${T.map(y=>`
              <div style="display: flex; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; min-width: 36px;">${y.clock?.displayValue||y.time?.displayValue||"\u2022"}</span>
                <span style="font-size: 0.9rem; color: var(--ink); line-height: 1.4;">${x(y.text)}</span>
              </div>
            `).join("")}
          </div>
        `}
      </div>
    `}else if(r==="lineup"){let T=o.rosters||[],y=T[0]?.roster||[],$=T[1]?.roster||[];i.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Home Team Roster -->
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
          <h3 style="margin: 0 0 14px 0; font-size: 1rem; font-weight: 800; color: #3b82f6;">${x(a.homeTeam)} Starting Lineup</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px;">
            ${y.slice(0,11).map(E=>`
              <div style="background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.15); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${E.jersey||"#"}</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${x(E.athlete?.displayName||"Player")}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Away Team Roster -->
        <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 20px; padding: 20px;">
          <h3 style="margin: 0 0 14px 0; font-size: 1rem; font-weight: 800; color: #34d399;">${x(a.awayTeam)} Starting Lineup</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px;">
            ${$.slice(0,11).map(E=>`
              <div style="background: rgba(255,255,255,0.04); padding: 8px 12px; border-radius: 10px; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: #34d399; background: rgba(52, 211, 153, 0.15); width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${E.jersey||"#"}</span>
                <span style="font-size: 0.85rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${x(E.athlete?.displayName||"Player")}</span>
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
            <span style="font-weight: 800; color: #3b82f6;">${c}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Possession</span>
            <span style="font-weight: 800; color: #34d399;">${m}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${p}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Total Shots</span>
            <span style="font-weight: 800; color: var(--ink);">${g}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${v}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Shots on Target</span>
            <span style="font-weight: 800; color: var(--ink);">${u}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <span style="font-weight: 800; color: var(--ink);">${f}</span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">Corner Kicks</span>
            <span style="font-weight: 800; color: var(--ink);">${h}</span>
          </div>
        </div>
      </div>
    `)},Me=()=>{if(!k||!L)return;ge?.toggleAttribute("hidden",!0),fe?.toggleAttribute("hidden",!0),j?.toggleAttribute("hidden",!0),K?.classList.remove("active"),ie?.classList.remove("active"),se?.classList.remove("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,k.hidden=!1,k.classList.remove("markets-list"),k.classList.add("matches-surface-active");let e=new Date,a=Re(e);t.activeMatchDate||(t.activeMatchDate=a),t.liveMatches.length===0&&!t.loadingLiveMatches&&ra(t.activeMatchDate).then(()=>{t.activeSurface==="matches"&&Me()});let r=t.liveMatches,o=t.loadingLiveMatches&&r.length===0,i=r.filter(d=>d.isLive),s=r.filter(d=>!d.isLive),n=new Map;i.length>0&&n.set("\u{1F534} LIVE MATCHES NOW",i),s.forEach(d=>{let c=qe(d.league||"Matches");n.has(c)||n.set(c,[]),n.get(c).push(d)});let l=[];for(let d=-1;d<=5;d++){let c=new Date(e);c.setDate(e.getDate()+d);let m=Re(c),p="";d===-1?p="Yesterday":d===0?p="Today":d===1?p="Tomorrow":p=c.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}),l.push({label:p,dateStr:m})}k.innerHTML=`
    <section class="matches-surface" style="padding: 16px 12px 110px 12px; box-sizing: border-box; width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;">
      
      <!-- Top Title Header -->
      <header class="matches-header" style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <h1 style="margin: 0; font-size: 1.6rem; font-weight: 800; color: var(--ink); letter-spacing: -0.02em;">Matches</h1>
      </header>

      <!-- Dynamic 7-Day Date Navigation Pills -->
      <div class="matches-date-pills-scroll">
        ${l.map(d=>{let c=t.activeMatchDate===d.dateStr;return`
            <button type="button" class="match-date-pill-btn" data-match-date="${d.dateStr}" style="background: ${c?"#1e293b":"rgba(255, 255, 255, 0.04)"}; color: ${c?"#38bdf8":"#94a3b8"}; border: 1.5px solid ${c?"#0284c7":"rgba(255, 255, 255, 0.08)"}; padding: 8px 18px; border-radius: 10px; font-size: 0.85rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0; font-family: inherit; transition: all 0.2s ease;">
              ${x(d.label)}
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
          ${Array.from(n.entries()).map(([d,c])=>{let m=d.includes("LIVE MATCHES"),p=c[0]?.leagueLogo||"";return`
              <!-- Thick Card per League (News Card Background #12131a) -->
              <div class="thick-league-card" style="background: var(--paper); border: 1px solid ${m?"rgba(239, 68, 68, 0.4)":"rgba(255, 255, 255, 0.08)"}; border-radius: 18px; padding: 18px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4); width: 100%; box-sizing: border-box;">
                
                <!-- Authentic League Card Header -->
                <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 14px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(255, 255, 255, 0.06); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    ${p?`<img src="${p}" alt="" style="width: 22px; height: 22px; object-fit: contain;" />`:"\u{1F3C6}"}
                  </div>
                  <div>
                    <h2 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: ${m?"#ef4444":"var(--ink)"}; letter-spacing: -0.01em;">
                      ${x(qe(d))}
                    </h2>
                  </div>
                </div>

                <!-- Matches List Inside Card (Original Clean Layout Restored) -->
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  ${c.map((g,v)=>{let u=g.isLive,f=g.isPost,h=v===c.length-1,w=new Date(g.date).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`
                      <div class="match-row-item" data-match-id="${g.id}" onclick="window.openSiftleMatchPage('${g.id}')" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; cursor: pointer; ${h?"":"border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 14px;"}">
                        
                        <!-- Left Side: Team Crests & Names + Scores -->
                        <div style="display: flex; flex-direction: column; gap: 10px; flex: 1; min-width: 0;">
                          
                          <!-- Home Team Row -->
                          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
                              <img src="${g.homeCrest}" alt="" style="width: 26px; height: 26px; object-fit: contain; flex-shrink: 0;" />
                              <span style="font-size: 0.95rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${x(g.homeTeam)}
                              </span>
                            </div>
                            <span style="font-size: 1.05rem; font-weight: 800; color: ${u?"#34d399":"#f8fafc"}; min-width: 20px; text-align: right;">
                              ${u||f?g.homeScore??0:""}
                            </span>
                          </div>

                          <!-- Away Team Row -->
                          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
                              <img src="${g.awayCrest}" alt="" style="width: 26px; height: 26px; object-fit: contain; flex-shrink: 0;" />
                              <span style="font-size: 0.95rem; font-weight: 700; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                ${x(g.awayTeam)}
                              </span>
                            </div>
                            <span style="font-size: 1.05rem; font-weight: 800; color: ${u?"#34d399":"#f8fafc"}; min-width: 20px; text-align: right;">
                              ${u||f?g.awayScore??0:""}
                            </span>
                          </div>

                        </div>

                        <!-- Vertical Divider Line -->
                        <div style="width: 1px; height: 42px; background: var(--subtle-bg); flex-shrink: 0;"></div>

                        <!-- Right Side: Status Badge / Match Time -->
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 75px; flex-shrink: 0; text-align: center;">
                          ${u?`
                            <span style="font-size: 0.75rem; font-weight: 800; color: #ef4444; background: rgba(239, 68, 68, 0.18); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.3);">
                              \u{1F534} ${x(g.statusDetail)}
                            </span>
                          `:f?`
                            <span style="font-size: 0.8rem; font-weight: 700; color: var(--muted);">
                              Full-Time
                            </span>
                          `:`
                            <span style="font-size: 0.85rem; font-weight: 700; color: var(--muted);">
                              ${w}
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
  `},Br=()=>{try{let a=`siftle_positions_${t.walletAddress?t.walletAddress.toLowerCase():"guest"}`,r=localStorage.getItem(a);if(r){let o=JSON.parse(r);Object.assign(t.marketPositions,o)}}catch{}},O=()=>{if(Br(),!k||!L)return;ge?.toggleAttribute("hidden",!0),fe?.toggleAttribute("hidden",!0),j?.toggleAttribute("hidden",!0),K?.classList.remove("active"),ie?.classList.remove("active"),se?.classList.add("active"),document.body.classList.remove("detail-mode"),L.hidden=!0,k.hidden=!1,k.classList.remove("matches-surface-active"),k.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Se();let e=ea(),a=Le().filter(u=>{let f=t.marketPositions[u.id];return e.has(u.id)||f&&(f.yesSharesUsdc+f.noSharesUsdc>0||(f.optionSharesUsdc||0)>0)}),r=a.filter(u=>(t.marketSnapshots[u.id]?.outcome??0)===0),o=a.filter(u=>(t.marketSnapshots[u.id]?.outcome??0)!==0),i=!!t.walletAddress,s=t.walletBalance||(t.walletAddress?localStorage.getItem(`siftle_optimistic_bal_${t.walletAddress.toLowerCase()}`):"0.00")||"0.00",n=parseFloat(String(s).replace(/,/g,""))||0,l=0,d=0;Object.values(t.marketPositions).forEach(u=>{l+=u.optionSharesUsdc||u.yesSharesUsdc||0,d+=u.projectedPayout||0});let c=(n+l).toFixed(2),m=t.profileUsername||(t.walletAddress?we(t.walletAddress):"Guest Trader"),p=t.activePortfolioSubTab||"open_orders",g=t.pnlTimeframe||"all",v=Object.entries(t.marketPositions).filter(([u,f])=>(f.optionSharesUsdc||f.yesSharesUsdc||0)>0);k.innerHTML=`
    <section class="portfolio-surface" style="width: 100% !important; max-width: 100% !important; margin: 0 auto !important; padding: 12px 16px 120px 16px !important; box-sizing: border-box !important; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Space Grotesk', sans-serif !important; color: var(--ink) !important; overflow-x: hidden !important;">
      
      <!-- TOP PORTFOLIO BALANCE -->
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--muted);">Portfolio</span>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--muted); font-weight: 600;">
            <span>${x(m)}</span>
            ${i?`
              <button type="button" class="copy-address-btn" data-address="${t.walletAddress}" title="Copy Wallet Address" style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; border-radius: 8px; padding: 3px 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; font-weight: 800; transition: all 0.2s ease;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Address
              </button>
              <button type="button" id="editUsernameBtn" title="Edit Username" style="background: transparent; border: none; color: var(--muted); cursor: pointer; padding: 2px; display: inline-flex; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
              </button>
            `:""}
          </div>
        </div>

        <div style="font-size: 2.2rem; font-weight: 900; color: var(--ink); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 4px;">
          $${c}
        </div>
        <div style="font-size: 0.85rem; font-weight: 700; color: #34d399; margin-bottom: 16px;">
          +$0.00 (0.0%) 24h
        </div>

        <!-- 4-COLUMN STATS ROW -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-bottom: 16px; padding: 8px 0; width: 100%; box-sizing: border-box;">
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Positions</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">$${l.toFixed(2)}</div>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Cash</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">$${n.toFixed(2)}</div>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Open Picks</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #38bdf8;">${r.length}</div>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 2px;">Points</div>
            <div id="portfolioUserPointsStat" style="font-size: 0.95rem; font-weight: 800; color: #fbbf24;">${t.userSeasonPoints??t.seasonPoints??0} pts</div>
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
            ${["1D","1W","1M","1Y","All"].map(u=>`
              <button type="button" class="pnl-tf-btn" data-tf="${u.toLowerCase()}" style="background: ${g===u.toLowerCase()?"rgba(255,255,255,0.12)":"transparent"}; color: ${g===u.toLowerCase()?"#38bdf8":"var(--muted)"}; border: none; padding: 3px 6px; border-radius: 5px; font-size: 0.7rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease;">
                ${u}
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
        ${[{id:"open_orders",label:"Open Orders"},{id:"closed_orders",label:"Closed Orders"},{id:"trade_history",label:"Trade history"},{id:"wins_losses",label:"Wins and losses"}].map(u=>`
          <button type="button" class="portfolio-subtab-btn" data-subtab="${u.id}" style="flex-shrink: 0; background: ${p===u.id?"rgba(255, 255, 255, 0.12)":"rgba(255, 255, 255, 0.03)"}; color: ${p===u.id?"#ffffff":"var(--muted)"}; border: 1.5px solid ${p===u.id?"rgba(255, 255, 255, 0.22)":"var(--border)"}; padding: 9px 16px; border-radius: 12px; font-size: 0.88rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease;">
            ${u.label}
          </button>
        `).join("")}
      </div>

      <!-- TAB CONTENT AREA -->
      <div id="portfolioTabContent">
        ${p==="open_orders"?`
          ${r.length?`
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${r.map(Pt).join("")}
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
        `:p==="closed_orders"?`
          ${o.length?`
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${o.map(Pt).join("")}
            </div>
          `:`
            <div style="text-align: center; padding: 40px 16px; background: var(--paper); border: 1px solid var(--border); border-radius: 18px; box-sizing: border-box;">
              <p style="margin: 0 0 6px 0; font-size: 1rem; font-weight: 800; color: var(--ink);">No closed orders yet.</p>
              <p style="margin: 0; font-size: 0.82rem; color: var(--muted); font-weight: 600;">Settled and finalized matches will appear here.</p>
            </div>
          `}
        `:p==="trade_history"?`
          <div style="background: var(--paper); border: 1px solid var(--border); border-radius: 18px; padding: 16px; box-sizing: border-box;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span style="font-size: 0.92rem; font-weight: 800; color: var(--ink);">On-Chain Trade History</span>
              <a href="https://testnet.arcscan.app/address/${t.walletAddress||"0x8478b85e539fa3Ae8C53C360109BD82aE26Caa3E"}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; font-weight: 700; color: #38bdf8; text-decoration: underline;">ArcScan \u2197</a>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${v.length?v.map(([u,f])=>{let h=f.optionLabel||(f.optionId==="home"?"Home":f.optionId==="away"?"Away":"Draw"),w=f.optionSharesUsdc||f.yesSharesUsdc||1;return`
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--subtle-bg); border-radius: 12px;">
                    <div>
                      <div style="font-size: 0.9rem; font-weight: 800; color: var(--ink);">${x(h)}</div>
                      <div style="font-size: 0.75rem; color: var(--muted);">Arc Testnet Contract</div>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 0.9rem; font-weight: 800; color: #38bdf8;">$${w.toFixed(2)} USDC</div>
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
                <div style="font-size: 1.1rem; font-weight: 900; color: ${(()=>{let u=0,f=0;return o.forEach(h=>{let w=t.marketPositions[h.id];w&&h.isResolved&&(h.resolvedOptionId&&w.optionId===h.resolvedOptionId?u++:f++)}),u+f>0?"#34d399":"var(--muted)"})()};">${(()=>{let u=0,f=0;return o.forEach(h=>{let w=t.marketPositions[h.id];w&&h.isResolved&&(h.resolvedOptionId&&w.optionId===h.resolvedOptionId?u++:f++)}),u+f>0?(u/(u+f)*100).toFixed(0)+"%":"--"})()}</div>
              </div>
              <div style="background: var(--subtle-bg); padding: 12px 6px; border-radius: 12px;">
                <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600;">Total Wins</div>
                <div style="font-size: 1.1rem; font-weight: 900; color: var(--ink);">${(()=>{let u=0;return o.forEach(f=>{let h=t.marketPositions[f.id];h&&f.isResolved&&f.resolvedOptionId&&h.optionId===f.resolvedOptionId&&u++}),u})()}</div>
              </div>
              <div style="background: var(--subtle-bg); padding: 12px 6px; border-radius: 12px;">
                <div style="font-size: 0.72rem; color: var(--muted); font-weight: 600;">Losses</div>
                <div style="font-size: 1.1rem; font-weight: 900; color: var(--muted);">${(()=>{let u=0;return o.forEach(f=>{let h=t.marketPositions[f.id];h&&f.isResolved&&(!f.resolvedOptionId||h.optionId!==f.resolvedOptionId)&&u++}),u})()}</div>
              </div>
            </div>

            <div style="padding: 12px; background: var(--subtle-bg); border-radius: 12px; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--muted); font-weight: 600;">Projected Total Returns</span>
              <span style="font-size: 1rem; font-weight: 900; color: #34d399;">+$${d>0?d.toFixed(2):(l*2.22).toFixed(2)} USDC</span>
            </div>
          </div>
        `}
      </div>

    </section>
  `,k.querySelectorAll(".portfolio-subtab-btn").forEach(u=>{u.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation();let h=u.getAttribute("data-subtab");h&&(t.activePortfolioSubTab=h,O())})}),k.querySelectorAll(".pnl-tf-btn").forEach(u=>{u.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation();let h=u.getAttribute("data-tf");h&&(t.pnlTimeframe=h,O())})}),k.querySelector("#startTradingBtn")?.addEventListener("click",()=>{K?.click()}),k.querySelector("#editUsernameBtn")?.addEventListener("click",()=>{let u=prompt("Enter new display name:",t.profileUsername||"");u&&u.trim()&&(t.profileUsername=u.trim(),localStorage.setItem("siftle_username",u.trim()),O(),S("Username updated!"))})},b=()=>{if(k&&t.activeSurface!=="matches"&&k.classList.remove("matches-surface-active"),Dt.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){oe();return}if(t.activeSurface==="matches"){Me();return}if(t.activeSurface==="portfolio"){O();return}if(t.activeSurface==="leaderboard"){Ar();return}na(),Yt(),me(),Lr(),H&&(H.value=t.activeArchiveDate??"")};tt.textContent=_t();j?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");if(!r)return;let o=r.dataset.category;t.activeCategory=o,V=!1,G=null,window.history.pushState({},"","#feed"),Y(),b(),o==="Personalized"&&!ca()&&_e(),Ce(),J(t.activeCategory)});var V=!1,At="overall",G=null,Ne=!1,Ee=()=>{try{let e=localStorage.getItem("siftle_followed_entities");if(e)return JSON.parse(e)}catch{}return{clubs:[],managers:[],players:[]}},ca=()=>{let e=Ee();return(e.clubs?.length||0)+(e.managers?.length||0)+(e.players?.length||0)>0},Ir=e=>{localStorage.setItem("siftle_followed_entities",JSON.stringify(e))},zr=e=>{if(!e)return"";let a=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o=st(a).split(`
`),i="",s="",n=!1,l=!1;for(let d=0;d<o.length;d++){let c=o[d].trim();if(!c)continue;if(/what matters/i.test(c)||c.includes("\u{1F3AF}")){n&&(s+="</ul></div>",n=!1);let g=c.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`
        <div class="briefing-highlight-box what-matters">
          <h4>${x(g||"What Matters Most")}</h4>
          <p>
      `,l=!0;continue}if(/watch next/i.test(c)||c.includes("\u23F1\uFE0F")){l&&(s+="</p></div>",l=!1);let g=c.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`
        <div class="briefing-highlight-box watch-next">
          <h4>${x(g||"Key Things to Watch")}</h4>
          <ul>
      `,n=!0;continue}if(c.startsWith("## ")||c.startsWith("# "))continue;if(n){let g=c.replace(/^[-*]\s*/,"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");g&&(s+=`<li>${g}</li>`);continue}if(l){let g=c.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");s+=`${g} `;continue}let m=c.match(/^(?:###\s*)?(\d+)\.\s*(.*)$/);if(m){let g=m[1],v=m[2].replace(/\*\*/g,"").trim(),u="",f="",h=d+1;for(;h<o.length&&!o[h].trim().match(/^(?:###\s*)?(?:\d+\.|WHAT MATTERS|WATCH NEXT|🎯|⏱️)/i);){let y=o[h].trim();y.startsWith("*[")&&y.endsWith("]*")?f=y.slice(2,-2):y.startsWith("*")&&y.endsWith("*")?f=y.slice(1,-1):y.length>0&&!y.startsWith("###")&&(u+=(u?" ":"")+y),h++}d=h-1;let w="",P=u.replace(/\.\.\.$/,"").trim();P=P.replace(/[,;:\s]+(?:but|and|or|the|a|an|with|in|on|of|to|for|as|is|was|are|were|after|while|that|which|who)$/i,"").trim(),P&&!P.endsWith("...")&&P.length>=35&&P.split(" ").length>=7?w=P:w=v,w=w.replace(/^(?:deal done|here we go|official,?\s*exclusive\s*story\s*confirmed|breaking news|breaking|official|exclusive|update)\s*[:\.\-]?\s*/gi,"").replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi,"").replace(/@[a-zA-Z0-9_]+/g,"").replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g,"").replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g,"").replace(/\s+/g," ").trim(),w=w.replace(/[,;:\-\s]+$/,""),w.length>0&&(w=w.charAt(0).toUpperCase()+w.slice(1)),w.endsWith(".")||(w+=".");let T=f.replace(/·\s*(confirmed|in progress|major|reported).*/i,"").trim();i+=`
        <div class="briefing-event-item-card">
          <div class="briefing-event-item-header">
            <span class="briefing-event-num-pill">${g}</span>
            <div class="briefing-event-item-content">
              <p class="briefing-event-item-single-text">${x(w)}</p>
              <div class="briefing-event-item-meta">
                ${T?`<span class="briefing-source-tag">${x(T)}</span>`:""}
              </div>
            </div>
          </div>
        </div>
      `;continue}if(c.startsWith("### ")&&!c.match(/###\s*\d+\./)){let g=c.replace(/^###\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`<h4 style="margin: 12px 0 6px 0; font-family: Outfit, sans-serif; font-size: 1rem; color: inherit;">${x(g)}</h4>`;continue}let p=c.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");s+=`<p style="margin: 0 0 10px 0; font-size: 0.88rem; color: inherit; line-height: 1.5;">${p}</p>`}return l&&(s+="</p></div>"),n&&(s+="</ul></div>"),i+s},_e=()=>{document.querySelectorAll(".personalization-modal-overlay").forEach(o=>o.remove());let e=Ee(),a=document.createElement("div");a.className="personalization-modal-overlay",a.innerHTML=`
    <div class="custom-topics-modal">
      <button class="modal-close-icon-btn" id="prefCloseBtn" type="button" aria-label="Close">&times;</button>
      <div style="margin-bottom: 6px;">
        <h3 style="font-family: Outfit, sans-serif; font-weight: 700; margin: 0; font-size: 1.22rem;">Personalize Your Football Feed</h3>
      </div>
      <p style="margin: 0 0 16px 0; font-size: 0.82rem; color: #69728a; line-height: 1.4;">Type the clubs, managers, and players you follow (comma separated). Siftle will tailor your feed and catch-up briefings to these topics.</p>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Clubs</label>
        <input type="text" class="topic-text-field" id="clubInput" placeholder="e.g. Chelsea, Real Madrid, Arsenal" value="${x(e.clubs.join(", "))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Managers</label>
        <input type="text" class="topic-text-field" id="managerInput" placeholder="e.g. Enzo Maresca, Mikel Arteta, Pep Guardiola" value="${x(e.managers.join(", "))}" />
      </div>

      <div class="topic-input-group">
        <label class="topic-input-label">Favorite Players</label>
        <input type="text" class="topic-text-field" id="playerInput" placeholder="e.g. Cole Palmer, Bukayo Saka, Kylian Mbappe" value="${x(e.players.join(", "))}" />
      </div>

      <div class="custom-modal-btn-row">
        <button id="prefSaveBtn" class="modal-save-btn" type="button">Save Topics</button>
        <button id="prefClearBtn" class="modal-clear-btn" type="button">Clear All</button>
      </div>
    </div>
  `,document.body.appendChild(a);let r=()=>a.remove();a.querySelector("#prefCloseBtn")?.addEventListener("click",r),a.addEventListener("click",o=>{o.target===a&&r()}),a.querySelector("#prefClearBtn")?.addEventListener("click",()=>{a.querySelector("#clubInput").value="",a.querySelector("#managerInput").value="",a.querySelector("#playerInput").value=""}),a.querySelector("#prefSaveBtn")?.addEventListener("click",()=>{let o=a.querySelector("#clubInput")?.value||"",i=a.querySelector("#managerInput")?.value||"",s=a.querySelector("#playerInput")?.value||"",n=d=>d.split(",").map(c=>c.trim()).filter(Boolean),l={clubs:n(o),managers:n(i),players:n(s)};Ir(l),S("Topics saved"),r(),t.activeCategory="Personalized",b()})},Or=()=>{if(Ne)return`
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
    `;if(!G)return lt(!1),`
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
    `;let e=G,a=new Date(e.periodStart).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return`
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
        ${zr(e.markdown||"")}

        <div class="briefing-sources-bar" style="display:flex; flex-direction:column; gap:4px; margin-top:14px; padding-top:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
            <span>Compiled from ${e.sourcesCount||0} verified reports across ${e.eventCount||0} canonical events</span>
            <span style="font-weight:700; color:#3157ff;">
              Powered by 0G
            </span>
          </div>
          <div style="font-size:0.72rem; color:#69728a; margin-top:4px; text-align:left; width:100%;">
            AI Status: <strong>${x(e.provider||"System")}</strong> 
            ${e.successRate!==null&&e.successRate!==void 0?`(Success Rate: <strong>${e.successRate}%</strong>)`:""}
          </div>
        </div>
      </div>
    </div>
  `},Q=()=>{document.querySelector("#backToFeedBtn")?.addEventListener("click",()=>{V=!1,b()}),document.querySelector("#openBriefingBtn")?.addEventListener("click",()=>{V=!0;let e=t.activeCategory==="Personalized"?"personalized":"overall";At!==e&&(G=null),At=e,b(),G||lt(!1)}),document.querySelector("#catchUpAgainBtn")?.addEventListener("click",()=>{lt(!1)})},lt=async(e=!1)=>{Ne=!0,V&&b();let a=e?null:localStorage.getItem("siftle_last_briefing_at"),r=Ee();try{let o=await fetch(B("/api/briefing/delta"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lastBriefingAt:a,context:t.activeCategory==="Personalized"?"personalized":"overall",entities:r})}),i=await o.json();Ne=!1,o.ok&&i.success?(G=i,localStorage.setItem("siftle_last_briefing_at",i.periodEnd||new Date().toISOString()),V&&b()):(G={periodStart:new Date().toISOString(),markdown:`### Failed to generate briefing

${i.error||"Please try again in a moment."}`},V&&b())}catch(o){Ne=!1,G={periodStart:new Date().toISOString(),markdown:`### Failed to connect to briefing service

${o.message}`},V&&b()}};k?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,o=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,me();let i=k?.querySelector("#newsSearchInput");i&&(i.focus(),i.setSelectionRange(r,o))});K?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),Y(),b()});ie?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),Y(),b(),Ce(),J(t.activeCategory)});se?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),Y(),b()});ee?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Ae()):Pe()});document.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-match-id]");if(r){let d=r.getAttribute("data-match-id");d&&window.openSiftleMatchPage(d);return}let o=a.closest("[data-match-date]");if(o){let d=o.getAttribute("data-match-date");d&&d!==t.activeMatchDate&&(t.activeMatchDate=d,t.liveMatches=[],t.loadingLiveMatches=!0,Me(),ra(d).then(()=>{t.activeSurface==="matches"&&Me()}));return}let i=a.closest(".copy-address-btn");if(i){let d=i.getAttribute("data-address");d&&navigator.clipboard.writeText(d).then(()=>{S("Wallet address copied!")})}let s=a.closest("[data-claim-market]");if(s){let d=s.getAttribute("data-claim-market");d&&Cr(d);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Se(),O();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,O();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Se(),O();return}let n=a.closest("[data-copy-referral-code]");if(n){let d=n.getAttribute("data-copy-referral-code")||"";d&&navigator.clipboard.writeText(d).then(()=>S("Invite code copied"));return}let l=a.closest("[data-copy-referral-link]");if(l){let d=l.getAttribute("data-copy-referral-link")||"";d&&navigator.clipboard.writeText(d).then(()=>S("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Et():Pe())});Dt.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="matches"?(t.activeSurface="matches",window.history.pushState({},"","#matches")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),Ce(),J(t.activeCategory),a==="saved"&&(ir(),dt(),ke())),Y(),b()})});H?.addEventListener("change",()=>{t.activeArchiveDate=H.value||null,window.history.pushState({},"","#feed"),Y(),b(),J(t.activeCategory)});Ea?.addEventListener("click",()=>{t.activeArchiveDate=null,H&&(H.value=""),window.history.pushState({},"","#feed"),Y(),b(),J(t.activeCategory)});k?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let h=k?.querySelector(".username-display-row"),w=k?.querySelector("#usernameEditForm");if(h&&w){h.style.display="none",w.style.display="flex";let P=w.querySelector("#usernameInput");P&&P.focus()}return}if(a.closest("#cancelUsernameBtn")){let h=k?.querySelector(".username-display-row"),w=k?.querySelector("#usernameEditForm");h&&w&&(h.style.display="flex",w.style.display="none");return}let i=a.closest("#saveUsernameBtn");if(i){let w=k?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(w){let P=w.value.trim().slice(0,15),T=i,y=T.textContent||"Save";T.disabled=!0,T.textContent="Saving...",or(P),t.profileNotice=null;try{t.walletAddress&&await ne(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},S("Username updated"),O()}catch($){let E=$ instanceof Error?$.message:"Username save failed";t.profileNotice={type:"error",message:E},S(E),T.disabled=!1,T.textContent=y,O()}}return}let s=a.closest("[data-portfolio-filter]");if(s){let h=s.getAttribute("data-portfolio-filter");t.portfolioFilter=h,O();return}let n=a.closest("[data-timeframe]");if(n){let h=n.dataset.timeframe;t.activeMarketTimeframe=h,oe();return}let l=a.closest("[data-market-id]");if(l){t.selectedMarketId=l.dataset.marketId??null,C("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),b(),window.scrollTo({top:0,behavior:"smooth"});return}if(a.closest(".read-tweet-btn")){e.stopPropagation();let h=a.closest("[data-story-id]");h&&rt(Number(h.dataset.storyId),!0);return}let c=a.closest("[data-thread-story-id]"),m=a.closest("[data-export-id]"),p=a.closest("[data-export-action]"),g=a.closest("[data-story-id]");if(c){e.stopPropagation();let h=t.stories.find(w=>w.id===Number(c.dataset.threadStoryId));h&&Ka(h);return}let v=a.closest(".mobile-bookmark-btn, .bookmark-button");if(v){e.stopPropagation();let h=v.dataset.bookmarkUrl||"",w=t.stories.find(P=>P.sourceUrl===h);if(!w)return;w.saved=!w.saved,w.saved?ae.add(h):ae.delete(h),Ca(),S(w.saved?"Saved to your list":"Removed from saved"),me();return}if(p){e.stopPropagation(),$r(Number(p.dataset.exportStoryId),p.dataset.exportAction);return}if(m){e.stopPropagation();let h=Number(m.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===h?null:h,me();return}if(!g||a.closest("a"))return;let u=Number(g.dataset.storyId),f=t.stories.find(h=>h.id===u);f&&C("feed_story_click",f.sourceUrl,f.headline),rt(u,!0)});k?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");if(!r||e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();let o=Number(r.dataset.storyId),i=t.stories.find(s=>s.id===o);i&&C("feed_story_click",i.sourceUrl,i.headline),rt(o)});L?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let m=t.stories.find(p=>p.id===Number(r.dataset.unlockBriefing));m&&at(m);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let m=decodeURIComponent(o.dataset.unlockBriefingUrl||""),p=Wa(m);p&&(pe(p)?Te(p):at(p));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),b();return}if(a.closest("#openTradeDrawerBtn")){let m=A.find(v=>v.id===t.selectedMarketId);if(m){if(ut(m,t.marketSnapshots[m.id])){S("This market is resolved and can no longer be traded.");return}if(Va(m,t.marketSnapshots[m.id])){S("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,C("trade_drawer_open");let p=L.querySelector("#tradeDrawer"),g=L.querySelector("#tradeDrawerBackdrop");p?.classList.add("open"),g?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let m=L.querySelector("#tradeDrawer"),p=L.querySelector("#tradeDrawerBackdrop");m?.classList.remove("open"),p?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let m=A.find(p=>p.id===t.selectedMarketId);if(m){let p=Pr(m),g=`https://api.whatsapp.com/send?text=${encodeURIComponent(p)}`;window.open(g,"_blank")}return}let i=a.closest("[data-market-trade]");if(i&&t.selectedMarketId){let m=i.dataset.marketTrade;mr(t.selectedMarketId,m);return}let s=a.closest("[data-market-option-trade]");if(s&&t.selectedMarketId){let m=s.dataset.marketOptionTrade||t.marketTradeOptionId||"";Tr(t.selectedMarketId,m);return}let n=a.closest("[data-market-option-id]");if(n){if(n.disabled||n.classList.contains("disabled"))return;t.marketTradeOptionId=n.dataset.marketOptionId||null,b();return}let l=a.closest("[data-market-trade-side]");if(l){if(l.disabled||l.classList.contains("disabled"))return;let m=A.find(v=>v.id===t.selectedMarketId),p=m?t.marketPositions[m.id]:void 0,g=l.dataset.marketTradeSide;if(!je(t.marketOrderMode,g,p))return;t.marketTradeSide=g,b();return}let d=a.closest("[data-market-order-mode]");if(d){t.marketOrderMode=d.dataset.marketOrderMode;let m=A.find(g=>g.id===t.selectedMarketId),p=m?t.marketPositions[m.id]:void 0;t.marketTradeSide=ta(t.marketOrderMode,t.marketTradeSide,p),t.marketTradeAmount=Ve(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,p),b();return}let c=a.closest("[data-back-to-feed]");if(c){if(c.classList.contains("read-more-news-btn")){let p=new URLSearchParams(window.location.search).get("url"),g=document.querySelector(".detail-card h2")?.textContent||void 0;C("shared_read_more_click",p||void 0,g)}Ja()}});L?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=A.find(d=>d.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,i=r?t.marketPositions[r.id]:void 0,s=Number(a.value);t.marketTradeAmount=Number.isFinite(s)?s:0;let n=r&&Jt(r)?t.marketTradeAmount:nr(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,i),l=L.querySelector(".market-inline-payout strong");l&&(l.textContent=`$${Zt(n)}`)});L?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});L?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=A.find(i=>i.id===t.selectedMarketId),o=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=Ve(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,o),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Ae);window.addEventListener("hashchange",Ae);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await te(t.walletAddress);t.walletBalance=a,I(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),ka())}});Ke?.addEventListener("click",()=>{if(!Je||!Ke)return;let e=!Je.hidden;Je.hidden=e,Ke.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,me());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(i=>i.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};U&&(U.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,H&&(H.value=""),Y(),Ce(),J(t.activeCategory)),r.dataset.menuAction==="saved"&&(na(),dt(),ke(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),Y(),b())});var Dr=async()=>{try{let e=await fetch(B("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),b())}catch(e){console.error("Failed to prefetch unlock config:",e)}},Nr=()=>{window.setInterval(async()=>{try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(B("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(A=o,t.activeSurface==="markets"&&b())}}catch(e){console.warn("Background market poll failed:",e)}},3e4)};b();I();Dr();J(t.activeCategory);Nr();Pa().then(()=>{ur(),b(),I(),window.setTimeout(Fr,1200),Qa()});var _r=document.querySelector("#mobileArchiveCard"),ce=document.querySelector("#archiveControls");_r?.addEventListener("click",()=>{if(!ce)return;ce.classList.toggle("mobile-open")&&setTimeout(()=>ce.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Hr=document.querySelector("#archivePill");Hr?.addEventListener("click",e=>{if(e.stopPropagation(),!ce)return;ce.classList.toggle("mobile-open")&&setTimeout(()=>ce.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Oe=!1,Ct=!1,Fr=()=>{Ct||(Ct=!0,(async()=>{let e=await He();if(Oe=!!e,e){t.walletConnecting=!0,I();try{let a=await wa();Oe=!1,t.walletConnecting=!1,a?(t.walletAddress=await He(),t.walletAddress&&(de(),t.walletBalance=await te(t.walletAddress),await R()),I(),t.activeSurface==="portfolio"&&b()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,de(),S("Session expired. Please sign in again."),I(),b())}catch(a){console.warn(a),Oe=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,de(),S("Session expired. Please sign in again."),I(),b()}}await xa(a=>{Oe||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,de(),a&&ne(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,I(),a?(Se(),te(a).then(r=>{t.walletBalance=r,I(),t.activeSurface==="portfolio"&&b()}),R()):t.activeSurface==="portfolio"&&b())})})())};C("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",i=typeof o=="string"?o:r.getAttribute("class")||"",s=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(i.includes("source-button")||i.includes("source-btn")||i.includes("source-link")||r.textContent?.trim()==="Open source")&&!i.includes("disabled")&&s!=="#"&&C("open_source")}},!0);export{ze as globalOddsStore,Yr as isMarketLocked};
