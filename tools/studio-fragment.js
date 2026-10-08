// Embedded into each game's existing closure by tools/build-studio.py.
const studies = [
  ['상성을 읽는 첫 수',0,'상성',1,[[-250,0,0],[130,-60,1],[-30,95,2,false,true],[250,60,2,false,true]],'묵으로 찌를 얻으세요. 붉은 테두리 빠에 닿으면 묵을 잃습니다.','묵은 무엇을 이기고, 무엇에게 질까요?','오른쪽 위 찌를 향해 곧게 쏘세요. 빗맞으면 묵이 빠 함정 쪽으로 흘러갈 수 있습니다.','묵은 찌를 이기고 빠에게 집니다. 함정이 위험한 것은 그 함정에게 지는 공뿐입니다.'],
  ['이어지는 연쇄',0,'연쇄',1,[[-270,50,0],[-90,20,1],[120,-40,2],[-40,130,2,false,true],[290,-40,1,false,true]],'한 수로 찌와 빠를 모두 얻으세요.','묵은 빠를 이길 수 없습니다. 빠는 누가 잡아야 할까요?','찌의 왼쪽 아래를 맞혀 찌가 오른쪽 위의 빠로 굴러가게 하세요.','얻은 공은 곧바로 내 편의 공격수가 됩니다. 공은 맞은 면의 반대쪽으로 굴러갑니다.'],
  ['순서를 바꾸는 수',0,'순서',1,[[-280,20,2],[-80,30,0],[140,-30,1]],'빠 하나로 묵과 찌를 모두 얻으세요.','빠가 찌에 닿으면 어떻게 될까요? 찌를 이길 공은 무엇일까요?','묵의 왼쪽 아래를 맞혀 묵이 찌 쪽으로 가게 하세요. 빠는 찌에 닿지 않아야 합니다.','직접 이길 수 없는 공은 이길 수 있는 공에게 맡깁니다. 빠 → 묵 → 찌의 순서가 답입니다.'],
  ['쿠션으로 돌아가기',1,'쿠션',1,[[-260,0,1],[220,20,2],[340,125,0],[0,-80,0,false,true],[0,0,0,false,true],[0,80,0,false,true]],'묵 함정 벽 너머의 빠와 묵을 한 수로 얻으세요.','찌는 묵 함정을 지날 수 없습니다. 벽을 돌아갈 길은 어디일까요?','위쪽 쿠션을 한 번 맞고 내려와 빠를 맞히세요. 얻은 빠가 그대로 묵까지 이어집니다.','막힌 길은 쿠션으로 돌아갑니다. 쿠션에 들어간 각도만큼 반대로 튀어 나옵니다.'],
  ['두 갈래',1,'갈래',1,[[-310,0,0],[-32,-28,1],[96,-156,2],[81,141,1],[120,0,2,false,true]],'한 수로 찌 두 개와 빠를 모두 얻으세요.','비스듬히 맞은 두 공은 어느 쪽으로 갈라질까요?','오른쪽으로 거의 수평하게 쏘아 첫 찌의 아래쪽을 맞히세요. 찌는 위의 빠로, 묵은 아래의 찌로 갈라집니다.','비스듬히 부딪힌 두 공은 거의 직각으로 갈라집니다. 한 번의 충돌로 두 갈래 공격을 만들 수 있습니다.'],
  ['자리를 잡는 수',1,'수순',2,[[-300,0,1],[-120,0,2],[260,0,0],[80,0,1,false,true],[90,-150,1,false,true],[90,150,1,false,true]],'두 수 안에 빠와 묵을 모두 얻으세요.','묵은 누가 잡을 수 있을까요? 그 공이 지금 자리에서 묵을 볼 수 있나요?','첫 수로 빠의 위쪽을 비스듬히 맞혀 빠를 가운데 찌 함정 아래쪽으로 비켜 세우세요. 둘째 수에 그 빠를 골라 묵을 노립니다.','첫 수는 다음 수를 위한 자리 잡기입니다. 공을 얻는 것만큼 그 공이 어디에 멈추는지가 중요합니다.'],
  ['꺾이는 연쇄',2,'연쇄',1,[[-340,120,0],[-177,82,1],[-16,8,2],[174,-8,0],[-43,78,2,false,true],[66,-58,0,false,true],[283,-18,1,false,true]],'한 수로 찌, 빠, 묵을 차례로 얻으세요.','찌가 빠를, 빠가 묵을 향하려면 각각 어느 면을 맞아야 할까요?','묵으로 찌의 아래쪽을 맞혀 찌를 오른쪽 위로 보내세요. 그다음은 찌 → 빠 → 묵이 이어집니다.','연쇄가 꺾일 때마다 처음의 작은 오차가 커집니다. 첫 충돌의 각이 마지막 공의 방향까지 정합니다.'],
  ['함정 벽 넘기',2,'쿠션',1,[[-280,-90,2],[60,130,0],[180,90,1],[-150,0,1,false,true],[-95,40,1,false,true],[-40,80,1,false,true]],'찌 함정 벽 너머의 묵과 찌를 한 수로 얻으세요.','빠는 찌 함정을 지날 수 없습니다. 벽 너머 묵에 닿는 길은 어디일까요?','위쪽 쿠션을 맞고 벽을 넘어 내려가 묵의 왼쪽 위를 맞히세요. 얻은 묵이 찌로 이어집니다.','쿠션 하나로 벽을 넘고, 얻은 묵이 마지막 찌를 마무리합니다. 경로가 길수록 처음 각도가 정확해야 합니다.'],
  ['힘 조절',2,'힘 조절',2,[[-330,40,1],[-180,40,2],[40,-50,0],[265,-132,1],[60,40,1,false,true],[-100,-25,1,false,true],[250,-60,2,false,true]],'두 수 안에 빠, 묵, 찌를 모두 얻으세요.','빠를 세게 치면 빠는 어디까지 굴러갈까요?','첫 수는 약하게 빠를 정면으로 맞혀, 빠가 찌 함정 앞에서 멈추게 하세요. 둘째 수는 그 빠로 묵을 맞혀 묵이 위 쿠션을 타고 찌에 닿게 합니다.','얻은 공도 함정에 닿으면 다시 잃습니다. 방향만큼 힘을 읽는 것도 수읽기입니다.'],
  ['사각지대',3,'쿠션',1,[[-300,150,0],[340,-150,1],[230,-140,2,false,true],[340,-60,2,false,true],[275,-85,2,false,true]],'빠 함정에 둘러싸인 구석의 찌를 얻으세요.','세 함정이 막지 않은 방향은 어디일까요?','찌의 위쪽은 열려 있습니다. 위쪽 쿠션을 찌 바로 왼쪽에 맞혀 위에서 내려오게 하세요.','직접 갈 수 없는 자리는 쿠션이 열어 줍니다. 안내선 없이 반사각을 그려 보는 것이 이 단계의 핵심입니다.'],
  ['양갈래 연쇄',3,'갈래',1,[[-340,60,0],[-157,37,1],[-13,-51,2],[147,-109,0],[-115,166,1],[-20,60,2,false,true],[72,-124,0,false,true],[250,-147,1,false,true]],'한 수로 네 표적을 모두 얻으세요.','한 번의 충돌로 두 갈래 연쇄를 동시에 만들 수 있을까요?','묵을 수평으로 쏘아 첫 찌의 아래쪽을 맞히세요. 찌는 위로 빠 → 묵을 잇고, 묵은 아래의 찌로 꺾입니다.','갈라진 두 공이 각자 연쇄를 이어 갑니다. 한 수에 네 공을 읽었다면 실전의 묘수도 보입니다.'],
  ['마지막 묘수',3,'종합',2,[[-330,-40,0],[-168,4,1],[27,126,2],[340,-150,0],[230,-140,1,false,true],[340,-60,1,false,true],[275,-85,1,false,true],[-25,14,2,false,true],[110,70,0,false,true]],'두 수로 찌와 빠, 그리고 구석의 묵까지 얻으세요.','구석의 묵을 잡을 수 있는 공은 무엇이고, 그 공은 어떻게 얻을까요?','첫 수로 묵 → 찌 → 빠를 이어 빠를 얻으세요. 둘째 수는 그 빠로 오른쪽 쿠션을 맞혀 구석 묵의 아래쪽으로 파고듭니다.','상성의 고리를 따라 공격수를 바꾸고, 마지막은 쿠션으로 막힌 구석을 엽니다. 지금까지의 모든 수가 한 판에 모였습니다.']
];
MISSIONS.splice(0, MISSIONS.length, ...studies.map(([title,tier,tag,maxShots,balls,desc,question,hint,review]) => ({title,tier,tag,maxShots,balls,desc,question,hint,review,map:'rect'})));
let studyHints = 0, studyUndos = 0, studyHistory = [];
// The new edition keeps separate progress; old mission records remain intact.
missionsCleared = function(){ return MISSIONS.filter((_,i)=>getMissionStar(i)>0).length; };
getMissionStar = function(i){try{return Math.min(3,Math.max(0,Number(JSON.parse(localStorage.getItem('rps_studies_v3')||'{}')[i])||0));}catch{return 0;}};
saveMissionStar = function(i,s){try{const p=JSON.parse(localStorage.getItem('rps_studies_v3')||'{}');p[i]=Math.max(getMissionStar(i),s);localStorage.setItem('rps_studies_v3',JSON.stringify(p));}catch{}};
getTotalStars = () => MISSIONS.reduce((s,_,i)=>s+getMissionStar(i),0);
calcMissionStars = () => studyHints >= 2 ? 1 : studyHints || studyUndos ? 2 : 3;
const studioMain = document.getElementById('menu-main');
studioMain.insertAdjacentHTML('afterbegin','<div class="studio-intro"><strong>작은 판 위에서, 최선의 한 수.</strong>상성을 읽고, 공을 연결하고, 다음 수를 준비하세요.</div><button class="big-btn" id="open-studies">묘수풀이 시작하기 →</button>');
document.getElementById('open-studies').onclick=()=>{enterSingle();setSingleTab('mission');};
document.querySelector('.sub').textContent='묵 · 찌 · 빠의 상성으로 풀어가는 한 판';
document.querySelector('#btn-single small').textContent='난이도를 골라 컴퓨터와 연습';
document.querySelector('#btn-single b').textContent='자유 대전';
document.querySelector('[data-tab="mission"]').textContent='묘수 문제집';
document.querySelectorAll('#tier-tabs [data-tier]').forEach((b,i)=>b.textContent=['전체','기초 · 상성','응용 · 쿠션','수순 · 정밀','묘수 · 실전'][i]);
document.getElementById('mission-panel').insertAdjacentHTML('afterbegin','<div class="studio-intro"><strong>한 문제, 하나의 발견</strong>파란 공은 내 공 · 회색은 목표 · 붉은 테두리는 함정<br>★★★ 스스로 해결 · ★★ 힌트 또는 되돌리기 · ★ 수순 힌트 사용<br>뒤로 갈수록 어려워지고 조준 안내선이 짧아집니다. 묘수 단계는 방향선만 보입니다.<br>모든 문제를 자유롭게 선택할 수 있습니다.</div>');
document.getElementById('turn-msg').insertAdjacentHTML('afterend','<div id="study-status" role="status"></div>');
document.getElementById('mission-quick-bar').insertAdjacentHTML('afterbegin','<button class="mquick-btn" id="study-undo" type="button">↶ <span class="mq-txt">한 수 되돌리기</span></button>');
function studyPreview(m){return `<svg class="position-preview" viewBox="-460 -240 920 480" aria-hidden="true"><rect x="-440" y="-220" width="880" height="440" rx="56" fill="#173a2a" stroke="#759365" stroke-width="6"/>${m.balls.map((b,i)=>`<circle cx="${b[0]}" cy="${b[1]}" r="27" fill="${i===0?'#4bacc9':'#b3bdb0'}" stroke="${b[4]?'#ef8f7e':'#e3eed8'}" stroke-width="5"/><text x="${b[0]}" y="${b[1]+10}" text-anchor="middle" font-size="28" fill="#101b18">${['묵','찌','빠'][b[2]]}</text>`).join('')}</svg>`;}
renderMissions = function(){
  document.getElementById('mp-progress-txt').textContent=`해결 ${missionsCleared()} / ${MISSIONS.length}`;
  document.getElementById('mp-total-stars').textContent=`★ ${getTotalStars()} / ${MISSIONS.length*3}`;
  document.getElementById('mp-bar-fill').style.width=`${missionsCleared()/MISSIONS.length*100}%`;
  document.querySelectorAll('#tier-tabs .tier-tab').forEach(b=>b.classList.toggle('sel',String(activeTier)===b.dataset.tier));
  const grid=document.getElementById('mission-grid');
  grid.innerHTML=MISSIONS.map((m,i)=>activeTier!=='all'&&m.tier!==activeTier?'':`<button class="mission-btn" data-m="${i}"><div class="m-top"><span class="m-num">문제 ${String(i+1).padStart(2,'0')}</span><span class="m-tag">${m.tag} · ${m.maxShots}수</span></div>${studyPreview(m)}<div class="m-title">${m.title}</div><div class="m-desc">${m.desc}</div><div class="m-bottom"><span class="m-stars">${starString(getMissionStar(i))}</span><span>${getMissionStar(i)?'다시 풀기 ↗':'풀어보기 →'}</span></div></button>`).join('');
  grid.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>startMission(+b.dataset.m));
};
function studyStatus(){if(!solo||currentMission<0)return;const m=MISSIONS[currentMission];document.getElementById('study-status').textContent=`${m.desc} · 남은 수 ${Math.max(0,m.maxShots-shotCount)} · 남은 목표 ${missionRemainingTargets()}`;document.getElementById('study-undo').disabled=!studyHistory.length||phase==='moving';}
const studioStart=startMission;
startMission=function(i){if(!MISSIONS[i])return;studyHints=0;studyUndos=0;studyHistory=[];hideMissionHint();document.getElementById('end').classList.add('hidden');studioStart(i);studyStatus();};
window.startMission=startMission;
const studioAimConfig=getSoloAimConfig;
// Later tiers show less of the predicted path: full path → shorter → contact only → direction line only.
const studioGuides=[{maxLen:700,maxBounces:1,showGuide:true,directLen:180,showArrows:false},{maxLen:360,maxBounces:1,showGuide:true,directLen:140,showArrows:false},{maxLen:140,maxBounces:0,showGuide:true,directLen:120,showArrows:false},{maxLen:0,maxBounces:0,showGuide:false,directLen:120,showArrows:false}];
getSoloAimConfig=function(i){return solo?studioGuides[(MISSIONS[i]&&MISSIONS[i].tier)||0]:studioAimConfig(i);};
const studioHud=updateHud;
updateHud=function(){studioHud();studyStatus();};
cv.addEventListener('pointerup',()=>{if(solo&&phase==='aim'&&dragging&&selected&&Math.hypot(selected.x-dragX,selected.y-dragY)>=14){const snapshot={balls:balls.map(b=>({...b})),shotCount};queueMicrotask(()=>{if(phase==='moving'){studyHistory.push(snapshot);studyStatus();}});}},true);
document.getElementById('study-undo').onclick=()=>{if(!solo||phase==='moving'||!studyHistory.length||(phase==='over'&&document.getElementById('end').classList.contains('hidden')))return;const s=studyHistory.pop();balls=s.balls.map(b=>({...b}));shotCount=s.shotCount;studyUndos++;pairCool.clear();particles=[];selected=null;dragging=false;phase='aim';document.getElementById('end').classList.add('hidden');beginTurn();updateHud();};
showMissionHint=function(){if(!solo||currentMission<0)return;const m=MISSIONS[currentMission];studyHints=Math.max(studyHints,1);document.getElementById('hint-stage-name').textContent=m.title;document.getElementById('hint-stage-tag').textContent=studyHints>1?'2단계 · 수순':'1단계 · 생각의 실마리';document.getElementById('hint-stage-body').textContent=studyHints>1?m.question+'\n\n'+m.hint:m.question;document.getElementById('hint-modal').classList.remove('hidden');document.getElementById('study-more-hint').hidden=studyHints>1;};
window.showMissionHint=showMissionHint;
// Existing listeners captured the old function, so replace their handler nodes.
const oldHint=document.getElementById('mquick-hint'), newHint=oldHint.cloneNode(true);oldHint.replaceWith(newHint);newHint.onclick=showMissionHint;
document.getElementById('hint-close-btn').insertAdjacentHTML('beforebegin','<button class="ghost-btn" id="study-more-hint">수순 힌트 보기 · 별 1개로 기록</button>');
document.getElementById('study-more-hint').onclick=()=>{studyHints=2;showMissionHint();};
const studioEnd=setupMissionEndButtons;
setupMissionEndButtons=function(won,last){studioEnd(won,last);document.querySelectorAll('.study-review').forEach(e=>e.remove());document.getElementById('end-detail').insertAdjacentHTML('afterend',`<div class="study-review"><b>${won?'이 수의 의미':'다시 읽어볼 자리'}</b><br>${won?MISSIONS[currentMission].review:MISSIONS[currentMission].question}</div>`);if(won)document.getElementById('end-detail').textContent=`${shotCount}수로 해결 · ${starString(calcMissionStars())} · ${studyHints?'힌트 사용':'수순 힌트 없이 해결'}${studyUndos?' · 되돌리기 사용':''}`;};
document.querySelectorAll('.tab-btn,.mode-btn,.map-btn,.net-btn').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}});});
const studioResult=setupMissionEndButtons;
setupMissionEndButtons=function(won,last){studioResult(won,last);if(won){document.getElementById('end-title').textContent=missionsCleared()===MISSIONS.length?'모든 묘수풀이 해결!':`${currentMission+1}번 문제 해결`;if(last)document.getElementById('restart-btn').textContent='문제집으로';}};
