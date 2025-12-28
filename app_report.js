"use strict";

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

let result_beta = [
    [
        {year:2025, semester:1, name:"情報工学概論", teacher:"信川創", subteacher:["中村直人", "有本泰子", "関根晃太", "水本旭洋", "大西隆之"], date:[["月", 1], ["月", 2]], room:"3212", credit:2, grade:"B"},
        {year:2025, semester:1, name:"英語理解１", teacher:"小田井勝彦", subteacher:[], date:[["月", 3], ["月", 4]], room:"5105", credit:1, grade:"S"},
        {year:2025, semester:1, name:"言語と文化１ドイツ語", teacher:"髙松佑介", subteacher:[], date:[["月", 6], ["月", 7]], room:"5303", credit:2, grade:"S"},
        {year:2025, semester:1, name:"環境科学概論", teacher:"笠嶋義夫", subteacher:[], date:[["火", 1], ["火", 2]], room:"7201", credit:2, grade:"S"},
        {year:2025, semester:1, name:"日本語表現法", teacher:"本橋龍晃", subteacher:[], date:[["火", 3], ["火", 4]], room:"5304", credit:1, grade:"S"},
        {year:2025, semester:1, name:"プログラミング言語", teacher:"須田宇宙", subteacher:[], date:[["火", 6], ["火", 7]], room:"3212", credit:2, grade:"A"},
        {year:2025, semester:1, name:"フィジカルコンピューティング", teacher:"水本旭洋", subteacher:[], date:[["火", 8], ["火", 9]], room:"3212", credit:2, grade:"S"},
        {year:2025, semester:1, name:"論理回路", teacher:"鎌倉浩嗣", subteacher:[], date:[["水", 1], ["水", 2]], room:"7103", credit:2, grade:"S"},
        {year:2025, semester:1, name:"英語表現１", teacher:"布川由美子", subteacher:[], date:[["水", 3], ["水", 4]], room:"5205", credit:1, grade:"S"},
        {year:2025, semester:1, name:"アイディアソン", teacher:"信川創", subteacher:["須田宇宙", "中村直人"], date:[["水", 6], ["水", 7], ["水", 8], ["水", 9]], room:"3212", credit:2, grade:"A"},
        {year:2025, semester:1, name:"数理・データサイエンス・AI入門", teacher:"内田洋行 能町講師", subteacher:["角張健一"], date:[["木", 1], ["木", 2]], room:"3212", credit:1, grade:"A"},
        {year:2025, semester:1, name:"技術文章作成", teacher:"信川創", subteacher:["角張健一"], date:[["木", 3], ["木", 4]], room:"3212", credit:2, grade:"A"},
        {year:2025, semester:1, name:"初年次教育", teacher:"菅原真司", subteacher:["中村直人", "吉田聡"], date:[["木", 6], ["木", 7]], room:"食堂棟３階講義室１", credit:1, grade:"合"},
        {year:2025, semester:1, name:"数学基礎", teacher:"小野寺一浩", subteacher:[], date:[["金", 2], ["金", 3], ["金", 4]], room:"5209", credit:2, grade:"S"},
        {year:2025, semester:1, name:"電気回路", teacher:"武藤巧", subteacher:["渡邉努", "鎌田智之", "若山将征"], date:[["金", 6], ["金", 7], ["金", 8]], room:"5209", credit:2, grade:"S"}
    ],
    [
        {year:2025, semester:2, name:"言語と文化２ドイツ語", teacher:"厚見浩平", subteacher:[], date:[["月", 3], ["月", 4]], room:"5212", credit:2, grade:""},
        {year:2025, semester:2, name:"英語理解２", teacher:"坂井竜太郎", subteacher:[], date:[["月", 6], ["月", 7]], room:"5204", credit:1, grade:""},
        {year:2025, semester:2, name:"データ通信", teacher:"水本旭洋", subteacher:[], date:[["火", 1], ["火", 2]], room:"3212", credit:2, grade:""},
        {year:2025, semester:2, name:"データサイエンス", teacher:"三木大輔", subteacher:[], date:[["火", 6], ["火", 7]], room:"3212", credit:2, grade:""},
        {year:2025, semester:2, name:"キャリアデザイン１", teacher:"長谷川武", subteacher:[], date:[["水", 1], ["水", 2]], room:"722", credit:1, grade:""},
        {year:2025, semester:2, name:"アジャイルワーク１", teacher:"三木大輔", subteacher:["鎌倉浩嗣", "水本旭洋"], date:[["水", 6], ["水", 7], ["水", 8], ["水", 9]], room:"７号館７階メディア実験室", credit:2, grade:""},
        {year:2025, semester:2, name:"微分積分", teacher:"山下温", subteacher:[], date:[["木", 2], ["木", 3]], room:"8109", credit:2, grade:""},
        {year:2025, semester:2, name:"英語表現２", teacher:"森創摩", subteacher:[], date:[["木", 5], ["木", 6]], room:"5303", credit:1, grade:""},
        {year:2025, semester:2, name:"憲法と社会", teacher:"中井良太", subteacher:[], date:[["木", 7], ["木", 8]], room:"7201", credit:2, grade:""}
    ]
]










