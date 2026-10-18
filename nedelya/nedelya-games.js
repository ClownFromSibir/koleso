/* ===================================================================
   «НЕДЕЛЯ 8» — вторые мини-игры предметов и босс «Великий Дедлайн».
   У каждого предмета две мини-игры; в неделю выпадает одна (сначала несыгранная).
   =================================================================== */

const MG2 = {
 rov2:{subj:"rov",name:"Кивай вовремя",type:"qte",time:4500,rounds:7,need:5,
  intro:"Куратор внимательно следит за залом. Реагируй правильно и быстро, пока не поймали!",
  acts:["Кивнуть","Заглянуть в телефон","Замереть","Взять печенье","Проснуться"],
  pool:[["Куратор смотрит прямо на тебя!","Кивнуть"],["Куратор отвернулся к доске","Заглянуть в телефон"],["«Вопросы есть?»","Замереть"],
        ["Подруга А тайком протягивает печенье","Взять печенье"],["«Это очень, очень важно!»","Кивнуть"],["Подруга Б толкает локтем: «ты спишь?»","Проснуться"],
        ["Куратор ищет добровольца глазами","Замереть"],["Куратор пошёл к окну","Заглянуть в телефон"]],
  win:"Ты идеально изобразила внимательного слушателя. Куратор даже похвалила тебя за «вовлечённость». Подруга А в восторге.",
  lose:"Куратор поймала тебя с печеньем во рту в момент «Вопросы есть?». Неловко. Но печенье было вкусное."},
 rus2:{subj:"rus",name:"Собери слово",type:"anagram",time:100,pick:4,
  intro:"Преподаватель рассыпал термины на буквы: «Соберите обратно. Быстро. Вы же будущие учителя русского».",
  pool:[["ГЛАГОЛ","Часть речи: что делать?"],["СУФФИКС","Часть слова после корня"],["ПРИСТАВКА","Часть слова перед корнем"],["ЗАПЯТАЯ","Знак, из-за которого снижают баллы"],
        ["ДИКТАНТ","Пишут под диктовку"],["ОКОНЧАНИЕ","Изменяемая часть слова"],["СИНОНИМ","Слово, близкое по смыслу"],["АНТОНИМ","Слово с противоположным значением"],["ОРФОГРАММА","То, что учитель обводит красной ручкой"]],
  win:"Все слова собраны. Буквы вернулись на свои места и выглядят довольными.",
  lose:"Пара слов так и осталась рассыпанной. Буквы обиделись, но простят."},
 fiz2:{subj:"fiz",name:"Поймай мяч",type:"qte",time:5500,rounds:8,need:6,
  intro:"Физрук кидает мячи со всех сторон. Жми туда, откуда летит!",
  acts:["⬅️","⬆️","⬇️","➡️"],
  pool:[["Мяч летит слева!","⬅️"],["Мяч справа!","➡️"],["Высоко!","⬆️"],["Низко, под ноги!","⬇️"],["Слева, быстро!","⬅️"],["Справа, крученый!","➡️"]],
  win:"Ты ловишь мячи так, будто всю жизнь стояла на воротах. Физрук записывает тебя в сборную. Шутит. Наверное.",
  lose:"Пара мячей проскочила. Один попал в Сашу, но Саша даже не проснулась."},
 omz2:{subj:"omz",name:"Ситуация — помощь",type:"match",time:40,pick:5,
  intro:"Сопоставь ситуацию и правильную помощь. На время: в жизни тоже некогда думать.",
  pool:[["Порез","Промыть и пластырь"],["Ожог","Холодная вода"],["Ушиб","Холод"],["Кровь из носа","Голову вперёд"],["Обморок","Ноги повыше"],
        ["Температура","Жаропонижающее"],["Укус осы","Убрать жало"],["Подавился","Удары между лопатками"]],
  win:"Все спасены. Ты — ходячая аптечка. Преподаватель предлагает тебе вести практику вместо неё.",
  lose:"Кое-кого ты лечила холодной водой от обморока. Он не жаловался, но удивился."},
 konc2:{subj:"konc",name:"Мемори: химия",type:"memory",time:60,
  intro:"Переверни карточки и найди пары: вещество и его обозначение.",
  pairs:[["Кислород","O"],["Золото","Au"],["Железо","Fe"],["Вода","H₂O"],["Серебро","Ag"],["Соль","NaCl"]],
  win:"Все пары найдены. Менделеев смотрит с портрета одобрительно.",
  lose:"Время вышло. Пара карточек так и не нашла друг друга. Химия — это сложно, особенно личная."},
 ooo2:{subj:"ooo",name:"Ребусы",type:"quiz",perQ:14,pick:5,
  intro:"Преподаватель решил оживить лекцию ребусами из эмодзи. Отгадай понятие.",
  pool:[{q:"🏛 + 📜",o:["Конституция","Музей","Библиотека","Архив"],a:0},{q:"🗳 + 📅",o:["Выборы","Календарь","Отпуск","Дедлайн"],a:0},
        {q:"💰 + 📈",o:["Инфляция","Стипендия","Зарплата","Магазин"],a:0},{q:"👩‍🏫 + 🧒 + 📖",o:["Педагогика","Детский сад","Сказка","Каникулы"],a:0},
        {q:"🌋 + 💥",o:["Извержение","Салют","Ссора","Чайник"],a:0},{q:"📚 + 🎓",o:["Образование","Выпускной","Шапка","Сессия"],a:0},
        {q:"🌱 + ☀️",o:["Фотосинтез","Дача","Лето","Огород"],a:0},{q:"⚖️ + 👨‍⚖️",o:["Правосудие","Весы","Рынок","Экзамен"],a:0},
        {q:"🐒 ➡️ 🧍",o:["Эволюция","Утро понедельника","Зоопарк","Цирк"],a:0},{q:"👨‍👩‍👧 + 🏠",o:["Семья","Общага","Ипотека","Соседка"],a:0}],
  win:"Ребусы разгаданы. Преподаватель обещает сделать так ещё раз. Группа согласна.",
  lose:"Некоторые ребусы не поддались. Особенно тот, с обезьяной. Ты до сих пор думаешь, что это утро понедельника."},
 anat2:{subj:"anat",name:"Орган — функция",type:"match",time:35,pick:5,
  intro:"Аспирант раздаёт карточки: «Сопоставьте орган и функцию. Быстро, и я отпущу».",
  pool:[["Сердце","Качает кровь"],["Лёгкие","Дышат"],["Желудок","Переваривает"],["Почки","Фильтруют кровь"],["Мозг","Думает (иногда)"],
        ["Кожа","Защищает"],["Печень","Обезвреживает"],["Глаза","Видят доску"]],
  win:"— Ну вот, — говорит аспирант. — И чего вы до сих пор сидите? Свободны.",
  lose:"Мозг у тебя переваривал, а желудок думал. Аспирант вздыхает и всё равно отпускает."},
 lit2:{subj:"lit",name:"Кроссворд",type:"crossword",
  intro:"Кроссворд с ключевым словом. Первые буквы ответов сложатся в ещё одно слово.",
  vars:[
   {key:"ТРОП",rows:[["ТЕМА","О чём произведение"],["РИФМА","Созвучие окончаний строк"],["ОДА","Торжественное хвалебное стихотворение"],["ПОЭМА","Большое стихотворное произведение с сюжетом"]]},
   {key:"ЛИРА",rows:[["ЛИРИКА","Род литературы о чувствах"],["ИРОНИЯ","Скрытая насмешка"],["РОМАН","Большое прозаическое произведение"],["АВТОР","Тот, кто написал"]]},
   {key:"СЛОВО",rows:[["СОНЕТ","Стихотворение из 14 строк"],["ЛЕГЕНДА","Народное предание о чудесном"],["ОДА","Торжественное стихотворение"],["ВЕРЛИБР","Свободный стих без рифмы"],["ОЧЕРК","Документальный жанр о реальных людях"]]}
  ],
  win:"Кроссворд разгадан! Ключевое слово сияет. Преподаватель литературоведения ставит плюсик.",
  lose:"Пара строчек осталась пустой. Кроссворды коварны: они всегда знают слово, которое ты забыла."},
 org2:{subj:"org",name:"Найди лишнее",type:"quiz",perQ:12,pick:5,
  intro:"Быстрая разминка от преподавателя: в каждой группе одно понятие лишнее.",
  pool:[{q:"Что лишнее?",o:["Конституция","Федеральный закон","Указ","Мем"],a:3},{q:"Что лишнее?",o:["Президент","Правительство","Федеральное собрание","Студсовет"],a:3},
        {q:"Что лишнее?",o:["Флаг","Герб","Гимн","Стикерпак группы"],a:3},{q:"Что лишнее?",o:["Суверенитет","Федерализм","Демократия","Дедлайн"],a:3},
        {q:"Что лишнее?",o:["Госдума","Совет Федерации","Конституционный суд","Профком"],a:3},{q:"Что лишнее?",o:["Конституция 1993 года","Конституция РФ","Основной закон","Конституция 2005 года"],a:3}],
  win:"Всё лишнее найдено. Даже то, что преподаватель считал нелишним.",
  lose:"Ты чуть не отправила профком в Совет Федерации. Почти получилось."},
 hist2:{subj:"hist",name:"Правитель — событие",type:"match",time:40,pick:5,
  intro:"Сопоставь правителя и событие. Быстро, пока преподаватель не передумал.",
  pool:[["Пётр I","Основал Петербург"],["Иван IV","Венчался на царство"],["Александр II","Отменил крепостное право"],["Екатерина II","Присоединила Крым"],
        ["Ярослав Мудрый","«Русская правда»"],["Владимир","Крещение Руси"],["Дмитрий Донской","Куликовская битва"],["Александр Невский","Ледовое побоище"]],
  win:"Все правители на своих местах. История в порядке. Хоть где-то.",
  lose:"Петра I ты отправила на Куликовскую битву. Он бы, наверное, справился, но нет."},
 mat2:{subj:"mat",name:"Быстрый счёт",type:"speedmath",time:30,need:7,
  intro:"Разминка для мозга: 30 секунд, как можно больше примеров. Мы не математики, но мы быстрые.",
  win:"Ты считаешь быстрее калькулятора. Калькулятор обиделся.",
  lose:"Цифры бегали быстрее тебя. Но кто вообще считает в уме в 2026 году?"},
 det2:{subj:"det",name:"Мемори: сказки",type:"memory",time:60,
  intro:"Найди пары: герой сказки и то, без чего его история не случилась бы.",
  pairs:[["Золушка","👠 туфелька"],["Колобок","🦊 лиса"],["Курочка Ряба","🥚 яйцо"],["Репка","👴 дед"],["Красная Шапочка","🐺 волк"],["Морозко","❄️ мороз"]],
  win:"Все сказки сложились. Ты готова к педпрактике в любом детском саду.",
  lose:"Золушка ушла с волком, Колобок — с туфелькой. Получилась новая сказка. Тоже неплохо."},
 eng2:{subj:"eng",name:"Слово — перевод",type:"match",time:35,pick:5,
  intro:"Сопоставь английское слово и перевод. Время пошло. Словарь не поможет: он остался в общаге.",
  pool:[["deadline","крайний срок"],["homework","домашка"],["tired","уставшая"],["teacher","учитель"],["sleep","спать"],
        ["coffee","кофе"],["exam","экзамен"],["break","перемена"],["kettle","чайник"],["frog","лягушка"]],
  win:"Всё сошлось. Преподаватель говорит «Excellent!» и улыбается впервые за семестр. Группа в шоке.",
  lose:"Ты перевела «kettle» как «экзамен». В каком-то смысле так и есть."}
};
Object.keys(MG2).forEach(k=>{MG[k]=MG2[k];MG_NAMES[k]=MG2[k].name});

