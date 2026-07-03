import"./chunks/chunk-ZUUPKAA6.js";var me="Sports",De=[{id:"wc-vozinha-saves-argentina",category:me,timeframe:"Daily",optionMarket:!0,question:"What will Vozinha's official save total be against Argentina?",options:[{id:"under-4",label:"Under 4 saves"},{id:"exactly-4",label:"Exactly 4 saves"},{id:"exactly-5",label:"Exactly 5 saves"},{id:"six-plus",label:"6+ saves"}],probability:0,kickoffAt:"2026-07-03T22:00:00Z",closes:"Jul 3, 10:40 PM GMT+1",resolution:"One option resolves correct based on Vozinha's official save total for Cape Verde against Argentina in regular time and extra time. Penalty shootout saves do not count.",threadTopic:"Vozinha Argentina Save Watch",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-messi-impact-cape-verde",category:me,timeframe:"Daily",optionMarket:!0,question:"How will Messi impact Cape Verde?",options:[{id:"scores-only",label:"Scores only"},{id:"assists-only",label:"Assists only"},{id:"score-and-assist",label:"Scores and assists"},{id:"no-goal-assist",label:"No goal or assist"}],probability:0,kickoffAt:"2026-07-03T22:00:00Z",closes:"Jul 3, 10:40 PM GMT+1",resolution:"One option resolves correct from Messi's official goal and assist record against Cape Verde, including regular time and extra time. Penalty shootout goals do not count.",threadTopic:"Messi Cape Verde Impact",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-australia-egypt-first-event",category:me,timeframe:"Daily",optionMarket:!0,question:"What happens first in Australia vs Egypt?",options:[{id:"salah-shot",label:"Salah shot on target"},{id:"australia-shot",label:"Australia shot on target"},{id:"yellow-card",label:"Yellow card"},{id:"goal",label:"Goal"}],probability:0,kickoffAt:"2026-07-03T18:00:00Z",closes:"Jul 3, 6:40 PM GMT+1",resolution:"One option resolves correct based on which listed event occurs first in official match order. If an unlisted event happens first, ignore it and continue until one listed event occurs.",threadTopic:"Australia Egypt First Event",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-colombia-ghana-halftime",category:me,timeframe:"Daily",optionMarket:!0,question:"How does Colombia vs Ghana reach halftime?",options:[{id:"colombia-leading",label:"Colombia leading"},{id:"ghana-leading",label:"Ghana leading"},{id:"level-with-goals",label:"Level with goals"},{id:"nil-nil",label:"0-0"}],probability:0,kickoffAt:"2026-07-04T00:30:00Z",closes:"Jul 4, 1:10 AM GMT+1",resolution:"One option resolves correct based on the official halftime score after first-half stoppage time. Extra time and penalties are not relevant.",threadTopic:"Colombia Ghana Halftime Script",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-tonali-spurs",category:me,timeframe:"Sagas",question:"Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",probability:58,closes:"September 1, 2026",resolution:"Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline.",threadTopic:"Sandro Tonali Tottenham Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$182K",traders:"980",liquidity:"$29K",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-guimaraes-arsenal",category:me,timeframe:"Sagas",question:"Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",probability:45,closes:"September 1, 2026",resolution:"Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline.",threadTopic:"Bruno Guimaraes Arsenal Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$204K",traders:"1,240",liquidity:"$36K",imageUrl:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",evidence:[]}];var Ze="https://faucet.circle.com/",dt="siftle_backend_wallet_migration_notice",We=null,R=()=>(We||(We=import("./chunks/arc-PMNEVJAY.js")),We),j=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,da=async()=>(await R()).connectArcWallet(),ge=async e=>(await R()).readArcUsdcBalance(e),ca=async(e,a,r,o)=>(await R()).payAiBriefingUnlock(e,a,r,o),pa=e=>{R().then(a=>a.resolveLocalTestMarketYes(e))},ma=async e=>(await R()).readArcMarketSnapshot(e);var Ut=async(e,a)=>(await R()).readArcMarketState(e,a),ua=async(e,a,r,o,s,n,i)=>(await R()).executeArcMarketOrder(e,a,r,o,s,n,i),fa=async(e,a,r,o,s)=>(await R()).executeArcOptionMarketOrder(e,a,r,o,s),Ct=()=>{R().then(e=>e.disconnectArcWallet())},ga=async(e,a)=>(await R()).claimArcMarketPayout(e,a),Ne=async()=>(await R()).getConnectedArcWallet(),ha=async()=>(await R()).validateArcSession(),va=async e=>(await R()).subscribeArcWallet(e),ba=["Sports"],ya="https://siftle.onrender.com",ka=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?ya:""},wa=ka(),E=e=>`${wa}${e}`,Et="siftle_theme",Sa=()=>{try{return window.localStorage.getItem(Et)==="light"?"light":"dark"}catch{return"dark"}},xe=Sa();function C(e){fetch(E("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e})}).catch(a=>console.error("Failed to track event:",a))}var t={activeSurface:"markets",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:5,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0},ye=null,X="global",J=null,ct=!1,pt=!1,mt=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";mt&&localStorage.setItem("siftle_pending_referral_code",mt.trim().toUpperCase());var It=20,I=De,xa=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},Me=()=>xa(t.portfolioMarketPreviews,I,De),$a=async()=>{t.loadingMarkets=!0,I.length===0&&(I=De);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(E("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(I=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Bt=async()=>{try{let e=await fetch(E("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Dt="siftle.savedUrls",te=new Set,tt=()=>{try{let e=localStorage.getItem(Dt)||"[]",a=JSON.parse(e);te=new Set(a.filter(Boolean))}catch{te=new Set}},Ta=()=>{try{localStorage.setItem(Dt,JSON.stringify(Array.from(te)))}catch{}},$e=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!te.has(e.sourceUrl)};tt();$e();var Xe=document.querySelector("#dateLabel"),ae=document.querySelector("#categoryTabs"),S=document.querySelector("#storyList"),T=document.querySelector("#storyDetail"),Ye=document.querySelector("#menuButton"),Ge=document.querySelector("#menuPanel"),M=document.querySelector("#menuStatus"),F=document.querySelector("#archiveDateSelect"),ut=document.querySelector("#archiveStatus"),Aa=document.querySelector("#todayButton"),He=document.querySelector(".brief-hero"),Re=document.querySelector("#archiveControls"),Le=document.querySelector("[data-surface='markets']"),Pe=document.querySelector("[data-surface='feed']"),Ue=document.querySelector("[data-surface='portfolio']"),Q=document.querySelector("#walletButton"),ke=document.querySelector("[data-theme-toggle]"),Ot=Array.from(document.querySelectorAll("[data-bottom-nav]")),Je,Ma=()=>{if(!ke)return;let a=`Switch to ${xe==="light"?"dark":"light"} mode`;ke.setAttribute("aria-label",a),ke.title=a,ke.dataset.activeTheme=xe},Nt=e=>{xe=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(Et,e)}catch{}Ma()};Nt(xe);var B=()=>{if(Q){let e=Q.querySelector(".wallet-button-label");Q.classList.toggle("connected",!!t.walletAddress),Q.disabled=t.walletConnecting,Q.setAttribute("aria-label",t.walletAddress?`Wallet ${j(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),Q.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${j(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",B);ke?.addEventListener("click",()=>{Nt(xe==="light"?"dark":"light")});var La=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(E("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&v("Referral connected"))}catch(r){console.warn(r)}},Te=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(E(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&W()}}},je=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,C("wallet_connect_start"),B();try{let e=await da();if(e){C("wallet_connect_success"),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ue(),t.walletBalance=await ge(e),await La(e),Te(),await q(),ie(!0).catch(r=>console.error("Failed to report leaderboard entry:",r));let a=localStorage.getItem(dt);a?(localStorage.removeItem(dt),v(a)):v("Connected to Arc Testnet"),window.location.hash="#portfolio",Ce()}}catch(e){C("wallet_connect_failed"),v(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,B()}}},v=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Je&&window.clearTimeout(Je),Je=window.setTimeout(()=>{a?.classList.remove("show")},1700)},Pa=(e,a,r,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let n=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",n),s.querySelector(".success-modal-action-btn")?.addEventListener("click",n),s.addEventListener("click",i=>{i.target===s&&n()})},Y=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},_t=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},Ua=()=>t.stories.filter(e=>t.showSaved?!!e.saved:t.activeCategory==="All"||e.category===t.activeCategory),we=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,Ca=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Ea=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let s=r.slice(0,a).join(" "),n=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return n>s.length*.45?s.slice(0,n+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},ft=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),Ca(a)?"":Ea(a)},K=(e,a)=>ft(a||"")||ft(e.summary)||e.headline,at=e=>{let a=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(a.length<=1)return`<p class="briefing-text">${e}</p>`;let r="";a[0].trim()&&(r+=`<p class="briefing-intro">${a[0].trim()}</p>`);for(let o=1;o<a.length;o+=2){let s=a[o].trim().toUpperCase(),n=a[o+1]?a[o+1].trim():"";if(!n)continue;let i="";if(s==="KEY POINTS"){let m=n.split(/(?:•|\*|-)\s+/).map(u=>u.trim()).filter(Boolean);m.length>0?i=`<ul class="briefing-list">${m.map(u=>`<li>${u}</li>`).join("")}</ul>`:i=`<p class="briefing-text">${n}</p>`}else i=`<p class="briefing-text">${n}</p>`;let d=s.toLowerCase().replace(/\s+/g,"-");r+=`
      <div class="briefing-section ${d}-section">
        <h4 class="briefing-title">${s}</h4>
        ${i}
      </div>
    `}return r},Ht=e=>`siftle_ai_briefing_unlock_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Rt=e=>localStorage.getItem(Ht(e))||"",re=e=>!!Rt(e),jt=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:te.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Ia=e=>{let a=t.stories.find(s=>s.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=I.find(n=>n.id===t.selectedMarketId);if(s){let n=qe(s).evidence.find(i=>i.sourceUrl===e);if(n)return jt(s,n)}}return null},rt=(e,a)=>{let r=za(e,a);return r===null?null:r-It*60*1e3},zt=(e,a)=>{let r=rt(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},qt=(e,a)=>{let r=rt(e,a);return r===null?null:Date.now()>=r?`Locked ${It}m before kickoff`:null},Ba=(e,a)=>`
  <div class="briefing-section">
    <h4 class="briefing-title">AI briefing</h4>
    ${a?`
        <p class="briefing-text">Preparing your AI briefing...</p>
        ${he()}
      `:`
        <p class="briefing-text">Get the key points, what happened, and the takeaway.</p>
        <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
          AI briefing
        </button>
      `}
  </div>
`,Qe=async(e,a=!1)=>{if(!t.walletAddress){v("Please sign in first.");return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,C("ai_unlock_attempt"),h();try{let r=await fetch(E("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let s=await ca(o.treasuryAddress,Number(o.amountUsdc)||.05,m=>{M&&(M.textContent=m)},{sourceUrl:e.sourceUrl,topic:e.headline}),n=await fetch(E("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:s})}),i=await n.json();if(!n.ok||!i.unlockToken)throw new Error(i.error||"AI briefing failed");localStorage.setItem(Ht(e),i.unlockToken),C("ai_unlock_success"),(Number(i?.bonus?.points)||0)>0&&ie(!1).catch(m=>console.error("Failed to refresh leaderboard bonus:",m)),await ze(e)}catch(r){C("ai_unlock_failed"),v(r instanceof Error?r.message:"AI briefing failed")}finally{t.unlockingSummaryUrl=null,h()}}},ze=async e=>{if(re(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=K(e,e.ai_summary),C("view_summary"),M&&(M.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded"),h();return}t.loadingSummaryUrl=e.sourceUrl,h();try{let a=await fetch(E("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Rt(e)})});if(!a.ok)throw new Error(`Summary request failed with ${a.status}`);let r=await a.json();t.aiSummaries[e.sourceUrl]=K(e,r.summary),M&&r.provider&&(M.textContent=r.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${r.provider}`)}catch(a){console.warn(a),t.aiSummaries[e.sourceUrl]=K(e),M&&(M.textContent="Summary fallback loaded")}finally{t.loadingSummaryUrl=null,h()}}},Ft=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);r&&(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),h(),a&&!re(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),h(),Qe(r,!0)):re(r)&&ze(r),window.scrollTo({top:0,behavior:"smooth"}))},Da=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),h(),Wt(e),window.scrollTo({top:0,behavior:"smooth"})},Oa=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.history.pushState({},"","#feed"),h(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Wt=async e=>{try{let a=await fetch(E(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),M&&(M.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),v("That timeline no longer has a verified past update"),M&&(M.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,h()}};function Ce(){if(window.location.hash==="#resolve-local-yes"){let a=I.find(r=>r.id==="siftle-local-test-2")||I.find(r=>r.timeframe==="Daily"&&G(r).startsWith("0x00000000000000000000000000000000000001"));if(a){pa(G(a)),Qa(a,"yes"),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),v("Local test market resolved YES"),q().then(()=>{ie(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),B(),W()});return}}let e=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||e){t.activeSurface="markets",t.selectedMarketId=e?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,h();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let a=window.location.hash.match(/^#story-(\d+)$/),r=window.location.hash.match(/^#thread-(\d+)$/),o=a?t.stories.find(i=>i.id===Number(a[1])):void 0,s=r?t.stories.find(i=>i.id===Number(r[1])):void 0,n=t.selectedStoryId!==null||t.selectedThreadUrl!==null;t.selectedStoryId=o?.id??null,t.selectedThreadUrl=s?.sourceUrl??null,t.activeThread=null,h(),o&&ze(o),s&&Wt(s),!o&&!s&&n&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}));return}t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h()}var et=e=>{ut&&(ut.textContent=e)},Na=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Yt(),h());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(E(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],$e(),t.hasLoadedFeed=!0,Xe&&(Xe.textContent=_t(s.date??t.activeArchiveDate)),M)if(t.activeArchiveDate)M.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=s.archive?.provider==="shelby"?"Shelby":"local archive";M.textContent=`Latest published feed loaded from ${n}`}et(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),$e(),M&&(M.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,h(),Ce()}},_a=async()=>{if(F)try{let e=await fetch(E("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),F.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),F.value=t.activeArchiveDate??"",et(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),et("Archive unavailable")}},Ee=()=>{ct||(ct=!0,_a())},se=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Na(e,a)},Ha=()=>{pt||(pt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&se(t.activeCategory,!0),Ee()},8e3))},Ra=e=>e==="All"?"For you":e==="Sports"?"Football":e,z=e=>e==="Sports"?"Football":e,Yt=()=>{ae&&(ae.innerHTML=ba.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${Ra(e)}
        </button>
      `).join(""))},Gt=e=>(e.thread?.count??0)>=1,ja=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Jt=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),s=new Date(r.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),qe=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},za=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},qa=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,Fa=(e,a)=>({date:qa(e,a),source:e.source,headline:e.headline,summary:K(e,e.ai_summary),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Kt=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(E(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...Jt(r.items??[])],s=o.filter((d,m,u)=>u.findIndex(f=>f.sourceUrl===d.sourceUrl)===m).map(Fa),i=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:s,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&h()}}},G=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",ne=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],oe=e=>!!(e.optionMarket&&ne(e).length>1),Wa=e=>{let a=ne(e);return a.find(r=>r.id===t.marketTradeOptionId)||a[0]||null},D=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),L=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),ot=e=>`siftle_profile_username_${e.toLowerCase()}`,Vt=e=>e.trim().replace(/\s+/g," ").slice(0,15),ue=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=ot(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=Vt(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},Ya=e=>{if(!t.walletAddress)return;let a=ot(t.walletAddress),r=Vt(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},Ga=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},Zt=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:5,max:10,fallback:5}},Ie=(e,a,r,o)=>{let{min:s,max:n,fallback:i}=Zt(a,r,o);return Number.isFinite(e)?Math.min(n,Math.max(s,e)):i},Xt=(e,a,r,o,s)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let n=a==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,i=e.yesSharesUsdc,d=e.noSharesUsdc;if(o==="sell")return Math.min(r,n);let m=(a==="yes"?i:d)+r,u=i+d+r;return m<=0||u<=0?r:(n+r)/m*u},Qt=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},Ja=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},ea=e=>`siftle_claimed_markets_${e.toLowerCase()}`,_e=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(ea(t.walletAddress))||"[]"))}catch{return new Set}},Ka=e=>{if(!t.walletAddress)return;let a=_e();a.add(e),localStorage.setItem(ea(t.walletAddress),JSON.stringify(Array.from(a)))},Fe=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),ee=(e,a,r)=>{let o=r?.yesSharesUsdc??0,s=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:s>0:a==="yes"?s<=0:o<=0},st=(e,a,r)=>{if(ee(e,a,r))return a;let o=a==="yes"?"no":"yes";return ee(e,o,r)?o:a};var Va=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},Ke=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`},ta="siftle_leaderboard_cache_v3_",gt=e=>{let a=String(e||"").match(/(\d+)\s+wins?/i),r=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:a&&Number(a[1])||0,losses:r&&Number(r[1])||0}},ht=e=>{try{let a=JSON.parse(localStorage.getItem(`${ta}${e}`)||"null");return Array.isArray(a?.players)&&a.players.length?a:null}catch{return null}},Ve=(e,a)=>{if(!(!Array.isArray(a?.players)||a.players.length===0))try{localStorage.setItem(`${ta}${e}`,JSON.stringify({...a,cachedAt:Date.now()}))}catch{}},aa=(e,a)=>{let r=gt(e?.status||""),o=gt(a?.status||""),s=(Number(a?.points)||0)-(Number(e?.points)||0);return s||(o.wins!==r.wins?o.wins-r.wins:r.losses!==o.losses?r.losses-o.losses:String(e?.username||"").localeCompare(String(a?.username||"")))},Za=e=>{let a=String(e?.displayName||"").trim().toLowerCase();return a&&!/^0x[a-f0-9]{40}$/i.test(a)?`name:${a}`:`wallet:${String(e?.username||"").toLowerCase()}`},Xa=e=>{let a=new Map;return e.forEach(r=>{let o=Za(r);if(!o||o==="wallet:")return;let s=a.get(o);if(!s){a.set(o,r);return}a.set(o,aa(s,r)<=0?s:r)}),Array.from(a.values())},vt=(e,a=[],r=!1)=>{let o=new Map(a.map(d=>[String(d?.username||"").toLowerCase(),d])),s=new Set,n=e.map(d=>{let m=String(d?.username||"").toLowerCase();s.add(m);let u=o.get(m);return u&&(Number(u.points)||0)>(Number(d.points)||0)?{...d,...u}:d});a.forEach(d=>{let m=String(d?.username||"").toLowerCase();m&&!s.has(m)&&(Number(d?.points)||0)>0&&n.push(d)});let i=Xa(n).slice().sort(aa);return r?i.map((d,m)=>({...d,globalRank:m+1})):i},bt=()=>`
  <div class="leaderboard-sync-note" role="status">
    Showing saved standings while Siftle refreshes live scores...
  </div>
