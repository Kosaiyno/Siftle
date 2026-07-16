import"./chunks/chunk-ZUUPKAA6.js";var ue="Sports",Ne=[{id:"wc-spain-belgium-qualify",category:ue,timeframe:"Daily",optionMarket:!0,question:"Which team will qualify in Spain vs Belgium?",options:[{id:"spain",label:"Spain"},{id:"belgium",label:"Belgium"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on the team that officially qualifies in Spain vs Belgium, including extra time and penalties.",threadTopic:"Spain vs Belgium Qualify Watch",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-spain-concede-belgium",category:ue,timeframe:"Daily",optionMarket:!0,question:"Will Spain concede against Belgium?",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on whether Belgium are officially credited with at least one goal against Spain in regular time or extra time. Penalty shootout goals do not count.",threadTopic:"Spain Clean Sheet Watch vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-yamal-goal-assist-belgium",category:ue,timeframe:"Daily",optionMarket:!0,question:"Will Lamine Yamal record a goal or assist against Belgium?",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on whether Lamine Yamal is officially credited with at least one goal or at least one assist for Spain against Belgium in regular time or extra time. Penalty shootout goals do not count.",threadTopic:"Lamine Yamal Impact vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-spain-goals-belgium",category:ue,timeframe:"Daily",optionMarket:!0,question:"How many goals will Spain score in regular + extra time vs Belgium?",options:[{id:"0",label:"0 goals"},{id:"1",label:"1 goal"},{id:"2",label:"2 goals"},{id:"3-plus",label:"3+ goals"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on the number of goals officially scored by Spain against Belgium in regular time and extra time. Penalty shootout goals do not count.",threadTopic:"Spain Goals vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-tonali-spurs",category:ue,timeframe:"Sagas",question:"Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",probability:58,closes:"September 1, 2026",resolution:"Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline.",threadTopic:"Sandro Tonali Tottenham Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$182K",traders:"980",liquidity:"$29K",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-guimaraes-arsenal",category:ue,timeframe:"Sagas",question:"Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",probability:45,closes:"September 1, 2026",resolution:"Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline.",threadTopic:"Bruno Guimaraes Arsenal Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$204K",traders:"1,240",liquidity:"$36K",imageUrl:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",evidence:[]}];var Xe="https://faucet.circle.com/",gt="siftle_backend_wallet_migration_notice",Ye=null,_=()=>(Ye||(Ye=import("./chunks/arc-GU2TWQHR.js")),Ye),j=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,ma=async()=>(await _()).connectArcWallet(),ae=async e=>(await _()).readArcUsdcBalance(e),fa=async(e,a,r,o)=>(await _()).payAiBriefingUnlock(e,a,r,o),ga=e=>{_().then(a=>a.resolveLocalTestMarketYes(e))},ha=async e=>(await _()).readArcMarketSnapshot(e);var Bt=async(e,a)=>(await _()).readArcMarketState(e,a),va=async(e,a,r,o,s,n,i)=>(await _()).executeArcMarketOrder(e,a,r,o,s,n,i),ya=async(e,a,r,o,s)=>(await _()).executeArcOptionMarketOrder(e,a,r,o,s),Dt=()=>{_().then(e=>e.disconnectArcWallet())},ba=async(e,a)=>(await _()).claimArcMarketPayout(e,a),_e=async()=>(await _()).getConnectedArcWallet(),ka=async()=>(await _()).validateArcSession(),wa=async e=>(await _()).subscribeArcWallet(e),Sa=async()=>(await _()).triggerGatewayWarmup(),xa=["Sports"],$a="https://siftle.onrender.com",Ta=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?$a:""},Ma=Ta(),C=e=>`${Ma}${e}`,Nt="siftle_theme",Aa=()=>{try{return window.localStorage.getItem(Nt)==="light"?"light":"dark"}catch{return"dark"}},xe=Aa();function E(e){fetch(C("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e})}).catch(a=>console.error("Failed to track event:",a))}var t={activeSurface:"feed",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:5,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{}},ke=null,X="global",J=null,ht=!1,vt=!1,yt=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";yt&&localStorage.setItem("siftle_pending_referral_code",yt.trim().toUpperCase());var Ot=20,I=Ne,La=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},Me=()=>La(t.portfolioMarketPreviews,I,Ne),Ua=async()=>{t.loadingMarkets=!0,I.length===0&&(I=Ne);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(C("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(I=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},_t=async()=>{try{let e=await fetch(C("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Ht="siftle.savedUrls",re=new Set,st=()=>{try{let e=localStorage.getItem(Ht)||"[]",a=JSON.parse(e);re=new Set(a.filter(Boolean))}catch{re=new Set}},Pa=()=>{try{localStorage.setItem(Ht,JSON.stringify(Array.from(re)))}catch{}},$e=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!re.has(e.sourceUrl)};st();$e();var et=document.querySelector("#dateLabel"),oe=document.querySelector("#categoryTabs"),w=document.querySelector("#storyList"),S=document.querySelector("#storyDetail"),Ge=document.querySelector("#menuButton"),Je=document.querySelector("#menuPanel"),M=document.querySelector("#menuStatus"),F=document.querySelector("#archiveDateSelect"),bt=document.querySelector("#archiveStatus"),Ca=document.querySelector("#todayButton"),je=document.querySelector(".brief-hero"),ze=document.querySelector("#archiveControls"),Ae=document.querySelector("[data-surface='markets']"),Le=document.querySelector("[data-surface='feed']"),Ue=document.querySelector("[data-surface='portfolio']"),ee=document.querySelector("#walletButton"),we=document.querySelector("[data-theme-toggle]"),Ea=document.getElementById("guideToggleButton"),Rt=Array.from(document.querySelectorAll("[data-bottom-nav]")),Ke,Ia=()=>{if(!we)return;let a=`Switch to ${xe==="light"?"dark":"light"} mode`;we.setAttribute("aria-label",a),we.title=a,we.dataset.activeTheme=xe},jt=e=>{xe=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(Nt,e)}catch{}Ia()};jt(xe);var B=()=>{if(ee){let e=ee.querySelector(".wallet-button-label");ee.classList.toggle("connected",!!t.walletAddress),ee.disabled=t.walletConnecting,ee.setAttribute("aria-label",t.walletAddress?`Wallet ${j(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),ee.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${j(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",B);we?.addEventListener("click",()=>{jt(xe==="light"?"dark":"light")});Ea?.addEventListener("click",()=>{Ba()});var Ba=()=>{let e=document.createElement("div");e.className="guide-overlay",e.innerHTML=`
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
  `,document.body.appendChild(e);let a=e.querySelector("#guideClose"),r=e.querySelector("#guideStartBtn"),o=()=>e.remove();a.addEventListener("click",o),r.addEventListener("click",o),e.addEventListener("click",s=>{s.target===e&&o()})},Da=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(C("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&h("Referral connected"))}catch(r){console.warn(r)}},Te=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(C(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&q()}}},Pe=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,E("wallet_connect_start"),B();try{let e=await ma();if(e){E("wallet_connect_success"),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),t.walletBalance=await ae(e),await Da(e),Te(),await z(),ie(!0).catch(r=>console.error("Failed to report leaderboard entry:",r));let a=localStorage.getItem(gt);a?(localStorage.removeItem(gt),h(a)):h("Connected to Arc Testnet"),window.location.hash="#portfolio",Ee()}}catch(e){E("wallet_connect_failed"),h(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,B()}}},h=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Ke&&window.clearTimeout(Ke),Ke=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=h;var Na=(e,a,r,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let n=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",n),s.querySelector(".success-modal-action-btn")?.addEventListener("click",n),s.addEventListener("click",i=>{i.target===s&&n()})},Y=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},zt=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},Oa=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(!(t.activeCategory==="All"||e.category===t.activeCategory))return!1;let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),He=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,_a=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Ha=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let s=r.slice(0,a).join(" "),n=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return n>s.length*.45?s.slice(0,n+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},kt=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),_a(a)?"":Ha(a)},se=(e,a)=>kt(a||"")||kt(e.summary)||e.headline,Ra=e=>{let r=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!r||!window.html2canvas)return;let o=document.createElement("div");o.className="briefing-export-staging";let s=r.cloneNode(!0);s.classList.add("briefing-export-surface"),o.appendChild(s),document.body.appendChild(o);let n=document.documentElement.dataset.theme==="light";window.html2canvas(s,{backgroundColor:n?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(i=>{let d=document.createElement("a");d.download="siftle-briefing.png",d.href=i.toDataURL("image/png"),d.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{o.remove()})};window.downloadBriefingCard=Ra;var nt=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(a){let n=a.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${n}</h3>
    `}r[0].trim()&&(o+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let s="";for(let n=1;n<r.length;n+=2){let i=r[n].trim().toUpperCase(),d=r[n+1]?r[n+1].trim():"";if(!d)continue;let m="";if(i==="KEY POINTS"){let f=d.split(/(?:•|\*|-)\s+/).map(p=>p.trim()).filter(Boolean);f.length>0?m=`<ul class="briefing-list">${f.map(p=>`<li>${p}</li>`).join("")}</ul>`:m=`<p class="briefing-text">${d}</p>`}else m=`<p class="briefing-text">${d}</p>`,i==="TAKEAWAY"&&(s=d);let u=i.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${u}-section">
        <h4 class="briefing-title">${i}</h4>
        ${m}
      </div>
    `}return o+="</div>",a&&(o+=`
      <div class="share-briefing-container">
        <button type="button" class="share-briefing-btn" onclick="window.downloadBriefingCard?.(event.currentTarget)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Download Card</span>
        </button>
      </div>
    `),o},Ce=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${A(a)}</p>`:""},ja=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},it=e=>`siftle_ai_briefing_unlock_${ja()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Ft=e=>localStorage.getItem(it(e))||"",za=e=>{localStorage.removeItem(it(e))},ne=e=>!!Ft(e),qt=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:re.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Fa=e=>{let a=t.stories.find(s=>s.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=I.find(n=>n.id===t.selectedMarketId);if(s){let n=qe(s).evidence.find(i=>i.sourceUrl===e);if(n)return qt(s,n)}}return null},lt=(e,a)=>{let r=Xa(e,a);return r===null?null:r-Ot*60*1e3},Wt=(e,a)=>{let r=lt(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},Yt=(e,a)=>{let r=lt(e,a);return r===null?null:Date.now()>=r?`Locked ${Ot}m before kickoff`:null},qa=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled,s=!!t.walletAddress;return`
    <div class="briefing-section">
      ${Ce(e)}
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
  `},dt=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],ct=e=>`
  <div class="briefing-section">
    ${Ce(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,tt=async(e,a=!1)=>{if(!t.walletAddress){h("Please sign in to unlock this briefing."),Pe();return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",E("ai_unlock_attempt"),g();try{let r=await fetch(C("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let s=Number(o.amountUsdc)||.05;try{let u=await fetch(C(`/api/summary/price?sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(u.ok){let f=await u.json();typeof f.priceUsdc=="number"&&(s=f.priceUsdc)}}catch(u){console.warn("Failed to retrieve autonomous price, falling back to default:",u.message)}let n=await fa(o.treasuryAddress,s,u=>{M&&(M.textContent=u),t.briefingStatusByUrl[e.sourceUrl]=u,g()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=`Briefing unlocked! Charged ${s} USDC (priced by Siftle AI Agent)`,g();let i=await fetch(C("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:n})}),d=await i.json();if(!i.ok||!d.unlockToken)throw new Error(d.error||"AI briefing failed");localStorage.setItem(it(e),d.unlockToken),E("ai_unlock_success"),(Number(d?.bonus?.points)||0)>0&&ie(!1).catch(u=>console.error("Failed to refresh leaderboard bonus:",u)),await Fe(e)}catch(r){E("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl];let o=r instanceof Error?r.message:String(r||""),s=o,n=o.toLowerCase();(n.includes("balance")||n.includes("exceeds balance")||n.includes("transfer amount exceeds"))&&(s="Your USDC balance is too low to unlock this briefing. Please go to the Portfolio tab and click 'Claim Faucet' to get free testnet USDC."),h(s)}finally{t.unlockingSummaryUrl=null,g()}}},Fe=async e=>{if(ne(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=se(e,e.ai_summary),E("view_summary"),M&&(M.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded"),g();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing...",g();try{let a=await fetch(C("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Ft(e)})});if(!a.ok){if(a.status===402){za(e),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",M&&(M.textContent="Unlock expired. Unlock again to continue."),g();return}throw new Error(`Summary request failed with ${a.status}`)}let r=await a.json();t.aiSummaries[e.sourceUrl]=se(e,r.summary),t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",M&&r.provider&&(M.textContent=r.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${r.provider}`)}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",M&&(M.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,g()}}},at=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);if(r){if(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),g(),r.type==="tweet"){window.scrollTo({top:0,behavior:"smooth"});return}a&&!ne(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),g(),tt(r,!0)):ne(r)&&Fe(r),window.scrollTo({top:0,behavior:"smooth"})}},Wa=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),g(),Gt(e),window.scrollTo({top:0,behavior:"smooth"})},Ya=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.history.pushState({},"","#feed"),g(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Gt=async e=>{try{let a=await fetch(C(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),M&&(M.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),h("That timeline no longer has a verified past update"),M&&(M.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,g()}};function Ee(){if(window.location.hash==="#resolve-local-yes"){let a=I.find(r=>r.id==="siftle-local-test-2")||I.find(r=>r.timeframe==="Daily"&&G(r).startsWith("0x00000000000000000000000000000000000001"));if(a){ga(G(a)),pr(a,"yes"),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),h("Local test market resolved YES"),z().then(()=>{ie(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),B(),q()});return}}let e=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||e){t.activeSurface="markets",t.selectedMarketId=e?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,g();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let a=window.location.hash.match(/^#story-(\d+)$/),r=window.location.hash.match(/^#thread-(\d+)$/),o=a?t.stories.find(i=>i.id===Number(a[1])):void 0,s=r?t.stories.find(i=>i.id===Number(r[1])):void 0,n=t.selectedStoryId!==null||t.selectedThreadUrl!==null;t.selectedStoryId=o?.id??null,t.selectedThreadUrl=s?.sourceUrl??null,t.activeThread=null,g(),o&&Fe(o),s&&Gt(s),!o&&!s&&n&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g()}var rt=e=>{bt&&(bt.textContent=e)},Ga=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Vt(),g());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(C(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],$e(),t.hasLoadedFeed=!0,et&&(et.textContent=zt(s.date??t.activeArchiveDate)),M)if(t.activeArchiveDate)M.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=s.archive?.provider==="shelby"?"Shelby":"local archive";M.textContent=`Latest published feed loaded from ${n}`}rt(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),$e(),M&&(M.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,g(),Ee()}},Ja=async()=>{if(F)try{let e=await fetch(C("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),F.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),F.value=t.activeArchiveDate??"",rt(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),rt("Archive unavailable")}},Ie=()=>{ht||(ht=!0,Ja())},V=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Ga(e,a)},Ka=()=>{vt||(vt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&V(t.activeCategory,!0),Ie()},8e3))},Va=e=>e==="All"?"For you":e==="Sports"?"Football":e,W=e=>e==="Sports"?"Football":e,ot=e=>/^@/.test(String(e.source||""))||/(?:^|\/)(?:x|twitter)\.com\//i.test(String(e.sourceUrl||"")),Jt=(e,a)=>{let r=e.trim();return r.length<=a?r:`${r.slice(0,Math.max(0,a-1)).trimEnd()}\u2026`},Za=e=>e.replace(/^@/,"").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ").filter(Boolean),Kt=e=>{let a=String(e.source||W(e.category)).trim(),r=Za(a);if(r.length===0)return W(e.category);let o=r.filter((i,d)=>{let m=i.toLowerCase();return!(d>0&&["live","news","official"].includes(m))}),s=o.length>0?o:r,n="";for(let i of s){let d=n?`${n} ${i}`:i;if(d.length>18)break;n=d}return Jt(n||s[0],18)},wt=e=>{let a=String(e.headline||"").replace(/\s+/g," ").trim();if(!ot(e))return a;let r=a.replace(/https?:\/\/\S+/gi,"").replace(/\(Source:[^)]+\)\s*$/i,"").replace(/\s+/g," ").trim();if(/^R to\s+@[^:]+:\s*(?:more here|watch more here)[:.!?]*$/i.test(r))return`Latest from ${Kt(e)}`;let o=r.replace(/^R to\s+@[^:]+:\s*/i,"").trim(),s=o.length>=24&&!/^(?:more here|watch more here)[:.!?]*$/i.test(o)?o:r||a;return Jt(s,150)},Vt=()=>{oe&&(oe.innerHTML=xa.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${Va(e)}
        </button>
      `).join(""))},Zt=e=>(e.thread?.count??0)>=1,Qa=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Qt=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),s=new Date(r.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),qe=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},Xa=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},er=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,tr=(e,a)=>({date:er(e,a),source:e.source,headline:e.headline,summary:se(e),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Xt=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(C(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...Qt(r.items??[])],s=o.filter((d,m,u)=>u.findIndex(f=>f.sourceUrl===d.sourceUrl)===m).map(tr),i=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:s,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&g()}}},G=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",Z=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],K=e=>!!(e.optionMarket&&Z(e).length>1),ar=e=>{let a=Z(e);return a.find(r=>r.id===t.marketTradeOptionId)||a[0]||null},R=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),A=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),pt=e=>`siftle_profile_username_${e.toLowerCase()}`,ea=e=>e.trim().replace(/\s+/g," ").slice(0,15),me=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=pt(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=ea(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},rr=e=>{if(!t.walletAddress)return;let a=pt(t.walletAddress),r=ea(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},or=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},ta=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:5,max:10,fallback:5}},Be=(e,a,r,o)=>{let{min:s,max:n,fallback:i}=ta(a,r,o);return Number.isFinite(e)?Math.min(n,Math.max(s,e)):i},aa=(e,a,r,o,s)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let n=a==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,i=e.yesSharesUsdc,d=e.noSharesUsdc;if(o==="sell")return Math.min(r,n);let m=(a==="yes"?i:d)+r,u=i+d+r;return m<=0||u<=0?r:(n+r)/m*u},ra=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},sr=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},oa=e=>`siftle_claimed_markets_${e.toLowerCase()}`,Re=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(oa(t.walletAddress))||"[]"))}catch{return new Set}},nr=e=>{if(!t.walletAddress)return;let a=Re();a.add(e),localStorage.setItem(oa(t.walletAddress),JSON.stringify(Array.from(a)))},We=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),te=(e,a,r)=>{let o=r?.yesSharesUsdc??0,s=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:s>0:a==="yes"?s<=0:o<=0},ut=(e,a,r)=>{if(te(e,a,r))return a;let o=a==="yes"?"no":"yes";return te(e,o,r)?o:a};var ir=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},Ve=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`},sa="siftle_leaderboard_cache_v4_",St=e=>{let a=String(e||"").match(/(\d+)\s+wins?/i),r=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:a&&Number(a[1])||0,losses:r&&Number(r[1])||0}},xt=e=>{try{let a=JSON.parse(localStorage.getItem(`${sa}${e}`)||"null");return Array.isArray(a?.players)&&a.players.length?a:null}catch{return null}},Ze=(e,a)=>{if(!(!Array.isArray(a?.players)||a.players.length===0))try{localStorage.setItem(`${sa}${e}`,JSON.stringify({...a,cachedAt:Date.now()}))}catch{}},na=(e,a)=>{let r=St(e?.status||""),o=St(a?.status||""),s=(Number(a?.points)||0)-(Number(e?.points)||0);return s||(o.wins!==r.wins?o.wins-r.wins:r.losses!==o.losses?r.losses-o.losses:String(e?.username||"").localeCompare(String(a?.username||"")))},lr=e=>{let a=String(e?.displayName||"").trim().toLowerCase();return a&&!/^0x[a-f0-9]{40}$/i.test(a)?`name:${a}`:`wallet:${String(e?.username||"").toLowerCase()}`},dr=e=>{let a=new Map;return e.forEach(r=>{let o=lr(r);if(!o||o==="wallet:")return;let s=a.get(o);if(!s){a.set(o,r);return}a.set(o,na(s,r)<=0?s:r)}),Array.from(a.values())},$t=(e,a=[],r=!1)=>{let o=dr(e).slice().sort(na);return r?o.map((s,n)=>({...s,globalRank:n+1})):o},cr=(e,a)=>{let r=String(e?.optionId||"").trim(),o=Math.max(0,Number(e?.optionSharesUsdc)||0),s=Math.max(0,Number(a?.optionPools?.[r])||0),n=Math.max(0,Number(a?.volumeUsdc)||0);return!r||o<=0?0:s<=0||n<=0?o:o/s*n},Qe=(e,a)=>!K(e)||!a?a:{...a,optionPools:Object.fromEntries(Z(e).map(r=>[r.id,0]))},Tt=()=>`
  <div class="leaderboard-sync-note" role="status">
    Showing saved standings while Siftle refreshes live scores...
  </div>
`,mt=()=>{let e=0,a=0,r=0,o=I.filter(i=>i.timeframe==="Daily").map(i=>i.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(s)try{n=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,a++;continue}if(n[i]?.result==="loss"){r++;continue}let d=t.marketPositions[i],u=t.marketSnapshots[i]?.outcome??0;if(u===0)continue;let f=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,p=[];try{p=JSON.parse(localStorage.getItem(f)||"[]")}catch{}let b=p.includes("yes")&&p.includes("no");if(u===1&&d&&d.yesSharesUsdc>0){let l=b?50:100;e+=l,a++,n[i]={result:"win",points:l}}else if(u===2&&d&&d.noSharesUsdc>0){let l=b?50:100;e+=l,a++,n[i]={result:"win",points:l}}else d&&(d.yesSharesUsdc>0||d.noSharesUsdc>0)&&(r++,n[i]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(n)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},pr=(e,a)=>{let r=G(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,s=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(o))continue;let d=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(d)&&s.add(d)}s.forEach(n=>{let i=`${o}${n}`,d={yesSharesUsdc:0,noSharesUsdc:0};try{d=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let m=(Number(d.yesSharesUsdc)||0)>0,u=(Number(d.noSharesUsdc)||0)>0;if(!m&&!u)return;let f=`siftle_traded_sides_${e.id}_${n}`,p=[];try{p=JSON.parse(localStorage.getItem(f)||"[]")}catch{}let b=p.includes("yes")&&p.includes("no"),l=a==="yes"?m:u,c=`siftle_resolved_results_${n}`,y={};try{y=JSON.parse(localStorage.getItem(c)||"{}")}catch{}y[e.id]={result:l?"win":"loss",points:l?b?50:100:0},localStorage.setItem(c,JSON.stringify(y));let k=0,$=0,T=0;Object.values(y).forEach(x=>{x.result==="win"?($+=1,k+=Number(x.points)||0):x.result==="loss"&&(T+=1)});let v=localStorage.getItem(pt(n))||"";fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:v,points:k,status:`${$} win${$===1?"":"s"}, ${T} loss${T===1?"":"es"}`})}).catch(x=>console.error("Failed to report local resolved score:",x))})},ie=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?mt():null,r=await fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},ur=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(r)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},mr=async e=>{let a=G(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(K(e)&&!t.walletAddress){let r=e.resolvedOptionId||null,o=Number(e.outcome);t.marketSnapshots[e.id]=Qe(e,{yesPriceCents:0,noPriceCents:0,volumeUsdc:Number(e.volumeUsdc)||0,yesSharesUsdc:0,noSharesUsdc:0,outcome:o===1||o===2||o===3?o:r?1:0,optionPools:e.optionPools||Object.fromEntries(Z(e).map(s=>[s.id,0])),resolvedOptionId:r,traderCount:0}),t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(K(e)&&t.walletAddress){let{position:r,snapshot:o}=await Bt(a,t.walletAddress);t.marketPositions[e.id]=r,t.marketSnapshots[e.id]=Qe(e,o)}else t.marketSnapshots[e.id]=Qe(e,await ha(a))}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&g()}}},z=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await _t();let a=Me(),r=await Promise.all(a.map(async o=>{let s=G(o);if(!s)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:n,snapshot:i}=await Bt(s,t.walletAddress);return t.marketSnapshots[o.id]=i,[o.id,n]}catch(n){return console.warn(`Failed to load portfolio market ${o.id}:`,n),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,ie(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&g()}}},fr=async(e,a)=>{if(!t.walletAddress){h("Session expired or wallet not connected. Please sign in."),Pe();return}let r=Me().find(u=>u.id===e);if(!r)return;t.marketTradeSide=a;let o=G(r);if(!o){h("Deploy this Arc market contract before trading"),g();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",g(),await z(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){h("Still loading your position. Try again in a moment."),g();return}let s=t.marketSnapshots[r.id];if(We(r,s)){t.tradeDrawerOpen=!1,h("This market is resolved and can no longer be traded."),g();return}let n=s?.yesPriceCents??r.probability,i=s?.noPriceCents??100-r.probability,d=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!te(t.marketOrderMode,a,d)){let u=sr(d),f=t.marketOrderMode==="sell"?u?`You can only exit your ${u.toUpperCase()} shares.`:"You do not have shares to exit in this market.":u?`Exit your ${u.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";h(f),t.marketTradeSide=ut(t.marketOrderMode,a,d),g();return}let m=Be(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,d);t.marketTradeAmount=m,E("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",g();let u=await va(o,t.marketOrderMode,a,m,f=>{t.marketTradeStatus=f,g()},n,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await _e(),t.walletAddress&&(t.walletBalance=await ae(t.walletAddress)),await z({force:!0}),ie(!0).catch(f=>console.error("Failed to report leaderboard entry:",f)),t.walletAddress){let f=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,p={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let l=localStorage.getItem(f);if(l){let c=JSON.parse(l);p={yesCost:c.yesCost||0,noCost:c.noCost||0,yesShares:c.yesShares||0,noShares:c.noShares||0}}}catch{}let b=m;if(t.marketOrderMode==="buy"){let l=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,c=[];try{c=JSON.parse(localStorage.getItem(l)||"[]")}catch{}c.includes(a)||(c.push(a),localStorage.setItem(l,JSON.stringify(c))),a==="yes"?(p.yesCost+=b,p.yesShares=(p.yesShares||0)+b/(n/100)):(p.noCost+=b,p.noShares=(p.noShares||0)+b/(i/100))}else{let l=t.marketPositions[r.id];if(l){if(a==="yes"&&l.yesSharesUsdc>0){let c=Math.min(1,b/l.yesSharesUsdc);p.yesCost=Math.max(0,p.yesCost-p.yesCost*c),p.yesShares=Math.max(0,(p.yesShares||0)-(p.yesShares||0)*c)}else if(a==="no"&&l.noSharesUsdc>0){let c=Math.min(1,b/l.noSharesUsdc);p.noCost=Math.max(0,p.noCost-p.noCost*c),p.noShares=Math.max(0,(p.noShares||0)-(p.noShares||0)*c)}}}localStorage.setItem(f,JSON.stringify(p))}h(`Trade confirmed ${u.slice(0,8)}...`),E(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Na(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(u){E("trade_failed"),ir(u)?(Dt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),h("Session expired. Please sign in again.")):h(u instanceof Error?u.message:"Arc trade failed")}finally{t.marketTradeStatus=null,B(),g()}},gr=e=>Zt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",hr=e=>Zt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",vr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',yr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',ve=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,br=()=>`
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
`,kr=(e=4)=>`${ve("Loading stories")}${Array.from({length:e},br).join("")}`,ge=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${ve("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,wr=(e=3)=>`
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
`;var Sr=(e=3)=>`
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
`,xr=(e=2)=>`
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
`,Mt=e=>{let a=e.type==="tweet",r='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; display: inline-block; vertical-align: text-top; color: var(--color-text-primary);"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',o='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 12px; height: 12px; display: inline-block; vertical-align: text-top; margin-right: 4px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';return`
    <article class="story-card ${a?"social-story tweet-card":ot(e)?"social-story":""}" data-story-id="${e.id}" role="button" tabindex="0" aria-label="Open summary for ${e.headline}">

      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            ${a?`<div style="margin-bottom: 6px;">${r}</div>`:""}
            <strong>${e.source}</strong>
            <span>${He(e)} - ${e.readTime}</span>
          </div>
        </div>
        <div class="story-card-actions">
          <button class="bookmark-button" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="${e.saved?"Remove saved story":"Save story"}">
            ${vr()}
          </button>
          <div class="share-control">
            <button class="export-button" type="button" aria-label="Export story card" data-export-id="${e.id}" aria-expanded="${t.activeShareStoryId===e.id}">
              ${yr()}
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
        <h2 class="card-headline">${wt(e)}</h2>
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
              <span class="mobile-source-pill ${ot(e)?"social":""}" style="display: inline-flex; align-items: center; gap: 4px;">
                ${a?o:""}
                ${Kt(e)}
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
            <h2 class="card-headline">${wt(e)}</h2>
            <span class="mobile-card-time">${He(e)}</span>
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
                ${hr(e)}
                ${/example\\.com/i.test(e.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
                <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
              `}
        </div>
      </div>

    </article>
  `},he=()=>{if(!w)return;let e=Oa();if(w.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){w.innerHTML=kr(4);return}let a=Number(t.unlockConfig?.amountUsdc)||.001,r=A(t.newsSearchQuery.trim()),s=`
    <section class="news-feed-search-shell">
      <div class="news-feed-search-copy">
        <p>${r?`${e.length} matches for "${r}".`:`Search saved news by keyword. Unlock an AI briefing with a ${a} testnet USDC nanopayment to get what happened, key points, and takeaway without opening the full article.`}</p>
      </div>
      <label class="news-feed-search-bar" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search all saved news by keyword" value="${A(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </section>
  `;if(e.length===0){let n=t.showSaved?[]:t.stories;if(n.length>0){w.innerHTML=s+n.map(Mt).join("");return}w.innerHTML=s+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>';return}w.innerHTML=s+e.map(Mt).join("")},At=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),Se=(e,a,r,o,s,n)=>{e.beginPath(),e.moveTo(a+n,r),e.lineTo(a+o-n,r),e.quadraticCurveTo(a+o,r,a+o,r+n),e.lineTo(a+o,r+s-n),e.quadraticCurveTo(a+o,r+s,a+o-n,r+s),e.lineTo(a+n,r+s),e.quadraticCurveTo(a,r+s,a,r+s-n),e.lineTo(a,r+n),e.quadraticCurveTo(a,r,a+n,r),e.closePath()},$r=(e,a,r,o,s,n,i)=>{let d=a.split(/\s+/).filter(Boolean),m=[],u="";for(let f of d){let p=u?`${u} ${f}`:f;if(e.measureText(p).width<=s){u=p;continue}if(u&&m.push(u),u=f,m.length===i)break}if(u&&m.length<i&&m.push(u),d.length>0&&m.length===i){for(;e.measureText(`${m[i-1]}...`).width>s&&m[i-1].length>0;)m[i-1]=m[i-1].slice(0,-1).trim();m[i-1]=`${m[i-1]}...`}return m.forEach((f,p)=>e.fillText(f,r,o+p*n)),o+m.length*n},Tr=(e,a,r,o,s,n,i)=>{let d=Math.max(s/a.naturalWidth,n/a.naturalHeight),m=s/d,u=n/d,f=(a.naturalWidth-m)/2,p=(a.naturalHeight-u)/2;e.save(),Se(e,r,o,s,n,i),e.clip(),e.drawImage(a,f,p,m,u,r,o,s,n),e.restore()},Lt=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),Ut=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))):"",Mr=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",Pt=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",Se(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await At("./assets/siftle-logo-small.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${Ut(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(a){let d=await At(Mr(e.imageUrl)).catch(()=>null);d?Tr(o,d,110,n,860,520,28):(o.fillStyle="#eef2ff",Se(o,110,n,860,520,28),o.fill())}else o.fillStyle="#eef2ff",Se(o,110,n,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",Se(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(W(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",$r(o,Ut(e.headline),110,888,860,54,4),r},ia=async e=>{let a=await Pt(e,!0);try{return await Lt(a)}catch{return Lt(await Pt(e,!1))}},la=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,da=async e=>{let a=await ia(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=la(e),o.click(),URL.revokeObjectURL(r)},Ar=async e=>{let a=await ia(e),r=new File([a],la(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await da(e)},Lr=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,he(),h(a==="share"?"Preparing share image":"Preparing download"),M&&(M.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await Ar(r):await da(r),h(a==="share"?"Share image ready":"Image saved"),M&&(M.textContent="Branded story image ready")}catch(o){console.warn(o),h("Image export unavailable"),M&&(M.textContent="Image export was cancelled or unavailable")}}},Ct=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,o=dt(e);return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${se(e)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${r?"disabled":""}>${r?"Preparing...":"AI briefing"}</button>
      </div>
      ${Ce(e)}
      ${r?`<div style="margin-top: 12px;">${ge()}</div>`:ne(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${ge()}</div>`:o?`<div style="margin-top: 12px;">${ct(e)}</div>`:`<div style="margin-top: 12px;">${nt(se(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},Ur=async(e,a)=>{if(!t.walletAddress){h("Session expired or wallet not connected. Please sign in."),Pe();return}let r=Me().find(u=>u.id===e);if(!r||!K(r))return;let o=Z(r).find(u=>u.id===a);if(!o){h("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",g(),await z(),t.marketTradeStatus=null);let s=t.marketSnapshots[r.id];if(We(r,s)){h("This market is resolved and can no longer be traded.");return}let n=t.marketPositions[r.id],i=t.marketOrderMode==="sell";if(!i&&n?.optionId){h("Your pick is already locked for this market.");return}if(i&&!n?.optionId){h("You do not have a pick to exit.");return}let d=Math.max(0,Number(n?.optionSharesUsdc)||0);if(i&&d<=0){h("Your pick is still loading. Please try again."),await z({force:!0});return}let m=i?d:Be(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=m,t.marketTradeOptionId=i&&n?.optionId||o.id,E("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",g(),await ya(r.id,i?"sell":"buy",i&&n?.optionId||o.id,m,u=>{t.marketTradeStatus=u,g()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await _e(),t.walletAddress&&(t.walletBalance=await ae(t.walletAddress)),await z({force:!0}),E(i?"trade_sell_success":"trade_buy_success"),h(i?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(u){E("trade_failed"),h(u instanceof Error?u.message:"Trade failed")}finally{t.marketTradeStatus=null,B(),g()}},Pr=()=>{if(!S||!w)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(w.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){S.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){S.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${wr(3)}
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
          <span>${Qa(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${Ct(e,"Latest")}
          ${Qt(r?.items??[]).map(o=>Ct(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Cr=()=>{if(!S||!w)return;if(t.selectedThreadUrl){Pr();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){S.hidden=!0,S.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),w.hidden=!1;return}if(e.type==="tweet"){w.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode");let i='<svg class="x-logo-svg" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; display: inline-block; vertical-align: text-top; margin-right: 6px;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';S.innerHTML=`
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
            <span class="tweet-detail-time">${He(e)}</span>
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
    `;return}let a=se(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=ne(e),s=t.unlockingSummaryUrl===e.sourceUrl,n=dt(e);w.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),S.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${e.source} - ${He(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?Ce(e):""}
          ${o?r?ge():n?ct(e):nt(a,e):qa(e,s)}
        </section>
        <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `},Er=e=>{let a=t.marketSnapshots[e.id],r=G(e),o=K(e),s=Z(e).length,n=a?.volumeUsdc??(Number(e.volumeUsdc)||0),i=a?.yesPriceCents,d=i??e.probability,m=o?`${s}`:`${d}%`,u=i===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${i}\xA2 \xB7 No ${100-i}\xA2`,f=i===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:u,p=qe(e),b=e.timeframe==="Daily"?Wt(e,a):e.closes;return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span class="timeframe-chip ${e.timeframe}">${e.timeframe==="Sagas"?"Sagas":e.timeframe}</span>
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
        <strong>${m}</strong>
        <span>${o?"possible outcomes":r?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${o?"Pick exactly one":"Choose a side"}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${o?100:d}%"></span></div>
      <div class="market-volume">
        <span>Market activity</span>
        <strong>Hidden</strong>
      </div>
      <div class="market-card-footer">
        <span>${p.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${b}`:`Closes ${b}`}</span>
      </div>
    </button>
  `},Ir=e=>{let a=qe(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,n=a.evidence[0],i=n?n.headline:"No updates yet",d=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${d}`},Br=e=>{if(!w||!S)return;let a=qe(e),r=!t.checkedMarketEvidence[e.id],o=G(e),s=t.marketSnapshots[e.id],n=K(e),i=Z(e);n&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let d=ar(e),m=!!(o&&!s),u=s?.yesPriceCents??(o?e.probability:0),f=s?.noPriceCents??(o?100-e.probability:0),p=m?"":o?`${u}\xA2`:"--",b=m?"":o?`${f}\xA2`:"--",l=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},c=!!l.optionId;n&&c&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),n&&!c&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let y=n&&t.marketOrderMode==="sell"&&c?Math.max(0,Number(l.optionSharesUsdc)||0):0,k=y>0?y:Be(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,l),$=y>0?{min:0,max:y}:ta(t.marketOrderMode,t.marketTradeSide,l),T=t.marketOrderMode==="buy"?"$5-$10 USDC":`Up to $${R($.max)} USDC`,v=!t.walletAddress||t.hasLoadedPortfolioPositions,x=We(e,s),L=Yt(e,s),P=!!L;n||(t.marketTradeSide=ut(t.marketOrderMode,t.marketTradeSide,l));let N=!n&&!x&&!P&&v&&te(t.marketOrderMode,"yes",l),H=!n&&!x&&!P&&v&&te(t.marketOrderMode,"no",l),le=n?!x&&!P&&v&&(t.marketOrderMode==="sell"?c:!c&&!!d):!x&&!P&&v&&te(t.marketOrderMode,t.marketTradeSide,l),O=x?"Market resolved":L||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),de=x?"Market resolved":L||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),ye=n?k:aa(s,t.marketTradeSide,k,t.marketOrderMode,l),ce=t.marketOrderMode==="buy"?"Buy":"Exit",Q=n?"Pick one outcome":o?"Arc testnet live":"Contract not deployed";w.hidden=!0,S.hidden=!1,S.classList.add("fullscreen"),document.body.classList.add("detail-mode"),mr(e),Xt(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&z({force:!t.hasLoadedPortfolioPositions});let De=n?!!l.optionId:l.yesSharesUsdc>0||l.noSharesUsdc>0,be="";n&&De&&t.walletAddress?be=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${A(l.optionLabel||"Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Status</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">Locked in</strong>
          </div>
        </div>
      </div>
    `:De&&t.walletAddress&&(be=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${ra(l,s).map(D=>`
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${D.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${R(D.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${R(D.payout)}</strong>
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
            <span class="market-status-pill">${Q}</span>
          </div>
          <h2>${e.question}</h2>
          ${be}
          ${a.imageUrl?`
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${a.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          `:""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${lt(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${Wt(e,s)}</strong>
            </div>
            <div class="market-stat">
              <span>Market activity</span>
              <strong>Hidden</strong>
            </div>
          </div>

          <div class="market-resolution-panel">
            <h3>Resolution Rules</h3>
            <p>${e.resolution}</p>
            ${L?`<p style="margin-top: 10px; color: #f59e0b; font-weight: 600;">${L}</p>`:""}
          </div>

          <section class="market-evidence-thread">
            <header>
              <h3>Related News</h3>
              <span>${r?"Loading...":`${a.evidence.length} stories`}</span>
            </header>
            <p class="market-thread-intro">Read the stories connected to this market, newest first.</p>
            <div class="market-thread-timeline">
              ${r?Sr(3):a.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':a.evidence.map(U=>{let D=qt(e,U),pe=t.unlockingSummaryUrl===U.sourceUrl;return`
                <article class="market-thread-update">
                  <div class="market-thread-marker"></div>
                  <div class="market-thread-update-content">
                    <div class="market-thread-update-meta">
                      <span>${U.date} \xB7 ${U.source}</span>
                    </div>
                    <h4>${U.headline}</h4>
                    <p>${U.summary}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                      ${/example\.com/i.test(U.sourceUrl)?"":`<a class="market-thread-source-link" href="${U.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(U.sourceUrl)}" ${pe?"disabled":""}>${pe?"Preparing...":"AI briefing"}</button>
                    </div>
                    ${Ce(D)}
                    ${pe?`<div style="margin-top: 12px;">${ge()}</div>`:ne(D)?t.loadingSummaryUrl===U.sourceUrl?`<div style="margin-top: 12px;">${ge()}</div>`:dt(D)?`<div style="margin-top: 12px;">${ct(D)}</div>`:`<div style="margin-top: 12px;">${nt(se(D,t.aiSummaries[U.sourceUrl]),D)}</div>`:""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${n?`<span>${c?"Pick locked":"Choose one option"}</span><span><strong>${i.length} options</strong></span>`:`<span>Choose a side</span><span><strong>${t.marketOrderMode==="sell"?"Exit available":"Trade open"}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${x||P?"disabled":""}>
          ${x?"Market Resolved":L||(n?c?"Pick Locked":"Pick Outcome":"Trade Market")}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${x||P?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${x||P?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?i.map(U=>{let D=t.marketTradeOptionId===U.id||l.optionId===U.id,pe=x||P||t.marketOrderMode==="sell"||c||!v;return`
                  <button type="button" class="market-side option ${D?"active":""} ${pe?"disabled":""}" data-market-option-id="${A(U.id)}" ${pe?"disabled":""}>
                    <span>${A(U.label)}</span>
                    ${l.optionId===U.id?"<small>Your pick</small>":""}
                  </button>
                `}).join(""):m?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${N?"":"disabled"}" data-market-trade-side="yes" ${N?"":"disabled"} title="${N?"Yes":O}">
                  <span>Yes</span>
                  ${N?"":`<small>${O}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${H?"":"disabled"}" data-market-trade-side="no" ${H?"":"disabled"} title="${H?"No":de}">
                  <span>No</span>
                  ${H?"":`<small>${de}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${T}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${$.min.toFixed(2)}" max="${Math.max($.min,$.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${k}" data-market-amount ${x||P?"disabled":""} />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>Market amounts are hidden while this market is open.</span>
          </div>

          <div class="drawer-action-container">
            ${m?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:x?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':P?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${L}</button>`:t.walletAddress?v?n&&t.marketOrderMode==="sell"&&c?`<button type="button" class="market-submit-button" data-market-option-trade="${A(l.optionId||"")}">Exit pick</button>`:le?n?`<button type="button" class="market-submit-button" data-market-option-trade="${A(d?.id||"")}">Confirm ${A(d?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${ce} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${ce.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},ca=()=>{if(!w||!S)return;if(je?.toggleAttribute("hidden",!0),ze?.toggleAttribute("hidden",!0),oe?.toggleAttribute("hidden",!0),Ae?.classList.add("active"),Le?.classList.remove("active"),Ue?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&I.forEach(n=>{Xt(n)})},750),t.selectedMarketId){let n=I.find(i=>i.id===t.selectedMarketId);if(n){Br(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),S.hidden=!0,S.classList.remove("fullscreen"),w.hidden=!1,w.classList.add("markets-list");let e=I,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(n=>{let i=t.activeMarketTimeframe===n,d=n==="All"?e.length:e.filter(u=>u.timeframe===n).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${n}">
            <span>${n==="Sagas"?"Sagas":n}</span>
            <span class="timeframe-tab-count">${d}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&I.length===0){w.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${Xe}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
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
    `;return}let o="",s=(n,i,d)=>d.length===0?"":`
      <div class="market-timeframe-section">
        <div class="timeframe-section-header">
          <div class="timeframe-section-header-left">
            <h2>${n}</h2>
            <span class="timeframe-section-subtitle">${i}</span>
          </div>
          <span class="timeframe-section-count-badge">${d.length} ${d.length===1?"market":"markets"}</span>
        </div>
        <section class="markets-grid" aria-label="${n} prediction markets">
          ${d.map(Er).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(m=>m.timeframe==="Daily"),i=e.filter(m=>m.timeframe==="Weekly"),d=e.filter(m=>m.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",n)}
      ${s("Weekly","Ends in a week",i)}
      ${s("Sagas (Long-term)","Narratives & futures",d)}
    `}else{let n=e.filter(m=>m.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,d="";t.activeMarketTimeframe==="Daily"?d="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?d="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",d="Narratives & futures"),o=`
      ${s(i,d,n)}
    `}w.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${Xe}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},pa=()=>{if(!w||!S)return;je?.toggleAttribute("hidden",!0),ze?.toggleAttribute("hidden",!0),oe?.toggleAttribute("hidden",!0),Ae?.classList.remove("active"),Le?.classList.remove("active"),Ue?.classList.remove("active"),document.body.classList.remove("detail-mode"),S.hidden=!0,w.hidden=!1,w.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?mt():null;t.walletAddress&&e&&fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(l=>console.error("Failed to report user score:",l)),J&&(clearInterval(J),J=null),w.innerHTML=`
    <section class="leaderboard-surface">
      <header class="leaderboard-header">
        <span>Siftle Seasonal Arena</span>
        <h1>Seasonal Leaderboard</h1>
        <p>Compete with other traders. Points are earned from Daily markets: +100 pts for finishing on the winning side of resolved markets, or +50 pts if you switched sides before resolution.</p>
      </header>

      <div class="leaderboard-faucet-box">
        <div class="faucet-box-details">
          <h3>Claim Test USDC</h3>
          <p>Get test USDC to trade daily prediction markets and climb the seasonal ranks.</p>
        </div>
        <button id="faucetClaimButton" class="faucet-claim-btn" type="button">Claim Faucet</button>
      </div>

      <div class="season-countdown-banner">
        <span class="countdown-label">Season 1 (World Cup)</span>
        <span id="seasonTimer" class="countdown-value">Loading...</span>
      </div>

      <div class="leaderboard-mode-tabs" role="tablist" aria-label="Leaderboard views">
        <button class="leaderboard-mode-tab ${X==="global"?"active":""}" type="button" data-leaderboard-view="global">Global</button>
        <button class="leaderboard-mode-tab ${X==="division"?"active":""}" type="button" data-leaderboard-view="division">Division</button>
      </div>

      <div class="global-prize-box" id="globalPrizeBox" ${X==="global"?"":"hidden"}>
        <div>
          <span>Global Season Race</span>
          <strong>Top 10 share a 150 USDC prize pool</strong>
        </div>
        <div>
          <span>Next season</span>
          <strong>Top 6 to Division 1, next 6 to Division 2</strong>
        </div>
      </div>

      <div class="division-title-container" id="divisionControls" ${X==="division"?"":"hidden"}>
        <div class="division-title-left" style="display: flex; align-items: center; gap: 8px; flex-wrap: nowrap !important; flex-shrink: 0 !important;">
          <h2 id="divisionTitleText" style="margin: 0; white-space: nowrap !important;">Division 1</h2>
          <button class="how-it-works-btn" id="howItWorksBtn" type="button" style="background: rgba(255,255,255,0.06) !important; border: 1px solid #1e1f2b !important; color: #ffffff !important; border-radius: 6px !important; padding: 4px 10px !important; font-size: 0.82rem !important; font-weight: 600 !important; cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important; white-space: nowrap !important; flex-shrink: 0 !important;">How it works</button>
        </div>
        <select id="divisionSelector" class="division-select-menu">
          <option value="1">Division 1</option>
        </select>
      </div>

      <div class="global-title-container" id="globalControls" ${X==="global"?"":"hidden"}>
        <div>
          <h2>Global Leaderboard</h2>
          <p>Everyone ranked by points, wins, fewer losses, then earliest market activity.</p>
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
  `;let a=(l="2026-07-19T23:59:59.000Z")=>{let c=document.getElementById("seasonTimer");J&&clearInterval(J);let y=()=>{let $=new Date(l).getTime()-new Date().getTime();if($<=0){c&&(c.innerText="Season Finished!"),J&&clearInterval(J);return}let T=Math.floor($/(1e3*60*60*24)),v=Math.floor($%(1e3*60*60*24)/(1e3*60*60)),x=Math.floor($%(1e3*60*60)/(1e3*60)),L=Math.floor($%(1e3*60)/1e3);c&&(c.innerText=`${T}d ${v}h ${x}m ${L}s`)};y(),J=setInterval(y,1e3)};a();let r=l=>l.map((c,y)=>{let k=Number(c.globalRank)||y+1,$=String(c.username||""),T=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),v=T&&t.profileUsername?t.profileUsername:c.displayName||$,x=T?`${t.profileUsername?v:j($)} (You)`:v.startsWith("0x")&&v.length===42?j(v):v,L=A(x),P=A(Ve(c.status)),N=c.nextSeasonDivision?`Division ${c.nextSeasonDivision}`:"Qualify",H=k<=10?"promotion-zone":"safety-zone",le=k<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${T?"user-highlight":""} ${H}" role="listitem">
        <div class="leaderboard-row-left">
          ${le}
          <span class="leaderboard-rank rank-${k}">${k}</span>
          <span class="leaderboard-username">${L}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(c.points)||0} pts</strong>
          <span>${c.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${A(N)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${P}</span>
        </div>
      </div>
    `}).join(""),o=l=>l.map((c,y)=>{let k=y+1,$=String(c.username||""),T=!!(t.walletAddress&&$.toLowerCase()===t.walletAddress.toLowerCase()),v=T&&t.profileUsername?t.profileUsername:c.displayName||$,x=A(Ve(c.status)),L=T?`${t.profileUsername?v:j($)} (You)`:v.startsWith("0x")&&v.length===42?j(v):v,P=A(L),N="safety-zone",H='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return k<=2?(N="promotion-zone",H='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):k>=5&&(N="relegation-zone",H='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${T?"user-highlight":""} ${N}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${H}
          <span class="leaderboard-rank rank-${k}" style="flex-shrink: 0; margin-right: 4px;">${k}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${P}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(c.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${x}</span>
        </div>
      </div>
    `}).join(""),s=l=>{X=l,document.querySelectorAll("[data-leaderboard-view]").forEach(c=>{c.classList.toggle("active",c.dataset.leaderboardView===l)}),document.getElementById("divisionControls")?.toggleAttribute("hidden",l!=="division"),document.getElementById("globalControls")?.toggleAttribute("hidden",l!=="global"),document.getElementById("globalPrizeBox")?.toggleAttribute("hidden",l!=="global")},n=l=>{let c=document.getElementById("leaderboardListContainer");c&&(c.innerHTML=`
      <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        ${Array.from({length:l}).map(()=>`
          <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
            <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
              <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
            <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        `).join("")}
      </div>
    `)},i=()=>{s("global");let l=document.getElementById("leaderboardListContainer"),c="global",y=xt(c);y&&l?(l.innerHTML=Tt()+r(y.players),y.seasonEndsAt&&a(y.seasonEndsAt)):n(10);let k=new URLSearchParams;t.walletAddress&&k.set("walletAddress",t.walletAddress);let $=k.toString();fetch(C(`/api/leaderboard/global${$?`?${$}`:""}`)).then(T=>T.json()).then(T=>{let v=$t(T.players||[],y?.players||[],!0);l&&(l.innerHTML=v.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the global leaderboard yet.</p>`:r(v)),Ze(c,{players:v,seasonEndsAt:T.seasonEndsAt}),a(T.seasonEndsAt)}).catch(T=>{console.error("Failed to load global leaderboard:",T),l&&(l.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading global leaderboard. Please try again.</p>`)})},d=l=>{s("division");let c=document.getElementById("leaderboardListContainer"),y=`division_${l||ke||"current"}`,k=xt(y);k&&c?(c.innerHTML=Tt()+o(k.players),k.divisionNumber&&(ke=k.divisionNumber),k.seasonEndsAt&&a(k.seasonEndsAt)):c&&l!==void 0&&(c.innerHTML=`
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
      `);let $=new URLSearchParams;t.walletAddress&&$.set("walletAddress",t.walletAddress),l&&$.set("division",String(l));let T=$.toString();fetch(C(`/api/leaderboard/division${T?`?${T}`:""}`)).then(v=>v.json()).then(v=>{let x=v.divisionNumber||1,L=$t(v.players||[],k?.players||[],!1),P=v.totalDivisions||1,N=v.seasonEndsAt;ke=x;let H=document.getElementById("divisionTitleText");H&&(H.innerText=`Division ${x}`);let le=document.getElementById("divisionSelector");le&&(le.innerHTML=Array.from({length:P},(O,de)=>de+1).map(O=>`
            <option value="${O}" ${O===x?"selected":""}>Division ${O}</option>
          `).join("")),c&&(L.length===0?c.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No active players in this division.</p>`:c.innerHTML=L.map((O,de)=>{let ye=de+1,ce=t.walletAddress&&O.username.toLowerCase()===t.walletAddress.toLowerCase(),Q=ce&&t.profileUsername?t.profileUsername:O.displayName||O.username,ft=A(Ve(O.status)),De=ce?`${t.profileUsername?Q:j(O.username)} (You)`:Q.startsWith("0x")&&Q.length===42?j(Q):Q,be=A(De),U="safety-zone",D='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return ye<=2?(U="promotion-zone",D='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):ye>=5&&(U="relegation-zone",D='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
                <div class="leaderboard-row ${ce?"user-highlight":""} ${U}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
                  <!-- Left Side: Arrow + Rank + Username -->
                  <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
                    ${D}
                    <span class="leaderboard-rank rank-${ye}" style="flex-shrink: 0; margin-right: 4px;">${ye}</span>
                    <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${be}</span>
                  </div>
                  <!-- Center Side: Points -->
                  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${O.points} pts</span>
                  </div>
                  <!-- Right Side: Status -->
                  <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
                    <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${ft}</span>
                  </div>
                </div>
              `}).join("")),Ze(y,{players:L,divisionNumber:x,totalDivisions:P,seasonEndsAt:N}),Ze(`division_${x}`,{players:L,divisionNumber:x,totalDivisions:P,seasonEndsAt:N}),a(N)}).catch(v=>{console.error("Failed to load division leaderboard:",v),c&&(c.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading division leaderboard. Please try again.</p>`)})};X==="division"?d(ke||void 0):i(),document.querySelectorAll("[data-leaderboard-view]").forEach(l=>{l.addEventListener("click",()=>{(l.dataset.leaderboardView==="division"?"division":"global")==="division"?d(ke||void 0):i()})}),document.getElementById("divisionSelector")?.addEventListener("change",l=>{let c=Number(l.target.value);d(c)}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){h("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let c=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,c.toFixed(2)),t.walletBalance=c.toFixed(2),h("Claimed $100 USDC mock credits!"),B(),pa()}else h("Opening Circle Faucet..."),window.open(Xe,"_blank")});let f=document.getElementById("howItWorksBtn"),p=document.getElementById("howItWorksModal"),b=document.getElementById("closeRulesModalBtn");f?.addEventListener("click",()=>{p&&p.classList.add("active")}),b?.addEventListener("click",()=>{p&&p.classList.remove("active")}),p?.addEventListener("click",l=>{l.target===p&&p.classList.remove("active")})},ua=()=>{t.activeSurface="feed",t.selectedMarketId=null,je?.toggleAttribute("hidden",!0),ze?.toggleAttribute("hidden",!0),oe?.toggleAttribute("hidden",!0),Ae?.classList.remove("active"),Le?.classList.add("active"),Ue?.classList.remove("active"),w?.classList.remove("markets-list")},Dr=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",Et=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id];if(K(e)){let c=r?.resolvedOptionId||null,y=!!c,k=y&&a.optionId===c,$=cr(a,r),T=k?$:0,v=Z(e).find(P=>P.id===c)?.label,x=!!a.claimedAt||Re().has(e.id),L=!!t.claimingMarketIds[e.id];return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${y?`Resolved: ${A(v||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${A(a.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${R(a.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${R(T)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${y?"":`Closes ${e.closes}`}</span>
          ${y?x?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':L?'<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>':k?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${R(T)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let o=Dr(r?.outcome),s=ra(a,r),n=s.reduce((c,y)=>Math.max(c,y.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,d=r?.outcome??0,m=Re().has(e.id),u=d===1?a.yesSharesUsdc:d===2?a.noSharesUsdc:0,f=d===1?r?.yesSharesUsdc??0:d===2?r?.noSharesUsdc??0:0,p=r?.volumeUsdc??0,b=u>0&&f>0?u/f*p:0,l=d===0?"":m?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':b>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${R(b)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${R(n)}</strong></div>
        ${s.map(c=>`
          <div><span>${c.label}</span><strong>${R(c.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${R(i)} total shares`:""}</span>
        ${l||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Nr=async e=>{if(!t.walletAddress){h("Please sign in first.");return}let a=Me().find(o=>o.id===e),r=a?G(a):"";if(!a||!r){h("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,q(),E("claim_attempt"),mt();let o=await ba(r,t.walletAddress);E("claim_success"),o.won&&nr(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await ae(t.walletAddress),await z(),h(o.won?`Claimed $${R(o.amountUsdc)}`:"No payout to claim"),B(),q()}catch(o){E("claim_failed"),h(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],q()}},Or=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(s=>{let n=s.displayName||j(s.walletAddress),i=s.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${A(n)}</strong>
            <span>${j(s.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${s.used}/${s.maxUses}</strong>
            <span>${i?"Expired":`${s.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${A(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${A(a.code)}">
              <span>Invite code</span>
              <strong>${A(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${A(a.inviteLink)}">
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
  `},q=()=>{if(!w||!S)return;je?.toggleAttribute("hidden",!0),ze?.toggleAttribute("hidden",!0),oe?.toggleAttribute("hidden",!0),Ae?.classList.remove("active"),Le?.classList.remove("active"),Ue?.classList.add("active"),document.body.classList.remove("detail-mode"),S.hidden=!0,w.hidden=!1,w.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Te(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&_t(),z({force:!t.hasLoadedPortfolioPositions}));let a=Re(),r=Me().filter(p=>{let b=t.marketPositions[p.id];return a.has(p.id)||b&&(b.yesSharesUsdc+b.noSharesUsdc>0||(b.optionSharesUsdc||0)>0)}),o=r.filter(p=>(t.marketSnapshots[p.id]?.outcome??0)===0),s=r.filter(p=>(t.marketSnapshots[p.id]?.outcome??0)!==0),n=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?j(t.walletAddress):"Anonymous"),d=A(i),m=A(t.profileUsername||""),u=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${A(t.profileNotice.message)}</div>`:"",f=i.charAt(0).toUpperCase();w.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${Or(n)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${f}</span>
          </div>
          <div class="profile-details" style="display: flex !important; flex-direction: column !important; min-width: 0 !important;">
            <div class="username-display-row" style="display: flex !important; align-items: center !important; gap: 8px !important;">
              <span class="profile-username" style="font-family: 'Space Grotesk', sans-serif !important; font-size: 1.08rem !important; font-weight: 750 !important; color: var(--market-text-main) !important; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis !important; max-width: 180px !important;">${d}</span>
              ${n?`
                <button type="button" class="edit-username-btn" id="editUsernameBtn" style="background: transparent !important; border: none !important; color: var(--market-text-muted) !important; cursor: pointer !important; padding: 4px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
                </button>
              `:""}
            </div>
            ${n?`
              <div class="wallet-address-row" style="display: flex !important; align-items: center !important; gap: 8px !important; margin-top: 4px !important;">
                <small style="color: var(--market-text-muted) !important; font-family: monospace !important; font-size: 0.78rem !important;">${j(t.walletAddress)}</small>
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
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${m}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${u}

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
      ${t.loadingPortfolioPositions?xr(2):t.walletAddress?r.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${o.length?o.map(Et).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${s.length?s.map(Et).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},g=()=>{if(Rt.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){ca();return}if(t.activeSurface==="portfolio"){q();return}if(t.activeSurface==="leaderboard"){pa();return}ua(),Vt(),he(),Cr(),F&&(F.value=t.activeArchiveDate??"")};et.textContent=zt();oe?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");r&&(t.activeCategory=r.dataset.category,window.history.pushState({},"","#feed"),Y(),g(),Ie(),V(t.activeCategory))});w?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,o=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,he();let s=w?.querySelector("#newsSearchInput");s&&(s.focus(),s.setSelectionRange(r,o))});Ae?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),Y(),g()});Le?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),Y(),g(),Ie(),V(t.activeCategory)});Ue?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),Y(),g()});ee?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Ee()):Pe()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{h("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&Nr(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Te(),q();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,q();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Te(),q();return}let s=a.closest("[data-copy-referral-code]");if(s){let i=s.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>h("Invite code copied"));return}let n=a.closest("[data-copy-referral-link]");if(n){let i=n.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>h("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Dt():Pe())});Rt.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),Ie(),V(t.activeCategory),a==="saved"&&(or(),st(),$e())),Y(),g()})});F?.addEventListener("change",()=>{t.activeArchiveDate=F.value||null,window.history.pushState({},"","#feed"),Y(),g(),V(t.activeCategory)});Ca?.addEventListener("click",()=>{t.activeArchiveDate=null,F&&(F.value=""),window.history.pushState({},"","#feed"),Y(),g(),V(t.activeCategory)});w?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let l=w?.querySelector(".username-display-row"),c=w?.querySelector("#usernameEditForm");if(l&&c){l.style.display="none",c.style.display="flex";let y=c.querySelector("#usernameInput");y&&y.focus()}return}if(a.closest("#cancelUsernameBtn")){let l=w?.querySelector(".username-display-row"),c=w?.querySelector("#usernameEditForm");l&&c&&(l.style.display="flex",c.style.display="none");return}let s=a.closest("#saveUsernameBtn");if(s){let c=w?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(c){let y=c.value.trim().slice(0,15),k=s,$=k.textContent||"Save";k.disabled=!0,k.textContent="Saving...",rr(y),t.profileNotice=null;try{t.walletAddress&&await ie(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},h("Username updated"),q()}catch(T){let v=T instanceof Error?T.message:"Username save failed";t.profileNotice={type:"error",message:v},h(v),k.disabled=!1,k.textContent=$,q()}}return}let n=a.closest("[data-timeframe]");if(n){let l=n.dataset.timeframe;t.activeMarketTimeframe=l,ca();return}let i=a.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,E("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),g(),window.scrollTo({top:0,behavior:"smooth"});return}if(a.closest(".read-tweet-btn")){e.stopPropagation();let l=a.closest("[data-story-id]");l&&at(Number(l.dataset.storyId),!0);return}let m=a.closest("[data-thread-story-id]"),u=a.closest("[data-export-id]"),f=a.closest("[data-export-action]"),p=a.closest("[data-story-id]");if(m){e.stopPropagation();let l=t.stories.find(c=>c.id===Number(m.dataset.threadStoryId));l&&Wa(l);return}let b=a.closest(".mobile-bookmark-btn, .bookmark-button");if(b){e.stopPropagation();let l=b.dataset.bookmarkUrl||"",c=t.stories.find(y=>y.sourceUrl===l);if(!c)return;c.saved=!c.saved,c.saved?re.add(l):re.delete(l),Pa(),h(c.saved?"Saved to your list":"Removed from saved"),he();return}if(f){e.stopPropagation(),Lr(Number(f.dataset.exportStoryId),f.dataset.exportAction);return}if(u){e.stopPropagation();let l=Number(u.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===l?null:l,he();return}p&&(a.closest("a")||at(Number(p.dataset.storyId),!0))});w?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");!r||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),at(Number(r.dataset.storyId)))});S?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let f=t.stories.find(p=>p.id===Number(r.dataset.unlockBriefing));f&&tt(f);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let f=decodeURIComponent(o.dataset.unlockBriefingUrl||""),p=Fa(f);p&&(ne(p)?Fe(p):tt(p));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),g();return}if(a.closest("#openTradeDrawerBtn")){let f=I.find(l=>l.id===t.selectedMarketId);if(f){if(We(f,t.marketSnapshots[f.id])){h("This market is resolved and can no longer be traded.");return}if(Yt(f,t.marketSnapshots[f.id])){h("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,E("trade_drawer_open");let p=S.querySelector("#tradeDrawer"),b=S.querySelector("#tradeDrawerBackdrop");p?.classList.add("open"),b?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let f=S.querySelector("#tradeDrawer"),p=S.querySelector("#tradeDrawerBackdrop");f?.classList.remove("open"),p?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let f=I.find(p=>p.id===t.selectedMarketId);if(f){let p=Ir(f),b=`https://api.whatsapp.com/send?text=${encodeURIComponent(p)}`;window.open(b,"_blank")}return}let s=a.closest("[data-market-trade]");if(s&&t.selectedMarketId){let f=s.dataset.marketTrade;fr(t.selectedMarketId,f);return}let n=a.closest("[data-market-option-trade]");if(n&&t.selectedMarketId){let f=n.dataset.marketOptionTrade||t.marketTradeOptionId||"";Ur(t.selectedMarketId,f);return}let i=a.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,g();return}let d=a.closest("[data-market-trade-side]");if(d){if(d.disabled||d.classList.contains("disabled"))return;let f=I.find(l=>l.id===t.selectedMarketId),p=f?t.marketPositions[f.id]:void 0,b=d.dataset.marketTradeSide;if(!te(t.marketOrderMode,b,p))return;t.marketTradeSide=b,g();return}let m=a.closest("[data-market-order-mode]");if(m){t.marketOrderMode=m.dataset.marketOrderMode;let f=I.find(b=>b.id===t.selectedMarketId),p=f?t.marketPositions[f.id]:void 0;t.marketTradeSide=ut(t.marketOrderMode,t.marketTradeSide,p),t.marketTradeAmount=Be(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,p),g();return}a.closest("[data-back-to-feed]")&&Ya()});S?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=I.find(m=>m.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,s=r?t.marketPositions[r.id]:void 0,n=Number(a.value);t.marketTradeAmount=Number.isFinite(n)?n:0;let i=r&&K(r)?t.marketTradeAmount:aa(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),d=S.querySelector(".market-inline-payout strong");d&&(d.textContent=`$${R(i)}`)});S?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});S?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=I.find(s=>s.id===t.selectedMarketId),o=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=Be(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,o),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Ee);window.addEventListener("hashchange",Ee);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await ae(t.walletAddress);t.walletBalance=a,B(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),Sa())}});Ge?.addEventListener("click",()=>{if(!Je||!Ge)return;let e=!Je.hidden;Je.hidden=e,Ge.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,he());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};M&&(M.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,F&&(F.value=""),Y(),Ie(),V(t.activeCategory)),r.dataset.menuAction==="saved"&&(ua(),st(),$e(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),Y(),g())});var _r=async()=>{try{let e=await fetch(C("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),g())}catch(e){console.error("Failed to prefetch unlock config:",e)}};g();B();_r();V(t.activeCategory);Ua().then(()=>{ur(),g(),B(),window.setTimeout(jr,1200),Ka()});var Hr=document.querySelector("#mobileArchiveCard"),fe=document.querySelector("#archiveControls");Hr?.addEventListener("click",()=>{if(!fe)return;fe.classList.toggle("mobile-open")&&setTimeout(()=>fe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Rr=document.querySelector("#archivePill");Rr?.addEventListener("click",e=>{if(e.stopPropagation(),!fe)return;fe.classList.toggle("mobile-open")&&setTimeout(()=>fe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Oe=!1,It=!1,jr=()=>{It||(It=!0,(async()=>{let e=await _e();if(Oe=!!e,e){t.walletConnecting=!0,B();try{let a=await ka();Oe=!1,t.walletConnecting=!1,a?(t.walletAddress=await _e(),t.walletAddress&&(me(),t.walletBalance=await ae(t.walletAddress),await z()),B(),t.activeSurface==="portfolio"&&g()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),h("Session expired. Please sign in again."),B(),g())}catch(a){console.warn(a),Oe=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),h("Session expired. Please sign in again."),B(),g()}}await wa(a=>{Oe||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),a&&ie(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,B(),a?(Te(),ae(a).then(r=>{t.walletBalance=r,B(),t.activeSurface==="portfolio"&&g()}),z()):t.activeSurface==="portfolio"&&g())})})())};E("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",s=typeof o=="string"?o:r.getAttribute("class")||"",n=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||r.textContent?.trim()==="Open source")&&!s.includes("disabled")&&n!=="#"&&E("open_source")}},!0);
