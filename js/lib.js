/*
    앞으로 유용하고 재사용성이 높은 코드는 모아두자! 
    라이브러리
*/ 
    function getRandom(n){ //n은 0~n미만까지의 랜덤 수 반환할 값
        var r = parseInt(Math.random()*n);
        //console.log(r);
        return r;

    }

    //오브젝트 삭제(1,화면 삭제, 2.메모리삭제)
    function removeObject(container, child, arr, index){  //이 함수를 호출하는 자는 어디(컨테이너)로부터 지울것이지를 명시
        //화면삭제 - 부모div로부터 제거
        //부모div.removeChild(자식/지울대상);
        container.removeChild(child);


        //배열삭제 -
        //배열.splice(면번쨰녀석,몇개)

        arr.splice(index,1);
        
    }