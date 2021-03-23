/*
현실 객체중 이퀄라이저 막대기 정의
이러한 객체를 가리켜 사용자 정의 객체라 하며, 
자료형은 객체형.. 이떄 bar 객체 자료형을 개발자가 정의했다는것은 
기존에 세상에 없던 새로운 자료형을 정의했다고하여 bar형이라고함
즉 개발자가 창조주가 되는것임
*/
class Bar{
    /*클래스란 기존의 고전적인 절차지향 언어에서 사용하던 재료들, 즉 변수와 함수를 묶어
    하나의 단위로 정의한 것에 불과하므로, 신기술은 아님 현실을 반영하는 개발자의 관점이 변화된
    것이다 자바수업에서 무언거 없던 기술을 새롭게 배운다고 생각 X!! */
    
    constructor(container,width,height,x,y,bg, targetH){
        this.width=width;
        this.height=height;
        this.x = x;
        this.y = y;
        this.bg=bg;
        this.container=container;
        this.a = 0.1; //비율계수
        this.targetH = targetH;


        this.div = document.createElement("div");
        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";

        this.div.style.position= "absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top = this.y +"px";

        this.div.style.background= this.bg;

        this.div.style.border="1px solid black";
        this.div.style.boxSizing="border-box";//박스모델의 크기에 영향을 주지않기

        this.container.appendChild(this.div);
    }

    //객체가 보유한 변수들을 이용하여 변화를 주면, 움직임을 표현할수있다..
    //즉ㅈ 움직임 방식을 결정할수있는 객체안의 함수를 가리켜 메서드라한다
    render(){
        //화면에 보여질 처리 = 게임분야에서는 랜더링이라고함
        //물체위치=기존물체위치 + 비율 *(남은거리(목표지점-물체기존위치))
        this.div.style.height= parseFloat(this.div.style.height)+this.a*(this.targetH-parseFloat(this.div.style.height))+"px";
    
    }
}
