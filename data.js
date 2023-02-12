const dict = [
    {
        word: "世一",
        meaning: "世界第一",
        english: "The best of the world",
        example: ["Mandy世一, 永遠支持你", "要做世一，切忌不可一世！"],
        cate: "trend"
    },
    {
        word: "食死貓",
        meaning: "背黑鍋，接受並非因自己行為構成的後果",
        english: "to be a scapegoat",
        example: ["他知道後拒絕食死貓，在社交平台直播澄清。"],
        cate: "life"
    },
    {
        word: "大鑊",
        meaning: "事態嚴重，形容一件事件發展到無法承受的危險地步。",
        english: "messed up big time",
        example: ["銀包唔見咗，今次大鑊了！"],
        cate: "life"
    },
    {
        word: "騎牛搵馬",
        meaning: "暫時接受當刻的方案，但繼續在另一邊繼續尋找更好嘅選擇。",
        english: "to buy time for something while waiting for a better choice",
        example: ["你會選擇裸辭還是騎牛搵馬?","他的戀愛心態很多時都是騎牛搵馬"],
        cate: "work"
    },
    {
        word: "射波",
        meaning: "事先未經申請就自行放假不上班",
        example: ["打工仔最常見的「射波」理由是什麼?","射波文化並非香港獨有。"],
        english: "bunk off",
        cate: "work"
    },
    {
        word: "捽數",
        meaning: "上司向下屬施壓，催促下屬達標",
        example: ["公司用盡不同手法向前線同事捽數"],
        english: "hustling in order to meet business targets and numbers",
        cate: "work"
    },
    {
        word: "散水餅",
        meaning: "離職時請同事吃的餅，目的是表達心意，以感謝上司、同事們過去日子以來的照顧。",
        example: ["相信最多打工仔煩惱就是買散水餅"],
        english: "Fleeing biscuit",
        cate: "work"
    },
    {
        word: "秘撈",
        meaning: "離職時請同事吃的餅，目的是表達心意，以感謝上司、同事們過去日子以來的照顧。",
        example: ["相信最多打工仔煩惱就是買散水餅"],
        english: "moonlighting",
        cate: "work"
    },
    {
        word: "炒散",
        meaning: "從事非固定的散工工作",
        example: ["請假去做炒散，為的是儲下更多的錢"],
        english: "casual Work",
        cate: "work"
    },
    {
        word: "收爐",
        meaning: "暫時停止工作，泛指過年前最後一天上班",
        example: ["我今日收爐啦", "每逢農曆新年，香港的店舖會貼出告示註明收爐及啟市日子"],
        english: "pack up",
        cate: "work"
    },
    {
        word: "炒魷魚",
        meaning: "解僱",
        example: ["我被公司炒魷魚了"],
        english: "fire somebody",
        cate: ["work", "food"]
    },
    {
        word: "鐵飯碗",
        meaning: "一份非常穩定，不容易被解僱的工作",
        example: ["很多人把公務員的工作當作鐵飯碗"],
        english: "lifelong job",
        cate: "work"
    },
    {
        word: "燉冬菇",
        meaning: "因工作過失而被降職",
        example: ["升職加薪是不少打工仔的夢想，相信沒有人想被「燉冬菇」"],
        english: "demotion",
        cate: ["work", "food"]
    },
    {
        word: "冬瓜豆腐",
        meaning: "用來比喻意外或事故",
        example: ["假如你有什麼冬瓜豆腐的話，那我怎麼辦?"],
        english: "signify the sudden cropping up of a crisis or an emergency",
        cate: "food"
    },
    {
        word: "水魚",
        meaning: "容易被人欺騙的人",
        example: ["佢份人好容易比人呃，成日比人當水魚。"],
        english: "gullible",
        cate: "food"
    },
    {
        word: "食豆腐",
        meaning: "描述性騷擾或形容「調戲」或「佔人便宜」的行為",
        example: ["小心嗰個人，佢成日食人豆腐"],
        english: "taking advantage in the sense of unwanted sexual advances",
        cate: "food"
    },
    {
        word: "煲電話粥",
        meaning: "用電話長時間地聊天",
        example: ["今日同女朋友煲電話粥"],
        english: "Talk endlessly on the phone",
        cate: "food"
    },
    {
        word: "食塞米",
        meaning: "形容人日日遊手好閒，不會做事，或辦事不力",
        example: ["少少嘢都要問人，話你食塞米真係冇冤枉你！"],
        english: "incompetent",
        cate: "food"
    },
    {
        word: "食檸檬",
        meaning: "遭受對方拒絕",
        example: ["他曾經告白失敗慘食檸檬"],
        english: "to be rejected",
        cate: "food"
    },
    {
        word: "重口味",
        meaning: "形容喜愛比較刺激極端的東西",
        example: ["重口味的人，不覺得自己重口味。"],
        english: "hardcore",
        cate: "food"
    },
    {
        word: "食鹽多過你食米",
        meaning: "形容某人的經驗沒有其他人多",
        example: ["我食鹽多過你食米啦！使你教我？"],
        english: "to be more experienced",
        cate: "food"
    },
    {
        word: "伏",
        meaning: "陷阱，或指一些令人不滿意的事物。中伏指遭人作弄",
        example: ["收到貨後發現中伏", "這間餐廳是大伏中的大伏"],
        english: "trap",
        cate: "life"
    },
    {
        word: "hea",
        meaning: "意指休息懶懶閒閒，也可形容人做事敷衍不認真。主要用hea",
        example: ["我想hea一陣先", "呢份工作佢做得好hea"],
        english: "someone who stroll around without any purpose",
        cate: "life"
    },
    {
        word: "攞命",
        meaning: "要命，表示事物的程度達到了極限",
        example: ["今天熱到攞命！"],
        english: "dreadful",
        cate: "life"
    },
    {
        word: "戴綠帽",
        meaning: "一個男性的妻子紅杏出牆和別的男性發生性關係",
        example: ["男人最怕「戴綠帽」"],
        english: "be a cuckold",
        cate: "life"
    },
    {
        word: "落狗屎",
        meaning: "下大雨",
        example: ["出面落狗屎喎，喺度坐多陣等停雨先走啦"],
        english: "to rain cats and dogs",
        cate: "life"
    },
    {
        word: "放飛機",
        meaning: "不守約",
        example: ["生日當日竟然俾全部朋友放飛機"],
        english: "to stand one up",
        cate: "life"
    },
    {
        word: "臭崩崩",
        meaning: "很臭",
        example: ["點解個廁所咁臭崩崩嘅", "無沖涼幾日，個人臭崩崩"],
        english: "smelly",
        cate: "life"
    },
    {
        word: "無啦啦",
        meaning: "無緣無故的",
        example: ["無啦啦落大雨，咁啱冇遮，真係黑仔！"],
        english: "out of nowhere; for no reason",
        cate: "life"
    },
    {
        word: "濕濕碎",
        meaning: "形容某事很容易做到",
        example: ["寫篇九千字嘅論文濕濕碎啫", "這件事濕濕碎啦！無問題！"],
        english: "piece of cake; not big deal",
        cate: "life"
    },
    {
        word: "攞景定贈慶",
        meaning: "責怪別人在某些場合做出一些事使人難堪",
        example: ["婚宴播「好心分手」 攞景定贈慶？ "],
        english: "stealing the scene, causing embarrassment",
        cate: "life"
    },
    {
        word: "Famj",
        meaning: "Famous jj的縮寫，意思是網絡上面較出名的人。",
        example: ["佢有十萬IG Followers, 係一個famj。"],
        english: "Famous person on the internet, like influencer on social network",
        cate: "trend"
    },    
    {
        word: "Firm",
        meaning: "有兩個意思，一是很正、很勁，二是形容關係密切",
        example: ["佢地兩個相識十年，係好firm嘅朋友", "你份作品好firm！"],
        english: "Two meanings: (1)Excellent, (2)Close relationship",
        cate: "trend"
    },
    {
        word: "0尊",
        meaning: "解作「零尊重」",
        example: ["佢對所有人都0尊", "0尊！講野有禮貌啲啦！"],
        english: "disrespected",
        cate: "trend"
    },
    {
        word: "siu4",
        meaning: "是「笑死」的諧音，就是很好笑的意思",
        example: ["siu4我啦", "呢個笑話真係siu4"],
        english: "so funny",
        cate: "trend"
    },
    {
        word: "好kam",
        meaning: "有兩個意思，一是用來形容一個人很奇怪，二是指一件令人很尷尬的事",
        example: ["新同學份人好kam", "頭先係街認錯人好kam呀"],
        english: "very strange or very embarrassing",
        cate: "trend"
    },
    {
        word: "大癲",
        meaning: "極度誇張",
        example: ["大癲！呢盒飯三十蚊就有咁大份量！"],
        english: "extremely exaggerating",
        cate: "trend"
    },
    {
        word: "張中和",
        meaning: "是「尊重我」普通話的諧音",
        example: ["唔該張中和"],
        english: "Respect me",
        cate: "trend"
    },
    {
        word: "MM7",
        meaning: "「正」的意思，源於一位歌迷在網上稱讚他的偶像時忘記改變速成輸入法，而衍生出的潮語。MM7來自它的速成碼「一」、「一」的第7個選字。",
        example: ["MM7 呀，今日放假可以休息下"],
        english: "superb",
        cate: "trend"
    },
    {
        word: "Kick",
        meaning: "棘手的意思，也可形容事件阻滯不前的情況",
        example: ["呢份工作好Kick，需要多啲時間"],
        english: "tricky, thorny",
        cate: "trend"
    }
    
]

