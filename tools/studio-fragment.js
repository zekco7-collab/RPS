// Embedded into each game's existing closure by tools/build-studio.py.
const studies = [
  ['상성을 읽는 첫 수',0,'상성 읽기',1,[[-200,0,0],[40,0,1]],'묵으로 찌 하나를 내 편으로 만드세요.','묵이 이기는 상대를 찾아보세요.','오른쪽 찌를 향해 곧게 쏘세요.','묵은 찌를 이깁니다. 방향을 먼저 정하고 필요한 만큼만 힘을 주세요.'],
  ['보의 쓰임',0,'상성 읽기',1,[[-180,60,2],[60,-40,0]],'보로 묵을 차지하세요.','보가 이기는 것은 무엇일까요?','오른쪽 위 묵으로 조준하세요.','보는 묵을 이깁니다. 공의 모양을 읽으면 공격 방향이 보입니다.'],
  ['이어지는 한 수',1,'연결',1,[[-220,0,0],[-40,0,1],[120,0,2]],'한 수 안에 두 표적을 모두 내 편으로 만드세요.','내 공이 직접 모든 표적을 이겨야 할까요?','묵 → 찌 → 빠 순으로 힘이 전달되게 직선으로 쏘세요.','먼저 얻은 찌가 빠를 얻습니다. 소유권은 바뀌어도 공의 상성은 유지됩니다.'],
  ['한 바퀴의 상성',1,'연결',1,[[-240,0,0],[-90,0,1],[40,0,2],[170,0,0]],'한 수로 세 표적을 연결하세요.','각 공이 바로 다음 공을 이길 수 있습니다.','오른쪽으로 충분히 당겨 묵 → 찌 → 빠 → 묵을 연결하세요.','첫 공의 힘이 이어지며 세 상성이 순환합니다. 끝까지 닿을 힘이 필요합니다.'],
  ['얻은 공이 다음 수',2,'수순',2,[[-220,-70,0],[-40,-70,1],[160,80,2]],'두 수 안에 찌와 빠를 모두 얻으세요.','첫 수 뒤에는 쏠 수 있는 공이 늘어납니다.','찌를 얻은 뒤, 두 번째 수는 그 찌로 빠를 노리세요.','첫 수는 다음 공격 수단을 만드는 수입니다. 얻은 찌를 선택해 빠를 공략할 수 있습니다.'],
  ['빠에서 시작하기',2,'수순',2,[[-220,70,2],[-40,70,0],[160,-80,1]],'두 수 안에 묵과 찌를 모두 얻으세요.','빠로 찌를 직접 치면 어떻게 될까요?','먼저 묵을 얻고, 얻은 묵으로 찌를 노리세요.','빠 → 묵 → 찌의 순서가 핵심입니다. 첫 수에서 다음 수에 쓸 공을 확보합니다.'],
  ['막힌 길의 바깥',3,'우회',2,[[-200,0,0],[0,0,2,false,true],[200,0,1]],'함정 빠를 피해 찌를 얻으세요. 두 수까지 가능합니다.','붉은 테두리의 빠는 목표가 아닌 함정입니다.','위나 아래 쿠션으로 우회하세요. 첫 수로 안전한 위치를 잡아도 됩니다.','직선의 짧은 길보다 상성상 안전한 길을 읽는 것이 중요합니다. 쿠션도 공격 경로입니다.'],
  ['좁은 틈의 판단',3,'우회',2,[[-220,0,0],[-20,65,2,false,true],[-20,-65,2,false,true],[180,0,1]],'두 함정 사이로 찌를 얻으세요.','공의 중심뿐 아니라 공의 두께도 보세요.','두 빠 사이 중앙의 수평 경로를 노리세요.','불필요하게 쿠션을 쓰지 않아도 됩니다. 열린 길과 막힌 길을 구별하는 것이 묘수의 출발점입니다.']
];
MISSIONS.splice(0, MISSIONS.length, ...studies.map(([title,tier,tag,maxShots,balls,desc,question,hint,review]) => ({title,tier,tag,maxShots,balls,desc,question,hint,review,map:'rect'})));
let studyHints = 0, studyUndos = 0, studyHistory = [];
// A new edition has separate progress; old mission records remain intact.
missionsCleared = function(){ return MISSIONS.filter((_,i)=>getMissionStar(i)>0).length; };
getMissionStar = function(i){try{return Math.min(3,Math.max(0,Number(JSON.parse(localStorage.getItem('rps_studies_v2')||'{}')[i])||0));}catch{return 0;}};
saveMissionStar = function(i,s){try{const p=JSON.parse(localStorage.getItem('rps_studies_v2')||'{}');p[i]=Math.max(getMissionStar(i),s);localStorage.setItem('rps_studies_v2',JSON.stringify(p));}catch{}};
getTotalStars = () => MISSIONS.reduce((s,_,i)=>s+getMissionStar(i),0);
calcMissionStars = () => studyHints >= 2 ? 1 : studyHints || studyUndos ? 2 : 3;
const studioMain = document.getElementById('menu-main');
studioMain.insertAdjacentHTML('afterbegin','<div class="studio-intro"><strong>작은 판 위에서, 최선의 한 수.</strong>상성을 읽고, 공을 연결하고, 다음 수를 준비하세요.</div><button class="big-btn" id="open-studies">묘수풀이 시작하기 →</button>');
document.getElementById('open-studies').onclick=()=>{enterSingle();setSingleTab('mission');};
document.querySelector('.sub').textContent='묵 · 찌 · 빠의 상성으로 풀어가는 한 판';
document.querySelector('#btn-single small').textContent='난이도를 골라 컴퓨터와 연습';
document.querySelector('#btn-single b').textContent='자유 대전';
document.querySelector('[data-tab="mission"]').textContent='묘수 문제집';
document.querySelectorAll('#tier-tabs [data-tier]').forEach((b,i)=>b.textContent=['전체','기초 · 상성','연결 · 연쇄','수순 · 두 수','응용 · 우회'][i]);
document.getElementById('mission-panel').insertAdjacentHTML('afterbegin','<div class="studio-intro"><strong>한 문제, 하나의 발견</strong>파란 공은 내 공 · 회색은 목표 · 붉은 테두리는 함정<br>★★★ 스스로 해결 · ★★ 힌트 또는 되돌리기 · ★ 수순 힌트 사용<br>모든 문제를 자유롭게 선택할 수 있습니다.</div>');
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
getSoloAimConfig=function(i){return solo?{maxLen:700,maxBounces:1,showGuide:true,directLen:180,showArrows:false}:studioAimConfig(i);};
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
