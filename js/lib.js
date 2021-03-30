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

    function isEmpty(val){   //공백판단
        if(val=="" || val==null || val ==undefined){
            return true;
        }else{
            return false;
        }
    }


    function hitTest(me, target) {
        //두물체간 충돌 여부 판단 
        var me_x= parseInt(me.style.left);
        var me_y= parseInt(me.style.top);
        var me_width=parseInt(me.style.width);
        var me_height=parseInt(me.style.height);
    
        var target_x= parseInt(target.style.left);
        var target_y= parseInt(target.style.top);
        var target_width=parseInt(target.style.width);
        var target_height=parseInt(target.style.height);
    
    
        var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
        var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
        var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
        var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
          return (result1 || result2) && (result3 || result4);
    }

    function hitTestside(me, target) {
        //두물체간 충돌 여부 판단 
        var me_x= parseInt(me.style.left);
        var me_y= parseInt(me.style.top);
        var me_width=parseInt(me.style.width);
        var me_height=parseInt(me.style.height);
    
        var target_x= parseInt(target.style.left);
        var target_y= parseInt(target.style.top);
        var target_width=parseInt(target.style.width);
        var target_height=parseInt(target.style.height);
    
    
        var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
        var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
        var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
        var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
        
        return (result1 || result2) && (result3 || result4);
    }