/* какая мини-игра выпадет у предмета в эту неделю */
function mgFor(base){
  S.mgPick=S.mgPick||{};
  if(S.mgPick[base]) return S.mgPick[base];
  const opts=[base,base+"2"].filter(k=>MG[k]);
  const fresh=opts.filter(k=>!meta.mg.includes(k));
  /* несыгранная — только если её ещё ни разу не было; дальше честные 50 на 50 */
  return S.mgPick[base]=(fresh.length===1&&R()<.6)?fresh[0]:pick(opts);
}

/* ===================== ДВИЖКИ ===================== */
let mgT=[];const mgClear=()=>{mgT.forEach(clearInterval);mgT.forEach(clearTimeout);mgT=[]};
function bar(id){return `<div class="tbar"><i id="${id}"></i></div>`}

/* QTE: успей нажать правильное действие */
function mgQte(id,g,cb,opt){
  opt=opt||{};mgClear();
  const rounds=opt.rounds||g.rounds, need=opt.need||g.need, T=(opt.time||g.time)+(S&&S.m>=8?200:0);
  let r=0,hit=0,lk=false;const seq=[];for(let i=0;i<rounds;i++)seq.push(pick(g.pool));
  const show=()=>{
    mgClear();lk=false;
    if(r>=rounds){if(r>rounds)return;r++;const win=hit>=need;return opt.done?opt.done(win):mgDone(id,win,win?g.win:g.lose,cb)}
    const [sit,ans]=seq[r];const acts=g.acts.length<=4?g.acts:shuffle([ans,...shuffle(g.acts.filter(a=>a!==ans)).slice(0,3)]);
    mgShell(id,`${r===0&&!opt.done?`<p class="note">${esc(g.intro)}</p>`:""}<p class="note">Раунд ${r+1} из ${rounds} · попаданий ${hit} (нужно ${need})</p>
      <div class="qte">${esc(sit)}</div>${bar("tb")}
      <div class="qgrid">${acts.map((a,k)=>`<button class="choice qbtn" data-a="${esc(a)}">${esc(a)}</button>`).join("")}</div>`,opt.title);
    const t0=performance.now();
    mgT.push(setInterval(()=>{const p=1-(performance.now()-t0)/T;const b=$("tb");if(b)b.style.width=Math.max(0,p*100)+"%";if(p<=0&&!lk){lk=true;r++;show()}},40));
    $("stage").querySelectorAll(".qbtn").forEach(b=>b.onclick=()=>{if(lk)return;lk=true;const ok=b.dataset.a===ans;if(ok)hit++;b.classList.add(ok?"ok":"bad");mgClear();r++;setTimeout(show,ok?250:500)});
  };
  show();
}
/* Анаграмма */
function mgAnagram(id,g,cb,opt){
  opt=opt||{};mgClear();
  const words=opt.words||shuffle(g.pool).slice(0,g.pick);let i=0,solved=0,left=opt.time||g.time,over=false;
  const end=()=>{if(over)return;over=true;mgClear();const win=opt.done?solved>=words.length:solved>=words.length-1;opt.done?opt.done(win):mgDone(id,win,win?g.win:g.lose,cb)};
  mgT.push(setInterval(()=>{left--;const t=$("at");if(t)t.textContent=left;if(left<=0)end()},1000));
  const show=()=>{
    if(over)return;if(i>=words.length)return end();
    const [w,h]=words[i];let letters=shuffle(w.split(""));if(letters.join("")===w)letters=letters.reverse();
    let built=[];
    const render=()=>{mgShell(id,`${i===0&&!opt.done?`<p class="note">${esc(g.intro)}</p>`:""}<p class="note">Слово ${i+1} из ${words.length} · ⏱ <span id="at">${left}</span> с</p>
      <p style="font-weight:700">${esc(h)}</p>
      <div class="built">${w.split("").map((_,k)=>`<span>${built[k]!==undefined?esc(letters[built[k]]):""}</span>`).join("")}</div>
      <div class="letters">${letters.map((l,k)=>`<button class="word" data-k="${k}" ${built.includes(k)?"disabled":""}>${esc(l)}</button>`).join("")}</div>
      <div class="row2"><button class="btn ghost" id="back">⌫ Стереть</button><button class="btn ghost" id="skip">Пропустить</button></div>`,opt.title);
      $("stage").querySelectorAll(".letters .word").forEach(b=>b.onclick=()=>{built.push(+b.dataset.k);
        if(built.length===w.length){const ok=built.map(k=>letters[k]).join("")===w;if(ok){solved++;i++;toast("✓ "+w);$("stage").querySelectorAll(".letters .word").forEach(x=>x.disabled=true);return setTimeout(show,300)}else{built=[];toast("Не то слово. Ещё раз!")}}
        render()});
      $("back").onclick=()=>{built.pop();render()};
      $("skip").onclick=()=>{i++;show()};
    };
    render();
  };
  show();
}
/* Сопоставление */
function mgMatch(id,g,cb,opt){
  opt=opt||{};mgClear();
  const pairs=opt.pairs||shuffle(g.pool).slice(0,g.pick);const right=shuffle(pairs.map(p=>p[1]));
  let selL=null,done=0,mist=0,left=opt.time||g.time,over=false;
  mgShell(id,`${!opt.done?`<p class="note">${esc(g.intro)}</p>`:""}<p class="note">⏱ <span id="mt">${left}</span> с · ошибок: <span id="mm">0</span> · нажми слева и справа; повторное нажатие отменяет выбор</p>
    <div class="mcols"><div>${pairs.map((p,k)=>`<button class="choice ml" data-k="${k}">${esc(p[0])}</button>`).join("")}</div>
    <div>${right.map((t,k)=>`<button class="choice mr" data-t="${esc(t)}">${esc(t)}</button>`).join("")}</div></div>`,opt.title);
  const end=win=>{if(over)return;over=true;mgClear();setTimeout(()=>opt.done?opt.done(win):mgDone(id,win,win?g.win:g.lose,cb),500)};
  mgT.push(setInterval(()=>{left--;const t=$("mt");if(t)t.textContent=left;if(left<=0)end(false)},1000));
  let sel=null;
  const st=$("stage");
  const clear=()=>{st.querySelectorAll(".mcols .sel").forEach(x=>x.classList.remove("sel"));sel=null};
  st.querySelectorAll(".ml,.mr").forEach(b=>b.onclick=()=>{
    if(b.disabled||over)return;const side=b.classList.contains("ml")?"l":"r";
    if(sel===b){clear();return}                       /* повторное нажатие — отмена выбора */
    if(!sel||sel.classList.contains(side==="l"?"ml":"mr")){clear();b.classList.add("sel");sel=b;return}
    const L=side==="l"?b:sel, Rb=side==="r"?b:sel;
    if(pairs[+L.dataset.k][1]===Rb.dataset.t){[L,Rb].forEach(x=>{x.classList.remove("sel");x.classList.add("ok");x.disabled=true});sel=null;done++;if(done===pairs.length)end(mist<=(opt.done?1:2))}
    else{mist++;$("mm").textContent=mist;[L,Rb].forEach(x=>{x.classList.remove("shake","sel");void x.offsetWidth;x.classList.add("shake","bad");setTimeout(()=>x.classList.remove("bad"),400)});sel=null}
  });
}
/* Мемори */
function mgMemory(id,g,cb){
  mgClear();
  const cards=shuffle(g.pairs.flatMap((p,k)=>[{t:p[0],k},{t:p[1],k}]));
  let open=[],found=0,left=g.time,lock=false,over=false;
  mgShell(id,`<p class="note">${esc(g.intro)}</p><p class="note">⏱ <span id="yt">${left}</span> с · найдено пар: <span id="yf">0</span> из ${g.pairs.length}</p>
    <div class="mem">${cards.map((c,i)=>`<button class="mcard" data-i="${i}"><span>${esc(c.t)}</span></button>`).join("")}</div>`);
  const end=win=>{if(over)return;over=true;mgClear();setTimeout(()=>mgDone(id,win,win?g.win:g.lose,cb),600)};
  mgT.push(setInterval(()=>{left--;const t=$("yt");if(t)t.textContent=left;if(left<=0)end(false)},1000));
  $("stage").querySelectorAll(".mcard").forEach(b=>b.onclick=()=>{
    if(lock||b.classList.contains("up")||over)return;b.classList.add("up");open.push(b);
    if(open.length===2){const [a,c]=open;if(cards[+a.dataset.i].k===cards[+c.dataset.i].k){a.classList.add("got");c.classList.add("got");open=[];found++;$("yf").textContent=found;if(found===g.pairs.length)end(true)}
      else{lock=true;setTimeout(()=>{a.classList.remove("up");c.classList.remove("up");open=[];lock=false},750)}}
  });
}
/* Кроссворд с ключевым словом: в каждом слове сразу открыта одна буква, ещё можно открывать подсказкой */
function mgCross(id,g,cb){
  mgClear();
  const v=g.vars[varOf(id,g.vars.length)];const solved=v.rows.map(()=>false);let i=0,hints=0;
  const open=v.rows.map(([a])=>{const k=1+Math.floor(R()*(a.length-1));return new Set([k])});
  const norm=s=>s.trim().toUpperCase().replace(/Ё/g,"Е").replace(/\s+/g,"");
  const render=(msg)=>{
    const grid=v.rows.map(([a],k)=>`<div class="cw ${k===i?"cur":""}">${a.split("").map((l,j)=>`<span class="${j===0?"key":""} ${!solved[k]&&open[k].has(j)?"hint":""}">${solved[k]||open[k].has(j)?l:""}</span>`).join("")}</div>`).join("");
    if(i>=v.rows.length){
      const n=solved.filter(Boolean).length,win=n>=v.rows.length-1;if(n===v.rows.length&&!v._skip)ach("cross");
      mgShell(id,`<div class="cwgrid">${grid}</div><p>Ключевое слово: <b>${v.key}</b></p><p class="note">Разгадано ${n} из ${v.rows.length}${hints?`, подсказок: ${hints}`:""}</p><button class="btn" id="nx">Дальше</button>`);
      $("nx").onclick=()=>mgDone(id,win,win?g.win:g.lose,cb);return;
    }
    const [a,c]=v.rows[i];const canHint=open[i].size<a.length-1;
    mgShell(id,`<p class="note">${esc(g.intro)}</p><div class="cwgrid">${grid}</div>
      <p style="font-weight:700">${i+1}. ${esc(c)} <span class="note">(${a.length} букв)</span></p>
      <input id="cwi" class="cwin" maxlength="${a.length+2}" autocomplete="off" autocorrect="off" autocapitalize="characters" spellcheck="false" placeholder="Ответ">
      <div class="row2"><button class="btn" id="cwok">Ввести</button>${canHint?`<button class="btn ghost" id="cwh">💡 Открыть букву</button>`:""}<button class="btn ghost" id="cwskip">Пропустить</button></div><div class="fb" id="fb">${msg||""}</div>`);
    const inp=$("cwi");
    const ok=()=>{if(norm(inp.value)===norm(a)){solved[i]=true;i++;render("✓ Верно!")}else{$("fb").textContent="Не подходит. Попробуй ещё";$("fb").style.color="var(--bad)";inp.classList.add("shake");setTimeout(()=>inp.classList.remove("shake"),300)}};
    $("cwok").onclick=ok;inp.onkeydown=e=>{if(e.key==="Enter")ok()};
    if(canHint)$("cwh").onclick=()=>{const closed=[...a].map((x,j)=>j).filter(j=>!open[i].has(j));open[i].add(pick(closed));hints++;const val=inp.value;render("💡 Ещё одна буква открыта");$("cwi").value=val};
    $("cwskip").onclick=()=>{i++;v._skip=1;render("Ответ был: "+a)};
  };
  v._skip=0;render();
}
/* Быстрый счёт */
function mathQ(hard){
  const ops=hard?["+","−","×"]:["+","−","×"];const op=pick(ops);let a,b,r;
  if(op==="×"){a=2+Math.floor(R()*(hard?11:8));b=2+Math.floor(R()*(hard?11:8));r=a*b}
  else if(op==="+"){a=10+Math.floor(R()*(hard?80:40));b=5+Math.floor(R()*(hard?60:30));r=a+b}
  else{a=30+Math.floor(R()*(hard?90:50));b=5+Math.floor(R()*(a-6));r=a-b}
  const o=shuffle([r,r+pick([1,2,10]),r-pick([1,2,10]),r+pick([3,5,11])].filter((x,i,arr)=>arr.indexOf(x)===i)).slice(0,4);
  if(!o.includes(r))o[0]=r;return {q:`${a} ${op} ${b} = ?`,o:shuffle(o).map(String),a:null,r:String(r)};
}
function mgSpeed(id,g,cb,opt){
  opt=opt||{};mgClear();let left=opt.time||g.time,score=0,n=0,over=false;
  const need=opt.need||g.need;
  const end=()=>{if(over)return;over=true;mgClear();const win=score>=need;opt.done?opt.done(win):mgDone(id,win,(win?g.win:g.lose)+`\n\nРешено: ${score}`,cb)};
  mgT.push(setInterval(()=>{left--;const t=$("st2");if(t)t.textContent=left;if(left<=0)end()},1000));
  let lk=false;
  const show=()=>{if(over)return;lk=false;const x=mathQ(opt.hard);n++;
    mgShell(id,`${!opt.done?`<p class="note">${esc(g.intro)}</p>`:""}<p class="note">⏱ <span id="st2">${left}</span> с · верно: ${score} (нужно ${need})</p>
      <div class="qte">${x.q}</div><div class="qgrid">${x.o.map(o=>`<button class="choice qbtn" data-o="${o}">${o}</button>`).join("")}</div>`,opt.title);
    $("stage").querySelectorAll(".qbtn").forEach(b=>b.onclick=()=>{if(lk||over)return;lk=true;const ok=b.dataset.o===x.r;if(ok)score++;b.classList.add(ok?"ok":"bad");if(opt.done&&score>=need)return end();setTimeout(show,ok?150:400)});
  };
  show();
}
/* Быстрая викторина с таймером на вопрос (ребусы, найди лишнее, босс) */
function mgFast(id,g,cb,opt){
  opt=opt||{};mgClear();
  const qs=opt.qs||shuffle(g.pool).slice(0,g.pick).map(x=>{const right=x.o[x.a];const o=shuffle(x.o);return {q:x.q,o,a:o.indexOf(right)}});
  let i=0,score=0,lk=false,fin=false;const T=(opt.perQ||g.perQ)*1000;
  const show=()=>{
    mgClear();lk=false;
    if(i>=qs.length){if(fin)return;fin=true;const win=opt.done?score>=qs.length:score>=Math.ceil(qs.length*.6);return opt.done?opt.done(win):mgDone(id,win,win?g.win:g.lose,cb)}
    const x=qs[i];
    mgShell(id,`${i===0&&!opt.done?`<p class="note">${esc(g.intro)}</p>`:""}<p class="note">${opt.done?"":`Вопрос ${i+1} из ${qs.length}`}</p>${bar("fb2")}
      <p class="${x.big?"qte":""}" style="font-weight:700">${esc(x.q)}</p><div class="choices">${x.o.map((o,k)=>`<button class="choice opt" data-k="${k}">${esc(o)}</button>`).join("")}</div>`,opt.title);
    const t0=performance.now();
    mgT.push(setInterval(()=>{const p=1-(performance.now()-t0)/T;const b=$("fb2");if(b)b.style.width=Math.max(0,p*100)+"%";if(p<=0&&!lk){lk=true;i++;show()}},50));
    const btns=[...$("stage").querySelectorAll(".opt")];
    btns.forEach(b=>b.onclick=()=>{if(lk)return;lk=true;mgClear();const ok=+b.dataset.k===x.a;if(ok)score++;b.classList.add(ok?"ok":"bad");if(!ok)btns[x.a].classList.add("ok");i++;setTimeout(show,ok?500:(opt.done?1100:1600))});
  };
  show();
}
function runMG2(id,g,cb){
  if(g.type==="qte") return mgQte(id,g,cb);
  if(g.type==="anagram") return mgAnagram(id,g,cb);
  if(g.type==="match") return mgMatch(id,g,cb);
  if(g.type==="memory") return mgMemory(id,g,cb);
  if(g.type==="crossword") return mgCross(id,g,cb);
  if(g.type==="speedmath") return mgSpeed(id,g,cb);
  if(g.type==="quiz"&&g.perQ){g.pool.forEach(x=>x.big=x.q.length<14);return mgFast(id,g,cb)}
  return null;
}

