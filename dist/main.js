import"./chunks/chunk-ZUUPKAA6.js";var me="Sports",De=[{id:"wc-spain-belgium-qualify",category:me,timeframe:"Daily",optionMarket:!0,question:"Which team will qualify in Spain vs Belgium?",options:[{id:"spain",label:"Spain"},{id:"belgium",label:"Belgium"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on the team that officially qualifies in Spain vs Belgium, including extra time and penalties.",threadTopic:"Spain vs Belgium Qualify Watch",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-spain-concede-belgium",category:me,timeframe:"Daily",optionMarket:!0,question:"Will Spain concede against Belgium?",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on whether Belgium are officially credited with at least one goal against Spain in regular time or extra time. Penalty shootout goals do not count.",threadTopic:"Spain Clean Sheet Watch vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-yamal-goal-assist-belgium",category:me,timeframe:"Daily",optionMarket:!0,question:"Will Lamine Yamal record a goal or assist against Belgium?",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on whether Lamine Yamal is officially credited with at least one goal or at least one assist for Spain against Belgium in regular time or extra time. Penalty shootout goals do not count.",threadTopic:"Lamine Yamal Impact vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-spain-goals-belgium",category:me,timeframe:"Daily",optionMarket:!0,question:"How many goals will Spain score in regular + extra time vs Belgium?",options:[{id:"0",label:"0 goals"},{id:"1",label:"1 goal"},{id:"2",label:"2 goals"},{id:"3-plus",label:"3+ goals"}],probability:0,kickoffAt:"2026-07-10T19:00:00Z",closes:"Jul 10, 7:40 PM GMT+1",resolution:"One option resolves correct based on the number of goals officially scored by Spain against Belgium in regular time and extra time. Penalty shootout goals do not count.",threadTopic:"Spain Goals vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-tonali-spurs",category:me,timeframe:"Sagas",question:"Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",probability:58,closes:"September 1, 2026",resolution:"Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline.",threadTopic:"Sandro Tonali Tottenham Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$182K",traders:"980",liquidity:"$29K",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-guimaraes-arsenal",category:me,timeframe:"Sagas",question:"Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",probability:45,closes:"September 1, 2026",resolution:"Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline.",threadTopic:"Bruno Guimaraes Arsenal Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$204K",traders:"1,240",liquidity:"$36K",imageUrl:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",evidence:[]}];var Ze="https://faucet.circle.com/",ft="siftle_backend_wallet_migration_notice",Ye=null,H=()=>(Ye||(Ye=import("./chunks/arc-ZAE4BJZI.js")),Ye),q=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,pa=async()=>(await H()).connectArcWallet(),X=async e=>(await H()).readArcUsdcBalance(e),ua=async(e,a,r,o)=>(await H()).payAiBriefingUnlock(e,a,r,o),ma=e=>{H().then(a=>a.resolveLocalTestMarketYes(e))},fa=async e=>(await H()).readArcMarketSnapshot(e);var Ct=async(e,a)=>(await H()).readArcMarketState(e,a),ga=async(e,a,r,o,s,n,i)=>(await H()).executeArcMarketOrder(e,a,r,o,s,n,i),ha=async(e,a,r,o,s)=>(await H()).executeArcOptionMarketOrder(e,a,r,o,s),Et=()=>{H().then(e=>e.disconnectArcWallet())},va=async(e,a)=>(await H()).claimArcMarketPayout(e,a),Oe=async()=>(await H()).getConnectedArcWallet(),ya=async()=>(await H()).validateArcSession(),ba=async e=>(await H()).subscribeArcWallet(e),ka=async()=>(await H()).triggerGatewayWarmup(),wa=["Sports"],Sa="https://siftle.onrender.com",xa=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?Sa:""},$a=xa(),I=e=>`${$a}${e}`,It="siftle_theme",Ta=()=>{try{return window.localStorage.getItem(It)==="light"?"light":"dark"}catch{return"dark"}},$e=Ta();function C(e){fetch(I("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e})}).catch(a=>console.error("Failed to track event:",a))}var t={activeSurface:"markets",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:5,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{}},we=null,V="global",J=null,gt=!1;var ht=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";ht&&localStorage.setItem("siftle_pending_referral_code",ht.trim().toUpperCase());var Bt=20,E=De,Aa=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},Le=()=>Aa(t.portfolioMarketPreviews,E,De),Ma=async()=>{t.loadingMarkets=!0,E.length===0&&(E=De);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(I("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(E=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},Dt=async()=>{try{let e=await fetch(I("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Nt="siftle.savedUrls",ee=new Set,rt=()=>{try{let e=localStorage.getItem(Nt)||"[]",a=JSON.parse(e);ee=new Set(a.filter(Boolean))}catch{ee=new Set}},La=()=>{try{localStorage.setItem(Nt,JSON.stringify(Array.from(ee)))}catch{}},Te=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!ee.has(e.sourceUrl)};rt();Te();var Xe=document.querySelector("#dateLabel"),te=document.querySelector("#categoryTabs"),x=document.querySelector("#storyList"),$=document.querySelector("#storyDetail"),Ge=document.querySelector("#menuButton"),Je=document.querySelector("#menuPanel"),A=document.querySelector("#menuStatus"),z=document.querySelector("#archiveDateSelect"),vt=document.querySelector("#archiveStatus"),Pa=document.querySelector("#todayButton"),He=document.querySelector(".brief-hero"),Re=document.querySelector("#archiveControls"),Pe=document.querySelector("[data-surface='markets']"),Ue=document.querySelector("[data-surface='feed']"),Ce=document.querySelector("[data-surface='portfolio']"),Q=document.querySelector("#walletButton"),Se=document.querySelector("[data-theme-toggle]"),Ot=Array.from(document.querySelectorAll("[data-bottom-nav]")),Ke,Ua=()=>{if(!Se)return;let a=`Switch to ${$e==="light"?"dark":"light"} mode`;Se.setAttribute("aria-label",a),Se.title=a,Se.dataset.activeTheme=$e},_t=e=>{$e=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(It,e)}catch{}Ua()};_t($e);var B=()=>{if(Q){let e=Q.querySelector(".wallet-button-label");Q.classList.toggle("connected",!!t.walletAddress),Q.disabled=t.walletConnecting,Q.setAttribute("aria-label",t.walletAddress?`Wallet ${q(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),Q.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${q(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",B);Se?.addEventListener("click",()=>{_t($e==="light"?"dark":"light")});var Ca=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(I("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&y("Referral connected"))}catch(r){console.warn(r)}},Ae=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(I(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&F()}}},qe=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,C("wallet_connect_start"),B();try{let e=await pa();if(e){C("wallet_connect_success"),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),t.walletBalance=await X(e),await Ca(e),Ae(),await j(),le(!0).catch(r=>console.error("Failed to report leaderboard entry:",r));let a=localStorage.getItem(ft);a?(localStorage.removeItem(ft),y(a)):y("Connected to Arc Testnet"),window.location.hash="#portfolio",se()}}catch(e){C("wallet_connect_failed"),y(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,B()}}},y=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Ke&&window.clearTimeout(Ke),Ke=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=y;var Ea=(e,a,r,o)=>{let s=document.createElement("div");s.className="success-modal-overlay",s.innerHTML=`
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
  `,document.body.appendChild(s),setTimeout(()=>{s.classList.add("show")},10);let n=()=>{s.classList.remove("show"),setTimeout(()=>{s.remove()},300)};s.querySelector(".success-modal-close-btn")?.addEventListener("click",n),s.querySelector(".success-modal-action-btn")?.addEventListener("click",n),s.addEventListener("click",i=>{i.target===s&&n()})},Y=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},Ht=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},Ia=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(!(t.activeCategory==="All"||e.category===t.activeCategory))return!1;let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),et=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,Ba=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Da=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let s=r.slice(0,a).join(" "),n=Math.max(s.lastIndexOf("."),s.lastIndexOf("?"),s.lastIndexOf("!"));return n>s.length*.45?s.slice(0,n+1).trim():`${s.replace(/[,:;.'"!\?\s]+$/,"")}...`},yt=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let s=JSON.parse(a);if(typeof s.summary=="string"){a=s.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),Ba(a)?"":Da(a)},ae=(e,a)=>yt(a||"")||yt(e.summary)||e.headline,Na=e=>{let r=e?.closest(".detail-summary, .thread-item, .market-thread-update")?.querySelector(".briefing-capture-area");if(!r||!window.html2canvas)return;let o=document.createElement("div");o.className="briefing-export-staging";let s=r.cloneNode(!0);s.classList.add("briefing-export-surface");let n=document.documentElement.dataset.theme==="light";n?(s.style.background="linear-gradient(180deg, #ffffff, #f8fafc)",s.style.border="1px solid #cbd5e1"):(s.style.background="linear-gradient(180deg, rgba(15, 23, 42, 0.98), rgba(17, 24, 39, 0.98))",s.style.border="1px solid #1e293b"),s.style.width="704px",s.style.padding="28px 30px",s.style.borderRadius="24px";let i=s.querySelector(".briefing-capture-header");i&&(i.style.display="flex",i.style.marginBottom="18px",i.style.paddingBottom="14px");let l=s.querySelector(".briefing-capture-title");l&&(l.style.display="block",l.style.fontSize="1.48rem",l.style.lineHeight="1.3",l.style.marginBottom="16px");let u=s.querySelector(".briefing-capture-intro");u&&(u.style.fontSize="1rem",u.style.lineHeight="1.65",u.style.marginBottom="18px"),s.querySelectorAll(".briefing-section").forEach(g=>{g.style.border="none",g.style.borderRadius="18px",g.style.padding="18px 20px 18px 22px",g.style.marginBottom="14px",n?g.style.backgroundColor="#f1f5f9":g.style.backgroundColor="rgba(30, 41, 59, 0.45)"}),s.querySelectorAll(".briefing-title").forEach(g=>{g.style.fontSize="0.84rem",g.style.letterSpacing="0.12em",g.style.marginBottom="12px"}),s.querySelectorAll(".briefing-text, .briefing-list li").forEach(g=>{g.style.fontSize="1rem",g.style.lineHeight="1.72",g.style.fontWeight="650",n?g.style.color="#000000":g.style.color="#e2e8f0"}),o.appendChild(s),document.body.appendChild(o),s.offsetHeight,requestAnimationFrame(()=>{setTimeout(()=>{window.html2canvas(s,{backgroundColor:n?"#f5f7fb":"#0f172a",scale:2,logging:!1,useCORS:!0}).then(g=>{let c=document.createElement("a");c.download="siftle-briefing.png",c.href=g.toDataURL("image/png"),c.click(),window.showActionToast?.("Briefing card image downloaded!")}).catch(()=>{window.showActionToast?.("Unable to download briefing card")}).finally(()=>{o.remove()})},40)})};window.downloadBriefingCard=Na;var Me=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),Oa=e=>{let a=t.stories.find(n=>n.id===e),r=a?Me(a.headline):String(e),s=`${window.location.origin+(window.location.pathname.endsWith("/")?window.location.pathname.slice(0,-1):window.location.pathname)}/story/${r}`;navigator.clipboard.writeText(s).then(()=>{window.showActionToast?.("Link copied to clipboard!")}).catch(()=>{window.showActionToast?.("Unable to copy link")})};window.copyBriefingLink=Oa;var ot=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(a){let n=a.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="/assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${n}</h3>
    `}r[0].trim()&&(o+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let s="";for(let n=1;n<r.length;n+=2){let i=r[n].trim().toUpperCase(),l=r[n+1]?r[n+1].trim():"";if(!l)continue;let u="";if(i==="KEY POINTS"){let m=l.split(/(?:•|\*|-)\s+/).map(p=>p.trim()).filter(Boolean);m.length>0?u=`<ul class="briefing-list">${m.map(p=>`<li>${p}</li>`).join("")}</ul>`:u=`<p class="briefing-text">${l}</p>`}else u=`<p class="briefing-text">${l}</p>`,i==="TAKEAWAY"&&(s=l);let f=i.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${f}-section">
        <h4 class="briefing-title">${i}</h4>
        ${u}
      </div>
    `}return o+="</div>",a&&(o+=`
      <div class="share-briefing-container">
        <button type="button" class="share-briefing-btn copy-link-btn" onclick="window.copyBriefingLink?.(${a.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          <span>Copy Link</span>
        </button>
        <button type="button" class="share-briefing-btn" onclick="window.downloadBriefingCard?.(event.currentTarget)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Download Card</span>
        </button>
      </div>
    `),o},Ee=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${M(a)}</p>`:""},_a=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},st=e=>`siftle_ai_briefing_unlock_${_a()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,Rt=e=>localStorage.getItem(st(e))||"",Ha=e=>{localStorage.removeItem(st(e))},re=e=>!!Rt(e),qt=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:ee.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Ra=e=>{let a=t.stories.find(s=>s.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(s=>s.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let s=E.find(n=>n.id===t.selectedMarketId);if(s){let n=Fe(s).evidence.find(i=>i.sourceUrl===e);if(n)return qt(s,n)}}return null},nt=(e,a)=>{let r=Ga(e,a);return r===null?null:r-Bt*60*1e3},jt=(e,a)=>{let r=nt(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},zt=(e,a)=>{let r=nt(e,a);return r===null?null:Date.now()>=r?`Locked ${Bt}m before kickoff`:null},qa=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled;return`
    <div class="briefing-section">
      ${Ee(e)}
      ${a?`
          ${he()}
        `:`
          <p class="briefing-text">
            ${o?`Pay a <strong>${r}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${r}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${o?"Unlock via Circle x402":"AI briefing"}
          </button>
        `}
    </div>
  `},it=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],lt=e=>`
  <div class="briefing-section">
    ${Ee(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,tt=async(e,a=!1)=>{if(!t.walletAddress){y("Please sign in first.");return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",C("ai_unlock_attempt"),h();try{let r=await fetch(I("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let s=Number(o.amountUsdc)||1e-4;if(Number(t.walletBalance||0)<s)throw new Error(`Your wallet has insufficient balance. Please fund your wallet (minimum ${s} USDC required).`);let i=await ua(o.treasuryAddress,s,m=>{A&&(A.textContent=m),t.briefingStatusByUrl[e.sourceUrl]=m,h()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=o.x402Enabled?`Payment successful. Loading AI briefing paid with ${o.amountUsdc} testnet USDC through x402.`:`Payment successful. Loading AI briefing paid with ${o.amountUsdc} testnet USDC.`,h();let l=await fetch(I("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:i})}),u=await l.json();if(!l.ok||!u.unlockToken)throw new Error(u.error||"AI briefing failed");localStorage.setItem(st(e),u.unlockToken),C("ai_unlock_success"),(Number(u?.bonus?.points)||0)>0&&le(!1).catch(m=>console.error("Failed to refresh leaderboard bonus:",m)),await je(e)}catch(r){C("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl],y(r instanceof Error?r.message:"AI briefing failed")}finally{t.unlockingSummaryUrl=null,h()}}},je=async e=>{if(re(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=ae(e,e.ai_summary),C("view_summary"),A&&(A.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded"),h();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing...",h();try{let a=await fetch(I("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:Rt(e)})});if(!a.ok){if(a.status===402){Ha(e),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",A&&(A.textContent="Unlock expired. Unlock again to continue."),h();return}throw new Error(`Summary request failed with ${a.status}`)}let r=await a.json();t.aiSummaries[e.sourceUrl]=ae(e,r.summary),t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",A&&r.provider&&(A.textContent=r.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${r.provider}`)}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",A&&(A.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,h()}}},Ft=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);if(r){if(r.type==="tweet"){window.open(r.sourceUrl,"_blank","noreferrer");return}t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${Me(r.headline)}`),h(),a&&!re(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),h(),tt(r,!0)):re(r)&&je(r),window.scrollTo({top:0,behavior:"smooth"})}},ja=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${Me(e.headline)}`),h(),Wt(e),window.scrollTo({top:0,behavior:"smooth"})},za=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.history.pushState({},"","#feed"),h(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Wt=async e=>{try{let a=await fetch(I(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),A&&(A.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),y("That timeline no longer has a verified past update"),A&&(A.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,h()}};function se(){if(window.location.hash==="#resolve-local-yes"){let a=E.find(r=>r.id==="siftle-local-test-2")||E.find(r=>r.timeframe==="Daily"&&G(r).startsWith("0x00000000000000000000000000000000000001"));if(a){ma(G(a)),or(a,"yes"),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),y("Local test market resolved YES"),j().then(()=>{le(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),B(),F()});return}}let e=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||e){t.activeSurface="markets",t.selectedMarketId=e?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null;let a=e?E.find(r=>r.id===e[1]):void 0;document.title=a?`${a.question} | Siftle`:"Siftle Markets",h();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,document.title="Siftle Portfolio",h();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,document.title="Siftle Leaderboard",h();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let a=window.location.hash.match(/^#story-(.+)$/),r=window.location.hash.match(/^#thread-(.+)$/);if(t.stories.length===0&&!t.isLoading&&!t.hasLoadedFeed){Yt(t.activeCategory).then(()=>{se()});return}let o;if(a){let i=a[1];o=t.stories.find(l=>Me(l.headline)===i),!o&&/^\d+$/.test(i)&&(o=t.stories.find(l=>l.id===Number(i)))}let s;if(r){let i=r[1];s=t.stories.find(l=>Me(l.headline)===i),!s&&/^\d+$/.test(i)&&(s=t.stories.find(l=>l.id===Number(i)))}o?document.title=`${o.headline} | Siftle`:s?document.title=`${s.headline} | Siftle`:document.title="Siftle News";let n=t.selectedStoryId!==null||t.selectedThreadUrl!==null;t.selectedStoryId=o?.id??null,t.selectedThreadUrl=s?.sourceUrl??null,t.activeThread=null,h(),o&&je(o),s&&Wt(s),!o&&!s&&n&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}));return}t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,document.title="Siftle",h(),ne(t.activeCategory)}var at=e=>{vt&&(vt.textContent=e)},Yt=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Gt(),h());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(I(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let s=await o.json();if(t.stories=s.top_stories??[],Te(),t.hasLoadedFeed=!0,Xe&&(Xe.textContent=Ht(s.date??t.activeArchiveDate)),A)if(t.activeArchiveDate)A.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let n=s.archive?.provider==="shelby"?"Shelby":"local archive";A.textContent=`Latest published feed loaded from ${n}`}at(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),Te(),t.hasLoadedFeed=!0,A&&(A.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,h(),se()}},Fa=async()=>{if(z)try{let e=await fetch(I("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),z.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),z.value=t.activeArchiveDate??"",at(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),at("Archive unavailable")}},ze=()=>{gt||(gt=!0,Fa())},ne=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Yt(e,a)};var Wa=e=>e==="All"?"For you":e==="Sports"?"Football":e,W=e=>e==="Sports"?"Football":e,Gt=()=>{te&&(te.innerHTML=wa.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${Wa(e)}
        </button>
      `).join(""))},Jt=e=>(e.thread?.count??0)>=1,Ya=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Kt=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),s=new Date(r.publishedAt||0).getTime();return(Number.isNaN(s)?0:s)-(Number.isNaN(o)?0:o)}),Fe=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},Ga=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},Ja=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,Ka=(e,a)=>({date:Ja(e,a),source:e.source,headline:e.headline,summary:ae(e),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Vt=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(I(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...Kt(r.items??[])],s=o.filter((l,u,f)=>f.findIndex(m=>m.sourceUrl===l.sourceUrl)===u).map(Ka),i=o[0]?.imageUrl;s.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:s,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&h()}}},G=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",ie=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],oe=e=>!!(e.optionMarket&&ie(e).length>1),Va=e=>{let a=ie(e);return a.find(r=>r.id===t.marketTradeOptionId)||a[0]||null},N=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),M=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),dt=e=>`siftle_profile_username_${e.toLowerCase()}`,Qt=e=>e.trim().replace(/\s+/g," ").slice(0,15),fe=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=dt(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=Qt(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},Qa=e=>{if(!t.walletAddress)return;let a=dt(t.walletAddress),r=Qt(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},Za=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},Zt=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:5,max:10,fallback:5}},Ie=(e,a,r,o)=>{let{min:s,max:n,fallback:i}=Zt(a,r,o);return Number.isFinite(e)?Math.min(n,Math.max(s,e)):i},Xt=(e,a,r,o,s)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let n=a==="yes"?s?.yesSharesUsdc??0:s?.noSharesUsdc??0,i=e.yesSharesUsdc,l=e.noSharesUsdc;if(o==="sell")return Math.min(r,n);let u=(a==="yes"?i:l)+r,f=i+l+r;return u<=0||f<=0?r:(n+r)/u*f},ea=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},Xa=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},ta=e=>`siftle_claimed_markets_${e.toLowerCase()}`,_e=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(ta(t.walletAddress))||"[]"))}catch{return new Set}},er=e=>{if(!t.walletAddress)return;let a=_e();a.add(e),localStorage.setItem(ta(t.walletAddress),JSON.stringify(Array.from(a)))},We=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),Z=(e,a,r)=>{let o=r?.yesSharesUsdc??0,s=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:s>0:a==="yes"?s<=0:o<=0},ct=(e,a,r)=>{if(Z(e,a,r))return a;let o=a==="yes"?"no":"yes";return Z(e,o,r)?o:a};var tr=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},Ve=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`},aa="siftle_leaderboard_cache_v4_",bt=e=>{let a=String(e||"").match(/(\d+)\s+wins?/i),r=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:a&&Number(a[1])||0,losses:r&&Number(r[1])||0}},kt=e=>{try{let a=JSON.parse(localStorage.getItem(`${aa}${e}`)||"null");return Array.isArray(a?.players)&&a.players.length?a:null}catch{return null}},Qe=(e,a)=>{if(!(!Array.isArray(a?.players)||a.players.length===0))try{localStorage.setItem(`${aa}${e}`,JSON.stringify({...a,cachedAt:Date.now()}))}catch{}},ra=(e,a)=>{let r=bt(e?.status||""),o=bt(a?.status||""),s=(Number(a?.points)||0)-(Number(e?.points)||0);return s||(o.wins!==r.wins?o.wins-r.wins:r.losses!==o.losses?r.losses-o.losses:String(e?.username||"").localeCompare(String(a?.username||"")))},ar=e=>{let a=String(e?.displayName||"").trim().toLowerCase();return a&&!/^0x[a-f0-9]{40}$/i.test(a)?`name:${a}`:`wallet:${String(e?.username||"").toLowerCase()}`},rr=e=>{let a=new Map;return e.forEach(r=>{let o=ar(r);if(!o||o==="wallet:")return;let s=a.get(o);if(!s){a.set(o,r);return}a.set(o,ra(s,r)<=0?s:r)}),Array.from(a.values())},wt=(e,a=[],r=!1)=>{let o=rr(e).slice().sort(ra);return r?o.map((s,n)=>({...s,globalRank:n+1})):o},oa=(e,a)=>{let r=String(e?.optionId||"").trim(),o=Math.max(0,Number(e?.optionSharesUsdc)||0),s=Math.max(0,Number(a?.optionPools?.[r])||0),n=Math.max(0,Number(a?.volumeUsdc)||0);return!r||o<=0||s<=0||n<=0?0:o/s*n},St=()=>`
  <div class="leaderboard-sync-note" role="status">
    Showing saved standings while Siftle refreshes live scores...
  </div>
`,pt=()=>{let e=0,a=0,r=0,o=E.filter(i=>i.timeframe==="Daily").map(i=>i.id),s=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",n={};if(s)try{n=JSON.parse(localStorage.getItem(s)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(n[i]?.result==="win"){e+=Number(n[i].points)||0,a++;continue}if(n[i]?.result==="loss"){r++;continue}let l=t.marketPositions[i],f=t.marketSnapshots[i]?.outcome??0;if(f===0)continue;let m=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,p=[];try{p=JSON.parse(localStorage.getItem(m)||"[]")}catch{}let g=p.includes("yes")&&p.includes("no");if(f===1&&l&&l.yesSharesUsdc>0){let c=g?50:100;e+=c,a++,n[i]={result:"win",points:c}}else if(f===2&&l&&l.noSharesUsdc>0){let c=g?50:100;e+=c,a++,n[i]={result:"win",points:c}}else l&&(l.yesSharesUsdc>0||l.noSharesUsdc>0)&&(r++,n[i]={result:"loss",points:0})}return s&&localStorage.setItem(s,JSON.stringify(n)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},or=(e,a)=>{let r=G(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,s=new Set;for(let n=0;n<localStorage.length;n++){let i=localStorage.key(n);if(!i||!i.startsWith(o))continue;let l=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(l)&&s.add(l)}s.forEach(n=>{let i=`${o}${n}`,l={yesSharesUsdc:0,noSharesUsdc:0};try{l=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let u=(Number(l.yesSharesUsdc)||0)>0,f=(Number(l.noSharesUsdc)||0)>0;if(!u&&!f)return;let m=`siftle_traded_sides_${e.id}_${n}`,p=[];try{p=JSON.parse(localStorage.getItem(m)||"[]")}catch{}let g=p.includes("yes")&&p.includes("no"),c=a==="yes"?u:f,d=`siftle_resolved_results_${n}`,v={};try{v=JSON.parse(localStorage.getItem(d)||"{}")}catch{}v[e.id]={result:c?"win":"loss",points:c?g?50:100:0},localStorage.setItem(d,JSON.stringify(v));let k=0,w=0,T=0;Object.values(v).forEach(S=>{S.result==="win"?(w+=1,k+=Number(S.points)||0):S.result==="loss"&&(T+=1)});let b=localStorage.getItem(dt(n))||"";fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:n,username:b,points:k,status:`${w} win${w===1?"":"s"}, ${T} loss${T===1?"":"es"}`})}).catch(S=>console.error("Failed to report local resolved score:",S))})},le=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?pt():null,r=await fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},sr=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let s=JSON.parse(localStorage.getItem(r)||"{}");((Number(s.yesSharesUsdc)||0)>0||(Number(s.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},nr=async e=>{let a=G(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(oe(e)&&!t.walletAddress){let r=e.resolvedOptionId||null,o=Number(e.outcome);t.marketSnapshots[e.id]={yesPriceCents:0,noPriceCents:0,volumeUsdc:Number(e.volumeUsdc)||0,yesSharesUsdc:0,noSharesUsdc:0,outcome:o===1||o===2||o===3?o:r?1:0,optionPools:e.optionPools||Object.fromEntries(ie(e).map(s=>[s.id,0])),resolvedOptionId:r,traderCount:0},t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(oe(e)&&t.walletAddress){let{position:r,snapshot:o}=await Ct(a,t.walletAddress);t.marketPositions[e.id]=r,t.marketSnapshots[e.id]=o}else t.marketSnapshots[e.id]=await fa(a)}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&h()}}},j=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await Dt();let a=Le(),r=await Promise.all(a.map(async o=>{let s=G(o);if(!s)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:n,snapshot:i}=await Ct(s,t.walletAddress);return t.marketSnapshots[o.id]=i,[o.id,n]}catch(n){return console.warn(`Failed to load portfolio market ${o.id}:`,n),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,le(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&h()}}},ir=async(e,a)=>{if(!t.walletAddress){y("Session expired or wallet not connected. Please sign in."),qe();return}let r=Le().find(f=>f.id===e);if(!r)return;t.marketTradeSide=a;let o=G(r);if(!o){y("Deploy this Arc market contract before trading"),h();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await j(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){y("Still loading your position. Try again in a moment."),h();return}let s=t.marketSnapshots[r.id];if(We(r,s)){t.tradeDrawerOpen=!1,y("This market is resolved and can no longer be traded."),h();return}let n=s?.yesPriceCents??r.probability,i=s?.noPriceCents??100-r.probability,l=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!Z(t.marketOrderMode,a,l)){let f=Xa(l),m=t.marketOrderMode==="sell"?f?`You can only exit your ${f.toUpperCase()} shares.`:"You do not have shares to exit in this market.":f?`Exit your ${f.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";y(m),t.marketTradeSide=ct(t.marketOrderMode,a,l),h();return}let u=Ie(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,l);t.marketTradeAmount=u,C("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",h();let f=await ga(o,t.marketOrderMode,a,u,m=>{t.marketTradeStatus=m,h()},n,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await Oe(),t.walletAddress&&(t.walletBalance=await X(t.walletAddress)),await j({force:!0}),le(!0).catch(m=>console.error("Failed to report leaderboard entry:",m)),t.walletAddress){let m=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,p={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let c=localStorage.getItem(m);if(c){let d=JSON.parse(c);p={yesCost:d.yesCost||0,noCost:d.noCost||0,yesShares:d.yesShares||0,noShares:d.noShares||0}}}catch{}let g=u;if(t.marketOrderMode==="buy"){let c=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,d=[];try{d=JSON.parse(localStorage.getItem(c)||"[]")}catch{}d.includes(a)||(d.push(a),localStorage.setItem(c,JSON.stringify(d))),a==="yes"?(p.yesCost+=g,p.yesShares=(p.yesShares||0)+g/(n/100)):(p.noCost+=g,p.noShares=(p.noShares||0)+g/(i/100))}else{let c=t.marketPositions[r.id];if(c){if(a==="yes"&&c.yesSharesUsdc>0){let d=Math.min(1,g/c.yesSharesUsdc);p.yesCost=Math.max(0,p.yesCost-p.yesCost*d),p.yesShares=Math.max(0,(p.yesShares||0)-(p.yesShares||0)*d)}else if(a==="no"&&c.noSharesUsdc>0){let d=Math.min(1,g/c.noSharesUsdc);p.noCost=Math.max(0,p.noCost-p.noCost*d),p.noShares=Math.max(0,(p.noShares||0)-(p.noShares||0)*d)}}}localStorage.setItem(m,JSON.stringify(p))}y(`Trade confirmed ${f.slice(0,8)}...`),C(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Ea(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(f){C("trade_failed"),tr(f)?(Et(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),y("Session expired. Please sign in again.")):y(f instanceof Error?f.message:"Arc trade failed")}finally{t.marketTradeStatus=null,B(),h()}},lr=e=>Jt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",dr=e=>Jt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",cr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',pr=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',ye=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,ur=()=>`
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
`,mr=(e=4)=>`${ye("Loading stories")}${Array.from({length:e},ur).join("")}`,he=()=>`
  <div class="detail-summary-skeleton" aria-hidden="true">
    ${ye("Loading AI briefing")}
    <div class="skeleton skeleton-line lg"></div>
    <div class="skeleton skeleton-line xl"></div>
    <div class="skeleton skeleton-line md"></div>
    <div class="skeleton skeleton-line sm"></div>
  </div>
`,fr=(e=3)=>`
  <div class="thread-skeleton-timeline" aria-hidden="true">
    ${ye("Loading thread timeline")}
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
`;var gr=(e=3)=>`
  <div class="market-evidence-skeleton" aria-hidden="true">
    ${ye("Loading market evidence")}
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
`,hr=(e=2)=>`
  <div class="portfolio-skeleton-grid" aria-hidden="true">
    ${ye("Loading portfolio positions")}
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
`,xt=e=>{let a=e.type==="tweet",r=a?`<a class="card-source-button twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open Tweet</a>`:`
      ${lr(e)}
      <button class="card-source-button summary-btn" type="button">AI briefing</button>
      ${/example\\.com/i.test(e.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
    `,o=a?`<a class="mobile-action-btn twitter-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open Tweet</a>`:`
      ${dr(e)}
      ${/example\\.com/i.test(e.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${e.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
      <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
    `,s=a?"Tap to view tweet on Twitter.":"Tap to read the AI briefing.";return`
    <article class="story-card ${a?"tweet-card":""}" data-story-id="${e.id}" role="button" tabindex="0" aria-label="${a?"Open tweet":"Open summary"} for ${e.headline}">
      <!-- Desktop layout (visible above 640px) -->
      <div class="story-topline desktop-only">
        <div class="story-source">
          <div>
            <strong>${e.source}</strong>
            <span>${et(e)} ${a?"":`- ${e.readTime}`}</span>
          </div>
        </div>
        <div class="story-card-actions">
          <button class="bookmark-button" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="${e.saved?"Remove saved story":"Save story"}">
            ${cr()}
          </button>
          <div class="share-control">
            <button class="export-button" type="button" aria-label="Export story card" data-export-id="${e.id}" aria-expanded="${t.activeShareStoryId===e.id}">
              ${pr()}
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
        <h2>${e.headline}</h2>
        <p>${s}</p>
      </div>

      <div class="card-action-row desktop-only">
        ${r}
      </div>

      <!-- Mobile layout (visible at 640px and below) -->
      <div class="mobile-card-inner mobile-only">
        <div class="mobile-card-body">
          <div class="mobile-card-text">
            <div class="mobile-card-topline">
              <span class="category-chip ${e.category}">${W(e.category)}</span>
              <div class="mobile-icons">
                <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${e.sourceUrl}" aria-pressed="${e.saved?"true":"false"}" aria-label="Save story">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                </button>
                <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${e.id}" aria-label="Save image">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                </button>
              </div>
            </div>
            <h2>${e.headline}</h2>
            <span class="mobile-card-time">${et(e)}</span>
          </div>
          <div class="mobile-card-image" aria-hidden="true">
            <img src="${e.imageUrl}" alt="" loading="lazy" />
          </div>
        </div>
        <div class="mobile-card-actions">
          ${o}
        </div>
      </div>
    </article>
  `},ve=()=>{if(!x)return;let e=Ia();if(x.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){x.innerHTML=mr(4);return}let a=Number(t.unlockConfig?.amountUsdc)||.001,r=M(t.newsSearchQuery.trim()),s=`
    <section class="news-feed-search-shell">
      <div class="news-feed-search-copy">
        <p>${r?`${e.length} matches for "${r}".`:`Search saved news by keyword. Unlock an AI briefing with a ${a} testnet USDC nanopayment to get what happened, key points, and takeaway without opening the full article.`}</p>
      </div>
      <label class="news-feed-search-bar" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search all saved news by keyword" value="${M(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </section>
  `;if(e.length===0){let n=t.showSaved?[]:t.stories;if(n.length>0){x.innerHTML=s+n.map(xt).join("");return}x.innerHTML=s+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>';return}x.innerHTML=s+e.map(xt).join("")},$t=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),xe=(e,a,r,o,s,n)=>{e.beginPath(),e.moveTo(a+n,r),e.lineTo(a+o-n,r),e.quadraticCurveTo(a+o,r,a+o,r+n),e.lineTo(a+o,r+s-n),e.quadraticCurveTo(a+o,r+s,a+o-n,r+s),e.lineTo(a+n,r+s),e.quadraticCurveTo(a,r+s,a,r+s-n),e.lineTo(a,r+n),e.quadraticCurveTo(a,r,a+n,r),e.closePath()},vr=(e,a,r,o,s,n,i)=>{let l=a.split(/\s+/).filter(Boolean),u=[],f="";for(let m of l){let p=f?`${f} ${m}`:m;if(e.measureText(p).width<=s){f=p;continue}if(f&&u.push(f),f=m,u.length===i)break}if(f&&u.length<i&&u.push(f),l.length>0&&u.length===i){for(;e.measureText(`${u[i-1]}...`).width>s&&u[i-1].length>0;)u[i-1]=u[i-1].slice(0,-1).trim();u[i-1]=`${u[i-1]}...`}return u.forEach((m,p)=>e.fillText(m,r,o+p*n)),o+u.length*n},yr=(e,a,r,o,s,n,i)=>{let l=Math.max(s/a.naturalWidth,n/a.naturalHeight),u=s/l,f=n/l,m=(a.naturalWidth-u)/2,p=(a.naturalHeight-f)/2;e.save(),xe(e,r,o,s,n,i),e.clip(),e.drawImage(a,m,p,u,f,r,o,s,n),e.restore()},Tt=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),At=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))):"",br=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",Mt=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",xe(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let s=await $t("/assets/siftle-logo-small.png").catch(()=>null);s&&o.drawImage(s,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${At(e.source)} - ${e.postedAt} ago`,110,140);let n=195;if(a){let l=await $t(br(e.imageUrl)).catch(()=>null);l?yr(o,l,110,n,860,520,28):(o.fillStyle="#eef2ff",xe(o,110,n,860,520,28),o.fill())}else o.fillStyle="#eef2ff",xe(o,110,n,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",xe(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(W(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",vr(o,At(e.headline),110,888,860,54,4),r},sa=async e=>{let a=await Mt(e,!0);try{return await Tt(a)}catch{return Tt(await Mt(e,!1))}},na=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,ia=async e=>{let a=await sa(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=na(e),o.click(),URL.revokeObjectURL(r)},kr=async e=>{let a=await sa(e),r=new File([a],na(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await ia(e)},wr=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,ve(),y(a==="share"?"Preparing share image":"Preparing download"),A&&(A.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await kr(r):await ia(r),y(a==="share"?"Share image ready":"Image saved"),A&&(A.textContent="Branded story image ready")}catch(o){console.warn(o),y("Image export unavailable"),A&&(A.textContent="Image export was cancelled or unavailable")}}},Lt=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,o=it(e);return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${ae(e)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${r?"disabled":""}>${r?"Preparing...":"AI briefing"}</button>
      </div>
      ${Ee(e)}
      ${r?`<div style="margin-top: 12px;">${he()}</div>`:re(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${he()}</div>`:o?`<div style="margin-top: 12px;">${lt(e)}</div>`:`<div style="margin-top: 12px;">${ot(ae(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},Sr=async(e,a)=>{if(!t.walletAddress){y("Session expired or wallet not connected. Please sign in."),qe();return}let r=Le().find(f=>f.id===e);if(!r||!oe(r))return;let o=ie(r).find(f=>f.id===a);if(!o){y("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",h(),await j(),t.marketTradeStatus=null);let s=t.marketSnapshots[r.id];if(We(r,s)){y("This market is resolved and can no longer be traded.");return}let n=t.marketPositions[r.id],i=t.marketOrderMode==="sell";if(!i&&n?.optionId){y("Your pick is already locked for this market.");return}if(i&&!n?.optionId){y("You do not have a pick to exit.");return}let l=Math.max(0,Number(n?.optionSharesUsdc)||0);if(i&&l<=0){y("Your pick is still loading. Please try again."),await j({force:!0});return}let u=i?l:Ie(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=u,t.marketTradeOptionId=i&&n?.optionId||o.id,C("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",h(),await ha(r.id,i?"sell":"buy",i&&n?.optionId||o.id,u,f=>{t.marketTradeStatus=f,h()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await Oe(),t.walletAddress&&(t.walletBalance=await X(t.walletAddress)),await j({force:!0}),C(i?"trade_sell_success":"trade_buy_success"),y(i?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(f){C("trade_failed"),y(f instanceof Error?f.message:"Trade failed")}finally{t.marketTradeStatus=null,B(),h()}},xr=()=>{if(!$||!x)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(x.hidden=!0,$.hidden=!1,$.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){$.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){$.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${fr(3)}
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
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${Ya(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${Lt(e,"Latest")}
          ${Kt(r?.items??[]).map(o=>Lt(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},$r=()=>{if(!$||!x)return;if(t.selectedThreadUrl){xr();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){$.hidden=!0,$.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),x.hidden=!1;return}let a=ae(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=re(e),s=t.unlockingSummaryUrl===e.sourceUrl,n=it(e);x.hidden=!0,$.hidden=!1,$.classList.add("fullscreen"),document.body.classList.add("detail-mode"),$.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${e.source} - ${et(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?Ee(e):""}
          ${o?r?he():n?lt(e):ot(a,e):qa(e,s)}
        </section>
        <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `},Tr=e=>{let a=t.marketSnapshots[e.id],r=G(e),o=oe(e),s=ie(e).length,n=a?.volumeUsdc??(Number(e.volumeUsdc)||0),i=a?.yesPriceCents,l=i??e.probability,u=o?`${s}`:`${l}%`,f=i===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${i}\xA2 \xB7 No ${100-i}\xA2`,m=i===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:f,p=Fe(e),g=e.timeframe==="Daily"?jt(e,a):e.closes;return`
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
        <strong>${u}</strong>
        <span>${o?"possible outcomes":r?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${o?"Pick exactly one":m}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${o?100:l}%"></span></div>
      <div class="market-volume">
        <span>Total vol</span>
        <strong>$${N(n)}</strong>
      </div>
      <div class="market-card-footer">
        <span>${p.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${g}`:`Closes ${g}`}</span>
      </div>
    </button>
  `},Ar=e=>{let a=Fe(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,s=100-o,n=a.evidence[0],i=n?n.headline:"No updates yet",l=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${s}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${l}`},Mr=e=>{if(!x||!$)return;let a=Fe(e),r=!t.checkedMarketEvidence[e.id],o=G(e),s=t.marketSnapshots[e.id],n=oe(e),i=ie(e);n&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let l=Va(e),u=!!(o&&!s),f=s?.yesPriceCents??(o?e.probability:0),m=s?.noPriceCents??(o?100-e.probability:0),p=u?"":o?`${f}\xA2`:"--",g=u?"":o?`${m}\xA2`:"--",c=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},d=!!c.optionId;n&&d&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),n&&!d&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let v=n&&t.marketOrderMode==="sell"&&d?Math.max(0,Number(c.optionSharesUsdc)||0):0,k=v>0?v:Ie(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,c),w=v>0?{min:0,max:v}:Zt(t.marketOrderMode,t.marketTradeSide,c),T=t.marketOrderMode==="buy"?"$5-$10 USDC":`Up to $${N(w.max)} USDC`,b=!t.walletAddress||t.hasLoadedPortfolioPositions,S=We(e,s),P=zt(e,s),U=!!P;n||(t.marketTradeSide=ct(t.marketOrderMode,t.marketTradeSide,c));let O=!n&&!S&&!U&&b&&Z(t.marketOrderMode,"yes",c),R=!n&&!S&&!U&&b&&Z(t.marketOrderMode,"no",c),de=n?!S&&!U&&b&&(t.marketOrderMode==="sell"?d:!d&&!!l):!S&&!U&&b&&Z(t.marketOrderMode,t.marketTradeSide,c),_=S?"Market resolved":P||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),ce=S?"Market resolved":P||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),pe=n?k:Xt(s,t.marketTradeSide,k,t.marketOrderMode,c),ue=t.marketOrderMode==="buy"?"Buy":"Exit",K=n?"Pick one outcome":o?"Arc testnet live":"Contract not deployed";x.hidden=!0,$.hidden=!1,$.classList.add("fullscreen"),document.body.classList.add("detail-mode"),nr(e),Vt(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&j({force:!t.hasLoadedPortfolioPositions});let Be=n?!!c.optionId:c.yesSharesUsdc>0||c.noSharesUsdc>0,be="";if(n&&Be&&t.walletAddress){let L=oa(c,s);be=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${M(c.optionLabel||"Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${N(L)}</strong>
          </div>
        </div>
      </div>
    `}else Be&&t.walletAddress&&(be=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${ea(c,s).map(D=>`
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${D.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${N(D.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${N(D.payout)}</strong>
            </div>
          </div>
        `).join("")}
        <div style="border-top: 1px solid var(--market-border); padding-top: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.78rem; color: var(--market-text-muted);">Winning side splits the final pool</span>
        </div>
      </div>
    `);$.innerHTML=`
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
            <span class="market-status-pill">${K}</span>
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
              <span>${nt(e,s)===null?"Closes":"Trade lock"}</span>
              <strong>${jt(e,s)}</strong>
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
              ${r?gr(3):a.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':a.evidence.map(L=>{let D=qt(e,L),ke=t.unlockingSummaryUrl===L.sourceUrl;return`
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
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(L.sourceUrl)}" ${ke?"disabled":""}>${ke?"Preparing...":"AI briefing"}</button>
                    </div>
                    ${Ee(D)}
                    ${ke?`<div style="margin-top: 12px;">${he()}</div>`:re(D)?t.loadingSummaryUrl===L.sourceUrl?`<div style="margin-top: 12px;">${he()}</div>`:it(D)?`<div style="margin-top: 12px;">${lt(D)}</div>`:`<div style="margin-top: 12px;">${ot(ae(D,t.aiSummaries[L.sourceUrl]),D)}</div>`:""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${n?`<span>${d?"Pick locked":"Choose one option"}</span><span><strong>${i.length} options</strong></span>`:`<span>Yes <strong>${p}</strong></span><span>No <strong>${g}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${S||U?"disabled":""}>
          ${S?"Market Resolved":P||(n?d?"Pick Locked":"Pick Outcome":"Trade Market")}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${S||U?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${S||U?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${n?i.map(L=>{let D=s?.optionPools?.[L.id]||0,ke=t.marketTradeOptionId===L.id||c.optionId===L.id,mt=S||U||t.marketOrderMode==="sell"||d||!b;return`
                  <button type="button" class="market-side option ${ke?"active":""} ${mt?"disabled":""}" data-market-option-id="${M(L.id)}" ${mt?"disabled":""}>
                    <span>${M(L.label)}</span>
                    <strong>$${N(D)}</strong>
                    ${c.optionId===L.id?"<small>Your pick</small>":""}
                  </button>
                `}).join(""):u?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${O?"":"disabled"}" data-market-trade-side="yes" ${O?"":"disabled"} title="${O?"Yes":_}">
                  <span>Yes</span>
                  <strong>${p}</strong>
                  ${O?"":`<small>${_}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${R?"":"disabled"}" data-market-trade-side="no" ${R?"":"disabled"} title="${R?"No":ce}">
                  <span>No</span>
                  <strong>${g}</strong>
                  ${R?"":`<small>${ce}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${T}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${w.min.toFixed(2)}" max="${Math.max(w.min,w.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${k}" data-market-amount ${S||U?"disabled":""} />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>${n?"Your entry":t.marketOrderMode==="buy"?"Projected payout":"Exit amount"}</span>
            <strong>$${N(pe)}</strong>
          </div>

          <div class="drawer-action-container">
            ${u?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:S?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':U?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${P}</button>`:t.walletAddress?b?n&&t.marketOrderMode==="sell"&&d?`<button type="button" class="market-submit-button" data-market-option-trade="${M(c.optionId||"")}">Exit pick</button>`:de?n?`<button type="button" class="market-submit-button" data-market-option-trade="${M(l?.id||"")}">Confirm ${M(l?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${ue} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${ue.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},la=()=>{if(!x||!$)return;if(He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),te?.toggleAttribute("hidden",!0),Pe?.classList.add("active"),Ue?.classList.remove("active"),Ce?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&E.forEach(n=>{Vt(n)})},750),t.selectedMarketId){let n=E.find(i=>i.id===t.selectedMarketId);if(n){Mr(n);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),$.hidden=!0,$.classList.remove("fullscreen"),x.hidden=!1,x.classList.add("markets-list");let e=E,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(n=>{let i=t.activeMarketTimeframe===n,l=n==="All"?e.length:e.filter(f=>f.timeframe===n).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${n}">
            <span>${n==="Sagas"?"Sagas":n}</span>
            <span class="timeframe-tab-count">${l}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&E.length===0){x.innerHTML=`
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
          ${l.map(Tr).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let n=e.filter(u=>u.timeframe==="Daily"),i=e.filter(u=>u.timeframe==="Weekly"),l=e.filter(u=>u.timeframe==="Sagas");o=`
      ${s("Daily","Ends in a day or two",n)}
      ${s("Weekly","Ends in a week",i)}
      ${s("Sagas (Long-term)","Narratives & futures",l)}
    `}else{let n=e.filter(u=>u.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,l="";t.activeMarketTimeframe==="Daily"?l="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?l="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",l="Narratives & futures"),o=`
      ${s(i,l,n)}
    `}x.innerHTML=`
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
  `},da=()=>{if(!x||!$)return;He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),te?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.remove("active"),Ce?.classList.remove("active"),document.body.classList.remove("detail-mode"),$.hidden=!0,x.hidden=!1,x.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?pt():null;t.walletAddress&&e&&fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(c=>console.error("Failed to report user score:",c)),J&&(clearInterval(J),J=null),x.innerHTML=`
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
  `;let a=(c="2026-07-19T23:59:59.000Z")=>{let d=document.getElementById("seasonTimer");J&&clearInterval(J);let v=()=>{let w=new Date(c).getTime()-new Date().getTime();if(w<=0){d&&(d.innerText="Season Finished!"),J&&clearInterval(J);return}let T=Math.floor(w/(1e3*60*60*24)),b=Math.floor(w%(1e3*60*60*24)/(1e3*60*60)),S=Math.floor(w%(1e3*60*60)/(1e3*60)),P=Math.floor(w%(1e3*60)/1e3);d&&(d.innerText=`${T}d ${b}h ${S}m ${P}s`)};v(),J=setInterval(v,1e3)};a();let r=c=>c.map((d,v)=>{let k=Number(d.globalRank)||v+1,w=String(d.username||""),T=!!(t.walletAddress&&w.toLowerCase()===t.walletAddress.toLowerCase()),b=T&&t.profileUsername?t.profileUsername:d.displayName||w,S=T?`${t.profileUsername?b:q(w)} (You)`:b.startsWith("0x")&&b.length===42?q(b):b,P=M(S),U=M(Ve(d.status)),O=d.nextSeasonDivision?`Division ${d.nextSeasonDivision}`:"Qualify",R=k<=10?"promotion-zone":"safety-zone",de=k<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${T?"user-highlight":""} ${R}" role="listitem">
        <div class="leaderboard-row-left">
          ${de}
          <span class="leaderboard-rank rank-${k}">${k}</span>
          <span class="leaderboard-username">${P}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(d.points)||0} pts</strong>
          <span>${d.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${M(O)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${U}</span>
        </div>
      </div>
    `}).join(""),o=c=>c.map((d,v)=>{let k=v+1,w=String(d.username||""),T=!!(t.walletAddress&&w.toLowerCase()===t.walletAddress.toLowerCase()),b=T&&t.profileUsername?t.profileUsername:d.displayName||w,S=M(Ve(d.status)),P=T?`${t.profileUsername?b:q(w)} (You)`:b.startsWith("0x")&&b.length===42?q(b):b,U=M(P),O="safety-zone",R='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return k<=2?(O="promotion-zone",R='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):k>=5&&(O="relegation-zone",R='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${T?"user-highlight":""} ${O}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${R}
          <span class="leaderboard-rank rank-${k}" style="flex-shrink: 0; margin-right: 4px;">${k}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${U}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(d.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${S}</span>
        </div>
      </div>
    `}).join(""),s=c=>{V=c,document.querySelectorAll("[data-leaderboard-view]").forEach(d=>{d.classList.toggle("active",d.dataset.leaderboardView===c)}),document.getElementById("divisionControls")?.toggleAttribute("hidden",c!=="division"),document.getElementById("globalControls")?.toggleAttribute("hidden",c!=="global"),document.getElementById("globalPrizeBox")?.toggleAttribute("hidden",c!=="global")},n=c=>{let d=document.getElementById("leaderboardListContainer");d&&(d.innerHTML=`
      <div class="leaderboard-skeleton" style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        ${Array.from({length:c}).map(()=>`
          <div style="height: 52px; background: rgba(255,255,255,0.02); border: 1px solid #1e1f2b; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
            <div style="display: flex; align-items: center; gap: 12px; width: 60%;">
              <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="width: 100px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
            </div>
            <div style="width: 60px; height: 16px; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
          </div>
        `).join("")}
      </div>
    `)},i=()=>{s("global");let c=document.getElementById("leaderboardListContainer"),d="global",v=kt(d);v&&c?(c.innerHTML=St()+r(v.players),v.seasonEndsAt&&a(v.seasonEndsAt)):n(10);let k=new URLSearchParams;t.walletAddress&&k.set("walletAddress",t.walletAddress);let w=k.toString();fetch(I(`/api/leaderboard/global${w?`?${w}`:""}`)).then(T=>T.json()).then(T=>{let b=wt(T.players||[],v?.players||[],!0);c&&(c.innerHTML=b.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the global leaderboard yet.</p>`:r(b)),Qe(d,{players:b,seasonEndsAt:T.seasonEndsAt}),a(T.seasonEndsAt)}).catch(T=>{console.error("Failed to load global leaderboard:",T),c&&(c.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading global leaderboard. Please try again.</p>`)})},l=c=>{s("division");let d=document.getElementById("leaderboardListContainer"),v=`division_${c||we||"current"}`,k=kt(v);k&&d?(d.innerHTML=St()+o(k.players),k.divisionNumber&&(we=k.divisionNumber),k.seasonEndsAt&&a(k.seasonEndsAt)):d&&c!==void 0&&(d.innerHTML=`
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
      `);let w=new URLSearchParams;t.walletAddress&&w.set("walletAddress",t.walletAddress),c&&w.set("division",String(c));let T=w.toString();fetch(I(`/api/leaderboard/division${T?`?${T}`:""}`)).then(b=>b.json()).then(b=>{let S=b.divisionNumber||1,P=wt(b.players||[],k?.players||[],!1),U=b.totalDivisions||1,O=b.seasonEndsAt;we=S;let R=document.getElementById("divisionTitleText");R&&(R.innerText=`Division ${S}`);let de=document.getElementById("divisionSelector");de&&(de.innerHTML=Array.from({length:U},(_,ce)=>ce+1).map(_=>`
            <option value="${_}" ${_===S?"selected":""}>Division ${_}</option>
          `).join("")),d&&(P.length===0?d.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No active players in this division.</p>`:d.innerHTML=P.map((_,ce)=>{let pe=ce+1,ue=t.walletAddress&&_.username.toLowerCase()===t.walletAddress.toLowerCase(),K=ue&&t.profileUsername?t.profileUsername:_.displayName||_.username,ut=M(Ve(_.status)),Be=ue?`${t.profileUsername?K:q(_.username)} (You)`:K.startsWith("0x")&&K.length===42?q(K):K,be=M(Be),L="safety-zone",D='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return pe<=2?(L="promotion-zone",D='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):pe>=5&&(L="relegation-zone",D='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
                <div class="leaderboard-row ${ue?"user-highlight":""} ${L}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
                  <!-- Left Side: Arrow + Rank + Username -->
                  <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
                    ${D}
                    <span class="leaderboard-rank rank-${pe}" style="flex-shrink: 0; margin-right: 4px;">${pe}</span>
                    <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${be}</span>
                  </div>
                  <!-- Center Side: Points -->
                  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${_.points} pts</span>
                  </div>
                  <!-- Right Side: Status -->
                  <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
                    <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${ut}</span>
                  </div>
                </div>
              `}).join("")),Qe(v,{players:P,divisionNumber:S,totalDivisions:U,seasonEndsAt:O}),Qe(`division_${S}`,{players:P,divisionNumber:S,totalDivisions:U,seasonEndsAt:O}),a(O)}).catch(b=>{console.error("Failed to load division leaderboard:",b),d&&(d.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading division leaderboard. Please try again.</p>`)})};V==="division"?l(we||void 0):i(),document.querySelectorAll("[data-leaderboard-view]").forEach(c=>{c.addEventListener("click",()=>{(c.dataset.leaderboardView==="division"?"division":"global")==="division"?l(we||void 0):i()})}),document.getElementById("divisionSelector")?.addEventListener("change",c=>{let d=Number(c.target.value);l(d)}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){y("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let d=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,d.toFixed(2)),t.walletBalance=d.toFixed(2),y("Claimed $100 USDC mock credits!"),B(),da()}else y("Opening Circle Faucet..."),window.open(Ze,"_blank")});let m=document.getElementById("howItWorksBtn"),p=document.getElementById("howItWorksModal"),g=document.getElementById("closeRulesModalBtn");m?.addEventListener("click",()=>{p&&p.classList.add("active")}),g?.addEventListener("click",()=>{p&&p.classList.remove("active")}),p?.addEventListener("click",c=>{c.target===p&&p.classList.remove("active")})},ca=()=>{t.activeSurface="feed",t.selectedMarketId=null,He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),te?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.add("active"),Ce?.classList.remove("active"),x?.classList.remove("markets-list")},Lr=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",Pt=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id];if(oe(e)){let d=r?.resolvedOptionId||null,v=!!d,k=v&&a.optionId===d,w=oa(a,r),T=k?w:0,b=ie(e).find(U=>U.id===d)?.label,S=!!a.claimedAt||_e().has(e.id),P=!!t.claimingMarketIds[e.id];return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${W(e.category)}</span>
          <span>${v?`Resolved: ${M(b||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${M(a.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${N(a.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${N(T)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${v?"":`Closes ${e.closes}`}</span>
          ${v?S?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':P?'<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>':k?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${N(T)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let o=Lr(r?.outcome),s=ea(a,r),n=s.reduce((d,v)=>Math.max(d,v.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,l=r?.outcome??0,u=_e().has(e.id),f=l===1?a.yesSharesUsdc:l===2?a.noSharesUsdc:0,m=l===1?r?.yesSharesUsdc??0:l===2?r?.noSharesUsdc??0:0,p=r?.volumeUsdc??0,g=f>0&&m>0?f/m*p:0,c=l===0?"":u?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':g>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${N(g)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${W(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${N(n)}</strong></div>
        ${s.map(d=>`
          <div><span>${d.label}</span><strong>${N(d.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${N(i)} total shares`:""}</span>
        ${c||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Pr=async e=>{if(!t.walletAddress){y("Please sign in first.");return}let a=Le().find(o=>o.id===e),r=a?G(a):"";if(!a||!r){y("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,F(),C("claim_attempt"),pt();let o=await va(r,t.walletAddress);C("claim_success"),o.won&&er(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await X(t.walletAddress),await j(),y(o.won?`Claimed $${N(o.amountUsdc)}`:"No payout to claim"),B(),F()}catch(o){C("claim_failed"),y(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],F()}},Ur=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(s=>{let n=s.displayName||q(s.walletAddress),i=s.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${M(n)}</strong>
            <span>${q(s.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${s.used}/${s.maxUses}</strong>
            <span>${i?"Expired":`${s.remaining} left`}</span>
          </div>
        </div>
      `}).join(""):'<div class="portfolio-empty compact">No referrals yet.</div>',o=t.loadingReferralData&&!a?'<div class="portfolio-referral-message">Loading invite tools...</div>':t.referralError&&!a?`
        <div class="portfolio-referral-message">
          <span>${M(t.referralError)}</span>
          <button type="button" data-refresh-referrals>Retry</button>
        </div>
      `:a?`
          <div class="portfolio-referral-copy-grid">
            <button type="button" class="portfolio-referral-copy" data-copy-referral-code="${M(a.code)}">
              <span>Invite code</span>
              <strong>${M(a.code)}</strong>
            </button>
            <button type="button" class="portfolio-referral-copy" data-copy-referral-link="${M(a.inviteLink)}">
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
  `},F=()=>{if(!x||!$)return;He?.toggleAttribute("hidden",!0),Re?.toggleAttribute("hidden",!0),te?.toggleAttribute("hidden",!0),Pe?.classList.remove("active"),Ue?.classList.remove("active"),Ce?.classList.add("active"),document.body.classList.remove("detail-mode"),$.hidden=!0,x.hidden=!1,x.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Ae(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&Dt(),j({force:!t.hasLoadedPortfolioPositions}));let a=_e(),r=Le().filter(p=>{let g=t.marketPositions[p.id];return a.has(p.id)||g&&(g.yesSharesUsdc+g.noSharesUsdc>0||(g.optionSharesUsdc||0)>0)}),o=r.filter(p=>(t.marketSnapshots[p.id]?.outcome??0)===0),s=r.filter(p=>(t.marketSnapshots[p.id]?.outcome??0)!==0),n=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?q(t.walletAddress):"Anonymous"),l=M(i),u=M(t.profileUsername||""),f=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${M(t.profileNotice.message)}</div>`:"",m=i.charAt(0).toUpperCase();x.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${Ur(n)}
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
                <small style="color: var(--market-text-muted) !important; font-family: monospace !important; font-size: 0.78rem !important;">${q(t.walletAddress)}</small>
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
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${u}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${f}

        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${ye("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
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
      ${t.loadingPortfolioPositions?hr(2):t.walletAddress?r.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${o.length?o.map(Pt).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${s.length?s.map(Pt).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},h=()=>{if(Ot.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){la();return}if(t.activeSurface==="portfolio"){F();return}if(t.activeSurface==="leaderboard"){da();return}ca(),Gt(),ve(),$r(),z&&(z.value=t.activeArchiveDate??"")};Xe.textContent=Ht();te?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");r&&(t.activeCategory=r.dataset.category,window.history.pushState({},"","#feed"),Y(),h(),ze(),ne(t.activeCategory))});x?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,o=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,ve();let s=x?.querySelector("#newsSearchInput");s&&(s.focus(),s.setSelectionRange(r,o))});Pe?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),Y(),h()});Ue?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),Y(),h(),ze(),ne(t.activeCategory)});Ce?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),Y(),h()});Q?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",se()):qe()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{y("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&Pr(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Ae(),F();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,F();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Ae(),F();return}let s=a.closest("[data-copy-referral-code]");if(s){let i=s.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>y("Invite code copied"));return}let n=a.closest("[data-copy-referral-link]");if(n){let i=n.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>y("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Et():qe())});Ot.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),ze(),ne(t.activeCategory),a==="saved"&&(Za(),rt(),Te())),Y(),h()})});z?.addEventListener("change",()=>{t.activeArchiveDate=z.value||null,window.history.pushState({},"","#feed"),Y(),h(),ne(t.activeCategory)});Pa?.addEventListener("click",()=>{t.activeArchiveDate=null,z&&(z.value=""),window.history.pushState({},"","#feed"),Y(),h(),ne(t.activeCategory)});x?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let d=x?.querySelector(".username-display-row"),v=x?.querySelector("#usernameEditForm");if(d&&v){d.style.display="none",v.style.display="flex";let k=v.querySelector("#usernameInput");k&&k.focus()}return}if(a.closest("#cancelUsernameBtn")){let d=x?.querySelector(".username-display-row"),v=x?.querySelector("#usernameEditForm");d&&v&&(d.style.display="flex",v.style.display="none");return}let s=a.closest("#saveUsernameBtn");if(s){let v=x?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(v){let k=v.value.trim().slice(0,15),w=s,T=w.textContent||"Save";w.disabled=!0,w.textContent="Saving...",Qa(k),t.profileNotice=null;try{t.walletAddress&&await le(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},y("Username updated"),F()}catch(b){let S=b instanceof Error?b.message:"Username save failed";t.profileNotice={type:"error",message:S},y(S),w.disabled=!1,w.textContent=T,F()}}return}let n=a.closest("[data-timeframe]");if(n){let d=n.dataset.timeframe;t.activeMarketTimeframe=d,la();return}let i=a.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,C("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),h(),window.scrollTo({top:0,behavior:"smooth"});return}let l=a.closest("[data-thread-story-id]"),u=a.closest("[data-export-id]"),f=a.closest("[data-export-action]"),m=a.closest("[data-story-id]");if(l){e.stopPropagation();let d=t.stories.find(v=>v.id===Number(l.dataset.threadStoryId));d&&ja(d);return}let p=a.closest(".mobile-bookmark-btn, .bookmark-button");if(p){e.stopPropagation();let d=p.dataset.bookmarkUrl||"",v=t.stories.find(k=>k.sourceUrl===d);if(!v)return;v.saved=!v.saved,v.saved?ee.add(d):ee.delete(d),La(),y(v.saved?"Saved to your list":"Removed from saved"),ve();return}if(f){e.stopPropagation(),wr(Number(f.dataset.exportStoryId),f.dataset.exportAction);return}if(u){e.stopPropagation();let d=Number(u.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===d?null:d,ve();return}if(!m||a.closest("a"))return;let g=Number(m.dataset.storyId),c=t.stories.find(d=>d.id===g);if(c&&c.type==="tweet"){e.stopPropagation(),window.open(c.sourceUrl,"_blank","noreferrer");return}Ft(g,!0)});x?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");if(!r||e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();let o=Number(r.dataset.storyId),s=t.stories.find(n=>n.id===o);if(s&&s.type==="tweet"){window.open(s.sourceUrl,"_blank","noreferrer");return}Ft(o)});$?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let m=t.stories.find(p=>p.id===Number(r.dataset.unlockBriefing));m&&tt(m);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let m=decodeURIComponent(o.dataset.unlockBriefingUrl||""),p=Ra(m);p&&(re(p)?je(p):tt(p));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),h();return}if(a.closest("#openTradeDrawerBtn")){let m=E.find(c=>c.id===t.selectedMarketId);if(m){if(We(m,t.marketSnapshots[m.id])){y("This market is resolved and can no longer be traded.");return}if(zt(m,t.marketSnapshots[m.id])){y("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,C("trade_drawer_open");let p=$.querySelector("#tradeDrawer"),g=$.querySelector("#tradeDrawerBackdrop");p?.classList.add("open"),g?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let m=$.querySelector("#tradeDrawer"),p=$.querySelector("#tradeDrawerBackdrop");m?.classList.remove("open"),p?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let m=E.find(p=>p.id===t.selectedMarketId);if(m){let p=Ar(m),g=`https://api.whatsapp.com/send?text=${encodeURIComponent(p)}`;window.open(g,"_blank")}return}let s=a.closest("[data-market-trade]");if(s&&t.selectedMarketId){let m=s.dataset.marketTrade;ir(t.selectedMarketId,m);return}let n=a.closest("[data-market-option-trade]");if(n&&t.selectedMarketId){let m=n.dataset.marketOptionTrade||t.marketTradeOptionId||"";Sr(t.selectedMarketId,m);return}let i=a.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,h();return}let l=a.closest("[data-market-trade-side]");if(l){if(l.disabled||l.classList.contains("disabled"))return;let m=E.find(c=>c.id===t.selectedMarketId),p=m?t.marketPositions[m.id]:void 0,g=l.dataset.marketTradeSide;if(!Z(t.marketOrderMode,g,p))return;t.marketTradeSide=g,h();return}let u=a.closest("[data-market-order-mode]");if(u){t.marketOrderMode=u.dataset.marketOrderMode;let m=E.find(g=>g.id===t.selectedMarketId),p=m?t.marketPositions[m.id]:void 0;t.marketTradeSide=ct(t.marketOrderMode,t.marketTradeSide,p),t.marketTradeAmount=Ie(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,p),h();return}a.closest("[data-back-to-feed]")&&za()});$?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=E.find(u=>u.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,s=r?t.marketPositions[r.id]:void 0,n=Number(a.value);t.marketTradeAmount=Number.isFinite(n)?n:0;let i=r&&oe(r)?t.marketTradeAmount:Xt(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,s),l=$.querySelector(".market-inline-payout strong");l&&(l.textContent=`$${N(i)}`)});$?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});$?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=E.find(s=>s.id===t.selectedMarketId),o=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=Ie(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,o),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",se);window.addEventListener("hashchange",se);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await X(t.walletAddress);t.walletBalance=a,B(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),ka())}});Ge?.addEventListener("click",()=>{if(!Je||!Ge)return;let e=!Je.hidden;Je.hidden=e,Ge.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,ve());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(s=>s.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};A&&(A.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,z&&(z.value=""),Y(),ze(),ne(t.activeCategory)),r.dataset.menuAction==="saved"&&(ca(),rt(),Te(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),Y(),h())});var Cr=async()=>{try{let e=await fetch(I("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),h())}catch(e){console.error("Failed to prefetch unlock config:",e)}};h();B();Cr();Ma().then(()=>{sr(),B(),window.setTimeout(Dr,1200)});var Er=document.querySelector(".brand-lockup");Er?.addEventListener("click",()=>{window.location.hash="#feed"});se();var Ir=document.querySelector("#mobileArchiveCard"),ge=document.querySelector("#archiveControls");Ir?.addEventListener("click",()=>{if(!ge)return;ge.classList.toggle("mobile-open")&&setTimeout(()=>ge.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Br=document.querySelector("#archivePill");Br?.addEventListener("click",e=>{if(e.stopPropagation(),!ge)return;ge.classList.toggle("mobile-open")&&setTimeout(()=>ge.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Ne=!1,Ut=!1,Dr=()=>{Ut||(Ut=!0,(async()=>{let e=await Oe();if(Ne=!!e,e){t.walletConnecting=!0,B();try{let a=await ya();Ne=!1,t.walletConnecting=!1,a?(t.walletAddress=await Oe(),t.walletAddress&&(fe(),t.walletBalance=await X(t.walletAddress),await j()),B(),t.activeSurface==="portfolio"&&h()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),y("Session expired. Please sign in again."),B(),h())}catch(a){console.warn(a),Ne=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),y("Session expired. Please sign in again."),B(),h()}}await ba(a=>{Ne||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,fe(),a&&le(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,B(),a?(Ae(),X(a).then(r=>{t.walletBalance=r,B(),t.activeSurface==="portfolio"&&h()}),j()):t.activeSurface==="portfolio"&&h())})})())};C("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",s=typeof o=="string"?o:r.getAttribute("class")||"",n=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(s.includes("source-button")||s.includes("source-btn")||s.includes("source-link")||r.textContent?.trim()==="Open source")&&!s.includes("disabled")&&n!=="#"&&C("open_source")}},!0);
