let  iseunjae = confirm("너는 유은재입니까?")

if(iseunjae)
{
    let isrealeunjae = confirm("너 진짜 유은재야?")

    if(isrealeunjae)
        {
            for(let i=0;i<15;i++)
            {
                document.write("*")
            }
            document.write("<br>")
            document.write("<h1>10512유은재</h1>")
            document.write("<br>")
            for(let i=0;i<15;i++)
            {
                document.write("*")
            }
            document.write("전화번호 010-7252-5927")
            document.write("<br>")
            document.write("집주소 : 동대문구 휘경2동 대충 근처 아파트 10202동 10393호")
            document.write("<br>")
            document.write("휘경중 나옴")
            document.write("<br>")
            document.write("현 상태 너무 졸림(오늘 소전 어떡하지...)")
            document.write("<br>")
            document.write("국어 숙제도 안함 ㅠ")
            document.body.appendChild(img)
        }
        else
        {
            document.write("<h1>뭐야 유은재도 아니면서")
            document.write("<br>")
            document.write("나가</h1>")
            setTimeout(window.close,1000);
        }

    
}
else
{
    document.write("<h1>뭐야 유은재도 아니면서")
    document.write("<br>")
    document.write("나가</h1>")
    setTimeout(window.close,1000);
    
}


