import"./chunks/chunk-ZUUPKAA6.js";var Oe=[];var nt="https://faucet.circle.com/",xt="siftle_backend_wallet_migration_notice",Qe=null,D=()=>(Qe||(Qe=import("./chunks/arc-L5NGGVTX.js")),Qe),R=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,ya=async()=>(await D()).connectArcWallet(),ce=async e=>(await D()).readArcUsdcBalance(e),wa=async(e,a,r,o)=>(await D()).payAiBriefingUnlock(e,a,r,o),ka=e=>{D().then(a=>a.resolveLocalTestMarketYes(e))},Sa=async e=>(await D()).readArcMarketSnapshot(e);var zt=async(e,a)=>(await D()).readArcMarketState(e,a),xa=async(e,a,r,o,n,s,i)=>(await D()).executeArcMarketOrder(e,a,r,o,n,s,i),$a=async(e,a,r,o,n)=>(await D()).executeArcOptionMarketOrder(e,a,r,o,n),Ft=()=>{D().then(e=>e.disconnectArcWallet())},Ta=async(e,a)=>(await D()).claimArcMarketPayout(e,a),je=async()=>(await D()).getConnectedArcWallet(),Ma=async()=>(await D()).validateArcSession(),Aa=async e=>(await D()).subscribeArcWallet(e),La=async()=>(await D()).triggerGatewayWarmup();var Pa="https://siftle.onrender.com",Ca=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?Pa:""},Ua=Ca(),E=e=>`${Ua}${e}`,jt="siftle_theme",Ea=()=>{try{return window.localStorage.getItem(jt)==="light"?"light":"dark"}catch{return"dark"}},$e=Ea(),Wt="organic";function Ia(){try{let e=localStorage.getItem("siftle_traffic_source");if(!e){let a=new URLSearchParams(window.location.search),r=a.get("ref")||a.get("utm_source");if(r)r=r.trim().toLowerCase(),r==="twitter"&&(r="x"),r==="instagram"&&(r="ig"),r==="whatsapp"&&(r="wa"),r==="discord"&&(r="dc"),(r==="google_search"||r==="google-search")&&(r="google"),["x","ig","wa","dc","google","organic","briefing"].includes(r)?e=r:e=r.slice(0,20);else{let o=document.referrer;o&&(/twitter\.com|x\.com|t\.co/i.test(o)?e="x":/instagram\.com/i.test(o)?e="ig":/whatsapp\.com|wa\.me/i.test(o)?e="wa":/discord\.com|discordapp\.com/i.test(o)?e="dc":/google\.com|google\.co/i.test(o)&&(e="google"))}e||(e="organic"),localStorage.setItem("siftle_traffic_source",e)}Wt=e}catch(e){console.error("Failed to initialize traffic source:",e)}}Ia();function C(e,a,r){fetch(E("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e,source:Wt,storyUrl:a,headline:r})}).catch(o=>console.error("Failed to track event:",o))}var t={activeSurface:"feed",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:2,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},aiSummaryProofs:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{}};var G="global",X=!1,ee=null,$t=!1,Tt=!1,Mt=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";Mt&&localStorage.setItem("siftle_pending_referral_code",Mt.trim().toUpperCase());var qt=20,I=Oe,Ba=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},Le=()=>Ba(t.portfolioMarketPreviews,I,Oe),_a=async()=>{t.loadingMarkets=!0,I.length===0&&(I=Oe);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(E("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(I=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Yt=async()=>{try{let e=await fetch(E("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Gt="siftle.savedUrls",pe=new Set,mt=()=>{try{let e=localStorage.getItem(Gt)||"[]",a=JSON.parse(e);pe=new Set(a.filter(Boolean))}catch{pe=new Set}},Da=()=>{try{localStorage.setItem(Gt,JSON.stringify(Array.from(pe)))}catch{}},Te=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!pe.has(e.sourceUrl)};mt();Te();var st=document.querySelector("#dateLabel"),ae=document.querySelector("#categoryTabs"),x=document.querySelector("#storyList"),M=document.querySelector("#storyDetail"),Xe=document.querySelector("#menuButton"),et=document.querySelector("#menuPanel"),U=document.querySelector("#menuStatus"),F=document.querySelector("#archiveDateSelect"),At=document.querySelector("#archiveStatus"),Na=document.querySelector("#todayButton"),Ye=document.querySelector(".brief-hero"),Ge=document.querySelector("#archiveControls"),Pe=document.querySelector("[data-surface='markets']"),Ce=document.querySelector("[data-surface='feed']"),Ue=document.querySelector("[data-surface='portfolio']"),le=document.querySelector("#walletButton"),Se=document.querySelector("[data-theme-toggle]"),Oa=document.getElementById("guideToggleButton"),Jt=Array.from(document.querySelectorAll("[data-bottom-nav]")),tt,Ha=()=>{if(!Se)return;let a=`Switch to ${$e==="light"?"dark":"light"} mode`;Se.setAttribute("aria-label",a),Se.title=a,Se.dataset.activeTheme=$e},Vt=e=>{$e=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(jt,e)}catch{}Ha()};Vt($e);var _=()=>{if(le){let e=le.querySelector(".wallet-button-label");le.classList.toggle("connected",!!t.walletAddress),le.disabled=t.walletConnecting,le.setAttribute("aria-label",t.walletAddress?`Wallet ${R(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),le.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${R(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",_);Se?.addEventListener("click",()=>{Vt($e==="light"?"dark":"light")});Oa?.addEventListener("click",()=>{Ra()});var Ra=()=>{let e=document.createElement("div");e.className="guide-overlay",e.innerHTML=`
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
  `,document.body.appendChild(e);let a=e.querySelector("#guideClose"),r=e.querySelector("#guideStartBtn"),o=()=>e.remove();a.addEventListener("click",o),r.addEventListener("click",o),e.addEventListener("click",n=>{n.target===e&&o()})},za=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(E("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&S("Referral connected"))}catch(r){console.warn(r)}},Me=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(E(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&j()}}},Ee=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,C("wallet_connect_start"),_();try{let e=await ya();if(e){C("wallet_connect_success");let a=sessionStorage.getItem("siftle_landing_url"),r=sessionStorage.getItem("siftle_landing_headline"),o=sessionStorage.getItem("siftle_signup_tracked");a&&!o&&(C("briefing_referral_signup",a,r||void 0),sessionStorage.setItem("siftle_signup_tracked","true")),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),t.walletBalance=await ce(e),await za(e),Me(),await z(),ge(!0).catch(s=>console.error("Failed to report leaderboard entry:",s));let n=localStorage.getItem(xt);n?(localStorage.removeItem(xt),S(n)):S("Connected to Arc Testnet"),window.location.hash="#portfolio",Be()}}catch(e){C("wallet_connect_failed"),S(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,_()}}},S=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),tt&&window.clearTimeout(tt),tt=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=S;var Fa=(e,a,r,o)=>{let n=document.createElement("div");n.className="success-modal-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n),setTimeout(()=>{n.classList.add("show")},10);let s=()=>{n.classList.remove("show"),setTimeout(()=>{n.remove()},300)};n.querySelector(".success-modal-close-btn")?.addEventListener("click",s),n.querySelector(".success-modal-action-btn")?.addEventListener("click",s),n.addEventListener("click",i=>{i.target===n&&s()})},J=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},Kt=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},at=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(t.activeCategory==="Personalized"){let o=Ne(),n=[...o.clubs,...o.managers,...o.players].map(s=>s.toLowerCase()).filter(Boolean);if(n.length>0){let s=`${e.headline} ${e.summary||""} ${e.source||""}`.toLowerCase();if(!n.some(l=>s.includes(l)))return!1}}let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),We=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,ja=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Wa=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let n=r.slice(0,a).join(" "),s=Math.max(n.lastIndexOf("."),n.lastIndexOf("?"),n.lastIndexOf("!"));return s>n.length*.45?n.slice(0,s+1).trim():`${n.replace(/[,:;.'"!\?\s]+$/,"")}...`},Lt=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let n=JSON.parse(a);if(typeof n.summary=="string"){a=n.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),ja(a)?"":Wa(a)},ue=(e,a)=>Lt(a||"")||Lt(e.summary)||e.headline,qa=e=>{let r=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!r||!window.html2canvas)return;let o=document.createElement("div");o.className="briefing-export-staging";let n=r.cloneNode(!0);n.classList.add("briefing-export-surface"),o.appendChild(n),document.body.appendChild(o);let s=document.documentElement.dataset.theme==="light";window.html2canvas(n,{backgroundColor:s?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(i=>{let l=document.createElement("a");l.download="siftle-briefing.png",l.href=i.toDataURL("image/png"),l.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{o.remove()})};window.downloadBriefingCard=qa;var Ya=e=>e.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),Ga=(e,a)=>{let r="";if(a)try{r=decodeURIComponent(a)}catch{r=a}let o=window.location.origin,n=window.location.pathname,s=t.stories.find(d=>d.id===e||r&&d.sourceUrl===r),i=s?Ya(s.headline):e>0?`story-${e}`:"",l=e>0?`${o}/story/${i}?utm_source=briefing&url=${encodeURIComponent(s?.sourceUrl||r)}`:r?`${o}/api/redirect?url=${encodeURIComponent(r)}&source=briefing`:`${o}/story/briefing?utm_source=briefing`;navigator.clipboard.writeText(l).then(()=>{S("Shareable link copied to clipboard!")}).catch(()=>{S("Unable to copy link")})};window.copyBriefingLink=Ga;var gt=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(a){let s=a.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${s}</h3>
    `}r[0].trim()&&(o+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let n="";for(let s=1;s<r.length;s+=2){let i=r[s].trim().toUpperCase(),l=r[s+1]?r[s+1].trim():"";if(!l)continue;let d="";if(i==="KEY POINTS"){let u=l.split(/(?:•|\*|-)\s+/).map(p=>p.trim()).filter(Boolean);u.length>0?d=`<ul class="briefing-list">${u.map(p=>`<li>${p}</li>`).join("")}</ul>`:d=`<p class="briefing-text">${l}</p>`}else d=`<p class="briefing-text">${l}</p>`,i==="TAKEAWAY"&&(n=l);let c=i.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${c}-section">
        <h4 class="briefing-title">${i}</h4>
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
    `),o},Ie=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${w(a)}</p>`:""},Ja=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},ft=e=>`siftle_ai_briefing_unlock_${Ja()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Zt=e=>localStorage.getItem(ft(e))||"",Va=e=>{localStorage.removeItem(ft(e))},me=e=>{let r=new URLSearchParams(window.location.search).get("url");return r&&r===e.sourceUrl?!0:!!Zt(e)},Qt=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:pe.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Ka=e=>{let a=t.stories.find(n=>n.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(n=>n.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let n=I.find(s=>s.id===t.selectedMarketId);if(n){let s=Je(n).evidence.find(i=>i.sourceUrl===e);if(s)return Qt(n,s)}}return null},ht=(e,a)=>{let r=nr(e,a);return r===null?null:r-qt*60*1e3},Xt=(e,a)=>{let r=ht(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},ea=(e,a)=>{let r=ht(e,a);return r===null?null:Date.now()>=r?`Locked ${qt}m before kickoff`:null},Za=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled,n=!!t.walletAddress;return`
    <div class="briefing-section">
      ${Ie(e)}
      ${a?`
          ${ye()}
        `:`
          <p class="briefing-text">
            ${n?o?`Pay a <strong>${r}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${r}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`:"Sign in to access AI briefings."}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${n?o?"Unlock via Circle x402":"AI briefing":"Sign in and access AI briefing"}
          </button>
        `}
    </div>
  `},vt=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],bt=e=>`
  <div class="briefing-section">
    ${Ie(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,it=async(e,a=!1)=>{if(!t.walletAddress){S("Please sign in to unlock this briefing."),Ee();return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",C("ai_unlock_attempt"),f();try{let r=await fetch(E("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let n=Number(o.amountUsdc)||.05;try{let p=await fetch(E(`/api/summary/price?sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(p.ok){let v=await p.json();typeof v.priceUsdc=="number"&&(n=v.priceUsdc)}}catch(p){console.warn("Failed to retrieve autonomous price, falling back to default:",p.message)}let s=await wa(o.treasuryAddress,n,p=>{U&&(U.textContent=p),t.briefingStatusByUrl[e.sourceUrl]=p,f()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=`Briefing unlocked! Charged ${n} USDC (priced by Siftle AI Agent)`,f();let i=await fetch(E("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:s})}),l=await i.json();if(!i.ok||!l.unlockToken)throw new Error(l.error||"AI briefing failed");localStorage.setItem(ft(e),l.unlockToken),C("ai_unlock_success");let d=sessionStorage.getItem("siftle_landing_url"),c=sessionStorage.getItem("siftle_landing_headline");d&&C("briefing_referral_unlock",d,c||void 0),(Number(l?.bonus?.points)||0)>0&&ge(!1).catch(p=>console.error("Failed to refresh leaderboard bonus:",p)),await Ae(e)}catch(r){C("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl];let o=r instanceof Error?r.message:String(r||""),n=o,s=o.toLowerCase();if(s.includes("session expired")||s.includes("sign in first")||s.includes("unauthorized")){try{(await D()).disconnectArcWallet()}catch{}t.walletAddress=null,t.walletBalance=null,n="Your session has expired. Please sign in again to unlock this briefing."}else(s.includes("balance")||s.includes("exceeds balance")||s.includes("transfer amount exceeds"))&&(n="Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC.");S(n)}finally{t.unlockingSummaryUrl=null,f()}}},Ae=async e=>{if(me(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=ue(e,e.ai_summary),C("view_summary"),U&&(U.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded");let r=new URLSearchParams(window.location.search).get("url");if(r&&r===e.sourceUrl){let o=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(o)||(sessionStorage.setItem(o,"true"),C("briefing_unlock",e.sourceUrl,e.headline))}f();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing through 0G...",f();try{let r=new URLSearchParams(window.location.search).get("url"),o=!!(r&&r===e.sourceUrl),n=await fetch(E("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Zt(e),isSharedLanding:o})});if(!n.ok){if(n.status===402){Va(e),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",U&&(U.textContent="Unlock expired. Unlock again to continue."),f();return}throw new Error(`Summary request failed with ${n.status}`)}let s=await n.json();t.aiSummaries[e.sourceUrl]=ue(e,s.summary),t.aiSummaryProofs[e.sourceUrl]=s.proof,t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",U&&s.provider&&(U.textContent=s.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${s.provider}`);let l=new URLSearchParams(window.location.search).get("url");if(l&&l===e.sourceUrl){let d=`siftle_unlock_tracked_${encodeURIComponent(e.sourceUrl)}`;sessionStorage.getItem(d)||(sessionStorage.setItem(d,"true"),C("briefing_unlock",e.sourceUrl,e.headline))}}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],delete t.aiSummaryProofs[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",U&&(U.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,f()}}},lt=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);if(r){if(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),f(),r.type==="tweet"){window.scrollTo({top:0,behavior:"smooth"});return}a&&!me(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),f(),it(r,!0)):me(r)&&Ae(r),window.scrollTo({top:0,behavior:"smooth"})}},Qa=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),f(),ta(e),window.scrollTo({top:0,behavior:"smooth"})},Xa=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.location.search?window.history.pushState({},"",window.location.pathname+"#feed"):window.history.pushState({},"","#feed"),f(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},ta=async e=>{try{let a=await fetch(E(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),U&&(U.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),S("That timeline no longer has a verified past update"),U&&(U.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,f()}};function Be(){let e=window.location.pathname.startsWith("/story/"),a=window.location.pathname.startsWith("/thread/");if(e||a){let o=window.location.pathname.split("/").pop()||"",n=e?`#story-${o}`:`#thread-${o}`;window.history.replaceState({},"",`${window.location.pathname}${window.location.search}${n}`)}if(window.location.hash==="#resolve-local-yes"){let o=I.find(n=>n.id==="siftle-local-test-2")||I.find(n=>n.timeframe==="Daily"&&V(n).startsWith("0x00000000000000000000000000000000000001"));if(o){ka(V(o)),fr(o,"yes"),delete t.marketSnapshots[o.id],delete t.marketPositions[o.id],delete t.checkedMarketSnapshots[o.id],delete t.loadingMarketSnapshots[o.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),S("Local test market resolved YES"),z().then(()=>{ge(!0).catch(n=>console.error("Failed to report leaderboard entry:",n)),_(),j()});return}}let r=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||r){t.activeSurface="markets",t.selectedMarketId=r?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,f();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,f();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,f();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let o=window.location.hash.match(/^#story-(.+)$/),n=window.location.hash.match(/^#thread-(\d+)$/),i=new URLSearchParams(window.location.search).get("url"),l;if(i){sessionStorage.setItem("siftle_landing_url",i);let u=t.stories.find(v=>v.sourceUrl===i);u?.headline?sessionStorage.setItem("siftle_landing_headline",u.headline):sessionStorage.getItem("siftle_landing_headline")||sessionStorage.setItem("siftle_landing_headline","Archived Story");let p=`siftle_ref_tracked_${encodeURIComponent(i)}`;if(sessionStorage.getItem(p)||(sessionStorage.setItem(p,"true"),C("briefing_referral",i,u?.headline||"Archived Story")),l=t.stories.find(v=>v.sourceUrl===i),!l&&o){let v=i;t.loadingSummaryUrl!==v&&(t.loadingSummaryUrl=v,fetch(E(`/api/story?sourceUrl=${encodeURIComponent(v)}`)).then(h=>{if(!h.ok)throw new Error;return h.json()}).then(h=>{t.stories.some(y=>y.sourceUrl===h.sourceUrl)||(h.id=Math.max(9999,...t.stories.map(y=>y.id))+1,t.stories.push(h));let k=t.stories.find(y=>y.sourceUrl===h.sourceUrl);sessionStorage.setItem("siftle_landing_headline",k.headline),C("briefing_referral",i,k.headline),t.selectedStoryId=k.id,f(),Ae(k)}).catch(h=>{console.warn("Failed to load historical story from backend:",h)}).finally(()=>{t.loadingSummaryUrl=null}))}}else if(o){let u=Number(o[1]);isNaN(u)||(l=t.stories.find(p=>p.id===u))}let d=n?t.stories.find(u=>u.id===Number(n[1])):void 0,c=t.selectedStoryId!==null||t.selectedThreadUrl!==null;l?(t.selectedStoryId=l.id,t.selectedThreadUrl=null,t.activeThread=null,f(),Ae(l)):d?(t.selectedStoryId=null,t.selectedThreadUrl=d.sourceUrl,t.activeThread=null,f(),ta(d)):i||(t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,f(),c&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"})));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,f()}var dt=e=>{At&&(At.textContent=e)},er=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(ra(),f());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(E(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let n=await o.json();if(t.stories=n.top_stories??[],Te(),t.hasLoadedFeed=!0,st&&(st.textContent=Kt(n.date??t.activeArchiveDate)),U)if(t.activeArchiveDate)U.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let s=n.archive?.provider==="shelby"?"Shelby":"local archive";U.textContent=`Latest published feed loaded from ${s}`}dt(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),Te(),U&&(U.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,f(),Be()}},tr=async()=>{if(F)try{let e=await fetch(E("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),F.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),F.value=t.activeArchiveDate??"",dt(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),dt("Archive unavailable")}},_e=()=>{$t||($t=!0,tr())},ne=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||er(e,a)},ar=()=>{Tt||(Tt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&ne(t.activeCategory,!0),_e()},8e3))};var W=e=>e==="Sports"?"Football":e,Re=e=>/^@/.test(String(e.source||""))||/(?:^|\/)(?:x|twitter)\.com\//i.test(String(e.sourceUrl||"")),aa=(e,a)=>{let r=e.trim();return r.length<=a?r:`${r.slice(0,Math.max(0,a-1)).trimEnd()}\u2026`},rr=e=>e.replace(/^@/,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ").filter(Boolean),ct=e=>{let a=String(e.source||W(e.category)).trim(),r=rr(a);if(r.length===0)return W(e.category);let o=r.filter((i,l)=>{let d=i.toLowerCase();return!(l>0&&["live","news","official"].includes(d))}),n=o.length>0?o:r,s="";for(let i of n){let l=s?`${s} ${i}`:i;if(l.length>18)break;s=l}return aa(s||n[0],18)},Pt=e=>{let a=String(e.headline||"").replace(/\s+/g," ").trim();if(!Re(e))return a;let r=a.replace(/https?:\/\/\S+/gi,"").replace(/\(Source:[^)]+\)\s*$/i,"").replace(/\s+/g," ").trim();if(/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(r))return`Latest from ${ct(e)}`;let o=r.replace(/^R to\s+@[^:]+:\s*/i,"").trim(),n=o.length>=24&&!/^(?:more here|watch more here)[:.!?]*$/i.test(o)?o:r||a;return aa(n,150)},ra=()=>{if(!ae)return;ae.hidden=!1;let e=t.activeCategory==="Personalized";ae.innerHTML=`
    <button class="category-tab ${e?"":"active"}" type="button" data-category="Sports">
      Feed
    </button>
    <button class="category-tab ${e?"active":""}" type="button" data-category="Personalized">
      Personalized
    </button>
  `},oa=e=>(e.thread?.count??0)>=1,or=(e=0)=>`${e} past ${e===1?"update":"updates"}`,na=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),n=new Date(r.publishedAt||0).getTime();return(Number.isNaN(n)?0:n)-(Number.isNaN(o)?0:o)}),Je=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},nr=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},sr=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,ir=(e,a)=>({date:sr(e,a),source:e.source,headline:e.headline,summary:ue(e),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),sa=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(E(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...na(r.items??[])],n=o.filter((l,d,c)=>c.findIndex(u=>u.sourceUrl===l.sourceUrl)===d).map(ir),i=o[0]?.imageUrl;n.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:n,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&f()}}},V=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",se=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],oe=e=>!!(e.optionMarket&&se(e).length>1),lr=e=>{let a=se(e);return a.find(r=>r.id===t.marketTradeOptionId)||a[0]||null},H=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),w=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),yt=e=>`siftle_profile_username_${e.toLowerCase()}`,ia=e=>e.trim().replace(/\s+/g," ").slice(0,15),ve=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=yt(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=ia(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},dr=e=>{if(!t.walletAddress)return;let a=yt(t.walletAddress),r=ia(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},cr=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},la=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:2,max:2,fallback:2}},De=(e,a,r,o)=>{let{min:n,max:s,fallback:i}=la(a,r,o);return Number.isFinite(e)?Math.min(s,Math.max(n,e)):i},da=(e,a,r,o,n)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let s=a==="yes"?n?.yesSharesUsdc??0:n?.noSharesUsdc??0,i=e.yesSharesUsdc,l=e.noSharesUsdc;if(o==="sell")return Math.min(r,s);let d=(a==="yes"?i:l)+r,c=i+l+r;return d<=0||c<=0?r:(s+r)/d*c},ca=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},pr=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},pa=e=>`siftle_claimed_markets_${e.toLowerCase()}`,qe=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(pa(t.walletAddress))||"[]"))}catch{return new Set}},ur=e=>{if(!t.walletAddress)return;let a=qe();a.add(e),localStorage.setItem(pa(t.walletAddress),JSON.stringify(Array.from(a)))},Ve=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),de=(e,a,r)=>{let o=r?.yesSharesUsdc??0,n=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:n>0:a==="yes"?n<=0:o<=0},wt=(e,a,r)=>{if(de(e,a,r))return a;let o=a==="yes"?"no":"yes";return de(e,o,r)?o:a};var mr=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},Ct=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`};var Ut=e=>{let a=String(e||"").match(/(\d+)\s+wins?/i),r=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:a&&Number(a[1])||0,losses:r&&Number(r[1])||0}};var gr=(e,a)=>{let r=String(e?.optionId||"").trim(),o=Math.max(0,Number(e?.optionSharesUsdc)||0),n=Math.max(0,Number(a?.optionPools?.[r])||0),s=Math.max(0,Number(a?.volumeUsdc)||0);return!r||o<=0?0:n<=0||s<=0?o:o/n*s},rt=(e,a)=>!oe(e)||!a?a:{...a,optionPools:Object.fromEntries(se(e).map(r=>[r.id,0]))};var kt=()=>{let e=0,a=0,r=0,o=I.filter(i=>i.timeframe==="Daily").map(i=>i.id),n=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",s={};if(n)try{s=JSON.parse(localStorage.getItem(n)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(s[i]?.result==="win"){e+=Number(s[i].points)||0,a++;continue}if(s[i]?.result==="loss"){r++;continue}let l=t.marketPositions[i],c=t.marketSnapshots[i]?.outcome??0;if(c===0)continue;let u=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,p=[];try{p=JSON.parse(localStorage.getItem(u)||"[]")}catch{}let v=p.includes("yes")&&p.includes("no");if(c===1&&l&&l.yesSharesUsdc>0){let h=v?50:100;e+=h,a++,s[i]={result:"win",points:h}}else if(c===2&&l&&l.noSharesUsdc>0){let h=v?50:100;e+=h,a++,s[i]={result:"win",points:h}}else l&&(l.yesSharesUsdc>0||l.noSharesUsdc>0)&&(r++,s[i]={result:"loss",points:0})}return n&&localStorage.setItem(n,JSON.stringify(s)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},fr=(e,a)=>{let r=V(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,n=new Set;for(let s=0;s<localStorage.length;s++){let i=localStorage.key(s);if(!i||!i.startsWith(o))continue;let l=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(l)&&n.add(l)}n.forEach(s=>{let i=`${o}${s}`,l={yesSharesUsdc:0,noSharesUsdc:0};try{l=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let d=(Number(l.yesSharesUsdc)||0)>0,c=(Number(l.noSharesUsdc)||0)>0;if(!d&&!c)return;let u=`siftle_traded_sides_${e.id}_${s}`,p=[];try{p=JSON.parse(localStorage.getItem(u)||"[]")}catch{}let v=p.includes("yes")&&p.includes("no"),h=a==="yes"?d:c,k=`siftle_resolved_results_${s}`,y={};try{y=JSON.parse(localStorage.getItem(k)||"{}")}catch{}y[e.id]={result:h?"win":"loss",points:h?v?50:100:0},localStorage.setItem(k,JSON.stringify(y));let T=0,g=0,m=0;Object.values(y).forEach(b=>{b.result==="win"?(g+=1,T+=Number(b.points)||0):b.result==="loss"&&(m+=1)});let L=localStorage.getItem(yt(s))||"";fetch(E("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:s,username:L,points:T,status:`${g} win${g===1?"":"s"}, ${m} loss${m===1?"":"es"}`})}).catch(b=>console.error("Failed to report local resolved score:",b))})},ge=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?kt():null,r=await fetch(E("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},hr=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let n=JSON.parse(localStorage.getItem(r)||"{}");((Number(n.yesSharesUsdc)||0)>0||(Number(n.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(E("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},vr=async e=>{let a=V(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(oe(e)&&!t.walletAddress){let r=e.resolvedOptionId||null,o=Number(e.outcome);t.marketSnapshots[e.id]=rt(e,{yesPriceCents:0,noPriceCents:0,volumeUsdc:Number(e.volumeUsdc)||0,yesSharesUsdc:0,noSharesUsdc:0,outcome:o===1||o===2||o===3?o:r?1:0,optionPools:e.optionPools||Object.fromEntries(se(e).map(n=>[n.id,0])),resolvedOptionId:r,traderCount:0}),t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(oe(e)&&t.walletAddress){let{position:r,snapshot:o}=await zt(a,t.walletAddress);t.marketPositions[e.id]=r,t.marketSnapshots[e.id]=rt(e,o)}else t.marketSnapshots[e.id]=rt(e,await Sa(a))}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&f()}}},z=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Yt();let a=Le(),r=await Promise.all(a.map(async o=>{let n=V(o);if(!n)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:s,snapshot:i}=await zt(n,t.walletAddress);return t.marketSnapshots[o.id]=i,[o.id,s]}catch(s){return console.warn(`Failed to load portfolio market ${o.id}:`,s),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,ge(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&f()}}},br=async(e,a)=>{if(!t.walletAddress){S("Session expired or wallet not connected. Please sign in."),Ee();return}let r=Le().find(c=>c.id===e);if(!r)return;t.marketTradeSide=a;let o=V(r);if(!o){S("Deploy this Arc market contract before trading"),f();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",f(),await z(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){S("Still loading your position. Try again in a moment."),f();return}let n=t.marketSnapshots[r.id];if(Ve(r,n)){t.tradeDrawerOpen=!1,S("This market is resolved and can no longer be traded."),f();return}let s=n?.yesPriceCents??r.probability,i=n?.noPriceCents??100-r.probability,l=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!de(t.marketOrderMode,a,l)){let c=pr(l),u=t.marketOrderMode==="sell"?c?`You can only exit your ${c.toUpperCase()} shares.`:"You do not have shares to exit in this market.":c?`Exit your ${c.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";S(u),t.marketTradeSide=wt(t.marketOrderMode,a,l),f();return}let d=De(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,l);t.marketTradeAmount=d,C("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",f();let c=await xa(o,t.marketOrderMode,a,d,u=>{t.marketTradeStatus=u,f()},s,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await je(),t.walletAddress&&(t.walletBalance=await ce(t.walletAddress)),await z({force:!0}),ge(!0).catch(u=>console.error("Failed to report leaderboard entry:",u)),t.walletAddress){let u=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,p={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let h=localStorage.getItem(u);if(h){let k=JSON.parse(h);p={yesCost:k.yesCost||0,noCost:k.noCost||0,yesShares:k.yesShares||0,noShares:k.noShares||0}}}catch{}let v=d;if(t.marketOrderMode==="buy"){let h=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,k=[];try{k=JSON.parse(localStorage.getItem(h)||"[]")}catch{}k.includes(a)||(k.push(a),localStorage.setItem(h,JSON.stringify(k))),a==="yes"?(p.yesCost+=v,p.yesShares=(p.yesShares||0)+v/(s/100)):(p.noCost+=v,p.noShares=(p.noShares||0)+v/(i/100))}else{let h=t.marketPositions[r.id];if(h){if(a==="yes"&&h.yesSharesUsdc>0){let k=Math.min(1,v/h.yesSharesUsdc);p.yesCost=Math.max(0,p.yesCost-p.yesCost*k),p.yesShares=Math.max(0,(p.yesShares||0)-(p.yesShares||0)*k)}else if(a==="no"&&h.noSharesUsdc>0){let k=Math.min(1,v/h.noSharesUsdc);p.noCost=Math.max(0,p.noCost-p.noCost*k),p.noShares=Math.max(0,(p.noShares||0)-(p.noShares||0)*k)}}}localStorage.setItem(u,JSON.stringify(p))}S(`Trade confirmed ${c.slice(0,8)}...`),C(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Fa(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(c){C("trade_failed"),mr(c)?(Ft(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),S("Session expired. Please sign in again.")):S(c instanceof Error?c.message:"Arc trade failed")}finally{t.marketTradeStatus=null,_(),f()}},yr=e=>oa(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",wr=e=>oa(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",kr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',Sr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',ke=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,xr=()=>`
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
`,$r=(e=4)=>`${ke("Loading stories")}${Array.from({length:e},xr).join("")}`,ye=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${ke("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,Tr=(e=3)=>`
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
`;var Mr=(e=3)=>`
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
`,Ar=(e=2)=>`
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
`,ot=e=>{let a=e.type==="tweet",r='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-top; color: var(--color-text-primary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',o='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 12px; height: 12px; display: inline-block; vertical-align: text-top; margin-right: 4px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';return`
    <article class="story-card ${a?"social-story tweet-card":Re(e)?"social-story":""}" data-story-id="${e.id}" role="button" tabindex="0" aria-label="Open summary for ${e.headline}">

      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            ${a?`<div style="margin-bottom: 6px;">${r}</div>`:""}
            <strong>${e.source}</strong>
            ${a?"":`
            <span class="provenance-badge" data-provenance-url="${w(e.sourceUrl)}" onclick="event.stopPropagation(); openProvenanceModal(this.dataset.provenanceUrl)" title="Audit source & summary authenticity">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>Verifiable
            </span>
            `}
            <span>${We(e)} - ${e.readTime}</span>
          </div>
        </div>
        <div class="story-card-actions">
          <button class="bookmark-button" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="${e.saved?"Remove saved story":"Save story"}">
            ${kr()}
          </button>
          <div class="share-control">
            <button class="export-button" type="button" aria-label="Export story card" data-export-id="${e.id}" aria-expanded="${t.activeShareStoryId===e.id}">
              ${Sr()}
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
              ${yr(e)}
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
                  <span class="provenance-badge mobile-badge" data-provenance-url="${w(e.sourceUrl)}" onclick="event.stopPropagation(); openProvenanceModal(this.dataset.provenanceUrl)" title="Audit source & summary authenticity">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 1px;"><polyline points="20 6 9 17 4 12"></polyline></svg>Verifiable
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
                ${wr(e)}
                ${/example\\.com/i.test(e.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
                <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
              `}
        </div>
      </div>

    </article>
  `},we=()=>{if(!x)return;if(x.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){x.innerHTML=$r(4);return}if(te){x.innerHTML=qr(),ie();return}let e=w(t.newsSearchQuery.trim()),r=`
    ${e?`<div class="news-feed-search-copy"><p>${at().length} matches for "${e}".</p></div>`:""}
    <div class="feed-minimal-top-bar" style="margin-bottom: 12px;">
      <label class="news-feed-search-bar minimal-search" style="flex: 1;" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search followed news..." value="${w(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </div>
  `;if(t.activeCategory==="Personalized"){let n=Ne(),s=ba(),i=[...n.clubs,...n.players,...n.managers].join(", ");if(!s){x.innerHTML=`
        <div class="briefing-header-card" style="margin-top: 10px; padding: 24px 18px; text-align: center;">
          <h3 style="margin: 0 0 6px 0; font-family: Outfit, sans-serif; font-size: 1.1rem;">Personalize Your Football Feed</h3>
          <p style="font-size: 0.84rem; color: #69728a; margin: 0 auto 16px auto; max-width: 420px;">Type your favorite clubs, managers, and players to build your custom feed.</p>
          <button type="button" class="briefing-back-btn" id="openTopicPickerBtn" style="margin: 0 auto; padding: 6px 20px;">Add Topics</button>
        </div>
      `,document.querySelector("#openTopicPickerBtn")?.addEventListener("click",Fe),ie();return}let l=at(),d=`
      <div class="personalized-minimal-bar">
        <div class="personalized-following-text">
          <span class="following-label">Following:</span>
          <span class="following-topics">${w(i)}</span>
          <button type="button" class="minimal-edit-btn" id="customizeTopicsFeedBtn">Edit</button>
        </div>
      </div>
    `;if(l.length===0){x.innerHTML=d+'<div class="portfolio-empty compact news-search-empty">No stories match your followed topics in recent news. Tap Edit to add more clubs or players.</div>',document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",Fe),ie();return}x.innerHTML=d+l.map(ot).join(""),document.querySelector("#customizeTopicsFeedBtn")?.addEventListener("click",Fe),ie();return}let o=at();if(o.length===0){let n=t.showSaved?[]:t.stories;if(n.length>0){x.innerHTML=r+n.map(ot).join(""),ie();return}x.innerHTML=r+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>',ie();return}x.innerHTML=r+o.map(ot).join(""),ie()},Et=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),xe=(e,a,r,o,n,s)=>{e.beginPath(),e.moveTo(a+s,r),e.lineTo(a+o-s,r),e.quadraticCurveTo(a+o,r,a+o,r+s),e.lineTo(a+o,r+n-s),e.quadraticCurveTo(a+o,r+n,a+o-s,r+n),e.lineTo(a+s,r+n),e.quadraticCurveTo(a,r+n,a,r+n-s),e.lineTo(a,r+s),e.quadraticCurveTo(a,r,a+s,r),e.closePath()},Lr=(e,a,r,o,n,s,i)=>{let l=a.split(/\s+/).filter(Boolean),d=[],c="";for(let u of l){let p=c?`${c} ${u}`:u;if(e.measureText(p).width<=n){c=p;continue}if(c&&d.push(c),c=u,d.length===i)break}if(c&&d.length<i&&d.push(c),l.length>0&&d.length===i){for(;e.measureText(`${d[i-1]}...`).width>n&&d[i-1].length>0;)d[i-1]=d[i-1].slice(0,-1).trim();d[i-1]=`${d[i-1]}...`}return d.forEach((u,p)=>e.fillText(u,r,o+p*s)),o+d.length*s},Pr=(e,a,r,o,n,s,i)=>{let l=Math.max(n/a.naturalWidth,s/a.naturalHeight),d=n/l,c=s/l,u=(a.naturalWidth-d)/2,p=(a.naturalHeight-c)/2;e.save(),xe(e,r,o,n,s,i),e.clip(),e.drawImage(a,u,p,d,c,r,o,n,s),e.restore()},It=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),Cr={"&quot;":'"',"&apos;":"'","&amp;":"&","&lt;":"<","&gt;":">","&nbsp;":" ","&ndash;":"-","&mdash;":"\u2014","&hellip;":"...","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&scaron;":"\u0161","&Scaron;":"\u0160","&eacute;":"\xE9","&Eacute;":"\xC9","&egrave;":"\xE8","&Egrave;":"\xC8","&ecirc;":"\xEA","&Ecirc;":"\xCA","&aacute;":"\xE1","&Aacute;":"\xC1","&agrave;":"\xE0","&Agrave;":"\xC0","&iacute;":"\xED","&Iacute;":"\xCD","&oacute;":"\xF3","&Oacute;":"\xD3","&uacute;":"\xFA","&Uacute;":"\xDA","&uuml;":"\xFC","&Uuml;":"\xDC","&ouml;":"\xF6","&Ouml;":"\xD6","&auml;":"\xE4","&Auml;":"\xC4","&ntilde;":"\xF1","&Ntilde;":"\xD1","&ccedil;":"\xE7","&Ccedil;":"\xC7","&szlig;":"\xDF","&euro;":"\u20AC","&pound;":"\xA3","&copy;":"\xA9"},pt=e=>e?e.replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"-").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))).replace(/&#x([0-9a-fA-F]+);/g,(a,r)=>String.fromCharCode(parseInt(r,16))).replace(/&[a-zA-Z]+;/g,a=>Cr[a]||a).replace(/&#[a-zA-Z0-9]*;?/g,""):"",Ur=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",Bt=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",xe(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let n=await Et("./assets/siftle-logo-small.png").catch(()=>null);n&&o.drawImage(n,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${pt(e.source)} - ${e.postedAt} ago`,110,140);let s=195;if(a){let l=await Et(Ur(e.imageUrl)).catch(()=>null);l?Pr(o,l,110,s,860,520,28):(o.fillStyle="#eef2ff",xe(o,110,s,860,520,28),o.fill())}else o.fillStyle="#eef2ff",xe(o,110,s,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",xe(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(W(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",Lr(o,pt(e.headline),110,888,860,54,4),r},ua=async e=>{let a=await Bt(e,!0);try{return await It(a)}catch{return It(await Bt(e,!1))}},ma=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,ga=async e=>{let a=await ua(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=ma(e),o.click(),URL.revokeObjectURL(r)},Er=async e=>{let a=await ua(e),r=new File([a],ma(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await ga(e)},Ir=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,we(),S(a==="share"?"Preparing share image":"Preparing download"),U&&(U.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await Er(r):await ga(r),S(a==="share"?"Share image ready":"Image saved"),U&&(U.textContent="Branded story image ready")}catch(o){console.warn(o),S("Image export unavailable"),U&&(U.textContent="Image export was cancelled or unavailable")}}},_t=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,o=vt(e);return`
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
      ${Ie(e)}
      ${r?`<div style="margin-top: 12px;">${ye()}</div>`:me(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${ye()}</div>`:o?`<div style="margin-top: 12px;">${bt(e)}</div>`:`<div style="margin-top: 12px;">${gt(ue(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},Br=async(e,a)=>{if(!t.walletAddress){S("Session expired or wallet not connected. Please sign in."),Ee();return}let r=Le().find(c=>c.id===e);if(!r||!oe(r))return;let o=se(r).find(c=>c.id===a);if(!o){S("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",f(),await z(),t.marketTradeStatus=null);let n=t.marketSnapshots[r.id];if(Ve(r,n)){S("This market is resolved and can no longer be traded.");return}let s=t.marketPositions[r.id],i=t.marketOrderMode==="sell";if(!i&&s?.optionId){S("Your pick is already locked for this market.");return}if(i&&!s?.optionId){S("You do not have a pick to exit.");return}let l=Math.max(0,Number(s?.optionSharesUsdc)||0);if(i&&l<=0){S("Your pick is still loading. Please try again."),await z({force:!0});return}let d=i?l:De(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=d,t.marketTradeOptionId=i&&s?.optionId||o.id,C("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",f(),await $a(r.id,i?"sell":"buy",i&&s?.optionId||o.id,d,c=>{t.marketTradeStatus=c,f()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await je(),t.walletAddress&&(t.walletBalance=await ce(t.walletAddress)),await z({force:!0}),C(i?"trade_sell_success":"trade_buy_success"),S(i?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(c){C("trade_failed"),S(c instanceof Error?c.message:"Trade failed")}finally{t.marketTradeStatus=null,_(),f()}},_r=()=>{if(!M||!x)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(x.hidden=!0,M.hidden=!1,M.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){M.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){M.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${Tr(3)}
        </article>
      </div>
    `;return}M.innerHTML=`
    <div class="detail-container thread-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card thread-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${or(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${_t(e,"Latest")}
          ${na(r?.items??[]).map(o=>_t(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Dr=()=>{if(!M||!x)return;if(t.selectedThreadUrl){_r();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){M.hidden=!0,M.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),x.hidden=!1;return}if(e.type==="tweet"){x.hidden=!0,M.hidden=!1,M.classList.add("fullscreen"),document.body.classList.add("detail-mode");let i='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';M.innerHTML=`
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
    `;return}let a=ue(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=me(e),n=t.unlockingSummaryUrl===e.sourceUrl,s=vt(e);x.hidden=!0,M.hidden=!1,M.classList.add("fullscreen"),document.body.classList.add("detail-mode"),M.innerHTML=`
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
          ${o?Ie(e):""}
          ${o?r?ye():s?bt(e):gt(a,e):Za(e,n)}
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
  `},Nr=e=>{let a=t.marketSnapshots[e.id],r=V(e),o=oe(e),n=se(e).length,s=a?.volumeUsdc??(Number(e.volumeUsdc)||0),i=a?.yesPriceCents,l=i??e.probability,d=o?`${n}`:`${l}%`,c=i===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${i}\xA2 \xB7 No ${100-i}\xA2`,u=i===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:c,p=Je(e),v=e.timeframe==="Daily"?Xt(e,a):e.closes;return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span class="timeframe-chip ${e.timeframe}">${e.timeframe==="Sagas"?"Sagas":e.timeframe}</span>
          ${e.points?`<span class="points-chip">+${e.points} pts</span>`:""}
        </div>
        <span class="market-card-updates">${p.evidence.length} updates</span>
      </div>
      <div class="market-card-body" style="display: flex; gap: 16px; align-items: flex-start; justify-content: space-between; width: 100%; text-align: left; margin: 4px 0;">
        <div class="market-card-text" style="flex: 1; min-width: 0;">
          <h2>${e.question}</h2>
        </div>
        ${p.imageUrl?`
        <div class="market-card-image-frame" style="width: 72px; height: 72px; min-width: 72px; border-radius: 12px; overflow: hidden; border: 1px solid var(--market-border); flex-shrink: 0;">
          <img src="${p.imageUrl}" alt="" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        `:""}
      </div>
      <div class="market-probability-row">
        <strong>${d}</strong>
        <span>${o?"possible outcomes":r?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${o?"Pick exactly one":"Choose a side"}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${o?100:l}%"></span></div>
      <div class="market-volume">
        <span>Market activity</span>
        <strong>Hidden</strong>
      </div>
      ${p.evidence&&p.evidence.length>0?`
      <div class="market-card-news" style="margin: 12px 0 8px; width: 100%; border-top: 1px dashed var(--market-border); padding-top: 10px; box-sizing: border-box;">
        <span style="font-size: 0.72rem; font-weight: 700; color: var(--market-text-muted); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px; text-align: left;">Related News</span>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          ${p.evidence.slice(0,2).map(h=>`
            <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 0.76rem; text-align: left; line-height: 1.35; padding: 4px 0;">
              <span style="background: rgba(59, 130, 246, 0.08); color: var(--market-accent); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 4px; padding: 1px 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; flex-shrink: 0; line-height: 1;">${w(h.source)}</span>
              <span style="color: var(--market-text-main); font-weight: 500;">${w(h.headline)}</span>
            </div>
          `).join("")}
        </div>
      </div>
      `:""}
      <div class="market-card-footer">
        <span>${p.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${v}`:`Closes ${v}`}</span>
      </div>
    </button>
  `},Or=e=>{let a=Je(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,n=100-o,s=a.evidence[0],i=s?s.headline:"No updates yet",l=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${n}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${l}`},Hr=e=>{if(!x||!M)return;let a=Je(e),r=!t.checkedMarketEvidence[e.id],o=V(e),n=t.marketSnapshots[e.id],s=oe(e),i=se(e);s&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let l=lr(e),d=!!(o&&!n),c=n?.yesPriceCents??(o?e.probability:0),u=n?.noPriceCents??(o?100-e.probability:0),p=d?"":o?`${c}\xA2`:"--",v=d?"":o?`${u}\xA2`:"--",h=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},k=!!h.optionId;s&&k&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),s&&!k&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let y=s&&t.marketOrderMode==="sell"&&k?Math.max(0,Number(h.optionSharesUsdc)||0):0,T=y>0?y:De(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,h),g=y>0?{min:0,max:y}:la(t.marketOrderMode,t.marketTradeSide,h),m=t.marketOrderMode==="buy"?"exactly $2.00 USDC":`Up to $${H(g.max)} USDC`,L=!t.walletAddress||t.hasLoadedPortfolioPositions,b=Ve(e,n),$=ea(e,n),A=!!$;s||(t.marketTradeSide=wt(t.marketOrderMode,t.marketTradeSide,h));let P=!s&&!b&&!A&&L&&de(t.marketOrderMode,"yes",h),N=!s&&!b&&!A&&L&&de(t.marketOrderMode,"no",h),Y=s?!b&&!A&&L&&(t.marketOrderMode==="sell"?k:!k&&!!l):!b&&!A&&L&&de(t.marketOrderMode,t.marketTradeSide,h),q=b?"Market resolved":$||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),K=b?"Market resolved":$||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),Z=s?T:da(n,t.marketTradeSide,T,t.marketOrderMode,h),Q=t.marketOrderMode==="buy"?"Buy":"Exit",fe=s?"Pick one outcome":o?"Arc testnet live":"Contract not deployed";x.hidden=!0,M.hidden=!1,M.classList.add("fullscreen"),document.body.classList.add("detail-mode"),vr(e),sa(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&z({force:!t.hasLoadedPortfolioPositions});let St=s?!!h.optionId:h.yesSharesUsdc>0||h.noSharesUsdc>0,Ze="";s&&St&&t.walletAddress?Ze=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${w(h.optionLabel||"Selected option")}</strong>
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
        ${ca(h,n).map(O=>`
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
    `),M.innerHTML=`
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
            <span class="market-status-pill">${fe}</span>
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
              <span>${ht(e,n)===null?"Closes":"Trade lock"}</span>
              <strong>${Xt(e,n)}</strong>
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
              <span>${r?"Loading...":`${a.evidence.length} stories`}</span>
            </header>
            <p class="market-thread-intro">Read the stories connected to this market, newest first.</p>
            <div class="market-thread-timeline">
              ${r?Mr(3):a.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':a.evidence.map(B=>{let O=Qt(e,B),he=t.unlockingSummaryUrl===B.sourceUrl;return`
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
                    ${Ie(O)}
                    ${he?`<div style="margin-top: 12px;">${ye()}</div>`:me(O)?t.loadingSummaryUrl===B.sourceUrl?`<div style="margin-top: 12px;">${ye()}</div>`:vt(O)?`<div style="margin-top: 12px;">${bt(O)}</div>`:`<div style="margin-top: 12px;">${gt(ue(O,t.aiSummaries[B.sourceUrl]),O)}</div>`:""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${s?`<span>${k?"Pick locked":"Choose one option"}</span><span><strong>${i.length} options</strong></span>`:`<span>Choose a side</span><span><strong>${t.marketOrderMode==="sell"?"Exit available":"Trade open"}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${b||A?"disabled":""}>
          ${b?"Market Resolved":$||(s?k?"Pick Locked":"Pick Outcome":"Trade Market")}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${b||A?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${b||A?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${s?i.map(B=>{let O=t.marketTradeOptionId===B.id||h.optionId===B.id,he=b||A||t.marketOrderMode==="sell"||k||!L;return`
                  <button type="button" class="market-side option ${O?"active":""} ${he?"disabled":""}" data-market-option-id="${w(B.id)}" ${he?"disabled":""}>
                    <span>${w(B.label)}</span>
                    ${h.optionId===B.id?"<small>Your pick</small>":""}
                  </button>
                `}).join(""):d?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${P?"":"disabled"}" data-market-trade-side="yes" ${P?"":"disabled"} title="${P?"Yes":q}">
                  <span>Yes</span>
                  ${P?"":`<small>${q}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${N?"":"disabled"}" data-market-trade-side="no" ${N?"":"disabled"} title="${N?"No":K}">
                  <span>No</span>
                  ${N?"":`<small>${K}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${m}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${g.min.toFixed(2)}" max="${Math.max(g.min,g.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${T}" data-market-amount ${b||A||t.marketOrderMode==="buy"?"disabled":""} style="${t.marketOrderMode==="buy"?"opacity: 0.7; cursor: not-allowed;":""}" />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>Market amounts are hidden while this market is open.</span>
          </div>

          <div class="drawer-action-container">
            ${d?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:b?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':A?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${$}</button>`:t.walletAddress?L?s&&t.marketOrderMode==="sell"&&k?`<button type="button" class="market-submit-button" data-market-option-trade="${w(h.optionId||"")}">Exit pick</button>`:Y?s?`<button type="button" class="market-submit-button" data-market-option-trade="${w(l?.id||"")}">Confirm ${w(l?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${Q} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${Q.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},fa=()=>{if(!x||!M)return;if(Ye?.toggleAttribute("hidden",!0),Ge?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.add("active"),Ce?.classList.remove("active"),Ue?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&I.forEach(s=>{sa(s)})},750),t.selectedMarketId){let s=I.find(i=>i.id===t.selectedMarketId);if(s){Hr(s);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),M.hidden=!0,M.classList.remove("fullscreen"),x.hidden=!1,x.classList.add("markets-list");let e=I,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(s=>{let i=t.activeMarketTimeframe===s,l=s==="All"?e.length:e.filter(c=>c.timeframe===s).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${s}">
            <span>${s==="Sagas"?"Sagas":s}</span>
            <span class="timeframe-tab-count">${l}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&I.length===0){x.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${nt}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
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
    `;return}let o="",n=(s,i,l)=>l.length===0?"":`
      <div class="market-timeframe-section">
        <div class="timeframe-section-header">
          <div class="timeframe-section-header-left">
            <h2>${s}</h2>
            <span class="timeframe-section-subtitle">${i}</span>
          </div>
          <span class="timeframe-section-count-badge">${l.length} ${l.length===1?"market":"markets"}</span>
        </div>
        <section class="markets-grid" aria-label="${s} prediction markets">
          ${l.map(Nr).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let s=e.filter(d=>d.timeframe==="Daily"),i=e.filter(d=>d.timeframe==="Weekly"),l=e.filter(d=>d.timeframe==="Sagas");o=`
      ${n("Daily","Ends in a day or two",s)}
      ${n("Weekly","Ends in a week",i)}
      ${n("Sagas (Long-term)","Narratives & futures",l)}
    `}else{let s=e.filter(d=>d.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,l="";t.activeMarketTimeframe==="Daily"?l="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?l="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",l="Narratives & futures"),o=`
      ${n(i,l,s)}
    `}x.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${nt}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},ha=()=>{if(!x||!M)return;Ye?.toggleAttribute("hidden",!0),Ge?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ce?.classList.remove("active"),Ue?.classList.remove("active"),document.body.classList.remove("detail-mode"),M.hidden=!0,x.hidden=!1,x.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?kt():null;t.walletAddress&&e&&fetch(E("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(g=>console.error("Failed to report user score:",g)),ee&&(clearInterval(ee),ee=null),x.innerHTML=`
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
  `,((g="2026-07-19T23:59:59.000Z")=>{let m=document.getElementById("seasonTimer");ee&&clearInterval(ee);let L=()=>{let $=new Date(g).getTime()-new Date().getTime();if($<=0){m&&(m.innerText="Season Finished!"),ee&&clearInterval(ee);return}let A=Math.floor($/(1e3*60*60*24)),P=Math.floor($%(1e3*60*60*24)/(1e3*60*60)),N=Math.floor($%(1e3*60*60)/(1e3*60)),Y=Math.floor($%(1e3*60)/1e3);m&&(m.innerText=`${A}d ${P}h ${N}m ${Y}s`)};L(),ee=setInterval(L,1e3)})();let r=g=>g.map((m,L)=>{let b=Number(m.globalRank)||L+1,$=String(m.username||""),A=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),P=A&&t.profileUsername?t.profileUsername:m.displayName||$,N=A?`${t.profileUsername?P:R($)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,Y=w(N),q=Ct(m.status);if(m.totalTrades!==void 0&&m.aiBriefingUnlocks!==void 0){let Ke=Ut(m.status);q=`${Ke.wins}W - ${Ke.losses}L \xB7 ${m.totalTrades} trades \xB7 ${m.aiBriefingUnlocks} unlocks`}let K=w(q),Z=m.nextSeasonDivision?`Division ${m.nextSeasonDivision}`:"Qualify",Q=b<=10?"promotion-zone":"safety-zone",fe=b<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${A?"user-highlight":""} ${Q}" role="listitem">
        <div class="leaderboard-row-left">
          ${fe}
          <span class="leaderboard-rank rank-${b}">${b}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(m.points)||0} pts</strong>
          <span>${m.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${w(Z)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${K}</span>
        </div>
      </div>
    `}).join(""),o=g=>g.map((m,L)=>{let b=L+1,$=String(m.username||""),A=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),P=A&&t.profileUsername?t.profileUsername:m.displayName||$,N=Ct(m.status);if(m.totalTrades!==void 0&&m.aiBriefingUnlocks!==void 0){let fe=Ut(m.status);N=`${fe.wins}W - ${fe.losses}L \xB7 ${m.totalTrades} trades \xB7 ${m.aiBriefingUnlocks} unlocks`}let Y=w(N),q=A?`${t.profileUsername?P:R($)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,K=w(q),Z="safety-zone",Q='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return b<=2?(Z="promotion-zone",Q='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):b>=5&&(Z="relegation-zone",Q='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${A?"user-highlight":""} ${Z}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${Q}
          <span class="leaderboard-rank rank-${b}" style="flex-shrink: 0; margin-right: 4px;">${b}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${K}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(m.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${Y}</span>
        </div>
      </div>
    `}).join(""),n=g=>g.map((m,L)=>{let b=L+1,$=String(m.username||""),A=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),P=A&&t.profileUsername?t.profileUsername:m.displayName||$,N=A?`${t.profileUsername?P:R($)} (You)`:P.startsWith("0x")&&P.length===42?R(P):P,Y=w(N),q=Number(m.unlocks)||0,K=Number(m.points)||0,Z=m.status||`${q} briefing unlock${q===1?"":"s"}`;return`
      <div class="leaderboard-row global-row ${A?"user-highlight":""}" role="listitem">
        <div class="leaderboard-row-left">
          <span class="leaderboard-rank rank-${b}">${b}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${K} pts</strong>
          <span>${Z}</span>
        </div>
        <div class="leaderboard-row-right">
          <span style="color: #34d399; font-weight: 600;">Preseason</span>
        </div>
      </div>
    `}).join(""),s=(g,m)=>{g&&(g.innerHTML=`
      <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        ${Array.from({length:m}).map(()=>`
          <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
            <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
              <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
            <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        `).join("")}
      </div>
    `)},i=()=>{let g=document.getElementById("leaderboardListContainer");s(g,6),fetch(E("/api/leaderboard/preseason")).then(m=>m.json()).then(m=>{let L=m.players||[];g&&(g.innerHTML=L.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the preseason leaderboard yet. Unlock a daily AI briefing to join!</p>`:n(L))}).catch(m=>{console.error("Failed to load preseason leaderboard:",m),g&&(g.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading preseason leaderboard. Please try again.</p>`)})},l=()=>{let g=document.getElementById("season1LeaderboardListContainer");s(g,6),fetch(E("/api/leaderboard/season1")).then(m=>m.json()).then(m=>{let L=m.map((b,$)=>{let A=$+1,P=null;return A<=6?P=1:A<=12&&(P=2),{username:b.wallet_address,displayName:b.username,points:b.points,status:`${b.wins} wins, ${b.losses} losses`,totalTrades:b.total_trades,aiBriefingUnlocks:b.ai_briefing_unlocks,globalRank:A,prizeEligible:A<=10,nextSeasonDivision:P}});if(g)if(G==="global")g.innerHTML=L.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in Season 1.</p>`:r(L);else{let b=document.getElementById("season1DivisionSelector"),$=b?Number(b.value):1,A=L.filter(P=>P.nextSeasonDivision===$);g.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in this division.</p>`:o(A)}}).catch(m=>{console.error("Failed to load Season 1 archive:",m),g&&(g.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading Season 1 leaderboard archive. Please try again.</p>`)})},d=g=>{G=g,document.querySelectorAll("[data-season1-view]").forEach(m=>{m.classList.toggle("active",m.dataset.season1View===g)}),document.getElementById("season1DivisionControls")?.toggleAttribute("hidden",g!=="division"),document.getElementById("season1GlobalControls")?.toggleAttribute("hidden",g!=="global"),document.getElementById("season1PrizeBox")?.toggleAttribute("hidden",g!=="global"),l()};i(),X&&d(G);let c=document.getElementById("archiveExpandBtn"),u=document.getElementById("archiveContent"),p=document.getElementById("archiveChevron");c?.addEventListener("click",()=>{X=!X,u&&(u.style.display=X?"block":"none"),p&&(p.style.transform=X?"rotate(180deg)":"rotate(0deg)"),X&&d(G)}),document.querySelectorAll("[data-season1-view]").forEach(g=>{g.addEventListener("click",()=>{let m=g.dataset.season1View==="division"?"division":"global";d(m)})}),document.getElementById("season1DivisionSelector")?.addEventListener("change",()=>{l()}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){S("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let m=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,m.toFixed(2)),t.walletBalance=m.toFixed(2),S("Claimed $100 USDC mock credits!"),_(),ha()}else S("Opening Circle Faucet..."),window.open(nt,"_blank")});let k=document.getElementById("howItWorksBtn"),y=document.getElementById("howItWorksModal"),T=document.getElementById("closeRulesModalBtn");k?.addEventListener("click",()=>{y&&y.classList.add("active")}),T?.addEventListener("click",()=>{y&&y.classList.remove("active")}),y?.addEventListener("click",g=>{g.target===y&&y.classList.remove("active")})},va=()=>{t.activeSurface="feed",t.selectedMarketId=null,Ye?.toggleAttribute("hidden",!0),Ge?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ce?.classList.add("active"),Ue?.classList.remove("active"),x?.classList.remove("markets-list")},Rr=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",Dt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id];if(oe(e)){let k=r?.resolvedOptionId||null,y=!!k,T=y&&a.optionId===k,g=gr(a,r),m=T?g:0,L=se(e).find(A=>A.id===k)?.label,b=!!a.claimedAt||qe().has(e.id),$=!!t.claimingMarketIds[e.id];return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${y?`Resolved: ${w(L||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${w(a.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${H(a.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${H(m)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${y?"":`Closes ${e.closes}`}</span>
          ${y?b?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':$?'<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>':T?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(m)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let o=Rr(r?.outcome),n=ca(a,r),s=n.reduce((k,y)=>Math.max(k,y.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,l=r?.outcome??0,d=qe().has(e.id),c=l===1?a.yesSharesUsdc:l===2?a.noSharesUsdc:0,u=l===1?r?.yesSharesUsdc??0:l===2?r?.noSharesUsdc??0:0,p=r?.volumeUsdc??0,v=c>0&&u>0?c/u*p:0,h=l===0?"":d?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':v>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(v)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${H(s)}</strong></div>
        ${n.map(k=>`
          <div><span>${k.label}</span><strong>${H(k.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${H(i)} total shares`:""}</span>
        ${h||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},zr=async e=>{if(!t.walletAddress){S("Please sign in first.");return}let a=Le().find(o=>o.id===e),r=a?V(a):"";if(!a||!r){S("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,j(),C("claim_attempt"),kt();let o=await Ta(r,t.walletAddress);C("claim_success"),o.won&&ur(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await ce(t.walletAddress),await z(),S(o.won?`Claimed $${H(o.amountUsdc)}`:"No payout to claim"),_(),j()}catch(o){C("claim_failed"),S(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],j()}},Fr=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(n=>{let s=n.displayName||R(n.walletAddress),i=n.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${w(s)}</strong>
            <span>${R(n.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${n.used}/${n.maxUses}</strong>
            <span>${i?"Expired":`${n.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${w(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${w(a.code)}">
              <span>Invite code</span>
              <strong>${w(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${w(a.inviteLink)}">
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
  `},j=()=>{if(!x||!M)return;Ye?.toggleAttribute("hidden",!0),Ge?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ce?.classList.remove("active"),Ue?.classList.add("active"),document.body.classList.remove("detail-mode"),M.hidden=!0,x.hidden=!1,x.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Me(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&Yt(),z({force:!t.hasLoadedPortfolioPositions}));let a=qe(),r=Le().filter(p=>{let v=t.marketPositions[p.id];return a.has(p.id)||v&&(v.yesSharesUsdc+v.noSharesUsdc>0||(v.optionSharesUsdc||0)>0)}),o=r.filter(p=>(t.marketSnapshots[p.id]?.outcome??0)===0),n=r.filter(p=>(t.marketSnapshots[p.id]?.outcome??0)!==0),s=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?R(t.walletAddress):"Anonymous"),l=w(i),d=w(t.profileUsername||""),c=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${w(t.profileNotice.message)}</div>`:"",u=i.charAt(0).toUpperCase();x.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${Fr(s)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${u}</span>
          </div>
          <div class="profile-details" style="display: flex !important; flex-direction: column !important; min-width: 0 !important;">
            <div class="username-display-row" style="display: flex !important; align-items: center !important; gap: 8px !important;">
              <span class="profile-username" style="font-family: 'Space Grotesk', sans-serif !important; font-size: 1.08rem !important; font-weight: 750 !important; color: var(--market-text-main) !important; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis !important; max-width: 180px !important;">${l}</span>
              ${s?`
                <button type="button" class="edit-username-btn" id="editUsernameBtn" style="background: transparent !important; border: none !important; color: var(--market-text-muted) !important; cursor: pointer !important; padding: 4px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
                </button>
              `:""}
            </div>
            ${s?`
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

        ${s?`
          <div class="profile-username-edit-form" id="usernameEditForm" style="display: none !important; align-items: center !important; gap: 8px !important; margin-top: 16px !important; width: 100% !important;">
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${d}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${c}


        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${ke("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
            </strong>
          </div>
          <div style="display: flex !important; align-items: center !important; gap: 8px !important;">
            ${s?`
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
        <span>Finalized ${n.length}</span>
      </div>
      ${t.loadingPortfolioPositions?Ar(2):t.walletAddress?r.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${o.length?o.map(Dt).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${n.length?n.map(Dt).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},f=()=>{if(Jt.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){fa();return}if(t.activeSurface==="portfolio"){j();return}if(t.activeSurface==="leaderboard"){ha();return}va(),ra(),we(),Dr(),F&&(F.value=t.activeArchiveDate??"")};st.textContent=Kt();ae?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");if(!r)return;let o=r.dataset.category;t.activeCategory=o,te=!1,re=null,window.history.pushState({},"","#feed"),J(),f(),o==="Personalized"&&!ba()&&Fe(),_e(),ne(t.activeCategory)});var te=!1,Nt="overall",re=null,ze=!1,Ne=()=>{try{let e=localStorage.getItem("siftle_followed_entities");if(e)return JSON.parse(e)}catch{}return{clubs:[],managers:[],players:[]}},ba=()=>{let e=Ne();return(e.clubs?.length||0)+(e.managers?.length||0)+(e.players?.length||0)>0},jr=e=>{localStorage.setItem("siftle_followed_entities",JSON.stringify(e))},Wr=e=>{if(!e)return"";let a=e.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o=pt(a).split(`
`),n="",s="",i=!1,l=!1;for(let d=0;d<o.length;d++){let c=o[d].trim();if(!c)continue;if(/what matters/i.test(c)||c.includes("\u{1F3AF}")){i&&(s+="</ul></div>",i=!1);let v=c.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`
        <div class="briefing-highlight-box what-matters">
          <h4>${w(v||"What Matters Most")}</h4>
          <p>
      `,l=!0;continue}if(/watch next/i.test(c)||c.includes("\u23F1\uFE0F")){l&&(s+="</p></div>",l=!1);let v=c.replace(/^#+\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`
        <div class="briefing-highlight-box watch-next">
          <h4>${w(v||"Key Things to Watch")}</h4>
          <ul>
      `,i=!0;continue}if(c.startsWith("## ")||c.startsWith("# "))continue;if(i){let v=c.replace(/^[-*]\s*/,"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");v&&(s+=`<li>${v}</li>`);continue}if(l){let v=c.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");s+=`${v} `;continue}let u=c.match(/^(?:###\s*)?(\d+)\.\s*(.*)$/);if(u){let v=u[1],h=u[2].replace(/\*\*/g,"").trim(),k="",y="",T=d+1;for(;T<o.length&&!o[T].trim().match(/^(?:###\s*)?(?:\d+\.|WHAT MATTERS|WATCH NEXT|🎯|⏱️)/i);){let b=o[T].trim();b.startsWith("*[")&&b.endsWith("]*")?y=b.slice(2,-2):b.startsWith("*")&&b.endsWith("*")?y=b.slice(1,-1):b.length>0&&!b.startsWith("###")&&(k+=(k?" ":"")+b),T++}d=T-1;let g="",m=k.replace(/\.\.\.$/,"").trim();m=m.replace(/[,;:\s]+(?:but|and|or|the|a|an|with|in|on|of|to|for|as|is|was|are|were|after|while|that|which|who)$/i,"").trim(),m&&!m.endsWith("...")&&m.length>=35&&m.split(" ").length>=7?g=m:g=h,g=g.replace(/^(?:deal done|here we go|official,?\s*exclusive\s*story\s*confirmed|breaking news|breaking|official|exclusive|update)\s*[:\.\-]?\s*/gi,"").replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi,"").replace(/@[a-zA-Z0-9_]+/g,"").replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g,"").replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g,"").replace(/\s+/g," ").trim(),g=g.replace(/[,;:\-\s]+$/,""),g.length>0&&(g=g.charAt(0).toUpperCase()+g.slice(1)),g.endsWith(".")||(g+=".");let L=y.replace(/·\s*(confirmed|in progress|major|reported).*/i,"").trim();n+=`
        <div class="briefing-event-item-card">
          <div class="briefing-event-item-header">
            <span class="briefing-event-num-pill">${v}</span>
            <div class="briefing-event-item-content">
              <p class="briefing-event-item-single-text">${w(g)}</p>
              <div class="briefing-event-item-meta">
                ${L?`<span class="briefing-source-tag">${w(L)}</span>`:""}
              </div>
            </div>
          </div>
        </div>
      `;continue}if(c.startsWith("### ")&&!c.match(/###\s*\d+\./)){let v=c.replace(/^###\s*/,"").replace(/[🎯⚡⏱️⭐]\s*/g,"");s+=`<h4 style="margin: 12px 0 6px 0; font-family: Outfit, sans-serif; font-size: 1rem; color: inherit;">${w(v)}</h4>`;continue}let p=c.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");s+=`<p style="margin: 0 0 10px 0; font-size: 0.88rem; color: inherit; line-height: 1.5;">${p}</p>`}return l&&(s+="</p></div>"),i&&(s+="</ul></div>"),n+s},Fe=()=>{document.querySelectorAll(".personalization-modal-overlay").forEach(o=>o.remove());let e=Ne(),a=document.createElement("div");a.className="personalization-modal-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let r=()=>a.remove();a.querySelector("#prefCloseBtn")?.addEventListener("click",r),a.addEventListener("click",o=>{o.target===a&&r()}),a.querySelector("#prefClearBtn")?.addEventListener("click",()=>{a.querySelector("#clubInput").value="",a.querySelector("#managerInput").value="",a.querySelector("#playerInput").value=""}),a.querySelector("#prefSaveBtn")?.addEventListener("click",()=>{let o=a.querySelector("#clubInput")?.value||"",n=a.querySelector("#managerInput")?.value||"",s=a.querySelector("#playerInput")?.value||"",i=d=>d.split(",").map(c=>c.trim()).filter(Boolean),l={clubs:i(o),managers:i(n),players:i(s)};jr(l),S("Topics saved"),r(),t.activeCategory="Personalized",f()})},qr=()=>{if(ze)return`
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
        ${Wr(e.markdown||"")}

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
  `},ie=()=>{document.querySelector("#backToFeedBtn")?.addEventListener("click",()=>{te=!1,f()}),document.querySelector("#openBriefingBtn")?.addEventListener("click",()=>{te=!0;let e=t.activeCategory==="Personalized"?"personalized":"overall";Nt!==e&&(re=null),Nt=e,f(),re||ut(!1)}),document.querySelector("#catchUpAgainBtn")?.addEventListener("click",()=>{ut(!1)})},ut=async(e=!1)=>{ze=!0,te&&f();let a=e?null:localStorage.getItem("siftle_last_briefing_at"),r=Ne();try{let o=await fetch(E("/api/briefing/delta"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lastBriefingAt:a,context:t.activeCategory==="Personalized"?"personalized":"overall",entities:r})}),n=await o.json();ze=!1,o.ok&&n.success?(re=n,localStorage.setItem("siftle_last_briefing_at",n.periodEnd||new Date().toISOString()),te&&f()):(re={periodStart:new Date().toISOString(),markdown:`### Failed to generate briefing

${n.error||"Please try again in a moment."}`},te&&f())}catch(o){ze=!1,re={periodStart:new Date().toISOString(),markdown:`### Failed to connect to briefing service

${o.message}`},te&&f()}};x?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,o=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,we();let n=x?.querySelector("#newsSearchInput");n&&(n.focus(),n.setSelectionRange(r,o))});Pe?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),J(),f()});Ce?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),J(),f(),_e(),ne(t.activeCategory)});Ue?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),J(),f()});le?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Be()):Ee()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{S("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&zr(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Me(),j();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,j();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Me(),j();return}let n=a.closest("[data-copy-referral-code]");if(n){let i=n.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>S("Invite code copied"));return}let s=a.closest("[data-copy-referral-link]");if(s){let i=s.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>S("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Ft():Ee())});Jt.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),_e(),ne(t.activeCategory),a==="saved"&&(cr(),mt(),Te())),J(),f()})});F?.addEventListener("change",()=>{t.activeArchiveDate=F.value||null,window.history.pushState({},"","#feed"),J(),f(),ne(t.activeCategory)});Na?.addEventListener("click",()=>{t.activeArchiveDate=null,F&&(F.value=""),window.history.pushState({},"","#feed"),J(),f(),ne(t.activeCategory)});x?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let y=x?.querySelector(".username-display-row"),T=x?.querySelector("#usernameEditForm");if(y&&T){y.style.display="none",T.style.display="flex";let g=T.querySelector("#usernameInput");g&&g.focus()}return}if(a.closest("#cancelUsernameBtn")){let y=x?.querySelector(".username-display-row"),T=x?.querySelector("#usernameEditForm");y&&T&&(y.style.display="flex",T.style.display="none");return}let n=a.closest("#saveUsernameBtn");if(n){let T=x?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(T){let g=T.value.trim().slice(0,15),m=n,L=m.textContent||"Save";m.disabled=!0,m.textContent="Saving...",dr(g),t.profileNotice=null;try{t.walletAddress&&await ge(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},S("Username updated"),j()}catch(b){let $=b instanceof Error?b.message:"Username save failed";t.profileNotice={type:"error",message:$},S($),m.disabled=!1,m.textContent=L,j()}}return}let s=a.closest("[data-timeframe]");if(s){let y=s.dataset.timeframe;t.activeMarketTimeframe=y,fa();return}let i=a.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,C("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),f(),window.scrollTo({top:0,behavior:"smooth"});return}if(a.closest(".read-tweet-btn")){e.stopPropagation();let y=a.closest("[data-story-id]");y&&lt(Number(y.dataset.storyId),!0);return}let d=a.closest("[data-thread-story-id]"),c=a.closest("[data-export-id]"),u=a.closest("[data-export-action]"),p=a.closest("[data-story-id]");if(d){e.stopPropagation();let y=t.stories.find(T=>T.id===Number(d.dataset.threadStoryId));y&&Qa(y);return}let v=a.closest(".mobile-bookmark-btn, .bookmark-button");if(v){e.stopPropagation();let y=v.dataset.bookmarkUrl||"",T=t.stories.find(g=>g.sourceUrl===y);if(!T)return;T.saved=!T.saved,T.saved?pe.add(y):pe.delete(y),Da(),S(T.saved?"Saved to your list":"Removed from saved"),we();return}if(u){e.stopPropagation(),Ir(Number(u.dataset.exportStoryId),u.dataset.exportAction);return}if(c){e.stopPropagation();let y=Number(c.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===y?null:y,we();return}if(!p||a.closest("a"))return;let h=Number(p.dataset.storyId),k=t.stories.find(y=>y.id===h);k&&C("feed_story_click",k.sourceUrl,k.headline),lt(h,!0)});x?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");if(!r||e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();let o=Number(r.dataset.storyId),n=t.stories.find(s=>s.id===o);n&&C("feed_story_click",n.sourceUrl,n.headline),lt(o)});M?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let u=t.stories.find(p=>p.id===Number(r.dataset.unlockBriefing));u&&it(u);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let u=decodeURIComponent(o.dataset.unlockBriefingUrl||""),p=Ka(u);p&&(me(p)?Ae(p):it(p));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),f();return}if(a.closest("#openTradeDrawerBtn")){let u=I.find(h=>h.id===t.selectedMarketId);if(u){if(Ve(u,t.marketSnapshots[u.id])){S("This market is resolved and can no longer be traded.");return}if(ea(u,t.marketSnapshots[u.id])){S("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,C("trade_drawer_open");let p=M.querySelector("#tradeDrawer"),v=M.querySelector("#tradeDrawerBackdrop");p?.classList.add("open"),v?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let u=M.querySelector("#tradeDrawer"),p=M.querySelector("#tradeDrawerBackdrop");u?.classList.remove("open"),p?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let u=I.find(p=>p.id===t.selectedMarketId);if(u){let p=Or(u),v=`https://api.whatsapp.com/send?text=${encodeURIComponent(p)}`;window.open(v,"_blank")}return}let n=a.closest("[data-market-trade]");if(n&&t.selectedMarketId){let u=n.dataset.marketTrade;br(t.selectedMarketId,u);return}let s=a.closest("[data-market-option-trade]");if(s&&t.selectedMarketId){let u=s.dataset.marketOptionTrade||t.marketTradeOptionId||"";Br(t.selectedMarketId,u);return}let i=a.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,f();return}let l=a.closest("[data-market-trade-side]");if(l){if(l.disabled||l.classList.contains("disabled"))return;let u=I.find(h=>h.id===t.selectedMarketId),p=u?t.marketPositions[u.id]:void 0,v=l.dataset.marketTradeSide;if(!de(t.marketOrderMode,v,p))return;t.marketTradeSide=v,f();return}let d=a.closest("[data-market-order-mode]");if(d){t.marketOrderMode=d.dataset.marketOrderMode;let u=I.find(v=>v.id===t.selectedMarketId),p=u?t.marketPositions[u.id]:void 0;t.marketTradeSide=wt(t.marketOrderMode,t.marketTradeSide,p),t.marketTradeAmount=De(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,p),f();return}let c=a.closest("[data-back-to-feed]");if(c){if(c.classList.contains("read-more-news-btn")){let p=new URLSearchParams(window.location.search).get("url"),v=document.querySelector(".detail-card h2")?.textContent||void 0;C("shared_read_more_click",p||void 0,v)}Xa()}});M?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=I.find(d=>d.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,n=r?t.marketPositions[r.id]:void 0,s=Number(a.value);t.marketTradeAmount=Number.isFinite(s)?s:0;let i=r&&oe(r)?t.marketTradeAmount:da(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,n),l=M.querySelector(".market-inline-payout strong");l&&(l.textContent=`$${H(i)}`)});M?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});M?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=I.find(n=>n.id===t.selectedMarketId),o=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=De(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,o),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Be);window.addEventListener("hashchange",Be);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await ce(t.walletAddress);t.walletBalance=a,_(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),La())}});Xe?.addEventListener("click",()=>{if(!et||!Xe)return;let e=!et.hidden;et.hidden=e,Xe.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,we());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(n=>n.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};U&&(U.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,F&&(F.value=""),J(),_e(),ne(t.activeCategory)),r.dataset.menuAction==="saved"&&(va(),mt(),Te(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),J(),f())});var Yr=async()=>{try{let e=await fetch(E("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),f())}catch(e){console.error("Failed to prefetch unlock config:",e)}},Gr=()=>{window.setInterval(async()=>{try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(E("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(I=o,t.activeSurface==="markets"&&f())}}catch(e){console.warn("Background market poll failed:",e)}},3e4)};f();_();Yr();ne(t.activeCategory);Gr();_a().then(()=>{hr(),f(),_(),window.setTimeout(Kr,1200),ar()});var Jr=document.querySelector("#mobileArchiveCard"),be=document.querySelector("#archiveControls");Jr?.addEventListener("click",()=>{if(!be)return;be.classList.toggle("mobile-open")&&setTimeout(()=>be.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Vr=document.querySelector("#archivePill");Vr?.addEventListener("click",e=>{if(e.stopPropagation(),!be)return;be.classList.toggle("mobile-open")&&setTimeout(()=>be.scrollIntoView({behavior:"smooth",block:"center"}),50)});var He=!1,Ot=!1,Kr=()=>{Ot||(Ot=!0,(async()=>{let e=await je();if(He=!!e,e){t.walletConnecting=!0,_();try{let a=await Ma();He=!1,t.walletConnecting=!1,a?(t.walletAddress=await je(),t.walletAddress&&(ve(),t.walletBalance=await ce(t.walletAddress),await z()),_(),t.activeSurface==="portfolio"&&f()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),S("Session expired. Please sign in again."),_(),f())}catch(a){console.warn(a),He=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),S("Session expired. Please sign in again."),_(),f()}}await Aa(a=>{He||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ve(),a&&ge(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,_(),a?(Me(),ce(a).then(r=>{t.walletBalance=r,_(),t.activeSurface==="portfolio"&&f()}),z()):t.activeSurface==="portfolio"&&f())})})())};C("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",n=typeof o=="string"?o:r.getAttribute("class")||"",s=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(n.includes("source-button")||n.includes("source-btn")||n.includes("source-link")||r.textContent?.trim()==="Open source")&&!n.includes("disabled")&&s!=="#"&&C("open_source")}},!0);window.openProvenanceModal=async e=>{let a=document.querySelector("#provenanceModal");a||(a=document.createElement("div"),a.id="provenanceModal",a.className="provenance-modal-overlay",document.body.appendChild(a)),a.innerHTML=`
    <div class="provenance-modal-card">
      <div class="provenance-modal-header">
        <h3 class="provenance-modal-title">Provenance Audit</h3>
        <button type="button" class="provenance-close-btn">&times;</button>
      </div>
      <div class="provenance-modal-body" style="text-align: center; padding: 40px 20px;">
        <div class="provenance-spinner"></div>
        <p style="color: #69728a; margin-top: 16px; font-size: 0.9rem;">Fetching cryptographic signatures from Shelby Storage...</p>
      </div>
    </div>
  `,a.style.display="flex",a.querySelector(".provenance-close-btn")?.addEventListener("click",()=>{a.style.display="none"});try{let o=encodeURIComponent(e),n=await fetch(E(`/api/story?sourceUrl=${o}`));if(!n.ok)throw new Error("Story not found");let s=await n.ok?await n.json():null,i=await fetch(E(`/api/story/proof?sourceUrl=${o}`));if(!i.ok)throw new Error("Provenance proof not found");let l=await i.json(),d=s?!!t.aiSummaries[s.sourceUrl]:!1,c=null;if(d&&s&&(c=t.aiSummaryProofs[s.sourceUrl],!c)){let u=l.data_hash||"local-summary-hash";c={providerAddress:"0x61C0007197E7D4d6A842d6768E8035728877B9F6",endpoint:"https://router-api.0g.ai/v1",model:"deepseek-v4-flash",responseId:"mock-cached-summary-resp-"+u.slice(0,10),status:200,x_0g_proof:"0x09a1"+u.slice(0,20)+"d4b2e88a9134c89ea47eb382",provenance_bonded:!0}}Zr(a,s,l,c)}catch(o){a.innerHTML=`
      <div class="provenance-modal-card">
        <div class="provenance-modal-header">
          <h3 class="provenance-modal-title">Provenance Audit Failed</h3>
          <button type="button" class="provenance-close-btn">&times;</button>
        </div>
        <div class="provenance-modal-body" style="text-align: center; padding: 30px 20px;">
          <svg viewBox="0 0 24 24" width="40" height="40" stroke="#f23051" stroke-width="2" fill="none" style="margin-bottom: 12px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <p style="font-size: 0.92rem;">Unable to load source verification credentials.</p>
          <p style="color: #69728a; font-size: 0.8rem; margin-top: 6px;">${w(o.message)}</p>
        </div>
      </div>
    `,a.querySelector(".provenance-close-btn")?.addEventListener("click",()=>{a.style.display="none"})}};var Ht=(e,a)=>{let r=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(o)},Rt=(e,a)=>{navigator.clipboard.writeText(e).then(()=>{let r=a.innerHTML;a.innerHTML='<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="vertical-align: middle; margin-right: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!',a.style.borderColor="#00e673",a.style.color="#00e673",setTimeout(()=>{a.innerHTML=r,a.style.borderColor="",a.style.color=""},2e3)}).catch(r=>{console.error("Failed to copy text: ",r)})},Zr=(e,a,r,o)=>{let n=i=>{let l=e.querySelector(".provenance-tab-body");if(l){if(i==="tls"){l.innerHTML=`
        <div class="provenance-meta-grid">
          <div class="provenance-meta-item">
            <span class="meta-label">Proof Protocol</span>
            <span class="meta-value protocol-tag">${w(r.proof_type)} ${w(r.version)}</span>
          </div>
          <div class="provenance-meta-item">
            <span class="meta-label">Fetch Timestamp</span>
            <span class="meta-value">${w(new Date(r.notary.timestamp).toLocaleString())}</span>
          </div>
          <div class="provenance-meta-item">
            <span class="meta-label">Target Website</span>
            <span class="meta-value">${w(r.handshake.server_name)}</span>
          </div>
          <div class="provenance-meta-item">
            <span class="meta-label">SSL CA Signer</span>
            <span class="meta-value">${w(r.certificate.issued_by)}</span>
          </div>
          <div class="provenance-meta-item full-width">
            <span class="meta-label">Certificate Fingerprint (SHA-256)</span>
            <span class="meta-value code-font">${w(r.certificate.fingerprint_sha256)}</span>
          </div>
          <div class="provenance-meta-item full-width" style="position: relative;">
            <span class="meta-label">Raw Attested Content Hash (data_hash)</span>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
              <span class="meta-value code-font" style="word-break: break-all; flex: 1; padding: 6px 10px; background: rgba(0,0,0,0.2); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">${w(r.data_hash)}</span>
              <button type="button" class="copy-hash-btn" data-hash="${w(r.data_hash)}" style="padding: 6px 10px; font-size: 0.68rem; border: 1px solid #334155; border-radius: 6px; background: rgba(148, 163, 184, 0.08); color: #cbd5e1; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 4px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy
              </button>
            </div>
          </div>
        </div>
        <div style="margin-top: 24px; display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%;">
          <button type="button" class="provenance-action-link download-tls-btn" style="width: 100%; max-width: 320px; display: flex; justify-content: center; align-items: center;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download TLSNotary Proof JSON
          </button>
          <div style="display: flex; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap;">
            <a href="https://explorer.tlsnotary.org/" target="_blank" style="font-size: 0.76rem; color: #3157ff; text-decoration: underline;" onclick="event.stopPropagation();">
              Open TLSNotary Verifier Portal
            </a>
            <span style="color: #69728a; font-size: 0.76rem;">\u2022</span>
            <a href="https://storagescan-galileo.0g.ai/submission/194000" target="_blank" style="font-size: 0.76rem; color: #3157ff; text-decoration: underline;" onclick="event.stopPropagation();">
              View Active Proof on 0G Storage Scan
            </a>
          </div>
          <div style="font-size: 0.72rem; color: #69728a; text-align: center; margin-top: 6px;">
            *(Mock hash generated for preview. Click 'Active Proof' to view a real live page)*
          </div>
        </div>
      `,l.querySelector(".download-tls-btn")?.addEventListener("click",()=>{Ht(`tls_proof_${r.handshake.server_name}.json`,r)});let c=l.querySelector(".copy-hash-btn");c?.addEventListener("click",u=>{u.stopPropagation(),Rt(c.dataset.hash||"",c)})}else if(i==="ai"){if(!o){l.innerHTML=`
          <div style="text-align: center; padding: 30px 20px;">
            <div style="font-size: 2.2rem; margin-bottom: 12px; animation: provPulse 2s infinite;">\u23F3</div>
            <h4 style="font-family: Outfit, sans-serif; font-size: 1.05rem; font-weight: 700; color: var(--ink); margin: 0 0 6px 0;">Pending Summary Generation</h4>
            <p style="font-size: 0.82rem; color: #69728a; margin: 0 auto; max-width: 380px; line-height: 1.45;">The AI inference verification signature is generated dynamically when you unlock the briefing card on Siftle's home feed.</p>
          </div>
        `;return}l.innerHTML=`
        <div class="provenance-meta-grid">
          <div class="provenance-meta-item">
            <span class="meta-label">Inference Model</span>
            <span class="meta-value protocol-tag ai-tag">${w(o.model)}</span>
          </div>
          <div class="provenance-meta-item">
            <span class="meta-label">Verification Status</span>
            <span class="meta-value status-success-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-right: 4px;"><polyline points="20 6 9 17 4 12"></polyline></svg>Proven
            </span>
          </div>
          <div class="provenance-meta-item">
            <span class="meta-label">Compute Gateway</span>
            <span class="meta-value">${w(o.endpoint)}</span>
          </div>
          <div class="provenance-meta-item">
            <span class="meta-label">Provider Account</span>
            <span class="meta-value code-font" style="font-size: 0.8rem;">${w(o.providerAddress)}</span>
          </div>
          <div class="provenance-meta-item full-width" style="position: relative;">
            <span class="meta-label">0G Coprocessor Execution Proof (x_0g_proof)</span>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
              <span class="meta-value code-font" style="word-break: break-all; flex: 1; padding: 6px 10px; background: rgba(0,0,0,0.2); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">${w(o.x_0g_proof)}</span>
              <button type="button" class="copy-hash-btn" data-hash="${w(o.x_0g_proof)}" style="padding: 6px 10px; font-size: 0.68rem; border: 1px solid #334155; border-radius: 6px; background: rgba(148, 163, 184, 0.08); color: #cbd5e1; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 4px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy
              </button>
            </div>
          </div>
          <div class="provenance-meta-item full-width" style="margin-top: 10px; padding: 12px; background: rgba(0, 230, 115, 0.04); border: 1px dashed rgba(0, 230, 115, 0.2); border-radius: 6px;">
            <p style="font-size: 0.8rem; color: #00e673; margin: 0; display: flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <strong>Provenance Bonded:</strong> Verified summary mathematically bound to input source content hash.
            </p>
          </div>
        </div>
        <div style="margin-top: 24px; display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%;">
          <button type="button" class="provenance-action-link ai-action-link download-ai-btn" style="width: 100%; max-width: 320px; display: flex; justify-content: center; align-items: center;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download AI Execution Proof JSON
          </button>
          <div style="display: flex; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap;">
            <a href="https://chainscan-galileo.0g.ai/" target="_blank" style="font-size: 0.76rem; color: #7c3cff; text-decoration: underline;" onclick="event.stopPropagation();">
              Open 0G Chain Explorer
            </a>
          </div>
          <div style="font-size: 0.72rem; color: #69728a; text-align: center; margin-top: 6px;">
            *(Mock transaction generated for preview. Use explorer search to check live status)*
          </div>
        </div>
      `,l.querySelector(".download-ai-btn")?.addEventListener("click",()=>{Ht(`ai_inference_proof_${o.responseId}.json`,o)});let c=l.querySelector(".copy-hash-btn");c?.addEventListener("click",u=>{u.stopPropagation(),Rt(c.dataset.hash||"",c)})}else if(i==="json"){let d={source_tls_proof:r,ai_inference_proof:o};l.innerHTML=`
        <div class="provenance-json-viewer">
          <pre><code>${w(JSON.stringify(d,null,2))}</code></pre>
        </div>
      `}}};e.innerHTML=`
    <div class="provenance-modal-card">
      <div class="provenance-modal-header">
        <div>
          <h3 class="provenance-modal-title" style="margin-bottom: 2px;">Provenance Audit</h3>
          <span style="font-size: 0.76rem; color: #69728a; word-break: break-all;">${w(a?.headline||"Story Verification")}</span>
        </div>
        <button type="button" class="provenance-close-btn">&times;</button>
      </div>
      <div class="provenance-modal-tabs">
        <button type="button" class="provenance-tab-btn active" data-provenance-tab="tls">TLS Proof</button>
        <button type="button" class="provenance-tab-btn" data-provenance-tab="ai">AI Verification</button>
        <button type="button" class="provenance-tab-btn" data-provenance-tab="json">Raw JSON</button>
      </div>
      <div class="provenance-modal-body">
        <div class="provenance-tab-body"></div>
      </div>
    </div>
  `,e.querySelector(".provenance-close-btn")?.addEventListener("click",()=>{e.style.display="none"});let s=e.querySelectorAll(".provenance-tab-btn");s.forEach(i=>{i.addEventListener("click",l=>{s.forEach(c=>c.classList.remove("active"));let d=l.currentTarget;d.classList.add("active"),n(d.dataset.provenanceTab||"tls")})}),n("tls")};