// 成績表
let result = [
        {year:2025, semester:1, name:"情報工学概論", teacher:"信川創", subteacher:"中村直人、有本泰子、関根晃太、水本旭洋、大西隆之", credit:2, grade:"B"},
        {year:2025, semester:1, name:"英語理解１", teacher:"小田井勝彦", subteacher:"", credit:1, grade:"S"},
        {year:2025, semester:1, name:"言語と文化１ドイツ語", teacher:"髙松佑介", subteacher:"", credit:2, grade:"S"},
        {year:2025, semester:1, name:"環境科学概論", teacher:"笠嶋義夫", subteacher:"", credit:2, grade:"S"},
        {year:2025, semester:1, name:"日本語表現法", teacher:"本橋龍晃", subteacher:"", credit:1, grade:"S"},
        {year:2025, semester:1, name:"プログラミング言語", teacher:"須田宇宙", subteacher:"", credit:2, grade:"A"},
        {year:2025, semester:1, name:"フィジカルコンピューティング", teacher:"水本旭洋", subteacher:"", room:"3212", credit:2, grade:"S"},
        {year:2025, semester:1, name:"論理回路", teacher:"鎌倉浩嗣", subteacher:"", credit:2, grade:"S"},
        {year:2025, semester:1, name:"英語表現１", teacher:"布川由美子", subteacher:"", credit:1, grade:"S"},
        {year:2025, semester:1, name:"アイディアソン", teacher:"信川創", subteacher:"須田宇宙、中村直人", credit:2, grade:"A"},
        {year:2025, semester:1, name:"数理・データサイエンス・AI入門", teacher:"内田洋行 能町講師", subteacher:"角張健一", credit:1, grade:"A"},
        {year:2025, semester:1, name:"技術文章作成", teacher:"信川創", subteacher:"", credit:2, grade:"A"},
        {year:2025, semester:1, name:"初年次教育", teacher:"菅原真司", subteacher:"中村直人、吉田聡", credit:1, grade:"合"},
        {year:2025, semester:1, name:"数学基礎", teacher:"小野寺一浩", subteacher:"", credit:2, grade:"S"},
        {year:2025, semester:1, name:"電気回路", teacher:"武藤巧", subteacher:"渡邉努、鎌田智之、若山将征", credit:2, grade:"S"},

        {year:2025, semester:2, name:"言語と文化２ドイツ語", teacher:"厚見浩平", subteacher:"", credit:2, grade:""},
        {year:2025, semester:2, name:"英語理解２", teacher:"坂井竜太郎", subteacher:"", credit:1, grade:""},
        {year:2025, semester:2, name:"データ通信", teacher:"水本旭洋", subteacher:"", credit:2, grade:""},
        {year:2025, semester:2, name:"データサイエンス", teacher:"三木大輔", subteacher:"", credit:2, grade:""},
        {year:2025, semester:2, name:"キャリアデザイン１", teacher:"長谷川武", subteacher:"", credit:1, grade:""},
        {year:2025, semester:2, name:"アジャイルワーク１", teacher:"三木大輔", subteacher:"鎌倉浩嗣、水本旭洋", credit:2, grade:""},
        {year:2025, semester:2, name:"微分積分", teacher:"山下温", subteacher:"", credit:2, grade:""},
        {year:2025, semester:2, name:"英語表現２", teacher:"森創摩", subteacher:"", credit:1, grade:""},
        {year:2025, semester:2, name:"憲法と社会", teacher:"中井良太", subteacher:"", credit:2, grade:""},
        {year:2025, semester:2, name:"Ｗｅｂプログラミング", teacher:"須田宇宙", subteacher:"", credit:2, grade:""}
]

