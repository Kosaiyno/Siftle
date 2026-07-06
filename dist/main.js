import"./chunks/chunk-ZUUPKAA6.js";var pe="Sports",Oe=[{id:"wc-portugal-spain-qualify",category:pe,timeframe:"Daily",optionMarket:!0,question:"Which team will qualify in Portugal vs Spain?",options:[{id:"portugal",label:"Portugal"},{id:"spain",label:"Spain"}],probability:0,kickoffAt:"2026-07-06T19:00:00Z",closes:"Jul 6, 7:40 PM GMT+1",resolution:"One option resolves correct based on the team that officially qualifies in Portugal vs Spain, including extra time and penalties.",threadTopic:"Portugal vs Spain Qualify Watch",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-ronaldo-header-spain",category:pe,timeframe:"Daily",optionMarket:!0,question:"Will Cristiano Ronaldo score a header vs Spain?",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}],probability:0,kickoffAt:"2026-07-06T19:00:00Z",closes:"Jul 6, 7:40 PM GMT+1",resolution:"Resolves Yes if Cristiano Ronaldo is officially credited with a headed goal for Portugal against Spain in regular time or extra time. Penalty shootout goals do not count. Otherwise resolves No.",threadTopic:"Ronaldo Header Watch vs Spain",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-usa-belgium-qualify",category:pe,timeframe:"Daily",optionMarket:!0,question:"Which team will qualify in USA vs Belgium?",options:[{id:"usa",label:"USA"},{id:"belgium",label:"Belgium"}],probability:0,kickoffAt:"2026-07-07T00:00:00Z",closes:"Jul 7, 12:40 AM GMT+1",resolution:"One option resolves correct based on the team that officially qualifies in USA vs Belgium, including extra time and penalties.",threadTopic:"USA vs Belgium Qualify Watch",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"wc-usa-goals-belgium",category:pe,timeframe:"Daily",optionMarket:!0,question:"How many goals will USA score in regular + extra time vs Belgium?",options:[{id:"0",label:"0 goals"},{id:"1",label:"1 goal"},{id:"2",label:"2 goals"},{id:"3-plus",label:"3+ goals"}],probability:0,kickoffAt:"2026-07-07T00:00:00Z",closes:"Jul 7, 12:40 AM GMT+1",resolution:"One option resolves correct based on the number of goals officially scored by the United States against Belgium in regular time and extra time. Penalty shootout goals do not count.",threadTopic:"USA Goals vs Belgium",threadStoryId:0,updates:0,movement:0,volume:"$0",traders:"0",liquidity:"$0",imageUrl:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-tonali-spurs",category:pe,timeframe:"Sagas",question:"Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",probability:58,closes:"September 1, 2026",resolution:"Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline.",threadTopic:"Sandro Tonali Tottenham Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$182K",traders:"980",liquidity:"$29K",imageUrl:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",evidence:[]},{id:"transfer-guimaraes-arsenal",category:pe,timeframe:"Sagas",question:"Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",probability:45,closes:"September 1, 2026",resolution:"Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline.",threadTopic:"Bruno Guimaraes Arsenal Transfer Link",threadStoryId:0,updates:0,movement:0,volume:"$204K",traders:"1,240",liquidity:"$36K",imageUrl:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",evidence:[]}];var Ze="https://faucet.circle.com/",mt="siftle_backend_wallet_migration_notice",Ye=null,R=()=>(Ye||(Ye=import("./chunks/arc-ZAE4BJZI.js")),Ye),j=e=>e.length>10?`${e.slice(0,6)}...${e.slice(-4)}`:e,ma=async()=>(await R()).connectArcWallet(),X=async e=>(await R()).readArcUsdcBalance(e),fa=async(e,a,r,o)=>(await R()).payAiBriefingUnlock(e,a,r,o),ga=e=>{R().then(a=>a.resolveLocalTestMarketYes(e))},ha=async e=>(await R()).readArcMarketSnapshot(e);var Bt=async(e,a)=>(await R()).readArcMarketState(e,a),va=async(e,a,r,o,n,s,i)=>(await R()).executeArcMarketOrder(e,a,r,o,n,s,i),ba=async(e,a,r,o,n)=>(await R()).executeArcOptionMarketOrder(e,a,r,o,n),Dt=()=>{R().then(e=>e.disconnectArcWallet())},ya=async(e,a)=>(await R()).claimArcMarketPayout(e,a),_e=async()=>(await R()).getConnectedArcWallet(),ka=async()=>(await R()).validateArcSession(),wa=async e=>(await R()).subscribeArcWallet(e),Sa=async()=>(await R()).triggerGatewayWarmup(),xa=["Sports"],$a="https://siftle.onrender.com",Ta=()=>{let e=(window.SIFTLE_API_BASE||"").replace(/\/$/,"");if(e)return e;let a=typeof window<"u"?window.location.hostname.toLowerCase():"";return a==="siftle.xyz"||a.endsWith(".siftle.xyz")||a.endsWith(".vercel.app")?$a:""},Aa=Ta(),I=e=>`${Aa}${e}`,Ot="siftle_theme",Ma=()=>{try{return window.localStorage.getItem(Ot)==="light"?"light":"dark"}catch{return"dark"}},$e=Ma();function C(e){fetch(I("/api/analytics"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e})}).catch(a=>console.error("Failed to track event:",a))}var t={activeSurface:"markets",profileUsername:null,selectedMarketId:null,marketOrderMode:"buy",marketTradeSide:"yes",marketTradeOptionId:null,marketTradeAmount:5,marketSnapshots:{},marketPositions:{},marketEvidenceOverrides:{},loadingMarkets:!0,checkedMarketEvidence:{},checkedMarketSnapshots:{},loadingMarketSnapshots:{},loadingMarketEvidence:{},loadingPortfolioPositions:!1,marketTradeStatus:null,hasLoadedPortfolioPositions:!1,walletConnecting:!1,walletAddress:null,walletBalance:null,activeCategory:"Sports",stories:[],isLoading:!1,selectedStoryId:null,aiSummaries:{},loadingSummaryUrl:null,unlockingSummaryUrl:null,archiveDates:[],activeArchiveDate:null,activeShareStoryId:null,selectedThreadUrl:null,activeThread:null,loadingThreadUrl:null,feedScrollY:0,hasLoadedFeed:!1,showSaved:!1,tradeDrawerOpen:!1,activeMarketTimeframe:"All",profileNotice:null,portfolioMarketPreviews:[],referralPanelOpen:!1,referralData:null,referralError:null,loadingReferralData:!1,portfolioPositionsLoadedAt:0,unlockConfig:null,newsSearchQuery:"",briefingStatusByUrl:{},claimingMarketIds:{}},ke=null,V="global",J=null,ft=!1,gt=!1,ht=new URLSearchParams(window.location.search).get("ref")||localStorage.getItem("siftle_pending_referral_code")||"";ht&&localStorage.setItem("siftle_pending_referral_code",ht.trim().toUpperCase());var Nt=20,E=Oe,Ua=(...e)=>{let a=new Map;return e.flat().forEach(r=>{r?.id&&a.set(r.id,{...a.get(r.id)||{},...r})}),Array.from(a.values())},Me=()=>Ua(t.portfolioMarketPreviews,E,Oe),La=async()=>{t.loadingMarkets=!0,E.length===0&&(E=Oe);try{let e=new AbortController,a=window.setTimeout(()=>e.abort(),3500),r=await fetch(I("/api/markets"),{signal:e.signal});if(window.clearTimeout(a),r.ok){let o=await r.json();Array.isArray(o)&&o.length>0&&(E=o)}}catch(e){console.error("Failed to load markets:",e)}finally{t.loadingMarkets=!1}},_t=async()=>{try{let e=await fetch(I("/api/portfolio/markets"));if(!e.ok)return;let a=await e.json();Array.isArray(a)&&(t.portfolioMarketPreviews=a.map(r=>({threadStoryId:0,updates:0,movement:0,evidence:[],...r})))}catch(e){console.warn(e)}},Rt="siftle.savedUrls",ee=new Set,at=()=>{try{let e=localStorage.getItem(Rt)||"[]",a=JSON.parse(e);ee=new Set(a.filter(Boolean))}catch{ee=new Set}},Pa=()=>{try{localStorage.setItem(Rt,JSON.stringify(Array.from(ee)))}catch{}},Te=()=>{if(Array.isArray(t.stories))for(let e of t.stories)e.saved=!!ee.has(e.sourceUrl)};at();Te();var Xe=document.querySelector("#dateLabel"),te=document.querySelector("#categoryTabs"),k=document.querySelector("#storyList"),T=document.querySelector("#storyDetail"),Ge=document.querySelector("#menuButton"),Je=document.querySelector("#menuPanel"),A=document.querySelector("#menuStatus"),F=document.querySelector("#archiveDateSelect"),vt=document.querySelector("#archiveStatus"),Ca=document.querySelector("#todayButton"),He=document.querySelector(".brief-hero"),je=document.querySelector("#archiveControls"),Ue=document.querySelector("[data-surface='markets']"),Le=document.querySelector("[data-surface='feed']"),Pe=document.querySelector("[data-surface='portfolio']"),Q=document.querySelector("#walletButton"),we=document.querySelector("[data-theme-toggle]"),Ht=Array.from(document.querySelectorAll("[data-bottom-nav]")),Ke,Ia=()=>{if(!we)return;let a=`Switch to ${$e==="light"?"dark":"light"} mode`;we.setAttribute("aria-label",a),we.title=a,we.dataset.activeTheme=$e},jt=e=>{$e=e,document.documentElement.dataset.theme=e;try{window.localStorage.setItem(Ot,e)}catch{}Ia()};jt($e);var B=()=>{if(Q){let e=Q.querySelector(".wallet-button-label");Q.classList.toggle("connected",!!t.walletAddress),Q.disabled=t.walletConnecting,Q.setAttribute("aria-label",t.walletAddress?`Wallet ${j(t.walletAddress)}`:"Sign in"),e&&(e.textContent=t.walletConnecting?"Signing in...":t.walletAddress?"Wallet":"Sign in"),Q.title=t.walletAddress?`${t.walletBalance??"0"} Arc Testnet USDC - ${j(t.walletAddress)}`:"Sign in"}};window.addEventListener("resize",B);we?.addEventListener("click",()=>{jt($e==="light"?"dark":"light")});var Ea=async e=>{let a=localStorage.getItem("siftle_pending_referral_code");if(a)try{let r=await fetch(I("/api/referrals/bind"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:e,referralCode:a})}),o=await r.json().catch(()=>({}));r.ok&&(o.bound||o.reason==="already_bound"||o.reason==="invalid_code")&&(localStorage.removeItem("siftle_pending_referral_code"),o.bound&&v("Referral connected"))}catch(r){console.warn(r)}},Ae=async()=>{if(!(!t.walletAddress||t.loadingReferralData)){t.loadingReferralData=!0,t.referralError=null;try{let e=await fetch(I(`/api/referrals?walletAddress=${encodeURIComponent(t.walletAddress)}`)),a=await e.json().catch(()=>({}));e.ok?t.referralData=a:t.referralError=a?.error||"Referral tools are temporarily unavailable."}catch(e){console.warn(e),t.referralError="Referral tools are temporarily unavailable."}finally{t.loadingReferralData=!1,t.activeSurface==="portfolio"&&W()}}},qe=async()=>{if(!t.walletConnecting){t.walletConnecting=!0,C("wallet_connect_start"),B();try{let e=await ma();if(e){C("wallet_connect_success"),t.walletAddress=e,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),t.walletBalance=await X(e),await Ea(e),Ae(),await z(),ie(!0).catch(r=>console.error("Failed to report leaderboard entry:",r));let a=localStorage.getItem(mt);a?(localStorage.removeItem(mt),v(a)):v("Connected to Arc Testnet"),window.location.hash="#portfolio",Ie()}}catch(e){C("wallet_connect_failed"),v(e instanceof Error?e.message:"Wallet connection failed")}finally{t.walletConnecting=!1,B()}}},v=e=>{let a=document.querySelector("#actionToast");a||(a=document.createElement("div"),a.id="actionToast",a.className="action-toast",a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),document.body.appendChild(a)),a.textContent=e,a.classList.add("show"),Ke&&window.clearTimeout(Ke),Ke=window.setTimeout(()=>{a?.classList.remove("show")},1700)};window.showActionToast=v;var Ba=(e,a,r,o)=>{let n=document.createElement("div");n.className="success-modal-overlay",n.innerHTML=`
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
  `,document.body.appendChild(n),setTimeout(()=>{n.classList.add("show")},10);let s=()=>{n.classList.remove("show"),setTimeout(()=>{n.remove()},300)};n.querySelector(".success-modal-close-btn")?.addEventListener("click",s),n.querySelector(".success-modal-action-btn")?.addEventListener("click",s),n.addEventListener("click",i=>{i.target===n&&s()})},Y=()=>{t.feedScrollY=0,window.scrollTo({top:0,behavior:"auto"})},qt=e=>{let a=e?new Date(`${e}T12:00:00`):new Date;return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(a)},Da=()=>t.stories.filter(e=>{if(t.showSaved)return!!e.saved;if(!(t.activeCategory==="All"||e.category===t.activeCategory))return!1;let a=t.newsSearchQuery.trim().toLowerCase();return a?[e.headline,e.summary,e.source,e.ai_summary].filter(Boolean).join(" ").toLowerCase().includes(a):!0}),Se=e=>t.activeArchiveDate?e.postedAt:`${e.postedAt} ago`,Oa=e=>/(\*\*?\s*critique|attempt\s*\d|prompt says|let'?s try|tighter version|word count|violat(?:e|es)|output only|valid json|the model|the prompt)/i.test(e),Na=(e,a=140)=>{let r=e.split(/\s+/).filter(Boolean);if(r.length<=a)return e;let n=r.slice(0,a).join(" "),s=Math.max(n.lastIndexOf("."),n.lastIndexOf("?"),n.lastIndexOf("!"));return s>n.length*.45?n.slice(0,s+1).trim():`${n.replace(/[,:;.'"!\?\s]+$/,"")}...`},bt=e=>{let a=String(e||"").trim();for(let r=0;r<2;r+=1){let o=a.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);if(o&&(a=o[1].trim()),!/^\s*\{[\s\S]*\}\s*$/.test(a))break;try{let n=JSON.parse(a);if(typeof n.summary=="string"){a=n.summary.trim();continue}}catch{break}break}return a=a.replace(/&lt;|&#60;/gi,"<").replace(/&gt;|&#62;/gi,">").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/^["'{\s]+/,"").replace(/["'}\s]+$/,"").replace(/^summary["'\s]*:[\s"']*/i,"").replace(/\s+/g," ").trim(),Oa(a)?"":Na(a)},ae=(e,a)=>bt(a||"")||bt(e.summary)||e.headline,rt=(e,a)=>{let r=e.split(/(?:\*\*|__)?(WHAT HAPPENED|KEY POINTS|TAKEAWAY)\s*:?\s*(?:\*\*|__)?\s*:?\s*/i);if(r.length<=1)return`<p class="briefing-text">${e}</p>`;let o='<div class="briefing-capture-area">';if(a){let s=a.headline||"Football Match Update";o+=`
      <div class="briefing-capture-header">
        <div class="briefing-capture-brand">
          <img src="./assets/siftle-logo-small.png" alt="" />
          <span>Siftle Briefing</span>
        </div>
        <span class="briefing-capture-url">siftle.xyz</span>
      </div>
      <h3 class="briefing-capture-title">${s}</h3>
    `}r[0].trim()&&(o+=`<p class="briefing-capture-intro">${r[0].trim()}</p>`);let n="";for(let s=1;s<r.length;s+=2){let i=r[s].trim().toUpperCase(),d=r[s+1]?r[s+1].trim():"";if(!d)continue;let p="";if(i==="KEY POINTS"){let m=d.split(/(?:•|\*|-)\s+/).map(u=>u.trim()).filter(Boolean);m.length>0?p=`<ul class="briefing-list">${m.map(u=>`<li>${u}</li>`).join("")}</ul>`:p=`<p class="briefing-text">${d}</p>`}else p=`<p class="briefing-text">${d}</p>`,i==="TAKEAWAY"&&(n=d);let f=i.toLowerCase().replace(/\s+/g,"-");o+=`
      <div class="briefing-section ${f}-section">
        <h4 class="briefing-title">${i}</h4>
        ${p}
      </div>
    `}return o+="</div>",a&&(o+=`
      <div class="share-briefing-container">
        <button type="button" class="share-briefing-btn" onclick="
          const container = event.currentTarget.closest('.detail-summary') || event.currentTarget.closest('.thread-item') || event.currentTarget.closest('.market-thread-update');
          const captureArea = container ? container.querySelector('.briefing-capture-area') : null;
          if (!captureArea) return;
          
          const header = captureArea.querySelector('.briefing-capture-header');
          const title = captureArea.querySelector('.briefing-capture-title');
          if (header) header.style.setProperty('display', 'flex', 'important');
          if (title) title.style.setProperty('display', 'block', 'important');
          
          if (window.html2canvas) {
            const isLight = document.documentElement.dataset.theme === 'light';
            window.html2canvas(captureArea, {
              backgroundColor: isLight ? '#ffffff' : '#111827',
              scale: 1.5,
              logging: false,
              useCORS: true
            }).then(canvas => {
              if (header) header.style.display = '';
              if (title) title.style.display = '';
              
              const link = document.createElement('a');
              link.download = 'siftle-briefing.png';
              link.href = canvas.toDataURL();
              link.click();
              if (window.showActionToast) {
                window.showActionToast('Briefing card image downloaded!');
              }
            }).catch(err => {
              if (header) header.style.display = '';
              if (title) title.style.display = '';
            });
          }
        ">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;vertical-align:middle;margin-right:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Download Card</span>
        </button>
      </div>
    `),o},Ce=e=>{let a=t.briefingStatusByUrl[e.sourceUrl]||"";return a?`<p class="briefing-status-note">${M(a)}</p>`:""},_a=()=>{let e=String(t.walletAddress||"").trim().toLowerCase();return/^0x[a-f0-9]{40}$/.test(e)?e:"guest"},ot=e=>`siftle_ai_briefing_unlock_${_a()}_${btoa(unescape(encodeURIComponent(e.sourceUrl))).replace(/=+$/g,"")}`,zt=e=>localStorage.getItem(ot(e))||"",Ra=e=>{localStorage.removeItem(ot(e))},re=e=>!!zt(e),Ft=(e,a)=>({id:0,headline:a.headline,category:e.category,summary:a.summary,source:a.source,sourceUrl:a.sourceUrl,imageUrl:e.imageUrl||"",publishedAt:void 0,readTime:"3 min read",postedAt:a.date,accent:"slate",saved:ee.has(a.sourceUrl),ai_summary:void 0,ai_provider:void 0}),Ha=e=>{let a=t.stories.find(n=>n.sourceUrl===e);if(a)return a;let o=[t.activeThread?.current,...t.activeThread?.items??[]].filter(Boolean).find(n=>n.sourceUrl===e);if(o)return o;if(t.selectedMarketId){let n=E.find(s=>s.id===t.selectedMarketId);if(n){let s=Fe(n).evidence.find(i=>i.sourceUrl===e);if(s)return Ft(n,s)}}return null},st=(e,a)=>{let r=Ka(e,a);return r===null?null:r-Nt*60*1e3},Wt=(e,a)=>{let r=st(e,a);return r===null?e.closes:new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZoneName:"short"}).format(new Date(r))},Yt=(e,a)=>{let r=st(e,a);return r===null?null:Date.now()>=r?`Locked ${Nt}m before kickoff`:null},ja=(e,a)=>{let r=t.unlockConfig?`${t.unlockConfig.amountUsdc} USDC`:"0.05 USDC",o=t.unlockConfig?.x402Enabled;return`
    <div class="briefing-section">
      ${Ce(e)}
      ${a?`
          ${ge()}
        `:`
          <p class="briefing-text">
            ${o?`Pay a <strong>${r}</strong> <strong>testnet USDC</strong> nanopayment through <strong>Circle x402</strong> to unlock what happened, key points, and takeaway.`:`Pay <strong>${r}</strong> in <strong>testnet USDC</strong> for the key points, what happened, and takeaway.`}
          </p>
          <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">
            ${o?"Unlock via Circle x402":"AI briefing"}
          </button>
        `}
    </div>
  `},nt=e=>/^AI briefing unavailable\./i.test(t.briefingStatusByUrl[e.sourceUrl]||"")&&!t.aiSummaries[e.sourceUrl],it=e=>`
  <div class="briefing-section">
    ${Ce(e)}
    <p class="briefing-text">The AI briefing could not be generated for this article. Retry the briefing or open the source story below.</p>
    <button type="button" class="source-button" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}">Retry AI briefing</button>
  </div>
`,et=async(e,a=!1)=>{if(!t.walletAddress){v("Please sign in first.");return}if(!(t.unlockingSummaryUrl===e.sourceUrl&&!a)){t.unlockingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Preparing AI briefing payment...",C("ai_unlock_attempt"),g();try{let r=await fetch(I("/api/summary/unlock-config")),o=await r.json();if(!r.ok||!o.treasuryAddress)throw new Error(o.error||"AI briefing is not configured");let n=await fa(o.treasuryAddress,Number(o.amountUsdc)||.05,p=>{A&&(A.textContent=p),t.briefingStatusByUrl[e.sourceUrl]=p,g()},{sourceUrl:e.sourceUrl,topic:e.headline});t.briefingStatusByUrl[e.sourceUrl]=o.x402Enabled?`Payment successful. Loading AI briefing paid with ${o.amountUsdc} testnet USDC through x402.`:`Payment successful. Loading AI briefing paid with ${o.amountUsdc} testnet USDC.`,g();let s=await fetch(I("/api/summary/unlock"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sourceUrl:e.sourceUrl,walletAddress:t.walletAddress,txHash:n})}),i=await s.json();if(!s.ok||!i.unlockToken)throw new Error(i.error||"AI briefing failed");localStorage.setItem(ot(e),i.unlockToken),C("ai_unlock_success"),(Number(i?.bonus?.points)||0)>0&&ie(!1).catch(p=>console.error("Failed to refresh leaderboard bonus:",p)),await ze(e)}catch(r){C("ai_unlock_failed"),delete t.briefingStatusByUrl[e.sourceUrl],v(r instanceof Error?r.message:"AI briefing failed")}finally{t.unlockingSummaryUrl=null,g()}}},ze=async e=>{if(re(e)&&!(t.aiSummaries[e.sourceUrl]||t.loadingSummaryUrl===e.sourceUrl)){if(e.ai_summary){t.aiSummaries[e.sourceUrl]=ae(e,e.ai_summary),C("view_summary"),A&&(A.textContent=e.ai_provider==="0g"?"Archived 0G summary loaded":"Archived summary loaded"),g();return}t.loadingSummaryUrl=e.sourceUrl,t.briefingStatusByUrl[e.sourceUrl]="Generating briefing...",g();try{let a=await fetch(I("/api/summary"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,walletAddress:t.walletAddress,unlockToken:zt(e)})});if(!a.ok){if(a.status===402){Ra(e),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unlock expired. Unlock it again to generate a new briefing.",A&&(A.textContent="Unlock expired. Unlock again to continue."),g();return}throw new Error(`Summary request failed with ${a.status}`)}let r=await a.json();t.aiSummaries[e.sourceUrl]=ae(e,r.summary),t.briefingStatusByUrl[e.sourceUrl]="AI briefing ready.",A&&r.provider&&(A.textContent=r.provider==="0g"?"Summary generated by 0G":`Summary loaded from ${r.provider}`)}catch(a){console.warn(a),delete t.aiSummaries[e.sourceUrl],t.briefingStatusByUrl[e.sourceUrl]="AI briefing unavailable. Retry to generate it again.",A&&(A.textContent="AI briefing failed. Retry available.")}finally{t.loadingSummaryUrl=null,g()}}},Gt=(e,a=!1)=>{let r=t.stories.find(o=>o.id===e);r&&(t.feedScrollY=window.scrollY,t.selectedStoryId=r.id,t.selectedThreadUrl=null,t.activeThread=null,window.history.pushState({},"",`#story-${r.id}`),g(),a&&!re(r)?(t.walletAddress&&(t.unlockingSummaryUrl=r.sourceUrl),g(),et(r,!0)):re(r)&&ze(r),window.scrollTo({top:0,behavior:"smooth"}))},qa=e=>{t.feedScrollY=window.scrollY,t.selectedStoryId=null,t.selectedThreadUrl=e.sourceUrl,t.activeThread=null,t.loadingThreadUrl=e.sourceUrl,window.history.pushState({},"",`#thread-${e.id}`),g(),Jt(e),window.scrollTo({top:0,behavior:"smooth"})},za=()=>{t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,window.history.pushState({},"","#feed"),g(),requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}))},Jt=async e=>{try{let a=await fetch(I(`/api/thread?category=${encodeURIComponent(e.category)}&sourceUrl=${encodeURIComponent(e.sourceUrl)}`));if(!a.ok)throw new Error(`Thread request failed with ${a.status}`);t.activeThread=await a.json(),A&&(A.textContent=`${t.activeThread?.count??0} related updates found`)}catch(a){console.warn(a),t.activeThread=null,delete e.thread,t.selectedThreadUrl=null,window.history.replaceState({},"","#feed"),v("That timeline no longer has a verified past update"),A&&(A.textContent="Thread unavailable")}finally{t.loadingThreadUrl=null,g()}};function Ie(){if(window.location.hash==="#resolve-local-yes"){let a=E.find(r=>r.id==="siftle-local-test-2")||E.find(r=>r.timeframe==="Daily"&&G(r).startsWith("0x00000000000000000000000000000000000001"));if(a){ga(G(a)),nr(a,"yes"),delete t.marketSnapshots[a.id],delete t.marketPositions[a.id],delete t.checkedMarketSnapshots[a.id],delete t.loadingMarketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.activeSurface="portfolio",t.selectedMarketId=null,window.history.replaceState({},"","#portfolio"),v("Local test market resolved YES"),z().then(()=>{ie(!0).catch(r=>console.error("Failed to report leaderboard entry:",r)),B(),W()});return}}let e=window.location.hash.match(/^#market-(.+)$/);if(window.location.hash==="#markets"||e){t.activeSurface="markets",t.selectedMarketId=e?.[1]??null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,g();return}if(window.location.hash==="#portfolio"){t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g();return}if(window.location.hash==="#leaderboard"){t.activeSurface="leaderboard",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g();return}if(window.location.hash==="#feed"||window.location.hash.startsWith("#story-")||window.location.hash.startsWith("#thread-")){t.activeSurface="feed";let a=window.location.hash.match(/^#story-(\d+)$/),r=window.location.hash.match(/^#thread-(\d+)$/),o=a?t.stories.find(i=>i.id===Number(a[1])):void 0,n=r?t.stories.find(i=>i.id===Number(r[1])):void 0,s=t.selectedStoryId!==null||t.selectedThreadUrl!==null;t.selectedStoryId=o?.id??null,t.selectedThreadUrl=n?.sourceUrl??null,t.activeThread=null,g(),o&&ze(o),n&&Jt(n),!o&&!n&&s&&requestAnimationFrame(()=>window.scrollTo({top:t.feedScrollY,behavior:"auto"}));return}t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,g()}var tt=e=>{vt&&(vt.textContent=e)},Fa=async(e=t.activeCategory,a=!1)=>{a||(t.activeSurface="feed",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.activeThread=null,t.loadingThreadUrl=null,t.showSaved=!1),t.isLoading=!0,t.activeSurface==="feed"&&(Kt(),g());try{let r=t.activeArchiveDate?`/api/archive?date=${encodeURIComponent(t.activeArchiveDate)}&category=${encodeURIComponent(e)}`:`/api/feed?category=${encodeURIComponent(e)}`,o=await fetch(I(r));if(!o.ok)throw new Error(`Feed request failed with ${o.status}`);let n=await o.json();if(t.stories=n.top_stories??[],Te(),t.hasLoadedFeed=!0,Xe&&(Xe.textContent=qt(n.date??t.activeArchiveDate)),A)if(t.activeArchiveDate)A.textContent=`Showing ${e} from ${t.activeArchiveDate}`;else{let s=n.archive?.provider==="shelby"?"Shelby":"local archive";A.textContent=`Latest published feed loaded from ${s}`}tt(t.activeArchiveDate?`Archive: ${t.activeArchiveDate}`:"Live feed")}catch(r){console.warn(r),t.hasLoadedFeed||(t.stories=[]),Te(),A&&(A.textContent=t.activeArchiveDate?"That saved day/category is not available yet":"Feed data is currently unavailable. Please check back shortly.")}finally{t.isLoading=!1,g(),Ie()}},Wa=async()=>{if(F)try{let e=await fetch(I("/api/archive"));if(!e.ok)throw new Error(`Archive index failed with ${e.status}`);let a=await e.json(),r=new Date().toLocaleDateString("en-CA",{timeZone:"Africa/Lagos",year:"numeric",month:"2-digit",day:"2-digit"});t.archiveDates=(a.dates??[]).filter(o=>o.date!==r),F.innerHTML=['<option value="">Today</option>',...t.archiveDates.map(o=>`<option value="${o.date}">${o.date}</option>`)].join(""),F.value=t.activeArchiveDate??"",tt(t.archiveDates.length>0?"Saved days ready":"Live feed ready")}catch(e){console.warn(e),tt("Archive unavailable")}},Ee=()=>{ft||(ft=!0,Wa())},se=(e=t.activeCategory,a=!1)=>{t.hasLoadedFeed&&e===t.activeCategory&&!t.activeArchiveDate||Fa(e,a)},Ya=()=>{gt||(gt=!0,window.setTimeout(()=>{t.activeSurface!=="feed"&&!t.hasLoadedFeed&&se(t.activeCategory,!0),Ee()},8e3))},Ga=e=>e==="All"?"For you":e==="Sports"?"Football":e,q=e=>e==="Sports"?"Football":e,Kt=()=>{te&&(te.innerHTML=xa.map(e=>`
        <button class="category-tab ${e===t.activeCategory?"active":""}" type="button" data-category="${e}">
          ${Ga(e)}
        </button>
      `).join(""))},Vt=e=>(e.thread?.count??0)>=1,Ja=(e=0)=>`${e} past ${e===1?"update":"updates"}`,Qt=(e=[])=>[...e].sort((a,r)=>{let o=new Date(a.publishedAt||0).getTime(),n=new Date(r.publishedAt||0).getTime();return(Number.isNaN(n)?0:n)-(Number.isNaN(o)?0:o)}),Fe=e=>{let a=t.marketEvidenceOverrides[e.id],r={...e,evidence:e.evidence??[]};return a?{...r,...a,updates:a.evidence.length}:r},Ka=(e,a)=>{if(e.timeframe!=="Daily")return null;let r=e.kickoffAt?new Date(e.kickoffAt).getTime():Number.NaN;if(Number.isFinite(r))return r;let o=a?.closesAtUnix??0;return o>0?o*1e3:null},Va=(e,a)=>a===0?"Latest":e.publishedAt?new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e.publishedAt)):e.postedAt,Qa=(e,a)=>({date:Va(e,a),source:e.source,headline:e.headline,summary:ae(e),impact:a===0?"Latest":"Update",direction:"flat",sourceUrl:e.sourceUrl}),Zt=async e=>{if(!(t.checkedMarketEvidence[e.id]||t.loadingMarketEvidence[e.id])){t.loadingMarketEvidence[e.id]=!0;try{let a=await fetch(I(`/api/market-thread?id=${encodeURIComponent(e.id)}&nocache=${Date.now()}`));if(!a.ok)return;let r=await a.json(),o=[r.current,...Qt(r.items??[])],n=o.filter((d,p,f)=>f.findIndex(m=>m.sourceUrl===d.sourceUrl)===p).map(Qa),i=o[0]?.imageUrl;n.length>=1&&(t.marketEvidenceOverrides[e.id]={threadTopic:r.topic||e.threadTopic,evidence:n,imageUrl:i||e.imageUrl})}catch(a){console.warn(a)}finally{t.checkedMarketEvidence[e.id]=!0,t.loadingMarketEvidence[e.id]=!1,t.activeSurface==="markets"&&g()}}},G=e=>e.optionMarket?e.id:e.marketAddress||window.SIFTLE_MARKET_ADDRESSES?.[e.id]||"",ne=e=>Array.isArray(e.options)?e.options.filter(a=>a?.id&&a?.label):[],oe=e=>!!(e.optionMarket&&ne(e).length>1),Za=e=>{let a=ne(e);return a.find(r=>r.id===t.marketTradeOptionId)||a[0]||null},O=e=>e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),M=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),lt=e=>`siftle_profile_username_${e.toLowerCase()}`,Xt=e=>e.trim().replace(/\s+/g," ").slice(0,15),me=()=>{if(!t.walletAddress){t.profileUsername=null,t.profileNotice=null;return}let e=lt(t.walletAddress),a=localStorage.getItem(e),r=localStorage.getItem("siftle_profile_username");!a&&r&&(a=Xt(r),a&&localStorage.setItem(e,a),localStorage.removeItem("siftle_profile_username")),t.profileUsername=a||null,t.profileNotice=null},Xa=e=>{if(!t.walletAddress)return;let a=lt(t.walletAddress),r=Xt(e);r?(localStorage.setItem(a,r),t.profileUsername=r):(localStorage.removeItem(a),t.profileUsername=null),localStorage.removeItem("siftle_profile_username")},er=()=>{let e="one-hour-test-market",a=[];for(let r=0;r<localStorage.length;r++){let o=localStorage.key(r);o&&o.includes(e)&&a.push(o)}a.forEach(r=>localStorage.removeItem(r))},ea=(e,a,r)=>{if(e==="sell"){let o=a==="yes"?r?.yesSharesUsdc??0:r?.noSharesUsdc??0;return o<=0?{min:.01,max:.01,fallback:.01}:{min:Math.min(.01,o),max:o,fallback:o}}return{min:5,max:10,fallback:5}},Be=(e,a,r,o)=>{let{min:n,max:s,fallback:i}=ea(a,r,o);return Number.isFinite(e)?Math.min(s,Math.max(n,e)):i},ta=(e,a,r,o,n)=>{if(!e||!Number.isFinite(r)||r<=0)return 0;let s=a==="yes"?n?.yesSharesUsdc??0:n?.noSharesUsdc??0,i=e.yesSharesUsdc,d=e.noSharesUsdc;if(o==="sell")return Math.min(r,s);let p=(a==="yes"?i:d)+r,f=i+d+r;return p<=0||f<=0?r:(s+r)/p*f},aa=(e,a)=>{let r=a?.volumeUsdc??0,o=[];return e.yesSharesUsdc>0&&o.push({label:"YES Shares",shares:e.yesSharesUsdc,payout:a&&a.yesSharesUsdc>0?e.yesSharesUsdc/a.yesSharesUsdc*r:0}),e.noSharesUsdc>0&&o.push({label:"NO Shares",shares:e.noSharesUsdc,payout:a&&a.noSharesUsdc>0?e.noSharesUsdc/a.noSharesUsdc*r:0}),o},tr=e=>{let a=e?.yesSharesUsdc??0,r=e?.noSharesUsdc??0;return a>0&&r<=0?"yes":r>0&&a<=0?"no":null},ra=e=>`siftle_claimed_markets_${e.toLowerCase()}`,Re=()=>{if(!t.walletAddress)return new Set;try{return new Set(JSON.parse(localStorage.getItem(ra(t.walletAddress))||"[]"))}catch{return new Set}},ar=e=>{if(!t.walletAddress)return;let a=Re();a.add(e),localStorage.setItem(ra(t.walletAddress),JSON.stringify(Array.from(a)))},We=(e,a)=>(a?.outcome??0)!==0?!0:/^resolved$/i.test(String(e.closes||"").trim()),Z=(e,a,r)=>{let o=r?.yesSharesUsdc??0,n=r?.noSharesUsdc??0;return e==="sell"?a==="yes"?o>0:n>0:a==="yes"?n<=0:o<=0},dt=(e,a,r)=>{if(Z(e,a,r))return a;let o=a==="yes"?"no":"yes";return Z(e,o,r)?o:a};var rr=e=>{let a=e instanceof Error?e.message:String(e||"");return/token|session|auth|unauthori[sz]ed|expired|401/i.test(a)},Ve=e=>{let a=String(e||"").trim();if(!a)return"0 wins, 0 losses";let r=a.replace(/closed profits?/gi,"losses").replace(/\bprofit\b/gi,"losses");return/\bloss/i.test(r)?r:`${r}, 0 losses`},oa="siftle_leaderboard_cache_v4_",yt=e=>{let a=String(e||"").match(/(\d+)\s+wins?/i),r=String(e||"").match(/(\d+)\s+loss(?:es)?/i);return{wins:a&&Number(a[1])||0,losses:r&&Number(r[1])||0}},kt=e=>{try{let a=JSON.parse(localStorage.getItem(`${oa}${e}`)||"null");return Array.isArray(a?.players)&&a.players.length?a:null}catch{return null}},Qe=(e,a)=>{if(!(!Array.isArray(a?.players)||a.players.length===0))try{localStorage.setItem(`${oa}${e}`,JSON.stringify({...a,cachedAt:Date.now()}))}catch{}},sa=(e,a)=>{let r=yt(e?.status||""),o=yt(a?.status||""),n=(Number(a?.points)||0)-(Number(e?.points)||0);return n||(o.wins!==r.wins?o.wins-r.wins:r.losses!==o.losses?r.losses-o.losses:String(e?.username||"").localeCompare(String(a?.username||"")))},or=e=>{let a=String(e?.displayName||"").trim().toLowerCase();return a&&!/^0x[a-f0-9]{40}$/i.test(a)?`name:${a}`:`wallet:${String(e?.username||"").toLowerCase()}`},sr=e=>{let a=new Map;return e.forEach(r=>{let o=or(r);if(!o||o==="wallet:")return;let n=a.get(o);if(!n){a.set(o,r);return}a.set(o,sa(n,r)<=0?n:r)}),Array.from(a.values())},wt=(e,a=[],r=!1)=>{let o=sr(e).slice().sort(sa);return r?o.map((n,s)=>({...n,globalRank:s+1})):o},na=(e,a)=>{let r=String(e?.optionId||"").trim(),o=Math.max(0,Number(e?.optionSharesUsdc)||0),n=Math.max(0,Number(a?.optionPools?.[r])||0),s=Math.max(0,Number(a?.volumeUsdc)||0);return!r||o<=0||n<=0||s<=0?0:o/n*s},St=()=>`
  <div class="leaderboard-sync-note" role="status">
    Showing saved standings while Siftle refreshes live scores...
  </div>
`,ct=()=>{let e=0,a=0,r=0,o=E.filter(i=>i.timeframe==="Daily").map(i=>i.id),n=t.walletAddress?`siftle_resolved_results_${t.walletAddress.toLowerCase()}`:"",s={};if(n)try{s=JSON.parse(localStorage.getItem(n)||"{}")}catch{}if(t.walletAddress&&t.hasLoadedPortfolioPositions)for(let i of o){if(s[i]?.result==="win"){e+=Number(s[i].points)||0,a++;continue}if(s[i]?.result==="loss"){r++;continue}let d=t.marketPositions[i],f=t.marketSnapshots[i]?.outcome??0;if(f===0)continue;let m=`siftle_traded_sides_${i}_${t.walletAddress.toLowerCase()}`,u=[];try{u=JSON.parse(localStorage.getItem(m)||"[]")}catch{}let h=u.includes("yes")&&u.includes("no");if(f===1&&d&&d.yesSharesUsdc>0){let l=h?50:100;e+=l,a++,s[i]={result:"win",points:l}}else if(f===2&&d&&d.noSharesUsdc>0){let l=h?50:100;e+=l,a++,s[i]={result:"win",points:l}}else d&&(d.yesSharesUsdc>0||d.noSharesUsdc>0)&&(r++,s[i]={result:"loss",points:0})}return n&&localStorage.setItem(n,JSON.stringify(s)),{points:e,status:`${a} win${a===1?"":"s"}, ${r} loss${r===1?"":"es"}`}},nr=(e,a)=>{let r=G(e).toLowerCase();if(!r)return;let o=`siftle_mock_pos_${r}_`,n=new Set;for(let s=0;s<localStorage.length;s++){let i=localStorage.key(s);if(!i||!i.startsWith(o))continue;let d=i.slice(o.length).toLowerCase();/^0x[a-f0-9]{40}$/.test(d)&&n.add(d)}n.forEach(s=>{let i=`${o}${s}`,d={yesSharesUsdc:0,noSharesUsdc:0};try{d=JSON.parse(localStorage.getItem(i)||"{}")}catch{}let p=(Number(d.yesSharesUsdc)||0)>0,f=(Number(d.noSharesUsdc)||0)>0;if(!p&&!f)return;let m=`siftle_traded_sides_${e.id}_${s}`,u=[];try{u=JSON.parse(localStorage.getItem(m)||"[]")}catch{}let h=u.includes("yes")&&u.includes("no"),l=a==="yes"?p:f,c=`siftle_resolved_results_${s}`,b={};try{b=JSON.parse(localStorage.getItem(c)||"{}")}catch{}b[e.id]={result:l?"win":"loss",points:l?h?50:100:0},localStorage.setItem(c,JSON.stringify(b));let x=0,w=0,$=0;Object.values(b).forEach(S=>{S.result==="win"?(w+=1,x+=Number(S.points)||0):S.result==="loss"&&($+=1)});let y=localStorage.getItem(lt(s))||"";fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:s,username:y,points:x,status:`${w} win${w===1?"":"s"}, ${$} loss${$===1?"":"es"}`})}).catch(S=>console.error("Failed to report local resolved score:",S))})},ie=async e=>{if(!t.walletAddress)return!1;let a=e&&t.hasLoadedPortfolioPositions?ct():null,r=await fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,username:t.profileUsername||"",...a?{points:a.points,status:a.status}:{}})}),o=await r.json().catch(()=>({}));if(!r.ok||o?.success===!1)throw new Error(o?.error||"Failed to save leaderboard profile");if(o?.supabaseConfigured&&o?.supabaseSaved===!1)throw new Error(o?.supabaseError||"Supabase did not save profile");return!0},ir=()=>{let e=new Set;for(let a=0;a<localStorage.length;a++){let r=localStorage.key(a);if(r&&r.startsWith("siftle_mock_pos_")){let o=r.slice(r.lastIndexOf("_")+1).toLowerCase();try{let n=JSON.parse(localStorage.getItem(r)||"{}");((Number(n.yesSharesUsdc)||0)>0||(Number(n.noSharesUsdc)||0)>0)&&/^0x[a-f0-9]{40}$/.test(o)&&e.add(o)}catch{}}}e.forEach(a=>{fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:a})}).catch(r=>console.error("Failed to report stored local trader:",r))})},lr=async e=>{let a=G(e);if(!(!a||t.marketSnapshots[e.id]||t.loadingMarketSnapshots[e.id]||t.checkedMarketSnapshots[e.id])){if(oe(e)&&!t.walletAddress){let r=e.resolvedOptionId||null,o=Number(e.outcome);t.marketSnapshots[e.id]={yesPriceCents:0,noPriceCents:0,volumeUsdc:Number(e.volumeUsdc)||0,yesSharesUsdc:0,noSharesUsdc:0,outcome:o===1||o===2||o===3?o:r?1:0,optionPools:e.optionPools||Object.fromEntries(ne(e).map(n=>[n.id,0])),resolvedOptionId:r,traderCount:0},t.checkedMarketSnapshots[e.id]=!0;return}t.loadingMarketSnapshots[e.id]=!0;try{if(oe(e)&&t.walletAddress){let{position:r,snapshot:o}=await Bt(a,t.walletAddress);t.marketPositions[e.id]=r,t.marketSnapshots[e.id]=o}else t.marketSnapshots[e.id]=await ha(a)}catch(r){console.warn(r)}finally{t.checkedMarketSnapshots[e.id]=!0,t.loadingMarketSnapshots[e.id]=!1,t.activeSurface==="markets"&&g()}}},z=async(e={})=>{if(t.walletAddress&&!(t.loadingPortfolioPositions&&!e.force)){t.hasLoadedPortfolioPositions=!1,t.loadingPortfolioPositions=!0;try{t.portfolioMarketPreviews.length===0&&await _t();let a=Me(),r=await Promise.all(a.map(async o=>{let n=G(o);if(!n)return[o.id,{yesSharesUsdc:0,noSharesUsdc:0}];try{let{position:s,snapshot:i}=await Bt(n,t.walletAddress);return t.marketSnapshots[o.id]=i,[o.id,s]}catch(s){return console.warn(`Failed to load portfolio market ${o.id}:`,s),[o.id,{yesSharesUsdc:0,noSharesUsdc:0}]}}));t.marketPositions=Object.fromEntries(r),t.portfolioPositionsLoadedAt=Date.now()}catch(a){console.warn(a)}finally{t.loadingPortfolioPositions=!1,t.hasLoadedPortfolioPositions=!0,ie(!0).catch(a=>console.error("Failed to report leaderboard entry:",a)),(t.activeSurface==="portfolio"||t.activeSurface==="leaderboard"||t.activeSurface==="markets")&&g()}}},dr=async(e,a)=>{if(!t.walletAddress){v("Session expired or wallet not connected. Please sign in."),qe();return}let r=Me().find(f=>f.id===e);if(!r)return;t.marketTradeSide=a;let o=G(r);if(!o){v("Deploy this Arc market contract before trading"),g();return}if(!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",g(),await z(),t.marketTradeStatus=null),!t.hasLoadedPortfolioPositions){v("Still loading your position. Try again in a moment."),g();return}let n=t.marketSnapshots[r.id];if(We(r,n)){t.tradeDrawerOpen=!1,v("This market is resolved and can no longer be traded."),g();return}let s=n?.yesPriceCents??r.probability,i=n?.noPriceCents??100-r.probability,d=t.marketPositions[r.id]||{yesSharesUsdc:0,noSharesUsdc:0};if(!Z(t.marketOrderMode,a,d)){let f=tr(d),m=t.marketOrderMode==="sell"?f?`You can only exit your ${f.toUpperCase()} shares.`:"You do not have shares to exit in this market.":f?`Exit your ${f.toUpperCase()} shares before buying the other side.`:"You cannot buy both sides in the same market.";v(m),t.marketTradeSide=dt(t.marketOrderMode,a,d),g();return}let p=Be(Number(t.marketTradeAmount)||0,t.marketOrderMode,a,d);t.marketTradeAmount=p,C("trade_attempt");try{t.marketTradeStatus="Preparing transaction...",g();let f=await va(o,t.marketOrderMode,a,p,m=>{t.marketTradeStatus=m,g()},s,i);if(delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],delete t.loadingMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await _e(),t.walletAddress&&(t.walletBalance=await X(t.walletAddress)),await z({force:!0}),ie(!0).catch(m=>console.error("Failed to report leaderboard entry:",m)),t.walletAddress){let m=`siftle_cost_basis_${r.id}_${t.walletAddress.toLowerCase()}`,u={yesCost:0,noCost:0,yesShares:0,noShares:0};try{let l=localStorage.getItem(m);if(l){let c=JSON.parse(l);u={yesCost:c.yesCost||0,noCost:c.noCost||0,yesShares:c.yesShares||0,noShares:c.noShares||0}}}catch{}let h=p;if(t.marketOrderMode==="buy"){let l=`siftle_traded_sides_${r.id}_${t.walletAddress.toLowerCase()}`,c=[];try{c=JSON.parse(localStorage.getItem(l)||"[]")}catch{}c.includes(a)||(c.push(a),localStorage.setItem(l,JSON.stringify(c))),a==="yes"?(u.yesCost+=h,u.yesShares=(u.yesShares||0)+h/(s/100)):(u.noCost+=h,u.noShares=(u.noShares||0)+h/(i/100))}else{let l=t.marketPositions[r.id];if(l){if(a==="yes"&&l.yesSharesUsdc>0){let c=Math.min(1,h/l.yesSharesUsdc);u.yesCost=Math.max(0,u.yesCost-u.yesCost*c),u.yesShares=Math.max(0,(u.yesShares||0)-(u.yesShares||0)*c)}else if(a==="no"&&l.noSharesUsdc>0){let c=Math.min(1,h/l.noSharesUsdc);u.noCost=Math.max(0,u.noCost-u.noCost*c),u.noShares=Math.max(0,(u.noShares||0)-(u.noShares||0)*c)}}}localStorage.setItem(m,JSON.stringify(u))}v(`Trade confirmed ${f.slice(0,8)}...`),C(t.marketOrderMode==="buy"?"trade_buy_success":"trade_sell_success"),Ba(t.marketOrderMode,t.marketTradeAmount,a.toUpperCase(),r.question)}catch(f){C("trade_failed"),rr(f)?(Dt(),t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),v("Session expired. Please sign in again.")):v(f instanceof Error?f.message:"Arc trade failed")}finally{t.marketTradeStatus=null,B(),g()}},xt=e=>Vt(e)?`<button class="card-source-button thread-button" type="button" data-thread-story-id="${e.id}">Thread (${e.thread?.count})</button>`:"",$t=e=>Vt(e)?`<button class="mobile-action-btn thread-btn" type="button" data-thread-story-id="${e.id}">Thread</button>`:"",Tt=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.75h10a1.75 1.75 0 0 1 1.75 1.75v14.25L12 16.35l-6.75 4.4V6.5A1.75 1.75 0 0 1 7 4.75Z"/></svg>',At=()=>'<svg class="action-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4.75"/><path d="m7.25 9.5 4.75-4.75 4.75 4.75"/><path d="M5 13.25v4.5A2.25 2.25 0 0 0 7.25 20h9.5A2.25 2.25 0 0 0 19 17.75v-4.5"/></svg>',ve=e=>`<span class="skeleton-aria-label" role="status" aria-live="polite">${e}</span>`,cr=()=>`
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
`,ur=(e=4)=>`${ve("Loading stories")}${Array.from({length:e},cr).join("")}`,ge=()=>`
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
`;var mr=(e=3)=>`
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
`,fr=(e=2)=>`
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
`,he=()=>{if(!k)return;let e=Da();if(k.hidden=!!(t.selectedStoryId||t.selectedThreadUrl),t.isLoading){k.innerHTML=ur(4);return}let a=Number(t.unlockConfig?.amountUsdc)||.001,r=M(t.newsSearchQuery.trim()),n=`
    <section class="news-feed-search-shell">
      <div class="news-feed-search-copy">
        <p>${r?`${e.length} matches for "${r}".`:`Search saved news by keyword. Unlock an AI briefing with a ${a} testnet USDC nanopayment to get what happened, key points, and takeaway without opening the full article.`}</p>
      </div>
      <label class="news-feed-search-bar" for="newsSearchInput">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
        <input id="newsSearchInput" type="search" placeholder="Search all saved news by keyword" value="${M(t.newsSearchQuery)}" autocomplete="off" />
      </label>
    </section>
  `;if(e.length===0){let s=t.showSaved?[]:t.stories;if(s.length>0){k.innerHTML=n+s.map(i=>`
        <article class="story-card" data-story-id="${i.id}" role="button" tabindex="0" aria-label="Open summary for ${i.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${i.source}</strong>
                <span>${Se(i)} - ${i.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${i.sourceUrl}" aria-pressed="${i.saved?"true":"false"}" aria-label="${i.saved?"Remove saved story":"Save story"}">
                ${Tt()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${i.id}" aria-expanded="${t.activeShareStoryId===i.id}">
                  ${At()}
                </button>
                <div class="share-menu" ${t.activeShareStoryId===i.id?"":"hidden"}>
                  <button type="button" data-export-action="save" data-export-story-id="${i.id}">Save image</button>
                  <button type="button" data-export-action="share" data-export-story-id="${i.id}">Share</button>
                </div>
              </div>
            </div>
          </div>

          <div class="story-image-frame desktop-only" aria-hidden="true">
            <img src="${i.imageUrl}" alt="" loading="lazy" />
          </div>

          <div class="story-copy desktop-only">
            <span class="category-chip ${i.category}">${q(i.category)}</span>
            <h2>${i.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${xt(i)}
            <button class="card-source-button summary-btn" type="button">AI briefing</button>
            ${/example\\.com/i.test(i.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${i.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${i.category}">${q(i.category)}</span>
                  <div class="mobile-icons">
                    <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${i.sourceUrl}" aria-pressed="${i.saved?"true":"false"}" aria-label="Save story">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${i.id}" aria-label="Save image">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                    </button>
                  </div>
                </div>
                <h2>${i.headline}</h2>
                <span class="mobile-card-time">${Se(i)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${i.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${$t(i)}
              ${/example\\.com/i.test(i.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${i.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("");return}k.innerHTML=n+'<div class="portfolio-empty compact news-search-empty">No stories match that keyword yet.</div>';return}k.innerHTML=n+e.map(s=>`
        <article class="story-card" data-story-id="${s.id}" role="button" tabindex="0" aria-label="Open summary for ${s.headline}">

          <!-- Desktop layout (visible above 640px) -->
          <div class="story-topline desktop-only">
            <div class="story-source">
              <div>
                <strong>${s.source}</strong>
                <span>${Se(s)} - ${s.readTime}</span>
              </div>
            </div>
            <div class="story-card-actions">
              <button class="bookmark-button" type="button" data-bookmark-url="${s.sourceUrl}" aria-pressed="${s.saved?"true":"false"}" aria-label="${s.saved?"Remove saved story":"Save story"}">
                ${Tt()}
              </button>
              <div class="share-control">
                <button class="export-button" type="button" aria-label="Export story card" data-export-id="${s.id}" aria-expanded="${t.activeShareStoryId===s.id}">
                  ${At()}
                </button>
                <div class="share-menu" ${t.activeShareStoryId===s.id?"":"hidden"}>
                  <button type="button" data-export-action="save" data-export-story-id="${s.id}">Save image</button>
                  <button type="button" data-export-action="share" data-export-story-id="${s.id}">Share</button>
                </div>
              </div>
            </div>
          </div>

          <div class="story-image-frame desktop-only" aria-hidden="true">
            <img src="${s.imageUrl}" alt="" loading="lazy" />
          </div>

          <div class="story-copy desktop-only">
            <span class="category-chip ${s.category}">${q(s.category)}</span>
            <h2>${s.headline}</h2>
            <p>Tap to read the AI briefing.</p>
          </div>

          <div class="card-action-row desktop-only">
            ${xt(s)}
            <button class="card-source-button summary-btn" type="button">AI briefing</button>
            ${/example\\.com/i.test(s.sourceUrl)?`<a class="card-source-button disabled" href="#" onclick="event.preventDefault(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="card-source-button" href="${s.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
          </div>

          <!-- Mobile layout (visible at 640px and below) -->
          <div class="mobile-card-inner mobile-only">
            <div class="mobile-card-body">
              <div class="mobile-card-text">
                <div class="mobile-card-topline">
                  <span class="category-chip ${s.category}">${q(s.category)}</span>
                  <div class="mobile-icons">
                    <button class="mobile-bookmark-btn" type="button" data-bookmark-url="${s.sourceUrl}" aria-pressed="${s.saved?"true":"false"}" aria-label="Save story">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    <button class="mobile-export-icon" type="button" data-export-action="save" data-export-story-id="${s.id}" aria-label="Save image">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
                    </button>
                  </div>
                </div>
                <h2>${s.headline}</h2>
                <span class="mobile-card-time">${Se(s)}</span>
              </div>
              <div class="mobile-card-image" aria-hidden="true">
                <img src="${s.imageUrl}" alt="" loading="lazy" />
              </div>
            </div>
            <div class="mobile-card-actions">
              ${$t(s)}
              ${/example\\.com/i.test(s.sourceUrl)?`<a class="mobile-action-btn source-btn disabled" href="#" onclick="event.preventDefault(); event.stopPropagation(); alert('No original source available for this mock story.');" aria-disabled="true">Open source</a>`:`<a class="mobile-action-btn source-btn" href="${s.sourceUrl}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Open source</a>`}
              <button class="mobile-action-btn summary-btn" type="button">AI briefing</button>
            </div>
          </div>

        </article>
      `).join("")},Mt=e=>new Promise((a,r)=>{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>a(o),o.onerror=()=>r(new Error(`Unable to load image: ${e}`)),o.src=e}),xe=(e,a,r,o,n,s)=>{e.beginPath(),e.moveTo(a+s,r),e.lineTo(a+o-s,r),e.quadraticCurveTo(a+o,r,a+o,r+s),e.lineTo(a+o,r+n-s),e.quadraticCurveTo(a+o,r+n,a+o-s,r+n),e.lineTo(a+s,r+n),e.quadraticCurveTo(a,r+n,a,r+n-s),e.lineTo(a,r+s),e.quadraticCurveTo(a,r,a+s,r),e.closePath()},gr=(e,a,r,o,n,s,i)=>{let d=a.split(/\s+/).filter(Boolean),p=[],f="";for(let m of d){let u=f?`${f} ${m}`:m;if(e.measureText(u).width<=n){f=u;continue}if(f&&p.push(f),f=m,p.length===i)break}if(f&&p.length<i&&p.push(f),d.length>0&&p.length===i){for(;e.measureText(`${p[i-1]}...`).width>n&&p[i-1].length>0;)p[i-1]=p[i-1].slice(0,-1).trim();p[i-1]=`${p[i-1]}...`}return p.forEach((m,u)=>e.fillText(m,r,o+u*s)),o+p.length*s},hr=(e,a,r,o,n,s,i)=>{let d=Math.max(n/a.naturalWidth,s/a.naturalHeight),p=n/d,f=s/d,m=(a.naturalWidth-p)/2,u=(a.naturalHeight-f)/2;e.save(),xe(e,r,o,n,s,i),e.clip(),e.drawImage(a,m,u,p,f,r,o,n,s),e.restore()},Ut=e=>new Promise((a,r)=>{try{e.toBlob(o=>{o?a(o):r(new Error("Unable to export image"))},"image/png")}catch(o){r(o)}}),Lt=e=>e?e.replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&#39;/g,"'").replace(/&#34;/g,'"').replace(/&#38;/g,"&").replace(/&#60;/g,"<").replace(/&#62;/g,">").replace(/&#8216;/g,"'").replace(/&#8217;/g,"'").replace(/&#8220;/g,'"').replace(/&#8221;/g,'"').replace(/&#8211;/g,"\u2013").replace(/&#8212;/g,"\u2014").replace(/&#8230;/g,"...").replace(/&#(\d+);/g,(a,r)=>String.fromCharCode(Number(r))):"",vr=e=>e?e.startsWith("data:")||e.startsWith("./")||e.startsWith("/")||e.includes(window.location.host)?e:`${(window.SIFTLE_API_BASE||"").replace(/\/$/,"")}/api/proxy-image?url=${encodeURIComponent(e)}`:"",Pt=async(e,a=!0)=>{let r=document.createElement("canvas");r.width=1080,r.height=1120;let o=r.getContext("2d");if(!o)throw new Error("Canvas is not available");o.fillStyle="#f4f7fb",o.fillRect(0,0,r.width,r.height),o.shadowColor="rgba(23, 34, 72, 0.16)",o.shadowBlur=44,o.shadowOffsetY=18,o.fillStyle="#ffffff",xe(o,70,70,940,980,34),o.fill(),o.shadowColor="transparent";let n=await Mt("./assets/siftle-logo-small.png").catch(()=>null);n&&o.drawImage(n,784,106,54,54),o.fillStyle="#071229",o.font="800 34px Inter, Arial, sans-serif",o.textAlign="left",o.fillText("Siftle",850,143),o.fillStyle="#6b748c",o.font="700 24px Inter, Arial, sans-serif",o.fillText(`${Lt(e.source)} - ${e.postedAt} ago`,110,140);let s=195;if(a){let d=await Mt(vr(e.imageUrl)).catch(()=>null);d?hr(o,d,110,s,860,520,28):(o.fillStyle="#eef2ff",xe(o,110,s,860,520,28),o.fill())}else o.fillStyle="#eef2ff",xe(o,110,s,860,520,28),o.fill();let i=775;return o.fillStyle=e.category==="Sports"?"#dffaf4":e.category==="Tech"?"#e8eef6":e.category==="Anime"?"#efe7ff":e.category==="Gaming"?"#ffebd9":"#eee7ff",xe(o,110,i,118,42,21),o.fill(),o.fillStyle=e.category==="Sports"?"#11a98d":e.category==="Tech"?"#3f5f86":e.category==="Gaming"?"#d95c14":"#6f3cff",o.font="800 22px Inter, Arial, sans-serif",o.fillText(q(e.category),132,i+28),o.fillStyle="#07142f",o.font="680 44px Space Grotesk, Inter, Arial, sans-serif",gr(o,Lt(e.headline),110,888,860,54,4),r},ia=async e=>{let a=await Pt(e,!0);try{return await Ut(a)}catch{return Ut(await Pt(e,!1))}},la=e=>`siftle-${e.headline.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"story"}.png`,da=async e=>{let a=await ia(e),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=la(e),o.click(),URL.revokeObjectURL(r)},br=async e=>{let a=await ia(e),r=new File([a],la(e),{type:"image/png"}),o={title:e.headline,text:`Siftle: ${e.headline}`,files:[r]};if(navigator.canShare?.(o)&&navigator.share){await navigator.share(o);return}await da(e)},yr=async(e,a)=>{let r=t.stories.find(o=>o.id===e);if(r){t.activeShareStoryId=null,he(),v(a==="share"?"Preparing share image":"Preparing download"),A&&(A.textContent=a==="share"?"Preparing share image...":"Preparing image download...");try{a==="share"?await br(r):await da(r),v(a==="share"?"Share image ready":"Image saved"),A&&(A.textContent="Branded story image ready")}catch(o){console.warn(o),v("Image export unavailable"),A&&(A.textContent="Image export was cancelled or unavailable")}}},Ct=(e,a)=>{let r=t.unlockingSummaryUrl===e.sourceUrl,o=nt(e);return`
  <article class="thread-item">
    <div class="thread-dot" aria-hidden="true"></div>
    <div class="thread-item-body">
      <div class="thread-meta">
        <span class="category-chip ${e.category}">${q(e.category)}</span>
        <span>${a} - ${e.source}</span>
      </div>
      <h3>${e.headline}</h3>
      <p>${ae(e)}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        ${/example\.com/i.test(e.sourceUrl)?"":`<a class="thread-source-link" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>`}
        <button type="button" class="thread-source-link" data-unlock-briefing-url="${encodeURIComponent(e.sourceUrl)}" ${r?"disabled":""}>${r?"Preparing...":"AI briefing"}</button>
      </div>
      ${Ce(e)}
      ${r?`<div style="margin-top: 12px;">${ge()}</div>`:re(e)?t.loadingSummaryUrl===e.sourceUrl?`<div style="margin-top: 12px;">${ge()}</div>`:o?`<div style="margin-top: 12px;">${it(e)}</div>`:`<div style="margin-top: 12px;">${rt(ae(e,t.aiSummaries[e.sourceUrl]||e.ai_summary),e)}</div>`:""}
    </div>
  </article>
`},kr=async(e,a)=>{if(!t.walletAddress){v("Session expired or wallet not connected. Please sign in."),qe();return}let r=Me().find(f=>f.id===e);if(!r||!oe(r))return;let o=ne(r).find(f=>f.id===a);if(!o){v("Choose a valid option.");return}!t.hasLoadedPortfolioPositions&&!t.loadingPortfolioPositions&&(t.marketTradeStatus="Loading position...",g(),await z(),t.marketTradeStatus=null);let n=t.marketSnapshots[r.id];if(We(r,n)){v("This market is resolved and can no longer be traded.");return}let s=t.marketPositions[r.id],i=t.marketOrderMode==="sell";if(!i&&s?.optionId){v("Your pick is already locked for this market.");return}if(i&&!s?.optionId){v("You do not have a pick to exit.");return}let d=Math.max(0,Number(s?.optionSharesUsdc)||0);if(i&&d<=0){v("Your pick is still loading. Please try again."),await z({force:!0});return}let p=i?d:Be(Number(t.marketTradeAmount)||0,"buy","yes",void 0);t.marketTradeAmount=p,t.marketTradeOptionId=i&&s?.optionId||o.id,C("trade_attempt");try{t.marketTradeStatus=i?"Exiting your pick...":"Locking your pick...",g(),await ba(r.id,i?"sell":"buy",i&&s?.optionId||o.id,p,f=>{t.marketTradeStatus=f,g()}),delete t.marketSnapshots[r.id],delete t.marketPositions[r.id],delete t.checkedMarketSnapshots[r.id],t.hasLoadedPortfolioPositions=!1,t.portfolioPositionsLoadedAt=0,t.walletAddress=await _e(),t.walletAddress&&(t.walletBalance=await X(t.walletAddress)),await z({force:!0}),C(i?"trade_sell_success":"trade_buy_success"),v(i?"Pick exited":`Pick locked: ${o.label}`),t.tradeDrawerOpen=!1}catch(f){C("trade_failed"),v(f instanceof Error?f.message:"Trade failed")}finally{t.marketTradeStatus=null,B(),g()}},wr=()=>{if(!T||!k)return;let e=t.stories.find(o=>o.sourceUrl===t.selectedThreadUrl);if(k.hidden=!0,T.hidden=!1,T.classList.add("fullscreen"),document.body.classList.add("detail-mode"),!e){T.innerHTML="";return}let a=t.loadingThreadUrl===e.sourceUrl,r=t.activeThread;if(a&&!r){T.innerHTML=`
      <div class="detail-container thread-container">
        <button class="back-button" type="button" data-back-to-feed>Back to feed</button>
        <article class="detail-card thread-card thread-verifying">
          <span class="market-kicker">Verifying timeline</span>
          <h2>${e.thread?.topic||e.headline}</h2>
          <p class="thread-intro">Checking the published timeline and its past updates.</p>
          ${pr(3)}
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
          <span class="category-chip ${e.category}">${q(e.category)}</span>
          <span>${Ja(r?.items?.length??0)}</span>
        </div>
        <h2>${r?.topic||e.thread?.topic||e.headline}</h2>
        <p class="thread-intro">Follow how this story has been developing through related Siftle archive updates.</p>
        <div class="thread-timeline">
          ${Ct(e,"Latest")}
          ${Qt(r?.items??[]).map(o=>Ct(o,o.postedAt||"Earlier")).join("")}
        </div>
      </article>
    </div>
  `},Sr=()=>{if(!T||!k)return;if(t.selectedThreadUrl){wr();return}let e=t.stories.find(i=>i.id===t.selectedStoryId);if(!e){T.hidden=!0,T.classList.remove("fullscreen"),document.body.classList.remove("detail-mode"),k.hidden=!1;return}let a=ae(e,t.aiSummaries[e.sourceUrl]),r=t.loadingSummaryUrl===e.sourceUrl,o=re(e),n=t.unlockingSummaryUrl===e.sourceUrl,s=nt(e);k.hidden=!0,T.hidden=!1,T.classList.add("fullscreen"),document.body.classList.add("detail-mode"),T.innerHTML=`
    <div class="detail-container">
      <button class="back-button" type="button" data-back-to-feed aria-label="Go back to feed">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to feed
      </button>
      <article class="detail-card">
        <div class="detail-topline">
          <span class="category-chip ${e.category}">${q(e.category)}</span>
          <span>${e.source} - ${Se(e)} - ${e.readTime}</span>
        </div>
        <h2>${e.headline}</h2>
        <img class="detail-image" src="${e.imageUrl}" alt="" />
        <section class="detail-summary ${e.category}">
          <strong>AI briefing</strong>
          ${o?Ce(e):""}
          ${o?r?ge():s?it(e):rt(a,e):ja(e,n)}
        </section>
        <a class="source-button" href="${e.sourceUrl}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    </div>
  `},xr=e=>{let a=t.marketSnapshots[e.id],r=G(e),o=oe(e),n=ne(e).length,s=a?.volumeUsdc??(Number(e.volumeUsdc)||0),i=a?.yesPriceCents,d=i??e.probability,p=o?`${n}`:`${d}%`,f=i===void 0?r?"Loading Arc pools":"Arc setup required":`Yes ${i}\xA2 \xB7 No ${100-i}\xA2`,m=i===void 0?`Yes ${e.probability}c - No ${100-e.probability}c`:f,u=Fe(e),h=e.timeframe==="Daily"?Wt(e,a):e.closes;return`
    <button class="market-card" type="button" data-market-id="${e.id}">
      <div class="market-card-topline">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="category-chip ${e.category}">${q(e.category)}</span>
          <span class="timeframe-chip ${e.timeframe}">${e.timeframe==="Sagas"?"Sagas":e.timeframe}</span>
        </div>
        <span class="market-card-updates">${u.evidence.length} updates</span>
      </div>
      <div class="market-card-body" style="display: flex; gap: 16px; align-items: flex-start; justify-content: space-between; width: 100%; text-align: left; margin: 4px 0;">
        <div class="market-card-text" style="flex: 1; min-width: 0;">
          <h2>${e.question}</h2>
        </div>
        ${u.imageUrl?`
        <div class="market-card-image-frame" style="width: 72px; height: 72px; min-width: 72px; border-radius: 12px; overflow: hidden; border: 1px solid var(--market-border); flex-shrink: 0;">
          <img src="${u.imageUrl}" alt="" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        `:""}
      </div>
      <div class="market-probability-row">
        <strong>${p}</strong>
        <span>${o?"possible outcomes":r?"market probability":"pending deployment"}</span>
        <span class="market-share-prices">${o?"Pick exactly one":m}</span>
      </div>
      <div class="market-meter" aria-hidden="true"><span style="width: ${o?100:d}%"></span></div>
      <div class="market-volume">
        <span>Total vol</span>
        <strong>$${O(s)}</strong>
      </div>
      <div class="market-card-footer">
        <span>${u.evidence.length} related news</span>
        <span>${e.timeframe==="Daily"?`Locks ${h}`:`Closes ${h}`}</span>
      </div>
    </button>
  `},$r=e=>{let a=Fe(e),o=t.marketSnapshots[e.id]?.yesPriceCents??e.probability,n=100-o,s=a.evidence[0],i=s?s.headline:"No updates yet",d=`${window.location.origin}${window.location.pathname}#market-${e.id}`;return`\u{1F6A8} *Siftle Market Alert* \u{1F6A8}

*Market:* ${e.question}
\u{1F7E2} *Yes:* ${o}\xA2 | \u{1F534} *No:* ${n}\xA2

*Latest Development:* "${i}"

Trade and discuss here: ${d}`},Tr=e=>{if(!k||!T)return;let a=Fe(e),r=!t.checkedMarketEvidence[e.id],o=G(e),n=t.marketSnapshots[e.id],s=oe(e),i=ne(e);s&&!t.marketTradeOptionId&&(t.marketTradeOptionId=i[0]?.id||null);let d=Za(e),p=!!(o&&!n),f=n?.yesPriceCents??(o?e.probability:0),m=n?.noPriceCents??(o?100-e.probability:0),u=p?"":o?`${f}\xA2`:"--",h=p?"":o?`${m}\xA2`:"--",l=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},c=!!l.optionId;s&&c&&t.marketOrderMode!=="sell"&&(t.marketOrderMode="sell"),s&&!c&&t.marketOrderMode==="sell"&&(t.marketOrderMode="buy");let b=s&&t.marketOrderMode==="sell"&&c?Math.max(0,Number(l.optionSharesUsdc)||0):0,x=b>0?b:Be(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,l),w=b>0?{min:0,max:b}:ea(t.marketOrderMode,t.marketTradeSide,l),$=t.marketOrderMode==="buy"?"$5-$10 USDC":`Up to $${O(w.max)} USDC`,y=!t.walletAddress||t.hasLoadedPortfolioPositions,S=We(e,n),L=Yt(e,n),P=!!L;s||(t.marketTradeSide=dt(t.marketOrderMode,t.marketTradeSide,l));let N=!s&&!S&&!P&&y&&Z(t.marketOrderMode,"yes",l),H=!s&&!S&&!P&&y&&Z(t.marketOrderMode,"no",l),le=s?!S&&!P&&y&&(t.marketOrderMode==="sell"?c:!c&&!!d):!S&&!P&&y&&Z(t.marketOrderMode,t.marketTradeSide,l),_=S?"Market resolved":L||(t.marketOrderMode==="sell"?"No YES shares":"Exit NO first"),de=S?"Market resolved":L||(t.marketOrderMode==="sell"?"No NO shares":"Exit YES first"),ce=s?x:ta(n,t.marketTradeSide,x,t.marketOrderMode,l),ue=t.marketOrderMode==="buy"?"Buy":"Exit",K=s?"Pick one outcome":o?"Arc testnet live":"Contract not deployed";k.hidden=!0,T.hidden=!1,T.classList.add("fullscreen"),document.body.classList.add("detail-mode"),lr(e),Zt(e),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&z({force:!t.hasLoadedPortfolioPositions});let De=s?!!l.optionId:l.yesSharesUsdc>0||l.noSharesUsdc>0,be="";if(s&&De&&t.walletAddress){let U=na(l,n);be=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Pick</h3>
        <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px;">
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Option</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">${M(l.optionLabel||"Selected option")}</strong>
          </div>
          <div>
            <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
            <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${O(U)}</strong>
          </div>
        </div>
      </div>
    `}else De&&t.walletAddress&&(be=`
      <div class="user-market-position-box" style="margin: 16px 0; padding: 16px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 12px; font-family: 'Space Grotesk', sans-serif;">
        <h3 style="font-size: 0.9rem; font-weight: 700; color: var(--market-text-main); margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">Your Position</h3>
        ${aa(l,n).map(D=>`
          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; margin-bottom: 8px;">
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">${D.label}</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">${O(D.shares)}</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; color: var(--market-text-muted); display: block; margin-bottom: 2px;">Projected payout</span>
              <strong style="font-size: 0.95rem; color: var(--market-text-main);">$${O(D.payout)}</strong>
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
            <span class="category-chip ${e.category}">${q(e.category)}</span>
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
              <span>${st(e,n)===null?"Closes":"Trade lock"}</span>
              <strong>${Wt(e,n)}</strong>
            </div>
            <div class="market-stat">
              <span>Volume</span>
              <strong>${n?`$${Math.round(n.volumeUsdc).toLocaleString()}`:e.volume}</strong>
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
              ${r?mr(3):a.evidence.length===0?'<div class="portfolio-empty compact">Related news is still loading for this market.</div>':a.evidence.map(U=>{let D=Ft(e,U),ye=t.unlockingSummaryUrl===U.sourceUrl;return`
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
                      <button type="button" class="market-thread-source-link" data-unlock-briefing-url="${encodeURIComponent(U.sourceUrl)}" ${ye?"disabled":""}>${ye?"Preparing...":"AI briefing"}</button>
                    </div>
                    ${Ce(D)}
                    ${ye?`<div style="margin-top: 12px;">${ge()}</div>`:re(D)?t.loadingSummaryUrl===U.sourceUrl?`<div style="margin-top: 12px;">${ge()}</div>`:nt(D)?`<div style="margin-top: 12px;">${it(D)}</div>`:`<div style="margin-top: 12px;">${rt(ae(D,t.aiSummaries[U.sourceUrl]),D)}</div>`:""}
                  </div>
                </article>
              `}).join("")}
            </div>
          </section>
        </div>
      </article>

      <div class="sticky-trade-bar">
        <div class="sticky-trade-info">
          ${s?`<span>${c?"Pick locked":"Choose one option"}</span><span><strong>${i.length} options</strong></span>`:`<span>Yes <strong>${u}</strong></span><span>No <strong>${h}</strong></span>`}
        </div>
        <button class="sticky-trade-btn" type="button" id="openTradeDrawerBtn" ${S||P?"disabled":""}>
          ${S?"Market Resolved":L||(s?c?"Pick Locked":"Pick Outcome":"Trade Market")}
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
            <button type="button" class="${t.marketOrderMode==="buy"?"active":""}" data-market-order-mode="buy" ${S||P?"disabled":""}>Buy</button>
            <button type="button" class="${t.marketOrderMode==="sell"?"active":""}" data-market-order-mode="sell" ${S||P?"disabled":""}>Exit</button>
          </div>

          <div class="market-action-grid">
            ${s?i.map(U=>{let D=n?.optionPools?.[U.id]||0,ye=t.marketTradeOptionId===U.id||l.optionId===U.id,pt=S||P||t.marketOrderMode==="sell"||c||!y;return`
                  <button type="button" class="market-side option ${ye?"active":""} ${pt?"disabled":""}" data-market-option-id="${M(U.id)}" ${pt?"disabled":""}>
                    <span>${M(U.label)}</span>
                    <strong>$${O(D)}</strong>
                    ${l.optionId===U.id?"<small>Your pick</small>":""}
                  </button>
                `}).join(""):p?`
                <div class="market-side yes" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
                <div class="market-side no" aria-busy="true"><div class="skeleton skeleton-line md" style="height: 18px; margin: 0 auto 6px;"></div></div>
              `:`
                <button type="button" class="market-side yes ${t.marketTradeSide==="yes"?"active":""} ${N?"":"disabled"}" data-market-trade-side="yes" ${N?"":"disabled"} title="${N?"Yes":_}">
                  <span>Yes</span>
                  <strong>${u}</strong>
                  ${N?"":`<small>${_}</small>`}
                </button>
                <button type="button" class="market-side no ${t.marketTradeSide==="no"?"active":""} ${H?"":"disabled"}" data-market-trade-side="no" ${H?"":"disabled"} title="${H?"No":de}">
                  <span>No</span>
                  <strong>${h}</strong>
                  ${H?"":`<small>${de}</small>`}
                </button>
              `}
          </div>

          <div class="market-amount-panel">
            <label for="marketAmountInput">Trade Amount <span style="color: var(--market-text-muted); font-size: 0.72rem; text-transform: none; letter-spacing: 0;">${$}</span></label>
            <div class="market-amount-input-row">
              <span>$</span>
              <input id="marketAmountInput" type="number" min="${w.min.toFixed(2)}" max="${Math.max(w.min,w.max).toFixed(2)}" step="0.01" inputmode="decimal" value="${x}" data-market-amount ${S||P?"disabled":""} />
              <span>USDC</span>
            </div>
          </div>

          <div class="market-inline-payout">
            <span>${s?"Your entry":t.marketOrderMode==="buy"?"Projected payout":"Exit amount"}</span>
            <strong>$${O(ce)}</strong>
          </div>

          <div class="drawer-action-container">
            ${p?'<div class="market-submit-button skeleton" style="min-height: 48px; border-radius: 12px;"></div>':t.marketTradeStatus?`<button type="button" class="market-submit-button disabled" style="opacity: 0.8; pointer-events: none;">${t.marketTradeStatus}</button>`:S?'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Market resolved</button>':P?`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">${L}</button>`:t.walletAddress?y?s&&t.marketOrderMode==="sell"&&c?`<button type="button" class="market-submit-button" data-market-option-trade="${M(l.optionId||"")}">Exit pick</button>`:le?s?`<button type="button" class="market-submit-button" data-market-option-trade="${M(d?.id||"")}">Confirm ${M(d?.label||"pick")}</button>`:`<button type="button" class="market-submit-button" data-market-trade="${t.marketTradeSide}">Confirm ${ue} ${t.marketTradeSide==="yes"?"Yes":"No"}</button>`:`<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">No valid ${ue.toLowerCase()} side</button>`:'<button type="button" class="market-submit-button disabled" style="opacity: 0.6; pointer-events: none;">Loading position...</button>':'<button type="button" class="market-submit-button" data-connect-wallet>Sign in to trade</button>'}
          </div>
          
          <div class="drawer-wallet-info">
            <span>Wallet Balance:</span>
            <strong>${t.walletAddress?`${t.walletBalance??"0"} USDC`:"Not connected"}</strong>
          </div>
        </div>
      </div>
    </div>
  `},ca=()=>{if(!k||!T)return;if(He?.toggleAttribute("hidden",!0),je?.toggleAttribute("hidden",!0),te?.toggleAttribute("hidden",!0),Ue?.classList.add("active"),Le?.classList.remove("active"),Pe?.classList.remove("active"),window.setTimeout(()=>{t.activeSurface==="markets"&&E.forEach(s=>{Zt(s)})},750),t.selectedMarketId){let s=E.find(i=>i.id===t.selectedMarketId);if(s){Tr(s);return}t.selectedMarketId=null,window.location.hash.startsWith("#market-")&&window.history.replaceState({},"","#markets");return}document.body.classList.remove("detail-mode"),T.hidden=!0,T.classList.remove("fullscreen"),k.hidden=!1,k.classList.add("markets-list");let e=E,r=`
    <nav class="market-timeframe-tabs" aria-label="Timeframe navigation">
      ${["All","Daily","Weekly","Sagas"].map(s=>{let i=t.activeMarketTimeframe===s,d=s==="All"?e.length:e.filter(f=>f.timeframe===s).length;return`
          <button class="timeframe-tab-btn ${i?"active":""}" type="button" data-timeframe="${s}">
            <span>${s==="Sagas"?"Sagas":s}</span>
            <span class="timeframe-tab-count">${d}</span>
          </button>
        `}).join("")}
    </nav>
  `;if(t.loadingMarkets&&E.length===0){k.innerHTML=`
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
    `;return}let o="",n=(s,i,d)=>d.length===0?"":`
      <div class="market-timeframe-section">
        <div class="timeframe-section-header">
          <div class="timeframe-section-header-left">
            <h2>${s}</h2>
            <span class="timeframe-section-subtitle">${i}</span>
          </div>
          <span class="timeframe-section-count-badge">${d.length} ${d.length===1?"market":"markets"}</span>
        </div>
        <section class="markets-grid" aria-label="${s} prediction markets">
          ${d.map(xr).join("")}
        </section>
      </div>
    `;if(t.activeMarketTimeframe==="All"){let s=e.filter(p=>p.timeframe==="Daily"),i=e.filter(p=>p.timeframe==="Weekly"),d=e.filter(p=>p.timeframe==="Sagas");o=`
      ${n("Daily","Ends in a day or two",s)}
      ${n("Weekly","Ends in a week",i)}
      ${n("Sagas (Long-term)","Narratives & futures",d)}
    `}else{let s=e.filter(p=>p.timeframe===t.activeMarketTimeframe),i=t.activeMarketTimeframe,d="";t.activeMarketTimeframe==="Daily"?d="Ends in a day or two":t.activeMarketTimeframe==="Weekly"?d="Ends in a week":t.activeMarketTimeframe==="Sagas"&&(i="Sagas (Long-term)",d="Narratives & futures"),o=`
      ${n(i,d,s)}
    `}k.innerHTML=`
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
  `},ua=()=>{if(!k||!T)return;He?.toggleAttribute("hidden",!0),je?.toggleAttribute("hidden",!0),te?.toggleAttribute("hidden",!0),Ue?.classList.remove("active"),Le?.classList.remove("active"),Pe?.classList.remove("active"),document.body.classList.remove("detail-mode"),T.hidden=!0,k.hidden=!1,k.classList.add("markets-list");let e=t.walletAddress&&t.hasLoadedPortfolioPositions?ct():null;t.walletAddress&&e&&fetch(I("/api/leaderboard/report"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({walletAddress:t.walletAddress,points:e.points,status:e.status,username:t.profileUsername||""})}).catch(l=>console.error("Failed to report user score:",l)),J&&(clearInterval(J),J=null),k.innerHTML=`
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
  `;let a=(l="2026-07-19T23:59:59.000Z")=>{let c=document.getElementById("seasonTimer");J&&clearInterval(J);let b=()=>{let w=new Date(l).getTime()-new Date().getTime();if(w<=0){c&&(c.innerText="Season Finished!"),J&&clearInterval(J);return}let $=Math.floor(w/(1e3*60*60*24)),y=Math.floor(w%(1e3*60*60*24)/(1e3*60*60)),S=Math.floor(w%(1e3*60*60)/(1e3*60)),L=Math.floor(w%(1e3*60)/1e3);c&&(c.innerText=`${$}d ${y}h ${S}m ${L}s`)};b(),J=setInterval(b,1e3)};a();let r=l=>l.map((c,b)=>{let x=Number(c.globalRank)||b+1,w=String(c.username||""),$=!!(t.walletAddress&&w.toLowerCase()===t.walletAddress.toLowerCase()),y=$&&t.profileUsername?t.profileUsername:c.displayName||w,S=$?`${t.profileUsername?y:j(w)} (You)`:y.startsWith("0x")&&y.length===42?j(y):y,L=M(S),P=M(Ve(c.status)),N=c.nextSeasonDivision?`Division ${c.nextSeasonDivision}`:"Qualify",H=x<=10?"promotion-zone":"safety-zone",le=x<=12?'<span class="leaderboard-zone-arrow up">\u25B2</span>':'<span class="leaderboard-zone-arrow invisible">\u2022</span>';return`
      <div class="leaderboard-row global-row ${$?"user-highlight":""} ${H}" role="listitem">
        <div class="leaderboard-row-left">
          ${le}
          <span class="leaderboard-rank rank-${x}">${x}</span>
          <span class="leaderboard-username">${L}</span>
        </div>
        <div class="leaderboard-row-score">
          <strong>${Number(c.points)||0} pts</strong>
          <span>${c.prizeEligible?"Prize eligible":"Season rank"} \xB7 ${M(N)}</span>
        </div>
        <div class="leaderboard-row-right">
          <span>${P}</span>
        </div>
      </div>
    `}).join(""),o=l=>l.map((c,b)=>{let x=b+1,w=String(c.username||""),$=!!(t.walletAddress&&w.toLowerCase()===t.walletAddress.toLowerCase()),y=$&&t.profileUsername?t.profileUsername:c.displayName||w,S=M(Ve(c.status)),L=$?`${t.profileUsername?y:j(w)} (You)`:y.startsWith("0x")&&y.length===42?j(y):y,P=M(L),N="safety-zone",H='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return x<=2?(N="promotion-zone",H='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):x>=5&&(N="relegation-zone",H='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
      <div class="leaderboard-row ${$?"user-highlight":""} ${N}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
        <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
          ${H}
          <span class="leaderboard-rank rank-${x}" style="flex-shrink: 0; margin-right: 4px;">${x}</span>
          <span class="leaderboard-username" style="font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${P}</span>
        </div>
        <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
          <span style="color: #ffffff; font-weight: 750; font-size: 0.95rem; white-space: nowrap;">${Number(c.points)||0} pts</span>
        </div>
        <div style="flex: 1.5; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 0;">
          <span style="font-size: 0.78rem; color: #8e8e93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${S}</span>
        </div>
      </div>
    `}).join(""),n=l=>{V=l,document.querySelectorAll("[data-leaderboard-view]").forEach(c=>{c.classList.toggle("active",c.dataset.leaderboardView===l)}),document.getElementById("divisionControls")?.toggleAttribute("hidden",l!=="division"),document.getElementById("globalControls")?.toggleAttribute("hidden",l!=="global"),document.getElementById("globalPrizeBox")?.toggleAttribute("hidden",l!=="global")},s=l=>{let c=document.getElementById("leaderboardListContainer");c&&(c.innerHTML=`
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
    `)},i=()=>{n("global");let l=document.getElementById("leaderboardListContainer"),c="global",b=kt(c);b&&l?(l.innerHTML=St()+r(b.players),b.seasonEndsAt&&a(b.seasonEndsAt)):s(10);let x=new URLSearchParams;t.walletAddress&&x.set("walletAddress",t.walletAddress);let w=x.toString();fetch(I(`/api/leaderboard/global${w?`?${w}`:""}`)).then($=>$.json()).then($=>{let y=wt($.players||[],b?.players||[],!0);l&&(l.innerHTML=y.length===0?`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No players on the global leaderboard yet.</p>`:r(y)),Qe(c,{players:y,seasonEndsAt:$.seasonEndsAt}),a($.seasonEndsAt)}).catch($=>{console.error("Failed to load global leaderboard:",$),l&&(l.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading global leaderboard. Please try again.</p>`)})},d=l=>{n("division");let c=document.getElementById("leaderboardListContainer"),b=`division_${l||ke||"current"}`,x=kt(b);x&&c?(c.innerHTML=St()+o(x.players),x.divisionNumber&&(ke=x.divisionNumber),x.seasonEndsAt&&a(x.seasonEndsAt)):c&&l!==void 0&&(c.innerHTML=`
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
      `);let w=new URLSearchParams;t.walletAddress&&w.set("walletAddress",t.walletAddress),l&&w.set("division",String(l));let $=w.toString();fetch(I(`/api/leaderboard/division${$?`?${$}`:""}`)).then(y=>y.json()).then(y=>{let S=y.divisionNumber||1,L=wt(y.players||[],x?.players||[],!1),P=y.totalDivisions||1,N=y.seasonEndsAt;ke=S;let H=document.getElementById("divisionTitleText");H&&(H.innerText=`Division ${S}`);let le=document.getElementById("divisionSelector");le&&(le.innerHTML=Array.from({length:P},(_,de)=>de+1).map(_=>`
            <option value="${_}" ${_===S?"selected":""}>Division ${_}</option>
          `).join("")),c&&(L.length===0?c.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">No active players in this division.</p>`:c.innerHTML=L.map((_,de)=>{let ce=de+1,ue=t.walletAddress&&_.username.toLowerCase()===t.walletAddress.toLowerCase(),K=ue&&t.profileUsername?t.profileUsername:_.displayName||_.username,ut=M(Ve(_.status)),De=ue?`${t.profileUsername?K:j(_.username)} (You)`:K.startsWith("0x")&&K.length===42?j(K):K,be=M(De),U="safety-zone",D='<span style="color: transparent; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u2022</span>';return ce<=2?(U="promotion-zone",D='<span style="color: #34d399; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25B2</span>'):ce>=5&&(U="relegation-zone",D='<span style="color: #ef4444; font-weight: bold; font-size: 0.85rem; margin-right: 4px; display: inline-block; width: 10px;">\u25BC</span>'),`
                <div class="leaderboard-row ${ue?"user-highlight":""} ${U}" role="listitem" style="display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 12px 16px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important; margin-bottom: 0 !important; background: transparent !important; font-family: 'Space Grotesk', sans-serif !important;">
                  <!-- Left Side: Arrow + Rank + Username -->
                  <div style="flex: 1.5; display: flex; align-items: center; gap: 8px; min-width: 0;">
                    ${D}
                    <span class="leaderboard-rank rank-${ce}" style="flex-shrink: 0; margin-right: 4px;">${ce}</span>
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
              `}).join("")),Qe(b,{players:L,divisionNumber:S,totalDivisions:P,seasonEndsAt:N}),Qe(`division_${S}`,{players:L,divisionNumber:S,totalDivisions:P,seasonEndsAt:N}),a(N)}).catch(y=>{console.error("Failed to load division leaderboard:",y),c&&(c.innerHTML=`<p style="color: var(--market-text-muted); text-align: center; padding: 24px 0; font-family: 'Space Grotesk', sans-serif;">Error loading division leaderboard. Please try again.</p>`)})};V==="division"?d(ke||void 0):i(),document.querySelectorAll("[data-leaderboard-view]").forEach(l=>{l.addEventListener("click",()=>{(l.dataset.leaderboardView==="division"?"division":"global")==="division"?d(ke||void 0):i()})}),document.getElementById("divisionSelector")?.addEventListener("change",l=>{let c=Number(l.target.value);d(c)}),document.getElementById("faucetClaimButton")?.addEventListener("click",async()=>{if(!t.walletAddress){v("Please sign in first!");return}if(localStorage.getItem("siftle_circle_is_mock")==="true"){let c=parseFloat(localStorage.getItem(`siftle_mock_balance_${t.walletAddress}`)||"1000.00")+100;localStorage.setItem(`siftle_mock_balance_${t.walletAddress}`,c.toFixed(2)),t.walletBalance=c.toFixed(2),v("Claimed $100 USDC mock credits!"),B(),ua()}else v("Opening Circle Faucet..."),window.open(Ze,"_blank")});let m=document.getElementById("howItWorksBtn"),u=document.getElementById("howItWorksModal"),h=document.getElementById("closeRulesModalBtn");m?.addEventListener("click",()=>{u&&u.classList.add("active")}),h?.addEventListener("click",()=>{u&&u.classList.remove("active")}),u?.addEventListener("click",l=>{l.target===u&&u.classList.remove("active")})},pa=()=>{t.activeSurface="feed",t.selectedMarketId=null,He?.toggleAttribute("hidden",!0),je?.toggleAttribute("hidden",!0),te?.toggleAttribute("hidden",!0),Ue?.classList.remove("active"),Le?.classList.add("active"),Pe?.classList.remove("active"),k?.classList.remove("markets-list")},Ar=e=>e===1?"Yes resolved":e===2?"No resolved":e===3?"Invalid":"Open",It=e=>{let a=t.marketPositions[e.id]||{yesSharesUsdc:0,noSharesUsdc:0},r=t.marketSnapshots[e.id];if(oe(e)){let c=r?.resolvedOptionId||null,b=!!c,x=b&&a.optionId===c,w=na(a,r),$=x?w:0,y=ne(e).find(P=>P.id===c)?.label,S=!!a.claimedAt||Re().has(e.id),L=!!t.claimingMarketIds[e.id];return`
      <article class="portfolio-position-card">
        <div class="portfolio-position-top">
          <span class="category-chip ${e.category}">${q(e.category)}</span>
          <span>${b?`Resolved: ${M(y||"Option selected")}`:"Open"}</span>
        </div>
        <h2>${e.question}</h2>
        <div class="portfolio-position-stats">
          <div><span>Your pick</span><strong>${M(a.optionLabel||"Selected option")}</strong></div>
          <div><span>Entry</span><strong>$${O(a.optionSharesUsdc||0)}</strong></div>
          <div><span>Projected payout</span><strong>$${O($)}</strong></div>
        </div>
        <div class="portfolio-position-footer">
          <span>${b?"":`Closes ${e.closes}`}</span>
          ${b?S?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':L?'<button type="button" class="connect-wallet-btn" disabled style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; opacity: 0.7 !important; cursor: wait !important;">Claiming...</button>':x?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${O($)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>':""}
        </div>
      </article>
    `}let o=Ar(r?.outcome),n=aa(a,r),s=n.reduce((c,b)=>Math.max(c,b.payout),0),i=a.yesSharesUsdc+a.noSharesUsdc,d=r?.outcome??0,p=Re().has(e.id),f=d===1?a.yesSharesUsdc:d===2?a.noSharesUsdc:0,m=d===1?r?.yesSharesUsdc??0:d===2?r?.noSharesUsdc??0:0,u=r?.volumeUsdc??0,h=f>0&&m>0?f/m*u:0,l=d===0?"":p?'<span style="color: #34d399; font-size: 0.82rem; font-weight: 800;">Claimed</span>':h>0?`<button type="button" class="connect-wallet-btn" data-claim-market="${e.id}" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important;">Claim $${O(h)}</button>`:'<span style="color: #ef4444; font-size: 0.82rem; font-weight: 800;">Lost</span>';return`
    <article class="portfolio-position-card">
      <div class="portfolio-position-top">
        <span class="category-chip ${e.category}">${q(e.category)}</span>
        <span>${o}</span>
      </div>
      <h2>${e.question}</h2>
      <div class="portfolio-position-stats">
        <div><span>Projected payout</span><strong>$${O(s)}</strong></div>
        ${n.map(c=>`
          <div><span>${c.label}</span><strong>${O(c.shares)}</strong></div>
        `).join("")}
      </div>
      <div class="portfolio-position-footer">
        <span>${i>0?`${O(i)} total shares`:""}</span>
        ${l||`<span>Closes ${e.closes}</span>`}
      </div>
    </article>
  `},Mr=async e=>{if(!t.walletAddress){v("Please sign in first.");return}let a=Me().find(o=>o.id===e),r=a?G(a):"";if(!a||!r){v("Market is not available.");return}try{t.claimingMarketIds[a.id]=!0,W(),C("claim_attempt"),ct();let o=await ya(r,t.walletAddress);C("claim_success"),o.won&&ar(a.id),delete t.marketPositions[a.id],delete t.marketSnapshots[a.id],t.hasLoadedPortfolioPositions=!1,t.walletBalance=await X(t.walletAddress),await z(),v(o.won?`Claimed $${O(o.amountUsdc)}`:"No payout to claim"),B(),W()}catch(o){C("claim_failed"),v(o instanceof Error?o.message:"Claim failed")}finally{delete t.claimingMarketIds[a.id],W()}},Ur=e=>{if(!e)return"";let a=t.referralData,r=a?.referrals?.length?a.referrals.map(n=>{let s=n.displayName||j(n.walletAddress),i=n.remaining<=0;return`
        <div class="portfolio-referral-row">
          <div class="portfolio-referral-person">
            <strong>${M(s)}</strong>
            <span>${j(n.walletAddress)}</span>
          </div>
          <div class="portfolio-referral-usage ${i?"expired":""}">
            <strong>${n.used}/${n.maxUses}</strong>
            <span>${i?"Expired":`${n.remaining} left`}</span>
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
  `},W=()=>{if(!k||!T)return;He?.toggleAttribute("hidden",!0),je?.toggleAttribute("hidden",!0),te?.toggleAttribute("hidden",!0),Ue?.classList.remove("active"),Le?.classList.remove("active"),Pe?.classList.add("active"),document.body.classList.remove("detail-mode"),T.hidden=!0,k.hidden=!1,k.classList.add("markets-list"),t.walletAddress&&!t.referralData&&!t.referralError&&!t.loadingReferralData&&Ae(),t.walletAddress&&(!t.hasLoadedPortfolioPositions||Date.now()-t.portfolioPositionsLoadedAt>15e3)&&!t.loadingPortfolioPositions&&(t.portfolioMarketPreviews.length===0&&_t(),z({force:!t.hasLoadedPortfolioPositions}));let a=Re(),r=Me().filter(u=>{let h=t.marketPositions[u.id];return a.has(u.id)||h&&(h.yesSharesUsdc+h.noSharesUsdc>0||(h.optionSharesUsdc||0)>0)}),o=r.filter(u=>(t.marketSnapshots[u.id]?.outcome??0)===0),n=r.filter(u=>(t.marketSnapshots[u.id]?.outcome??0)!==0),s=!!t.walletAddress,i=t.profileUsername||(t.walletAddress?j(t.walletAddress):"Anonymous"),d=M(i),p=M(t.profileUsername||""),f=t.profileNotice?`<div style="margin-top: 14px !important; padding: 10px 12px !important; border-radius: 8px !important; border: 1px solid ${t.profileNotice.type==="error"?"rgba(239, 68, 68, 0.28)":"rgba(16, 185, 129, 0.24)"} !important; background: ${t.profileNotice.type==="error"?"rgba(127, 29, 29, 0.22)":"rgba(6, 95, 70, 0.18)"} !important; color: ${t.profileNotice.type==="error"?"#fca5a5":"#86efac"} !important; font-size: 0.8rem !important; font-weight: 650 !important;">${M(t.profileNotice.message)}</div>`:"",m=i.charAt(0).toUpperCase();k.innerHTML=`
    <section class="portfolio-surface">
      <div class="portfolio-top-grid">
        ${Ur(s)}
      <div class="profile-card" style="background: var(--market-card-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 12px !important; padding: 14px !important; margin-bottom: 12px !important; box-sizing: border-box !important;">
        <div class="profile-avatar-container" style="display: flex !important; align-items: center !important; gap: 16px !important;">
          <div class="profile-avatar-gradient" style="width: 44px !important; height: 44px !important; border-radius: 50% !important; background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;">
            <span class="avatar-letter" style="color: #ffffff !important; font-family: 'Space Grotesk', sans-serif !important; font-size: 1.2rem !important; font-weight: 750 !important;">${m}</span>
          </div>
          <div class="profile-details" style="display: flex !important; flex-direction: column !important; min-width: 0 !important;">
            <div class="username-display-row" style="display: flex !important; align-items: center !important; gap: 8px !important;">
              <span class="profile-username" style="font-family: 'Space Grotesk', sans-serif !important; font-size: 1.08rem !important; font-weight: 750 !important; color: var(--market-text-main) !important; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis !important; max-width: 180px !important;">${d}</span>
              ${s?`
                <button type="button" class="edit-username-btn" id="editUsernameBtn" style="background: transparent !important; border: none !important; color: var(--market-text-muted) !important; cursor: pointer !important; padding: 4px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s ease !important; outline: none !important;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none !important;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path></svg>
                </button>
              `:""}
            </div>
            ${s?`
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

        ${s?`
          <div class="profile-username-edit-form" id="usernameEditForm" style="display: none !important; align-items: center !important; gap: 8px !important; margin-top: 16px !important; width: 100% !important;">
            <input type="text" id="usernameInput" placeholder="Enter username..." value="${p}" maxlength="15" style="flex: 1 !important; background: var(--market-bg) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; color: var(--market-text-main) !important; font-size: 0.85rem !important; outline: none !important; font-family: 'Outfit', sans-serif !important;" />
            <button type="button" class="save-username-btn" id="saveUsernameBtn" style="background: #ffffff !important; color: #000000 !important; border: 1px solid #ffffff !important; border-radius: 6px !important; padding: 8px 14px !important; font-size: 0.82rem !important; font-weight: 700 !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Save</button>
            <button type="button" class="cancel-username-btn" id="cancelUsernameBtn" style="background: transparent !important; color: var(--market-text-muted) !important; border: 1px solid var(--market-border) !important; border-radius: 6px !important; padding: 8px 12px !important; font-size: 0.82rem !important; cursor: pointer !important; transition: all 0.2s ease !important; outline: none !important;">Cancel</button>
          </div>
        `:""}

        ${f}

        <div class="portfolio-wallet-balance-row" style="margin-top: 12px !important; padding-top: 12px !important; border-top: 1px solid var(--market-border) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 12px !important;">
          <div>
            <span style="font-size: 0.72rem !important; color: var(--market-text-muted) !important; display: block !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; margin-bottom: 2px !important;">Available Balance</span>
            <strong style="font-size: 1.25rem !important; color: var(--market-text-main) !important; font-family: 'Space Grotesk', sans-serif !important;">
              ${t.walletAddress?t.walletBalance===null?`<span class="skeleton wallet-balance-skeleton" aria-hidden="true" style="display: inline-block !important; width: 80px !important; height: 20px !important; vertical-align: middle !important;"></span>${ve("Loading wallet balance")}`:`${t.walletBalance} USDC`:"0.00 USDC"}
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
      ${t.loadingPortfolioPositions?fr(2):t.walletAddress?r.length===0?'<div class="portfolio-empty">No positions found for this wallet yet. Confirmed trades will appear here after the Arc transaction settles.</div>':`
              <section class="portfolio-position-section">
                <h2>Open positions</h2>
                ${o.length?o.map(It).join(""):'<div class="portfolio-empty compact">No open positions.</div>'}
              </section>
              <section class="portfolio-position-section">
                <h2>Finalized</h2>
                ${n.length?n.map(It).join(""):'<div class="portfolio-empty compact">No finalized positions yet.</div>'}
              </section>
            `:'<div class="portfolio-empty">Connect your wallet to see open and finalized market positions.</div>'}
    </section>
  `},g=()=>{if(Ht.forEach(e=>{let a=e.dataset.bottomNav;e.classList.toggle("active",a==="saved"?t.showSaved:a===t.activeSurface&&!t.showSaved)}),t.activeSurface==="markets"){ca();return}if(t.activeSurface==="portfolio"){W();return}if(t.activeSurface==="leaderboard"){ua();return}pa(),Kt(),he(),Sr(),F&&(F.value=t.activeArchiveDate??"")};Xe.textContent=qt();te?.addEventListener("click",e=>{let r=e.target.closest("[data-category]");r&&(t.activeCategory=r.dataset.category,window.history.pushState({},"","#feed"),Y(),g(),Ee(),se(t.activeCategory))});k?.addEventListener("input",e=>{let a=e.target;if(a.id!=="newsSearchInput")return;let r=a.selectionStart??a.value.length,o=a.selectionEnd??a.value.length;t.newsSearchQuery=a.value,he();let n=k?.querySelector("#newsSearchInput");n&&(n.focus(),n.setSelectionRange(r,o))});Ue?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="markets",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,window.history.pushState({},"","#markets"),Y(),g()});Le?.addEventListener("click",()=>{t.activeSurface="feed",t.showSaved=!1,window.history.pushState({},"","#feed"),Y(),g(),Ee(),se(t.activeCategory)});Pe?.addEventListener("click",()=>{t.feedScrollY=window.scrollY,t.activeSurface="portfolio",t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=!1,window.history.pushState({},"","#portfolio"),Y(),g()});Q?.addEventListener("click",()=>{t.walletAddress?(window.location.hash="#portfolio",Ie()):qe()});document.addEventListener("click",e=>{let a=e.target,r=a.closest(".copy-address-btn");if(r){let i=r.getAttribute("data-address");i&&navigator.clipboard.writeText(i).then(()=>{v("Wallet address copied!")})}let o=a.closest("[data-claim-market]");if(o){let i=o.getAttribute("data-claim-market");i&&Mr(i);return}if(a.closest("[data-open-referrals]")){t.referralPanelOpen=!t.referralPanelOpen,!t.referralData&&!t.loadingReferralData&&Ae(),W();return}if(a.closest("[data-close-referrals]")){t.referralPanelOpen=!1,W();return}if(a.closest("[data-refresh-referrals]")){t.referralError=null,Ae(),W();return}let n=a.closest("[data-copy-referral-code]");if(n){let i=n.getAttribute("data-copy-referral-code")||"";i&&navigator.clipboard.writeText(i).then(()=>v("Invite code copied"));return}let s=a.closest("[data-copy-referral-link]");if(s){let i=s.getAttribute("data-copy-referral-link")||"";i&&navigator.clipboard.writeText(i).then(()=>v("Invite link copied"));return}a.closest("[data-connect-wallet]")&&(t.walletAddress?Dt():qe())});Ht.forEach(e=>{e.addEventListener("click",()=>{let a=e.dataset.bottomNav;t.selectedMarketId=null,t.selectedStoryId=null,t.selectedThreadUrl=null,t.showSaved=a==="saved",a==="markets"?(t.activeSurface="markets",window.history.pushState({},"","#markets")):a==="portfolio"?(t.activeSurface="portfolio",window.history.pushState({},"","#portfolio")):a==="leaderboard"?(t.activeSurface="leaderboard",window.history.pushState({},"","#leaderboard")):(t.activeSurface="feed",window.history.pushState({},"","#feed"),Ee(),se(t.activeCategory),a==="saved"&&(er(),at(),Te())),Y(),g()})});F?.addEventListener("change",()=>{t.activeArchiveDate=F.value||null,window.history.pushState({},"","#feed"),Y(),g(),se(t.activeCategory)});Ca?.addEventListener("click",()=>{t.activeArchiveDate=null,F&&(F.value=""),window.history.pushState({},"","#feed"),Y(),g(),se(t.activeCategory)});k?.addEventListener("click",async e=>{let a=e.target;if(a.closest("#editUsernameBtn")){let h=k?.querySelector(".username-display-row"),l=k?.querySelector("#usernameEditForm");if(h&&l){h.style.display="none",l.style.display="flex";let c=l.querySelector("#usernameInput");c&&c.focus()}return}if(a.closest("#cancelUsernameBtn")){let h=k?.querySelector(".username-display-row"),l=k?.querySelector("#usernameEditForm");h&&l&&(h.style.display="flex",l.style.display="none");return}let n=a.closest("#saveUsernameBtn");if(n){let l=k?.querySelector("#usernameEditForm")?.querySelector("#usernameInput");if(l){let c=l.value.trim().slice(0,15),b=n,x=b.textContent||"Save";b.disabled=!0,b.textContent="Saving...",Xa(c),t.profileNotice=null;try{t.walletAddress&&await ie(!1),t.profileNotice={type:"success",message:"Username saved to your shared leaderboard profile."},v("Username updated"),W()}catch(w){let $=w instanceof Error?w.message:"Username save failed";t.profileNotice={type:"error",message:$},v($),b.disabled=!1,b.textContent=x,W()}}return}let s=a.closest("[data-timeframe]");if(s){let h=s.dataset.timeframe;t.activeMarketTimeframe=h,ca();return}let i=a.closest("[data-market-id]");if(i){t.selectedMarketId=i.dataset.marketId??null,C("market_view"),window.history.pushState({},"",`#market-${t.selectedMarketId}`),g(),window.scrollTo({top:0,behavior:"smooth"});return}let d=a.closest("[data-thread-story-id]"),p=a.closest("[data-export-id]"),f=a.closest("[data-export-action]"),m=a.closest("[data-story-id]");if(d){e.stopPropagation();let h=t.stories.find(l=>l.id===Number(d.dataset.threadStoryId));h&&qa(h);return}let u=a.closest(".mobile-bookmark-btn, .bookmark-button");if(u){e.stopPropagation();let h=u.dataset.bookmarkUrl||"",l=t.stories.find(c=>c.sourceUrl===h);if(!l)return;l.saved=!l.saved,l.saved?ee.add(h):ee.delete(h),Pa(),v(l.saved?"Saved to your list":"Removed from saved"),he();return}if(f){e.stopPropagation(),yr(Number(f.dataset.exportStoryId),f.dataset.exportAction);return}if(p){e.stopPropagation();let h=Number(p.dataset.exportId);t.activeShareStoryId=t.activeShareStoryId===h?null:h,he();return}m&&(a.closest("a")||Gt(Number(m.dataset.storyId),!0))});k?.addEventListener("keydown",e=>{let r=e.target.closest("[data-story-id]");!r||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),Gt(Number(r.dataset.storyId)))});T?.addEventListener("click",e=>{let a=e.target,r=a.closest("[data-unlock-briefing]");if(r){let m=t.stories.find(u=>u.id===Number(r.dataset.unlockBriefing));m&&et(m);return}let o=a.closest("[data-unlock-briefing-url]");if(o){let m=decodeURIComponent(o.dataset.unlockBriefingUrl||""),u=Ha(m);u&&(re(u)?ze(u):et(u));return}if(a.closest("[data-back-markets]")){t.selectedMarketId=null,t.tradeDrawerOpen=!1,window.history.pushState({},"","#markets"),g();return}if(a.closest("#openTradeDrawerBtn")){let m=E.find(l=>l.id===t.selectedMarketId);if(m){if(We(m,t.marketSnapshots[m.id])){v("This market is resolved and can no longer be traded.");return}if(Yt(m,t.marketSnapshots[m.id])){v("Trading is locked 20 minutes before kickoff.");return}}t.tradeDrawerOpen=!0,C("trade_drawer_open");let u=T.querySelector("#tradeDrawer"),h=T.querySelector("#tradeDrawerBackdrop");u?.classList.add("open"),h?.classList.add("open");return}if(a.closest("#closeTradeDrawerBtn")||a.closest("#tradeDrawerBackdrop")){t.tradeDrawerOpen=!1;let m=T.querySelector("#tradeDrawer"),u=T.querySelector("#tradeDrawerBackdrop");m?.classList.remove("open"),u?.classList.remove("open");return}if(a.closest("#shareWhatsAppBtn")){let m=E.find(u=>u.id===t.selectedMarketId);if(m){let u=$r(m),h=`https://api.whatsapp.com/send?text=${encodeURIComponent(u)}`;window.open(h,"_blank")}return}let n=a.closest("[data-market-trade]");if(n&&t.selectedMarketId){let m=n.dataset.marketTrade;dr(t.selectedMarketId,m);return}let s=a.closest("[data-market-option-trade]");if(s&&t.selectedMarketId){let m=s.dataset.marketOptionTrade||t.marketTradeOptionId||"";kr(t.selectedMarketId,m);return}let i=a.closest("[data-market-option-id]");if(i){if(i.disabled||i.classList.contains("disabled"))return;t.marketTradeOptionId=i.dataset.marketOptionId||null,g();return}let d=a.closest("[data-market-trade-side]");if(d){if(d.disabled||d.classList.contains("disabled"))return;let m=E.find(l=>l.id===t.selectedMarketId),u=m?t.marketPositions[m.id]:void 0,h=d.dataset.marketTradeSide;if(!Z(t.marketOrderMode,h,u))return;t.marketTradeSide=h,g();return}let p=a.closest("[data-market-order-mode]");if(p){t.marketOrderMode=p.dataset.marketOrderMode;let m=E.find(h=>h.id===t.selectedMarketId),u=m?t.marketPositions[m.id]:void 0;t.marketTradeSide=dt(t.marketOrderMode,t.marketTradeSide,u),t.marketTradeAmount=Be(Number(t.marketTradeAmount)||0,t.marketOrderMode,t.marketTradeSide,u),g();return}a.closest("[data-back-to-feed]")&&za()});T?.addEventListener("input",e=>{let a=e.target;if(!a.matches("[data-market-amount]"))return;let r=E.find(p=>p.id===t.selectedMarketId),o=r?t.marketSnapshots[r.id]:void 0,n=r?t.marketPositions[r.id]:void 0,s=Number(a.value);t.marketTradeAmount=Number.isFinite(s)?s:0;let i=r&&oe(r)?t.marketTradeAmount:ta(o,t.marketTradeSide,t.marketTradeAmount,t.marketOrderMode,n),d=T.querySelector(".market-inline-payout strong");d&&(d.textContent=`$${O(i)}`)});T?.addEventListener("focusin",e=>{e.target.matches("[data-market-amount]")&&document.body.classList.add("market-amount-focused")});T?.addEventListener("focusout",e=>{let a=e.target;if(a.matches("[data-market-amount]")){let r=E.find(n=>n.id===t.selectedMarketId),o=r?t.marketPositions[r.id]:void 0;t.marketTradeAmount=Be(Number(a.value)||0,t.marketOrderMode,t.marketTradeSide,o),a.value=String(t.marketTradeAmount),window.setTimeout(()=>document.body.classList.remove("market-amount-focused"),120)}});window.addEventListener("popstate",Ie);window.addEventListener("hashchange",Ie);window.addEventListener("focus",async()=>{if(t.walletAddress){let e=t.walletBalance,a=await X(t.walletAddress);t.walletBalance=a,B(),(!e||parseFloat(e)===0)&&parseFloat(a)>0&&(console.log("[X402] Balance changed from 0 to positive. Triggering Gateway warmup..."),Sa())}});Ge?.addEventListener("click",()=>{if(!Je||!Ge)return;let e=!Je.hidden;Je.hidden=e,Ge.setAttribute("aria-expanded",String(!e))});document.addEventListener("click",e=>{let a=e.target;!a.closest(".share-control")&&t.activeShareStoryId!==null&&(t.activeShareStoryId=null,he());let r=a.closest("[data-menu-action]");if(!r)return;let o={today:"Showing today's brief",saved:`${t.stories.filter(n=>n.saved).length} saved stories`,archive:t.archiveDates.length>0?"Choose a saved day from the archive selector":"No saved days yet"};A&&(A.textContent=o[r.dataset.menuAction??"today"]),r.dataset.menuAction==="today"&&(t.showSaved=!1,t.activeArchiveDate=null,F&&(F.value=""),Y(),Ee(),se(t.activeCategory)),r.dataset.menuAction==="saved"&&(pa(),at(),Te(),t.showSaved=!0,document.querySelector("#archiveControls")?.classList.remove("mobile-open"),Y(),g())});var Lr=async()=>{try{let e=await fetch(I("/api/summary/unlock-config"));e.ok&&(t.unlockConfig=await e.json(),g())}catch(e){console.error("Failed to prefetch unlock config:",e)}};g();B();Lr();La().then(()=>{ir(),g(),B(),window.setTimeout(Ir,1200),Ya()});var Pr=document.querySelector("#mobileArchiveCard"),fe=document.querySelector("#archiveControls");Pr?.addEventListener("click",()=>{if(!fe)return;fe.classList.toggle("mobile-open")&&setTimeout(()=>fe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Cr=document.querySelector("#archivePill");Cr?.addEventListener("click",e=>{if(e.stopPropagation(),!fe)return;fe.classList.toggle("mobile-open")&&setTimeout(()=>fe.scrollIntoView({behavior:"smooth",block:"center"}),50)});var Ne=!1,Et=!1,Ir=()=>{Et||(Et=!0,(async()=>{let e=await _e();if(Ne=!!e,e){t.walletConnecting=!0,B();try{let a=await ka();Ne=!1,t.walletConnecting=!1,a?(t.walletAddress=await _e(),t.walletAddress&&(me(),t.walletBalance=await X(t.walletAddress),await z()),B(),t.activeSurface==="portfolio"&&g()):(t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),v("Session expired. Please sign in again."),B(),g())}catch(a){console.warn(a),Ne=!1,t.walletConnecting=!1,t.walletAddress=null,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),v("Session expired. Please sign in again."),B(),g()}}await wa(a=>{Ne||(t.walletAddress=a,t.walletBalance=null,t.referralData=null,t.referralError=null,t.referralPanelOpen=!1,me(),a&&ie(!1).catch(r=>console.error("Failed to report leaderboard entry:",r)),t.marketPositions={},t.hasLoadedPortfolioPositions=!1,B(),a?(Ae(),X(a).then(r=>{t.walletBalance=r,B(),t.activeSurface==="portfolio"&&g()}),z()):t.activeSurface==="portfolio"&&g())})})())};C("app_open");document.addEventListener("click",e=>{let r=e.target.closest("a, button");if(r){let o=r.className||"",n=typeof o=="string"?o:r.getAttribute("class")||"",s=r.getAttribute("href")||"";!(r.hasAttribute("data-unlock-briefing")||r.hasAttribute("data-unlock-briefing-url")||r.classList.contains("summary-btn")||r.textContent?.trim()==="AI briefing"||r.textContent?.trim().includes("Unlock via"))&&(n.includes("source-button")||n.includes("source-btn")||n.includes("source-link")||r.textContent?.trim()==="Open source")&&!n.includes("disabled")&&s!=="#"&&C("open_source")}},!0);
