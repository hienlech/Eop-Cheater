//Code chạy trong cửa sổ chính trang web
var answer = `
var count = 0;
console.log("Start");
var scrp = document.createElement("script");
        scrp.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        var head = document.getElementsByTagName("head");
        head[0].appendChild(scrp);//thêm thư viện jQuery

function DoShit()
{
            //Lấy các phần tử để thao tác
            var submit = document.getElementById("dSubmit");
            var viewA = document.getElementById("dViewAnswer");
            var body =document.querySelector("#mbody");
            var c = document.querySelector(".dquestion");
            var d;

        //Nhập đáp án
        function Input() {  
        //     var Label=document.getElementsByTagName("label");
        //     for(let i=0;i<Label.length;i++)
        //     {
        //         Label[i].click();
        //     }
        //    submit.click();
            viewA.click(); // click để hiện đáp án
        }
        function Copy() { 
            
                d = Object.assign(c,d);
                body.removeChild(c); //xóa element sau khi có đáp án  
            

        }

        //trở về trang trả lời và append lại phần tử có đáp án
        function Parse() {

            viewA.click();
            body.appendChild(d);
            submit.click();
            count++;
            console.log("Đã xong " + count + " Bài");
            
            
        }
        //Lấy thời gian làm bài ngẫu nhiên từ 3 đến 5 phút
        function getRandomTime() {
           var x = Math.floor(Math.random() * (300000-150000) + 150000);
          //var x = Math.floor((Math.random() * 20000) + 10000);

            console.log(x);
            return x;
        }
        //Chờ cho các button hiện lên để thao tác
        function wait(ms) {
            return new Promise(r => setTimeout(r, ms))  
        }
        async function Answer()
        {
            
            try {
                await Input();
                await wait(1000);
                await Copy();
                var k = getRandomTime();
                console.log("thời gian delay là " + k/60000+" phút");
                console.log("Đang chờ...");
                await wait(k);
                await Parse(); 
                console.log("Đang chờ chuyển trang , nếu mạng chậm gây lỗi thì refresh và bật tool lại..."); 
                await wait(15000);
            } catch (error) {
                submit.click();
                await wait(15000);
            }
                
                DoShit();
        
        
            
        }
        Answer();
        
        
}
alert("Đã bật auto , vui lòng không bấm auto 2 lần để tránh xảy ra lỗi ")
document.getElementsByTagName("body")[0].style.backgroundColor="#e74c3c";
DoShit();



`;






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
var stopEx =`
    location.reload();
`
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

function dostaff(e) {
    ScriptExecute(answer)
}

function stopDo(e) {
    ScriptExecute(stopEx)
}







document.addEventListener('DOMContentLoaded', function () {
    var SelectVocabulary = document.getElementById("selectVocabulary");
    var Vocabulary = document.getElementById("vocabulary");
    SelectVocabulary.addEventListener('click', selectvoca);
    Vocabulary.addEventListener('click', voca);
    document.getElementById("dostaff").addEventListener('click', dostaff);
    document.getElementById("stop").addEventListener('click', stopDo);

    


})


// //test promise


// var Answer = new Promise(function(resolve,reject){
//         for (var j = 0; j < i.length; j++) {
//         if (i[j].className === "danw dinline") {
//             i[j].value = "Answer";
//         }

//     }
//     submit.click();
//     viewA.click();
//     resolve("OK");
// })
// Answer.then(function(fullfilled){
//     alert(fullfilled);
//     answer = [];
//         for (var j = 0; j < i.length; j++) {
//             if (i[j].className === "danw dinline") {
//                 answer.push(i[j].value);

//             }
//         }
//         viewA.click();

// }).then(
//     function(fullfilled)
//     {
//         alert(fullfilled);
//         for (var j = 0; j < answer.length; j++) {
//             i[j].value = answer[j];
//         }
//         submit.click();
//     }
// ).catch(function(e)
// {
//     alert(e.message);
// })

// Dùng Async , await đơn giản hơn





//copy element chứa đáp án





// $(document).ajaxSuccess(function() {
//     console.log("Tải xong")
//   }); éo hiểu sao không hoạt động
//nên khi mạng chậm có thể sẽ gặp lỗi