// 一覧表示
app.get('/result', (req, res) => {
    res.render('result_list', { data:result });
});

// 詳細表示
app.get("/result/detail/:number", (req, res) => {
    let number = req.params.number;
    let detail = result[number];
    res.render('result_detail', {data:detail, id:number} );
});

// 新規登録
app.get("/result/add", (req, res) => {
    let emptyData = {year:2025, semester:1, name:"", teacher:"", subteacher:"", credit:1, grade:""};
    res.render('result_add', {data:emptyData});
});

app.post("/result/add/confirm", (req, res) => {
    let inputData = {
        year: req.body.year,
        semester: req.body.semester,
        name: req.body.name,
        teacher: req.body.teacher,
        subteacher: req.body.subteacher,
        credit: req.body.credit,
        grade: req.body.grade
    };
    res.render('result_add_confirm', {data:inputData});
});

app.post("/result/add/return", (req, res) => {
    res.render('result_add', {data:req.body});
});

app.post("/result/create", (req, res) => {
    let newData = {
        year: req.body.year,
        semester: req.body.semester,
        name: req.body.name,
        teacher: req.body.teacher,
        subteacher: req.body.subteacher,
        credit: req.body.credit,
        grade: req.body.grade
    };
    result.push(newData);
    res.redirect('/result');
});

// 編集
app.get("/result/edit/:number", (req, res) => {
    let number = req.params.number;
    let detail = result[number];
    res.render('result_edit', {data:detail, id:number});
});

app.post("/result/edit/confirm/:number", (req, res) => {
    let number = req.params.number;
    let inputData = {
        year: req.body.year,
        semester: req.body.semester,
        name: req.body.name,
        teacher: req.body.teacher,
        subteacher: req.body.subteacher,
        credit: req.body.credit,
        grade: req.body.grade
    };
    res.render('result_edit_confirm', {data:inputData, id:number});
});

app.post("/result/edit/return/:number", (req, res) => {
    let number = req.params.number;
    res.render('result_edit', {data:req.body, id:number});
});

app.post("/result/update/:number", (req, res) => {
    let number = req.params.number;
    result[number].year = req.body.year;
    result[number].semester = req.body.semester;
    result[number].name = req.body.name;
    result[number].teacher = req.body.teacher;
    result[number].subteacher = req.body.subteacher;
    result[number].credit = req.body.credit;
    result[number].grade = req.body.grade;
    res.redirect(`/result/detail/${number}`);
});

// 削除
app.get("/result/delete/confirm/:number", (req, res) => {
    let number = req.params.number;
    let detail = result[number];
    res.render('result_delete_confirm', { data: detail, id: number });
});

app.post("/result/delete/:number", (req, res) => {
    let number = req.params.number;
    result.splice(number, 1);
    res.redirect('/result');
});










