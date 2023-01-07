AFRAME.registerComponent('terrain-rotation-reader', {
    schema:{
        speed:{type:'number', default:0},
    },

    init:function(){
        window.addEventListener('keydown', (x)=>{
            if(x.key=='ArrowRight'){
                if(this.data.speed<0.1){
                    this.data.speed+=0.01
                }
            }
            if(x.key=='ArrowLeft'){
                if(this.data.speed>-0.1){
                    this.data.speed-=0.01
                }
            }
        })
    },

    tick: function(){
        var rotation= this.el.getAttribute('rotation')
        rotation.y+=this.data.speed
        this.el.setAttribute('rotation',{x:rotation.x, y:rotation.y, z:rotation.z})
    }

})

AFRAME.registerComponent('plane-rotation-reader',{
    schema:{
        rotationSpeed: {type:'number', default:0},
        ascentionSpeed: {type:'number', default:0}
    },

    init: function(){
        window.addEventListener('keydown', (x)=>{
            this.data.rotationSpeed=this.el.getAttribute('rotation')
            this.data.ascentionSpeed=this.el.getAttribute('position')
            var rotation= this.data.rotationSpeed
            var position= this.data.ascentionSpeed

            if(x.key=='ArrowRight'){
                if(rotation.x<10){
                    rotation.x+=0.5
                    this.el.setAttribute("rotation", rotation)
                }
            }
            if(x.key=='ArrowLeft'){
                if(rotation.x>-10){
                    rotation.x -=0.5
                    this.el.setAttribute("rotation", rotation)
                }
            }
            if(x.key=='ArrowUp'){
                if(rotation.z<20){
                    rotation.z+=0.5
                    this.el.setAttribute("rotation", rotation)
                }
                if(position.y<2){
                    position.y+=0.01
                    this.el.setAttribute('position', position)
                }
            }
            if(x.key=='ArrowDown'){
                if(rotation.z>-10){
                    rotation.z-=0.5
                    this.el.setAttribute("rotation", rotation)
                }
                if(position.y>-2){
                    position.y-=0.01
                    this.el.setAttribute('position', position)
                }
            }
        })
    }
})