`,nt=()=>{let e=0,a=0,r=0,o=I.filter(i=>i.timeframe==="Daily").map(i=>i.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(s)try{n=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,a++;continue}if(n[i]?.result==="loss"){r++;continue}let d=t.marketPositions[i],u=t.marketSnapshots[i]?.outcome??0;if(u===0)continue;let f=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,p=[];try{p=JSON.parse(localStorage.getItem(f)||"[]")}catch{}let g=p.includes("yes")&&p.includes("no");if(u===1&&d&&d.yesSharesUsdc>0){let l=g?50:100;e+=l,a++,n[i]={result:"win",points:l}}else if(u===2&&d&&d.noSharesUsdc>0){let l=g?50:100;e+=l,a++,n[i]={result:"win",points:l}}else d&&(d.yesSharesUsdc>0||d.noSharesUsdc>0)&&(r++,n[i]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(n)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},Qa=(e,a)=>{let r=G(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,s=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(o))continue;let d=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(d)&&s.add(d)}s.forEach(n=>{let i=`${o}${n}`,d={yesSharesUsdc:0,noSharesUsdc:0};try{d=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let m=(Number(d.yesSharesUsdc)||0)>0,u=(Number(d.noSharesUsdc)||0)>0;if(!m&&!u)return;let f=`siftle_traded_sides_${e.id}_${n}`,p=[];try{p=JSON.parse(localStorage.getItem(f)||"[]")}catch{}let g=p.includes("yes")&&p.includes("no"),l=a==="yes"?m:u,c=`siftle_resolved_results_${n}`,b={};try{b=JSON.parse(localStorage.getItem(c)||"{}")}catch{}b[e.id]={result:l?"win":"loss",points:l?g?50:100:0},localStorage.setItem(c,JSON.stringify(b));let x=0,k=0,$=0;Object.values(b).forEach(w=>{w.result==="win"?(k+=1,x+=Number(w.points)||0):w.result==="loss"&&($+=1)});let y=localStorage.getItem(ot(n))||"";fetch(E("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:y,points:x,status:`${k} win${k===1?"":"s"}, ${$} loss${$===1?"":"es"}`})}).catch(w=>console.error("Failed to report local resolved score:",w))})},ie=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?nt():null,r=await fetch(E("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},er=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(r)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(E("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},tr=async e=>{let a=G(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(oe(e)&&!t.walletAddress){t.marketSnapshots[e.id]={yesPriceCents:0,noPriceCents:0,volumeUsdc:0,yesSharesUsdc:0,noSharesUsdc:0,outcome:0,optionPools:Object.fromEntries(ne(e).map(r=>[r.id,0])),resolvedOptionId:null,traderCount:0},t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(oe(e)&&t.walletAddress){let{position:r,snapshot:o}=await Ut(a,t.walletAddress);t.marketPositions[e.id]=r,t.marketSnapshots[e.id]=o}else t.marketSnapshots[e.id]=await ma(a)}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&h()}}},q=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Bt();let a=Me(),r=await Promise.all(a.map(async o=>{let s=G(o);if(!s)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:n,snapshot:i}=await Ut(s,t.walletAddress);return t.marketSnapshots[o.id]=i,[o.id,n]}catch(n){return console.warn(`Failed to load portfolio market ${o.id}:`,n),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,ie(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&h()}}},ar=async(e,a)=>{if(!t.walletAddress){v("Session expired or wallet not connected. Please sign in."),je();return}let r=Me().find(u=>u.id===e);if(!r)return;t.marketTradeSide=a;let o=G(r);if(!o){v("Deploy this Arc market contract before trading"),h();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await q(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){v("Still loading your position. Try again in a moment."),h();return}let s=t.marketSnapshots[r.id];if(Fe(r,s)){t.tradeDrawerOpen=!1,v("This market is resolved and can no longer be traded."),h();return}let n=s?.yesPriceCents??r.probability,i=s?.noPriceCents??100-r.probability,d=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!ee(t.marketOrderMode,a,d)){let u=Ja(d),f=t.marketOrderMode==="sell"?u?`You can only exit your ${u.toUpperCase()} shares.`:"You do not have shares to exit in this market.":u?`Exit your ${u.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";v(f),t.marketTradeSide=st(t.marketOrderMode,a,d),h();return}let m=Ie(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,d);t.marketTradeAmount=m,C("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",h();let u=await ua(o,t.marketOrderMode,a,m,f=>{t.marketTradeStatus=f,h()},n,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await Ne(),t.walletAddress&&(t.walletBalance=await ge(t.walletAddress)),await q({force:!0}),ie(!0).catch(f=>console.error("Failed to report leaderboard entry:",f)),t.walletAddress){let f=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,p={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let l=localStorage.getItem(f);if(l){let c=JSON.parse(l);p={yesCost:c.yesCost||0,noCost:c.noCost||0,yesShares:c.yesShares||0,noShares:c.noShares||0}}}catch{}let g=m;if(t.marketOrderMode==="buy"){let l=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,c=[];try{c=JSON.parse(localStorage.getItem(l)||"[]")}catch{}c.includes(a)||(c.push(a),localStorage.setItem(l,JSON.stringify(c))),a==="yes"?(p.yesCost+=g,p.yesShares=(p.yesShares||0)+g/(n/100)):(p.noCost+=g,p.noShares=(p.noShares||0)+g/(i/100))}else{let l=t.marketPositions[r.id];if(l){if(a==="yes"&&l.yesSharesUsdc>0){let c=Math.min(1,g/l.yesSharesUsdc);p.yesCost=Math.max(0,p.yesCost-p.yesCost*c),p.yesShares=Math.max(0,(p.yesShares||0)-(p.yesShares||0)*c)}else if(a==="no"&&l.noSharesUsdc>0){let c=Math.min(1,g/l.noSharesUsdc);p.noCost=Math.max(0,p.noCost-p.noCost*c),p.noShares=Math.max(0,(p.noShares||0)-(p.noShares||0)*c)}}}localStorage.setItem(f,JSON.stringify(p))}v(`Trade confirmed ${u.slice(0,8)}...`),C(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Pa(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(u){C("trade_failed"),Va(u)?(Ct(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ue(),v("Session expired. Please sign in again.")):v(u instanceof Error?u.message:"Arc trade failed")}finally{t.marketTradeStatus=null,B(),h()}},yt=e=>Gt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",kt=e=>Gt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",wt=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',St=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',ve=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,rr=()=>`
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
`,or=(e=4)=>`${ve("Loading stories")}${Array.from({length:e},rr).join("")}`,he=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${ve("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,sr=(e=3)=>`
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
`;var nr=(e=3)=>`
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
`,ir=(e=2)=>`
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
`,Ae=()=>{if(!S)return;let e=Ua();if(S.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){S.innerHTML=or(4);return}if(e.length===0){let a=t.showSaved?[]:t.stories;if(a.length>0){S.innerHTML=a.map(r=>`
        <article class="story-card" data-story-id="${r.id}" role="button" tabindex="0" aria-label="Open summary for ${r.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${r.source}</strong>
                <span>${we(r)} - ${r.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${r.sourceUrl}" aria-pressed="${r.saved?"true":"false"}" aria-label="${r.saved?"Remove saved story":"Save story"}">
                ${wt()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${r.id}" aria-expanded="${t.activeShareStoryId===r.id}">
                  ${St()}
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
            <span class="category-chip ${r.category}">${z(r.category)}</span>
            <h2>${r.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${yt(r)}
            ${/example\\.com/i.test(r.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${r.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${r.category}">${z(r.category)}</span>
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
                <span class="mobile-card-time">${we(r)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${r.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${kt(r)}
              ${/example\\.com/i.test(r.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${r.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("");return}S.innerHTML="";return}S.innerHTML=e.map(a=>`
        <article class="story-card" data-story-id="${a.id}" role="button" tabindex="0" aria-label="Open summary for ${a.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${a.source}</strong>
                <span>${we(a)} - ${a.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${a.sourceUrl}" aria-pressed="${a.saved?"true":"false"}" aria-label="${a.saved?"Remove saved story":"Save story"}">
                ${wt()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${a.id}" aria-expanded="${t.activeShareStoryId===a.id}">
                  ${St()}
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
            <span class="category-chip ${a.category}">${z(a.category)}</span>
            <h2>${a.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${yt(a)}
            ${/example\\.com/i.test(a.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${a.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${a.category}">${z(a.category)}</span>
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
                <span class="mobile-card-time">${we(a)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${a.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${kt(a)}
              ${/example\\.com/i.test(a.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${a.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("")},xt=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),Se=(e,a,r,o,s,n)=>{e.beginPath(),e.moveTo(a+n,r),e.lineTo(a+o-n,r),e.quadraticCurveTo(a+o,r,a+o,r+n),e.lineTo(a+o,r+s-n),e.quadraticCurveTo(a+o,r+s,a+o-n,r+s),e.lineTo(a+n,r+s),e.quadraticCurveTo(a,r+s,a,r+s-n),e.lineTo(a,r+n),e.quadraticCurveTo(a,r,a+n,r),e.closePath()},lr=(e,a,r,o,s,n,i)=>{let d=a.split(/\s+/).filter(Boolean),m=[],u="";for(let f of d){let p=u?`${u} ${f}`:f;if(e.measureText(p).width<=s){u=p;continue}if(u&&m.push(u),u=f,m.length===i)break}if(u&&m.length<i&&m.push(u),d.length>0&&m.length===i){for(;e.measureText(`${m[i-1]}...`).width>s&&m[i-1].length>0;)m[i-1]=m[i-1].slice(0,-1).trim();m[i-1]=`${m[i-1]}...`}return m.forEach((f,p)=>e.fillText(f,r,o+p*n)),o+m.length*n},dr=(e,a,r,o,s,n,i)=>{let d=Math.max(s/a.naturalWidth,n/a.naturalHeight),m=s/d,u=n/d,f=(a.naturalWidth-m)/2,p=(a.naturalHeight-u)/2;e.save(),Se(e,r,o,s,n,i),e.clip(),e.drawImage(a,f,p,m,u,r,o,s,n),e.restore()},$t=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),Tt=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))):"",cr=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",At=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",Se(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await xt("./assets/siftle-logo-small.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${Tt(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(a){let d=await xt(cr(e.imageUrl)).catch(()=>null);d?dr(o,d,110,n,860,520,28):(o.fillStyle="#eef2ff",Se(o,110,n,860,520,28),o.fill())}else o.fillStyle="#eef2ff",Se(o,110,n,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",Se(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(z(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",lr(o,Tt(e.headline),110,888,860,54,4),r},ra=async e=>{let a=await At(e,!0);try{return await $t(a)}catch{return $t(await At(e,!1))}},oa=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,sa=async e=>{let a=await ra(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=oa(e),o.click(),URL.revokeObjectURL(r)},pr=async e=>{let a=await ra(e),r=new File([a],oa(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await sa(e)},mr=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,Ae(),v(a==="share"?"Preparing share image":"Preparing download"),M&&(M.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await pr(r):await sa(r),v(a==="share"?"Share image ready":"Image saved"),M&&(M.textContent="Branded story image ready")}catch(o){console.warn(o),v("Image export unavailable"),M&&(M.textContent="Image export was cancelled or unavailable")}}},Mt=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl;return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${z(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${K(e,e.ai_summary)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${r?"disabled":""}>${r?"Preparing...":"AI briefing"}</button>
      </div>
      ${r?`<div style="margin-top: 12px;">${he()}</div>`:re(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${he()}</div>`:`<div style="margin-top: 12px;">${at(K(e,t.aiSummaries[e.sourceUrl]||e.ai_summary))}</div>`:""}
    </div>
  </article>
`},ur=async(e,a)=>{if(!t.walletAddress){v("Session expired or wallet not connected. Please sign in."),je();return}let r=Me().find(u=>u.id===e);if(!r||!oe(r))return;let o=ne(r).find(u=>u.id===a);if(!o){v("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await q(),t.marketTradeStatus=null);let s=t.marketSnapshots[r.id];if(Fe(r,s)){v("This market is resolved and can no longer be traded.");return}let n=t.marketPositions[r.id],i=t.marketOrderMode==="sell";if(!i&&n?.optionId){v("Your pick is already locked for this market.");return}if(i&&!n?.optionId){v("You do not have a pick to exit.");return}let d=Math.max(0,Number(n?.optionSharesUsdc)||0);if(i&&d<=0){v("Your pick is still loading. Please try again."),await q({force:!0});return}let m=i?d:Ie(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=m,t.marketTradeOptionId=i&&n?.optionId||o.id,C("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",h(),await fa(r.id,i?"sell":"buy",i&&n?.optionId||o.id,m,u=>{t.marketTradeStatus=u,h()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await Ne(),t.walletAddress&&(t.walletBalance=await ge(t.walletAddress)),await q({force:!0}),C("trade_success"),v(i?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(u){C("trade_failed"),v(u instanceof Error?u.message:"Trade failed")}finally{t.marketTradeStatus=null,B(),h()}},fr=()=>{if(!T||!S)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(S.hidden=!0,T.hidden=!1,T.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){T.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){T.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${sr(3)}
        </article>
      </div>
    `;return}T.innerHTML=`
    <div class="detail-container thread-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card thread-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${z(e.category)}</span>
          <span>${ja(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${Mt(e,"Latest")}
          ${Jt(r?.items??[]).map(o=>Mt(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},gr=()=>{if(!T||!S)return;if(t.selectedThreadUrl){fr();return}let e=t.stories.find(n=>n.id===t.selectedStoryId);if(!e){T.hidden=!0,T.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),S.hidden=!1;return}let a=K(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=re(e),s=t.unlockingSummaryUrl===e.sourceUrl;S.hidden=!0,T.hidden=!1,T.classList.add("fullscreen"),document.body.classList.add("detail-mode"),T.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${z(e.category)}</span>
          <span>${e.source} - ${we(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?r?he():at(a):Ba(e,s)}
        </section>
        <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `},hr=e=>{let a=t.marketSnapshots[e.id],r=G(e),o=oe(e),s=ne(e).length,n=a?.yesPriceCents,i=n??e.probability,d=o?`${s}`:`${i}%`,m=n===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${n}\xA2 \xB7 No ${100-n}\xA2`,u=n===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:m,f=qe(e),p=e.timeframe==="Daily"?zt(e,a):e.closes;return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${z(e.category)}</span>
          <span class="timeframe-chip ${e.timeframe}">${e.timeframe==="Sagas"?"Sagas":e.timeframe}</span>
        </div>
        <span class="market-card-updates">${f.evidence.length} updates</span>
      </div>
      <div class="market-card-body" style="display: flex; gap: 16px; align-items: flex-start; justify-content: space-between; width: 100%; text-align: left; margin: 4px 0;">
        <div class="market-card-text" style="flex: 1; min-width: 0;">
          <h2>${e.question}</h2>
        </div>
        ${f.imageUrl?`
        <div class="market-card-image-frame" style="width: 72px; height: 72px; min-width: 72px; border-radius: 12px; overflow: hidden; border: 1px solid var(--market-border); flex-shrink: 0;">
          <img src="${f.imageUrl}" alt="" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        `:""}
      </div>
      <div class="market-probability-row">
        <strong>${d}</strong>
        <span>${o?"possible outcomes":r?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${o?"Pick exactly one":u}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${o?100:i}%"></span></div>
      <div class="market-card-footer">
        <span>${f.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${p}`:`Closes ${p}`}</span>
      </div>
    </button>
  `},vr=e=>{let a=qe(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,n=a.evidence[0],i=n?n.headline:"No updates yet",d=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${d}`},br=e=>{if(!S||!T)return;let a=qe(e),r=!t.checkedMarketEvidence[e.id],o=G(e),s=t.marketSnapshots[e.id],n=oe(e),i=ne(e);n&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let d=Wa(e),m=!!(o&&!s),u=s?.yesPriceCents??(o?e.probability:0),f=s?.noPriceCents??(o?100-e.probability:0),p=m?"":o?`${u}\xA2`:"--",g=m?"":o?`${f}\xA2`:"--",l=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},c=!!l.optionId;n&&c&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),n&&!c&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let b=n&&t.marketOrderMode==="sell"&&c?Math.max(0,Number(l.optionSharesUsdc)||0):0,x=b>0?b:Ie(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,l),k=b>0?{min:0,max:b}:Zt(t.marketOrderMode,t.marketTradeSide,l),$=t.marketOrderMode==="buy"?"$5-$10 USDC":`Up to $${D(k.max)} USDC`,y=!t.walletAddress||t.hasLoadedPortfolioPositions,w=Fe(e,s),P=qt(e,s),U=!!P;n||(t.marketTradeSide=st(t.marketOrderMode,t.marketTradeSide,l));let O=!n&&!w&&!U&&y&&ee(t.marketOrderMode,"yes",l),H=!n&&!w&&!U&&y&&ee(t.marketOrderMode,"no",l),le=n?!w&&!U&&y&&(t.marketOrderMode==="sell"?c:!c&&!!d):!w&&!U&&y&&ee(t.marketOrderMode,t.marketTradeSide,l),N=w?"Market resolved":P||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),de=w?"Market resolved":P||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),ce=n?x:Xt(s,t.marketTradeSide,x,t.marketOrderMode,l),pe=t.marketOrderMode==="buy"?"Buy":"Exit",V=n?"Pick one outcome":o?"Arc testnet live":"Contract not deployed";S.hidden=!0,T.hidden=!1,T.classList.add("fullscreen"),document.body.classList.add("detail-mode"),tr(e),Kt(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&q({force:!t.hasLoadedPortfolioPositions});let Be=n?!!l.optionId:l.yesSharesUsdc>0||l.noSharesUsdc>0,be="";if(n&&Be&&t.walletAddress){let A=s?.optionPools?.[l.optionId||""]||0,_=s?.volumeUsdc||0,Z=l.optionSharesUsdc&&A>0?l.optionSharesUsdc/A*_:0;be=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${L(l.optionLabel||"Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${D(Z||l.optionSharesUsdc||0)}</strong>
          </div>
        </div>
      </div>
    `}else Be&&t.walletAddress&&(be=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${Qt(l,s).map(_=>`
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${_.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${D(_.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${D(_.payout)}</strong>
            </div>
          </div>
        `).join("")}
        <div style="border-top: 1px solid var(--market-border); padding-top: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--market-text-muted);">Winning side splits the final pool</span>
        </div>
      </div>
    `);T.innerHTML=`
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
            <span class="category-chip ${e.category}">${z(e.category)}</span>
            <span class="market-status-pill">${V}</span>
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
              <span>${rt(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${zt(e,s)}</strong>
            </div>
            <div class="market-stat">
              <span>Volume</span>
              <strong>${s?`$${Math.round(s.volumeUsdc).toLocaleString()}`:e.volume}</strong>
            </div>
          </div>

          <div class="market-resolution-panel">
            <h3>Resolution Rules</h3>
            <p>${e.resolution}</p>
            ${P?`<p style="margin-top: 10px; color: #f59e0b; font-weight: 600;">${P}</p>`:""}
          </div>

          <section class="market-evidence-thread">
            <header>
              <h3>Related News</h3>
              <span>${r?"Loading...":`${a.evidence.length} stories`}</span>
            </header>
            <p class="market-thread-intro">Read the stories connected to this market, newest first.</p>
            <div class="market-thread-timeline">
              ${r?nr(3):a.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':a.evidence.map(A=>{let _=jt(e,A),Z=t.unlockingSummaryUrl===A.sourceUrl;return`
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
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(A.sourceUrl)}" ${Z?"disabled":""}>${Z?"Preparing...":"AI briefing"}</button>
                    </div>
                    ${Z?`<div style="margin-top: 12px;">${he()}</div>`:re(_)?t.loadingSummaryUrl===A.sourceUrl?`<div style="margin-top: 12px;">${he()}</div>`:`<div style="margin-top: 12px;">${at(K(_,t.aiSummaries[A.sourceUrl]))}</div>`:""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${n?`<span>${c?"Pick locked":"Choose one option"}</span><span><strong>${i.length} options</strong></span>`:`<span>Yes <strong>${p}</strong></span><span>No <strong>${g}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${w||U?"disabled":""}>
          ${w?"Market Resolved":P||(n?c?"Pick Locked":"Pick Outcome":"Trade Market")}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${w||U?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${w||U?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?i.map(A=>{let _=s?.optionPools?.[A.id]||0,Z=t.marketTradeOptionId===A.id||l.optionId===A.id,lt=w||U||t.marketOrderMode==="sell"||c||!y;return`
                  <button type="button" class="market-side option ${Z?"active":""} ${lt?"disabled":""}" data-market-option-id="${L(A.id)}" ${lt?"disabled":""}>
                    <span>${L(A.label)}</span>
                    <strong>$${D(_)}</strong>
                    ${l.optionId===A.id?"<small>Your pick</small>":""}
                  </button>
                `}).join(""):m?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${O?"":"disabled"}" data-market-trade-side="yes" ${O?"":"disabled"} title="${O?"Yes":N}">
                  <span>Yes</span>
                  <strong>${p}</strong>
                  ${O?"":`<small>${N}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${H?"":"disabled"}" data-market-trade-side="no" ${H?"":"disabled"} title="${H?"No":de}">
                  <span>No</span>
                  <strong>${g}</strong>
                  ${H?"":`<small>${de}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${$}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${k.min.toFixed(2)}" max="${Math.max(k.min,k.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${x}" data-market-amount ${w||U?"disabled":""} />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>${n?"Your entry":t.marketOrderMode==="buy"?"Projected payout":"Exit amount"}</span>
            <strong>$${D(ce)}</strong>
          </div>

          <div class="drawer-action-container">
            ${m?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:w?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':U?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${P}</button>`:t.walletAddress?y?n&&t.marketOrderMode==="sell"&&c?`<button type="button" class="market-submit-button" data-market-option-trade="${L(l.optionId||"")}">Exit pick</button>`:le?n?`<button type="button" class="market-submit-button" data-market-option-trade="${L(d?.id||"")}">Confirm ${L(d?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${pe} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${pe.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},na=()=>{if(!S||!T)return;if(He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Le?.classList.add("active"),Pe?.classList.remove("active"),Ue?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&I.forEach(n=>{Kt(n)})},750),t.selectedMarketId){let n=I.find(i=>i.id===t.selectedMarketId);if(n){br(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),T.hidden=!0,T.classList.remove("fullscreen"),S.hidden=!1,S.classList.add("markets-list");let e=I,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(n=>{let i=t.activeMarketTimeframe===n,d=n==="All"?e.length:e.filter(u=>u.timeframe===n).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${n}">
            <span>${n==="Sagas"?"Sagas":n}</span>
            <span class="timeframe-tab-count">${d}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&I.length===0){S.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${Ze}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
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
          ${d.map(hr).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(m=>m.timeframe==="Daily"),i=e.filter(m=>m.timeframe==="Weekly"),d=e.filter(m=>m.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",n)}
      ${s("Weekly","Ends in a week",i)}
      ${s("Sagas (Long-term)","Narratives & futures",d)}
    `}else{let n=e.filter(m=>m.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,d="";t.activeMarketTimeframe==="Daily"?d="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?d="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",d="Narratives & futures"),o=`
      ${s(i,d,n)}
    `}S.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${Ze}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},ia=()=>{if(!S||!T)return;He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Le?.classList.remove("active"),Pe?.classList.remove("active"),Ue?.classList.remove("active"),document.body.classList.remove("detail-mode"),T.hidden=!0,S.hidden=!1,S.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?nt():null;t.walletAddress&&e&&fetch(E("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(l=>console.error("Failed to report user score:",l)),J&&(clearInterval(J),J=null),S.innerHTML=`
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
  `;let a=(l="2026-07-19T23:59:59.000Z")=>{let c=document.getElementById("seasonTimer");J&&clearInterval(J);let b=()=>{let k=new Date(l).getTime()-new Date().getTime();if(k<=0){c&&(c.innerText="Season Finished!"),J&&clearInterval(J);return}let $=Math.floor(k/(1e3*60*60*24)),y=Math.floor(k%(1e3*60*60*24)/(1e3*60*60)),w=Math.floor(k%(1e3*60*60)/(1e3*60)),P=Math.floor(k%(1e3*60)/1e3);c&&(c.innerText=`${$}d ${y}h ${w}m ${P}s`)};b(),J=setInterval(b,1e3)};a();let r=l=>l.map((c,b)=>{let x=Number(c.globalRank)||b+1,k=String(c.username||""),$=!!(t.walletAddress&&k.toLowerCase()===t.walletAddress.toLowerCase()),y=$&&t.profileUsername?t.profileUsername:c.displayName||k,w=$?`${t.profileUsername?y:j(k)} (You)`:y.startsWith("0x")&&y.length===42?j(y):y,P=L(w),U=L(Ke(c.status)),O=c.nextSeasonDivision?`Division ${c.nextSeasonDivision}`:"Qualify",H=x<=10?"promotion-zone":"safety-zone",le=x<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${$?"user-highlight":""} ${H}" role="listitem">
        <div class="leaderboard-row-left">
          ${le}
          <span class="leaderboard-rank rank-${x}">${x}</span>
          <span class="leaderboard-username">${P}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(c.points)||0} pts</strong>
          <span>${c.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${L(O)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${U}</span>
        </div>
      </div>
    `}).join(""),o=l=>l.map((c,b)=>{let x=b+1,k=String(c.username||""),$=!!(t.walletAddress&&k.toLowerCase()===t.walletAddress.toLowerCase()),y=$&&t.profileUsername?t.profileUsername:c.displayName||k,w=L(Ke(c.status)),P=$?`${t.profileUsername?y:j(k)} (You)`:y.startsWith("0x")&&y.length===42?j(y):y,U=L(P),O="safety-zone",H='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return x<=2?(O="promotion-zone",H='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):x>=5&&(O="relegation-zone",H='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${$?"user-highlight":""} ${O}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${H}
          <span class="leaderboard-rank rank-${x}" style="flex-shrink: 0; margin-right: 4px;">${x}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${U}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(c.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${w}</span>
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
    `)},i=()=>{s("global");let l=document.getElementById("leaderboardListContainer"),c="global",b=ht(c);b&&l?(l.innerHTML=bt()+r(b.players),b.seasonEndsAt&&a(b.seasonEndsAt)):n(10);let x=new URLSearchParams;t.walletAddress&&x.set("walletAddress",t.walletAddress);let k=x.toString();fetch(E(`/api/leaderboard/global${k?`?${k}`:""}`)).then($=>$.json()).then($=>{let y=vt($.players||[],b?.players||[],!0);l&&(l.innerHTML=y.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the global leaderboard yet.</p>`:r(y)),Ve(c,{players:y,seasonEndsAt:$.seasonEndsAt}),a($.seasonEndsAt)}).catch($=>{console.error("Failed to load global leaderboard:",$),l&&(l.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading global leaderboard. Please try again.</p>`)})},d=l=>{s("division");let c=document.getElementById("leaderboardListContainer"),b=`division_${l||ye||"current"}`,x=ht(b);x&&c?(c.innerHTML=bt()+o(x.players),x.divisionNumber&&(ye=x.divisionNumber),x.seasonEndsAt&&a(x.seasonEndsAt)):c&&l!==void 0&&(c.innerHTML=`
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
      `);let k=new URLSearchParams;t.walletAddress&&k.set("walletAddress",t.walletAddress),l&&k.set("division",String(l));let $=k.toString();fetch(E(`/api/leaderboard/division${$?`?${$}`:""}`)).then(y=>y.json()).then(y=>{let w=y.divisionNumber||1,P=vt(y.players||[],x?.players||[],!1),U=y.totalDivisions||1,O=y.seasonEndsAt;ye=w;let H=document.getElementById("divisionTitleText");H&&(H.innerText=`Division ${w}`);let le=document.getElementById("divisionSelector");le&&(le.innerHTML=Array.from({length:U},(N,de)=>de+1).map(N=>`
            <option value="${N}" ${N===w?"selected":""}>Division ${N}</option>
          `).join("")),c&&(P.length===0?c.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No active players in this division.</p>`:c.innerHTML=P.map((N,de)=>{let ce=de+1,pe=t.walletAddress&&N.username.toLowerCase()===t.walletAddress.toLowerCase(),V=pe&&t.profileUsername?t.profileUsername:N.displayName||N.username,it=L(Ke(N.status)),Be=pe?`${t.profileUsername?V:j(N.username)} (You)`:V.startsWith("0x")&&V.length===42?j(V):V,be=L(Be),A="safety-zone",_='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return ce<=2?(A="promotion-zone",_='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):ce>=5&&(A="relegation-zone",_='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
                <div class="leaderboard-row ${pe?"user-highlight":""} ${A}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
                  <!-- Left Side: Arrow + Rank + Username -->
                  <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
                    ${_}
                    <span class="leaderboard-rank rank-${ce}" style="flex-shrink: 0; margin-right: 4px;">${ce}</span>
                    <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${be}</span>
                  </div>
                  <!-- Center Side: Points -->
                  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${N.points} pts</span>
                  </div>
                  <!-- Right Side: Status -->
                  <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
                    <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${it}</span>
                  </div>
                </div>
              `}).join("")),Ve(b,{players:P,divisionNumber:w,totalDivisions:U,seasonEndsAt:O}),Ve(`division_${w}`,{players:P,divisionNumber:w,totalDivisions:U,seasonEndsAt:O}),a(O)}).catch(y=>{console.error("Failed to load division leaderboard:",y),c&&(c.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading division leaderboard. Please try again.</p>`)})};X==="division"?d(ye||void 0):i(),document.querySelectorAll("[data-leaderboard-view]").forEach(l=>{l.addEventListener("click",()=>{(l.dataset.leaderboardView==="division"?"division":"global")==="division"?d(ye||void 0):i()})}),document.getElementById("divisionSelector")?.addEventListener("change",l=>{let c=Number(l.target.value);d(c)}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){v("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let c=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,c.toFixed(2)),t.walletBalance=c.toFixed(2),v("Claimed $100 USDC mock credits!"),B(),ia()}else v("Opening Circle Faucet..."),window.open(Ze,"_blank")});let f=document.getElementById("howItWorksBtn"),p=document.getElementById("howItWorksModal"),g=document.getElementById("closeRulesModalBtn");f?.addEventListener("click",()=>{p&&p.classList.add("active")}),g?.addEventListener("click",()=>{p&&p.classList.remove("active")}),p?.addEventListener("click",l=>{l.target===p&&p.classList.remove("active")})},la=()=>{t.activeSurface="feed",t.selectedMarketId=null,He?.removeAttribute("hidden"),Re?.removeAttribute("hidden"),ae?.removeAttribute("hidden"),Le?.classList.remove("active"),Pe?.classList.add("active"),Ue?.classList.remove("active"),S?.classList.remove("markets-list")},yr=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",Lt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id];if(oe(e)){let c=r?.resolvedOptionId||null,b=!!c,x=r?.optionPools?.[a.optionId||""]||0,k=r?.volumeUsdc||0,$=b&&a.optionId===c,y=$&&x>0?(a.optionSharesUsdc||0)/x*k:0,w=ne(e).find(U=>U.id===c)?.label,P=_e().has(e.id);return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${z(e.category)}</span>
          <span>${b?`Resolved: ${L(w||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${L(a.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${D(a.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${D(y||a.optionSharesUsdc||0)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${b?"":`Closes ${e.closes}`}</span>
          ${b?P?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':$?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${D(y)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let o=yr(r?.outcome),s=Qt(a,r),n=s.reduce((c,b)=>Math.max(c,b.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,d=r?.outcome??0,m=_e().has(e.id),u=d===1?a.yesSharesUsdc:d===2?a.noSharesUsdc:0,f=d===1?r?.yesSharesUsdc??0:d===2?r?.noSharesUsdc??0:0,p=r?.volumeUsdc??0,g=u>0&&f>0?u/f*p:0,l=d===0?"":m?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':g>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${D(g)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${z(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${D(n)}</strong></div>
        ${s.map(c=>`
          <div><span>${c.label}</span><strong>${D(c.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${D(i)} total shares`:""}</span>
        ${l||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},kr=async e=>{if(!t.walletAddress){v("Please sign in first.");return}let a=Me().find(o=>o.id===e),r=a?G(a):"";if(!a||!r){v("Market is not available.");return}try{C("claim_attempt"),nt();let o=await ga(r,t.walletAddress);C("claim_success"),o.won&&Ka(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await ge(t.walletAddress),await q(),v(o.won?`Claimed $${D(o.amountUsdc)}`:"No payout to claim"),B(),W()}catch(o){C("claim_failed"),v(o instanceof Error?o.message:"Claim failed")}},wr=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(s=>{let n=s.displayName||j(s.walletAddress),i=s.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${L(n)}</strong>
            <span>${j(s.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${s.used}/${s.maxUses}</strong>
            <span>${i?"Expired":`${s.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${L(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${L(a.code)}">
              <span>Invite code</span>
              <strong>${L(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${L(a.inviteLink)}">
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
  `},W=()=>{if(!S||!T)return;He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),ae?.toggleAttribute("hidden",!0),Le?.classList.remove("active"),Pe?.classList.remove("active"),Ue?.classList.add("active"),document.body.classList.remove("detail-mode"),T.hidden=!0,S.hidden=!1,S.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Te(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&Bt(),q({force:!t.hasLoadedPortfolioPositions}));let a=_e(),r=Me().filter(p=>{let g=t.marketPositions[p.id];return a.has(p.id)||g&&(g.yesSharesUsdc+g.noSharesUsdc>0||(g.optionSharesUsdc||0)>0)}),o=r.filter(p=>(t.marketSnapshots[p.id]?.outcome??0)===0),s=r.filter(p=>(t.marketSnapshots[p.id]?.outcome??0)!==0),n=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?j(t.walletAddress):"Anonymous"),d=L(i),m=L(t.profileUsername||""),u=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${L(t.profileNotice.message)}</div>`:"",f=i.charAt(0).toUpperCase();S.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${wr(n)}
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
      ${t.loadingPortfolioPositions?ir(2):t.walletAddress?r.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${o.length?o.map(Lt).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${s.length?s.map(Lt).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},h=()=>{if(Ot.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){na();return}if(t.activeSurface==="portfolio"){W();return}if(t.activeSurface==="leaderboard"){ia();return}la(),Yt(),Ae(),gr(),F&&(F.value=t.activeArchiveDate??"")};Xe.textContent=_t();ae?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");r&&(t.activeCategory=r.dataset.category,window.history.pushState({},"","#feed"),Y(),h(),Ee(),se(t.activeCategory))});Le?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),Y(),h()});Pe?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),Y(),h(),Ee(),se(t.activeCategory)});Ue?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),Y(),h()});Q?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Ce()):je()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{v("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&kr(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Te(),W();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,W();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Te(),W();return}let s=a.closest("[data-copy-referral-code]");if(s){let i=s.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>v("Invite code copied"));return}let n=a.closest("[data-copy-referral-link]");if(n){let i=n.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>v("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Ct():je())});Ot.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),Ee(),se(t.activeCategory),a==="saved"&&(Ga(),tt(),$e())),Y(),h()})});F?.addEventListener("change",()=>{t.activeArchiveDate=F.value||null,window.history.pushState({},"","#feed"),Y(),h(),se(t.activeCategory)});Aa?.addEventListener("click",()=>{t.activeArchiveDate=null,F&&(F.value=""),window.history.pushState({},"","#feed"),Y(),h(),se(t.activeCategory)});S?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let g=S?.querySelector(".username-display-row"),l=S?.querySelector("#usernameEditForm");if(g&&l){g.style.display="none",l.style.display="flex";let c=l.querySelector("#usernameInput");c&&c.focus()}return}if(a.closest("#cancelUsernameBtn")){let g=S?.querySelector(".username-display-row"),l=S?.querySelector("#usernameEditForm");g&&l&&(g.style.display="flex",l.style.display="none");return}let s=a.closest("#saveUsernameBtn");if(s){let l=S?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(l){let c=l.value.trim().slice(0,15),b=s,x=b.textContent||"Save";b.disabled=!0,b.textContent="Saving...",Ya(c),t.profileNotice=null;try{t.walletAddress&&await ie(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},v("Username updated"),W()}catch(k){let $=k instanceof Error?k.message:"Username save failed";t.profileNotice={type:"error",message:$},v($),b.disabled=!1,b.textContent=x,W()}}return}let n=a.closest("[data-timeframe]");if(n){let g=n.dataset.timeframe;t.activeMarketTimeframe=g,na();return}let i=a.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,C("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),h(),window.scrollTo({top:0,behavior:"smooth"});return}let d=a.closest("[data-thread-story-id]"),m=a.closest("[data-export-id]"),u=a.closest("[data-export-action]"),f=a.closest("[data-story-id]");if(d){e.stopPropagation();let g=t.stories.find(l=>l.id===Number(d.dataset.threadStoryId));g&&Da(g);return}let p=a.closest(".mobile-bookmark-btn, .bookmark-button");if(p){e.stopPropagation();let g=p.dataset.bookmarkUrl||"",l=t.stories.find(c=>c.sourceUrl===g);if(!l)return;l.saved=!l.saved,l.saved?te.add(g):te.delete(g),Ta(),v(l.saved?"Saved to your list":"Removed from saved"),Ae();return}if(u){e.stopPropagation(),mr(Number(u.dataset.exportStoryId),u.dataset.exportAction);return}if(m){e.stopPropagation();let g=Number(m.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===g?null:g,Ae();return}f&&(a.closest("a")||Ft(Number(f.dataset.storyId),!!a.closest(".summary-btn")))});S?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");!r||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Ft(Number(r.dataset.storyId)))});T?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let f=t.stories.find(p=>p.id===Number(r.dataset.unlockBriefing));f&&Qe(f);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let f=decodeURIComponent(o.dataset.unlockBriefingUrl||""),p=Ia(f);p&&(re(p)?ze(p):Qe(p));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),h();return}if(a.closest("#openTradeDrawerBtn")){let f=I.find(l=>l.id===t.selectedMarketId);if(f){if(Fe(f,t.marketSnapshots[f.id])){v("This market is resolved and can no longer be traded.");return}if(qt(f,t.marketSnapshots[f.id])){v("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,C("trade_drawer_open");let p=T.querySelector("#tradeDrawer"),g=T.querySelector("#tradeDrawerBackdrop");p?.classList.add("open"),g?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let f=T.querySelector("#tradeDrawer"),p=T.querySelector("#tradeDrawerBackdrop");f?.classList.remove("open"),p?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let f=I.find(p=>p.id===t.selectedMarketId);if(f){let p=vr(f),g=`https://api.whatsapp.com/send?text=${encodeURIComponent(p)}`;window.open(g,"_blank")}return}let s=a.closest("[data-market-trade]");if(s&&t.selectedMarketId){let f=s.dataset.marketTrade;ar(t.selectedMarketId,f);return}let n=a.closest("[data-market-option-trade]");if(n&&t.selectedMarketId){let f=n.dataset.marketOptionTrade||t.marketTradeOptionId||"";ur(t.selectedMarketId,f);return}let i=a.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,h();return}let d=a.closest("[data-market-trade-side]");if(d){if(d.disabled||d.classList.contains("disabled"))return;let f=I.find(l=>l.id===t.selectedMarketId),p=f?t.marketPositions[f.id]:void 0,g=d.dataset.marketTradeSide;if(!ee(t.marketOrderMode,g,p))return;t.marketTradeSide=g,h();return}let m=a.closest("[data-market-order-mode]");if(m){t.marketOrderMode=m.dataset.marketOrderMode;let f=I.find(g=>g.id===t.selectedMarketId),p=f?t.marketPositions[f.id]:void 0;t.marketTradeSide=st(t.marketOrderMode,t.marketTradeSide,p),t.marketTradeAmount=Ie(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,p),h();return}a.closest("[data-back-to-feed]")&&Oa()});T?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=I.find(d=>d.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,s=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=Ie(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,s),a.value=String(t.marketTradeAmount);let n=r&&oe(r)?t.marketTradeAmount:Xt(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),i=T.querySelector(".market-inline-payout strong");i&&(i.textContent=`$${D(n)}`)});T?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});T?.addEventListener("focusout",e=>{e.target.matches("[data-market-amount]")&&window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)});window.addEventListener("popstate",Ce);window.addEventListener("hashchange",Ce);Ye?.addEventListener("click",()=>{if(!Ge||!Ye)return;let e=!Ge.hidden;Ge.hidden=e,Ye.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,Ae());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};M&&(M.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,F&&(F.value=""),Y(),Ee(),se(t.activeCategory)),r.dataset.menuAction==="saved"&&(la(),tt(),$e(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),Y(),h())});h();B();$a().then(()=>{er(),h(),B(),window.setTimeout($r,1200),Ha()});var Sr=document.querySelector("#mobileArchiveCard"),fe=document.querySelector("#archiveControls");Sr?.addEventListener("click",()=>{if(!fe)return;fe.classList.toggle("mobile-open")&&setTimeout(()=>fe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var xr=document.querySelector("#archivePill");xr?.addEventListener("click",e=>{if(e.stopPropagation(),!fe)return;fe.classList.toggle("mobile-open")&&setTimeout(()=>fe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Oe=!1,Pt=!1,$r=()=>{Pt||(Pt=!0,(async()=>{let e=await Ne();if(Oe=!!e,e){t.walletConnecting=!0,B();try{let a=await ha();Oe=!1,t.walletConnecting=!1,a?(t.walletAddress=await Ne(),t.walletAddress&&(ue(),t.walletBalance=await ge(t.walletAddress),await q()),B(),t.activeSurface==="portfolio"&&h()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ue(),v("Session expired. Please sign in again."),B(),h())}catch(a){console.warn(a),Oe=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ue(),v("Session expired. Please sign in again."),B(),h()}}await va(a=>{Oe||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,ue(),a&&ie(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,B(),a?(Te(),ge(a).then(r=>{t.walletBalance=r,B(),t.activeSurface==="portfolio"&&h()}),q()):t.activeSurface==="portfolio"&&h())})})())};C("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",s=typeof o=="string"?o:r.getAttribute("class")||"",n=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url"))&&(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||r.textContent?.trim()==="Open source")&&!s.includes("disabled")&&n!=="#"&&C("open_source")}},!0);