/* ===================== БОСС: ВЕЛИКИЙ ДЕДЛАЙН ===================== */
const BOSS_Q=[
 {q:"В каком году основан Санкт-Петербург?",o:["1703","1712","1689","1725"],a:0},
 {q:"Какое слово написано с ошибкой?",o:["Чрезвычайно","Будующий","Интеллигенция","Дилемма"],a:1},
 {q:"Какой троп: «Шёпот листьев»?",o:["Метафора","Гипербола","Сравнение","Эпитет"],a:0},
 {q:"Сколько хромосом у человека?",o:["46","23","48","44"],a:0},
 {q:"Кто написал «Каштанку»?",o:["Чехов","Толстой","Тургенев","Бунин"],a:0},
 {q:"Past Simple от «go»?",o:["went","goed","gone","goes","wented"],a:0},
 {q:"Какой падеж отвечает на вопрос «о ком? о чём?»",o:["Предложный","Дательный","Творительный","Родительный","Винительный"],a:0},
 {q:"Кто автор «Слова о полку Игореве»?",o:["Неизвестен","Нестор","Карамзин","Ломоносов","Боян"],a:0},
 {q:"Сколько костей у взрослого человека?",o:["206","212","198","300","186"],a:0},
 {q:"Что такое оксюморон?",o:["Сочетание несочетаемого","Преувеличение","Скрытое сравнение","Повтор звуков","Обращение к предмету"],a:0},
 {q:"Кто придумал классно-урочную систему?",o:["Коменский","Макаренко","Ушинский","Песталоцци","Сухомлинский"],a:0},
 {q:"Какой орган вырабатывает инсулин?",o:["Поджелудочная железа","Печень","Почки","Щитовидная железа","Селезёнка"],a:0},
 {q:"Сколько будет 23 × 7?",o:["161","151","171","163","141"],a:0},
 {q:"Кто, по летописи, впервые упомянул Москву в 1147 году?",o:["Юрий Долгорукий","Иван Калита","Вещий Олег","Ярослав Мудрый","Владимир Мономах"],a:0},
 {q:"Какое слово — наречие?",o:["Быстро","Быстрый","Быстрота","Ускорять","Быстроногий"],a:0},
 {q:"Какой жанр у «Мёртвых душ» по Гоголю?",o:["Поэма","Роман","Повесть","Комедия","Очерк"],a:0},
 {q:"Какого газа в атмосфере Земли больше всего?",o:["Азота","Кислорода","Углекислого газа","Аргона","Водорода"],a:0},
 {q:"Как по-английски «крайний срок»?",o:["deadline","dateline","headline","lifeline","borderline"],a:0},
 {q:"Сколько слогов в слове «педагогика»?",o:["5","4","6","3","7"],a:0},
 {q:"Какая планета ближе всех к Солнцу?",o:["Меркурий","Венера","Марс","Земля"],a:0},
 {q:"Сколько статей в Конституции РФ?",o:["137","100","150","93"],a:0},
 {q:"Кто такой Ушинский?",o:["Педагог","Полководец","Химик","Поэт"],a:0},
 {q:"Какой газ растения выделяют при фотосинтезе?",o:["Кислород","Азот","Углекислый газ","Водород"],a:0},
 {q:"Какое слово пишется слитно?",o:["Неряха","Не правда","Не друг","Не я"],a:0},
 {q:"Сколько молочных зубов у ребёнка?",o:["20","24","32","16"],a:0},
 {q:"Кто написал «Сказку о рыбаке и рыбке»?",o:["Пушкин","Лермонтов","Крылов","Жуковский"],a:0},
 {q:"Какой знак ставится между частями сложного предложения без союза перед пояснением?",o:["Двоеточие","Тире","Точка с запятой","Запятая"],a:0},
 {q:"В каком году отменили крепостное право?",o:["1861","1812","1905","1825"],a:0},
 {q:"Сколько будет 17 × 6?",o:["102","96","112","106"],a:0},
 {q:"Как по-английски «общежитие»?",o:["dormitory","dominator","doormat","dormouse"],a:0},
 {q:"Какой витамин вырабатывается под солнцем?",o:["D","A","C","K"],a:0},
 {q:"Самое глубокое озеро в мире?",o:["Байкал","Ладожское","Онежское","Каспийское море"],a:0},
 {q:"Кто автор «Детства», первой части трилогии?",o:["Лев Толстой","Горький","Гоголь","Чехов"],a:0}
];
const BOSS_MATCH=[
 [["Чехов","«Каштанка»"],["Гоголь","«Шинель»"],["Тургенев","«Муму»"],["Лермонтов","«Мцыри»"],["Крылов","Басни"],["Толстой","«Филиппок»"]],
 [["Метафора","Скрытое сравнение"],["Гипербола","Преувеличение"],["Литота","Преуменьшение"],["Эпитет","Образное определение"],["Олицетворение","Неживое как живое"],["Анафора","Единоначатие"]],
 [["Коменский","«Великая дидактика»"],["Макаренко","«Педагогическая поэма»"],["Ушинский","«Родное слово»"],["Сухомлинский","«Сердце отдаю детям»"],["Выготский","Зона ближайшего развития"]]
];
const BOSS_TAUNT=["Ты не успеешь!","Срок сдачи — вчера!","Твой конспект — мой!","Я призываю внезапный английский!","23:59… 23:59… 23:59…","Где твоя практическая, Лысаченко?","Я вижу твои хвосты!","Ха! Ещё одна СРС!"];
function bossStart(practice,after){
  mgClear();
  const debts=S?S.debts:0;
  const B={hp:Math.min(200,100+debts*12),max:Math.min(200,100+debts*12),lives:3+((S&&S.m>=8)?1:0),lost:0,round:0,practice,after,rage:false};
  stat(practice?"bossp":"boss");
  bossCard(B,`Из стопки несданных работ медленно поднимается Он. Великий Дедлайн. Вместо глаз у него горят красные цифры 23:59.\n\n— Неделя кончается, Лысаченко. А я — нет.${debts?`\n\nТвои ${debts} долг(ов) делают его сильнее.`:""}`,[{t:"⚔️ В бой!",fn:()=>bossRound(B)}]);
}
function bossHud(B){
  return `<div class="boss"><div class="bossface ${B.rage?"rage":""}" id="bf">⏰</div>
    <div style="flex:1"><div class="note">Великий Дедлайн ${B.rage?"· 😡 ЯРОСТЬ":""}</div><div class="hp"><i id="hpb" style="width:${B.hp/B.max*100}%"></i></div>
    <div class="note">${"❤️".repeat(Math.max(0,B.lives))}${"🖤".repeat(B.lost)}</div></div></div>`;
}
function bossCard(B,text,choices){
  card({tag:B.practice?"⚔️ Реванш":"⚔️ Пятница · босс",title:"Великий Дедлайн",cls:"blue",pre:bossHud(B),text,choices});
}
function bossRound(B){
  if(B.hp<=0) return bossWin(B);
  if(B.lives<=0) return bossLose(B);
  B.round++;window.curBoss=B;
  if(!B.rage&&B.hp<=B.max/2){B.rage=true;return bossCard(B,"Дедлайн ревёт и переносится на ВЧЕРА. Время сжимается: теперь всё быстрее!",[{t:"Держись!",fn:()=>bossRound(B)}])}
  const k=B.rage?.8:1, title="⚔️ Раунд "+B.round+" · "+pick(BOSS_TAUNT);
  let fired=false;
  const done=win=>{
    if(fired)return;fired=true;
    if(win){const dmg=25+((S&&S.a>=6)?5:0)+Math.floor(R()*6);B.hp=Math.max(0,B.hp-dmg);toast(`💥 −${dmg} Дедлайну`)}
    else{B.lives--;B.lost++;toast("💔 Дедлайн попал")}
    bossCard(B,win?pick(["Удар! Дедлайн отшатывается и роняет пару минут.","Есть! Цифры 23:59 мигают и съезжают на 23:58.","Попадание! Дедлайн хрипит: «Это… невозможно…»"]):pick(["Дедлайн смеётся. Где-то упала оценка.","Мимо! Дедлайн откусывает кусочек твоих выходных.","Он быстрее! Но ненадолго."]),
      [{t:B.hp<=0?"Добить!":B.lives<=0?"…":"Следующий раунд",fn:()=>bossRound(B)}]);
    const f=$("bf");if(f&&win){f.classList.add("hit");setTimeout(()=>f.classList.remove("hit"),400)}
  };
  const type=pick(["quiz","quiz","match","qte","math","anagram"]);
  const fakeG={win:"",lose:"",intro:""};
  if(type==="quiz"){const x=pick(BOSS_Q);const o=shuffle(x.o);return mgFast("boss",fakeG,null,{title,qs:[{q:x.q,o,a:o.indexOf(x.o[x.a])}],perQ:9*k,done})}
  if(type==="match"){const src=pick([MG2.hist2.pool,MG2.anat2.pool,...BOSS_MATCH]);return mgMatch("boss",fakeG,null,{title,pairs:shuffle(src).slice(0,4),time:Math.round(16*k),done})}
  if(type==="qte"){const g=pick([MG2.fiz2,MG2.rov2]);return mgQte("boss",g,null,{title,rounds:3,need:3,time:Math.round(Math.min(g.time,3500)*k),done})}
  if(type==="math"){return mgSpeed("boss",fakeG,null,{title,time:Math.round(12*k),need:3,hard:true,done})}
  if(type==="anagram"){return mgAnagram("boss",MG2.rus2,null,{title,words:[pick(MG2.rus2.pool)],time:Math.round(25*k),done})}
}
function bossWin(B){
  confetti();meta.st=meta.st||{};
  if(!B.practice){meta.st.bossw=(meta.st.bossw||0)+1;S.bossWon=1;fx({m:3});S.debts=Math.max(0,S.debts-1)}
  ach("boss");if(B.lost===0)ach("bossclean");if(S&&S.debts>=4&&!B.practice)ach("bosshard");
  saveMeta();if(S&&!B.practice)persist();
  card({tag:"⚔️ Победа",title:"Дедлайн повержен!",cls:"end",text:"Великий Дедлайн рассыпается на тысячу маленьких «зачтено». Цифры 23:59 гаснут одна за другой.\n\nВ наступившей тишине слышно только, как Подруга А где-то за стеной напевает что-то победное."+(B.practice?"":"\n\nНаграда: +3 ☀️ и один долг прощён."),
    choices:[{t:"Дальше",fn:B.after}]});
}
function bossLose(B){
  card({tag:"⚔️ Поражение",title:"Дедлайн победил",cls:"blue",text:"Дедлайн нависает над тобой и громко тикает.\n— Сдавайся, Лысаченко.\n\nНо это не конец. Ты можешь попробовать снова.",
    choices:[{t:"⚔️ Переиграть",fn:()=>bossStart(B.practice,B.after)},{t:"🏳 Сдаться",s:B.practice?"":"−2 ☀️",fn:()=>{if(!B.practice)fx({m:-2});B.after()}}]});
}
