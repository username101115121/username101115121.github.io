(() => {
  const copy = {
    zh: {
      'nav.work':'我的日常','hero.eyebrow':'臺北醫學大學 · 醫學系一年級','hero.first':'莊','hero.last':'博勛','hero.intro':'在白袍與球場之間，練習專注、合作，<br>也朝著成為能溫柔照亮他人的醫者前進。','hero.cta':'一起聊聊','hero.role':'醫學新鮮人 · 籃球愛好者 · 終身學習者','about.title':'我相信每一份熱愛，<br><i>都能照亮前方。</i>','about.body':'嗨，我是博勛，目前是臺北醫學大學醫學系一年級。從解剖課的細節到球場上的傳球，我相信每一次專注投入，都是理解人與世界的開始。','about.body2':'課餘時間，我最喜歡和隊友在球場上揮灑汗水。籃球教會我信任、溝通與永不輕言放棄的精神。','about.link':'看看我的日常 <span>→</span>','stats.years':'醫學系的第一年','stats.products':'號球衣','stats.countries':'堂最喜歡的課','stats.coffee':'次持續練習','work.label':'我的日常','work.title':'那些讓我持續<br><i>向前的時刻。</i>','project.one.title':'從每一次傳球，學會相信隊友','project.one.desc':'系隊日常與球場筆記','project.two.title':'在細節中認識生命的精密','project.two.desc':'醫學院新鮮人的學習日記','project.three.title':'用熱情連結每一個並肩的人','project.three.desc':'校園志工與社團生活','play.eyebrow':'近期訓練中','play.title':'把每一次練習，<br><i>投進更好的自己。</i>','play.body':'早八前的一萬步、課後的一小時投籃，和不斷累積的勇氣。','contact.eyebrow':'想一起聊聊嗎？','contact.title':'很高興與你<br><i>在下一站相遇。</i>','footer':'在台北認真生活 · 2026'
    },
    en: {
      'nav.work':'MY DAYS','hero.eyebrow':'TAIPEI MEDICAL UNIVERSITY · MEDICINE, YEAR 1','hero.first':'PO-HSUN','hero.last':'CHUANG','hero.intro':'Between a white coat and the court, I practise focus,<br>teamwork, and becoming a doctor who brings light to others.','hero.cta':'SAY HELLO','hero.role':'MEDICAL STUDENT · BASKETBALL LOVER · LIFELONG LEARNER','about.title':'I BELIEVE EVERY PASSION<br><i>CAN LIGHT THE WAY.</i>','about.body':'Hi, I’m Po-Hsun, a first-year medical student at Taipei Medical University. From anatomy class details to court-side passes, I see every focused effort as a beginning for understanding people and the world.','about.body2':'Outside class, I love leaving everything on the court with my teammates. Basketball has taught me trust, communication, and never giving up.','about.link':'A GLIMPSE OF MY DAYS <span>→</span>','stats.years':'YEAR ONE IN MEDICINE','stats.products':'JERSEY NUMBER','stats.countries':'FAVOURITE CLASSES','stats.coffee':'MOMENTS OF PRACTICE','work.label':'MY DAYS','work.title':'THE MOMENTS THAT<br><i>KEEP ME MOVING.</i>','project.one.title':'Learning to trust through every pass','project.one.desc':'Team routines & court notes','project.two.title':'Finding life’s precision in every detail','project.two.desc':'A freshman medical journal','project.three.title':'Connecting with people through passion','project.three.desc':'Campus community & service','play.eyebrow':'CURRENTLY TRAINING','play.title':'PUTTING EVERY PRACTICE<br><i>INTO A BETTER SELF.</i>','play.body':'Ten thousand steps before class, an hour of shooting after, and courage built one day at a time.','contact.eyebrow':'WANT TO SAY HELLO?','contact.title':'LOOKING FORWARD TO<br><i>MEETING AT THE NEXT STOP.</i>','footer':'LIVING WITH PURPOSE IN TAIPEI · 2026'
    }
  };
  let active = 'zh';
  const apply = language => {
    active = language;
    document.querySelectorAll('[data-i18n]').forEach(el => { if (copy[language][el.dataset.i18n]) el.innerHTML = copy[language][el.dataset.i18n]; });
    document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    document.title = language === 'zh' ? '莊博勛 — 臺北醫學大學醫學系' : 'Po-Hsun Chuang — TMU Medical Student';
  };
  apply(active);
  document.querySelector('#languageToggle').addEventListener('click', () => setTimeout(() => apply(active === 'zh' ? 'en' : 'zh'), 0));
})();
