//Code chạy trong cửa sổ chính trang web
var InputAnswer = `var i = document.getElementsByTagName("input");
    var submit = document.getElementById("dSubmit");
    var viewA = document.getElementById("dViewAnswer");
    var answer = [];

    function Input() {

        for (var j = 0; j < i.length; j++) {
            if (i[j].className === "danw dinline") {
                i[j].value = "Answer";
            }

        }
        Click(submit);
        Click(viewA);


    }

    function Copy() {
        answer = [];
        for (var j = 0; j < i.length; j++) {
            if (i[j].className === "danw dinline") {
                answer.push(i[j].value);

            }
        }
        Click(viewA);

    }
    function Click(a) {
        let event = new Event("click");
        a.dispatchEvent(event);
    }

    function Parse() {
        for (var j = 0; j < answer.length; j++) {
            i[j].value = answer[j];
        }
        Click(submit);
    }`;






var vocabulary = `var au = document.getElementsByClassName("daudio");
        for (var i = 0; i < au.length; i++) {
            au[i].click();
        }
        var submit = document.getElementById("dSubmit");
        submit.click();`;

var selectVocabulary = `
        //auto nghe và chọn từ 
        var scrp = document.createElement("script");
        scrp.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        var head = document.getElementsByTagName("head");
        head[0].appendChild(scrp);//thêm thư viện jQuery
        var auto = document.getElementsByTagName("span");
        for (var i = 0; i < auto.length; i++) {
            auto[i].click();

        }
        var parent = document.getElementsByClassName("dans");
        for (var i = 0; i < parent.length; i++) {
            if (parent[i].style.borderColor != "red") {
                parent[i].getElementsByTagName("span")[0].click();
            }
        }`;
//Chạy code script trong tab hiện hành
function ScriptExecute(codeString) {

    chrome.tabs.executeScript(
        null, {
            code: codeString
        });
};

function voca(e) {
    ScriptExecute(vocabulary);
}

function selectvoca(e) {
    ScriptExecute(selectVocabulary);
}

function input(e) {
    ScriptExecute(InputAnswer + "Input();")
}

function copy(e) {
    ScriptExecute("Copy();");
}

function parse(e) {
    ScriptExecute("Parse();");
}



var select = `var submit = document.getElementById("dSubmit");
var viewA = document.getElementById("dViewAnswer");
var Label=document.getElementsByTagName("label");
for(let i=0;i<Label.length;i++)
{
	Label[i].click();
}
submit.click();
viewA.click();`;
var cut = `var body =document.querySelector("#mbody");
var c = document.querySelector(".dquestion");
var d;
d = Object.assign(c,d);
body.removeChild(c);`;
var parseCut = `viewA.click();
body.appendChild(d);
submit.click();`;

function Select(e) {
    ScriptExecute(select);
}

function Cut(e) {
    ScriptExecute(cut);
}

function ParseCut(e) {
    ScriptExecute(parseCut);
}

document.addEventListener('DOMContentLoaded', function () {
    var SelectVocabulary = document.getElementById("selectVocabulary");
    var Vocabulary = document.getElementById("vocabulary");
    SelectVocabulary.addEventListener('click', selectvoca);
    Vocabulary.addEventListener('click', voca);
    document.getElementById("input").addEventListener('click', input);
    document.getElementById("copy").addEventListener('click', copy);
    document.getElementById("parse").addEventListener('click', parse);
    document.getElementById("select").addEventListener('click', Select);
    document.getElementById("cut").addEventListener('click', Cut);
    document.getElementById("parseCut").addEventListener('click', ParseCut);


})
