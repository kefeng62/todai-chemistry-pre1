const exams = {
  1: {
    name: '問題1（基礎化学）',
    answers: [2,2,1,3,4,0,5,4,5,3,0,8,4,1,1,0,0,9,9,5,1,0,0,3,7,1,1,2,2,3,1,1,1,1,0,4,3,2,4,9,3],
    labels: [
      ['ア',[1]],['イ',[2,3,4,5]],['ウ',[6,7,8]],['エ',[9,10]],['オ',[11]],
      ['カ',[12,13]],['キ',[14,15,16]],['ク',[17,18,19]],['ケ',[20]],['コ',[21,22,23]],
      ['サ',[24,25]],['シ',[26,27,28,29]],['ス',[30]],['セ',[31,32,33,34,35]],['ソ',[36,37]],
      ['タ',[38]],['チ',[39,40,41]]
    ],
    groups: [
      {q:[1],p:3},{q:[2,3,4,5],p:4},{q:[6,7,8],p:4},{q:[9,10],p:4},{q:[11],p:3},
      {q:[12],p:4},{q:[13],p:2},{q:[14,15,16],p:4},{q:[17,18,19],p:6},{q:[20],p:3},
      {q:[21],p:2},{q:[22],p:2},{q:[23],p:2},{q:[24,25],p:4},{q:[26,27,28,29],p:5},
      {q:[30],p:4},{q:[31],p:1},{q:[32],p:1},{q:[33],p:1},{q:[34],p:1},{q:[35],p:1},
      {q:[36,37],p:4},{q:[38],p:3},{q:[39,40,41],p:7}
    ],
    accepted: {
      17: [0,1],
      18: [9,0],
      19: [9,0]
    }
  },
  2: {
    name: '問題2（無機化学）',
    answers: [2,4,3,7,3,7,5,9,1,2,6,2,6,1,6,5,1,1,5,5,7,3,3,1,1,2,2,4,8,4,3,1,2,1,6,1,3,8,5,1,1,2],
    labels: [
      ['ア',[1,2,3,4]],['イ',[5]],['ウ',[6]],['エ',[7,8,9]],['オ',[10]],['カ',[11,12,13]],
      ['キ',[14,15,16]],['ク',[17]],['ケ',[18,19,20,21,22]],['コ',[23,24,25,26,27]],
      ['サ',[28,29,30,31,32,33,34]],['シ',[35]],['ス',[36]],['セ',[37,38,39,40,41,42]]
    ],
    groups: [
      {q:[1,2,3,4],p:4},{q:[5],p:3},{q:[6],p:3},{q:[7,8,9],p:3},{q:[10],p:3},
      {q:[11,12,13],p:5},{q:[14,15,16],p:6},{q:[17],p:3},{q:[18,19,20,21,22],p:10},
      {q:[23,24,25],p:3},{q:[26,27],p:3},{q:[28,29],p:5},{q:[30,31],p:2},{q:[32,33,34],p:3},
      {q:[35],p:4},{q:[36],p:4},{q:[37,38,39],p:4},{q:[40,41,42],p:7}
    ],
    accepted: {
      42: [2,3]
    }
  },
  3: {
    name: '問題3（有機化学）',
    answers: [5,3,4,4,6,4,2,1,1,3,1,1,3,3,2,3,6,5,3,2,2,3,8,1,0,4,5,1,3],
    labels: [
      ['ア',[1,2,3]],['イ',[4,5]],['ウ',[6]],['エ',[7]],['オ',[8]],['カ',[9]],
      ['キ',[10,11,12,13]],['ク',[14,15]],['ケ',[16]],['コ',[17]],['サ',[18]],['シ',[19,20]],
      ['ス',[21,22,23,24,25]],['セ',[26]],['ソ',[27]],['タ',[28,29]]
    ],
    // Problem 3 point values are based on the latest answer/explanation PDF.
    groups: [
      {q:[1,2,3],p:3},{q:[4],p:2},{q:[5],p:2},{q:[6],p:3},{q:[7],p:3},{q:[8],p:3},
      {q:[9],p:3},{q:[10],p:3},{q:[11],p:3},{q:[12],p:3},{q:[13],p:3},{q:[14],p:1},
      {q:[15],p:1},{q:[16],p:3},{q:[17],p:4},{q:[18],p:4},{q:[19],p:3},{q:[20],p:3},
      {q:[21],p:2},{q:[22],p:2},{q:[23],p:2},{q:[24],p:2},{q:[25],p:5},{q:[26],p:3},
      {q:[27],p:3},{q:[28],p:3},{q:[29],p:3}
    ]
  },
  4: {
    name: '問題4（物理化学）',
    answers: [3,2,1,1,5,8,3,1,3,5,1,5,9,3,1,8,8,7,7,5,5,6,8,1,0,1,3,2,1,2,3,1,2,9,8,1,5,5,5],
    labels: [
      ['ア',[1]],['イ',[2,3,4,5,6]],['ウ',[7]],['エ',[8,9,10]],['オ',[11,12,13]],
      ['カ',[14,15,16,17,18,19,20,21,22,23,24,25,26,27]],['キ',[28,29,30,31,32]],
      ['ク',[33,34,35,36,37]],['ケ',[38]]
    ],
    groups: [
      {q:[1],p:3},{q:[2],p:2},{q:[3],p:2},{q:[4,5,6],p:5},{q:[7],p:3},{q:[8,9,10],p:6},
      {q:[11,12,13],p:3},{q:[14,15,16],p:3},{q:[17,18],p:5},{q:[19,20],p:4},
      // Q22 accepts both 6 and 7, so 568 and 578 are both accepted for Q21-Q23.
      {q:[21,22,23],p:6},{q:[24,25,26,27],p:7},{q:[28],p:2},{q:[29],p:2},{q:[30],p:2},
      {q:[31],p:2},{q:[32],p:2},{q:[33],p:2},{q:[34,35],p:3},{q:[36,37],p:8},{q:[38],p:3}
    ],
    accepted: {
      22: [6,7],
      37: [5,6]
    }
  }
};