// 教員表
let teachers = [
    {department:"情報工", name:"有本泰子", job:"教授", laboratory:"多感覚情動情報処理", subject:"データサイエンス"},
    {department:"情報工", name:"大西隆之", job:"教授", laboratory:"メディア情報処理", subject:""},
    {department:"情報工", name:"鎌倉浩嗣", job:"教授", laboratory:"光通信ネットワーク", subject:"アジャイルワーク１"},
    {department:"情報工", name:"佐波孝彦", job:"教授", laboratory:"ワイヤレス通信", subject:""},
    {department:"情報工", name:"前川仁孝", job:"教授", laboratory:"高性能計算", subject:""},
    {department:"情報工", name:"信川創", job:"教授", laboratory:"計算論的神経科学", subject:""},
    {department:"情報工", name:"中村直人", job:"教授", laboratory:"マルチメディア・VR", subject:""},
    {department:"情報工", name:"須田宇宙", job:"准教授", laboratory:"シミュレータ教材", subject:"Ｗｅｂプログラミング、アイディアソン補修、プログラミング言語補修"},
    {department:"情報工", name:"関根晃太", job:"准教授", laboratory:"精度保証付き数値計算", subject:""},
    {department:"情報工", name:"水本旭洋", job:"准教授", laboratory:"ライフトランスフォーメーション", subject:"アジャイルワーク１"},
    {department:"情報工", name:"三木大輔", job:"助教", laboratory:"知能情報科学", subject:"データサイエンス、アジャイルワーク１"}
]

// 一覧表示
app.get('/teacher', (req, res) => {
    res.render('teacher_list', {data:teachers});
});

// 詳細表示
app.get("/teacher/detail/:number", (req, res) => {
    let number = req.params.number;
    let detail = teachers[number];
    res.render('teacher_detail', {data:detail, id:number});
});

// 新規登録
app.get("/teacher/add", (req, res) => {
    let emptyData = {department:"", name:"", job:"", laboratory:"", subject:""};
    res.render('teacher_add', {data:emptyData});
});

app.post("/teacher/add/confirm", (req, res) => {
    let inputData = {
        department: req.body.department,
        name: req.body.name,
        job: req.body.job,
        laboratory: req.body.laboratory,
        subject: req.body.subject
    };
    res.render('teacher_add_confirm', {data:inputData});
});

app.post("/teacher/add/return", (req, res) => {
    res.render('teacher_add', {data:req.body});
});

app.post("/teacher/create", (req, res) => {
    let newData = {
        department: req.body.department,
        name: req.body.name,
        job: req.body.job,
        laboratory: req.body.laboratory,
        subject: req.body.subject
    };
    teachers.push(newData);
    res.redirect('/teacher');
});

// 編集
app.get("/teacher/edit/:number", (req, res) => {
    let number = req.params.number;
    let detail = teachers[number];
    res.render('teacher_edit', {data:detail, id:number});
});

app.post("/teacher/edit/confirm/:number", (req, res) => {
    let number = req.params.number;
    let inputData = {
        department: req.body.department,
        name: req.body.name,
        job: req.body.job,
        laboratory: req.body.laboratory,
        subject: req.body.subject
    };
    res.render('teacher_edit_confirm', {data:inputData, id:number});
});

app.post("/teacher/edit/return/:number", (req, res) => {
    let number = req.params.number;
    res.render('teacher_edit', {data:req.body, id:number});
});

app.post("/teacher/update/:number", (req, res) => {
    let number = req.params.number;
    teachers[number].department = req.body.department;
    teachers[number].name = req.body.name;
    teachers[number].job = req.body.job;
    teachers[number].laboratory = req.body.laboratory;
    teachers[number].subject = req.body.subject;
    res.redirect(`/teacher/detail/${number}`);
});

// 削除
app.get("/teacher/delete/confirm/:number", (req, res) => {
    let number = req.params.number;
    let detail = teachers[number];
    res.render('teacher_delete_confirm', {data:detail, id:number});
});

app.post("/teacher/delete/:number", (req, res) => {
    let number = req.params.number;
    teachers.splice(number, 1);
    res.redirect('/teacher');
});










