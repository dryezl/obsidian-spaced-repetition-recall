// 繁體中文

export default {
    // flashcard-modal.tsx
    DECKS: "牌組",
    DUE_CARDS: "到期卡片",
    NEW_CARDS: "新卡片",
    TOTAL_CARDS: "全部卡片",
    BACK: "返回",
    SKIP: "略過",
    EDIT_CARD: "編輯卡片",
    RESET_CARD_PROGRESS: "重置卡片",
    RESET: "重来",
    HARD: "較難",
    GOOD: "記得",
    EASY: "簡單",
    SHOW_ANSWER: "顯示答案",
    CARD_PROGRESS_RESET: "卡片已被重置。",
    SAVE: "儲存",
    CANCEL: "取消",
    NO_INPUT: "沒有提供輸入。",
    CURRENT_EASE_HELP_TEXT: "目前掌握程度：",
    CURRENT_INTERVAL_HELP_TEXT: "目前間隔時間：",
    CARD_GENERATED_FROM: "生成自：${notePath}",
    OPEN_NOTE: "打開筆記",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "打開一個筆記開始復習",
    REVIEW_CARDS: "復習卡片",
    REVIEW_DIFFICULTY_FILE_MENU: "復習：${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "標記為「${difficulty}」",
    REVIEW_CARDS_IN_NOTE: "復習此筆記中的卡片",
    CRAM_ALL_CARDS: "選擇要不計難易度復習的牌組",
    REVIEW_ALL_CARDS: "復習所有筆記中的卡片",
    CRAM_CARDS_IN_NOTE: "不計難易度復習此筆記中的卡片",
    VIEW_STATS: "檢視數據",
    OPEN_REVIEW_QUEUE_VIEW: "打開側邊欄的筆記復習序列",
    STATUS_BAR: "復習: ${dueNotesCount} 筆記, ${dueFlashcardsCount} 卡片已到期",
    SYNC_TIME_TAKEN: "同步時間 ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "筆記儲存在已被忽略的路徑中（檢查設定選項）。",
    NOTE_IN_IGNORED_TAGS: "儲存的筆記带有已被忽略的標籤（檢查設定選項）。",
    PLEASE_TAG_NOTE: "請將需要復習的筆記中加入正確的標籤（檢查設定選項）。",
    RESPONSE_RECEIVED: "回饋已收到",
    NO_DECK_EXISTS: "沒有 ${deckName} 牌組",
    ALL_CAUGHT_UP: "都復習完啦，你真棒！",

    // scheduling.ts
    DAYS_STR_IVL: "${interval}天",
    MONTHS_STR_IVL: "${interval}月",
    YEARS_STR_IVL: "${interval}年",
    DAYS_STR_IVL_MOBILE: "${interval}天",
    MONTHS_STR_IVL_MOBILE: "${interval}月",
    YEARS_STR_IVL_MOBILE: "${interval}年",
    HOURS_STR_IVL: "${interval}小時",
    MINUTES_STR_IVL: "${interval}分鐘",
    HOURS_STR_IVL_MOBILE: "${interval}時",
    MINUTES_STR_IVL_MOBILE: "${interval}分",

    // settings.ts
    SETTINGS_HEADER: "間隔重複外掛 - 設定",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: '瞭解更多, 請點選<a href="${wiki_url}">wiki</a>.',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussions_url}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an issue <a href="${issues_url}">here</a> if you have a feature request or a bug-report.',
    GITHUB_SOURCE_CODE:
        'Project source code available on <a href="${github_project_url}">GitHub</a>',
    CODE_CONTRIBUTION_INFO:
        'Information on <a href="${code_contribution_url}">code contributions</a>',
    TRANSLATION_CONTRIBUTION_INFO:
        'Information on <a href="${translation_contribution_url}">translating the plugin</a> to your language',
    PROJECT_CONTRIBUTIONS:
        'Raise an issue <a href="${issues_url}">here</a> if you have a feature request or a bug-report',
    FOLDERS_TO_IGNORE: "忽略此資料夾",
    FOLDERS_TO_IGNORE_DESC: `輸入資料夾路徑（用換行字元分隔），例如：Templates Meta/Scripts.
Note that this setting is common to both Flashcards and Notes.`,
    TAGS_TO_IGNORE: "忽略此標籤",
    TAGS_TO_IGNORE_DESC: `輸入標籤，用換行字元分隔，例如： #excalidraw .
注意闪卡與筆記共用該項設置。`,
    FLASHCARDS: "卡片",
    FLASHCARD_EASY_LABEL: "簡單按鈕文字",
    FLASHCARD_GOOD_LABEL: "記得按鈕文字",
    FLASHCARD_HARD_LABEL: "較難按鈕文字",
    FLASHCARD_EASY_DESC: "自訂「簡單」按鈕的標籤",
    FLASHCARD_GOOD_DESC: "自訂「記得」按鈕的標籤",
    FLASHCARD_HARD_DESC: "自訂「較難」按鈕的標籤",
    FLASHCARD_TAGS: "卡片標籤",
    FLASHCARD_TAGS_DESC: "輸入標籤（用空白或換行字元分隔），例如：#flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "是否將資料夾內容轉換為牌組和子牌組？",
    CONVERT_FOLDERS_TO_DECKS_DESC: "此選項為卡片標籤選項的替代選項。",
    INLINE_SCHEDULING_COMMENTS: "是否將計劃重複時間儲存在卡片最後一行的同一行？",
    INLINE_SCHEDULING_COMMENTS_DESC: "勾選後HTML註解不會破壞列表格式問題。",
    BURY_SIBLINGS_TILL_NEXT_DAY: "將反轉卡片隱藏至下一天？",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC: "反轉卡片由同一卡片文字產生，例如：填空克漏字",
    MULTI_CLOZE: "允許多個完形填空?",
    MULTI_CLOZE_DESC: "將新/到期的關聯卡片組合到一個卡片中.",
    SHOW_CARD_CONTEXT: "在卡片中顯示上下文？",
    SHOW_CARD_CONTEXT_DESC: "例如：標題 > 副標題 > 小標題 > ... > 小標題",
    CARD_MODAL_HEIGHT_PERCENT: "卡片高度百分比",
    CARD_MODAL_SIZE_PERCENT_DESC: "在移動端或需要較大圖片時應設定為100%",
    RESET_DEFAULT: "重置為預設值",
    CARD_MODAL_WIDTH_PERCENT: "卡片寬度百分比",
    RANDOMIZE_CARD_ORDER: "復習時隨機顯示卡片？",
    REVIEW_CARD_ORDER_WITHIN_DECK: "復習時牌組內的卡片排序",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "牌組內順序 (全部新卡片優先)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL: "牌組內順序 (全部到期卡片優先)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "牌組內亂序 (全部新卡片優先)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "牌組內亂序 (全部到期卡片優先)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "牌組及卡片都亂序",
    REVIEW_DECK_ORDER: "復習時牌組的排序",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL: "順序 (在前一牌組內卡片都復習完後)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM: "亂序 (在前一牌組內卡片都復習完後)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "牌組及卡片都亂序",
    DISABLE_CLOZE_CARDS: "停用填空克漏字卡片？",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "將 ==高亮== 轉換為填空克漏字？",
    CONVERT_BOLD_TEXT_TO_CLOZES: "將 **粗體** 轉換為填空克漏字？",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "將 {{大括號}} 轉換為填空克漏字？",
    INLINE_CARDS_SEPARATOR: "單行卡片的分隔字元",
    FIX_SEPARATORS_MANUALLY_WARNING: "注意：更改此選項後你將需要自行更改已存在卡片的分隔字元。",
    INLINE_REVERSED_CARDS_SEPARATOR: "單行反轉卡片的分隔字元",
    MULTILINE_CARDS_SEPARATOR: "多行卡片的分隔字元",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "多行翻轉卡片的分隔字元",
    MULTILINE_CARDS_END_MARKER: "表示填空和多行闪卡结束的字符",
    NOTES: "筆記",
    REVIEW_PANE_ON_STARTUP: "啟動時開啟筆記復習窗格",
    TAGS_TO_REVIEW: "復習標籤",
    TAGS_TO_REVIEW_DESC: "輸入標籤，用空格或換行字元分隔，例如：#review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "復習隨機筆記",
    OPEN_RANDOM_NOTE_DESC: "關閉此選項，筆記將以重要度(PageRank)排序。",
    AUTO_NEXT_NOTE: "復習後自動打開下一個筆記",
    DISABLE_FILE_MENU_REVIEW_OPTIONS: "關閉檔案選單中的復習選項 例如：復習：簡單 記得 較難",
    DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC: "關閉檔案選單的復習選項，例如：復習: 簡單 記得 較難。",
    MAX_N_DAYS_REVIEW_QUEUE: "右邊面板顯示的最大天數",
    MIN_ONE_DAY: "天數最小值為1",
    VALID_NUMBER_WARNING: "請輸入有效的數字。",
    UI_PREFERENCES: "用戶介面首選項",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "牌組樹最初應顯示為展開",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "關閉此選項可摺疊同一張卡片中的巢狀牌組。如果您的卡片屬於同一檔案中的許多套牌，則很有用。",
    ALGORITHM: "演算法",
    CHECK_ALGORITHM_WIKI: '瞭解更多, 請點選<a href="${algo_url}">算法實現</a>.',
    BASE_EASE: "基礎掌握程度",
    BASE_EASE_DESC: "最小值130，推薦值約250.",
    BASE_EASE_MIN_WARNING: "基礎掌握程度的最小值為130。",
    LAPSE_INTERVAL_CHANGE: "將復習時標註為「較難」的卡片或筆記復習間隔縮短",
    LAPSE_INTERVAL_CHANGE_DESC: "新復習間隔 = 原復習間隔 * 間隔改變係數 / 100.",
    EASY_BONUS: "簡單獎勵",
    EASY_BONUS_DESC: "簡單獎勵設定「記得」和「簡單」卡片或筆記的復習間隔差距（最小值100%）。",
    EASY_BONUS_MIN_WARNING: "簡單獎勵至少為100。",
    MAX_INTERVAL: "最大間隔（天）",
    MAX_INTERVAL_DESC: "設定復習的最大間隔時間（預設值100年）。",
    MAX_INTERVAL_MIN_WARNING: "最大間隔至少為1天",
    MAX_LINK_CONTRIB: "最大鏈接貢獻",
    MAX_LINK_CONTRIB_DESC: "鏈接筆記的加權掌握程度對原始掌握程度的最大貢獻。",
    FUZZING: "均衡",
    FUZZING_DESC: "啟用時, 會給新間隔添加個較小的隨機延遲，以免卡片總被堆積在同一天復習。",
    SWITCH_SHORT_TERM: "短期排程",
    SWITCH_SHORT_TERM_DESC:
        "禁用時，可讓用戶跳過短期排程(如5分鐘、10分鐘)，直接切換到長期排程（如3天、5天）。",
    LOGGING: "記錄中",
    DISPLAY_DEBUG_INFO: "在開發者控制台中顯示除錯資訊",
    DISPLAY_PARSER_DEBUG_INFO:
        "Display debugging information for the parser on the developer console",

    DATA_LOC: "數據位置",
    DATA_LOC_DESC: "間隔重複資料項目的檔的保存位置.",
    DATA_FOLDER: "`tracked_files.json`的檔夾",
    NEW_PER_DAY: "每天新增重複的數量",
    NEW_PER_DAY_DESC: "每天要添加到佇列中的新（未重複過的）筆記的最大數量。設置爲`-1`則無限制",
    NEW_PER_DAY_NAN: "必須是整數",
    NEW_PER_DAY_NEG: "整數必須大於等於-1.",
    REPEAT_ITEMS: "重複錯誤",
    REPEAT_ITEMS_DESC: "錯誤項是否要一直重複復習，直到回答正確?",
    ALGORITHMS_CONFIRM:
        "切換演算法可能導致日期排程重置，這個修改不可撤銷，當重啟軟體或重新加載插件切換演算法才會生效。你確定要切換演算法麼?",
    ALGORITHMS_DESC:
        '用於間隔重複的演算法. 更多資訊請查閱 <a href="https://github.com/martin-jw/obsidian-recall">演算法</a>.',
    CONVERT_TRACKED_TO_DECK: "將復習筆記轉換為卡牌組?",
    REVIEW_FLOATBAR: "復習懸浮欄",
    REVIEW_FLOATBAR_DESC:
        "當設置項“復習後自動打開下一個筆記”啟用時，這個設置項啟用才生效. 通過點擊狀態欄/側邊欄/命令進行復習時就會顯示出來.",
    REVIEW_NOTE_DIRECTLY: "直接復習筆記?",
    REVIEW_NOTE_DIRECTLY_DESC: "復習筆記時, 不必選擇標籤（多個復習標籤的情況）就直接打開筆記",
    INTERVAL_SHOWHIDE: "顯示復習間隔",
    INTERVAL_SHOWHIDE_DESC: "是否在按鍵上顯示復習間隔",
    REQUEST_RETENTION: "保留度",
    REQUEST_RETENTION_DESC: "在下次進行復習時，你期望能回想起答案的概率（百分比）",
    REVLOG_TAGS: "輸出到日誌的標籤",
    REVLOG_TAGS_DESC:
        "用於輸出到日誌的標籤, 卡片或筆記的標籤（如#review #flashcards #tag1）都行。默認留空則不按標籤區分，都正常輸出到日誌表格",

    FLASHCARD_AGAIN_LABEL: "重來 按鈕文本",
    FLASHCARD_BLACKOUT_LABEL: "忘記 按鈕文本",
    FLASHCARD_INCORRECT_LABEL: "猜錯 按鈕文本",
    "FLASHCARD_INCORRECT (EASY)_LABEL": "猜錯（簡單） 按鈕文本",
    FLASHCARD_AGAIN_DESC: "自定義“重來”按鈕的標籤",
    FLASHCARD_BLACKOUT_DESC: "自定義“忘記”按鈕的標籤",
    FLASHCARD_INCORRECT_DESC: "自定義“猜錯”按鈕的標籤",
    "FLASHCARD_INCORRECT (EASY)_DESC": "自定義“猜錯（簡單）”按鈕的標籤",
    UNTRACK_WITH_REVIEWTAG: "UntrackWithReviewTag",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "筆記復習序列",
    CLOSE: "臨近",
    NEW: "新",
    YESTERDAY: "昨天",
    TODAY: "今天",
    TOMORROW: "明天",

    // stats-modal.tsx
    STATS_TITLE: "統計",
    MONTH: "月",
    QUARTER: "季",
    YEAR: "年",
    LIFETIME: "全部",
    FORECAST: "預測",
    FORECAST_DESC: "將要到期的卡片數量",
    SCHEDULED: "已排程",
    DAYS: "天",
    NUMBER_OF_CARDS: "卡片數量",
    REVIEWS_PER_DAY: "平均: 復習${avg} /天",
    INTERVALS: "間隔",
    INTERVALS_DESC: "到下一次復習的時間間隔",
    COUNT: "計數",
    INTERVALS_SUMMARY: "平均間隔時間: ${avg}, 最長間隔時間: ${longest}",
    EASES: "掌握程度",
    EASES_SUMMARY: "平均掌握程度: ${avgEase}",
    CARD_TYPES: "卡片型別",
    CARD_TYPES_DESC: "如有，將顯示隱藏的卡片",
    CARD_TYPE_NEW: "新",
    CARD_TYPE_YOUNG: "較新",
    CARD_TYPE_MATURE: "熟悉",
    CARD_TYPES_SUMMARY: "總卡片數: ${totalCardsCount}",
    REVIEWED_TODAY: "今天復習情況",
    REVIEWED_TODAY_DESC: "今天已經復習的卡片/筆記的數量",
    NEW_LEARNED: "新學",
    DUE_REVIEWED: "復習",
    REVIEWED_TODAY_SUMMARY: "總復習數: ${totalreviewedCount}",
    DATE: "日期",
};