const STORAGE_KEY = 'chemistry_grandprix_mock_v2';
let currentExam = 1;

// Mobile/Safariのローカルファイル閲覧などでlocalStorageが使えない場合でも、
// 自己採点画面が止まらないように安全に保存・読み込みします。
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {submitted:false,answers:{}};
  }catch(e){
    return {submitted:false,answers:{}};
  }
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); }catch(e){}
}
let state = loadState();
const $ = id => document.getElementById(id);

function qId(exam, q){ return `e${exam}q${q}`; }

function acceptedAnswers(examId, q){
  const exam = exams[examId];
  return exam.accepted?.[q] ?? [exam.answers[q-1]];
}

function isCorrect(examId, q){
  const value = String(state.answers[qId(examId,q)] ?? '');
  return value !== '' && acceptedAnswers(examId,q).some(a => String(a) === value);
}

function renderTabs(){
  $('examTabs').innerHTML = Object.entries(exams).map(([id,e]) =>
    `<button class="tab ${Number(id)===currentExam?'active':''}" data-exam="${id}">${e.name}</button>`).join('');
  document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{
    currentExam=Number(b.dataset.exam);
    renderQuestions();
  }));
}

function renderQuestions(){
  renderTabs();
  const exam=exams[currentExam];
  let html='';
  exam.labels.forEach(([label, qs])=>{
    const rows = qs.map(q=>{
      const id=qId(currentExam,q), saved=state.answers[id] ?? '';
      const opts = ['','1','2','3','4','5','6','7','8','9','0']
        .map(v=>`<option value="${v}" ${String(saved)===v?'selected':''}>${v||'— 未入力 —'}</option>`).join('');
      const status = state.submitted ? (isCorrect(currentExam,q) ? '<span class="answer-status correct">○ 正解</span>' : (saved === '' ? '<span class="answer-status unanswered">— 未入力</span>' : '<span class="answer-status incorrect">× 不正解</span>')) : '<span class="answer-status"></span>';
      return `<div class="qrow"><label for="${id}">Q${q}</label><div class="answer-control"><select class="mark-select" id="${id}" data-q="${q}">${opts}</select>${status}</div></div>`;
    }).join('');
    html += `<div class="question-group"><div class="group-title"><h3>問 ${label} <span class="small">${qs.map(q=>'Q'+q).join('・')}</span></h3></div><div class="qgrid">${rows}</div></div>`;
  });
  $('questions').innerHTML=html;
  document.querySelectorAll('#questions select').forEach(s=>s.addEventListener('change',()=>{
    state.answers[s.id]=s.value;
    saveState();
    if(state.submitted){
      const row=s.closest('.qrow');
      const status=row.querySelector('.answer-status');
      const q=Number(s.dataset.q);
      status.className='answer-status '+(s.value===''?'unanswered':(isCorrect(currentExam,q)?'correct':'incorrect'));
      status.textContent=s.value===''?'— 未入力':(isCorrect(currentExam,q)?'○ 正解':'× 不正解');
    }
  }));
}

