import"./chunks/chunk-ZUUPKAA6.js";var ke=[{id:"wc-spain-austria-spread",category:"Sports",timeframe:"Daily",question:"Will Spain beat Austria by a margin of 2 or more goals?",probability:52,marketAddress:"0x123580A3Af7E22a591a460E249346a3beeCEd930",deploymentBlock:49766205,kickoffAt:"2026-07-02T19:00:00Z",expectedEndAt:"2026-07-02T20:45:00Z",resolveAfter:"2026-07-02T21:40:00Z",closes:"Jul 2, 7:40 PM GMT+1",resolution:"Resolves Yes if Spain defeat Austria by a margin of 2 or more goals in their July 2, 2026 World Cup knockout match, including extra time if played. Resolves No if Spain win by exactly 1 goal, Austria advance, or the match is decided by penalties after a draw. Penalty shootout goals do not count toward the margin. Resolve after the official result is final, including extra time and penalties if needed.",threadTopic:"Spain Austria World Cup Knockout",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-ronaldo-score-assist-croatia",category:"Sports",timeframe:"Daily",question:"Will Cristiano Ronaldo score or assist against Croatia?",probability:43,marketAddress:"0xBccb9DC161C1260F3074752f4D1579a74bD86490",deploymentBlock:49766205,kickoffAt:"2026-07-02T23:00:00Z",expectedEndAt:"2026-07-03T00:45:00Z",resolveAfter:"2026-07-03T01:40:00Z",closes:"Jul 2, 11:40 PM GMT+1",resolution:"Resolves Yes if Cristiano Ronaldo is officially credited with at least one goal or assist for Portugal against Croatia in their July 2, 2026 World Cup knockout match, including regular time and extra time. Penalty shootout goals do not count. Resolves No if he does not play or is not officially credited with a goal or assist. Resolve after the official match stats are final.",threadTopic:"Portugal Croatia Ronaldo World Cup Knockout",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-portugal-croatia-extra-time",category:"Sports",timeframe:"Daily",question:"Will Portugal vs Croatia go to extra time?",probability:36,marketAddress:"0x18de1CD95b5c34cc5189e31510AD0C71123345cE",deploymentBlock:49766205,kickoffAt:"2026-07-02T23:00:00Z",expectedEndAt:"2026-07-03T00:45:00Z",resolveAfter:"2026-07-03T01:40:00Z",closes:"Jul 2, 11:40 PM GMT+1",resolution:"Resolves Yes if Portugal vs Croatia is level after 90 minutes plus stoppage time and goes to extra time in their July 2, 2026 World Cup knockout match. Resolves No if either team wins in regulation. Penalty shootouts are only relevant if the match has already gone to extra time. Resolve after regulation ends, or after the official result is final if needed.",threadTopic:"Portugal Croatia World Cup Knockout",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-tonali-spurs",category:"Sports",timeframe:"Sagas",question:"Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",probability:58,closes:"September 1, 2026",resolution:"Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline.",threadTopic:"Sandro Tonali Tottenham Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$182K",traders:"980",liquidity:"$29K",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-guimaraes-arsenal",category:"Sports",timeframe:"Sagas",question:"Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",probability:45,closes:"September 1, 2026",resolution:"Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline.",threadTopic:"Bruno Guimaraes Arsenal Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$204K",traders:"1,240",liquidity:"$36K",imageUrl:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",evidence:[]}];var De="https://faucet.circle.com/",Ce=null,I=()=>(Ce||(Ce=import("./chunks/arc-AVMWXM6A.js")),Ce),_=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,zt=async()=>(await I()).connectArcWallet(),ce=async e=>(await I()).readArcUsdcBalance(e),Yt=async(e,a,r)=>(await I()).payAiBriefingUnlock(e,a,r),Gt=e=>{I().then(a=>a.resolveLocalTestMarketYes(e))},ft=async e=>(await I()).readArcMarketSnapshot(e),Jt=async(e,a)=>(await I()).readArcMarketPosition(e,a),Kt=async(e,a,r,o,s,i,n)=>(await I()).executeArcMarketOrder(e,a,r,o,s,i,n),gt=()=>{I().then(e=>e.disconnectArcWallet())},Vt=async(e,a)=>(await I()).claimArcMarketPayout(e,a),Ne=async()=>(await I()).getConnectedArcWallet(),Zt=async()=>(await I()).validateArcSession(),Qt=async e=>(await I()).subscribeArcWallet(e),Xt=["Sports"],ea="https://siftle.onrender.com",ta=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?ea:""},aa=ta(),T=e=>`${aa}${e}`,ht="siftle_theme",ra=()=>{try{return window.localStorage.getItem(ht)==="light"?"light":"dark"}catch{return"dark"}},me=ra();function L(e){fetch(T("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e})}).catch(a=>console.error("Failed to track event:",a))}var t={activeSurface:"markets",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeAmount:5,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1},Ue=null,K="global",F=null,Ve=!1,Ze=!1,Qe=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";Qe&&localStorage.setItem("siftle_pending_referral_code",Qe.trim().toUpperCase());var vt=20,M=ke,oa=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},xe=()=>oa(t.portfolioMarketPreviews,M,ke),sa=async()=>{t.loadingMarkets=!0,M.length===0&&(M=ke);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(T("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(M=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},bt=async()=>{try{let e=await fetch(T("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},yt="siftle.savedUrls",Q=new Set,He=()=>{try{let e=localStorage.getItem(yt)||"[]",a=JSON.parse(e);Q=new Set(a.filter(Boolean))}catch{Q=new Set}},ia=()=>{try{localStorage.setItem(yt,JSON.stringify(Array.from(Q)))}catch{}},pe=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!Q.has(e.sourceUrl)};He();pe();var _e=document.querySelector("#dateLabel"),X=document.querySelector("#categoryTabs"),y=document.querySelector("#storyList"),k=document.querySelector("#storyDetail"),Ee=document.querySelector("#menuButton"),Ie=document.querySelector("#menuPanel"),S=document.querySelector("#menuStatus"),D=document.querySelector("#archiveDateSelect"),Xe=document.querySelector("#archiveStatus"),na=document.querySelector("#todayButton"),$e=document.querySelector(".brief-hero"),Te=document.querySelector("#archiveControls"),ge=document.querySelector("[data-surface='markets']"),he=document.querySelector("[data-surface='feed']"),ve=document.querySelector("[data-surface='portfolio']"),V=document.querySelector("#walletButton"),ne=document.querySelector("[data-theme-toggle]"),kt=Array.from(document.querySelectorAll("[data-bottom-nav]")),Be,la=()=>{if(!ne)return;let a=`Switch to ${me==="light"?"dark":"light"} mode`;ne.setAttribute("aria-label",a),ne.title=a,ne.dataset.activeTheme=me},wt=e=>{me=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(ht,e)}catch{}la()};wt(me);var C=()=>{if(V){let e=V.querySelector(".wallet-button-label");V.classList.toggle("connected",!!t.walletAddress),V.disabled=t.walletConnecting,V.setAttribute("aria-label",t.walletAddress?`Wallet ${_(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),V.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${_(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",C);ne?.addEventListener("click",()=>{wt(me==="light"?"dark":"light")});var da=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(T("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&b("Referral connected"))}catch(r){console.warn(r)}},ue=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(T(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&R()}}},Re=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,L("wallet_connect_start"),C();try{let e=await zt();e&&(L("wallet_connect_success"),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,oe(),t.walletBalance=await ce(e),await da(e),ue(),await q(),ae(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),b("Connected to Arc Testnet"),window.location.hash="#portfolio",be())}catch(e){L("wallet_connect_failed"),b(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,C()}}},b=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Be&&window.clearTimeout(Be),Be=window.setTimeout(()=>{a?.classList.remove("show")},1700)},ca=(e,a,r,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let i=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",i),s.querySelector(".success-modal-action-btn")?.addEventListener("click",i),s.addEventListener("click",n=>{n.target===s&&i()})},j=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},St=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},ma=()=>t.stories.filter(e=>t.showSaved?!!e.saved:t.activeCategory==="All"||e.category===t.activeCategory),le=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,pa=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),ua=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let s=r.slice(0,a).join(" "),i=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return i>s.length*.45?s.slice(0,i+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},et=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),pa(a)?"":ua(a)},z=(e,a)=>et(a||"")||et(e.summary)||e.headline,je=e=>{let a=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(a.length<=1)return`<p class="briefing-text">${e}</p>`;let r="";a[0].trim()&&(r+=`<p class="briefing-intro">${a[0].trim()}</p>`);for(let o=1;o<a.length;o+=2){let s=a[o].trim().toUpperCase(),i=a[o+1]?a[o+1].trim():"";if(!i)continue;let n="";if(s==="KEY POINTS"){let d=i.split(/(?:•|\*|-)\s+/).map(c=>c.trim()).filter(Boolean);d.length>0?n=`<ul class="briefing-list">${d.map(c=>`<li>${c}</li>`).join("")}</ul>`:n=`<p class="briefing-text">${i}</p>`}else n=`<p class="briefing-text">${i}</p>`;let m=s.toLowerCase().replace(/\s+/g,"-");r+=`
      <div class="briefing-section ${m}-section">
        <h4 class="briefing-title">${s}</h4>
        ${n}
      </div>
    `}return r},xt=e=>`siftle_ai_briefing_unlock_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,$t=e=>localStorage.getItem(xt(e))||"",ee=e=>!!$t(e),Se=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:Q.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),fa=e=>{let a=t.stories.find(s=>s.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=M.find(i=>i.id===t.selectedMarketId);if(s){let i=Me(s).evidence.find(n=>n.sourceUrl===e);if(i)return Se(s,i)}}return null},We=(e,a)=>{let r=$a(e,a);return r===null?null:r-vt*60*1e3},ga=(e,a)=>{let r=We(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},Tt=(e,a)=>{let r=We(e,a);return r===null?null:Date.now()>=r?`Locked ${vt}m before kickoff`:null},ha=(e,a)=>`
  <div class="briefing-section">
    <h4 class="briefing-title">Locked briefing</h4>
    <p class="briefing-text">Unlock this AI briefing with a small USDC payment.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${a?"disabled":""}>
      ${a?"Unlocking...":"Unlock AI briefing"}
    </button>
  </div>
`,tt=async e=>{if(!t.walletAddress){b("Please sign in first.");return}if(t.unlockingSummaryUrl!==e.sourceUrl){t.unlockingSummaryUrl=e.sourceUrl,L("ai_unlock_attempt"),h();try{let a=await fetch(T("/api/summary/unlock-config")),r=await a.json();if(!a.ok||!r.treasuryAddress)throw new Error(r.error||"AI briefing unlock is not configured");let o=await Yt(r.treasuryAddress,Number(r.amountUsdc)||.05,m=>{S&&(S.textContent=m)}),s=await fetch(T("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:o})}),i=await s.json();if(!s.ok||!i.unlockToken)throw new Error(i.error||"AI briefing unlock failed");localStorage.setItem(xt(e),i.unlockToken),L("ai_unlock_success");let n=Number(i?.bonus?.points)||0;b(n>0?`AI briefing unlocked. +${n} leaderboard pts`:"AI briefing unlocked"),n>0&&ae(!1).catch(m=>console.error("Failed to refresh leaderboard bonus:",m)),await Ae(e)}catch(a){L("ai_unlock_failed"),b(a instanceof Error?a.message:"Unlock failed")}finally{t.unlockingSummaryUrl=null,h()}}},Ae=async e=>{if(ee(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=z(e,e.ai_summary),L("view_summary"),S&&(S.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded"),h();return}t.loadingSummaryUrl=e.sourceUrl,h();try{let a=await fetch(T("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:$t(e)})});if(!a.ok)throw new Error(`Summary request failed with ${a.status}`);let r=await a.json();t.aiSummaries[e.sourceUrl]=z(e,r.summary),S&&r.provider&&(S.textContent=r.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${r.provider}`)}catch(a){console.warn(a),t.aiSummaries[e.sourceUrl]=z(e),S&&(S.textContent="Summary fallback loaded")}finally{t.loadingSummaryUrl=null,h()}}},At=e=>{let a=t.stories.find(r=>r.id===e);a&&(t.feedScrollY=window.scrollY,t.selectedStoryId=a.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${a.id}`),h(),Ae(a),window.scrollTo({top:0,behavior:"smooth"}))},va=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),h(),Mt(e),window.scrollTo({top:0,behavior:"smooth"})},ba=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.history.pushState({},"","#feed"),h(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Mt=async e=>{try{let a=await fetch(T(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),S&&(S.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),b("That timeline no longer has a verified past update"),S&&(S.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,h()}};function be(){if(window.location.hash==="#resolve-local-yes"){let a=M.find(r=>r.id==="siftle-local-test-2")||M.find(r=>r.timeframe==="Daily"&&W(r).startsWith("0x00000000000000000000000000000000000001"));if(a){Gt(W(a)),Ea(a,"yes"),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),b("Local test market resolved YES"),q().then(()=>{ae(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),C(),R()});return}}let e=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||e){t.activeSurface="markets",t.selectedMarketId=e?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,h();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let a=window.location.hash.match(/^#story-(\d+)$/),r=window.location.hash.match(/^#thread-(\d+)$/),o=a?t.stories.find(n=>n.id===Number(a[1])):void 0,s=r?t.stories.find(n=>n.id===Number(r[1])):void 0,i=t.selectedStoryId!==null||t.selectedThreadUrl!==null;t.selectedStoryId=o?.id??null,t.selectedThreadUrl=s?.sourceUrl??null,t.activeThread=null,h(),o&&Ae(o),s&&Mt(s),!o&&!s&&i&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}));return}t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h()}var Oe=e=>{Xe&&(Xe.textContent=e)},ya=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Lt(),h());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(T(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],pe(),t.hasLoadedFeed=!0,_e&&(_e.textContent=St(s.date??t.activeArchiveDate)),S)if(t.activeArchiveDate)S.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let i=s.archive?.provider==="shelby"?"Shelby":"local archive";S.textContent=`Latest published feed loaded from ${i}`}Oe(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),pe(),S&&(S.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,h(),be()}},ka=async()=>{if(D)try{let e=await fetch(T("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),D.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),D.value=t.activeArchiveDate??"",Oe(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),Oe("Archive unavailable")}},ye=()=>{Ve||(Ve=!0,ka())},te=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||ya(e,a)},wa=()=>{Ze||(Ze=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&te(t.activeCategory,!0),ye()},8e3))},Sa=e=>e==="All"?"For you":e==="Sports"?"Football":e,B=e=>e==="Sports"?"Football":e,Lt=()=>{X&&(X.innerHTML=Xt.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${Sa(e)}
        </button>
      `).join(""))},Pt=e=>(e.thread?.count??0)>=1,xa=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Ct=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),s=new Date(r.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),Me=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},$a=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},Ta=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,Aa=(e,a)=>({date:Ta(e,a),source:e.source,headline:e.headline,summary:z(e,e.ai_summary),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Ut=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(T(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...Ct(r.items??[])],s=o.filter((m,d,c)=>c.findIndex(f=>f.sourceUrl===m.sourceUrl)===d).map(Aa),n=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:s,imageUrl:n||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&h()}}},W=e=>e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",H=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),E=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),qe=e=>`siftle_profile_username_${e.toLowerCase()}`,Et=e=>e.trim().replace(/\s+/g," ").slice(0,15),oe=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=qe(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=Et(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},Ma=e=>{if(!t.walletAddress)return;let a=qe(t.walletAddress),r=Et(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},La=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},Fe=e=>Number.isFinite(e)?Math.min(10,Math.max(5,e)):5,It=(e,a,r,o,s)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let i=a==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,n=e.yesSharesUsdc,m=e.noSharesUsdc;if(o==="sell")return Math.min(r,i);let d=(a==="yes"?n:m)+r,c=n+m+r;return d<=0||c<=0?r:(i+r)/d*c},Bt=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},Pa=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},Dt=e=>`siftle_claimed_markets_${e.toLowerCase()}`,ze=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(Dt(t.walletAddress))||"[]"))}catch{return new Set}},Ca=e=>{if(!t.walletAddress)return;let a=ze();a.add(e),localStorage.setItem(Dt(t.walletAddress),JSON.stringify(Array.from(a)))},Ye=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),Z=(e,a,r)=>{let o=r?.yesSharesUsdc??0,s=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:s>0:a==="yes"?s<=0:o<=0},Ge=(e,a,r)=>{if(Z(e,a,r))return a;let o=a==="yes"?"no":"yes";return Z(e,o,r)?o:a};var Ua=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},at=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`},Je=()=>{let e=0,a=0,r=0,o=M.filter(n=>n.timeframe==="Daily").map(n=>n.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",i={};if(s)try{i=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let n of o){if(i[n]?.result==="win"){e+=Number(i[n].points)||0,a++;continue}if(i[n]?.result==="loss"){r++;continue}let m=t.marketPositions[n],c=t.marketSnapshots[n]?.outcome??0;if(c===0)continue;let f=`siftle_traded_sides_${n}_${t.walletAddress.toLowerCase()}`,u=[];try{u=JSON.parse(localStorage.getItem(f)||"[]")}catch{}let p=u.includes("yes")&&u.includes("no");if(c===1&&m&&m.yesSharesUsdc>0){let l=p?50:100;e+=l,a++,i[n]={result:"win",points:l}}else if(c===2&&m&&m.noSharesUsdc>0){let l=p?50:100;e+=l,a++,i[n]={result:"win",points:l}}else m&&(m.yesSharesUsdc>0||m.noSharesUsdc>0)&&(r++,i[n]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(i)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},Ea=(e,a)=>{let r=W(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,s=new Set;for(let i=0;i<localStorage.length;i++){let n=localStorage.key(i);if(!n||!n.startsWith(o))continue;let m=n.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(m)&&s.add(m)}s.forEach(i=>{let n=`${o}${i}`,m={yesSharesUsdc:0,noSharesUsdc:0};try{m=JSON.parse(localStorage.getItem(n)||"{}")}catch{}let d=(Number(m.yesSharesUsdc)||0)>0,c=(Number(m.noSharesUsdc)||0)>0;if(!d&&!c)return;let f=`siftle_traded_sides_${e.id}_${i}`,u=[];try{u=JSON.parse(localStorage.getItem(f)||"[]")}catch{}let p=u.includes("yes")&&u.includes("no"),l=a==="yes"?d:c,g=`siftle_resolved_results_${i}`,v={};try{v=JSON.parse(localStorage.getItem(g)||"{}")}catch{}v[e.id]={result:l?"win":"loss",points:l?p?50:100:0},localStorage.setItem(g,JSON.stringify(v));let w=0,x=0,$=0;Object.values(v).forEach(U=>{U.result==="win"?(x+=1,w+=Number(U.points)||0):U.result==="loss"&&($+=1)});let N=localStorage.getItem(qe(i))||"";fetch(T("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:i,username:N,points:w,status:`${x} win${x===1?"":"s"}, ${$} loss${$===1?"":"es"}`})}).catch(U=>console.error("Failed to report local resolved score:",U))})},ae=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?Je():null,r=await fetch(T("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},Ia=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(r)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(T("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},Ba=async e=>{let a=W(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){t.loadingMarketSnapshots[e.id]=!0;try{t.marketSnapshots[e.id]=await ft(a)}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&h()}}},q=async()=>{if(!(!t.walletAddress||t.loadingPortfolioPositions)){t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await bt();let e=xe(),a=await Promise.all(e.map(async r=>{let o=W(r);if(!o)return[r.id,{yesSharesUsdc:0,noSharesUsdc:0}];let[s,i]=await Promise.all([Jt(o,t.walletAddress),ft(o)]);return t.marketSnapshots[r.id]=i,[r.id,s]}));t.marketPositions=Object.fromEntries(a)}catch(e){console.warn(e)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,ae(!0).catch(e=>console.error("Failed to report leaderboard entry:",e)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard")&&h()}}},Da=async(e,a)=>{if(!t.walletAddress){b("Session expired or wallet not connected. Please sign in."),Re();return}let r=xe().find(c=>c.id===e);if(!r)return;t.marketTradeSide=a;let o=W(r);if(!o){b("Deploy this Arc market contract before trading"),h();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await q(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){b("Still loading your position. Try again in a moment."),h();return}let s=t.marketSnapshots[r.id];if(Ye(r,s)){t.tradeDrawerOpen=!1,b("This market is resolved and can no longer be traded."),h();return}let i=s?.yesPriceCents??r.probability,n=s?.noPriceCents??100-r.probability,m=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!Z(t.marketOrderMode,a,m)){let c=Pa(m),f=t.marketOrderMode==="sell"?c?`You can only exit your ${c.toUpperCase()} shares.`:"You do not have shares to exit in this market.":c?`Exit your ${c.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";b(f),t.marketTradeSide=Ge(t.marketOrderMode,a,m),h();return}let d=Fe(Number(t.marketTradeAmount)||0);t.marketTradeAmount=d,L("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",h();let c=await Kt(o,t.marketOrderMode,a,d,f=>{t.marketTradeStatus=f,h()},i,n);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.walletAddress=await Ne(),t.walletAddress&&(t.walletBalance=await ce(t.walletAddress)),await q(),ae(!0).catch(f=>console.error("Failed to report leaderboard entry:",f)),t.walletAddress){let f=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,u={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let l=localStorage.getItem(f);if(l){let g=JSON.parse(l);u={yesCost:g.yesCost||0,noCost:g.noCost||0,yesShares:g.yesShares||0,noShares:g.noShares||0}}}catch{}let p=d;if(t.marketOrderMode==="buy"){let l=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,g=[];try{g=JSON.parse(localStorage.getItem(l)||"[]")}catch{}g.includes(a)||(g.push(a),localStorage.setItem(l,JSON.stringify(g))),a==="yes"?(u.yesCost+=p,u.yesShares=(u.yesShares||0)+p/(i/100)):(u.noCost+=p,u.noShares=(u.noShares||0)+p/(n/100))}else{let l=t.marketPositions[r.id];if(l){if(a==="yes"&&l.yesSharesUsdc>0){let g=Math.min(1,p/l.yesSharesUsdc);u.yesCost=Math.max(0,u.yesCost-u.yesCost*g),u.yesShares=Math.max(0,(u.yesShares||0)-(u.yesShares||0)*g)}else if(a==="no"&&l.noSharesUsdc>0){let g=Math.min(1,p/l.noSharesUsdc);u.noCost=Math.max(0,u.noCost-u.noCost*g),u.noShares=Math.max(0,(u.noShares||0)-(u.noShares||0)*g)}}}localStorage.setItem(f,JSON.stringify(u))}b(`Trade confirmed ${c.slice(0,8)}...`),L(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),ca(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(c){L("trade_failed"),Ua(c)?(gt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,oe(),b("Session expired. Please sign in again.")):b(c instanceof Error?c.message:"Arc trade failed")}finally{t.marketTradeStatus=null,C(),h()}},rt=e=>Pt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",ot=e=>Pt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",st=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',it=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',ie=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,Na=()=>`
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
`,_a=(e=4)=>`${ie("Loading stories")}${Array.from({length:e},Na).join("")}`,Ke=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${ie("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,Oa=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${ie("Loading thread timeline")}
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
`;var Ha=(e=3)=>`
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${ie("Loading market evidence")}
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
`,Ra=(e=2)=>`
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${ie("Loading portfolio positions")}
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
`,fe=()=>{if(!y)return;let e=ma();if(y.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){y.innerHTML=_a(4);return}if(e.length===0){let a=t.showSaved?[]:t.stories;if(a.length>0){y.innerHTML=a.map(r=>`
        <article class="story-card" data-story-id="${r.id}" role="button" tabindex="0" aria-label="Open summary for ${r.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${r.source}</strong>
                <span>${le(r)} - ${r.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${r.sourceUrl}" aria-pressed="${r.saved?"true":"false"}" aria-label="${r.saved?"Remove saved story":"Save story"}">
                ${st()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${r.id}" aria-expanded="${t.activeShareStoryId===r.id}">
                  ${it()}
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
            <span class="category-chip ${r.category}">${B(r.category)}</span>
            <h2>${r.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${rt(r)}
            ${/example\\.com/i.test(r.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${r.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${r.category}">${B(r.category)}</span>
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
                <span class="mobile-card-time">${le(r)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${r.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${ot(r)}
              ${/example\\.com/i.test(r.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${r.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("");return}y.innerHTML="";return}y.innerHTML=e.map(a=>`
        <article class="story-card" data-story-id="${a.id}" role="button" tabindex="0" aria-label="Open summary for ${a.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${a.source}</strong>
                <span>${le(a)} - ${a.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${a.sourceUrl}" aria-pressed="${a.saved?"true":"false"}" aria-label="${a.saved?"Remove saved story":"Save story"}">
                ${st()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${a.id}" aria-expanded="${t.activeShareStoryId===a.id}">
                  ${it()}
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
            <span class="category-chip ${a.category}">${B(a.category)}</span>
            <h2>${a.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${rt(a)}
            ${/example\\.com/i.test(a.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${a.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${a.category}">${B(a.category)}</span>
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
                <span class="mobile-card-time">${le(a)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${a.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${ot(a)}
              ${/example\\.com/i.test(a.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${a.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("")},nt=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),de=(e,a,r,o,s,i)=>{e.beginPath(),e.moveTo(a+i,r),e.lineTo(a+o-i,r),e.quadraticCurveTo(a+o,r,a+o,r+i),e.lineTo(a+o,r+s-i),e.quadraticCurveTo(a+o,r+s,a+o-i,r+s),e.lineTo(a+i,r+s),e.quadraticCurveTo(a,r+s,a,r+s-i),e.lineTo(a,r+i),e.quadraticCurveTo(a,r,a+i,r),e.closePath()},ja=(e,a,r,o,s,i,n)=>{let m=a.split(/\s+/).filter(Boolean),d=[],c="";for(let f of m){let u=c?`${c} ${f}`:f;if(e.measureText(u).width<=s){c=u;continue}if(c&&d.push(c),c=f,d.length===n)break}if(c&&d.length<n&&d.push(c),m.length>0&&d.length===n){for(;e.measureText(`${d[n-1]}...`).width>s&&d[n-1].length>0;)d[n-1]=d[n-1].slice(0,-1).trim();d[n-1]=`${d[n-1]}...`}return d.forEach((f,u)=>e.fillText(f,r,o+u*i)),o+d.length*i},Wa=(e,a,r,o,s,i,n)=>{let m=Math.max(s/a.naturalWidth,i/a.naturalHeight),d=s/m,c=i/m,f=(a.naturalWidth-d)/2,u=(a.naturalHeight-c)/2;e.save(),de(e,r,o,s,i,n),e.clip(),e.drawImage(a,f,u,d,c,r,o,s,i),e.restore()},lt=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),dt=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))):"",qa=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",ct=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",de(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await nt("./assets/siftle-logo-small.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${dt(e.source)} - ${e.postedAt} ago`,110,140);let i=195;if(a){let m=await nt(qa(e.imageUrl)).catch(()=>null);m?Wa(o,m,110,i,860,520,28):(o.fillStyle="#eef2ff",de(o,110,i,860,520,28),o.fill())}else o.fillStyle="#eef2ff",de(o,110,i,860,520,28),o.fill();let n=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",de(o,110,n,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(B(e.category),132,n+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",ja(o,dt(e.headline),110,888,860,54,4),r},Nt=async e=>{let a=await ct(e,!0);try{return await lt(a)}catch{return lt(await ct(e,!1))}},_t=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,Ot=async e=>{let a=await Nt(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=_t(e),o.click(),URL.revokeObjectURL(r)},Fa=async e=>{let a=await Nt(e),r=new File([a],_t(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await Ot(e)},za=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,fe(),b(a==="share"?"Preparing share image":"Preparing download"),S&&(S.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await Fa(r):await Ot(r),b(a==="share"?"Share image ready":"Image saved"),S&&(S.textContent="Branded story image ready")}catch(o){console.warn(o),b("Image export unavailable"),S&&(S.textContent="Image export was cancelled or unavailable")}}},mt=(e,a)=>`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${B(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${z(e,e.ai_summary)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">${ee(e)?"AI briefing":"Unlock AI briefing"}</button>
      </div>
      ${ee(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${Ke()}</div>`:`<div style="margin-top: 12px;">${je(z(e,t.aiSummaries[e.sourceUrl]||e.ai_summary))}</div>`:""}
    </div>
  </article>
`,Ya=()=>{if(!k||!y)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(y.hidden=!0,k.hidden=!1,k.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){k.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){k.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${Oa(3)}
        </article>
      </div>
    `;return}k.innerHTML=`
    <div class="detail-container thread-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card thread-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${B(e.category)}</span>
          <span>${xa(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${mt(e,"Latest")}
          ${Ct(r?.items??[]).map(o=>mt(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Ga=()=>{if(!k||!y)return;if(t.selectedThreadUrl){Ya();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){k.hidden=!0,k.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),y.hidden=!1;return}let a=z(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=ee(e),s=t.unlockingSummaryUrl===e.sourceUrl;y.hidden=!0,k.hidden=!1,k.classList.add("fullscreen"),document.body.classList.add("detail-mode"),k.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${B(e.category)}</span>
          <span>${e.source} - ${le(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?r?Ke():je(a):ha(e,s)}
        </section>
        <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `},Ja=e=>{let a=t.marketSnapshots[e.id],r=W(e),o=a?.yesPriceCents,s=o??e.probability,i=`${s}%`,n=o===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${o}\xA2 \xB7 No ${100-o}\xA2`,m=o===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:n,d=Me(e);return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${B(e.category)}</span>
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
        <strong>${i}</strong>
        <span>${r?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${m}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${s}%"></span></div>
      <div class="market-card-footer">
        <span>${d.evidence.length} thread updates</span>
        <span>${a?`$${Math.round(a.volumeUsdc).toLocaleString()} volume`:`Closes ${e.closes}`}</span>
      </div>
    </button>
  `},Ka=e=>{let a=Me(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,i=a.evidence[0],n=i?i.headline:"No updates yet",m=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${n}"

Trade and discuss here: ${m}`},Va=e=>{if(!y||!k)return;let a=Me(e),r=!t.checkedMarketEvidence[e.id],o=W(e),s=t.marketSnapshots[e.id],i=!!(o&&!s),n=s?.yesPriceCents??(o?e.probability:0),m=s?.noPriceCents??(o?100-e.probability:0),d=i?"":o?`${n}\xA2`:"--",c=i?"":o?`${m}\xA2`:"--",f=Fe(Number(t.marketTradeAmount)||0),u=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},p=!t.walletAddress||t.hasLoadedPortfolioPositions,l=Ye(e,s),g=Tt(e,s),v=!!g;t.marketTradeSide=Ge(t.marketOrderMode,t.marketTradeSide,u);let w=!l&&!v&&p&&Z(t.marketOrderMode,"yes",u),x=!l&&!v&&p&&Z(t.marketOrderMode,"no",u),$=!l&&!v&&p&&Z(t.marketOrderMode,t.marketTradeSide,u),N=l?"Market resolved":g||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),U=l?"Market resolved":g||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),re=It(s,t.marketTradeSide,f,t.marketOrderMode,u),Y=t.marketOrderMode==="buy"?"Buy":"Exit",P=o?"Arc testnet live":"Contract not deployed";y.hidden=!0,k.hidden=!1,k.classList.add("fullscreen"),document.body.classList.add("detail-mode"),Ba(e),Ut(e),t.walletAddress&&!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&q();let G=u.yesSharesUsdc>0||u.noSharesUsdc>0,J="";G&&t.walletAddress&&(J=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${Bt(u,s).map(O=>`
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
    `),k.innerHTML=`
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
            <span class="category-chip ${e.category}">${B(e.category)}</span>
            <span class="market-status-pill">${P}</span>
          </div>
          <h2>${e.question}</h2>
          ${J}
          ${a.imageUrl?`
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${a.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          `:""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${We(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${ga(e,s)}</strong>
            </div>
            <div class="market-stat">
              <span>Volume</span>
              <strong>${s?`$${Math.round(s.volumeUsdc).toLocaleString()}`:e.volume}</strong>
            </div>
          </div>

          <div class="market-resolution-panel">
            <h3>Resolution Rules</h3>
            <p>${e.resolution}</p>
            ${g?`<p style="margin-top: 10px; color: #f59e0b; font-weight: 600;">${g}</p>`:""}
          </div>

          <section class="market-evidence-thread">
            <header>
              <h3>Timeline & Evidence</h3>
              <span>${r?"Loading...":`${a.evidence.length} updates`}</span>
            </header>
            <p class="market-thread-intro">Track how this topic is developing, newest first.</p>
            <div class="market-thread-timeline">
              ${r?Ha(3):a.evidence.length===0?'<div class="portfolio-empty compact">Market thread is still being prepared for this match.</div>':a.evidence.map(A=>`
                <article class="market-thread-update">
                  <div class="market-thread-marker"></div>
                  <div class="market-thread-update-content">
                    <div class="market-thread-update-meta">
                      <span>${A.date} \xB7 ${A.source}</span>
                    </div>
                    <h4>${A.headline}</h4>
                    <p>${A.summary}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                      ${/example\.com/i.test(A.sourceUrl)?"":`<a class="market-thread-source-link" href="${A.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(A.sourceUrl)}">${ee(Se(e,A))?"AI briefing":"Unlock AI briefing"}</button>
                    </div>
                    ${ee(Se(e,A))?t.loadingSummaryUrl===A.sourceUrl?`<div style="margin-top: 12px;">${Ke()}</div>`:`<div style="margin-top: 12px;">${je(z(Se(e,A),t.aiSummaries[A.sourceUrl]))}</div>`:""}
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
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${l||v?"disabled":""}>
          ${l?"Market Resolved":g||"Trade Market"}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${l||v?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${l||v?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${i?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${w?"":"disabled"}" data-market-trade-side="yes" ${w?"":"disabled"} title="${w?"Yes":N}">
                  <span>Yes</span>
                  <strong>${d}</strong>
                  ${w?"":`<small>${N}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${x?"":"disabled"}" data-market-trade-side="no" ${x?"":"disabled"} title="${x?"No":U}">
                  <span>No</span>
                  <strong>${c}</strong>
                  ${x?"":`<small>${U}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">$5-$10 USDC</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="5" max="10" step="0.01" inputmode="decimal" value="${f}" data-market-amount ${l||v?"disabled":""} />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>${t.marketOrderMode==="buy"?"Projected payout":"Exit amount"}</span>
            <strong>$${H(re)}</strong>
          </div>

          <div class="drawer-action-container">
            ${i?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:l?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':v?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${g}</button>`:t.walletAddress?p?$?`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${Y} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${Y.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},Ht=()=>{if(!y||!k)return;if($e?.toggleAttribute("hidden",!0),Te?.toggleAttribute("hidden",!0),X?.toggleAttribute("hidden",!0),ge?.classList.add("active"),he?.classList.remove("active"),ve?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&M.forEach(i=>{Ut(i)})},750),t.selectedMarketId){let i=M.find(n=>n.id===t.selectedMarketId);if(i){Va(i);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),k.hidden=!0,k.classList.remove("fullscreen"),y.hidden=!1,y.classList.add("markets-list");let e=M,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(i=>{let n=t.activeMarketTimeframe===i,m=i==="All"?e.length:e.filter(c=>c.timeframe===i).length;return`
          <button class="timeframe-tab-btn ${n?"active":""}" type="button" data-timeframe="${i}">
            <span>${i==="Sagas"?"Sagas":i}</span>
            <span class="timeframe-tab-count">${m}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&M.length===0){y.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${De}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
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
    `;return}let o="",s=(i,n,m)=>m.length===0?"":`
      <div class="market-timeframe-section">
        <div class="timeframe-section-header">
          <div class="timeframe-section-header-left">
            <h2>${i}</h2>
            <span class="timeframe-section-subtitle">${n}</span>
          </div>
          <span class="timeframe-section-count-badge">${m.length} ${m.length===1?"market":"markets"}</span>
        </div>
        <section class="markets-grid" aria-label="${i} prediction markets">
          ${m.map(Ja).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let i=e.filter(d=>d.timeframe==="Daily"),n=e.filter(d=>d.timeframe==="Weekly"),m=e.filter(d=>d.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",i)}
      ${s("Weekly","Ends in a week",n)}
      ${s("Sagas (Long-term)","Narratives & futures",m)}
    `}else{let i=e.filter(d=>d.timeframe===t.activeMarketTimeframe),n=t.activeMarketTimeframe,m="";t.activeMarketTimeframe==="Daily"?m="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?m="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(n="Sagas (Long-term)",m="Narratives & futures"),o=`
      ${s(n,m,i)}
    `}y.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${De}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},Rt=()=>{if(!y||!k)return;$e?.toggleAttribute("hidden",!0),Te?.toggleAttribute("hidden",!0),X?.toggleAttribute("hidden",!0),ge?.classList.remove("active"),he?.classList.remove("active"),ve?.classList.remove("active"),document.body.classList.remove("detail-mode"),k.hidden=!0,y.hidden=!1,y.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?Je():null;t.walletAddress&&e&&fetch(T("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(p=>console.error("Failed to report user score:",p)),F&&(clearInterval(F),F=null),y.innerHTML=`
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
        <button class="leaderboard-mode-tab ${K==="global"?"active":""}" type="button" data-leaderboard-view="global">Global</button>
        <button class="leaderboard-mode-tab ${K==="division"?"active":""}" type="button" data-leaderboard-view="division">Division</button>
      </div>

      <div class="global-prize-box" id="globalPrizeBox" ${K==="global"?"":"hidden"}>
        <div>
          <span>Global Season Race</span>
          <strong>Top 10 share a 150 USDC prize pool</strong>
        </div>
        <div>
          <span>Next season</span>
          <strong>Top 6 to Division 1, next 6 to Division 2</strong>
        </div>
      </div>

      <div class="division-title-container" id="divisionControls" ${K==="division"?"":"hidden"}>
        <div class="division-title-left" style="display: flex; align-items: center; gap: 8px; flex-wrap: nowrap !important; flex-shrink: 0 !important;">
          <h2 id="divisionTitleText" style="margin: 0; white-space: nowrap !important;">Division 1</h2>
          <button class="how-it-works-btn" id="howItWorksBtn" type="button" style="background: rgba(255,255,255,0.06) !important; border: 1px solid #1e1f2b !important; color: #ffffff !important; border-radius: 6px !important; padding: 4px 10px !important; font-size: 0.82rem !important; font-weight: 600 !important; cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important; white-space: nowrap !important; flex-shrink: 0 !important;">How it works</button>
        </div>
        <select id="divisionSelector" class="division-select-menu">
          <option value="1">Division 1</option>
        </select>
      </div>

      <div class="global-title-container" id="globalControls" ${K==="global"?"":"hidden"}>
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
  `;let a=(p="2026-07-19T23:59:59.000Z")=>{let l=document.getElementById("seasonTimer");F&&clearInterval(F);let g=()=>{let w=new Date(p).getTime()-new Date().getTime();if(w<=0){l&&(l.innerText="Season Finished!"),F&&clearInterval(F);return}let x=Math.floor(w/(1e3*60*60*24)),$=Math.floor(w%(1e3*60*60*24)/(1e3*60*60)),N=Math.floor(w%(1e3*60*60)/(1e3*60)),U=Math.floor(w%(1e3*60)/1e3);l&&(l.innerText=`${x}d ${$}h ${N}m ${U}s`)};g(),F=setInterval(g,1e3)};a();let r=p=>p.map((l,g)=>{let v=Number(l.globalRank)||g+1,w=String(l.username||""),x=!!(t.walletAddress&&w.toLowerCase()===t.walletAddress.toLowerCase()),$=x&&t.profileUsername?t.profileUsername:l.displayName||w,N=x?`${t.profileUsername?$:_(w)} (You)`:$.startsWith("0x")&&$.length===42?_($):$,U=E(N),re=E(at(l.status)),Y=l.nextSeasonDivision?`Division ${l.nextSeasonDivision}`:"Qualify",P=v<=10?"promotion-zone":"safety-zone",G=v<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${x?"user-highlight":""} ${P}" role="listitem">
        <div class="leaderboard-row-left">
          ${G}
          <span class="leaderboard-rank rank-${v}">${v}</span>
          <span class="leaderboard-username">${U}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(l.points)||0} pts</strong>
          <span>${l.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${E(Y)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${re}</span>
        </div>
      </div>
    `}).join(""),o=p=>{K=p,document.querySelectorAll("[data-leaderboard-view]").forEach(l=>{l.classList.toggle("active",l.dataset.leaderboardView===p)}),document.getElementById("divisionControls")?.toggleAttribute("hidden",p!=="division"),document.getElementById("globalControls")?.toggleAttribute("hidden",p!=="global"),document.getElementById("globalPrizeBox")?.toggleAttribute("hidden",p!=="global")},s=p=>{let l=document.getElementById("leaderboardListContainer");l&&(l.innerHTML=`
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
    `)},i=()=>{o("global"),s(10);let p=document.getElementById("leaderboardListContainer"),l=new URLSearchParams;t.walletAddress&&l.set("walletAddress",t.walletAddress);let g=l.toString();fetch(T(`/api/leaderboard/global${g?`?${g}`:""}`)).then(v=>v.json()).then(v=>{let w=v.players||[];p&&(p.innerHTML=w.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the global leaderboard yet.</p>`:r(w)),a(v.seasonEndsAt)}).catch(v=>{console.error("Failed to load global leaderboard:",v),p&&(p.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading global leaderboard. Please try again.</p>`)})},n=p=>{o("division");let l=document.getElementById("leaderboardListContainer");l&&p!==void 0&&(l.innerHTML=`
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
      `);let g=new URLSearchParams;t.walletAddress&&g.set("walletAddress",t.walletAddress),p&&g.set("division",String(p));let v=g.toString();fetch(T(`/api/leaderboard/division${v?`?${v}`:""}`)).then(w=>w.json()).then(w=>{let x=w.divisionNumber||1,$=w.players||[],N=w.totalDivisions||1,U=w.seasonEndsAt;Ue=x;let re=document.getElementById("divisionTitleText");re&&(re.innerText=`Division ${x}`);let Y=document.getElementById("divisionSelector");Y&&(Y.innerHTML=Array.from({length:N},(P,G)=>G+1).map(P=>`
            <option value="${P}" ${P===x?"selected":""}>Division ${P}</option>
          `).join("")),l&&($.length===0?l.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No active players in this division.</p>`:l.innerHTML=$.map((P,G)=>{let J=G+1,A=t.walletAddress&&P.username.toLowerCase()===t.walletAddress.toLowerCase(),O=A&&t.profileUsername?t.profileUsername:P.displayName||P.username,Wt=E(at(P.status)),qt=A?`${t.profileUsername?O:_(P.username)} (You)`:O.startsWith("0x")&&O.length===42?_(O):O,Ft=E(qt),Le="safety-zone",Pe='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return J<=2?(Le="promotion-zone",Pe='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):J>=5&&(Le="relegation-zone",Pe='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
                <div class="leaderboard-row ${A?"user-highlight":""} ${Le}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
                  <!-- Left Side: Arrow + Rank + Username -->
                  <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
                    ${Pe}
                    <span class="leaderboard-rank rank-${J}" style="flex-shrink: 0; margin-right: 4px;">${J}</span>
                    <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${Ft}</span>
                  </div>
                  <!-- Center Side: Points -->
                  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${P.points} pts</span>
                  </div>
                  <!-- Right Side: Status -->
                  <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
                    <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${Wt}</span>
                  </div>
                </div>
              `}).join("")),a(U)}).catch(w=>{console.error("Failed to load division leaderboard:",w),l&&(l.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading division leaderboard. Please try again.</p>`)})};K==="division"?n(Ue||void 0):i(),document.querySelectorAll("[data-leaderboard-view]").forEach(p=>{p.addEventListener("click",()=>{(p.dataset.leaderboardView==="division"?"division":"global")==="division"?n(Ue||void 0):i()})}),document.getElementById("divisionSelector")?.addEventListener("change",p=>{let l=Number(p.target.value);n(l)}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){b("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let l=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,l.toFixed(2)),t.walletBalance=l.toFixed(2),b("Claimed $100 USDC mock credits!"),C(),Rt()}else b("Opening Circle Faucet..."),window.open(De,"_blank")});let c=document.getElementById("howItWorksBtn"),f=document.getElementById("howItWorksModal"),u=document.getElementById("closeRulesModalBtn");c?.addEventListener("click",()=>{f&&f.classList.add("active")}),u?.addEventListener("click",()=>{f&&f.classList.remove("active")}),f?.addEventListener("click",p=>{p.target===f&&f.classList.remove("active")})},jt=()=>{t.activeSurface="feed",t.selectedMarketId=null,$e?.removeAttribute("hidden"),Te?.removeAttribute("hidden"),X?.removeAttribute("hidden"),ge?.classList.remove("active"),he?.classList.add("active"),ve?.classList.remove("active"),y?.classList.remove("markets-list")},Za=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",pt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id],o=Za(r?.outcome),s=Bt(a,r),i=s.reduce((g,v)=>Math.max(g,v.payout),0),n=a.yesSharesUsdc+a.noSharesUsdc,m=r?.outcome??0,d=ze().has(e.id),c=m===1?a.yesSharesUsdc:m===2?a.noSharesUsdc:0,f=m===1?r?.yesSharesUsdc??0:m===2?r?.noSharesUsdc??0:0,u=r?.volumeUsdc??0,p=c>0&&f>0?c/f*u:0,l=m===0?"":d?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':p>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${H(p)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${B(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${H(i)}</strong></div>
        ${s.map(g=>`
          <div><span>${g.label}</span><strong>${H(g.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${n>0?`${H(n)} total shares`:""}</span>
        ${l||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Qa=async e=>{if(!t.walletAddress){b("Please sign in first.");return}let a=xe().find(o=>o.id===e),r=a?W(a):"";if(!a||!r){b("Market is not available.");return}try{L("claim_attempt"),Je();let o=await Vt(r,t.walletAddress);L("claim_success"),o.won&&Ca(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await ce(t.walletAddress),await q(),b(o.won?`Claimed $${H(o.amountUsdc)}`:"No payout to claim"),C(),R()}catch(o){L("claim_failed"),b(o instanceof Error?o.message:"Claim failed")}},Xa=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(s=>{let i=s.displayName||_(s.walletAddress),n=s.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${E(i)}</strong>
            <span>${_(s.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${n?"expired":""}">
            <strong>${s.used}/${s.maxUses}</strong>
            <span>${n?"Expired":`${s.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${E(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${E(a.code)}">
              <span>Invite code</span>
              <strong>${E(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${E(a.inviteLink)}">
              <span>Invite link</span>
              <strong>Copy link</strong>
            </button>
          </div>
          <div class="portfolio-referral-metrics">
            <div><span>Active referrals</span><strong>${a.activeReferralCount}</strong></div>
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
  `},R=()=>{if(!y||!k)return;$e?.toggleAttribute("hidden",!0),Te?.toggleAttribute("hidden",!0),X?.toggleAttribute("hidden",!0),ge?.classList.remove("active"),he?.classList.remove("active"),ve?.classList.add("active"),document.body.classList.remove("detail-mode"),k.hidden=!0,y.hidden=!1,y.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&ue(),t.walletAddress&&!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&bt(),q());let e=ze(),a=xe().filter(f=>{let u=t.marketPositions[f.id];return e.has(f.id)||u&&u.yesSharesUsdc+u.noSharesUsdc>0}),r=a.filter(f=>(t.marketSnapshots[f.id]?.outcome??0)===0),o=a.filter(f=>(t.marketSnapshots[f.id]?.outcome??0)!==0),s=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?_(t.walletAddress):"Anonymous"),n=E(i),m=E(t.profileUsername||""),d=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${E(t.profileNotice.message)}</div>`:"",c=i.charAt(0).toUpperCase();y.innerHTML=`
    <section class="portfolio-surface">
      ${Xa(s)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${c}</span>
          </div>
          <div class="profile-details" style="display: flex !important; flex-direction: column !important; min-width: 0 !important;">
            <div class="username-display-row" style="display: flex !important; align-items: center !important; gap: 8px !important;">
              <span class="profile-username" style="font-family: 'Space Grotesk', sans-serif !important; font-size: 1.08rem !important; font-weight: 750 !important; color: var(--market-text-main) !important; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis !important; max-width: 180px !important;">${n}</span>
              ${s?`
                <button type="button" class="edit-username-btn" id="editUsernameBtn" style="background: transparent !important; border: none !important; color: var(--market-text-muted) !important; cursor: pointer !important; padding: 4px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
                </button>
              `:""}
            </div>
            ${s?`
              <div class="wallet-address-row" style="display: flex !important; align-items: center !important; gap: 8px !important; margin-top: 4px !important;">
                <small style="color: var(--market-text-muted) !important; font-family: monospace !important; font-size: 0.78rem !important;">${_(t.walletAddress)}</small>
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
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${m}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${d}

        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${ie("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
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
      <div class="portfolio-section-tabs">
        <span>Open ${r.length}</span>
        <span>Finalized ${o.length}</span>
      </div>
      ${t.loadingPortfolioPositions?Ra(2):t.walletAddress?a.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${r.length?r.map(pt).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${o.length?o.map(pt).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},h=()=>{if(kt.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){Ht();return}if(t.activeSurface==="portfolio"){R();return}if(t.activeSurface==="leaderboard"){Rt();return}jt(),Lt(),fe(),Ga(),D&&(D.value=t.activeArchiveDate??"")};_e.textContent=St();X?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");r&&(t.activeCategory=r.dataset.category,window.history.pushState({},"","#feed"),j(),h(),ye(),te(t.activeCategory))});ge?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),j(),h()});he?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),j(),h(),ye(),te(t.activeCategory)});ve?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),j(),h()});V?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",be()):Re()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let n=r.getAttribute("data-address");n&&navigator.clipboard.writeText(n).then(()=>{b("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let n=o.getAttribute("data-claim-market");n&&Qa(n);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&ue(),R();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,R();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,ue(),R();return}let s=a.closest("[data-copy-referral-code]");if(s){let n=s.getAttribute("data-copy-referral-code")||"";n&&navigator.clipboard.writeText(n).then(()=>b("Invite code copied"));return}let i=a.closest("[data-copy-referral-link]");if(i){let n=i.getAttribute("data-copy-referral-link")||"";n&&navigator.clipboard.writeText(n).then(()=>b("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?gt():Re())});kt.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),ye(),te(t.activeCategory),a==="saved"&&(La(),He(),pe())),j(),h()})});D?.addEventListener("change",()=>{t.activeArchiveDate=D.value||null,window.history.pushState({},"","#feed"),j(),h(),te(t.activeCategory)});na?.addEventListener("click",()=>{t.activeArchiveDate=null,D&&(D.value=""),window.history.pushState({},"","#feed"),j(),h(),te(t.activeCategory)});y?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let p=y?.querySelector(".username-display-row"),l=y?.querySelector("#usernameEditForm");if(p&&l){p.style.display="none",l.style.display="flex";let g=l.querySelector("#usernameInput");g&&g.focus()}return}if(a.closest("#cancelUsernameBtn")){let p=y?.querySelector(".username-display-row"),l=y?.querySelector("#usernameEditForm");p&&l&&(p.style.display="flex",l.style.display="none");return}let s=a.closest("#saveUsernameBtn");if(s){let l=y?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(l){let g=l.value.trim().slice(0,15),v=s,w=v.textContent||"Save";v.disabled=!0,v.textContent="Saving...",Ma(g),t.profileNotice=null;try{t.walletAddress&&await ae(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},b("Username updated"),R()}catch(x){let $=x instanceof Error?x.message:"Username save failed";t.profileNotice={type:"error",message:$},b($),v.disabled=!1,v.textContent=w,R()}}return}let i=a.closest("[data-timeframe]");if(i){let p=i.dataset.timeframe;t.activeMarketTimeframe=p,Ht();return}let n=a.closest("[data-market-id]");if(n){t.selectedMarketId=n.dataset.marketId??null,L("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),h(),window.scrollTo({top:0,behavior:"smooth"});return}let m=a.closest("[data-thread-story-id]"),d=a.closest("[data-export-id]"),c=a.closest("[data-export-action]"),f=a.closest("[data-story-id]");if(m){e.stopPropagation();let p=t.stories.find(l=>l.id===Number(m.dataset.threadStoryId));p&&va(p);return}let u=a.closest(".mobile-bookmark-btn, .bookmark-button");if(u){e.stopPropagation();let p=u.dataset.bookmarkUrl||"",l=t.stories.find(g=>g.sourceUrl===p);if(!l)return;l.saved=!l.saved,l.saved?Q.add(p):Q.delete(p),ia(),b(l.saved?"Saved to your list":"Removed from saved"),fe();return}if(c){e.stopPropagation(),za(Number(c.dataset.exportStoryId),c.dataset.exportAction);return}if(d){e.stopPropagation();let p=Number(d.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===p?null:p,fe();return}f&&(a.closest("a")||At(Number(f.dataset.storyId)))});y?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");!r||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),At(Number(r.dataset.storyId)))});k?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let d=t.stories.find(c=>c.id===Number(r.dataset.unlockBriefing));d&&tt(d);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let d=decodeURIComponent(o.dataset.unlockBriefingUrl||""),c=fa(d);c&&(ee(c)?Ae(c):tt(c));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),h();return}if(a.closest("#openTradeDrawerBtn")){let d=M.find(u=>u.id===t.selectedMarketId);if(d){if(Ye(d,t.marketSnapshots[d.id])){b("This market is resolved and can no longer be traded.");return}if(Tt(d,t.marketSnapshots[d.id])){b("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,L("trade_drawer_open");let c=k.querySelector("#tradeDrawer"),f=k.querySelector("#tradeDrawerBackdrop");c?.classList.add("open"),f?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let d=k.querySelector("#tradeDrawer"),c=k.querySelector("#tradeDrawerBackdrop");d?.classList.remove("open"),c?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let d=M.find(c=>c.id===t.selectedMarketId);if(d){let c=Ka(d),f=`https://api.whatsapp.com/send?text=${encodeURIComponent(c)}`;window.open(f,"_blank")}return}let s=a.closest("[data-market-trade]");if(s&&t.selectedMarketId){let d=s.dataset.marketTrade;Da(t.selectedMarketId,d);return}let i=a.closest("[data-market-trade-side]");if(i){if(i.disabled||i.classList.contains("disabled"))return;let d=M.find(u=>u.id===t.selectedMarketId),c=d?t.marketPositions[d.id]:void 0,f=i.dataset.marketTradeSide;if(!Z(t.marketOrderMode,f,c))return;t.marketTradeSide=f,h();return}let n=a.closest("[data-market-order-mode]");if(n){t.marketOrderMode=n.dataset.marketOrderMode;let d=M.find(f=>f.id===t.selectedMarketId),c=d?t.marketPositions[d.id]:void 0;t.marketTradeSide=Ge(t.marketOrderMode,t.marketTradeSide,c),h();return}a.closest("[data-back-to-feed]")&&ba()});k?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;t.marketTradeAmount=Fe(Number(a.value)||0);let r=M.find(m=>m.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,s=r?t.marketPositions[r.id]:void 0,i=It(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),n=k.querySelector(".market-inline-payout strong");n&&(n.textContent=`$${H(i)}`)});k?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});k?.addEventListener("focusout",e=>{e.target.matches("[data-market-amount]")&&window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)});window.addEventListener("popstate",be);window.addEventListener("hashchange",be);Ee?.addEventListener("click",()=>{if(!Ie||!Ee)return;let e=!Ie.hidden;Ie.hidden=e,Ee.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,fe());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};S&&(S.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,D&&(D.value=""),j(),ye(),te(t.activeCategory)),r.dataset.menuAction==="saved"&&(jt(),He(),pe(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),j(),h())});h();C();sa().then(()=>{Ia(),h(),C(),window.setTimeout(ar,1200),wa()});var er=document.querySelector("#mobileArchiveCard"),se=document.querySelector("#archiveControls");er?.addEventListener("click",()=>{if(!se)return;se.classList.toggle("mobile-open")&&setTimeout(()=>se.scrollIntoView({behavior:"smooth",block:"center"}),50)});var tr=document.querySelector("#archivePill");tr?.addEventListener("click",e=>{if(e.stopPropagation(),!se)return;se.classList.toggle("mobile-open")&&setTimeout(()=>se.scrollIntoView({behavior:"smooth",block:"center"}),50)});var we=!1,ut=!1,ar=()=>{ut||(ut=!0,(async()=>{let e=await Ne();if(we=!!e,e){t.walletConnecting=!0,C();try{let a=await Zt();we=!1,t.walletConnecting=!1,a?(t.walletAddress=await Ne(),t.walletAddress&&(oe(),t.walletBalance=await ce(t.walletAddress),await q()),C(),t.activeSurface==="portfolio"&&h()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,oe(),b("Session expired. Please sign in again."),C(),h())}catch(a){console.warn(a),we=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,oe(),b("Session expired. Please sign in again."),C(),h()}}await Qt(a=>{we||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,oe(),a&&ae(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,C(),a?(ue(),ce(a).then(r=>{t.walletBalance=r,C(),t.activeSurface==="portfolio"&&h()}),q()):t.activeSurface==="portfolio"&&h())})})())};L("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",s=typeof o=="string"?o:r.getAttribute("class")||"",i=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url"))&&(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||r.textContent?.trim()==="Open source")&&!s.includes("disabled")&&i!=="#"&&L("open_source")}},!0);
