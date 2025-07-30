document.addEventListener('DOMContentLoaded', function() {
    // 網頁問題定義
    const questions = [
        // E/I 面向 (8題)
        { text: { zh: "你比較想在公開場合帶動氣氛，還是跟朋友一對一聊信仰？", en: "Would you rather hype up a crowd or chat about faith one-on-one?" },
          options: [
            { text: { zh: "帶動全場", en: "Hype the crowd" }, score: { E: 1 } },
            { text: { zh: "一對一聊天", en: "One-on-one chat" }, score: { I: 1 } }
          ] },
        { text: { zh: "辦活動時，你愛搞大場面，還是小圈子裡深聊？", en: "When hosting events, do you go for a big vibe or deep talks in a small group?" },
          options: [
            { text: { zh: "大場面", en: "Big vibe" }, score: { E: 1 } },
            { text: { zh: "小圈子深聊", en: "Small group deep talk" }, score: { I: 1 } }
          ] },
        { text: { zh: "你喜歡帶大家一起嗨，還是自己默默準備東西？", en: "Do you like leading the party or prepping stuff quietly on your own?" },
          options: [
            { text: { zh: "帶大家嗨", en: "Lead the party" }, score: { E: 1 } },
            { text: { zh: "默默準備", en: "Prep quietly" }, score: { I: 1 } }
          ] },
        { text: { zh: "和新朋友聊天，你會主動開話題，還是等他們先來？", en: "With new people, do you start the convo or wait for them to make a move?" },
          options: [
            { text: { zh: "主動開聊", en: "Start the convo" }, score: { E: 1 } },
            { text: { zh: "等他們先來", en: "Wait for them" }, score: { I: 1 } }
          ] },
        { text: { zh: "分享信仰時，你愛站上台講，還是私下聊更自在？", en: "When sharing faith, do you love speaking on stage or feel better chatting privately?" },
          options: [
            { text: { zh: "站上台講", en: "Speak on stage" }, score: { E: 1 } },
            { text: { zh: "私下聊", en: "Chat privately" }, score: { I: 1 } }
          ] },
        { text: { zh: "在團體活動中，你會帶頭帶動氣氛，還是低調幫忙？", en: "In group activities, do you lead the vibe or help out quietly?" },
          options: [
            { text: { zh: "帶頭帶動", en: "Lead the vibe" }, score: { E: 1 } },
            { text: { zh: "低調幫忙", en: "Help quietly" }, score: { I: 1 } }
          ] },
        { text: { zh: "你更愛跟大群人互動，還是跟幾個熟人聊天？", en: "Do you love interacting with a big group or chatting with a few close friends?" },
          options: [
            { text: { zh: "大群人互動", en: "Big group interaction" }, score: { E: 1 } },
            { text: { zh: "熟人聊天", en: "Close friends chat" }, score: { I: 1 } }
          ] },
        { text: { zh: "參加活動時，你會到處結交新朋友，還是待在熟悉的圈子？", en: "At events, do you meet new people or stick with your usual crew?" },
          options: [
            { text: { zh: "結交新朋友", en: "Meet new people" }, score: { E: 1 } },
            { text: { zh: "熟悉的圈子", en: "Usual crew" }, score: { I: 1 } }
          ] },
        // S/N 面向 (8題)
        { text: { zh: "幫社區做事，你會先解決眼前問題，還是想長遠計劃？", en: "When helping the community, do you tackle what’s in front of you or plan for the future?" },
          options: [
            { text: { zh: "解決眼前問題", en: "Tackle what’s now" }, score: { S: 1 } },
            { text: { zh: "想長遠計劃", en: "Plan for the future" }, score: { N: 1 } }
          ] },
        { text: { zh: "做事時，你靠過去的經驗，還是愛試新點子？", en: "When working, do you stick to what’s worked before or try fresh ideas?" },
          options: [
            { text: { zh: "靠經驗", en: "Stick to experience" }, score: { S: 1 } },
            { text: { zh: "試新點子", en: "Try new ideas" }, score: { N: 1 } }
          ] },
        { text: { zh: "你更在乎具體的成果，還是未來的可能性？", en: "Do you care more about real results now or possibilities for later?" },
          options: [
            { text: { zh: "現在的成果", en: "Results now" }, score: { S: 1 } },
            { text: { zh: "未來的可能性", en: "Future possibilities" }, score: { N: 1 } }
          ] },
        { text: { zh: "做事時，你會先看數據，還是跟著直覺走？", en: "When making decisions, do you look at data or go with your gut?" },
          options: [
            { text: { zh: "看數據", en: "Look at data" }, score: { S: 1 } },
            { text: { zh: "跟直覺", en: "Go with gut" }, score: { N: 1 } }
          ] },
        { text: { zh: "你喜歡按現實情況做事，還是腦補未來的畫面？", en: "Do you work based on reality or imagine future possibilities?" },
          options: [
            { text: { zh: "現實情況", en: "Reality" }, score: { S: 1 } },
            { text: { zh: "腦補未來", en: "Imagine future" }, score: { N: 1 } }
          ] },
        { text: { zh: "幫人時，你會先解決當下需求，還是想長遠影響？", en: "When helping, do you solve immediate needs or think about long-term impact?" },
          options: [
            { text: { zh: "當下需求", en: "Immediate needs" }, score: { S: 1 } },
            { text: { zh: "長遠影響", en: "Long-term impact" }, score: { N: 1 } }
          ] },
        { text: { zh: "你更愛用熟悉的方法，還是探索新方式？", en: "Do you prefer familiar methods or exploring new ways?" },
          options: [
            { text: { zh: "熟悉方法", en: "Familiar methods" }, score: { S: 1 } },
            { text: { zh: "探索新方式", en: "New ways" }, score: { N: 1 } }
          ] },
        { text: { zh: "做事時，你看重實際效果，還是創意靈感？", en: "When working, do you value practical results or creative inspiration?" },
          options: [
            { text: { zh: "實際效果", en: "Practical results" }, score: { S: 1 } },
            { text: { zh: "創意靈感", en: "Creative inspiration" }, score: { N: 1 } }
          ] },
        // T/F 面向 (8題)
        { text: { zh: "幫忙時，你更專注任務效率，還是大家的感受？", en: "When helping out, do you focus on getting it done or how everyone feels?" },
          options: [
            { text: { zh: "任務效率", en: "Get it done" }, score: { T: 1 } },
            { text: { zh: "大家的感受", en: "Everyone’s feelings" }, score: { F: 1 } }
          ] },
        { text: { zh: "做決定時，你靠邏輯分析，還是信仰和價值觀？", en: "When deciding, do you use logic or lean on faith and values?" },
          options: [
            { text: { zh: "邏輯分析", en: "Logic" }, score: { T: 1 } },
            { text: { zh: "信仰和價值觀", en: "Faith and values" }, score: { F: 1 } }
          ] },
        { text: { zh: "帶活動時，你看成果數字，還是參與者的反饋？", en: "When leading events, do you check results or care about feedback?" },
          options: [
            { text: { zh: "成果數字", en: "Results" }, score: { T: 1 } },
            { text: { zh: "參與者反饋", en: "Feedback" }, score: { F: 1 } }
          ] },
        { text: { zh: "有衝突時，你會先講公平，還是先安撫情緒？", en: "During conflicts, do you focus on fairness or soothing emotions?" },
          options: [
            { text: { zh: "講公平", en: "Fairness" }, score: { T: 1 } },
            { text: { zh: "安撫情緒", en: "Soothe emotions" }, score: { F: 1 } }
          ] },
        { text: { zh: "幫朋友時，你會分析問題，還是先聽他們的心聲？", en: "When helping friends, do you analyze their problems or listen to their hearts?" },
          options: [
            { text: { zh: "分析問題", en: "Analyze problems" }, score: { T: 1 } },
            { text: { zh: "聽心聲", en: "Listen to hearts" }, score: { F: 1 } }
          ] },
        { text: { zh: "做事時，你看重客觀事實，還是個人感受？", en: "When working, do you value objective facts or personal feelings?" },
          options: [
            { text: { zh: "客觀事實", en: "Objective facts" }, score: { T: 1 } },
            { text: { zh: "個人感受", en: "Personal feelings" }, score: { F: 1 } }
          ] },
        { text: { zh: "你會先考慮效率，還是先顧及團隊和諧？", en: "Do you prioritize efficiency or team harmony first?" },
          options: [
            { text: { zh: "效率優先", en: "Efficiency first" }, score: { T: 1 } },
            { text: { zh: "團隊和諧", en: "Team harmony" }, score: { F: 1 } }
          ] },
        { text: { zh: "分享信仰時，你會講道理，還是訴諸情感？", en: "When sharing faith, do you use logic or appeal to emotions?" },
          options: [
            { text: { zh: "講道理", en: "Use logic" }, score: { T: 1 } },
            { text: { zh: "訴諸情感", en: "Appeal to emotions" }, score: { F: 1 } }
          ] },
        // J/P 面向 (8題)
        { text: { zh: "你喜歡把計劃安排得超清楚，還是隨機應變？", en: "Do you like planning everything out or going with the flow?" },
          options: [
            { text: { zh: "超清楚計劃", en: "Plan everything" }, score: { J: 1 } },
            { text: { zh: "隨機應變", en: "Go with the flow" }, score: { P: 1 } }
          ] },
        { text: { zh: "做事時，你愛有明確分工，還是大家自由發揮？", en: "When working, do you want clear roles or let everyone do their thing?" },
          options: [
            { text: { zh: "明確分工", en: "Clear roles" }, score: { J: 1 } },
            { text: { zh: "自由發揮", en: "Do their thing" }, score: { P: 1 } }
          ] },
        { text: { zh: "活動中，你喜歡按表走，還是看情況調整？", en: "During events, do you stick to a schedule or adjust on the fly?" },
          options: [
            { text: { zh: "按表走", en: "Stick to schedule" }, score: { J: 1 } },
            { text: { zh: "看情況調整", en: "Adjust on the fly" }, score: { P: 1 } }
          ] },
        { text: { zh: "你會提前把細節弄好，還是現場解決問題？", en: "Do you prep all details or solve problems on the spot?" },
          options: [
            { text: { zh: "提前弄好", en: "Prep details" }, score: { J: 1 } },
            { text: { zh: "現場解決", en: "Solve on the spot" }, score: { P: 1 } }
          ] },
        { text: { zh: "你愛有明確的截止日期，還是開放式探索？", en: "Do you love clear deadlines or open-ended exploration?" },
          options: [
            { text: { zh: "明確截止日期", en: "Clear deadlines" }, score: { J: 1 } },
            { text: { zh: "開放式探索", en: "Open-ended exploration" }, score: { P: 1 } }
          ] },
        { text: { zh: "做事時，你會按步驟來，還是隨時調整方向？", en: "When working, do you follow steps or adjust direction anytime?" },
          options: [
            { text: { zh: "按步驟來", en: "Follow steps" }, score: { J: 1 } },
            { text: { zh: "隨時調整", en: "Adjust anytime" }, score: { P: 1 } }
          ] },
        { text: { zh: "你喜歡穩定的計劃，還是靈活的變化？", en: "Do you like stable plans or flexible changes?" },
          options: [
            { text: { zh: "穩定計劃", en: "Stable plans" }, score: { J: 1 } },
            { text: { zh: "靈活變化", en: "Flexible changes" }, score: { P: 1 } }
          ] },
        { text: { zh: "活動前，你會把一切安排好，還是看情況即興發揮？", en: "Before events, do you arrange everything or improvise as it goes?" },
          options: [
            { text: { zh: "安排好一切", en: "Arrange everything" }, score: { J: 1 } },
            { text: { zh: "即興發揮", en: "Improvise" }, score: { P: 1 } }
          ] }
    ];

    // **重要：圖片連結範例與說明**
    // 這裡的 'image' 屬性我暫時用編號 1-16 代表。
    // 當您將圖片上傳到公共圖床（例如 Imgur）後，您需要將這些數字替換為實際的圖片 URL。
    // 例如： image: "https://i.imgur.com/YOUR_INTJ_IMAGE.jpg"
    // 請不要使用 Google 相簿的分享連結，因為它們無法直接在網頁上顯示。
    const roles = {
        INTJ: { name: { zh: "超強規劃大神", en: "Master Planner" }, category: { zh: "智囊團", en: "Thinkers" },
          description: { zh: "你是個有遠見的策略家，像保羅一樣，總能看到大格局，愛規劃大事，還能預測問題並解決！超適合帶領大型宣教計劃。", en: "You’re a visionary strategist like Paul, always seeing the big picture, planning big, and solving problems before they happen! Perfect for leading major mission plans." },
          tasks: { zh: "策劃大項目、分析環境、設計事工藍圖。", en: "Plan big projects, analyze environments, design ministry blueprints." },
          character: { zh: "保羅", en: "Paul" }, reason: { zh: "保羅超會規劃，像是決定去羅馬（使徒行傳19:21），還能在雅典用文化講道（使徒行傳17:22-31），超像你！", en: "Paul was a master planner, like deciding to go to Rome (Acts 19:21) and preaching culturally in Athens (Acts 17:22-31), just like you!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753698907/Paul_pvfedj.jpg" // 替換為實際圖片URL，例如: "https://i.imgur.com/INTJ_image.jpg"
        },
        INTP: { name: { zh: "腦洞分析王", en: "Insight Geek" }, category: { zh: "智囊團", en: "Thinkers" },
          description: { zh: "你愛鑽研問題，總能想到新點子，適合研究文化或設計酷炫的宣教方法。", en: "You love diving into problems and coming up with fresh ideas, perfect for researching cultures or designing cool mission methods." },
          tasks: { zh: "研究當地文化、設計新工具、提供數據。", en: "Research cultures, design tools, provide data." },
          character: { zh: "迦瑪列", en: "Gamaliel" }, reason: { zh: "迦瑪列冷靜分析，給猶太公會出主意（使徒行傳5:34-39），跟你一樣聰明！", en: "Gamaliel calmly analyzes and advises the Sanhedrin (Acts 5:34-39), just like your sharp mind!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753698895/Gamaliel_kd6eh3.jpg" // 替換為實際圖片URL
        },
        ENTJ: { name: { zh: "霸氣領袖", en: "Bold Leader" }, category: { zh: "智囊團", en: "Thinkers" },
          description: { zh: "你是天生的領袖，超會帶隊，激勵大家把目標實現！適合帶領宣教團隊。", en: "You’re a born leader, great at rallying teams to hit goals! Perfect for leading mission squads." },
          tasks: { zh: "帶隊、分配資源、定行動計劃。", en: "Lead teams, allocate resources, set action plans." },
          character: { zh: "雅各", en: "James" }, reason: { zh: "雅各在會議中果斷拍板（使徒行傳15:13-21），跟你一樣有領導力！", en: "James makes bold decisions at the council (Acts 15:13-21), just like your leadership!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833762/James_xgpcaa.jpg" // 替換為實際圖片URL
        },
        ENTP: { name: { zh: "創意冒險家", en: "Idea Maverick" }, category: { zh: "智囊團", en: "Thinkers" },
          description: { zh: "你腦子裡全是新點子，愛挑戰老方法，超適合在亂七八糟的環境中找到新路！", en: "Your brain’s full of new ideas, and you love breaking old rules, perfect for finding new paths in messy situations!" },
          tasks: { zh: "搞創意活動、試新方法、解決突發問題。", en: "Run creative events, try new methods, solve sudden issues." },
          character: { zh: "亞波羅", en: "Apollos" }, reason: { zh: "亞波羅用超有創意的方式講福音（使徒行傳18:24-28），跟你一樣有想法！", en: "Apollos preaches creatively (Acts 18:24-28), just like your innovative vibe!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833737/Apollos_fulbwb.jpg" // 替換為實際圖片URL
        },
        INFJ: { name: { zh: "心靈導師", en: "Soul Mentor" }, category: { zh: "陪伴者", en: "Guides" },
          description: { zh: "你超會讀懂人心，擅長一對一聊天，幫別人找到信仰方向。", en: "You’re great at reading hearts, perfect for one-on-one chats to guide people toward faith." },
          tasks: { zh: "帶個人靈修、輔導朋友、寫暖心內容。", en: "Lead personal devotions, counsel friends, write heartfelt content." },
          character: { zh: "巴拿巴", en: "Barnabas" }, reason: { zh: "巴拿巴總是鼓勵別人（使徒行傳11:22-26），跟你一樣暖！", en: "Barnabas always encourages others (Acts 11:22-26), just like your warmth!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833746/Barnabas_a9iwzy.jpg" // 替換為實際圖片URL
        },
        INFP: { name: { zh: "夢想傳播者", en: "Dream Spreader" }, category: { zh: "陪伴者", en: "Guides" },
          description: { zh: "你用真心分享信仰，激勵大家追夢，適合寫故事或分享感動。", en: "You share faith with heart, inspiring others to chase dreams, great for storytelling or sharing touching moments." },
          tasks: { zh: "寫故事、創作詩歌、分享信仰經歷。", en: "Write stories, create poetry, share faith experiences." },
          character: { zh: "約翰馬可", en: "John Mark" }, reason: { zh: "約翰馬可寫馬可福音，傳遞信仰（使徒行傳13:5），跟你一樣有夢想！", en: "John Mark writes the Gospel of Mark (Acts 13:5), just like your dreamy vibe!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833779/John_Mark_fc5unm.jpg" // 替換為實際圖片URL
        },
        ENFJ: { name: { zh: "魅力帶頭人", en: "Charismatic Leader" }, category: { zh: "陪伴者", en: "Guides" },
          description: { zh: "你超會帶動氣氛，激勵大家一起參與，適合帶小組或分享會。", en: "You’re awesome at creating vibes and inspiring people, perfect for leading groups or sharing sessions." },
          tasks: { zh: "帶小組、培訓新人、辦分享會。", en: "Lead groups, train newbies, host sharing events." },
          character: { zh: "彼得", en: "Peter" }, reason: { zh: "彼得用熱情帶領大家（使徒行傳2:14-41），跟你一樣有魅力！", en: "Peter leads with passion (Acts 2:14-41), just like your charisma!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833154/Peter_dftawk.jpg" // 替換為實際圖片URL
        },
        ENFP: { name: { zh: "活力連結者", en: "Vibe Connector" }, category: { zh: "陪伴者", en: "Guides" },
          description: { zh: "你像個快樂傳播者，超會跟不同人打交道，帶來信仰的正能量！", en: "You’re a joy spreader, great at connecting with all kinds of people, bringing faith’s positive energy!" },
          tasks: { zh: "辦社區活動、拉新朋友、推廣信仰。", en: "Run community events, connect with new friends, promote faith." },
          character: { zh: "腓利", en: "Philip" }, reason: { zh: "腓利跟各種人分享福音（使徒行傳8:4-8），跟你一樣有活力！", en: "Philip shares with everyone (Acts 8:4-8), just like your energy!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833176/Philip_shpz22.jpg" // 替換為實際圖片URL
        },
        ISTJ: { name: { zh: "靠譜執行者", en: "Reliable Doer" }, category: { zh: "行動派", en: "Doers" },
          description: { zh: "你超靠譜，總把事情安排得妥妥的，適合管後勤或保持秩序。", en: "You’re super reliable, always getting things done right, perfect for logistics or keeping things in order." },
          tasks: { zh: "管錢、安排日程、確保物資到位。", en: "Manage funds, schedule events, ensure resources are ready." },
          character: { zh: "亞拿尼亞", en: "Ananias" }, reason: { zh: "亞拿尼亞穩穩完成神的任務（使徒行傳9:10-19），跟你一樣靠譜！", en: "Ananias gets God’s tasks done (Acts 9:10-19), just like your reliability!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833193/Ananias_e3ouqw.jpg" // 替換為實際圖片URL
        },
        ISFJ: { name: { zh: "暖心守護者", en: "Heartfelt Helper" }, category: { zh: "行動派", en: "Doers" },
          description: { zh: "你超溫暖，總是默默幫人，適合做慈善或關心別人。", en: "You’re super warm, always helping quietly, great for charity or caring for others." },
          tasks: { zh: "探訪朋友、辦慈善活動、給情感支持。", en: "Visit friends, run charity events, offer emotional support." },
          character: { zh: "多加", en: "Tabitha/Dorcas" }, reason: { zh: "多加默默幫窮人（使徒行傳9:36-39），跟你一樣有愛心！", en: "Tabitha quietly helps the poor (Acts 9:36-39), just like your kindness!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833141/Dorcas_c88zjg.jpg" // 替換為實際圖片URL
        },
        ESTJ: { name: { zh: "秩序大佬", en: "Order Boss" }, category: { zh: "行動派", en: "Doers" },
          description: { zh: "你超會組織，確保一切順利，適合管團隊或項目進度。", en: "You’re great at organizing, making sure everything runs smoothly, perfect for managing teams or progress." },
          tasks: { zh: "監督項目、帶志工、確保活動順利。", en: "Oversee projects, lead volunteers, ensure events go well." },
          character: { zh: "哥尼流", en: "Cornelius" }, reason: { zh: "哥尼流有條理地做事（使徒行傳10:1-8），跟你一樣有秩序！", en: "Cornelius organizes things well (Acts 10:1-8), just like your orderliness!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833205/Cornelius_hsnsv8.jpg" // 替換為實際圖片URL
        },
        ESFJ: { name: { zh: "社群暖男/暖女", en: "Community Star" }, category: { zh: "行動派", en: "Doers" },
          description: { zh: "你愛打造溫暖的社群，讓大家團結，適合推廣信仰。", en: "You love building warm communities, uniting people, great for spreading faith." },
          tasks: { zh: "辦社區活動、拉新朋友、關心新人。", en: "Run community events, connect with new friends, care for newbies." },
          character: { zh: "呂底亞", en: "Lydia" }, reason: { zh: "呂底亞用好客打造教會（使徒行傳16:14-15），跟你一樣暖！", en: "Lydia builds a church with hospitality (Acts 16:14-15), just like your warmth!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753833133/Lydia_pipxm7.jpg" // 替換為實際圖片URL
        },
        ISTP: { name: { zh: "實幹冒險家", en: "Action Hero" }, category: { zh: "開拓者", en: "Trailblazers" },
          description: { zh: "你超會解決問題，現場應變無敵，適合實地行動。", en: "You’re awesome at fixing problems and adapting on the spot, perfect for fieldwork." },
          tasks: { zh: "搞技術、應對危機、實地做事。", en: "Handle tech, tackle crises, do fieldwork." },
          character: { zh: "西拉", en: "Silas" }, reason: { zh: "西拉適應力超強（使徒行傳15:40-16:25），跟你一樣實幹！", en: "Silas adapts fast (Acts 15:40-16:25), just like your action style!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753698921/Silas_kx2y3w.jpg" // 替換為實際圖片URL
        },
        ISFP: { name: { zh: "藝術傳播者", en: "Creative Soul" }, category: { zh: "開拓者", en: "Trailblazers" },
          description: { zh: "你用音樂或藝術傳遞信仰，超會感動人！", en: "You spread faith through music or art, super touching!" },
          tasks: { zh: "創作藝術、帶敬拜、設計視覺。", en: "Create art, lead worship, design visuals." },
          character: { zh: "大衛", en: "David" }, reason: { zh: "大衛用詩歌表達信仰（使徒行傳13:22），跟你一樣有創意！", en: "David expresses faith through poetry (Acts 13:22), just like your creativity!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753698886/David_aotbua.jpg" // 替換為實際圖片URL
        },
        ESTP: { name: { zh: "行動先鋒", en: "Bold Trailblazer" }, category: { zh: "開拓者", en: "Trailblazers" },
          description: { zh: "你行動超快，敢闖新地方，適合街頭或新環境傳福音。", en: "You act fast and dive into new places, great for street or new environment outreach." },
          tasks: { zh: "辦即興活動、開拓新機會、應對突發狀況。", en: "Run impromptu events, explore new opportunities, handle surprises." },
          character: { zh: "司提反", en: "Stephen" }, reason: { zh: "司提反大膽傳福音（使徒行傳6:8-7:60），跟你一樣勇敢！", en: "Stephen boldly preaches (Acts 6:8-7:60), just like your courage!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753698942/Stephen_hc0pfz.jpg" // 替換為實際圖片URL
        },
        ESFP: { name: { zh: "快樂傳播者", en: "Joyful Star" }, category: { zh: "開拓者", en: "Trailblazers" },
          description: { zh: "你像個快樂製造機，超會帶動氣氛，適合公開場合傳福音！", en: "You’re a joy machine, great at creating vibes, perfect for sharing faith in public!" },
          tasks: { zh: "主持活動、帶青年團、推廣信仰。", en: "Host events, lead youth groups, spread faith." },
          character: { zh: "百基拉", en: "Priscilla" }, reason: { zh: "百基拉用熱情教導（使徒行傳18:2-26），跟你一樣快樂！", en: "Priscilla teaches with joy (Acts 18:2-26), just like your vibe!" },
          image: "https://res.cloudinary.com/duvcvktsy/image/upload/v1753698469/myedit_image_generator_0727174608_nelcdi.jpg" // 替換為實際圖片URL
        }
    };

    let currentQuestionIndex = 0; // 修改變量名稱以避免混淆
    let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    let userData = {};
    let quizAnswers = {}; // 用於儲存每個問題的答案

    // 獲取所有需要的 DOM 元素
    const startScreen = document.getElementById('start-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultScreen = document.getElementById('result-screen');

    const startQuizBtn = document.getElementById('startQuizBtn'); // 開始測驗按鈕
    const option1Btn = document.getElementById('option1');        // 選項1按鈕
    const option2Btn = document.getElementById('option2');        // 選項2按鈕
    const restartQuizBtn = document.getElementById('restartQuizBtn'); // 再玩一次按鈕

    const questionNumberEl = document.getElementById('question-number');
    const questionTextEl = document.getElementById('question-text');
    const progressEl = document.getElementById('progress');
    const roleImageEl = document.getElementById('role-image');
    const userInfoEl = document.getElementById('user-info');
    const resultContentEl = document.getElementById('result-content');

    // 最終提交到 Netlify 的表單和隱藏欄位
    const finalSubmitForm = document.getElementById('final-submit-form');
    const finalName = document.getElementById('final-name');
    const finalEmail = document.getElementById('final-email');
    const finalAge = document.getElementById('final-age');
    const finalGender = document.getElementById('final-gender');
    const finalMbti = document.getElementById('final-mbti');
    const finalRole = document.getElementById('final-role');
    const finalCategory = document.getElementById('final-category');
    const questionAnswersHiddenDiv = document.getElementById('question-answers-hidden');

    // --- 事件監聽器 ---

    // 1. 「開始測驗」按鈕點擊事件
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;

            if (!name || !email || !age || !gender) {
                alert('嘿，別漏填東西哦！ / Please fill in all fields!');
                return;
            }

            userData = { name, email, age, gender }; // 儲存使用者資料

            startScreen.classList.add('hidden');
            questionScreen.classList.remove('hidden');
            showQuestion(); // 顯示第一個問題
        });
    }

    // 2. 選項按鈕點擊事件
    if (option1Btn) {
        option1Btn.addEventListener('click', function() {
            selectOption(1);
        });
    }
    if (option2Btn) {
        option2Btn.addEventListener('click', function() {
            selectOption(2);
        });
    }

    // 3. 「再玩一次」按鈕點擊事件
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', function() {
            restartQuiz();
        });
    }

    // --- 函數定義 ---

    // 顯示問題
    function showQuestion() {
        const q = questions[currentQuestionIndex];
        questionNumberEl.innerHTML = `問題 ${currentQuestionIndex + 1} / ${questions.length}`;
        questionTextEl.innerHTML = `${q.text.zh}<br>${q.text.en}`;
        option1Btn.innerHTML = `${q.options[0].text.zh}<br>${q.options[0].text.en}`;
        option2Btn.innerHTML = `${q.options[1].text.zh}<br>${q.options[1].text.en}`;
        progressEl.innerHTML = `還差 ${questions.length - currentQuestionIndex - 1} 題 / ${questions.length - currentQuestionIndex - 1} questions left`;
    }

    // 選擇選項並計算分數
    function selectOption(optionIndex) {
        const q = questions[currentQuestionIndex];
        const selectedOption = q.options[optionIndex - 1];
        const score = selectedOption.score;

        // 記錄答案
        quizAnswers[`q${currentQuestionIndex + 1}`] = selectedOption.text.zh;

        for (let key in score) {
            scores[key] += score[key];
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult(); // 所有問題都答完，顯示結果
        }
    }

    // 顯示測驗結果
    function showResult() {
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');

        // 計算 MBTI 類型
        const type = (scores.E >= scores.I ? 'E' : 'I') +
                     (scores.S >= scores.N ? 'S' : 'N') +
                     (scores.T >= scores.F ? 'T' : 'F') +
                     (scores.J >= scores.P ? 'J' : 'P');
        const role = roles[type];

        // 顯示圖片（這裡會直接使用 image 編號）
        // **您需要手動將此處的數字替換為實際的圖片 URL！**
        // 例如：roleImageEl.src = `https://your-image-hosting.com/images/role-${role.image}.jpg`;
        roleImageEl.src = role.image; // 這是暫時的佔位符
        roleImageEl.alt = role.name.zh; // 圖片的alt文本

        // 顯示使用者資訊和結果內容
        userInfoEl.innerHTML = `你好，<strong>${userData.name}</strong>！<br>
                                 你的Email是：<strong>${userData.email}</strong><br>
                                 你的年紀是：<strong>${userData.age}</strong>，性別：<strong>${userData.gender}</strong>`;

        resultContentEl.innerHTML = `
            <p><strong>MBTI 類型：</strong> ${type}</p>
            <p><strong>宣教超能力：</strong> ${role.name.zh} (${role.name.en})</p>
            <p><strong>類別：</strong> ${role.category.zh}</p>
            <p><strong>描述：</strong> ${role.description.zh}</p>
            <p><strong>你可以做：</strong> ${role.tasks.zh}</p>
            <p><strong>聖經人物：</strong> ${role.character.zh}</p>
            <p><strong>理由：</strong> ${role.reason.zh}</p>
        `;

        // 填充隱藏表單以提交到 Netlify
        finalName.value = userData.name;
        finalEmail.value = userData.email;
        finalAge.value = userData.age;
        finalGender.value = userData.gender;
        finalMbti.value = type;
        finalRole.value = role.name.zh;
        finalCategory.value = role.category.zh;

        // 清空之前的問題答案隱藏輸入
        questionAnswersHiddenDiv.innerHTML = '';
        // 將每個問題的答案作為隱藏輸入添加到表單
        for (const [key, value] of Object.entries(quizAnswers)) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key; // q1, q2, q3...
            input.value = value;
            questionAnswersHiddenDiv.appendChild(input);
        }

        // 手動提交表單到 Netlify
        // Netlify Forms 會捕捉這個提交
        fetch(finalSubmitForm.action, {
            method: finalSubmitForm.method,
            body: new FormData(finalSubmitForm)
        })
        .then(() => {
            console.log('數據已成功提交到 Netlify！');
            // 可以在這裡顯示一個成功的訊息，如果需要
        })
        .catch(error => {
            console.error('數據提交到 Netlify 失敗:', error);
            // 可以在這裡處理錯誤，如果需要
        });
    }

    // 重新測驗
    function restartQuiz() {
        currentQuestionIndex = 0;
        scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        userData = {};
        quizAnswers = {};

        // 清空輸入框
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('age').value = '';
        document.getElementById('gender').value = ''; // 重置性別選擇

        resultScreen.classList.add('hidden');
        startScreen.classList.remove('hidden'); // 回到起始畫面
    }
});
