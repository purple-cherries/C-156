AFRAME.registerComponent('game-play', {
    schema:{
        elementId:{type:'string', default:'#ring1'},
    },
    init:function(){
        var duration= 120
        var timer=document.querySelector("#timer")
        this.startTimer(duration, timer)
    },
    update:function(){
        this.isCollided(this.data.elementId)

    },
    isCollided:function(id){
        const element=document.querySelector(id)
        element.addEventListener('collide', x=>{
            if(id.includes('#ring')){
                element.setAttribute('visible', false)
                this.updateScore()
                this.updateTargets()
            }
            else if(id.includes('#bird')){
                this.gameOver()
            }
        })
    },

    starTimer:function(duration,timer){
        var minutes, seconds
        setInterval(()=>{
            if(duration>=0){
                minutes= parseInt(duration/60)
                seconds= pasreInt(duration%60)
                if(minutes<10){
                    minutes='0'+minutes
                }
                if(seconds<10){
                    seconds='0'+seconds
                }
                timer.setAttribute('text', {
                    value:minutes+":"+seconds
                })
                duration-=1
            }
            else{
                this.gameOver()
            }
        },1000)
    },

    gameOver:function(){
        var plane=document.querySelector('#plane')
        var element=document.querySelector("#game_over_text")
        plane.setAttribute('dynamic-body', {mass:1})
        element.setAttribute('visible', true)
    },

    updateTargets:function(){
        var element=document.querySelector('#targets')
        var count=element.getAttribute("text").value()
        var targets= parseInt(count)
        targets-=1
        element.setAttribute('text', {value:targets})
    },

    updateScore:function(){
        var element=document.querySelector('#score')
        var count=element.getAttribute("text").value()
        var score= parseInt(count)
        score+=10
        element.setAttribute('text', {value:score})
    },

})