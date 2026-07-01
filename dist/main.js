var Be="https://faucet.circle.com/",Ue=null,P=()=>(Ue||(Ue=import("./chunks/arc-XEJGGP3V.js")),Ue),W=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,Rt=async()=>(await P()).connectArcWallet(),de=async e=>(await P()).readArcUsdcBalance(e),jt=async(e,a,r)=>(await P()).payAiBriefingUnlock(e,a,r),Ft=e=>{P().then(a=>a.resolveLocalTestMarketYes(e))},mt=async e=>(await P()).readArcMarketSnapshot(e),zt=async(e,a)=>(await P()).readArcMarketPosition(e,a),Wt=async(e,a,r,o,s,n,i)=>(await P()).executeArcMarketOrder(e,a,r,o,s,n,i),ut=()=>{P().then(e=>e.disconnectArcWallet())},qt=async(e,a)=>(await P()).claimArcMarketPayout(e,a),De=async()=>(await P()).getConnectedArcWallet(),Yt=async()=>(await P()).validateArcSession(),Gt=async e=>(await P()).subscribeArcWallet(e),Jt=["Sports"],Vt="https://siftle.onrender.com",Kt=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".vercel.app")?Vt:""},Qt=Kt(),C=e=>`${Qt}${e}`,pt="siftle_theme",Zt=()=>{try{return window.localStorage.getItem(pt)==="light"?"light":"dark"}catch{return"dark"}},ce=Zt();function ft(e){fetch(C("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e})}).catch(a=>console.error("Failed to track event:",a))}var t={activeSurface:"markets",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeAmount:5,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null},Ce=null,J="global",E=null,Je=!1,Ve=!1,ht=20,T=[],Xt=async()=>{t.loadingMarkets=!0;try{let e=await fetch(C("/api/markets"));e.ok&&(T=await e.json())}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},gt="siftle.savedUrls",Q=new Set,Oe=()=>{try{let e=localStorage.getItem(gt)||"[]",a=JSON.parse(e);Q=new Set(a.filter(Boolean))}catch{Q=new Set}},ea=()=>{try{localStorage.setItem(gt,JSON.stringify(Array.from(Q)))}catch{}},me=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!Q.has(e.sourceUrl)};Oe();me();var Ne=document.querySelector("#dateLabel"),Z=document.querySelector("#categoryTabs"),b=document.querySelector("#storyList"),k=document.querySelector("#storyDetail"),Ee=document.querySelector("#menuButton"),Pe=document.querySelector("#menuPanel"),w=document.querySelector("#menuStatus"),D=document.querySelector("#archiveDateSelect"),Ke=document.querySelector("#archiveStatus"),ta=document.querySelector("#todayButton"),we=document.querySelector(".brief-hero"),Se=document.querySelector("#archiveControls"),fe=document.querySelector("[data-surface='markets']"),he=document.querySelector("[data-surface='feed']"),ge=document.querySelector("[data-surface='portfolio']"),V=document.querySelector("#walletButton"),ne=document.querySelector("[data-theme-toggle]"),vt=Array.from(document.querySelectorAll("[data-bottom-nav]")),Ie,aa=()=>{if(!ne)return;let a=`Switch to ${ce==="light"?"dark":"light"} mode`;ne.setAttribute("aria-label",a),ne.title=a,ne.dataset.activeTheme=ce},bt=e=>{ce=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(pt,e)}catch{}aa()};bt(ce);var U=()=>{if(V){let e=V.querySelector(".wallet-button-label");V.classList.toggle("connected",!!t.walletAddress),V.disabled=t.walletConnecting,V.setAttribute("aria-label",t.walletAddress?`Wallet ${W(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),V.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${W(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",U);ne?.addEventListener("click",()=>{bt(ce==="light"?"dark":"light")});var _e=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,U();try{let e=await Rt();e&&(t.walletAddress=e,re(),t.walletBalance=await de(e),await H(),se(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),y("Connected to Arc Testnet"),window.location.hash="#portfolio",ve())}catch(e){y(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,U()}}},y=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Ie&&window.clearTimeout(Ie),Ie=window.setTimeout(()=>{a?.classList.remove("show")},1700)},ra=(e,a,r,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let n=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",n),s.querySelector(".success-modal-action-btn")?.addEventListener("click",n),s.addEventListener("click",i=>{i.target===s&&n()})},R=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},yt=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},oa=()=>t.stories.filter(e=>t.showSaved?!!e.saved:t.activeCategory==="All"||e.category===t.activeCategory),ie=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,sa=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),na=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let s=r.slice(0,a).join(" "),n=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return n>s.length*.45?s.slice(0,n+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},Qe=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),sa(a)?"":na(a)},q=(e,a)=>Qe(a||"")||Qe(e.summary)||e.headline,Re=e=>{let a=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(a.length<=1)return`<p class="briefing-text">${e}</p>`;let r="";a[0].trim()&&(r+=`<p class="briefing-intro">${a[0].trim()}</p>`);for(let o=1;o<a.length;o+=2){let s=a[o].trim().toUpperCase(),n=a[o+1]?a[o+1].trim():"";if(!n)continue;let i="";if(s==="KEY POINTS"){let c=n.split(/(?:•|\*|-)\s+/).map(l=>l.trim()).filter(Boolean);c.length>0?i=`<ul class="briefing-list">${c.map(l=>`<li>${l}</li>`).join("")}</ul>`:i=`<p class="briefing-text">${n}</p>`}else i=`<p class="briefing-text">${n}</p>`;let m=s.toLowerCase().replace(/\s+/g,"-");r+=`
      <div class="briefing-section ${m}-section">
        <h4 class="briefing-title">${s}</h4>
        ${i}
      </div>
    `}return r},kt=e=>`siftle_ai_briefing_unlock_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,wt=e=>localStorage.getItem(kt(e))||"",X=e=>!!wt(e),ke=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:Q.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),ia=e=>{let a=t.stories.find(s=>s.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=T.find(n=>n.id===t.selectedMarketId);if(s){let n=$e(s).evidence.find(i=>i.sourceUrl===e);if(n)return ke(s,n)}}return null},je=(e,a)=>{let r=va(e,a);return r===null?null:r-ht*60*1e3},la=(e,a)=>{let r=je(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},St=(e,a)=>{let r=je(e,a);return r===null?null:Date.now()>=r?`Locked ${ht}m before kickoff`:null},da=(e,a)=>`
  <div class="briefing-section">
    <h4 class="briefing-title">Locked briefing</h4>
    <p class="briefing-text">Unlock this AI briefing with a small USDC payment.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${a?"disabled":""}>
      ${a?"Unlocking...":"Unlock AI briefing"}
    </button>
  </div>
`,Ze=async e=>{if(!t.walletAddress){y("Please sign in first.");return}if(t.unlockingSummaryUrl!==e.sourceUrl){t.unlockingSummaryUrl=e.sourceUrl,h();try{let a=await fetch(C("/api/summary/unlock-config")),r=await a.json();if(!a.ok||!r.treasuryAddress)throw new Error(r.error||"AI briefing unlock is not configured");let o=await jt(r.treasuryAddress,Number(r.amountUsdc)||.05,i=>{w&&(w.textContent=i)}),s=await fetch(C("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:o})}),n=await s.json();if(!s.ok||!n.unlockToken)throw new Error(n.error||"AI briefing unlock failed");localStorage.setItem(kt(e),n.unlockToken),y("AI briefing unlocked"),await xe(e)}catch(a){y(a instanceof Error?a.message:"Unlock failed")}finally{t.unlockingSummaryUrl=null,h()}}},xe=async e=>{if(X(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=q(e,e.ai_summary),w&&(w.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded"),h();return}t.loadingSummaryUrl=e.sourceUrl,h();try{let a=await fetch(C("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:wt(e)})});if(!a.ok)throw new Error(`Summary request failed with ${a.status}`);let r=await a.json();t.aiSummaries[e.sourceUrl]=q(e,r.summary),w&&r.provider&&(w.textContent=r.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${r.provider}`)}catch(a){console.warn(a),t.aiSummaries[e.sourceUrl]=q(e),w&&(w.textContent="Summary fallback loaded")}finally{t.loadingSummaryUrl=null,h()}}},xt=e=>{let a=t.stories.find(r=>r.id===e);a&&(t.feedScrollY=window.scrollY,t.selectedStoryId=a.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${a.id}`),h(),xe(a),window.scrollTo({top:0,behavior:"smooth"}))},ca=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),h(),$t(e),window.scrollTo({top:0,behavior:"smooth"})},ma=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.history.pushState({},"","#feed"),h(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},$t=async e=>{try{let a=await fetch(C(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),w&&(w.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),y("That timeline no longer has a verified past update"),w&&(w.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,h()}};function ve(){if(window.location.hash==="#resolve-local-yes"){let a=T.find(r=>r.id==="siftle-local-test-2")||T.find(r=>r.timeframe==="Daily"&&j(r).startsWith("0x00000000000000000000000000000000000001"));if(a){Ft(j(a)),$a(a,"yes"),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),y("Local test market resolved YES"),H().then(()=>{se(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),U(),pe()});return}}let e=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||e){t.activeSurface="markets",t.selectedMarketId=e?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,h();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let a=window.location.hash.match(/^#story-(\d+)$/),r=window.location.hash.match(/^#thread-(\d+)$/),o=a?t.stories.find(i=>i.id===Number(a[1])):void 0,s=r?t.stories.find(i=>i.id===Number(r[1])):void 0,n=t.selectedStoryId!==null||t.selectedThreadUrl!==null;t.selectedStoryId=o?.id??null,t.selectedThreadUrl=s?.sourceUrl??null,t.activeThread=null,h(),o&&xe(o),s&&$t(s),!o&&!s&&n&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}));return}t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,h()}var He=e=>{Ke&&(Ke.textContent=e)},ua=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Tt(),h());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(C(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],me(),t.hasLoadedFeed=!0,Ne&&(Ne.textContent=yt(s.date??t.activeArchiveDate)),w)if(t.activeArchiveDate)w.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=s.archive?.provider==="shelby"?"Shelby":"local archive";w.textContent=`Latest published feed loaded from ${n}`}He(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),me(),w&&(w.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,h(),ve()}},pa=async()=>{if(D)try{let e=await fetch(C("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),D.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),D.value=t.activeArchiveDate??"",He(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),He("Archive unavailable")}},be=()=>{Je||(Je=!0,pa())},ee=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||ua(e,a)},fa=()=>{Ve||(Ve=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&ee(t.activeCategory,!0),be()},8e3))},ha=e=>e==="All"?"For you":e==="Sports"?"Football":e,B=e=>e==="Sports"?"Football":e,Tt=()=>{Z&&(Z.innerHTML=Jt.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${ha(e)}
        </button>
      `).join(""))},At=e=>(e.thread?.count??0)>=1,ga=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Mt=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),s=new Date(r.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),$e=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},va=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},ba=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,ya=(e,a)=>({date:ba(e,a),source:e.source,headline:e.headline,summary:q(e,e.ai_summary),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Lt=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(C(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...Mt(r.items??[])],s=o.filter((m,c,l)=>l.findIndex(g=>g.sourceUrl===m.sourceUrl)===c).map(ya),i=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:s,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&h()}}},j=e=>e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",_=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),z=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Fe=e=>`siftle_profile_username_${e.toLowerCase()}`,Ut=e=>e.trim().replace(/\s+/g," ").slice(0,15),re=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=Fe(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=Ut(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},ka=e=>{if(!t.walletAddress)return;let a=Fe(t.walletAddress),r=Ut(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},wa=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},ze=e=>Number.isFinite(e)?Math.min(10,Math.max(5,e)):5,Ct=(e,a,r,o,s)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let n=a==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,i=e.yesSharesUsdc,m=e.noSharesUsdc;if(o==="sell")return Math.min(r,n);let c=(a==="yes"?i:m)+r,l=i+m+r;return c<=0||l<=0?r:(n+r)/c*l},Et=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},Sa=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},We=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),K=(e,a,r)=>{let o=r?.yesSharesUsdc??0,s=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:s>0:a==="yes"?s<=0:o<=0},qe=(e,a,r)=>{if(K(e,a,r))return a;let o=a==="yes"?"no":"yes";return K(e,o,r)?o:a};var xa=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},Xe=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`},Ye=()=>{let e=0,a=0,r=0,o=T.filter(i=>i.timeframe==="Daily").map(i=>i.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(s)try{n=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,a++;continue}if(n[i]?.result==="loss"){r++;continue}let m=t.marketPositions[i],l=t.marketSnapshots[i]?.outcome??0;if(l===0)continue;let g=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,d=[];try{d=JSON.parse(localStorage.getItem(g)||"[]")}catch{}let u=d.includes("yes")&&d.includes("no");if(l===1&&m&&m.yesSharesUsdc>0){let p=u?50:100;e+=p,a++,n[i]={result:"win",points:p}}else if(l===2&&m&&m.noSharesUsdc>0){let p=u?50:100;e+=p,a++,n[i]={result:"win",points:p}}else m&&(m.yesSharesUsdc>0||m.noSharesUsdc>0)&&(r++,n[i]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(n)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},$a=(e,a)=>{let r=j(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,s=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(o))continue;let m=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(m)&&s.add(m)}s.forEach(n=>{let i=`${o}${n}`,m={yesSharesUsdc:0,noSharesUsdc:0};try{m=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let c=(Number(m.yesSharesUsdc)||0)>0,l=(Number(m.noSharesUsdc)||0)>0;if(!c&&!l)return;let g=`siftle_traded_sides_${e.id}_${n}`,d=[];try{d=JSON.parse(localStorage.getItem(g)||"[]")}catch{}let u=d.includes("yes")&&d.includes("no"),p=a==="yes"?c:l,f=`siftle_resolved_results_${n}`,v={};try{v=JSON.parse(localStorage.getItem(f)||"{}")}catch{}v[e.id]={result:p?"win":"loss",points:p?u?50:100:0},localStorage.setItem(f,JSON.stringify(v));let $=0,x=0,A=0;Object.values(v).forEach(M=>{M.result==="win"?(x+=1,$+=Number(M.points)||0):M.result==="loss"&&(A+=1)});let N=localStorage.getItem(Fe(n))||"";fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:N,points:$,status:`${x} win${x===1?"":"s"}, ${A} loss${A===1?"":"es"}`})}).catch(M=>console.error("Failed to report local resolved score:",M))})},se=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?Ye():null,r=await fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},Ta=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(r)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},Pt=async e=>{let a=j(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){t.loadingMarketSnapshots[e.id]=!0;try{t.marketSnapshots[e.id]=await mt(a)}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&h()}}},H=async()=>{if(!(!t.walletAddress||t.loadingPortfolioPositions)){t.loadingPortfolioPositions=!0;try{let e=await Promise.all(T.map(async a=>{let r=j(a);if(!r)return[a.id,{yesSharesUsdc:0,noSharesUsdc:0}];let[o,s]=await Promise.all([zt(r,t.walletAddress),mt(r)]);return t.marketSnapshots[a.id]=s,[a.id,o]}));t.marketPositions=Object.fromEntries(e)}catch(e){console.warn(e)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,se(!0).catch(e=>console.error("Failed to report leaderboard entry:",e)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard")&&h()}}},Aa=async(e,a)=>{if(!t.walletAddress){y("Session expired or wallet not connected. Please sign in."),_e();return}let r=T.find(l=>l.id===e);if(!r)return;t.marketTradeSide=a;let o=j(r);if(!o){y("Deploy this Arc market contract before trading"),h();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await H(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){y("Still loading your position. Try again in a moment."),h();return}let s=t.marketSnapshots[r.id];if(We(r,s)){t.tradeDrawerOpen=!1,y("This market is resolved and can no longer be traded."),h();return}let n=s?.yesPriceCents??r.probability,i=s?.noPriceCents??100-r.probability,m=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!K(t.marketOrderMode,a,m)){let l=Sa(m),g=t.marketOrderMode==="sell"?l?`You can only exit your ${l.toUpperCase()} shares.`:"You do not have shares to exit in this market.":l?`Exit your ${l.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";y(g),t.marketTradeSide=qe(t.marketOrderMode,a,m),h();return}let c=ze(Number(t.marketTradeAmount)||0);t.marketTradeAmount=c;try{t.marketTradeStatus="Preparing transaction...",h();let l=await Wt(o,t.marketOrderMode,a,c,g=>{t.marketTradeStatus=g,h()},n,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.walletAddress=await De(),t.walletAddress&&(t.walletBalance=await de(t.walletAddress)),await H(),se(!0).catch(g=>console.error("Failed to report leaderboard entry:",g)),t.walletAddress){let g=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,d={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let p=localStorage.getItem(g);if(p){let f=JSON.parse(p);d={yesCost:f.yesCost||0,noCost:f.noCost||0,yesShares:f.yesShares||0,noShares:f.noShares||0}}}catch{}let u=c;if(t.marketOrderMode==="buy"){let p=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,f=[];try{f=JSON.parse(localStorage.getItem(p)||"[]")}catch{}f.includes(a)||(f.push(a),localStorage.setItem(p,JSON.stringify(f))),a==="yes"?(d.yesCost+=u,d.yesShares=(d.yesShares||0)+u/(n/100)):(d.noCost+=u,d.noShares=(d.noShares||0)+u/(i/100))}else{let p=t.marketPositions[r.id];if(p){if(a==="yes"&&p.yesSharesUsdc>0){let f=Math.min(1,u/p.yesSharesUsdc);d.yesCost=Math.max(0,d.yesCost-d.yesCost*f),d.yesShares=Math.max(0,(d.yesShares||0)-(d.yesShares||0)*f)}else if(a==="no"&&p.noSharesUsdc>0){let f=Math.min(1,u/p.noSharesUsdc);d.noCost=Math.max(0,d.noCost-d.noCost*f),d.noShares=Math.max(0,(d.noShares||0)-(d.noShares||0)*f)}}}localStorage.setItem(g,JSON.stringify(d))}y(`Trade confirmed ${l.slice(0,8)}...`),ra(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(l){xa(l)?(ut(),t.walletAddress=null,t.walletBalance=null,re(),y("Session expired. Please sign in again.")):y(l instanceof Error?l.message:"Arc trade failed")}finally{t.marketTradeStatus=null,U(),h()}},et=e=>At(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",tt=e=>At(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",at=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',rt=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',te=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,Ma=()=>`
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
`,La=(e=4)=>`${te("Loading stories")}${Array.from({length:e},Ma).join("")}`,Ge=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${te("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,Ua=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${te("Loading thread timeline")}
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
`,Ca=()=>`
  <div class="market-card-topline">
    <div class="skeleton skeleton-chip"></div>
    <div class="skeleton skeleton-line xs"></div>
  </div>
  <div class="skeleton skeleton-line xl" style="height: 24px;"></div>
  <div class="skeleton skeleton-line lg" style="height: 24px;"></div>
  <div class="market-probability-row">
    <div class="skeleton skeleton-probability"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
  <div class="skeleton skeleton-meter"></div>
  <div class="market-card-footer">
    <div class="skeleton skeleton-line sm"></div>
    <div class="skeleton skeleton-line xs"></div>
  </div>
`,Ea=(e=3)=>`
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${te("Loading market evidence")}
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
`,Pa=(e=2)=>`
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${te("Loading portfolio positions")}
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
`,ue=()=>{if(!b)return;let e=oa();if(b.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){b.innerHTML=La(4);return}if(e.length===0){let a=t.showSaved?[]:t.stories;if(a.length>0){b.innerHTML=a.map(r=>`
        <article class="story-card" data-story-id="${r.id}" role="button" tabindex="0" aria-label="Open summary for ${r.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${r.source}</strong>
                <span>${ie(r)} - ${r.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${r.sourceUrl}" aria-pressed="${r.saved?"true":"false"}" aria-label="${r.saved?"Remove saved story":"Save story"}">
                ${at()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${r.id}" aria-expanded="${t.activeShareStoryId===r.id}">
                  ${rt()}
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
            ${et(r)}
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
                <span class="mobile-card-time">${ie(r)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${r.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${tt(r)}
              ${/example\\.com/i.test(r.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${r.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("");return}b.innerHTML="";return}b.innerHTML=e.map(a=>`
        <article class="story-card" data-story-id="${a.id}" role="button" tabindex="0" aria-label="Open summary for ${a.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${a.source}</strong>
                <span>${ie(a)} - ${a.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${a.sourceUrl}" aria-pressed="${a.saved?"true":"false"}" aria-label="${a.saved?"Remove saved story":"Save story"}">
                ${at()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${a.id}" aria-expanded="${t.activeShareStoryId===a.id}">
                  ${rt()}
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
            ${et(a)}
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
                <span class="mobile-card-time">${ie(a)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${a.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${tt(a)}
              ${/example\\.com/i.test(a.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${a.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("")},ot=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),le=(e,a,r,o,s,n)=>{e.beginPath(),e.moveTo(a+n,r),e.lineTo(a+o-n,r),e.quadraticCurveTo(a+o,r,a+o,r+n),e.lineTo(a+o,r+s-n),e.quadraticCurveTo(a+o,r+s,a+o-n,r+s),e.lineTo(a+n,r+s),e.quadraticCurveTo(a,r+s,a,r+s-n),e.lineTo(a,r+n),e.quadraticCurveTo(a,r,a+n,r),e.closePath()},Ia=(e,a,r,o,s,n,i)=>{let m=a.split(/\s+/).filter(Boolean),c=[],l="";for(let g of m){let d=l?`${l} ${g}`:g;if(e.measureText(d).width<=s){l=d;continue}if(l&&c.push(l),l=g,c.length===i)break}if(l&&c.length<i&&c.push(l),m.length>0&&c.length===i){for(;e.measureText(`${c[i-1]}...`).width>s&&c[i-1].length>0;)c[i-1]=c[i-1].slice(0,-1).trim();c[i-1]=`${c[i-1]}...`}return c.forEach((g,d)=>e.fillText(g,r,o+d*n)),o+c.length*n},Ba=(e,a,r,o,s,n,i)=>{let m=Math.max(s/a.naturalWidth,n/a.naturalHeight),c=s/m,l=n/m,g=(a.naturalWidth-c)/2,d=(a.naturalHeight-l)/2;e.save(),le(e,r,o,s,n,i),e.clip(),e.drawImage(a,g,d,c,l,r,o,s,n),e.restore()},st=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),nt=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))):"",Da=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",it=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",le(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await ot("./assets/siftle logo.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${nt(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(a){let m=await ot(Da(e.imageUrl)).catch(()=>null);m?Ba(o,m,110,n,860,520,28):(o.fillStyle="#eef2ff",le(o,110,n,860,520,28),o.fill())}else o.fillStyle="#eef2ff",le(o,110,n,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",le(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(B(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",Ia(o,nt(e.headline),110,888,860,54,4),r},It=async e=>{let a=await it(e,!0);try{return await st(a)}catch{return st(await it(e,!1))}},Bt=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,Dt=async e=>{let a=await It(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=Bt(e),o.click(),URL.revokeObjectURL(r)},Na=async e=>{let a=await It(e),r=new File([a],Bt(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await Dt(e)},Ha=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,ue(),y(a==="share"?"Preparing share image":"Preparing download"),w&&(w.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await Na(r):await Dt(r),y(a==="share"?"Share image ready":"Image saved"),w&&(w.textContent="Branded story image ready")}catch(o){console.warn(o),y("Image export unavailable"),w&&(w.textContent="Image export was cancelled or unavailable")}}},lt=(e,a)=>`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${B(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${q(e,e.ai_summary)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">${X(e)?"AI briefing":"Unlock AI briefing"}</button>
      </div>
      ${X(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${Ge()}</div>`:`<div style="margin-top: 12px;">${Re(q(e,t.aiSummaries[e.sourceUrl]||e.ai_summary))}</div>`:""}
    </div>
  </article>
`,Oa=()=>{if(!k||!b)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(b.hidden=!0,k.hidden=!1,k.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){k.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){k.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${Ua(3)}
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
          <span>${ga(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${lt(e,"Latest")}
          ${Mt(r?.items??[]).map(o=>lt(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},_a=()=>{if(!k||!b)return;if(t.selectedThreadUrl){Oa();return}let e=t.stories.find(n=>n.id===t.selectedStoryId);if(!e){k.hidden=!0,k.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),b.hidden=!1;return}let a=q(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=X(e),s=t.unlockingSummaryUrl===e.sourceUrl;b.hidden=!0,k.hidden=!1,k.classList.add("fullscreen"),document.body.classList.add("detail-mode"),k.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${B(e.category)}</span>
          <span>${e.source} - ${ie(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?r?Ge():Re(a):da(e,s)}
        </section>
        <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `},Ra=e=>{let a=!t.checkedMarketEvidence[e.id],r=t.marketSnapshots[e.id],o=j(e);if(a||!!(o&&!r))return`
      <div class="market-card skeleton-market-card" aria-busy="true">
        ${Ca()}
        ${te("Loading market data")}
      </div>
    `;let n=r?.yesPriceCents,i=n===void 0?"--":`${n}%`,m=n===void 0?o?"Loading Arc pools":"Arc setup required":`Yes ${n}\xA2 \xB7 No ${100-n}\xA2`,c=$e(e);return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${B(e.category)}</span>
          <span class="timeframe-chip ${e.timeframe}">${e.timeframe==="Sagas"?"Sagas":e.timeframe}</span>
        </div>
        <span class="market-card-updates">${c.evidence.length} updates</span>
      </div>
      <div class="market-card-body" style="display: flex; gap: 16px; align-items: flex-start; justify-content: space-between; width: 100%; text-align: left; margin: 4px 0;">
        <div class="market-card-text" style="flex: 1; min-width: 0;">
          <h2>${e.question}</h2>
        </div>
        ${c.imageUrl?`
        <div class="market-card-image-frame" style="width: 72px; height: 72px; min-width: 72px; border-radius: 12px; overflow: hidden; border: 1px solid var(--market-border); flex-shrink: 0;">
          <img src="${c.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        `:""}
      </div>
      <div class="market-probability-row">
        <strong>${i}</strong>
        <span>${o?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${m}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${n??0}%"></span></div>
      <div class="market-card-footer">
        <span>${c.evidence.length} thread updates</span>
        <span>${r?`$${Math.round(r.volumeUsdc).toLocaleString()} volume`:`Closes ${e.closes}`}</span>
      </div>
    </button>
  `},ja=e=>{let a=$e(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,n=a.evidence[0],i=n?n.headline:"No updates yet",m=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${m}`},Fa=e=>{if(!b||!k)return;let a=$e(e),r=!t.checkedMarketEvidence[e.id],o=j(e),s=t.marketSnapshots[e.id],n=!!(o&&!s),i=s?.yesPriceCents??(o?e.probability:0),m=s?.noPriceCents??(o?100-e.probability:0),c=n?"":o?`${i}\xA2`:"--",l=n?"":o?`${m}\xA2`:"--",g=ze(Number(t.marketTradeAmount)||0),d=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},u=!t.walletAddress||t.hasLoadedPortfolioPositions,p=We(e,s),f=St(e,s),v=!!f;t.marketTradeSide=qe(t.marketOrderMode,t.marketTradeSide,d);let $=!p&&!v&&u&&K(t.marketOrderMode,"yes",d),x=!p&&!v&&u&&K(t.marketOrderMode,"no",d),A=!p&&!v&&u&&K(t.marketOrderMode,t.marketTradeSide,d),N=p?"Market resolved":f||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),M=p?"Market resolved":f||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),F=Ct(s,t.marketTradeSide,g,t.marketOrderMode,d),I=t.marketOrderMode==="buy"?"Buy":"Exit",ae=o?"Arc testnet live":"Contract not deployed";b.hidden=!0,k.hidden=!1,k.classList.add("fullscreen"),document.body.classList.add("detail-mode"),Pt(e),Lt(e),t.walletAddress&&!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&H();let L=d.yesSharesUsdc>0||d.noSharesUsdc>0,Y="";L&&t.walletAddress&&(Y=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${Et(d,s).map(O=>`
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${O.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${_(O.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${_(O.payout)}</strong>
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
            <span class="market-status-pill">${ae}</span>
          </div>
          <h2>${e.question}</h2>
          ${Y}
          ${a.imageUrl?`
          <div class="market-detail-hero-image" style="width: 100%; height: 160px; border-radius: 14px; overflow: hidden; margin: 12px 0; border: 1px solid var(--market-border);">
            <img src="${a.imageUrl}" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          `:""}
          
          <div class="market-stats-row">
            <div class="market-stat">
              <span>${je(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${la(e,s)}</strong>
            </div>
            <div class="market-stat">
              <span>Volume</span>
              <strong>${s?`$${Math.round(s.volumeUsdc).toLocaleString()}`:e.volume}</strong>
            </div>
          </div>

          <div class="market-resolution-panel">
            <h3>Resolution Rules</h3>
            <p>${e.resolution}</p>
            ${f?`<p style="margin-top: 10px; color: #f59e0b; font-weight: 600;">${f}</p>`:""}
          </div>

          <section class="market-evidence-thread">
            <header>
              <h3>Timeline & Evidence</h3>
              <span>${r?"Loading...":`${a.evidence.length} updates`}</span>
            </header>
            <p class="market-thread-intro">Track how this topic is developing, newest first.</p>
            <div class="market-thread-timeline">
              ${r?Ea(3):a.evidence.length===0?'<div class="portfolio-empty compact">Market thread is still being prepared for this match.</div>':a.evidence.map(S=>`
                <article class="market-thread-update">
                  <div class="market-thread-marker"></div>
                  <div class="market-thread-update-content">
                    <div class="market-thread-update-meta">
                      <span>${S.date} \xB7 ${S.source}</span>
                    </div>
                    <h4>${S.headline}</h4>
                    <p>${S.summary}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                      ${/example\.com/i.test(S.sourceUrl)?"":`<a class="market-thread-source-link" href="${S.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(S.sourceUrl)}">${X(ke(e,S))?"AI briefing":"Unlock AI briefing"}</button>
                    </div>
                    ${X(ke(e,S))?t.loadingSummaryUrl===S.sourceUrl?`<div style="margin-top: 12px;">${Ge()}</div>`:`<div style="margin-top: 12px;">${Re(q(ke(e,S),t.aiSummaries[S.sourceUrl]))}</div>`:""}
                  </div>
                </article>
              `).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          <span>Yes <strong>${c}</strong></span>
          <span>No <strong>${l}</strong></span>
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${p||v?"disabled":""}>
          ${p?"Market Resolved":f||"Trade Market"}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${p||v?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${p||v?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${$?"":"disabled"}" data-market-trade-side="yes" ${$?"":"disabled"} title="${$?"Yes":N}">
                  <span>Yes</span>
                  <strong>${c}</strong>
                  ${$?"":`<small>${N}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${x?"":"disabled"}" data-market-trade-side="no" ${x?"":"disabled"} title="${x?"No":M}">
                  <span>No</span>
                  <strong>${l}</strong>
                  ${x?"":`<small>${M}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">$5-$10 USDC</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="5" max="10" step="0.01" inputmode="decimal" value="${g}" data-market-amount ${p||v?"disabled":""} />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>${t.marketOrderMode==="buy"?"Projected payout":"Exit amount"}</span>
            <strong>$${_(F)}</strong>
          </div>

          <div class="drawer-action-container">
            ${n?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:p?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':v?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${f}</button>`:t.walletAddress?u?A?`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${I} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${I.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},Nt=()=>{if(!b||!k)return;if(we?.toggleAttribute("hidden",!0),Se?.toggleAttribute("hidden",!0),Z?.toggleAttribute("hidden",!0),fe?.classList.add("active"),he?.classList.remove("active"),ge?.classList.remove("active"),T.forEach(n=>{Pt(n)}),window.setTimeout(()=>{t.activeSurface==="markets"&&T.forEach(n=>{Lt(n)})},750),t.selectedMarketId){let n=T.find(i=>i.id===t.selectedMarketId);if(n){Fa(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),k.hidden=!0,k.classList.remove("fullscreen"),b.hidden=!1,b.classList.add("markets-list");let e=T,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(n=>{let i=t.activeMarketTimeframe===n,m=n==="All"?e.length:e.filter(l=>l.timeframe===n).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${n}">
            <span>${n==="Sagas"?"Sagas":n}</span>
            <span class="timeframe-tab-count">${m}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&T.length===0){b.innerHTML=`
      <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
          <h1 style="margin: 0;">Markets</h1>
          <a class="arc-faucet-button" href="${Be}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
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
    `;return}let o="",s=(n,i,m)=>m.length===0?"":`
      <div class="market-timeframe-section">
        <div class="timeframe-section-header">
          <div class="timeframe-section-header-left">
            <h2>${n}</h2>
            <span class="timeframe-section-subtitle">${i}</span>
          </div>
          <span class="timeframe-section-count-badge">${m.length} ${m.length===1?"market":"markets"}</span>
        </div>
        <section class="markets-grid" aria-label="${n} prediction markets">
          ${m.map(Ra).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(c=>c.timeframe==="Daily"),i=e.filter(c=>c.timeframe==="Weekly"),m=e.filter(c=>c.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",n)}
      ${s("Weekly","Ends in a week",i)}
      ${s("Sagas (Long-term)","Narratives & futures",m)}
    `}else{let n=e.filter(c=>c.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,m="";t.activeMarketTimeframe==="Daily"?m="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?m="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",m="Narratives & futures"),o=`
      ${s(i,m,n)}
    `}b.innerHTML=`
    <header class="markets-header" style="box-sizing: border-box; width: 100%; display: block; padding-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 12px; flex-wrap: wrap;">
        <h1 style="margin: 0;">Markets</h1>
        <a class="arc-faucet-button" href="${Be}" target="_blank" rel="noreferrer" style="flex-shrink: 0;">Get testnet USDC</a>
      </div>
      <p style="margin: 10px 0 0; color: #647089; font-size: 0.95rem; font-weight: 600; line-height: 1.4; width: 100%;">
        Trade daily prediction markets. Winning shares split the final pool, and Daily winners earn leaderboard points.
      </p>
    </header>
    ${r}
    <div class="markets-container">
      ${o||`<p class="no-markets-message" style="color: var(--market-text-muted); text-align: center; padding: 48px 0; font-family: 'Space Grotesk', sans-serif;">No active markets available in this timeframe.</p>`}
    </div>
  `},Ht=()=>{if(!b||!k)return;we?.toggleAttribute("hidden",!0),Se?.toggleAttribute("hidden",!0),Z?.toggleAttribute("hidden",!0),fe?.classList.remove("active"),he?.classList.remove("active"),ge?.classList.remove("active"),document.body.classList.remove("detail-mode"),k.hidden=!0,b.hidden=!1,b.classList.add("markets-list"),t.walletAddress&&!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&H();let e=t.walletAddress&&t.hasLoadedPortfolioPositions?Ye():null;t.walletAddress&&e&&fetch(C("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(d=>console.error("Failed to report user score:",d)),E&&(clearInterval(E),E=null),b.innerHTML=`
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
        <button class="leaderboard-mode-tab ${J==="global"?"active":""}" type="button" data-leaderboard-view="global">Global</button>
        <button class="leaderboard-mode-tab ${J==="division"?"active":""}" type="button" data-leaderboard-view="division">Division</button>
      </div>

      <div class="global-prize-box" id="globalPrizeBox" ${J==="global"?"":"hidden"}>
        <div>
          <span>Global Season Race</span>
          <strong>Top 10 share a 150 USDC prize pool</strong>
        </div>
        <div>
          <span>Next season</span>
          <strong>Top 6 to Division 1, next 6 to Division 2</strong>
        </div>
      </div>

      <div class="division-title-container" id="divisionControls" ${J==="division"?"":"hidden"}>
        <div class="division-title-left" style="display: flex; align-items: center; gap: 8px; flex-wrap: nowrap !important; flex-shrink: 0 !important;">
          <h2 id="divisionTitleText" style="margin: 0; white-space: nowrap !important;">Division 1</h2>
          <button class="how-it-works-btn" id="howItWorksBtn" type="button" style="background: rgba(255,255,255,0.06) !important; border: 1px solid #1e1f2b !important; color: #ffffff !important; border-radius: 6px !important; padding: 4px 10px !important; font-size: 0.82rem !important; font-weight: 600 !important; cursor: pointer !important; font-family: 'Space Grotesk', sans-serif !important; white-space: nowrap !important; flex-shrink: 0 !important;">How it works</button>
        </div>
        <select id="divisionSelector" class="division-select-menu">
          <option value="1">Division 1</option>
        </select>
      </div>

      <div class="global-title-container" id="globalControls" ${J==="global"?"":"hidden"}>
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
  `;let a=d=>d.map((u,p)=>{let f=Number(u.globalRank)||p+1,v=String(u.username||""),$=!!(t.walletAddress&&v.toLowerCase()===t.walletAddress.toLowerCase()),x=$&&t.profileUsername?t.profileUsername:u.displayName||v,A=$?`${t.profileUsername?x:W(v)} (You)`:x.startsWith("0x")&&x.length===42?W(x):x,N=z(A),M=z(Xe(u.status)),F=u.nextSeasonDivision?`Division ${u.nextSeasonDivision}`:"Qualify",I=f<=10?"promotion-zone":"safety-zone",ae=f<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${$?"user-highlight":""} ${I}" role="listitem">
        <div class="leaderboard-row-left">
          ${ae}
          <span class="leaderboard-rank rank-${f}">${f}</span>
          <span class="leaderboard-username">${N}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(u.points)||0} pts</strong>
          <span>${u.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${z(F)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${M}</span>
        </div>
      </div>
    `}).join(""),r=d=>{J=d,document.querySelectorAll("[data-leaderboard-view]").forEach(u=>{u.classList.toggle("active",u.dataset.leaderboardView===d)}),document.getElementById("divisionControls")?.toggleAttribute("hidden",d!=="division"),document.getElementById("globalControls")?.toggleAttribute("hidden",d!=="global"),document.getElementById("globalPrizeBox")?.toggleAttribute("hidden",d!=="global")},o=d=>{let u=document.getElementById("leaderboardListContainer");u&&(u.innerHTML=`
      <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        ${Array.from({length:d}).map(()=>`
          <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
            <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
              <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
            <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        `).join("")}
      </div>
    `)},s=()=>{r("global"),o(10);let d=document.getElementById("leaderboardListContainer"),u=t.walletAddress?`&walletAddress=${encodeURIComponent(t.walletAddress)}`:"";fetch(C(`/api/leaderboard/global?nocache=1${u}`)).then(p=>p.json()).then(p=>{let f=p.players||[];d&&(d.innerHTML=f.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the global leaderboard yet.</p>`:a(f));let v=document.getElementById("seasonTimer");E&&clearInterval(E);let $=()=>{let A=new Date(p.seasonEndsAt).getTime()-new Date().getTime();if(A<=0){v&&(v.innerText="Season Finished!"),E&&clearInterval(E);return}let N=Math.floor(A/(1e3*60*60*24)),M=Math.floor(A%(1e3*60*60*24)/(1e3*60*60)),F=Math.floor(A%(1e3*60*60)/(1e3*60)),I=Math.floor(A%(1e3*60)/1e3);v&&(v.innerText=`${N}d ${M}h ${F}m ${I}s`)};$(),E=setInterval($,1e3)}).catch(p=>{console.error("Failed to load global leaderboard:",p),d&&(d.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading global leaderboard. Please try again.</p>`)})},n=d=>{r("division");let u=document.getElementById("leaderboardListContainer");u&&d!==void 0&&(u.innerHTML=`
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
      `);let p=t.walletAddress?`&walletAddress=${encodeURIComponent(t.walletAddress)}`:"",f=d?`&division=${d}`:"";fetch(C(`/api/leaderboard/division?nocache=1${p}${f}`)).then(v=>v.json()).then(v=>{let $=v.divisionNumber||1,x=v.players||[],A=v.totalDivisions||1,N=v.seasonEndsAt;Ce=$;let M=document.getElementById("divisionTitleText");M&&(M.innerText=`Division ${$}`);let F=document.getElementById("divisionSelector");F&&(F.innerHTML=Array.from({length:A},(L,Y)=>Y+1).map(L=>`
            <option value="${L}" ${L===$?"selected":""}>Division ${L}</option>
          `).join("")),u&&(x.length===0?u.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No active players in this division.</p>`:u.innerHTML=x.map((L,Y)=>{let S=Y+1,O=t.walletAddress&&L.username.toLowerCase()===t.walletAddress.toLowerCase(),G=O&&t.profileUsername?t.profileUsername:L.displayName||L.username,Te=z(Xe(L.status)),Ae=O?`${t.profileUsername?G:W(L.username)} (You)`:G.startsWith("0x")&&G.length===42?W(G):G,_t=z(Ae),Me="safety-zone",Le='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return S<=2?(Me="promotion-zone",Le='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):S>=5&&(Me="relegation-zone",Le='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
                <div class="leaderboard-row ${O?"user-highlight":""} ${Me}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
                  <!-- Left Side: Arrow + Rank + Username -->
                  <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
                    ${Le}
                    <span class="leaderboard-rank rank-${S}" style="flex-shrink: 0; margin-right: 4px;">${S}</span>
                    <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${_t}</span>
                  </div>
                  <!-- Center Side: Points -->
                  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${L.points} pts</span>
                  </div>
                  <!-- Right Side: Status -->
                  <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
                    <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${Te}</span>
                  </div>
                </div>
              `}).join(""));let I=document.getElementById("seasonTimer");E&&clearInterval(E);let ae=()=>{let L=new Date().getTime(),S=new Date(N).getTime()-L;if(S<=0){I&&(I.innerText="Season Finished!"),E&&clearInterval(E);return}let O=Math.floor(S/(1e3*60*60*24)),G=Math.floor(S%(1e3*60*60*24)/(1e3*60*60)),Te=Math.floor(S%(1e3*60*60)/(1e3*60)),Ae=Math.floor(S%(1e3*60)/1e3);I&&(I.innerText=`${O}d ${G}h ${Te}m ${Ae}s`)};ae(),E=setInterval(ae,1e3)}).catch(v=>{console.error("Failed to load division leaderboard:",v),u&&(u.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading division leaderboard. Please try again.</p>`)})};J==="division"?n(Ce||void 0):s(),document.querySelectorAll("[data-leaderboard-view]").forEach(d=>{d.addEventListener("click",()=>{(d.dataset.leaderboardView==="division"?"division":"global")==="division"?n(Ce||void 0):s()})}),document.getElementById("divisionSelector")?.addEventListener("change",d=>{let u=Number(d.target.value);n(u)}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){y("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let u=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,u.toFixed(2)),t.walletBalance=u.toFixed(2),y("Claimed $100 USDC mock credits!"),U(),Ht()}else y("Opening Circle Faucet..."),window.open(Be,"_blank")});let c=document.getElementById("howItWorksBtn"),l=document.getElementById("howItWorksModal"),g=document.getElementById("closeRulesModalBtn");c?.addEventListener("click",()=>{l&&l.classList.add("active")}),g?.addEventListener("click",()=>{l&&l.classList.remove("active")}),l?.addEventListener("click",d=>{d.target===l&&l.classList.remove("active")})},Ot=()=>{t.activeSurface="feed",t.selectedMarketId=null,we?.removeAttribute("hidden"),Se?.removeAttribute("hidden"),Z?.removeAttribute("hidden"),fe?.classList.remove("active"),he?.classList.add("active"),ge?.classList.remove("active"),b?.classList.remove("markets-list")},za=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",dt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id],o=za(r?.outcome),s=Et(a,r),n=s.reduce((p,f)=>Math.max(p,f.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,m=r?.outcome??0,c=m===1?a.yesSharesUsdc:m===2?a.noSharesUsdc:0,l=m===1?r?.yesSharesUsdc??0:m===2?r?.noSharesUsdc??0:0,g=r?.volumeUsdc??0,d=c>0&&l>0?c/l*g:0,u=m===0?"":d>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${_(d)}</button>`:'<span style="color: #8e8e93; font-size: 0.82rem; font-weight: 700;">No payout</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${B(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${_(n)}</strong></div>
        ${s.map(p=>`
          <div><span>${p.label}</span><strong>${_(p.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${_(i)} total shares`:""}</span>
        ${u||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Wa=async e=>{if(!t.walletAddress){y("Please sign in first.");return}let a=T.find(o=>o.id===e),r=a?j(a):"";if(!a||!r){y("Market is not available.");return}try{Ye();let o=await qt(r,t.walletAddress);delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await de(t.walletAddress),await H(),y(o.won?`Claimed $${_(o.amountUsdc)}`:"No payout to claim"),U(),pe()}catch(o){y(o instanceof Error?o.message:"Claim failed")}},pe=()=>{if(!b||!k)return;we?.toggleAttribute("hidden",!0),Se?.toggleAttribute("hidden",!0),Z?.toggleAttribute("hidden",!0),fe?.classList.remove("active"),he?.classList.remove("active"),ge?.classList.add("active"),document.body.classList.remove("detail-mode"),k.hidden=!0,b.hidden=!1,b.classList.add("markets-list"),t.walletAddress&&!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&H();let e=T.filter(l=>{let g=t.marketPositions[l.id];return g&&g.yesSharesUsdc+g.noSharesUsdc>0}),a=e.filter(l=>(t.marketSnapshots[l.id]?.outcome??0)===0),r=e.filter(l=>(t.marketSnapshots[l.id]?.outcome??0)!==0),o=!!t.walletAddress,s=t.profileUsername||(t.walletAddress?W(t.walletAddress):"Anonymous"),n=z(s),i=z(t.profileUsername||""),m=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${z(t.profileNotice.message)}</div>`:"",c=s.charAt(0).toUpperCase();b.innerHTML=`
    <section class="portfolio-surface">
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 24px !important; margin-bottom: 24px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 54px !important; height: 54px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.45rem !important; font-weight: 750 !important;">${c}</span>
          </div>
          <div class="profile-details" style="display: flex !important; flex-direction: column !important; min-width: 0 !important;">
            <div class="username-display-row" style="display: flex !important; align-items: center !important; gap: 8px !important;">
              <span class="profile-username" style="font-family: 'Space Grotesk', sans-serif !important; font-size: 1.35rem !important; font-weight: 750 !important; color: var(--market-text-main) !important; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis !important; max-width: 180px !important;">${n}</span>
              ${o?`
                <button type="button" class="edit-username-btn" id="editUsernameBtn" style="background: transparent !important; border: none !important; color: var(--market-text-muted) !important; cursor: pointer !important; padding: 4px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
                </button>
              `:""}
            </div>
            ${o?`
              <div class="wallet-address-row" style="display: flex !important; align-items: center !important; gap: 8px !important; margin-top: 4px !important;">
                <small style="color: var(--market-text-muted) !important; font-family: monospace !important; font-size: 0.78rem !important;">${W(t.walletAddress)}</small>
                <button type="button" class="copy-address-btn" data-address="${t.walletAddress}" style="background: rgba(59,130,246,0.06) !important; border: 1px solid var(--market-border) !important; color: var(--market-text-muted) !important; border-radius: 4px !important; padding: 2px 6px !important; font-size: 0.7rem !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 4px !important; transition: all 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy
                </button>
              </div>
            `:'<small style="color: var(--market-text-muted) !important; font-size: 0.8rem !important; display: block !important; margin-top: 4px !important;">Connect wallet to customize profile</small>'}
          </div>
        </div>

        ${o?`
          <div class="profile-username-edit-form" id="usernameEditForm" style="display: none !important; align-items: center !important; gap: 8px !important; margin-top: 16px !important; width: 100% !important;">
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${i}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${m}

        <div class="portfolio-wallet-balance-row" style="margin-top: 24px !important; padding-top: 16px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${te("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
            </strong>
          </div>
          <div style="display: flex !important; align-items: center !important; gap: 8px !important;">
            ${o?`
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
        <span>Open ${a.length}</span>
        <span>Finalized ${r.length}</span>
      </div>
      ${t.loadingPortfolioPositions?Pa(2):t.walletAddress?e.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${a.length?a.map(dt).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${r.length?r.map(dt).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},h=()=>{if(vt.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){Nt();return}if(t.activeSurface==="portfolio"){pe();return}if(t.activeSurface==="leaderboard"){Ht();return}Ot(),Tt(),ue(),_a(),D&&(D.value=t.activeArchiveDate??"")};Ne.textContent=yt();Z?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");r&&(t.activeCategory=r.dataset.category,window.history.pushState({},"","#feed"),R(),h(),be(),ee(t.activeCategory))});fe?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),R(),h()});he?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),R(),h(),be(),ee(t.activeCategory)});ge?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),R(),h()});V?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",ve()):_e()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let s=r.getAttribute("data-address");s&&navigator.clipboard.writeText(s).then(()=>{y("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let s=o.getAttribute("data-claim-market");s&&Wa(s);return}a.closest("[data-connect-wallet]")&&(t.walletAddress?ut():_e())});vt.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),be(),ee(t.activeCategory),a==="saved"&&(wa(),Oe(),me())),R(),h()})});D?.addEventListener("change",()=>{t.activeArchiveDate=D.value||null,window.history.pushState({},"","#feed"),R(),h(),ee(t.activeCategory)});ta?.addEventListener("click",()=>{t.activeArchiveDate=null,D&&(D.value=""),window.history.pushState({},"","#feed"),R(),h(),ee(t.activeCategory)});b?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let u=b?.querySelector(".username-display-row"),p=b?.querySelector("#usernameEditForm");if(u&&p){u.style.display="none",p.style.display="flex";let f=p.querySelector("#usernameInput");f&&f.focus()}return}if(a.closest("#cancelUsernameBtn")){let u=b?.querySelector(".username-display-row"),p=b?.querySelector("#usernameEditForm");u&&p&&(u.style.display="flex",p.style.display="none");return}let s=a.closest("#saveUsernameBtn");if(s){let p=b?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(p){let f=p.value.trim().slice(0,15),v=s,$=v.textContent||"Save";v.disabled=!0,v.textContent="Saving...",ka(f),t.profileNotice=null;try{t.walletAddress&&await se(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},y("Username updated"),pe()}catch(x){let A=x instanceof Error?x.message:"Username save failed";t.profileNotice={type:"error",message:A},y(A),v.disabled=!1,v.textContent=$,pe()}}return}let n=a.closest("[data-timeframe]");if(n){let u=n.dataset.timeframe;t.activeMarketTimeframe=u,Nt();return}let i=a.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,window.history.pushState({},"",`#market-${t.selectedMarketId}`),h(),window.scrollTo({top:0,behavior:"smooth"});return}let m=a.closest("[data-thread-story-id]"),c=a.closest("[data-export-id]"),l=a.closest("[data-export-action]"),g=a.closest("[data-story-id]");if(m){e.stopPropagation();let u=t.stories.find(p=>p.id===Number(m.dataset.threadStoryId));u&&ca(u);return}let d=a.closest(".mobile-bookmark-btn, .bookmark-button");if(d){e.stopPropagation();let u=d.dataset.bookmarkUrl||"",p=t.stories.find(f=>f.sourceUrl===u);if(!p)return;p.saved=!p.saved,p.saved?Q.add(u):Q.delete(u),ea(),y(p.saved?"Saved to your list":"Removed from saved"),ue();return}if(l){e.stopPropagation(),Ha(Number(l.dataset.exportStoryId),l.dataset.exportAction);return}if(c){e.stopPropagation();let u=Number(c.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===u?null:u,ue();return}g&&(a.closest("a")||xt(Number(g.dataset.storyId)))});b?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");!r||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),xt(Number(r.dataset.storyId)))});k?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let c=t.stories.find(l=>l.id===Number(r.dataset.unlockBriefing));c&&Ze(c);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let c=decodeURIComponent(o.dataset.unlockBriefingUrl||""),l=ia(c);l&&(X(l)?xe(l):Ze(l));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),h();return}if(a.closest("#openTradeDrawerBtn")){let c=T.find(d=>d.id===t.selectedMarketId);if(c){if(We(c,t.marketSnapshots[c.id])){y("This market is resolved and can no longer be traded.");return}if(St(c,t.marketSnapshots[c.id])){y("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0;let l=k.querySelector("#tradeDrawer"),g=k.querySelector("#tradeDrawerBackdrop");l?.classList.add("open"),g?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let c=k.querySelector("#tradeDrawer"),l=k.querySelector("#tradeDrawerBackdrop");c?.classList.remove("open"),l?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let c=T.find(l=>l.id===t.selectedMarketId);if(c){let l=ja(c),g=`https://api.whatsapp.com/send?text=${encodeURIComponent(l)}`;window.open(g,"_blank")}return}let s=a.closest("[data-market-trade]");if(s&&t.selectedMarketId){let c=s.dataset.marketTrade;Aa(t.selectedMarketId,c);return}let n=a.closest("[data-market-trade-side]");if(n){if(n.disabled||n.classList.contains("disabled"))return;let c=T.find(d=>d.id===t.selectedMarketId),l=c?t.marketPositions[c.id]:void 0,g=n.dataset.marketTradeSide;if(!K(t.marketOrderMode,g,l))return;t.marketTradeSide=g,h();return}let i=a.closest("[data-market-order-mode]");if(i){t.marketOrderMode=i.dataset.marketOrderMode;let c=T.find(g=>g.id===t.selectedMarketId),l=c?t.marketPositions[c.id]:void 0;t.marketTradeSide=qe(t.marketOrderMode,t.marketTradeSide,l),h();return}a.closest("[data-back-to-feed]")&&ma()});k?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;t.marketTradeAmount=ze(Number(a.value)||0);let r=T.find(m=>m.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,s=r?t.marketPositions[r.id]:void 0,n=Ct(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),i=k.querySelector(".market-inline-payout strong");i&&(i.textContent=`$${_(n)}`)});k?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});k?.addEventListener("focusout",e=>{e.target.matches("[data-market-amount]")&&window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)});window.addEventListener("popstate",ve);window.addEventListener("hashchange",ve);Ee?.addEventListener("click",()=>{if(!Pe||!Ee)return;let e=!Pe.hidden;Pe.hidden=e,Ee.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,ue());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};w&&(w.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,D&&(D.value=""),R(),be(),ee(t.activeCategory)),r.dataset.menuAction==="saved"&&(Ot(),Oe(),me(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),R(),h())});h();U();Xt().then(()=>{Ta(),h(),U(),window.setTimeout(Ga,1200),fa()});var qa=document.querySelector("#mobileArchiveCard"),oe=document.querySelector("#archiveControls");qa?.addEventListener("click",()=>{if(!oe)return;oe.classList.toggle("mobile-open")&&setTimeout(()=>oe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Ya=document.querySelector("#archivePill");Ya?.addEventListener("click",e=>{if(e.stopPropagation(),!oe)return;oe.classList.toggle("mobile-open")&&setTimeout(()=>oe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var ye=!1,ct=!1,Ga=()=>{ct||(ct=!0,(async()=>{let e=await De();if(ye=!!e,e){t.walletConnecting=!0,U();try{let a=await Yt();ye=!1,t.walletConnecting=!1,a?(t.walletAddress=await De(),t.walletAddress&&(re(),t.walletBalance=await de(t.walletAddress),await H()),U(),t.activeSurface==="portfolio"&&h()):(t.walletAddress=null,t.walletBalance=null,re(),y("Session expired. Please sign in again."),U(),h())}catch(a){console.warn(a),ye=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,re(),y("Session expired. Please sign in again."),U(),h()}}await Gt(a=>{ye||(t.walletAddress=a,t.walletBalance=null,re(),a&&se(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,U(),a?(de(a).then(r=>{t.walletBalance=r,U(),t.activeSurface==="portfolio"&&h()}),H()):t.activeSurface==="portfolio"&&h())})})())};ft("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",s=typeof o=="string"?o:r.getAttribute("class")||"",n=r.getAttribute("href")||"";(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||r.textContent?.trim()==="Open source")&&!s.includes("disabled")&&n!=="#"&&n!==""&&ft("open_source")}},!0);