// お小遣い帳
let wallet = [
    {date:"2025-12-10", item:"カレー", price:250, purpose:"昼食", memo:"うまかった"},
    {date:"2025-12-12", item:"おーいお茶", price:120, purpose:"休憩", memo:""},
    {date:"2025-12-15", item:"ゲーム課金", price:30000, purpose:"ガチャ", memo:"100連爆死 ／(^o^)＼"}
];

// 一覧表示
app.get('/wallet', (req, res) => {
    let total = 0;
    for (let row of wallet) {
        let price = parseInt(row.price);
        if (!isNaN(price)) {
            total += price;
        }
    }
    res.render('wallet_list', {data:wallet, total:total});
});

// 詳細表示
app.get("/wallet/detail/:number", (req, res) => {
    let number = req.params.number;
    res.render('wallet_detail', {data:wallet[number], id:number});
});

// 新規登録
app.get("/wallet/add", (req, res) => {
    let emptyData = {date:"", item:"", price:0, purpose:"", memo:""};
    res.render('wallet_add', {data:emptyData});
});

app.post("/wallet/add/confirm", (req, res) => {
    let priceVal = parseInt(req.body.price);
    if (isNaN(priceVal)) {
        priceVal = 0;
    }

    let inputData = {
        date: req.body.date,
        item: req.body.item,
        price: priceVal,
        purpose: req.body.purpose,
        memo: req.body.memo
    };
    res.render('wallet_add_confirm', {data:inputData});
});

app.post("/wallet/add/return", (req, res) => {
    res.render('wallet_add', {data:req.body});
});

app.post("/wallet/create", (req, res) => {
    let priceVal = parseInt(req.body.price);
    if (isNaN(priceVal)) {
        priceVal = 0;
    }

    let newData = {
        date: req.body.date,
        item: req.body.item,
        price: priceVal,
        purpose: req.body.purpose,
        memo: req.body.memo
    };
    wallet.push(newData);
    res.redirect('/wallet');
});

// 編集
app.get("/wallet/edit/:number", (req, res) => {
    let number = req.params.number;
    res.render('wallet_edit', {data:wallet[number], id:number});
});

app.post("/wallet/edit/confirm/:number", (req, res) => {
    let number = req.params.number;
    let priceVal = parseInt(req.body.price);
    if (isNaN(priceVal)) {
        priceVal = 0;
    }

    let inputData = {
        date: req.body.date,
        item: req.body.item,
        price: priceVal,
        purpose: req.body.purpose,
        memo: req.body.memo
    };
    res.render('wallet_edit_confirm', {data:inputData, id:number});
});

app.post("/wallet/edit/return/:number", (req, res) => {
    let number = req.params.number;
    res.render('wallet_edit', {data:req.body, id:number});
});

app.post("/wallet/update/:number", (req, res) => {
    let number = req.params.number;
    let priceVal = parseInt(req.body.price);
    if (isNaN(priceVal)) {
        priceVal = 0;
    }
    
    wallet[number].date = req.body.date;
    wallet[number].item = req.body.item;
    wallet[number].price = priceVal;
    wallet[number].purpose = req.body.purpose;
    wallet[number].memo = req.body.memo;
    
    res.redirect(`/wallet/detail/${number}`);
});

// 削除
app.get("/wallet/delete/confirm/:number", (req, res) => {
    let number = req.params.number;
    res.render('wallet_delete_confirm', {data:wallet[number], id:number});
});

app.post("/wallet/delete/:number", (req, res) => {
    let number = req.params.number;
    wallet.splice(number, 1);
    res.redirect('/wallet');
});










// トップページ
app.get("/", (req, res) => {
    res.redirect('/public/top.html');
});

// 不正なURLの場合
app.use((req, res, next) => {
    res.status(404).send('<h1>ページが見つかりません</h1><p><a href="/">トップページへ</a></p>');
});








app.listen(8080, () => console.log("Example app listening on port 8080!"));