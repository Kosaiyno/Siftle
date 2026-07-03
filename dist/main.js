import"./chunks/chunk-ZUUPKAA6.js";var $e=[{id:"wc-spain-austria-spread",category:"Sports",timeframe:"Daily",question:"Will Spain beat Austria by a margin of 2 or more goals?",probability:52,marketAddress:"0x123580A3Af7E22a591a460E249346a3beeCEd930",deploymentBlock:49766205,kickoffAt:"2026-07-02T19:00:00Z",expectedEndAt:"2026-07-02T20:45:00Z",resolveAfter:"2026-07-02T21:40:00Z",closes:"Jul 2, 7:40 PM GMT+1",resolution:"Resolves Yes if Spain defeat Austria by a margin of 2 or more goals in their July 2, 2026 World Cup knockout match, including extra time if played. Resolves No if Spain win by exactly 1 goal, Austria advance, or the match is decided by penalties after a draw. Penalty shootout goals do not count toward the margin. Resolve after the official result is final, including extra time and penalties if needed.",threadTopic:"Spain Austria World Cup Knockout",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-ronaldo-score-assist-croatia",category:"Sports",timeframe:"Daily",question:"Will Cristiano Ronaldo score or assist against Croatia?",probability:43,marketAddress:"0xBccb9DC161C1260F3074752f4D1579a74bD86490",deploymentBlock:49766205,kickoffAt:"2026-07-02T23:00:00Z",expectedEndAt:"2026-07-03T00:45:00Z",resolveAfter:"2026-07-03T01:40:00Z",closes:"Jul 2, 11:40 PM GMT+1",resolution:"Resolves Yes if Cristiano Ronaldo is officially credited with at least one goal or assist for Portugal against Croatia in their July 2, 2026 World Cup knockout match, including regular time and extra time. Penalty shootout goals do not count. Resolves No if he does not play or is not officially credited with a goal or assist. Resolve after the official match stats are final.",threadTopic:"Portugal Croatia Ronaldo World Cup Knockout",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-portugal-croatia-extra-time",category:"Sports",timeframe:"Daily",question:"Will Portugal vs Croatia go to extra time?",probability:36,marketAddress:"0x18de1CD95b5c34cc5189e31510AD0C71123345cE",deploymentBlock:49766205,kickoffAt:"2026-07-02T23:00:00Z",expectedEndAt:"2026-07-03T00:45:00Z",resolveAfter:"2026-07-03T01:40:00Z",closes:"Jul 2, 11:40 PM GMT+1",resolution:"Resolves Yes if Portugal vs Croatia is level after 90 minutes plus stoppage time and goes to extra time in their July 2, 2026 World Cup knockout match. Resolves No if either team wins in regulation. Penalty shootouts are only relevant if the match has already gone to extra time. Resolve after regulation ends, or after the official result is final if needed.",threadTopic:"Portugal Croatia World Cup Knockout",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-tonali-spurs",category:"Sports",timeframe:"Sagas",question:"Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",probability:58,closes:"September 1, 2026",resolution:"Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline.",threadTopic:"Sandro Tonali Tottenham Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$182K",traders:"980",liquidity:"$29K",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-guimaraes-arsenal",category:"Sports",timeframe:"Sagas",question:"Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",probability:45,closes:"September 1, 2026",resolution:"Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline.",threadTopic:"Bruno Guimaraes Arsenal Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$204K",traders:"1,240",liquidity:"$36K",imageUrl:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",evidence:[]}];var Re="https://faucet.circle.com/",at="siftle_backend_wallet_migration_notice",Be=null,N=()=>(Be||(Be=import("./chunks/arc-4CKVC5GU.js")),Be),D=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,aa=async()=>(await N()).connectArcWallet(),fe=async e=>(await N()).readArcUsdcBalance(e),ra=async(e,a,r,o)=>(await N()).payAiBriefingUnlock(e,a,r,o),oa=e=>{N().then(a=>a.resolveLocalTestMarketYes(e))},sa=async e=>(await N()).readArcMarketSnapshot(e);var na=async(e,a)=>(await N()).readArcMarketState(e,a),ia=async(e,a,r,o,s,n,i)=>(await N()).executeArcMarketOrder(e,a,r,o,s,n,i),xt=()=>{N().then(e=>e.disconnectArcWallet())},la=async(e,a)=>(await N()).claimArcMarketPayout(e,a),je=async()=>(await N()).getConnectedArcWallet(),da=async()=>(await N()).validateArcSession(),ca=async e=>(await N()).subscribeArcWallet(e),ma=["Sports"],pa="https://siftle.onrender.com",ua=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?pa:""},fa=ua(),M=e=>`${fa}${e}`,$t="siftle_theme",ga=()=>{try{return window.localStorage.getItem($t)==="light"?"light":"dark"}catch{return"dark"}},ge=ga();function P(e){fetch(M("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e})}).catch(a=>console.error("Failed to track event:",a))}var t={activeSurface:"markets",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeAmount:5,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1},ce=null,V="global",G=null,rt=!1,ot=!1,st=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";st&&localStorage.setItem("siftle_pending_referral_code",st.trim().toUpperCase());var Tt=20,C=$e,ha=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},Ae=()=>ha(t.portfolioMarketPreviews,C,$e),va=async()=>{t.loadingMarkets=!0,C.length===0&&(C=$e);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(M("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(C=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},At=async()=>{try{let e=await fetch(M("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Mt="siftle.savedUrls",Q=new Set,Ye=()=>{try{let e=localStorage.getItem(Mt)||"[]",a=JSON.parse(e);Q=new Set(a.filter(Boolean))}catch{Q=new Set}},ya=()=>{try{localStorage.setItem(Mt,JSON.stringify(Array.from(Q)))}catch{}},he=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!Q.has(e.sourceUrl)};Ye();he();var We=document.querySelector("#dateLabel"),ee=document.querySelector("#categoryTabs"),w=document.querySelector("#storyList"),$=document.querySelector("#storyDetail"),De=document.querySelector("#menuButton"),Ne=document.querySelector("#menuPanel"),T=document.querySelector("#menuStatus"),R=document.querySelector("#archiveDateSelect"),nt=document.querySelector("#archiveStatus"),ba=document.querySelector("#todayButton"),Me=document.querySelector(".brief-hero"),Le=document.querySelector("#archiveControls"),be=document.querySelector("[data-surface='markets']"),ke=document.querySelector("[data-surface='feed']"),we=document.querySelector("[data-surface='portfolio']"),Z=document.querySelector("#walletButton"),me=document.querySelector("[data-theme-toggle]"),Lt=Array.from(document.querySelectorAll("[data-bottom-nav]")),_e,ka=()=>{if(!me)return;let a=`Switch to ${ge==="light"?"dark":"light"} mode`;me.setAttribute("aria-label",a),me.title=a,me.dataset.activeTheme=ge},Ct=e=>{ge=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem($t,e)}catch{}ka()};Ct(ge);var E=()=>{if(Z){let e=Z.querySelector(".wallet-button-label");Z.classList.toggle("connected",!!t.walletAddress),Z.disabled=t.walletConnecting,Z.setAttribute("aria-label",t.walletAddress?`Wallet ${D(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),Z.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${D(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",E);me?.addEventListener("click",()=>{Ct(ge==="light"?"dark":"light")});var wa=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(M("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&k("Referral connected"))}catch(r){console.warn(r)}},ve=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(M(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&z()}}},Ge=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,P("wallet_connect_start"),E();try{let e=await aa();if(e){P("wallet_connect_success"),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ne(),t.walletBalance=await fe(e),await wa(e),ve(),await Y(),re(!0).catch(r=>console.error("Failed to report leaderboard entry:",r));let a=localStorage.getItem(at);a?(localStorage.removeItem(at),k(a)):k("Connected to Arc Testnet"),window.location.hash="#portfolio",Se()}}catch(e){P("wallet_connect_failed"),k(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,E()}}},k=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),_e&&window.clearTimeout(_e),_e=window.setTimeout(()=>{a?.classList.remove("show")},1700)},Sa=(e,a,r,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let n=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",n),s.querySelector(".success-modal-action-btn")?.addEventListener("click",n),s.addEventListener("click",i=>{i.target===s&&n()})},F=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},Pt=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},xa=()=>t.stories.filter(e=>t.showSaved?!!e.saved:t.activeCategory==="All"||e.category===t.activeCategory),pe=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,$a=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Ta=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let s=r.slice(0,a).join(" "),n=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return n>s.length*.45?s.slice(0,n+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},it=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),$a(a)?"":Ta(a)},J=(e,a)=>it(a||"")||it(e.summary)||e.headline,Je=e=>{let a=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(a.length<=1)return`<p class="briefing-text">${e}</p>`;let r="";a[0].trim()&&(r+=`<p class="briefing-intro">${a[0].trim()}</p>`);for(let o=1;o<a.length;o+=2){let s=a[o].trim().toUpperCase(),n=a[o+1]?a[o+1].trim():"";if(!n)continue;let i="";if(s==="KEY POINTS"){let d=n.split(/(?:•|\*|-)\s+/).map(c=>c.trim()).filter(Boolean);d.length>0?i=`<ul class="briefing-list">${d.map(c=>`<li>${c}</li>`).join("")}</ul>`:i=`<p class="briefing-text">${n}</p>`}else i=`<p class="briefing-text">${n}</p>`;let l=s.toLowerCase().replace(/\s+/g,"-");r+=`
      <div class="briefing-section ${l}-section">
        <h4 class="briefing-title">${s}</h4>
        ${i}
      </div>
    `}return r},Ut=e=>`siftle_ai_briefing_unlock_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Et=e=>localStorage.getItem(Ut(e))||"",te=e=>!!Et(e),ze=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:Q.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Aa=e=>{let a=t.stories.find(s=>s.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=C.find(n=>n.id===t.selectedMarketId);if(s){let n=Pe(s).evidence.find(i=>i.sourceUrl===e);if(n)return ze(s,n)}}return null},Ke=(e,a)=>{let r=Na(e,a);return r===null?null:r-Tt*60*1e3},Ma=(e,a)=>{let r=Ke(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},It=(e,a)=>{let r=Ke(e,a);return r===null?null:Date.now()>=r?`Locked ${Tt}m before kickoff`:null},La=(e,a)=>`
  <div class="briefing-section">
    <h4 class="briefing-title">AI briefing</h4>
    <p class="briefing-text">Get the key points, what happened, and the takeaway.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${a?"disabled":""}>
      AI briefing
    </button>
  </div>
`,Fe=async e=>{if(!t.walletAddress){k("Please sign in first.");return}if(t.unlockingSummaryUrl!==e.sourceUrl){t.unlockingSummaryUrl=e.sourceUrl,P("ai_unlock_attempt"),g();try{let a=await fetch(M("/api/summary/unlock-config")),r=await a.json();if(!a.ok||!r.treasuryAddress)throw new Error(r.error||"AI briefing is not configured");let o=await ra(r.treasuryAddress,Number(r.amountUsdc)||.05,l=>{T&&(T.textContent=l)},{sourceUrl:e.sourceUrl,topic:e.headline}),s=await fetch(M("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:o})}),n=await s.json();if(!s.ok||!n.unlockToken)throw new Error(n.error||"AI briefing failed");localStorage.setItem(Ut(e),n.unlockToken),P("ai_unlock_success"),(Number(n?.bonus?.points)||0)>0&&re(!1).catch(l=>console.error("Failed to refresh leaderboard bonus:",l)),await Ce(e)}catch(a){P("ai_unlock_failed"),k(a instanceof Error?a.message:"AI briefing failed")}finally{t.unlockingSummaryUrl=null,g()}}},Ce=async e=>{if(te(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=J(e,e.ai_summary),P("view_summary"),T&&(T.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded"),g();return}t.loadingSummaryUrl=e.sourceUrl,g();try{let a=await fetch(M("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Et(e)})});if(!a.ok)throw new Error(`Summary request failed with ${a.status}`);let r=await a.json();t.aiSummaries[e.sourceUrl]=J(e,r.summary),T&&r.provider&&(T.textContent=r.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${r.provider}`)}catch(a){console.warn(a),t.aiSummaries[e.sourceUrl]=J(e),T&&(T.textContent="Summary fallback loaded")}finally{t.loadingSummaryUrl=null,g()}}},Bt=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);r&&(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),g(),a&&!te(r)?Fe(r):te(r)&&Ce(r),window.scrollTo({top:0,behavior:"smooth"}))},Ca=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),g(),Dt(e),window.scrollTo({top:0,behavior:"smooth"})},Pa=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.history.pushState({},"","#feed"),g(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Dt=async e=>{try{let a=await fetch(M(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),T&&(T.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),k("That timeline no longer has a verified past update"),T&&(T.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,g()}};function Se(){if(window.location.hash==="#resolve-local-yes"){let a=C.find(r=>r.id==="siftle-local-test-2")||C.find(r=>r.timeframe==="Daily"&&q(r).startsWith("0x00000000000000000000000000000000000001"));if(a){oa(q(a)),Ya(a,"yes"),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),k("Local test market resolved YES"),Y().then(()=>{re(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),E(),z()});return}}let e=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||e){t.activeSurface="markets",t.selectedMarketId=e?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,g();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let a=window.location.hash.match(/^#story-(\d+)$/),r=window.location.hash.match(/^#thread-(\d+)$/),o=a?t.stories.find(i=>i.id===Number(a[1])):void 0,s=r?t.stories.find(i=>i.id===Number(r[1])):void 0,n=t.selectedStoryId!==null||t.selectedThreadUrl!==null;t.selectedStoryId=o?.id??null,t.selectedThreadUrl=s?.sourceUrl??null,t.activeThread=null,g(),o&&Ce(o),s&&Dt(s),!o&&!s&&n&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}));return}t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g()}var qe=e=>{nt&&(nt.textContent=e)},Ua=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Nt(),g());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(M(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],he(),t.hasLoadedFeed=!0,We&&(We.textContent=Pt(s.date??t.activeArchiveDate)),T)if(t.activeArchiveDate)T.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=s.archive?.provider==="shelby"?"Shelby":"local archive";T.textContent=`Latest published feed loaded from ${n}`}qe(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),he(),T&&(T.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,g(),Se()}},Ea=async()=>{if(R)try{let e=await fetch(M("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),R.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),R.value=t.activeArchiveDate??"",qe(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),qe("Archive unavailable")}},xe=()=>{rt||(rt=!0,Ea())},ae=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Ua(e,a)},Ia=()=>{ot||(ot=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&ae(t.activeCategory,!0),xe()},8e3))},Ba=e=>e==="All"?"For you":e==="Sports"?"Football":e,H=e=>e==="Sports"?"Football":e,Nt=()=>{ee&&(ee.innerHTML=ma.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${Ba(e)}
        </button>
      `).join(""))},_t=e=>(e.thread?.count??0)>=1,Da=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Ot=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),s=new Date(r.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),Pe=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},Na=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},_a=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,Oa=(e,a)=>({date:_a(e,a),source:e.source,headline:e.headline,summary:J(e,e.ai_summary),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Ht=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(M(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...Ot(r.items??[])],s=o.filter((l,d,c)=>c.findIndex(f=>f.sourceUrl===l.sourceUrl)===d).map(Oa),i=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:s,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&g()}}},q=e=>e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",W=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),U=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Ve=e=>`siftle_profile_username_${e.toLowerCase()}`,Rt=e=>e.trim().replace(/\s+/g," ").slice(0,15),ne=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=Ve(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=Rt(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},Ha=e=>{if(!t.walletAddress)return;let a=Ve(t.walletAddress),r=Rt(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},Ra=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},jt=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:5,max:10,fallback:5}},Ue=(e,a,r,o)=>{let{min:s,max:n,fallback:i}=jt(a,r,o);return Number.isFinite(e)?Math.min(n,Math.max(s,e)):i},Wt=(e,a,r,o,s)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let n=a==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,i=e.yesSharesUsdc,l=e.noSharesUsdc;if(o==="sell")return Math.min(r,n);let d=(a==="yes"?i:l)+r,c=i+l+r;return d<=0||c<=0?r:(n+r)/d*c},zt=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},ja=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},Ft=e=>`siftle_claimed_markets_${e.toLowerCase()}`,Ze=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(Ft(t.walletAddress))||"[]"))}catch{return new Set}},Wa=e=>{if(!t.walletAddress)return;let a=Ze();a.add(e),localStorage.setItem(Ft(t.walletAddress),JSON.stringify(Array.from(a)))},Xe=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),X=(e,a,r)=>{let o=r?.yesSharesUsdc??0,s=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:s>0:a==="yes"?s<=0:o<=0},Qe=(e,a,r)=>{if(X(e,a,r))return a;let o=a==="yes"?"no":"yes";return X(e,o,r)?o:a};var za=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},Oe=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`},qt="siftle_leaderboard_cache_v3_",lt=e=>{let a=String(e||"").match(/(\d+)\s+wins?/i),r=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:a&&Number(a[1])||0,losses:r&&Number(r[1])||0}},dt=e=>{try{let a=JSON.parse(localStorage.getItem(`${qt}${e}`)||"null");return Array.isArray(a?.players)&&a.players.length?a:null}catch{return null}},He=(e,a)=>{if(!(!Array.isArray(a?.players)||a.players.length===0))try{localStorage.setItem(`${qt}${e}`,JSON.stringify({...a,cachedAt:Date.now()}))}catch{}},Yt=(e,a)=>{let r=lt(e?.status||""),o=lt(a?.status||""),s=(Number(a?.points)||0)-(Number(e?.points)||0);return s||(o.wins!==r.wins?o.wins-r.wins:r.losses!==o.losses?r.losses-o.losses:String(e?.username||"").localeCompare(String(a?.username||"")))},Fa=e=>{let a=String(e?.displayName||"").trim().toLowerCase();return a&&!/^0x[a-f0-9]{40}$/i.test(a)?`name:${a}`:`wallet:${String(e?.username||"").toLowerCase()}`},qa=e=>{let a=new Map;return e.forEach(r=>{let o=Fa(r);if(!o||o==="wallet:")return;let s=a.get(o);if(!s){a.set(o,r);return}a.set(o,Yt(s,r)<=0?s:r)}),Array.from(a.values())},ct=(e,a=[],r=!1)=>{let o=new Map(a.map(l=>[String(l?.username||"").toLowerCase(),l])),s=new Set,n=e.map(l=>{let d=String(l?.username||"").toLowerCase();s.add(d);let c=o.get(d);return c&&(Number(c.points)||0)>(Number(l.points)||0)?{...l,...c}:l});a.forEach(l=>{let d=String(l?.username||"").toLowerCase();d&&!s.has(d)&&(Number(l?.points)||0)>0&&n.push(l)});let i=qa(n).slice().sort(Yt);return r?i.map((l,d)=>({...l,globalRank:d+1})):i},mt=()=>`
  <div class="leaderboard-sync-note" role="status">
    Showing saved standings while Siftle refreshes live scores...
  </div>
`,et=()=>{let e=0,a=0,r=0,o=C.filter(i=>i.timeframe==="Daily").map(i=>i.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(s)try{n=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,a++;continue}if(n[i]?.result==="loss"){r++;continue}let l=t.marketPositions[i],c=t.marketSnapshots[i]?.outcome??0;if(c===0)continue;let f=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,u=[];try{u=JSON.parse(localStorage.getItem(f)||"[]")}catch{}let h=u.includes("yes")&&u.includes("no");if(c===1&&l&&l.yesSharesUsdc>0){let p=h?50:100;e+=p,a++,n[i]={result:"win",points:p}}else if(c===2&&l&&l.noSharesUsdc>0){let p=h?50:100;e+=p,a++,n[i]={result:"win",points:p}}else l&&(l.yesSharesUsdc>0||l.noSharesUsdc>0)&&(r++,n[i]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(n)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},Ya=(e,a)=>{let r=q(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,s=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(o))continue;let l=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(l)&&s.add(l)}s.forEach(n=>{let i=`${o}${n}`,l={yesSharesUsdc:0,noSharesUsdc:0};try{l=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let d=(Number(l.yesSharesUsdc)||0)>0,c=(Number(l.noSharesUsdc)||0)>0;if(!d&&!c)return;let f=`siftle_traded_sides_${e.id}_${n}`,u=[];try{u=JSON.parse(localStorage.getItem(f)||"[]")}catch{}let h=u.includes("yes")&&u.includes("no"),p=a==="yes"?d:c,m=`siftle_resolved_results_${n}`,v={};try{v=JSON.parse(localStorage.getItem(m)||"{}")}catch{}v[e.id]={result:p?"win":"loss",points:p?h?50:100:0},localStorage.setItem(m,JSON.stringify(v));let y=0,b=0,x=0;Object.values(v).forEach(A=>{A.result==="win"?(b+=1,y+=Number(A.points)||0):A.result==="loss"&&(x+=1)});let S=localStorage.getItem(Ve(n))||"";fetch(M("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:S,points:y,status:`${b} win${b===1?"":"s"}, ${x} loss${x===1?"":"es"}`})}).catch(A=>console.error("Failed to report local resolved score:",A))})},re=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?et():null,r=await fetch(M("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},Ga=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(r)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(M("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},Ja=async e=>{let a=q(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){t.loadingMarketSnapshots[e.id]=!0;try{t.marketSnapshots[e.id]=await sa(a)}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&g()}}},Y=async()=>{if(!(!t.walletAddress||t.loadingPortfolioPositions)){t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await At();let e=Ae(),a=await Promise.all(e.map(async r=>{let o=q(r);if(!o)return[r.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:s,snapshot:n}=await na(o,t.walletAddress);return t.marketSnapshots[r.id]=n,[r.id,s]}catch(s){return console.warn(`Failed to load portfolio market ${r.id}:`,s),[r.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(a)}catch(e){console.warn(e)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,re(!0).catch(e=>console.error("Failed to report leaderboard entry:",e)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard")&&g()}}},Ka=async(e,a)=>{if(!t.walletAddress){k("Session expired or wallet not connected. Please sign in."),Ge();return}let r=Ae().find(c=>c.id===e);if(!r)return;t.marketTradeSide=a;let o=q(r);if(!o){k("Deploy this Arc market contract before trading"),g();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",g(),await Y(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){k("Still loading your position. Try again in a moment."),g();return}let s=t.marketSnapshots[r.id];if(Xe(r,s)){t.tradeDrawerOpen=!1,k("This market is resolved and can no longer be traded."),g();return}let n=s?.yesPriceCents??r.probability,i=s?.noPriceCents??100-r.probability,l=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!X(t.marketOrderMode,a,l)){let c=ja(l),f=t.marketOrderMode==="sell"?c?`You can only exit your ${c.toUpperCase()} shares.`:"You do not have shares to exit in this market.":c?`Exit your ${c.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";k(f),t.marketTradeSide=Qe(t.marketOrderMode,a,l),g();return}let d=Ue(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,l);t.marketTradeAmount=d,P("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",g();let c=await ia(o,t.marketOrderMode,a,d,f=>{t.marketTradeStatus=f,g()},n,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.walletAddress=await je(),t.walletAddress&&(t.walletBalance=await fe(t.walletAddress)),await Y(),re(!0).catch(f=>console.error("Failed to report leaderboard entry:",f)),t.walletAddress){let f=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,u={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let p=localStorage.getItem(f);if(p){let m=JSON.parse(p);u={yesCost:m.yesCost||0,noCost:m.noCost||0,yesShares:m.yesShares||0,noShares:m.noShares||0}}}catch{}let h=d;if(t.marketOrderMode==="buy"){let p=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,m=[];try{m=JSON.parse(localStorage.getItem(p)||"[]")}catch{}m.includes(a)||(m.push(a),localStorage.setItem(p,JSON.stringify(m))),a==="yes"?(u.yesCost+=h,u.yesShares=(u.yesShares||0)+h/(n/100)):(u.noCost+=h,u.noShares=(u.noShares||0)+h/(i/100))}else{let p=t.marketPositions[r.id];if(p){if(a==="yes"&&p.yesSharesUsdc>0){let m=Math.min(1,h/p.yesSharesUsdc);u.yesCost=Math.max(0,u.yesCost-u.yesCost*m),u.yesShares=Math.max(0,(u.yesShares||0)-(u.yesShares||0)*m)}else if(a==="no"&&p.noSharesUsdc>0){let m=Math.min(1,h/p.noSharesUsdc);u.noCost=Math.max(0,u.noCost-u.noCost*m),u.noShares=Math.max(0,(u.noShares||0)-(u.noShares||0)*m)}}}localStorage.setItem(f,JSON.stringify(u))}k(`Trade confirmed ${c.slice(0,8)}...`),P(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Sa(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(c){P("trade_failed"),za(c)?(xt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ne(),k("Session expired. Please sign in again.")):k(c instanceof Error?c.message:"Arc trade failed")}finally{t.marketTradeStatus=null,E(),g()}},pt=e=>_t(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",ut=e=>_t(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",ft=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',gt=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',le=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,Va=()=>`
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
`,Za=(e=4)=>`${le("Loading stories")}${Array.from({length:e},Va).join("")}`,tt=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${le("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,Xa=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${le("Loading thread timeline")}
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
`;var Qa=(e=3)=>`
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${le("Loading market evidence")}
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
`,er=(e=2)=>`
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${le("Loading portfolio positions")}
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
`,ye=()=>{if(!w)return;let e=xa();if(w.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){w.innerHTML=Za(4);return}if(e.length===0){let a=t.showSaved?[]:t.stories;if(a.length>0){w.innerHTML=a.map(r=>`
        <article class="story-card" data-story-id="${r.id}" role="button" tabindex="0" aria-label="Open summary for ${r.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${r.source}</strong>
                <span>${pe(r)} - ${r.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${r.sourceUrl}" aria-pressed="${r.saved?"true":"false"}" aria-label="${r.saved?"Remove saved story":"Save story"}">
                ${ft()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${r.id}" aria-expanded="${t.activeShareStoryId===r.id}">
                  ${gt()}
                </button>
                <div class="share-menu" ${t.activeShareStoryId===r.id?"":"hidden"}>
                  <button type="button" data-export-action="save" data-export-story-id="${r.id}">Save image</button>
                  <button type="button" data-export-action="share" data-export-story-id="${r.id}">Share</button>
                </div>
              </div>
            </div>
          </div>

          <div class="story-image-frame desktop-only" aria-hidden="true">
            <img src="${r.imageUrl}" alt="" loading="lazy" />
          </div>

          <div class="story-copy desktop-only">
            <span class="category-chip ${r.category}">${H(r.category)}</span>
            <h2>${r.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${pt(r)}
            ${/example\\.com/i.test(r.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${r.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${r.category}">${H(r.category)}</span>
                  <div class="mobile-icons">
                    <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${r.sourceUrl}" aria-pressed="${r.saved?"true":"false"}" aria-label="Save story">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${r.id}" aria-label="Save image">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                    </button>
                  </div>
                </div>
                <h2>${r.headline}</h2>
                <span class="mobile-card-time">${pe(r)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${r.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${ut(r)}
              ${/example\\.com/i.test(r.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${r.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("");return}w.innerHTML="";return}w.innerHTML=e.map(a=>`
        <article class="story-card" data-story-id="${a.id}" role="button" tabindex="0" aria-label="Open summary for ${a.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${a.source}</strong>
                <span>${pe(a)} - ${a.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${a.sourceUrl}" aria-pressed="${a.saved?"true":"false"}" aria-label="${a.saved?"Remove saved story":"Save story"}">
                ${ft()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${a.id}" aria-expanded="${t.activeShareStoryId===a.id}">
                  ${gt()}
                </button>
                <div class="share-menu" ${t.activeShareStoryId===a.id?"":"hidden"}>
                  <button type="button" data-export-action="save" data-export-story-id="${a.id}">Save image</button>
                  <button type="button" data-export-action="share" data-export-story-id="${a.id}">Share</button>
                </div>
              </div>
            </div>
          </div>

          <div class="story-image-frame desktop-only" aria-hidden="true">
            <img src="${a.imageUrl}" alt="" loading="lazy" />
          </div>

          <div class="story-copy desktop-only">
            <span class="category-chip ${a.category}">${H(a.category)}</span>
            <h2>${a.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${pt(a)}
            ${/example\\.com/i.test(a.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${a.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${a.category}">${H(a.category)}</span>
                  <div class="mobile-icons">
                    <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${a.sourceUrl}" aria-pressed="${a.saved?"true":"false"}" aria-label="Save story">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${a.id}" aria-label="Save image">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                    </button>
                  </div>
                </div>
                <h2>${a.headline}</h2>
                <span class="mobile-card-time">${pe(a)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${a.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${ut(a)}
              ${/example\\.com/i.test(a.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${a.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("")},ht=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),ue=(e,a,r,o,s,n)=>{e.beginPath(),e.moveTo(a+n,r),e.lineTo(a+o-n,r),e.quadraticCurveTo(a+o,r,a+o,r+n),e.lineTo(a+o,r+s-n),e.quadraticCurveTo(a+o,r+s,a+o-n,r+s),e.lineTo(a+n,r+s),e.quadraticCurveTo(a,r+s,a,r+s-n),e.lineTo(a,r+n),e.quadraticCurveTo(a,r,a+n,r),e.closePath()},tr=(e,a,r,o,s,n,i)=>{let l=a.split(/\s+/).filter(Boolean),d=[],c="";for(let f of l){let u=c?`${c} ${f}`:f;if(e.measureText(u).width<=s){c=u;continue}if(c&&d.push(c),c=f,d.length===i)break}if(c&&d.length<i&&d.push(c),l.length>0&&d.length===i){for(;e.measureText(`${d[i-1]}...`).width>s&&d[i-1].length>0;)d[i-1]=d[i-1].slice(0,-1).trim();d[i-1]=`${d[i-1]}...`}return d.forEach((f,u)=>e.fillText(f,r,o+u*n)),o+d.length*n},ar=(e,a,r,o,s,n,i)=>{let l=Math.max(s/a.naturalWidth,n/a.naturalHeight),d=s/l,c=n/l,f=(a.naturalWidth-d)/2,u=(a.naturalHeight-c)/2;e.save(),ue(e,r,o,s,n,i),e.clip(),e.drawImage(a,f,u,d,c,r,o,s,n),e.restore()},vt=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),yt=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))):"",rr=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",bt=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",ue(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await ht("./assets/siftle-logo-small.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${yt(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(a){let l=await ht(rr(e.imageUrl)).catch(()=>null);l?ar(o,l,110,n,860,520,28):(o.fillStyle="#eef2ff",ue(o,110,n,860,520,28),o.fill())}else o.fillStyle="#eef2ff",ue(o,110,n,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",ue(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(H(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",tr(o,yt(e.headline),110,888,860,54,4),r},Gt=async e=>{let a=await bt(e,!0);try{return await vt(a)}catch{return vt(await bt(e,!1))}},Jt=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,Kt=async e=>{let a=await Gt(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=Jt(e),o.click(),URL.revokeObjectURL(r)},or=async e=>{let a=await Gt(e),r=new File([a],Jt(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await Kt(e)},sr=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,ye(),k(a==="share"?"Preparing share image":"Preparing download"),T&&(T.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await or(r):await Kt(r),k(a==="share"?"Share image ready":"Image saved"),T&&(T.textContent="Branded story image ready")}catch(o){console.warn(o),k("Image export unavailable"),T&&(T.textContent="Image export was cancelled or unavailable")}}},kt=(e,a)=>`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${H(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${J(e,e.ai_summary)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">AI briefing</button>
      </div>
      ${te(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${tt()}</div>`:`<div style="margin-top: 12px;">${Je(J(e,t.aiSummaries[e.sourceUrl]||e.ai_summary))}</div>`:""}
    </div>
  </article>
`,nr=()=>{if(!$||!w)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(w.hidden=!0,$.hidden=!1,$.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){$.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){$.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${Xa(3)}
        </article>
      </div>
    `;return}$.innerHTML=`
    <div class="detail-container thread-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card thread-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${H(e.category)}</span>
          <span>${Da(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${kt(e,"Latest")}
          ${Ot(r?.items??[]).map(o=>kt(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},ir=()=>{if(!$||!w)return;if(t.selectedThreadUrl){nr();return}let e=t.stories.find(n=>n.id===t.selectedStoryId);if(!e){$.hidden=!0,$.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),w.hidden=!1;return}let a=J(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=te(e),s=t.unlockingSummaryUrl===e.sourceUrl;w.hidden=!0,$.hidden=!1,$.classList.add("fullscreen"),document.body.classList.add("detail-mode"),$.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${H(e.category)}</span>
          <span>${e.source} - ${pe(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?r?tt():Je(a):La(e,s)}
        </section>
        <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `},lr=e=>{let a=t.marketSnapshots[e.id],r=q(e),o=a?.yesPriceCents,s=o??e.probability,n=`${s}%`,i=o===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${o}\xA2 \xB7 No ${100-o}\xA2`,l=o===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:i,d=Pe(e);return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${H(e.category)}</span>
          <span class="timeframe-chip ${e.timeframe}">${e.timeframe==="Sagas"?"Sagas":e.timeframe}</span>
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
        <strong>${n}</strong>
        <span>${r?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${l}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${s}%"></span></div>
      <div class="market-card-footer">
        <span>${d.evidence.length} thread updates</span>
        <span>${a?`$${Math.round(a.volumeUsdc).toLocaleString()} volume`:`Closes ${e.closes}`}</span>
      </div>
    </button>
  `},dr=e=>{let a=Pe(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,n=a.evidence[0],i=n?n.headline:"No updates yet",l=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${l}`},cr=e=>{if(!w||!$)return;let a=Pe(e),r=!t.checkedMarketEvidence[e.id],o=q(e),s=t.marketSnapshots[e.id],n=!!(o&&!s),i=s?.yesPriceCents??(o?e.probability:0),l=s?.noPriceCents??(o?100-e.probability:0),d=n?"":o?`${i}\xA2`:"--",c=n?"":o?`${l}\xA2`:"--",f=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},u=Ue(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,f),h=jt(t.marketOrderMode,t.marketTradeSide,f),p=t.marketOrderMode==="buy"?"$5-$10 USDC":`Up to $${W(h.max)} USDC`,m=!t.walletAddress||t.hasLoadedPortfolioPositions,v=Xe(e,s),y=It(e,s),b=!!y;t.marketTradeSide=Qe(t.marketOrderMode,t.marketTradeSide,f);let x=!v&&!b&&m&&X(t.marketOrderMode,"yes",f),S=!v&&!b&&m&&X(t.marketOrderMode,"no",f),A=!v&&!b&&m&&X(t.marketOrderMode,t.marketTradeSide,f),I=v?"Market resolved":y||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),j=v?"Market resolved":y||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),_=Wt(s,t.marketTradeSide,u,t.marketOrderMode,f),O=t.marketOrderMode==="buy"?"Buy":"Exit",oe=o?"Arc testnet live":"Contract not deployed";w.hidden=!0,$.hidden=!1,$.classList.add("fullscreen"),document.body.classList.add("detail-mode"),Ja(e),Ht(e),t.walletAddress&&!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&Y();let B=f.yesSharesUsdc>0||f.noSharesUsdc>0,se="";B&&t.walletAddress&&(se=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${zt(f,s).map(K=>`
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${K.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${W(K.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${W(K.payout)}</strong>
            </div>
          </div>
        `).join("")}
        <div style="border-top: 1px solid var(--market-border); padding-top: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--market-text-muted);">Winning side splits the final pool</span>
        </div>
      </div>
    `),$.innerHTML=`
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
            <span class="category-chip ${e.category}">${H(e.category)}</span>
            <span class="market-status-pill">${oe}</span>
          </div>
          <h2>${e.question}</h2>
          ${se}
          ${a.imageUrl?`
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${a.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          `:""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${Ke(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${Ma(e,s)}</strong>
            </div>
            <div class="market-stat">
              <span>Volume</span>
              <strong>${s?`$${Math.round(s.volumeUsdc).toLocaleString()}`:e.volume}</strong>
            </div>
          </div>

          <div class="market-resolution-panel">
            <h3>Resolution Rules</h3>
            <p>${e.resolution}</p>
            ${y?`<p style="margin-top: 10px; color: #f59e0b; font-weight: 600;">${y}</p>`:""}
          </div>

          <section class="market-evidence-thread">
            <header>
              <h3>Timeline & Evidence</h3>
              <span>${r?"Loading...":`${a.evidence.length} updates`}</span>
            </header>
            <p class="market-thread-intro">Track how this topic is developing, newest first.</p>
            <div class="market-thread-timeline">
              ${r?Qa(3):a.evidence.length===0?'<div class="portfolio-empty compact">Market thread is still being prepared for this match.</div>':a.evidence.map(L=>`
                <article class="market-thread-update">
                  <div class="market-thread-marker"></div>
                  <div class="market-thread-update-content">
                    <div class="market-thread-update-meta">
                      <span>${L.date} \xB7 ${L.source}</span>
                    </div>
                    <h4>${L.headline}</h4>
                    <p>${L.summary}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                      ${/example\.com/i.test(L.sourceUrl)?"":`<a class="market-thread-source-link" href="${L.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(L.sourceUrl)}">AI briefing</button>
                    </div>
                    ${te(ze(e,L))?t.loadingSummaryUrl===L.sourceUrl?`<div style="margin-top: 12px;">${tt()}</div>`:`<div style="margin-top: 12px;">${Je(J(ze(e,L),t.aiSummaries[L.sourceUrl]))}</div>`:""}
                  </div>
                </article>
              `).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          <span>Yes <strong>${d}</strong></span>
          <span>No <strong>${c}</strong></span>
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${v||b?"disabled":""}>
          ${v?"Market Resolved":y||"Trade Market"}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${v||b?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${v||b?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${x?"":"disabled"}" data-market-trade-side="yes" ${x?"":"disabled"} title="${x?"Yes":I}">
                  <span>Yes</span>
                  <strong>${d}</strong>
                  ${x?"":`<small>${I}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${S?"":"disabled"}" data-market-trade-side="no" ${S?"":"disabled"} title="${S?"No":j}">
                  <span>No</span>
                  <strong>${c}</strong>
                  ${S?"":`<small>${j}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${p}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${h.min.toFixed(2)}" max="${Math.max(h.min,h.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${u}" data-market-amount ${v||b?"disabled":""} />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>${t.marketOrderMode==="buy"?"Projected payout":"Exit amount"}</span>
            <strong>$${W(_)}</strong>
          </div>

          <div class="drawer-action-container">
            ${n?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:v?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':b?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${y}</button>`:t.walletAddress?m?A?`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${O} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${O.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},Vt=()=>{if(!w||!$)return;if(Me?.toggleAttribute("hidden",!0),Le?.toggleAttribute("hidden",!0),ee?.toggleAttribute("hidden",!0),be?.classList.add("active"),ke?.classList.remove("active"),we?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&C.forEach(n=>{Ht(n)})},750),t.selectedMarketId){let n=C.find(i=>i.id===t.selectedMarketId);if(n){cr(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),$.hidden=!0,$.classList.remove("fullscreen"),w.hidden=!1,w.classList.add("markets-list");let e=C,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(n=>{let i=t.activeMarketTimeframe===n,l=n==="All"?e.length:e.filter(c=>c.timeframe===n).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${n}">
            <span>${n==="Sagas"?"Sagas":n}</span>
            <span class="timeframe-tab-count">${l}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&C.length===0){w.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${Re}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
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
          ${l.map(lr).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(d=>d.timeframe==="Daily"),i=e.filter(d=>d.timeframe==="Weekly"),l=e.filter(d=>d.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",n)}
      ${s("Weekly","Ends in a week",i)}
      ${s("Sagas (Long-term)","Narratives & futures",l)}
    `}else{let n=e.filter(d=>d.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,l="";t.activeMarketTimeframe==="Daily"?l="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?l="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",l="Narratives & futures"),o=`
      ${s(i,l,n)}
    `}w.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${Re}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},Zt=()=>{if(!w||!$)return;Me?.toggleAttribute("hidden",!0),Le?.toggleAttribute("hidden",!0),ee?.toggleAttribute("hidden",!0),be?.classList.remove("active"),ke?.classList.remove("active"),we?.classList.remove("active"),document.body.classList.remove("detail-mode"),$.hidden=!0,w.hidden=!1,w.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?et():null;t.walletAddress&&e&&fetch(M("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(p=>console.error("Failed to report user score:",p)),G&&(clearInterval(G),G=null),w.innerHTML=`
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
        <button class="leaderboard-mode-tab ${V==="global"?"active":""}" type="button" data-leaderboard-view="global">Global</button>
        <button class="leaderboard-mode-tab ${V==="division"?"active":""}" type="button" data-leaderboard-view="division">Division</button>
      </div>

      <div class="global-prize-box" id="globalPrizeBox" ${V==="global"?"":"hidden"}>
        <div>
          <span>Global Season Race</span>
          <strong>Top 10 share a 150 USDC prize pool</strong>
        </div>
        <div>
          <span>Next season</span>
          <strong>Top 6 to Division 1, next 6 to Division 2</strong>
        </div>
      </div>

      <div class="division-title-container" id="divisionControls" ${V==="division"?"":"hidden"}>
        <div class="division-title-left" style="display: flex; align-items: center; gap: 8px; flex-wrap: nowrap !important; flex-shrink: 0 !important;">
          <h2 id="divisionTitleText" style="margin: 0; white-space: nowrap !important;">Division 1</h2>
          <button class="how-it-works-btn" id="howItWorksBtn" type="button" style="background: rgba(255,255,255,0.06) !important; border: 1px solid #1e1f2b !important; color: #ffffff !important; border-radius: 6px !important; padding: 4px 10px !important; font-size: 0.82rem !important; font-weight: 600 !important; cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important; white-space: nowrap !important; flex-shrink: 0 !important;">How it works</button>
        </div>
        <select id="divisionSelector" class="division-select-menu">
          <option value="1">Division 1</option>
        </select>
      </div>

      <div class="global-title-container" id="globalControls" ${V==="global"?"":"hidden"}>
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
  `;let a=(p="2026-07-19T23:59:59.000Z")=>{let m=document.getElementById("seasonTimer");G&&clearInterval(G);let v=()=>{let b=new Date(p).getTime()-new Date().getTime();if(b<=0){m&&(m.innerText="Season Finished!"),G&&clearInterval(G);return}let x=Math.floor(b/(1e3*60*60*24)),S=Math.floor(b%(1e3*60*60*24)/(1e3*60*60)),A=Math.floor(b%(1e3*60*60)/(1e3*60)),I=Math.floor(b%(1e3*60)/1e3);m&&(m.innerText=`${x}d ${S}h ${A}m ${I}s`)};v(),G=setInterval(v,1e3)};a();let r=p=>p.map((m,v)=>{let y=Number(m.globalRank)||v+1,b=String(m.username||""),x=!!(t.walletAddress&&b.toLowerCase()===t.walletAddress.toLowerCase()),S=x&&t.profileUsername?t.profileUsername:m.displayName||b,A=x?`${t.profileUsername?S:D(b)} (You)`:S.startsWith("0x")&&S.length===42?D(S):S,I=U(A),j=U(Oe(m.status)),_=m.nextSeasonDivision?`Division ${m.nextSeasonDivision}`:"Qualify",O=y<=10?"promotion-zone":"safety-zone",oe=y<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${x?"user-highlight":""} ${O}" role="listitem">
        <div class="leaderboard-row-left">
          ${oe}
          <span class="leaderboard-rank rank-${y}">${y}</span>
          <span class="leaderboard-username">${I}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(m.points)||0} pts</strong>
          <span>${m.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${U(_)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${j}</span>
        </div>
      </div>
    `}).join(""),o=p=>p.map((m,v)=>{let y=v+1,b=String(m.username||""),x=!!(t.walletAddress&&b.toLowerCase()===t.walletAddress.toLowerCase()),S=x&&t.profileUsername?t.profileUsername:m.displayName||b,A=U(Oe(m.status)),I=x?`${t.profileUsername?S:D(b)} (You)`:S.startsWith("0x")&&S.length===42?D(S):S,j=U(I),_="safety-zone",O='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return y<=2?(_="promotion-zone",O='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):y>=5&&(_="relegation-zone",O='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${x?"user-highlight":""} ${_}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${O}
          <span class="leaderboard-rank rank-${y}" style="flex-shrink: 0; margin-right: 4px;">${y}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${j}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(m.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${A}</span>
        </div>
      </div>
    `}).join(""),s=p=>{V=p,document.querySelectorAll("[data-leaderboard-view]").forEach(m=>{m.classList.toggle("active",m.dataset.leaderboardView===p)}),document.getElementById("divisionControls")?.toggleAttribute("hidden",p!=="division"),document.getElementById("globalControls")?.toggleAttribute("hidden",p!=="global"),document.getElementById("globalPrizeBox")?.toggleAttribute("hidden",p!=="global")},n=p=>{let m=document.getElementById("leaderboardListContainer");m&&(m.innerHTML=`
      <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        ${Array.from({length:p}).map(()=>`
          <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
            <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
              <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
            <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        `).join("")}
      </div>
    `)},i=()=>{s("global");let p=document.getElementById("leaderboardListContainer"),m="global",v=dt(m);v&&p?(p.innerHTML=mt()+r(v.players),v.seasonEndsAt&&a(v.seasonEndsAt)):n(10);let y=new URLSearchParams;t.walletAddress&&y.set("walletAddress",t.walletAddress);let b=y.toString();fetch(M(`/api/leaderboard/global${b?`?${b}`:""}`)).then(x=>x.json()).then(x=>{let S=ct(x.players||[],v?.players||[],!0);p&&(p.innerHTML=S.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the global leaderboard yet.</p>`:r(S)),He(m,{players:S,seasonEndsAt:x.seasonEndsAt}),a(x.seasonEndsAt)}).catch(x=>{console.error("Failed to load global leaderboard:",x),p&&(p.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading global leaderboard. Please try again.</p>`)})},l=p=>{s("division");let m=document.getElementById("leaderboardListContainer"),v=`division_${p||ce||"current"}`,y=dt(v);y&&m?(m.innerHTML=mt()+o(y.players),y.divisionNumber&&(ce=y.divisionNumber),y.seasonEndsAt&&a(y.seasonEndsAt)):m&&p!==void 0&&(m.innerHTML=`
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
      `);let b=new URLSearchParams;t.walletAddress&&b.set("walletAddress",t.walletAddress),p&&b.set("division",String(p));let x=b.toString();fetch(M(`/api/leaderboard/division${x?`?${x}`:""}`)).then(S=>S.json()).then(S=>{let A=S.divisionNumber||1,I=ct(S.players||[],y?.players||[],!1),j=S.totalDivisions||1,_=S.seasonEndsAt;ce=A;let O=document.getElementById("divisionTitleText");O&&(O.innerText=`Division ${A}`);let oe=document.getElementById("divisionSelector");oe&&(oe.innerHTML=Array.from({length:j},(B,se)=>se+1).map(B=>`
            <option value="${B}" ${B===A?"selected":""}>Division ${B}</option>
          `).join("")),m&&(I.length===0?m.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No active players in this division.</p>`:m.innerHTML=I.map((B,se)=>{let L=se+1,K=t.walletAddress&&B.username.toLowerCase()===t.walletAddress.toLowerCase(),de=K&&t.profileUsername?t.profileUsername:B.displayName||B.username,Qt=U(Oe(B.status)),ea=K?`${t.profileUsername?de:D(B.username)} (You)`:de.startsWith("0x")&&de.length===42?D(de):de,ta=U(ea),Ee="safety-zone",Ie='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return L<=2?(Ee="promotion-zone",Ie='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):L>=5&&(Ee="relegation-zone",Ie='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
                <div class="leaderboard-row ${K?"user-highlight":""} ${Ee}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
                  <!-- Left Side: Arrow + Rank + Username -->
                  <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
                    ${Ie}
                    <span class="leaderboard-rank rank-${L}" style="flex-shrink: 0; margin-right: 4px;">${L}</span>
                    <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${ta}</span>
                  </div>
                  <!-- Center Side: Points -->
                  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${B.points} pts</span>
                  </div>
                  <!-- Right Side: Status -->
                  <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
                    <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${Qt}</span>
                  </div>
                </div>
              `}).join("")),He(v,{players:I,divisionNumber:A,totalDivisions:j,seasonEndsAt:_}),He(`division_${A}`,{players:I,divisionNumber:A,totalDivisions:j,seasonEndsAt:_}),a(_)}).catch(S=>{console.error("Failed to load division leaderboard:",S),m&&(m.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading division leaderboard. Please try again.</p>`)})};V==="division"?l(ce||void 0):i(),document.querySelectorAll("[data-leaderboard-view]").forEach(p=>{p.addEventListener("click",()=>{(p.dataset.leaderboardView==="division"?"division":"global")==="division"?l(ce||void 0):i()})}),document.getElementById("divisionSelector")?.addEventListener("change",p=>{let m=Number(p.target.value);l(m)}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){k("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let m=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,m.toFixed(2)),t.walletBalance=m.toFixed(2),k("Claimed $100 USDC mock credits!"),E(),Zt()}else k("Opening Circle Faucet..."),window.open(Re,"_blank")});let f=document.getElementById("howItWorksBtn"),u=document.getElementById("howItWorksModal"),h=document.getElementById("closeRulesModalBtn");f?.addEventListener("click",()=>{u&&u.classList.add("active")}),h?.addEventListener("click",()=>{u&&u.classList.remove("active")}),u?.addEventListener("click",p=>{p.target===u&&u.classList.remove("active")})},Xt=()=>{t.activeSurface="feed",t.selectedMarketId=null,Me?.removeAttribute("hidden"),Le?.removeAttribute("hidden"),ee?.removeAttribute("hidden"),be?.classList.remove("active"),ke?.classList.add("active"),we?.classList.remove("active"),w?.classList.remove("markets-list")},mr=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",wt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id],o=mr(r?.outcome),s=zt(a,r),n=s.reduce((m,v)=>Math.max(m,v.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,l=r?.outcome??0,d=Ze().has(e.id),c=l===1?a.yesSharesUsdc:l===2?a.noSharesUsdc:0,f=l===1?r?.yesSharesUsdc??0:l===2?r?.noSharesUsdc??0:0,u=r?.volumeUsdc??0,h=c>0&&f>0?c/f*u:0,p=l===0?"":d?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':h>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${W(h)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${H(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${W(n)}</strong></div>
        ${s.map(m=>`
          <div><span>${m.label}</span><strong>${W(m.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${W(i)} total shares`:""}</span>
        ${p||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},pr=async e=>{if(!t.walletAddress){k("Please sign in first.");return}let a=Ae().find(o=>o.id===e),r=a?q(a):"";if(!a||!r){k("Market is not available.");return}try{P("claim_attempt"),et();let o=await la(r,t.walletAddress);P("claim_success"),o.won&&Wa(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await fe(t.walletAddress),await Y(),k(o.won?`Claimed $${W(o.amountUsdc)}`:"No payout to claim"),E(),z()}catch(o){P("claim_failed"),k(o instanceof Error?o.message:"Claim failed")}},ur=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(s=>{let n=s.displayName||D(s.walletAddress),i=s.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${U(n)}</strong>
            <span>${D(s.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${s.used}/${s.maxUses}</strong>
            <span>${i?"Expired":`${s.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${U(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${U(a.code)}">
              <span>Invite code</span>
              <strong>${U(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${U(a.inviteLink)}">
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
  `},z=()=>{if(!w||!$)return;Me?.toggleAttribute("hidden",!0),Le?.toggleAttribute("hidden",!0),ee?.toggleAttribute("hidden",!0),be?.classList.remove("active"),ke?.classList.remove("active"),we?.classList.add("active"),document.body.classList.remove("detail-mode"),$.hidden=!0,w.hidden=!1,w.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&ve(),t.walletAddress&&!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&At(),Y());let e=Ze(),a=Ae().filter(f=>{let u=t.marketPositions[f.id];return e.has(f.id)||u&&u.yesSharesUsdc+u.noSharesUsdc>0}),r=a.filter(f=>(t.marketSnapshots[f.id]?.outcome??0)===0),o=a.filter(f=>(t.marketSnapshots[f.id]?.outcome??0)!==0),s=!!t.walletAddress,n=t.profileUsername||(t.walletAddress?D(t.walletAddress):"Anonymous"),i=U(n),l=U(t.profileUsername||""),d=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${U(t.profileNotice.message)}</div>`:"",c=n.charAt(0).toUpperCase();w.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${ur(s)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${c}</span>
          </div>
          <div class="profile-details" style="display: flex !important; flex-direction: column !important; min-width: 0 !important;">
            <div class="username-display-row" style="display: flex !important; align-items: center !important; gap: 8px !important;">
              <span class="profile-username" style="font-family: 'Space Grotesk', sans-serif !important; font-size: 1.08rem !important; font-weight: 750 !important; color: var(--market-text-main) !important; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis !important; max-width: 180px !important;">${i}</span>
              ${s?`
                <button type="button" class="edit-username-btn" id="editUsernameBtn" style="background: transparent !important; border: none !important; color: var(--market-text-muted) !important; cursor: pointer !important; padding: 4px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
                </button>
              `:""}
            </div>
            ${s?`
              <div class="wallet-address-row" style="display: flex !important; align-items: center !important; gap: 8px !important; margin-top: 4px !important;">
                <small style="color: var(--market-text-muted) !important; font-family: monospace !important; font-size: 0.78rem !important;">${D(t.walletAddress)}</small>
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
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${l}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${d}

        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${le("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
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
        <span>Open ${r.length}</span>
        <span>Finalized ${o.length}</span>
      </div>
      ${t.loadingPortfolioPositions?er(2):t.walletAddress?a.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${r.length?r.map(wt).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${o.length?o.map(wt).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},g=()=>{if(Lt.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){Vt();return}if(t.activeSurface==="portfolio"){z();return}if(t.activeSurface==="leaderboard"){Zt();return}Xt(),Nt(),ye(),ir(),R&&(R.value=t.activeArchiveDate??"")};We.textContent=Pt();ee?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");r&&(t.activeCategory=r.dataset.category,window.history.pushState({},"","#feed"),F(),g(),xe(),ae(t.activeCategory))});be?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),F(),g()});ke?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),F(),g(),xe(),ae(t.activeCategory)});we?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),F(),g()});Z?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Se()):Ge()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{k("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&pr(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&ve(),z();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,z();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,ve(),z();return}let s=a.closest("[data-copy-referral-code]");if(s){let i=s.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>k("Invite code copied"));return}let n=a.closest("[data-copy-referral-link]");if(n){let i=n.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>k("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?xt():Ge())});Lt.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),xe(),ae(t.activeCategory),a==="saved"&&(Ra(),Ye(),he())),F(),g()})});R?.addEventListener("change",()=>{t.activeArchiveDate=R.value||null,window.history.pushState({},"","#feed"),F(),g(),ae(t.activeCategory)});ba?.addEventListener("click",()=>{t.activeArchiveDate=null,R&&(R.value=""),window.history.pushState({},"","#feed"),F(),g(),ae(t.activeCategory)});w?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let h=w?.querySelector(".username-display-row"),p=w?.querySelector("#usernameEditForm");if(h&&p){h.style.display="none",p.style.display="flex";let m=p.querySelector("#usernameInput");m&&m.focus()}return}if(a.closest("#cancelUsernameBtn")){let h=w?.querySelector(".username-display-row"),p=w?.querySelector("#usernameEditForm");h&&p&&(h.style.display="flex",p.style.display="none");return}let s=a.closest("#saveUsernameBtn");if(s){let p=w?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(p){let m=p.value.trim().slice(0,15),v=s,y=v.textContent||"Save";v.disabled=!0,v.textContent="Saving...",Ha(m),t.profileNotice=null;try{t.walletAddress&&await re(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},k("Username updated"),z()}catch(b){let x=b instanceof Error?b.message:"Username save failed";t.profileNotice={type:"error",message:x},k(x),v.disabled=!1,v.textContent=y,z()}}return}let n=a.closest("[data-timeframe]");if(n){let h=n.dataset.timeframe;t.activeMarketTimeframe=h,Vt();return}let i=a.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,P("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),g(),window.scrollTo({top:0,behavior:"smooth"});return}let l=a.closest("[data-thread-story-id]"),d=a.closest("[data-export-id]"),c=a.closest("[data-export-action]"),f=a.closest("[data-story-id]");if(l){e.stopPropagation();let h=t.stories.find(p=>p.id===Number(l.dataset.threadStoryId));h&&Ca(h);return}let u=a.closest(".mobile-bookmark-btn, .bookmark-button");if(u){e.stopPropagation();let h=u.dataset.bookmarkUrl||"",p=t.stories.find(m=>m.sourceUrl===h);if(!p)return;p.saved=!p.saved,p.saved?Q.add(h):Q.delete(h),ya(),k(p.saved?"Saved to your list":"Removed from saved"),ye();return}if(c){e.stopPropagation(),sr(Number(c.dataset.exportStoryId),c.dataset.exportAction);return}if(d){e.stopPropagation();let h=Number(d.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===h?null:h,ye();return}f&&(a.closest("a")||Bt(Number(f.dataset.storyId),!!a.closest(".summary-btn")))});w?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");!r||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Bt(Number(r.dataset.storyId)))});$?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let d=t.stories.find(c=>c.id===Number(r.dataset.unlockBriefing));d&&Fe(d);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let d=decodeURIComponent(o.dataset.unlockBriefingUrl||""),c=Aa(d);c&&(te(c)?Ce(c):Fe(c));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),g();return}if(a.closest("#openTradeDrawerBtn")){let d=C.find(u=>u.id===t.selectedMarketId);if(d){if(Xe(d,t.marketSnapshots[d.id])){k("This market is resolved and can no longer be traded.");return}if(It(d,t.marketSnapshots[d.id])){k("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,P("trade_drawer_open");let c=$.querySelector("#tradeDrawer"),f=$.querySelector("#tradeDrawerBackdrop");c?.classList.add("open"),f?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let d=$.querySelector("#tradeDrawer"),c=$.querySelector("#tradeDrawerBackdrop");d?.classList.remove("open"),c?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let d=C.find(c=>c.id===t.selectedMarketId);if(d){let c=dr(d),f=`https://api.whatsapp.com/send?text=${encodeURIComponent(c)}`;window.open(f,"_blank")}return}let s=a.closest("[data-market-trade]");if(s&&t.selectedMarketId){let d=s.dataset.marketTrade;Ka(t.selectedMarketId,d);return}let n=a.closest("[data-market-trade-side]");if(n){if(n.disabled||n.classList.contains("disabled"))return;let d=C.find(u=>u.id===t.selectedMarketId),c=d?t.marketPositions[d.id]:void 0,f=n.dataset.marketTradeSide;if(!X(t.marketOrderMode,f,c))return;t.marketTradeSide=f,g();return}let i=a.closest("[data-market-order-mode]");if(i){t.marketOrderMode=i.dataset.marketOrderMode;let d=C.find(f=>f.id===t.selectedMarketId),c=d?t.marketPositions[d.id]:void 0;t.marketTradeSide=Qe(t.marketOrderMode,t.marketTradeSide,c),t.marketTradeAmount=Ue(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,c),g();return}a.closest("[data-back-to-feed]")&&Pa()});$?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=C.find(l=>l.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,s=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=Ue(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,s),a.value=String(t.marketTradeAmount);let n=Wt(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),i=$.querySelector(".market-inline-payout strong");i&&(i.textContent=`$${W(n)}`)});$?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});$?.addEventListener("focusout",e=>{e.target.matches("[data-market-amount]")&&window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)});window.addEventListener("popstate",Se);window.addEventListener("hashchange",Se);De?.addEventListener("click",()=>{if(!Ne||!De)return;let e=!Ne.hidden;Ne.hidden=e,De.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,ye());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};T&&(T.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,R&&(R.value=""),F(),xe(),ae(t.activeCategory)),r.dataset.menuAction==="saved"&&(Xt(),Ye(),he(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),F(),g())});g();E();va().then(()=>{Ga(),g(),E(),window.setTimeout(hr,1200),Ia()});var fr=document.querySelector("#mobileArchiveCard"),ie=document.querySelector("#archiveControls");fr?.addEventListener("click",()=>{if(!ie)return;ie.classList.toggle("mobile-open")&&setTimeout(()=>ie.scrollIntoView({behavior:"smooth",block:"center"}),50)});var gr=document.querySelector("#archivePill");gr?.addEventListener("click",e=>{if(e.stopPropagation(),!ie)return;ie.classList.toggle("mobile-open")&&setTimeout(()=>ie.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Te=!1,St=!1,hr=()=>{St||(St=!0,(async()=>{let e=await je();if(Te=!!e,e){t.walletConnecting=!0,E();try{let a=await da();Te=!1,t.walletConnecting=!1,a?(t.walletAddress=await je(),t.walletAddress&&(ne(),t.walletBalance=await fe(t.walletAddress),await Y()),E(),t.activeSurface==="portfolio"&&g()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ne(),k("Session expired. Please sign in again."),E(),g())}catch(a){console.warn(a),Te=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ne(),k("Session expired. Please sign in again."),E(),g()}}await ca(a=>{Te||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ne(),a&&re(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,E(),a?(ve(),fe(a).then(r=>{t.walletBalance=r,E(),t.activeSurface==="portfolio"&&g()}),Y()):t.activeSurface==="portfolio"&&g())})})())};P("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",s=typeof o=="string"?o:r.getAttribute("class")||"",n=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url"))&&(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||r.textContent?.trim()==="Open source")&&!s.includes("disabled")&&n!=="#"&&P("open_source")}},!0);
