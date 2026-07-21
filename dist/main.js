import"./chunks/chunk-ZUUPKAA6.js";var ue="Sports",Ie=[{id:"wc-spain-belgium-qualify",category:ue,timeframe:"Daily",optionMarket:!0,question:"Which team will qualify in Spain vs Belgium?",options:[{id:"spain",label:"Spain"},{id:"belgium",label:"Belgium"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on the team that officially qualifies in Spain vs Belgium, including extra time and penalties.",threadTopic:"Spain vs Belgium Qualify Watch",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-spain-concede-belgium",category:ue,timeframe:"Daily",optionMarket:!0,question:"Will Spain concede against Belgium?",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on whether Belgium are officially credited with at least one goal against Spain in regular time or extra time. Penalty shootout goals do not count.",threadTopic:"Spain Clean Sheet Watch vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-yamal-goal-assist-belgium",category:ue,timeframe:"Daily",optionMarket:!0,question:"Will Lamine Yamal record a goal or assist against Belgium?",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on whether Lamine Yamal is officially credited with at least one goal or at least one assist for Spain against Belgium in regular time or extra time. Penalty shootout goals do not count.",threadTopic:"Lamine Yamal Impact vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-spain-goals-belgium",category:ue,timeframe:"Daily",optionMarket:!0,question:"How many goals will Spain score in regular + extra time vs Belgium?",options:[{id:"0",label:"0 goals"},{id:"1",label:"1 goal"},{id:"2",label:"2 goals"},{id:"3-plus",label:"3+ goals"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on the number of goals officially scored by Spain against Belgium in regular time and extra time. Penalty shootout goals do not count.",threadTopic:"Spain Goals vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-tonali-spurs",category:ue,timeframe:"Sagas",question:"Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",probability:58,closes:"September 1, 2026",resolution:"Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline.",threadTopic:"Sandro Tonali Tottenham Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$182K",traders:"980",liquidity:"$29K",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-guimaraes-arsenal",category:ue,timeframe:"Sagas",question:"Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",probability:45,closes:"September 1, 2026",resolution:"Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline.",threadTopic:"Bruno Guimaraes Arsenal Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$204K",traders:"1,240",liquidity:"$36K",imageUrl:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",evidence:[]}];var Ke="https://faucet.circle.com/",pt="siftle_backend_wallet_migration_notice",qe=null,N=()=>(qe||(qe=import("./chunks/arc-NVRCYTY3.js")),qe),R=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,sa=async()=>(await N()).connectArcWallet(),se=async e=>(await N()).readArcUsdcBalance(e),na=async(e,a,r,o)=>(await N()).payAiBriefingUnlock(e,a,r,o),ia=e=>{N().then(a=>a.resolveLocalTestMarketYes(e))},la=async e=>(await N()).readArcMarketSnapshot(e);var At=async(e,a)=>(await N()).readArcMarketState(e,a),da=async(e,a,r,o,s,n,i)=>(await N()).executeArcMarketOrder(e,a,r,o,s,n,i),ca=async(e,a,r,o,s)=>(await N()).executeArcOptionMarketOrder(e,a,r,o,s),Lt=()=>{N().then(e=>e.disconnectArcWallet())},pa=async(e,a)=>(await N()).claimArcMarketPayout(e,a),De=async()=>(await N()).getConnectedArcWallet(),ua=async()=>(await N()).validateArcSession(),ma=async e=>(await N()).subscribeArcWallet(e),fa=async()=>(await N()).triggerGatewayWarmup(),ga=["Sports"],ha="https://siftle.onrender.com",va=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?ha:""},ya=va(),U=e=>`${ya}${e}`,Pt="siftle_theme",ba=()=>{try{return window.localStorage.getItem(Pt)==="light"?"light":"dark"}catch{return"dark"}},ke=ba();function C(e){fetch(U("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e})}).catch(a=>console.error("Failed to track event:",a))}var t={activeSurface:"feed",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:2,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{}};var J="global",Q=!1,X=null,ut=!1,mt=!1,ft=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";ft&&localStorage.setItem("siftle_pending_referral_code",ft.trim().toUpperCase());var Ut=20,E=Ie,ka=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},xe=()=>ka(t.portfolioMarketPreviews,E,Ie),wa=async()=>{t.loadingMarkets=!0,E.length===0&&(E=Ie);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(U("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(E=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Ct=async()=>{try{let e=await fetch(U("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Et="siftle.savedUrls",ne=new Set,tt=()=>{try{let e=localStorage.getItem(Et)||"[]",a=JSON.parse(e);ne=new Set(a.filter(Boolean))}catch{ne=new Set}},Sa=()=>{try{localStorage.setItem(Et,JSON.stringify(Array.from(ne)))}catch{}},we=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!ne.has(e.sourceUrl)};tt();we();var Ve=document.querySelector("#dateLabel"),ie=document.querySelector("#categoryTabs"),k=document.querySelector("#storyList"),S=document.querySelector("#storyDetail"),We=document.querySelector("#menuButton"),Ye=document.querySelector("#menuPanel"),L=document.querySelector("#menuStatus"),j=document.querySelector("#archiveDateSelect"),gt=document.querySelector("#archiveStatus"),xa=document.querySelector("#todayButton"),_e=document.querySelector(".brief-hero"),He=document.querySelector("#archiveControls"),$e=document.querySelector("[data-surface='markets']"),Te=document.querySelector("[data-surface='feed']"),Me=document.querySelector("[data-surface='portfolio']"),re=document.querySelector("#walletButton"),ye=document.querySelector("[data-theme-toggle]"),$a=document.getElementById("guideToggleButton"),It=Array.from(document.querySelectorAll("[data-bottom-nav]")),Ge,Ta=()=>{if(!ye)return;let a=`Switch to ${ke==="light"?"dark":"light"} mode`;ye.setAttribute("aria-label",a),ye.title=a,ye.dataset.activeTheme=ke},Bt=e=>{ke=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(Pt,e)}catch{}Ta()};Bt(ke);var D=()=>{if(re){let e=re.querySelector(".wallet-button-label");re.classList.toggle("connected",!!t.walletAddress),re.disabled=t.walletConnecting,re.setAttribute("aria-label",t.walletAddress?`Wallet ${R(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),re.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${R(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",D);ye?.addEventListener("click",()=>{Bt(ke==="light"?"dark":"light")});$a?.addEventListener("click",()=>{Ma()});var Ma=()=>{let e=document.createElement("div");e.className="guide-overlay",e.innerHTML=`
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
  `,document.body.appendChild(e);let a=e.querySelector("#guideClose"),r=e.querySelector("#guideStartBtn"),o=()=>e.remove();a.addEventListener("click",o),r.addEventListener("click",o),e.addEventListener("click",s=>{s.target===e&&o()})},Aa=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(U("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&y("Referral connected"))}catch(r){console.warn(r)}},Se=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(U(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&F()}}},Ae=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,C("wallet_connect_start"),D();try{let e=await sa();if(e){C("wallet_connect_success"),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),t.walletBalance=await se(e),await Aa(e),Se(),await z(),ce(!0).catch(r=>console.error("Failed to report leaderboard entry:",r));let a=localStorage.getItem(pt);a?(localStorage.removeItem(pt),y(a)):y("Connected to Arc Testnet"),window.location.hash="#portfolio",Pe()}}catch(e){C("wallet_connect_failed"),y(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,D()}}},y=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Ge&&window.clearTimeout(Ge),Ge=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=y;var La=(e,a,r,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let n=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",n),s.querySelector(".success-modal-action-btn")?.addEventListener("click",n),s.addEventListener("click",i=>{i.target===s&&n()})},K=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},Dt=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},Pa=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(!(t.activeCategory==="All"||e.category===t.activeCategory))return!1;let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),Ne=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,Ua=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Ca=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let s=r.slice(0,a).join(" "),n=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return n>s.length*.45?s.slice(0,n+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},ht=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),Ua(a)?"":Ca(a)},le=(e,a)=>ht(a||"")||ht(e.summary)||e.headline,Ea=e=>{let r=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!r||!window.html2canvas)return;let o=document.createElement("div");o.className="briefing-export-staging";let s=r.cloneNode(!0);s.classList.add("briefing-export-surface"),o.appendChild(s),document.body.appendChild(o);let n=document.documentElement.dataset.theme==="light";window.html2canvas(s,{backgroundColor:n?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(i=>{let l=document.createElement("a");l.download="siftle-briefing.png",l.href=i.toDataURL("image/png"),l.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{o.remove()})};window.downloadBriefingCard=Ea;var at=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(a){let n=a.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${n}</h3>
    `}r[0].trim()&&(o+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let s="";for(let n=1;n<r.length;n+=2){let i=r[n].trim().toUpperCase(),l=r[n+1]?r[n+1].trim():"";if(!l)continue;let p="";if(i==="KEY POINTS"){let m=l.split(/(?:•|\*|-)\s+/).map(d=>d.trim()).filter(Boolean);m.length>0?p=`<ul class="briefing-list">${m.map(d=>`<li>${d}</li>`).join("")}</ul>`:p=`<p class="briefing-text">${l}</p>`}else p=`<p class="briefing-text">${l}</p>`,i==="TAKEAWAY"&&(s=l);let c=i.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${c}-section">
        <h4 class="briefing-title">${i}</h4>
        ${p}
      </div>
    `}return o+="</div>",a&&(o+=`
      <div class="share-briefing-container">
        <button type="button" class="share-briefing-btn" onclick="window.downloadBriefingCard?.(event.currentTarget)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Download Card</span>
        </button>
      </div>
    `),o},Le=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${P(a)}</p>`:""},Ia=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},rt=e=>`siftle_ai_briefing_unlock_${Ia()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Nt=e=>localStorage.getItem(rt(e))||"",Ba=e=>{localStorage.removeItem(rt(e))},de=e=>!!Nt(e),Ot=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:ne.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Da=e=>{let a=t.stories.find(s=>s.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=E.find(n=>n.id===t.selectedMarketId);if(s){let n=ze(s).evidence.find(i=>i.sourceUrl===e);if(n)return Ot(s,n)}}return null},ot=(e,a)=>{let r=Wa(e,a);return r===null?null:r-Ut*60*1e3},_t=(e,a)=>{let r=ot(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},Ht=(e,a)=>{let r=ot(e,a);return r===null?null:Date.now()>=r?`Locked ${Ut}m before kickoff`:null},Na=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled,s=!!t.walletAddress;return`
    <div class="briefing-section">
      ${Le(e)}
      ${a?`
          ${ge()}
        `:`
          <p class="briefing-text">
            ${s?o?`Pay a <strong>${r}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${r}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`:"Sign in to access AI briefings."}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${s?o?"Unlock via Circle x402":"AI briefing":"Sign in and access AI briefing"}
          </button>
        `}
    </div>
  `},st=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],nt=e=>`
  <div class="briefing-section">
    ${Le(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,Ze=async(e,a=!1)=>{if(!t.walletAddress){y("Please sign in to unlock this briefing."),Ae();return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",C("ai_unlock_attempt"),h();try{let r=await fetch(U("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let s=Number(o.amountUsdc)||.05;try{let c=await fetch(U(`/api/summary/price?sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(c.ok){let m=await c.json();typeof m.priceUsdc=="number"&&(s=m.priceUsdc)}}catch(c){console.warn("Failed to retrieve autonomous price, falling back to default:",c.message)}let n=await na(o.treasuryAddress,s,c=>{L&&(L.textContent=c),t.briefingStatusByUrl[e.sourceUrl]=c,h()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=`Briefing unlocked! Charged ${s} USDC (priced by Siftle AI Agent)`,h();let i=await fetch(U("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:n})}),l=await i.json();if(!i.ok||!l.unlockToken)throw new Error(l.error||"AI briefing failed");localStorage.setItem(rt(e),l.unlockToken),C("ai_unlock_success"),(Number(l?.bonus?.points)||0)>0&&ce(!1).catch(c=>console.error("Failed to refresh leaderboard bonus:",c)),await Re(e)}catch(r){C("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl];let o=r instanceof Error?r.message:String(r||""),s=o,n=o.toLowerCase();(n.includes("balance")||n.includes("exceeds balance")||n.includes("transfer amount exceeds"))&&(s="Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC."),y(s)}finally{t.unlockingSummaryUrl=null,h()}}},Re=async e=>{if(de(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=le(e,e.ai_summary),C("view_summary"),L&&(L.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded"),h();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing...",h();try{let a=await fetch(U("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Nt(e)})});if(!a.ok){if(a.status===402){Ba(e),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",L&&(L.textContent="Unlock expired. Unlock again to continue."),h();return}throw new Error(`Summary request failed with ${a.status}`)}let r=await a.json();t.aiSummaries[e.sourceUrl]=le(e,r.summary),t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",L&&r.provider&&(L.textContent=r.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${r.provider}`)}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",L&&(L.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,h()}}},Qe=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);if(r){if(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),h(),r.type==="tweet"){window.scrollTo({top:0,behavior:"smooth"});return}a&&!de(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),h(),Ze(r,!0)):de(r)&&Re(r),window.scrollTo({top:0,behavior:"smooth"})}},Oa=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),h(),Rt(e),window.scrollTo({top:0,behavior:"smooth"})},_a=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.history.pushState({},"","#feed"),h(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Rt=async e=>{try{let a=await fetch(U(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),L&&(L.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),y("That timeline no longer has a verified past update"),L&&(L.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,h()}};function Pe(){if(window.location.hash==="#resolve-local-yes"){let a=E.find(r=>r.id==="siftle-local-test-2")||E.find(r=>r.timeframe==="Daily"&&V(r).startsWith("0x00000000000000000000000000000000000001"));if(a){ia(V(a)),tr(a,"yes"),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),y("Local test market resolved YES"),z().then(()=>{ce(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),D(),F()});return}}let e=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||e){t.activeSurface="markets",t.selectedMarketId=e?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,h();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let a=window.location.hash.match(/^#story-(\d+)$/),r=window.location.hash.match(/^#thread-(\d+)$/),o=a?t.stories.find(i=>i.id===Number(a[1])):void 0,s=r?t.stories.find(i=>i.id===Number(r[1])):void 0,n=t.selectedStoryId!==null||t.selectedThreadUrl!==null;t.selectedStoryId=o?.id??null,t.selectedThreadUrl=s?.sourceUrl??null,t.activeThread=null,h(),o&&Re(o),s&&Rt(s),!o&&!s&&n&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h()}var Xe=e=>{gt&&(gt.textContent=e)},Ha=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Ft(),h());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(U(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],we(),t.hasLoadedFeed=!0,Ve&&(Ve.textContent=Dt(s.date??t.activeArchiveDate)),L)if(t.activeArchiveDate)L.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=s.archive?.provider==="shelby"?"Shelby":"local archive";L.textContent=`Latest published feed loaded from ${n}`}Xe(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),we(),L&&(L.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,h(),Pe()}},Ra=async()=>{if(j)try{let e=await fetch(U("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),j.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),j.value=t.activeArchiveDate??"",Xe(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),Xe("Archive unavailable")}},Ue=()=>{ut||(ut=!0,Ra())},te=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Ha(e,a)},za=()=>{mt||(mt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&te(t.activeCategory,!0),Ue()},8e3))},ja=e=>e==="All"?"For you":e==="Sports"?"Football":e,q=e=>e==="Sports"?"Football":e,et=e=>/^@/.test(String(e.source||""))||/(?:^|\/)(?:x|twitter)\.com\//i.test(String(e.sourceUrl||"")),zt=(e,a)=>{let r=e.trim();return r.length<=a?r:`${r.slice(0,Math.max(0,a-1)).trimEnd()}\u2026`},Fa=e=>e.replace(/^@/,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ").filter(Boolean),jt=e=>{let a=String(e.source||q(e.category)).trim(),r=Fa(a);if(r.length===0)return q(e.category);let o=r.filter((i,l)=>{let p=i.toLowerCase();return!(l>0&&["live","news","official"].includes(p))}),s=o.length>0?o:r,n="";for(let i of s){let l=n?`${n} ${i}`:i;if(l.length>18)break;n=l}return zt(n||s[0],18)},vt=e=>{let a=String(e.headline||"").replace(/\s+/g," ").trim();if(!et(e))return a;let r=a.replace(/https?:\/\/\S+/gi,"").replace(/\(Source:[^)]+\)\s*$/i,"").replace(/\s+/g," ").trim();if(/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(r))return`Latest from ${jt(e)}`;let o=r.replace(/^R to\s+@[^:]+:\s*/i,"").trim(),s=o.length>=24&&!/^(?:more here|watch more here)[:.!?]*$/i.test(o)?o:r||a;return zt(s,150)},Ft=()=>{ie&&(ie.innerHTML=ga.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${ja(e)}
        </button>
      `).join(""))},qt=e=>(e.thread?.count??0)>=1,qa=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Wt=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),s=new Date(r.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),ze=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},Wa=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},Ya=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,Ga=(e,a)=>({date:Ya(e,a),source:e.source,headline:e.headline,summary:le(e),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Yt=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(U(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...Wt(r.items??[])],s=o.filter((l,p,c)=>c.findIndex(m=>m.sourceUrl===l.sourceUrl)===p).map(Ga),i=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:s,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&h()}}},V=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",ae=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],ee=e=>!!(e.optionMarket&&ae(e).length>1),Ja=e=>{let a=ae(e);return a.find(r=>r.id===t.marketTradeOptionId)||a[0]||null},H=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),P=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),it=e=>`siftle_profile_username_${e.toLowerCase()}`,Gt=e=>e.trim().replace(/\s+/g," ").slice(0,15),me=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=it(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=Gt(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},Ka=e=>{if(!t.walletAddress)return;let a=it(t.walletAddress),r=Gt(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},Va=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},Jt=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:2,max:2,fallback:2}},Ce=(e,a,r,o)=>{let{min:s,max:n,fallback:i}=Jt(a,r,o);return Number.isFinite(e)?Math.min(n,Math.max(s,e)):i},Kt=(e,a,r,o,s)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let n=a==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,i=e.yesSharesUsdc,l=e.noSharesUsdc;if(o==="sell")return Math.min(r,n);let p=(a==="yes"?i:l)+r,c=i+l+r;return p<=0||c<=0?r:(n+r)/p*c},Vt=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},Za=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},Zt=e=>`siftle_claimed_markets_${e.toLowerCase()}`,Oe=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(Zt(t.walletAddress))||"[]"))}catch{return new Set}},Qa=e=>{if(!t.walletAddress)return;let a=Oe();a.add(e),localStorage.setItem(Zt(t.walletAddress),JSON.stringify(Array.from(a)))},je=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),oe=(e,a,r)=>{let o=r?.yesSharesUsdc??0,s=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:s>0:a==="yes"?s<=0:o<=0},lt=(e,a,r)=>{if(oe(e,a,r))return a;let o=a==="yes"?"no":"yes";return oe(e,o,r)?o:a};var Xa=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},yt=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`};var er=(e,a)=>{let r=String(e?.optionId||"").trim(),o=Math.max(0,Number(e?.optionSharesUsdc)||0),s=Math.max(0,Number(a?.optionPools?.[r])||0),n=Math.max(0,Number(a?.volumeUsdc)||0);return!r||o<=0?0:s<=0||n<=0?o:o/s*n},Je=(e,a)=>!ee(e)||!a?a:{...a,optionPools:Object.fromEntries(ae(e).map(r=>[r.id,0]))};var dt=()=>{let e=0,a=0,r=0,o=E.filter(i=>i.timeframe==="Daily").map(i=>i.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(s)try{n=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,a++;continue}if(n[i]?.result==="loss"){r++;continue}let l=t.marketPositions[i],c=t.marketSnapshots[i]?.outcome??0;if(c===0)continue;let m=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,d=[];try{d=JSON.parse(localStorage.getItem(m)||"[]")}catch{}let w=d.includes("yes")&&d.includes("no");if(c===1&&l&&l.yesSharesUsdc>0){let u=w?50:100;e+=u,a++,n[i]={result:"win",points:u}}else if(c===2&&l&&l.noSharesUsdc>0){let u=w?50:100;e+=u,a++,n[i]={result:"win",points:u}}else l&&(l.yesSharesUsdc>0||l.noSharesUsdc>0)&&(r++,n[i]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(n)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},tr=(e,a)=>{let r=V(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,s=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(o))continue;let l=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(l)&&s.add(l)}s.forEach(n=>{let i=`${o}${n}`,l={yesSharesUsdc:0,noSharesUsdc:0};try{l=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let p=(Number(l.yesSharesUsdc)||0)>0,c=(Number(l.noSharesUsdc)||0)>0;if(!p&&!c)return;let m=`siftle_traded_sides_${e.id}_${n}`,d=[];try{d=JSON.parse(localStorage.getItem(m)||"[]")}catch{}let w=d.includes("yes")&&d.includes("no"),u=a==="yes"?p:c,g=`siftle_resolved_results_${n}`,T={};try{T=JSON.parse(localStorage.getItem(g)||"{}")}catch{}T[e.id]={result:u?"win":"loss",points:u?w?50:100:0},localStorage.setItem(g,JSON.stringify(T));let B=0,v=0,f=0;Object.values(T).forEach(b=>{b.result==="win"?(v+=1,B+=Number(b.points)||0):b.result==="loss"&&(f+=1)});let A=localStorage.getItem(it(n))||"";fetch(U("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:A,points:B,status:`${v} win${v===1?"":"s"}, ${f} loss${f===1?"":"es"}`})}).catch(b=>console.error("Failed to report local resolved score:",b))})},ce=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?dt():null,r=await fetch(U("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},ar=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(r)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(U("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},rr=async e=>{let a=V(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(ee(e)&&!t.walletAddress){let r=e.resolvedOptionId||null,o=Number(e.outcome);t.marketSnapshots[e.id]=Je(e,{yesPriceCents:0,noPriceCents:0,volumeUsdc:Number(e.volumeUsdc)||0,yesSharesUsdc:0,noSharesUsdc:0,outcome:o===1||o===2||o===3?o:r?1:0,optionPools:e.optionPools||Object.fromEntries(ae(e).map(s=>[s.id,0])),resolvedOptionId:r,traderCount:0}),t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(ee(e)&&t.walletAddress){let{position:r,snapshot:o}=await At(a,t.walletAddress);t.marketPositions[e.id]=r,t.marketSnapshots[e.id]=Je(e,o)}else t.marketSnapshots[e.id]=Je(e,await la(a))}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&h()}}},z=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Ct();let a=xe(),r=await Promise.all(a.map(async o=>{let s=V(o);if(!s)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:n,snapshot:i}=await At(s,t.walletAddress);return t.marketSnapshots[o.id]=i,[o.id,n]}catch(n){return console.warn(`Failed to load portfolio market ${o.id}:`,n),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,ce(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&h()}}},or=async(e,a)=>{if(!t.walletAddress){y("Session expired or wallet not connected. Please sign in."),Ae();return}let r=xe().find(c=>c.id===e);if(!r)return;t.marketTradeSide=a;let o=V(r);if(!o){y("Deploy this Arc market contract before trading"),h();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await z(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){y("Still loading your position. Try again in a moment."),h();return}let s=t.marketSnapshots[r.id];if(je(r,s)){t.tradeDrawerOpen=!1,y("This market is resolved and can no longer be traded."),h();return}let n=s?.yesPriceCents??r.probability,i=s?.noPriceCents??100-r.probability,l=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!oe(t.marketOrderMode,a,l)){let c=Za(l),m=t.marketOrderMode==="sell"?c?`You can only exit your ${c.toUpperCase()} shares.`:"You do not have shares to exit in this market.":c?`Exit your ${c.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";y(m),t.marketTradeSide=lt(t.marketOrderMode,a,l),h();return}let p=Ce(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,l);t.marketTradeAmount=p,C("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",h();let c=await da(o,t.marketOrderMode,a,p,m=>{t.marketTradeStatus=m,h()},n,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await De(),t.walletAddress&&(t.walletBalance=await se(t.walletAddress)),await z({force:!0}),ce(!0).catch(m=>console.error("Failed to report leaderboard entry:",m)),t.walletAddress){let m=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,d={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let u=localStorage.getItem(m);if(u){let g=JSON.parse(u);d={yesCost:g.yesCost||0,noCost:g.noCost||0,yesShares:g.yesShares||0,noShares:g.noShares||0}}}catch{}let w=p;if(t.marketOrderMode==="buy"){let u=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,g=[];try{g=JSON.parse(localStorage.getItem(u)||"[]")}catch{}g.includes(a)||(g.push(a),localStorage.setItem(u,JSON.stringify(g))),a==="yes"?(d.yesCost+=w,d.yesShares=(d.yesShares||0)+w/(n/100)):(d.noCost+=w,d.noShares=(d.noShares||0)+w/(i/100))}else{let u=t.marketPositions[r.id];if(u){if(a==="yes"&&u.yesSharesUsdc>0){let g=Math.min(1,w/u.yesSharesUsdc);d.yesCost=Math.max(0,d.yesCost-d.yesCost*g),d.yesShares=Math.max(0,(d.yesShares||0)-(d.yesShares||0)*g)}else if(a==="no"&&u.noSharesUsdc>0){let g=Math.min(1,w/u.noSharesUsdc);d.noCost=Math.max(0,d.noCost-d.noCost*g),d.noShares=Math.max(0,(d.noShares||0)-(d.noShares||0)*g)}}}localStorage.setItem(m,JSON.stringify(d))}y(`Trade confirmed ${c.slice(0,8)}...`),C(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),La(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(c){C("trade_failed"),Xa(c)?(Lt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),y("Session expired. Please sign in again.")):y(c instanceof Error?c.message:"Arc trade failed")}finally{t.marketTradeStatus=null,D(),h()}},sr=e=>qt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",nr=e=>qt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",ir=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',lr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',ve=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,dr=()=>`
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
`,cr=(e=4)=>`${ve("Loading stories")}${Array.from({length:e},dr).join("")}`,ge=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${ve("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,pr=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${ve("Loading thread timeline")}
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
`;var ur=(e=3)=>`
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${ve("Loading market evidence")}
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
`,mr=(e=2)=>`
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${ve("Loading portfolio positions")}
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
`,bt=e=>{let a=e.type==="tweet",r='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-top; color: var(--color-text-primary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',o='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 12px; height: 12px; display: inline-block; vertical-align: text-top; margin-right: 4px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';return`
    <article class="story-card ${a?"social-story tweet-card":et(e)?"social-story":""}" data-story-id="${e.id}" role="button" tabindex="0" aria-label="Open summary for ${e.headline}">

      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            ${a?`<div style="margin-bottom: 6px;">${r}</div>`:""}
            <strong>${e.source}</strong>
            <span>${Ne(e)} - ${e.readTime}</span>
          </div>
        </div>
        <div class="story-card-actions">
          <button class="bookmark-button" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="${e.saved?"Remove saved story":"Save story"}">
            ${ir()}
          </button>
          <div class="share-control">
            <button class="export-button" type="button" aria-label="Export story card" data-export-id="${e.id}" aria-expanded="${t.activeShareStoryId===e.id}">
              ${lr()}
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
        <span class="category-chip ${e.category}">${q(e.category)}</span>
        <h2 class="card-headline">${vt(e)}</h2>
        <p>${a?"Tap to read the tweet":"Tap to read the AI briefing."}</p>
      </div>

      <div class="card-action-row desktop-only">
        ${a?`<button class="card-source-button read-tweet-btn" type="button" style="cursor: pointer;">Read Tweet</button>
             <a class="card-source-button twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; gap: 6px;">
              ${r}
              Open Tweet
             </a>`:`
              ${sr(e)}
              <button class="card-source-button summary-btn" type="button">AI briefing</button>
              ${/example\\.com/i.test(e.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
            `}
      </div>

      <!-- Mobile layout (visible at 640px and below) -->
      <div class="mobile-card-inner mobile-only">
        <div class="mobile-card-body">
          <div class="mobile-card-text">
            <div class="mobile-card-topline">
              <span class="mobile-source-pill ${et(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px;">
                ${a?o:""}
                ${jt(e)}
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
            <h2 class="card-headline">${vt(e)}</h2>
            <span class="mobile-card-time">${Ne(e)}</span>
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
                ${nr(e)}
                ${/example\\.com/i.test(e.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
                <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
              `}
        </div>
      </div>

    </article>
  `},he=()=>{if(!k)return;let e=Pa();if(k.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){k.innerHTML=cr(4);return}let a=Number(t.unlockConfig?.amountUsdc)||.001,r=P(t.newsSearchQuery.trim()),s=`
    <section class="news-feed-search-shell">
      <div class="news-feed-search-copy">
        <p>${r?`${e.length} matches for "${r}".`:`Search saved news by keyword. Unlock an AI briefing with a ${a} testnet USDC nanopayment to get what happened, key points, and takeaway without opening the full article.`}</p>
      </div>
      <label class="news-feed-search-bar" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search all saved news by keyword" value="${P(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </section>
  `;if(e.length===0){let n=t.showSaved?[]:t.stories;if(n.length>0){k.innerHTML=s+n.map(bt).join("");return}k.innerHTML=s+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>';return}k.innerHTML=s+e.map(bt).join("")},kt=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),be=(e,a,r,o,s,n)=>{e.beginPath(),e.moveTo(a+n,r),e.lineTo(a+o-n,r),e.quadraticCurveTo(a+o,r,a+o,r+n),e.lineTo(a+o,r+s-n),e.quadraticCurveTo(a+o,r+s,a+o-n,r+s),e.lineTo(a+n,r+s),e.quadraticCurveTo(a,r+s,a,r+s-n),e.lineTo(a,r+n),e.quadraticCurveTo(a,r,a+n,r),e.closePath()},fr=(e,a,r,o,s,n,i)=>{let l=a.split(/\s+/).filter(Boolean),p=[],c="";for(let m of l){let d=c?`${c} ${m}`:m;if(e.measureText(d).width<=s){c=d;continue}if(c&&p.push(c),c=m,p.length===i)break}if(c&&p.length<i&&p.push(c),l.length>0&&p.length===i){for(;e.measureText(`${p[i-1]}...`).width>s&&p[i-1].length>0;)p[i-1]=p[i-1].slice(0,-1).trim();p[i-1]=`${p[i-1]}...`}return p.forEach((m,d)=>e.fillText(m,r,o+d*n)),o+p.length*n},gr=(e,a,r,o,s,n,i)=>{let l=Math.max(s/a.naturalWidth,n/a.naturalHeight),p=s/l,c=n/l,m=(a.naturalWidth-p)/2,d=(a.naturalHeight-c)/2;e.save(),be(e,r,o,s,n,i),e.clip(),e.drawImage(a,m,d,p,c,r,o,s,n),e.restore()},wt=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),St=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))):"",hr=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",xt=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",be(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await kt("./assets/siftle-logo-small.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${St(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(a){let l=await kt(hr(e.imageUrl)).catch(()=>null);l?gr(o,l,110,n,860,520,28):(o.fillStyle="#eef2ff",be(o,110,n,860,520,28),o.fill())}else o.fillStyle="#eef2ff",be(o,110,n,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",be(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(q(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",fr(o,St(e.headline),110,888,860,54,4),r},Qt=async e=>{let a=await xt(e,!0);try{return await wt(a)}catch{return wt(await xt(e,!1))}},Xt=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,ea=async e=>{let a=await Qt(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=Xt(e),o.click(),URL.revokeObjectURL(r)},vr=async e=>{let a=await Qt(e),r=new File([a],Xt(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await ea(e)},yr=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,he(),y(a==="share"?"Preparing share image":"Preparing download"),L&&(L.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await vr(r):await ea(r),y(a==="share"?"Share image ready":"Image saved"),L&&(L.textContent="Branded story image ready")}catch(o){console.warn(o),y("Image export unavailable"),L&&(L.textContent="Image export was cancelled or unavailable")}}},$t=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,o=st(e);return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${q(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${le(e)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${r?"disabled":""}>${r?"Preparing...":"AI briefing"}</button>
      </div>
      ${Le(e)}
      ${r?`<div style="margin-top: 12px;">${ge()}</div>`:de(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${ge()}</div>`:o?`<div style="margin-top: 12px;">${nt(e)}</div>`:`<div style="margin-top: 12px;">${at(le(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},br=async(e,a)=>{if(!t.walletAddress){y("Session expired or wallet not connected. Please sign in."),Ae();return}let r=xe().find(c=>c.id===e);if(!r||!ee(r))return;let o=ae(r).find(c=>c.id===a);if(!o){y("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await z(),t.marketTradeStatus=null);let s=t.marketSnapshots[r.id];if(je(r,s)){y("This market is resolved and can no longer be traded.");return}let n=t.marketPositions[r.id],i=t.marketOrderMode==="sell";if(!i&&n?.optionId){y("Your pick is already locked for this market.");return}if(i&&!n?.optionId){y("You do not have a pick to exit.");return}let l=Math.max(0,Number(n?.optionSharesUsdc)||0);if(i&&l<=0){y("Your pick is still loading. Please try again."),await z({force:!0});return}let p=i?l:Ce(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=p,t.marketTradeOptionId=i&&n?.optionId||o.id,C("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",h(),await ca(r.id,i?"sell":"buy",i&&n?.optionId||o.id,p,c=>{t.marketTradeStatus=c,h()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await De(),t.walletAddress&&(t.walletBalance=await se(t.walletAddress)),await z({force:!0}),C(i?"trade_sell_success":"trade_buy_success"),y(i?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(c){C("trade_failed"),y(c instanceof Error?c.message:"Trade failed")}finally{t.marketTradeStatus=null,D(),h()}},kr=()=>{if(!S||!k)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(k.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){S.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){S.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${pr(3)}
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
          <span class="category-chip ${e.category}">${q(e.category)}</span>
          <span>${qa(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${$t(e,"Latest")}
          ${Wt(r?.items??[]).map(o=>$t(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},wr=()=>{if(!S||!k)return;if(t.selectedThreadUrl){kr();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){S.hidden=!0,S.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),k.hidden=!1;return}if(e.type==="tweet"){k.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode");let i='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';S.innerHTML=`
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
            <span class="tweet-detail-time">${Ne(e)}</span>
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
    `;return}let a=le(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=de(e),s=t.unlockingSummaryUrl===e.sourceUrl,n=st(e);k.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),S.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${q(e.category)}</span>
          <span>${e.source} - ${Ne(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?Le(e):""}
          ${o?r?ge():n?nt(e):at(a,e):Na(e,s)}
        </section>
        <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `},Sr=e=>{let a=t.marketSnapshots[e.id],r=V(e),o=ee(e),s=ae(e).length,n=a?.volumeUsdc??(Number(e.volumeUsdc)||0),i=a?.yesPriceCents,l=i??e.probability,p=o?`${s}`:`${l}%`,c=i===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${i}\xA2 \xB7 No ${100-i}\xA2`,m=i===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:c,d=ze(e),w=e.timeframe==="Daily"?_t(e,a):e.closes;return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${q(e.category)}</span>
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
        <strong>${p}</strong>
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
          ${d.evidence.slice(0,2).map(u=>`
            <div style="display: flex; align-items: flex-start; gap: 6px; font-size: 0.76rem; text-align: left; line-height: 1.35; padding: 4px 0;">
              <span style="background: rgba(59, 130, 246, 0.08); color: var(--market-accent); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 4px; padding: 1px 4px; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; flex-shrink: 0; line-height: 1;">${P(u.source)}</span>
              <span style="color: var(--market-text-main); font-weight: 500;">${P(u.headline)}</span>
            </div>
          `).join("")}
        </div>
      </div>
      `:""}
      <div class="market-card-footer">
        <span>${d.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${w}`:`Closes ${w}`}</span>
      </div>
    </button>
  `},xr=e=>{let a=ze(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,n=a.evidence[0],i=n?n.headline:"No updates yet",l=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${l}`},$r=e=>{if(!k||!S)return;let a=ze(e),r=!t.checkedMarketEvidence[e.id],o=V(e),s=t.marketSnapshots[e.id],n=ee(e),i=ae(e);n&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let l=Ja(e),p=!!(o&&!s),c=s?.yesPriceCents??(o?e.probability:0),m=s?.noPriceCents??(o?100-e.probability:0),d=p?"":o?`${c}\xA2`:"--",w=p?"":o?`${m}\xA2`:"--",u=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},g=!!u.optionId;n&&g&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),n&&!g&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let T=n&&t.marketOrderMode==="sell"&&g?Math.max(0,Number(u.optionSharesUsdc)||0):0,B=T>0?T:Ce(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,u),v=T>0?{min:0,max:T}:Jt(t.marketOrderMode,t.marketTradeSide,u),f=t.marketOrderMode==="buy"?"exactly $2.00 USDC":`Up to $${H(v.max)} USDC`,A=!t.walletAddress||t.hasLoadedPortfolioPositions,b=je(e,s),$=Ht(e,s),x=!!$;n||(t.marketTradeSide=lt(t.marketOrderMode,t.marketTradeSide,u));let M=!n&&!b&&!x&&A&&oe(t.marketOrderMode,"yes",u),O=!n&&!b&&!x&&A&&oe(t.marketOrderMode,"no",u),Y=n?!b&&!x&&A&&(t.marketOrderMode==="sell"?g:!g&&!!l):!b&&!x&&A&&oe(t.marketOrderMode,t.marketTradeSide,u),G=b?"Market resolved":$||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),W=b?"Market resolved":$||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),Z=n?B:Kt(s,t.marketTradeSide,B,t.marketOrderMode,u),Ee=t.marketOrderMode==="buy"?"Buy":"Exit",oa=n?"Pick one outcome":o?"Arc testnet live":"Contract not deployed";k.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),rr(e),Yt(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&z({force:!t.hasLoadedPortfolioPositions});let ct=n?!!u.optionId:u.yesSharesUsdc>0||u.noSharesUsdc>0,Fe="";n&&ct&&t.walletAddress?Fe=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${P(u.optionLabel||"Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Status</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">Locked in</strong>
          </div>
        </div>
      </div>
    `:ct&&t.walletAddress&&(Fe=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${Vt(u,s).map(_=>`
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
            <span class="category-chip ${e.category}">${q(e.category)}</span>
            <span class="market-status-pill">${oa}</span>
          </div>
          <h2>${e.question}</h2>
          ${Fe}
          ${a.imageUrl?`
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${a.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          `:""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${ot(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${_t(e,s)}</strong>
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
              ${r?ur(3):a.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':a.evidence.map(I=>{let _=Ot(e,I),pe=t.unlockingSummaryUrl===I.sourceUrl;return`
                <article class="market-thread-update">
                  <div class="market-thread-marker"></div>
                  <div class="market-thread-update-content">
                    <div class="market-thread-update-meta">
                      <span>${I.date} \xB7 ${I.source}</span>
                    </div>
                    <h4>${I.headline}</h4>
                    <p>${I.summary}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                      ${/example\.com/i.test(I.sourceUrl)?"":`<a class="market-thread-source-link" href="${I.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(I.sourceUrl)}" ${pe?"disabled":""}>${pe?"Preparing...":"AI briefing"}</button>
                    </div>
                    ${Le(_)}
                    ${pe?`<div style="margin-top: 12px;">${ge()}</div>`:de(_)?t.loadingSummaryUrl===I.sourceUrl?`<div style="margin-top: 12px;">${ge()}</div>`:st(_)?`<div style="margin-top: 12px;">${nt(_)}</div>`:`<div style="margin-top: 12px;">${at(le(_,t.aiSummaries[I.sourceUrl]),_)}</div>`:""}
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
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${b||x?"disabled":""}>
          ${b?"Market Resolved":$||(n?g?"Pick Locked":"Pick Outcome":"Trade Market")}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${b||x?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${b||x?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?i.map(I=>{let _=t.marketTradeOptionId===I.id||u.optionId===I.id,pe=b||x||t.marketOrderMode==="sell"||g||!A;return`
                  <button type="button" class="market-side option ${_?"active":""} ${pe?"disabled":""}" data-market-option-id="${P(I.id)}" ${pe?"disabled":""}>
                    <span>${P(I.label)}</span>
                    ${u.optionId===I.id?"<small>Your pick</small>":""}
                  </button>
                `}).join(""):p?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${M?"":"disabled"}" data-market-trade-side="yes" ${M?"":"disabled"} title="${M?"Yes":G}">
                  <span>Yes</span>
                  ${M?"":`<small>${G}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${O?"":"disabled"}" data-market-trade-side="no" ${O?"":"disabled"} title="${O?"No":W}">
                  <span>No</span>
                  ${O?"":`<small>${W}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${f}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${v.min.toFixed(2)}" max="${Math.max(v.min,v.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${B}" data-market-amount ${b||x||t.marketOrderMode==="buy"?"disabled":""} style="${t.marketOrderMode==="buy"?"opacity: 0.7; cursor: not-allowed;":""}" />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>Market amounts are hidden while this market is open.</span>
          </div>

          <div class="drawer-action-container">
            ${p?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:b?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':x?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${$}</button>`:t.walletAddress?A?n&&t.marketOrderMode==="sell"&&g?`<button type="button" class="market-submit-button" data-market-option-trade="${P(u.optionId||"")}">Exit pick</button>`:Y?n?`<button type="button" class="market-submit-button" data-market-option-trade="${P(l?.id||"")}">Confirm ${P(l?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${Ee} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${Ee.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},ta=()=>{if(!k||!S)return;if(_e?.toggleAttribute("hidden",!0),He?.toggleAttribute("hidden",!0),ie?.toggleAttribute("hidden",!0),$e?.classList.add("active"),Te?.classList.remove("active"),Me?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&E.forEach(n=>{Yt(n)})},750),t.selectedMarketId){let n=E.find(i=>i.id===t.selectedMarketId);if(n){$r(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),S.hidden=!0,S.classList.remove("fullscreen"),k.hidden=!1,k.classList.add("markets-list");let e=E,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(n=>{let i=t.activeMarketTimeframe===n,l=n==="All"?e.length:e.filter(c=>c.timeframe===n).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${n}">
            <span>${n==="Sagas"?"Sagas":n}</span>
            <span class="timeframe-tab-count">${l}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&E.length===0){k.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${Ke}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
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
          ${l.map(Sr).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(p=>p.timeframe==="Daily"),i=e.filter(p=>p.timeframe==="Weekly"),l=e.filter(p=>p.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",n)}
      ${s("Weekly","Ends in a week",i)}
      ${s("Sagas (Long-term)","Narratives & futures",l)}
    `}else{let n=e.filter(p=>p.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,l="";t.activeMarketTimeframe==="Daily"?l="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?l="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",l="Narratives & futures"),o=`
      ${s(i,l,n)}
    `}k.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${Ke}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},aa=()=>{if(!k||!S)return;_e?.toggleAttribute("hidden",!0),He?.toggleAttribute("hidden",!0),ie?.toggleAttribute("hidden",!0),$e?.classList.remove("active"),Te?.classList.remove("active"),Me?.classList.remove("active"),document.body.classList.remove("detail-mode"),S.hidden=!0,k.hidden=!1,k.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?dt():null;t.walletAddress&&e&&fetch(U("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(v=>console.error("Failed to report user score:",v)),X&&(clearInterval(X),X=null),k.innerHTML=`
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
          <span id="archiveChevron" style="transition: transform 0.2s; font-size: 0.8rem; transform: ${Q?"rotate(180deg)":"rotate(0deg)"}; color: var(--market-text-main);">\u25BC</span>
        </button>
        
        <div id="archiveContent" style="display: ${Q?"block":"none"}; padding: 8px 4px 0 4px;">
          <div class="leaderboard-mode-tabs" role="tablist" aria-label="Season 1 views" style="margin-top: 20px; display: flex; gap: 8px;">
            <button class="leaderboard-mode-tab ${J==="global"?"active":""}" type="button" data-season1-view="global" style="flex: 1;">Global</button>
            <button class="leaderboard-mode-tab ${J==="division"?"active":""}" type="button" data-season1-view="division" style="flex: 1;">Division</button>
          </div>

          <div class="global-prize-box" id="season1PrizeBox" ${J==="global"?"":"hidden"} style="margin-top: 16px; display: grid; grid-template-columns: 1fr; gap: 12px;">
            <div>
              <span>Global Season Race</span>
              <strong>Top 10 share a 150 USDC prize pool</strong>
            </div>
          </div>

          <div class="division-title-container" id="season1DivisionControls" ${J==="division"?"":"hidden"} style="margin-top: 16px;">
            <div class="division-title-left" style="display: flex; align-items: center; gap: 8px; flex-wrap: nowrap !important; flex-shrink: 0 !important;">
              <h2 id="season1DivisionTitleText" style="margin: 0; white-space: nowrap !important;">Division 1</h2>
              <button class="how-it-works-btn" id="season1HowItWorksBtn" type="button" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; color: var(--market-text-main) !important; border-radius: 6px !important; padding: 4px 10px !important; font-size: 0.82rem !important; font-weight: 600 !important; cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important; white-space: nowrap !important; flex-shrink: 0 !important;">How it works</button>
            </div>
            <select id="season1DivisionSelector" class="division-select-menu">
              <option value="1">Division 1</option>
              <option value="2">Division 2</option>
            </select>
          </div>

          <div class="global-title-container" id="season1GlobalControls" ${J==="global"?"":"hidden"} style="margin-top: 16px;">
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
  `,((v="2026-07-19T23:59:59.000Z")=>{let f=document.getElementById("seasonTimer");X&&clearInterval(X);let A=()=>{let $=new Date(v).getTime()-new Date().getTime();if($<=0){f&&(f.innerText="Season Finished!"),X&&clearInterval(X);return}let x=Math.floor($/(1e3*60*60*24)),M=Math.floor($%(1e3*60*60*24)/(1e3*60*60)),O=Math.floor($%(1e3*60*60)/(1e3*60)),Y=Math.floor($%(1e3*60)/1e3);f&&(f.innerText=`${x}d ${M}h ${O}m ${Y}s`)};A(),X=setInterval(A,1e3)})();let r=v=>v.map((f,A)=>{let b=Number(f.globalRank)||A+1,$=String(f.username||""),x=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),M=x&&t.profileUsername?t.profileUsername:f.displayName||$,O=x?`${t.profileUsername?M:R($)} (You)`:M.startsWith("0x")&&M.length===42?R(M):M,Y=P(O),G=P(yt(f.status)),W=f.nextSeasonDivision?`Division ${f.nextSeasonDivision}`:"Qualify",Z=b<=10?"promotion-zone":"safety-zone",Ee=b<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${x?"user-highlight":""} ${Z}" role="listitem">
        <div class="leaderboard-row-left">
          ${Ee}
          <span class="leaderboard-rank rank-${b}">${b}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(f.points)||0} pts</strong>
          <span>${f.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${P(W)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${G}</span>
        </div>
      </div>
    `}).join(""),o=v=>v.map((f,A)=>{let b=A+1,$=String(f.username||""),x=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),M=x&&t.profileUsername?t.profileUsername:f.displayName||$,O=P(yt(f.status)),Y=x?`${t.profileUsername?M:R($)} (You)`:M.startsWith("0x")&&M.length===42?R(M):M,G=P(Y),W="safety-zone",Z='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return b<=2?(W="promotion-zone",Z='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):b>=5&&(W="relegation-zone",Z='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${x?"user-highlight":""} ${W}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${Z}
          <span class="leaderboard-rank rank-${b}" style="flex-shrink: 0; margin-right: 4px;">${b}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${G}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(f.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${O}</span>
        </div>
      </div>
    `}).join(""),s=v=>v.map((f,A)=>{let b=A+1,$=String(f.username||""),x=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),M=x&&t.profileUsername?t.profileUsername:f.displayName||$,O=x?`${t.profileUsername?M:R($)} (You)`:M.startsWith("0x")&&M.length===42?R(M):M,Y=P(O),G=Number(f.unlocks)||0,W=Number(f.points)||0,Z=f.status||`${G} briefing unlock${G===1?"":"s"}`;return`
      <div class="leaderboard-row global-row ${x?"user-highlight":""}" role="listitem">
        <div class="leaderboard-row-left">
          <span class="leaderboard-rank rank-${b}">${b}</span>
          <span class="leaderboard-username">${Y}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${W} pts</strong>
          <span>${Z}</span>
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
    `)},i=()=>{let v=document.getElementById("leaderboardListContainer");n(v,6),fetch(U("/api/leaderboard/preseason")).then(f=>f.json()).then(f=>{let A=f.players||[];v&&(v.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the preseason leaderboard yet. Unlock a daily AI briefing to join!</p>`:s(A))}).catch(f=>{console.error("Failed to load preseason leaderboard:",f),v&&(v.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading preseason leaderboard. Please try again.</p>`)})},l=()=>{let v=document.getElementById("season1LeaderboardListContainer");n(v,6),fetch(U("/api/leaderboard/season1")).then(f=>f.json()).then(f=>{let A=f.map((b,$)=>{let x=$+1,M=null;return x<=6?M=1:x<=12&&(M=2),{username:b.wallet_address,displayName:b.username,points:b.points,status:`${b.wins} wins, ${b.losses} losses`,globalRank:x,prizeEligible:x<=10,nextSeasonDivision:M}});if(v)if(J==="global")v.innerHTML=A.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in Season 1.</p>`:r(A);else{let b=document.getElementById("season1DivisionSelector"),$=b?Number(b.value):1,x=A.filter(M=>M.nextSeasonDivision===$);v.innerHTML=x.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players in this division.</p>`:o(x)}}).catch(f=>{console.error("Failed to load Season 1 archive:",f),v&&(v.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading Season 1 leaderboard archive. Please try again.</p>`)})},p=v=>{J=v,document.querySelectorAll("[data-season1-view]").forEach(f=>{f.classList.toggle("active",f.dataset.season1View===v)}),document.getElementById("season1DivisionControls")?.toggleAttribute("hidden",v!=="division"),document.getElementById("season1GlobalControls")?.toggleAttribute("hidden",v!=="global"),document.getElementById("season1PrizeBox")?.toggleAttribute("hidden",v!=="global"),l()};i(),Q&&p(J);let c=document.getElementById("archiveExpandBtn"),m=document.getElementById("archiveContent"),d=document.getElementById("archiveChevron");c?.addEventListener("click",()=>{Q=!Q,m&&(m.style.display=Q?"block":"none"),d&&(d.style.transform=Q?"rotate(180deg)":"rotate(0deg)"),Q&&p(J)}),document.querySelectorAll("[data-season1-view]").forEach(v=>{v.addEventListener("click",()=>{let f=v.dataset.season1View==="division"?"division":"global";p(f)})}),document.getElementById("season1DivisionSelector")?.addEventListener("change",()=>{l()}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){y("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let f=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,f.toFixed(2)),t.walletBalance=f.toFixed(2),y("Claimed $100 USDC mock credits!"),D(),aa()}else y("Opening Circle Faucet..."),window.open(Ke,"_blank")});let g=document.getElementById("howItWorksBtn"),T=document.getElementById("howItWorksModal"),B=document.getElementById("closeRulesModalBtn");g?.addEventListener("click",()=>{T&&T.classList.add("active")}),B?.addEventListener("click",()=>{T&&T.classList.remove("active")}),T?.addEventListener("click",v=>{v.target===T&&T.classList.remove("active")})},ra=()=>{t.activeSurface="feed",t.selectedMarketId=null,_e?.toggleAttribute("hidden",!0),He?.toggleAttribute("hidden",!0),ie?.toggleAttribute("hidden",!0),$e?.classList.remove("active"),Te?.classList.add("active"),Me?.classList.remove("active"),k?.classList.remove("markets-list")},Tr=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",Tt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id];if(ee(e)){let g=r?.resolvedOptionId||null,T=!!g,B=T&&a.optionId===g,v=er(a,r),f=B?v:0,A=ae(e).find(x=>x.id===g)?.label,b=!!a.claimedAt||Oe().has(e.id),$=!!t.claimingMarketIds[e.id];return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${q(e.category)}</span>
          <span>${T?`Resolved: ${P(A||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${P(a.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${H(a.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${H(f)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${T?"":`Closes ${e.closes}`}</span>
          ${T?b?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':$?'<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>':B?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(f)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let o=Tr(r?.outcome),s=Vt(a,r),n=s.reduce((g,T)=>Math.max(g,T.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,l=r?.outcome??0,p=Oe().has(e.id),c=l===1?a.yesSharesUsdc:l===2?a.noSharesUsdc:0,m=l===1?r?.yesSharesUsdc??0:l===2?r?.noSharesUsdc??0:0,d=r?.volumeUsdc??0,w=c>0&&m>0?c/m*d:0,u=l===0?"":p?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':w>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(w)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${q(e.category)}</span>
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
        ${u||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Mr=async e=>{if(!t.walletAddress){y("Please sign in first.");return}let a=xe().find(o=>o.id===e),r=a?V(a):"";if(!a||!r){y("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,F(),C("claim_attempt"),dt();let o=await pa(r,t.walletAddress);C("claim_success"),o.won&&Qa(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await se(t.walletAddress),await z(),y(o.won?`Claimed $${H(o.amountUsdc)}`:"No payout to claim"),D(),F()}catch(o){C("claim_failed"),y(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],F()}},Ar=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(s=>{let n=s.displayName||R(s.walletAddress),i=s.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${P(n)}</strong>
            <span>${R(s.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${s.used}/${s.maxUses}</strong>
            <span>${i?"Expired":`${s.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${P(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${P(a.code)}">
              <span>Invite code</span>
              <strong>${P(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${P(a.inviteLink)}">
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
  `},F=()=>{if(!k||!S)return;_e?.toggleAttribute("hidden",!0),He?.toggleAttribute("hidden",!0),ie?.toggleAttribute("hidden",!0),$e?.classList.remove("active"),Te?.classList.remove("active"),Me?.classList.add("active"),document.body.classList.remove("detail-mode"),S.hidden=!0,k.hidden=!1,k.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Se(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&Ct(),z({force:!t.hasLoadedPortfolioPositions}));let a=Oe(),r=xe().filter(d=>{let w=t.marketPositions[d.id];return a.has(d.id)||w&&(w.yesSharesUsdc+w.noSharesUsdc>0||(w.optionSharesUsdc||0)>0)}),o=r.filter(d=>(t.marketSnapshots[d.id]?.outcome??0)===0),s=r.filter(d=>(t.marketSnapshots[d.id]?.outcome??0)!==0),n=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?R(t.walletAddress):"Anonymous"),l=P(i),p=P(t.profileUsername||""),c=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${P(t.profileNotice.message)}</div>`:"",m=i.charAt(0).toUpperCase();k.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${Ar(n)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${m}</span>
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
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${p}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${c}

        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${ve("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
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
      ${t.loadingPortfolioPositions?mr(2):t.walletAddress?r.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${o.length?o.map(Tt).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${s.length?s.map(Tt).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},h=()=>{if(It.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){ta();return}if(t.activeSurface==="portfolio"){F();return}if(t.activeSurface==="leaderboard"){aa();return}ra(),Ft(),he(),wr(),j&&(j.value=t.activeArchiveDate??"")};Ve.textContent=Dt();ie?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");r&&(t.activeCategory=r.dataset.category,window.history.pushState({},"","#feed"),K(),h(),Ue(),te(t.activeCategory))});k?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,o=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,he();let s=k?.querySelector("#newsSearchInput");s&&(s.focus(),s.setSelectionRange(r,o))});$e?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),K(),h()});Te?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),K(),h(),Ue(),te(t.activeCategory)});Me?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),K(),h()});re?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Pe()):Ae()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{y("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&Mr(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Se(),F();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,F();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Se(),F();return}let s=a.closest("[data-copy-referral-code]");if(s){let i=s.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>y("Invite code copied"));return}let n=a.closest("[data-copy-referral-link]");if(n){let i=n.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>y("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Lt():Ae())});It.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),Ue(),te(t.activeCategory),a==="saved"&&(Va(),tt(),we())),K(),h()})});j?.addEventListener("change",()=>{t.activeArchiveDate=j.value||null,window.history.pushState({},"","#feed"),K(),h(),te(t.activeCategory)});xa?.addEventListener("click",()=>{t.activeArchiveDate=null,j&&(j.value=""),window.history.pushState({},"","#feed"),K(),h(),te(t.activeCategory)});k?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let u=k?.querySelector(".username-display-row"),g=k?.querySelector("#usernameEditForm");if(u&&g){u.style.display="none",g.style.display="flex";let T=g.querySelector("#usernameInput");T&&T.focus()}return}if(a.closest("#cancelUsernameBtn")){let u=k?.querySelector(".username-display-row"),g=k?.querySelector("#usernameEditForm");u&&g&&(u.style.display="flex",g.style.display="none");return}let s=a.closest("#saveUsernameBtn");if(s){let g=k?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(g){let T=g.value.trim().slice(0,15),B=s,v=B.textContent||"Save";B.disabled=!0,B.textContent="Saving...",Ka(T),t.profileNotice=null;try{t.walletAddress&&await ce(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},y("Username updated"),F()}catch(f){let A=f instanceof Error?f.message:"Username save failed";t.profileNotice={type:"error",message:A},y(A),B.disabled=!1,B.textContent=v,F()}}return}let n=a.closest("[data-timeframe]");if(n){let u=n.dataset.timeframe;t.activeMarketTimeframe=u,ta();return}let i=a.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,C("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),h(),window.scrollTo({top:0,behavior:"smooth"});return}if(a.closest(".read-tweet-btn")){e.stopPropagation();let u=a.closest("[data-story-id]");u&&Qe(Number(u.dataset.storyId),!0);return}let p=a.closest("[data-thread-story-id]"),c=a.closest("[data-export-id]"),m=a.closest("[data-export-action]"),d=a.closest("[data-story-id]");if(p){e.stopPropagation();let u=t.stories.find(g=>g.id===Number(p.dataset.threadStoryId));u&&Oa(u);return}let w=a.closest(".mobile-bookmark-btn, .bookmark-button");if(w){e.stopPropagation();let u=w.dataset.bookmarkUrl||"",g=t.stories.find(T=>T.sourceUrl===u);if(!g)return;g.saved=!g.saved,g.saved?ne.add(u):ne.delete(u),Sa(),y(g.saved?"Saved to your list":"Removed from saved"),he();return}if(m){e.stopPropagation(),yr(Number(m.dataset.exportStoryId),m.dataset.exportAction);return}if(c){e.stopPropagation();let u=Number(c.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===u?null:u,he();return}d&&(a.closest("a")||Qe(Number(d.dataset.storyId),!0))});k?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");!r||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Qe(Number(r.dataset.storyId)))});S?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let m=t.stories.find(d=>d.id===Number(r.dataset.unlockBriefing));m&&Ze(m);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let m=decodeURIComponent(o.dataset.unlockBriefingUrl||""),d=Da(m);d&&(de(d)?Re(d):Ze(d));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),h();return}if(a.closest("#openTradeDrawerBtn")){let m=E.find(u=>u.id===t.selectedMarketId);if(m){if(je(m,t.marketSnapshots[m.id])){y("This market is resolved and can no longer be traded.");return}if(Ht(m,t.marketSnapshots[m.id])){y("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,C("trade_drawer_open");let d=S.querySelector("#tradeDrawer"),w=S.querySelector("#tradeDrawerBackdrop");d?.classList.add("open"),w?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let m=S.querySelector("#tradeDrawer"),d=S.querySelector("#tradeDrawerBackdrop");m?.classList.remove("open"),d?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let m=E.find(d=>d.id===t.selectedMarketId);if(m){let d=xr(m),w=`https://api.whatsapp.com/send?text=${encodeURIComponent(d)}`;window.open(w,"_blank")}return}let s=a.closest("[data-market-trade]");if(s&&t.selectedMarketId){let m=s.dataset.marketTrade;or(t.selectedMarketId,m);return}let n=a.closest("[data-market-option-trade]");if(n&&t.selectedMarketId){let m=n.dataset.marketOptionTrade||t.marketTradeOptionId||"";br(t.selectedMarketId,m);return}let i=a.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,h();return}let l=a.closest("[data-market-trade-side]");if(l){if(l.disabled||l.classList.contains("disabled"))return;let m=E.find(u=>u.id===t.selectedMarketId),d=m?t.marketPositions[m.id]:void 0,w=l.dataset.marketTradeSide;if(!oe(t.marketOrderMode,w,d))return;t.marketTradeSide=w,h();return}let p=a.closest("[data-market-order-mode]");if(p){t.marketOrderMode=p.dataset.marketOrderMode;let m=E.find(w=>w.id===t.selectedMarketId),d=m?t.marketPositions[m.id]:void 0;t.marketTradeSide=lt(t.marketOrderMode,t.marketTradeSide,d),t.marketTradeAmount=Ce(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,d),h();return}a.closest("[data-back-to-feed]")&&_a()});S?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=E.find(p=>p.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,s=r?t.marketPositions[r.id]:void 0,n=Number(a.value);t.marketTradeAmount=Number.isFinite(n)?n:0;let i=r&&ee(r)?t.marketTradeAmount:Kt(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),l=S.querySelector(".market-inline-payout strong");l&&(l.textContent=`$${H(i)}`)});S?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});S?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=E.find(s=>s.id===t.selectedMarketId),o=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=Ce(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,o),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Pe);window.addEventListener("hashchange",Pe);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await se(t.walletAddress);t.walletBalance=a,D(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),fa())}});We?.addEventListener("click",()=>{if(!Ye||!We)return;let e=!Ye.hidden;Ye.hidden=e,We.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,he());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};L&&(L.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,j&&(j.value=""),K(),Ue(),te(t.activeCategory)),r.dataset.menuAction==="saved"&&(ra(),tt(),we(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),K(),h())});var Lr=async()=>{try{let e=await fetch(U("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),h())}catch(e){console.error("Failed to prefetch unlock config:",e)}},Pr=()=>{window.setInterval(async()=>{try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(U("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(E=o,t.activeSurface==="markets"&&h())}}catch(e){console.warn("Background market poll failed:",e)}},3e4)};h();D();Lr();te(t.activeCategory);Pr();wa().then(()=>{ar(),h(),D(),window.setTimeout(Er,1200),za()});var Ur=document.querySelector("#mobileArchiveCard"),fe=document.querySelector("#archiveControls");Ur?.addEventListener("click",()=>{if(!fe)return;fe.classList.toggle("mobile-open")&&setTimeout(()=>fe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Cr=document.querySelector("#archivePill");Cr?.addEventListener("click",e=>{if(e.stopPropagation(),!fe)return;fe.classList.toggle("mobile-open")&&setTimeout(()=>fe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Be=!1,Mt=!1,Er=()=>{Mt||(Mt=!0,(async()=>{let e=await De();if(Be=!!e,e){t.walletConnecting=!0,D();try{let a=await ua();Be=!1,t.walletConnecting=!1,a?(t.walletAddress=await De(),t.walletAddress&&(me(),t.walletBalance=await se(t.walletAddress),await z()),D(),t.activeSurface==="portfolio"&&h()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),y("Session expired. Please sign in again."),D(),h())}catch(a){console.warn(a),Be=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),y("Session expired. Please sign in again."),D(),h()}}await ma(a=>{Be||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),a&&ce(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,D(),a?(Se(),se(a).then(r=>{t.walletBalance=r,D(),t.activeSurface==="portfolio"&&h()}),z()):t.activeSurface==="portfolio"&&h())})})())};C("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",s=typeof o=="string"?o:r.getAttribute("class")||"",n=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||r.textContent?.trim()==="Open source")&&!s.includes("disabled")&&n!=="#"&&C("open_source")}},!0);