function calcExam(id){
  const e=exams[id]; let score=0;
  e.groups.forEach(g=>{
    if(g.q.every(q=>isCorrect(id,q))) score+=g.p;
  });
  return Math.min(score,75);
}

function total(){return [1,2,3,4].reduce((s,id)=>s+calcExam(id),0)}

function getJudgment(score){
  if(score>=250) return ['A','大賞も狙える実力です！'];
  if(score>=220) return ['B','合格者平均超えも狙えます！'];
  if(score>=180) return ['C','本戦出場も夢じゃない！'];
  if(score>=150) return ['D','これからの対策次第で本戦出場の可能性あり！'];
  return ['E','形式に慣れ、とるべき問題を見分けよう！'];
}

function updateXShare(){
  const scores = [1,2,3,4].map(id => calcExam(id));
  const t = scores.reduce((sum, score) => sum + score, 0);
  const siteUrl = window.location.href.split('#')[0];
  const shareText = `あなたの第一回化学グランプリ模試の結果は${scores[0]}・${scores[1]}・${scores[2]}・${scores[3]}で${t}点でした！\n${siteUrl}`;
  $('xShare').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText);
}

const SUPABASE_ENABLED = typeof window.supabaseClient !== 'undefined' && window.supabaseClient;
const VISITOR_KEY = 'chemistry_grandprix_visitor_id_v1';
function getVisitorId(){
  try{
    let id = localStorage.getItem(VISITOR_KEY);
    if(!id){ id = (crypto.randomUUID ? crypto.randomUUID() : 'v-' + Date.now() + '-' + Math.random().toString(36).slice(2)); localStorage.setItem(VISITOR_KEY,id); }
    return id;
  }catch(e){ return 'v-' + Date.now() + '-' + Math.random().toString(36).slice(2); }
}
function statsGrade(score){ return getJudgment(score)[0]; }
function statNumber(v){ return Number.isFinite(Number(v)) ? Number(v).toFixed(1).replace(/\.0$/,'') : '—'; }
function isEligibleStatsRow(r){
  // 問題1〜4の得点がすべて数値で、かつ1点以上の登録だけを統計対象にする。
  return [1,2,3,4].every(id => {
    const value = Number(r['exam'+id]);
    return Number.isFinite(value) && value > 0;
  });
}
function renderStatistics(rows){
  const eligibleRows = (rows || []).filter(isEligibleStatsRow);
  const examsStats = [1,2,3,4].map(id=>{
    const values=eligibleRows.map(r=>Number(r['exam'+id])).filter(Number.isFinite);
    return {name:exams[id].name, count:values.length, max:values.length?Math.max(...values):null, avg:values.length?values.reduce((a,b)=>a+b,0)/values.length:null};
  });
  const totals=eligibleRows.map(r=>Number(r.total_score)).filter(Number.isFinite);
  const grades=['A','B','C','D','E'].map(g=>({grade:g,count:eligibleRows.filter(r=>r.judgment===g).length}));
  const summary=`<div class="stats-summary"><div><strong>総合登録者数</strong><span>${totals.length}人</span></div><div><strong>総合最高点</strong><span>${totals.length?Math.max(...totals):'—'}点</span></div><div><strong>総合平均点</strong><span>${totals.length?statNumber(totals.reduce((a,b)=>a+b,0)/totals.length):'—'}点</span></div></div>`;
  const table=`<div class="stats-table-wrap"><table class="stats-table"><thead><tr><th>対象</th><th>登録者数</th><th>最高点</th><th>平均点</th></tr></thead><tbody>${examsStats.map(x=>`<tr><td>${x.name}</td><td>${x.count}人</td><td>${x.max===null?'—':x.max+'点'}</td><td>${x.avg===null?'—':statNumber(x.avg)+'点'}</td></tr>`).join('')}<tr><td><strong>総合得点</strong></td><td>${totals.length}人</td><td>${totals.length?Math.max(...totals)+'点':'—'}</td><td>${totals.length?statNumber(totals.reduce((a,b)=>a+b,0)/totals.length)+'点':'—'}</td></tr></tbody></table></div><h4>判定別人数</h4><div class="grade-stats">${grades.map(g=>`<span><strong>${g.grade}</strong> ${g.count}人</span>`).join('')}</div>`;
  $('statisticsContent').innerHTML=summary+table;
  $('statisticsMessage').textContent='匿名で登録された自己採点結果を集計しています。';
}
async function saveAndLoadStatistics(){
  if(!SUPABASE_ENABLED){ $('statisticsMessage').textContent='統計機能はSupabaseの設定後に利用できます。'; return; }
  const scores=[1,2,3,4].map(id=>calcExam(id));
  const totalScore=scores.reduce((a,b)=>a+b,0);
  const row={visitor_id:getVisitorId(),exam1:scores[0],exam2:scores[1],exam3:scores[2],exam4:scores[3],total_score:totalScore,judgment:statsGrade(totalScore)};
  const {error:upsertError}=await window.supabaseClient.from('exam_results').upsert(row,{onConflict:'visitor_id'});
  if(upsertError){ console.error(upsertError); $('statisticsMessage').textContent='統計の登録に失敗しました。Supabaseの設定とRLSを確認してください。'; return; }
  // いったん全対象行を取得し、JavaScript側で厳密に除外する。
  // これにより、問題1〜4のいずれかが0点の行は必ず統計対象外になる。
  const {data,error}=await window.supabaseClient
    .from('exam_results')
    .select('exam1,exam2,exam3,exam4,total_score,judgment');
  if(error){ console.error(error); $('statisticsMessage').textContent='統計の読み込みに失敗しました。'; return; }
  renderStatistics(data||[]);
}

function showResult(){
  const t=total();
  const [grade,message]=getJudgment(t);
  $('saveMessage').textContent='自己採点を登録しました。解答・解説のロックが解除されています。';
  $('result').classList.remove('hidden');
  $('totalScore').textContent=t;
  $('miniTotal').textContent=t;
  $('scoreRate').textContent=(t/3).toFixed(1)+'%';
  $('judgmentGrade').textContent=grade;
  $('judgmentMessage').textContent=message;
  $('breakdown').innerHTML=[1,2,3,4].map(id=>`<div class="breakdown-item"><strong>${calcExam(id)} / 75</strong><span>${exams[id].name}</span></div>`).join('');
  updateXShare();
  $('answerLink').classList.remove('locked');
  $('answerLink').textContent='🔓 解答・解説を見る';
  $('answerLink').href='pdfs/answer.pdf';
  $('unlockBadge').classList.remove('hidden');
  state.submitted=true;
  saveState();
  renderQuestions();
  saveAndLoadStatistics();
  $('result').scrollIntoView({behavior:'smooth',block:'start'});
}

$('submitBtn').addEventListener('click',showResult);
renderQuestions();
if(state.submitted) showResult();
